package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import java.security.MessageDigest;
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.NoSuchAlgorithmException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Encryption;
import com.example.demo.repository.EncryptionRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class EncryptionController {
    @Autowired
	private EncryptionRepository encryptionRepository;


	// get all encryptions
	@GetMapping("/encryptions")
	public List<Encryption> getAllEncryptions(){
		return encryptionRepository.findAll();
	}


	@PostMapping("/encryptions")
	public Encryption createEmployee(@RequestBody Encryption encryption) {
		try {
			encryption.setencryptedValue(toHexString(EncryptionController.getSHA(encryption.getrawData())));
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		return encryptionRepository.save(encryption);
	}


	// get encryption by id rest api
	@GetMapping("/encryptions/{id}")
	public ResponseEntity<Encryption> getEncryptionById(@PathVariable Long id) {
		Encryption encryption = encryptionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Data For Encryption not exist with id :" + id));
		return ResponseEntity.ok(encryption);
	}

	// update encryption rest api
	
	@PutMapping("/encryptions/{id}")
	public ResponseEntity<Encryption> updateEncryption(@PathVariable Long id, @RequestBody Encryption encryptionDetails){
		Encryption encryption = encryptionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Encryption Data not exist with id :" + id));
		
		encryption.setrawData(encryptionDetails.getrawData());
		encryption.setsecurityKey(encryptionDetails.getsecurityKey());
		try {
			encryption.setencryptedValue(toHexString(EncryptionController.getSHA(encryptionDetails.getrawData())));
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		
		Encryption updatedEncryption = encryptionRepository.save(encryption);
		return ResponseEntity.ok(updatedEncryption);
	}
	

	// delete encryption rest api
	
	@DeleteMapping("/encryptions/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEncryption(@PathVariable Long id){
		Encryption encryption = encryptionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee Data not exist with id :" + id));
		
		encryptionRepository.delete(encryption);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	public static byte[] getSHA(String input) throws NoSuchAlgorithmException
    {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
  
        return md.digest(input.getBytes(StandardCharsets.UTF_8));
    }
      
    public static String toHexString(byte[] hash)
    {
        BigInteger number = new BigInteger(1, hash);

        StringBuilder hexString = new StringBuilder(number.toString(16));
  
        while (hexString.length() < 64)
        {
            hexString.insert(0, '0');
        }
  
        return hexString.toString();
    }


}
