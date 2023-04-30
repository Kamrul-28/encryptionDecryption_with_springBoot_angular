package com.example.demo.model;
import jakarta.persistence.*;

@Entity
@Table(name = "encryption_decryptions")
public class Encryption {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

    @Column(name = "raw_data")
	private String rawData;

	@Column(name = "security_key")
	private String securityKey;
	
	@Column(name = "encrypted_value")
	private String encryptedValue;

    public Encryption() {
		
	}

    public Encryption(String rawData, String securityKey, String encryptedValue) {
		super();
		this.rawData = rawData;
		this.securityKey = securityKey;
		this.encryptedValue = encryptedValue;
	}

    public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getrawData() {
		return rawData;
	}
	public void setrawData(String rawData) {
		this.rawData = rawData;
	}
	public String getsecurityKey() {
		return securityKey;
	}
	public void setsecurityKey(String securityKey) {
		this.securityKey = securityKey;
	}
	public String getencryptedValue() {
		return encryptedValue;
	}
	public void setencryptedValue(String encryptedValue) {
		this.encryptedValue = encryptedValue;
	}
}
