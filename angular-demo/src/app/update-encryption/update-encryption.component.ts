import { Component } from '@angular/core';
import { Encryption } from '../encryption';
import { EncryptionService } from '../encryption.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-encryption',
  templateUrl: './update-encryption.component.html',
  styleUrls: ['./update-encryption.component.css']
})
export class UpdateEncryptionComponent {
  id: number;
  encryption: Encryption = new Encryption();

  constructor(private encryptionService: EncryptionService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.encryptionService.getEncryptionById(this.id).subscribe(data => {
      this.encryption = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.encryptionService.updateEncryption(this.id, this.encryption).subscribe( data =>{
      this.goToEncryptionList();
    }
    , error => console.log(error));
  }


  goToEncryptionList(){
    this.router.navigate(['/encryptions']);
  }

}
