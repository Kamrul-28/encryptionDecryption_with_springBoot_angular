import { Component } from '@angular/core';
import { Encryption } from '../encryption';
import { EncryptionService } from '../encryption.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-encryption-details',
  templateUrl: './encryption-details.component.html',
  styleUrls: ['./encryption-details.component.css']
})
export class EncryptionDetailsComponent {

  // id: number;
  // encryption: Encryption
  // constructor(private route: ActivatedRoute,private encryptionService: EncryptionService,
  //   private router: Router) { }

  //   ngOnInit(): void {
  //     this.id = this.route.snapshot.params['id'];

  //     this.encryption = new Encryption();
  //     this.encryptionService.getEncryptionById(this.id).subscribe( data => {
  //       this.encryption = data;
  //     });
  //   }

    id: number;
    encryption: Encryption = new Encryption();
    constructor(private route: ActivatedRoute,private encryptionService: EncryptionService,
    private router: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.encryptionService.getEncryptionById(this.id).subscribe(data => {
        this.encryption = data;
      }, error => console.log(error));
    }

    onSubmit(){
      this.encryptionService.decryptEncryption(this.id, this.encryption).subscribe( data =>{
        this.goToEncryptionList();
      }
      , error => console.log(error));
    }


    goToEncryptionList(){
      this.router.navigate(['/encryptions']);
    }

}
