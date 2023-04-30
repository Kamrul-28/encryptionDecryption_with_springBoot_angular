import { Component } from '@angular/core';
import { Encryption } from '../encryption';
import { EncryptionService } from '../encryption.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-encryption',
  templateUrl: './create-encryption.component.html',
  styleUrls: ['./create-encryption.component.css']
})
export class CreateEncryptionComponent {
  encryption: Encryption = new Encryption();
  constructor(private encryptionService: EncryptionService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEncryption(){
    this.encryptionService.createEncryption(this.encryption).subscribe( data =>{
      console.log(data);
      this.goToEncryptionList();
    },
    error => console.log(error));
  }

  goToEncryptionList(){
    this.router.navigate(['/encryptions']);
  }

  onSubmit(){
    console.log(this.encryption);
    this.saveEncryption();
  }
}
