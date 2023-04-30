import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncryptionListComponent } from './encryption-list/encryption-list.component';
import { CreateEncryptionComponent } from './create-encryption/create-encryption.component';
import { UpdateEncryptionComponent } from './update-encryption/update-encryption.component';
import { EncryptionDetailsComponent } from './encryption-details/encryption-details.component';

const routes: Routes = [
  {path: 'encryptions', component: EncryptionListComponent},
  {path: 'create-encryption', component: CreateEncryptionComponent},
  {path: '', redirectTo: 'encryptions', pathMatch: 'full'},
  {path: 'update-encryption/:id', component: UpdateEncryptionComponent},
  {path: 'encryption-details/:id', component: EncryptionDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
