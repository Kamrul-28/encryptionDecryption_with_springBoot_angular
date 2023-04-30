import { Component } from '@angular/core';
import { Encryption } from '../encryption';
import { EncryptionService } from '../encryption.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-encryption-list',
  templateUrl: './encryption-list.component.html',
  styleUrls: ['./encryption-list.component.css']
})
export class EncryptionListComponent {

  encryptions: Encryption[] | undefined;

  constructor(private encryptionService: EncryptionService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEncryptions();
  }

  private getEncryptions(){
    this.encryptionService.getEncryptionList().subscribe(data => {
      this.encryptions = data;
    });
  }

  encryptionDetails(id: number){
    this.router.navigate(['encryption-details', id]);
  }

  updateEncryption(id: number){
    this.router.navigate(['update-encryption', id]);
  }

  deleteEncryption(id: number){
    this.encryptionService.deleteEncryption(id).subscribe( data => {
      console.log(data);
      this.getEncryptions();
    })
  }

}
