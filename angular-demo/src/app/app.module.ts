import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EncryptionListComponent } from './encryption-list/encryption-list.component';
import { CreateEncryptionComponent } from './create-encryption/create-encryption.component';
import { UpdateEncryptionComponent } from './update-encryption/update-encryption.component';
import { EncryptionDetailsComponent } from './encryption-details/encryption-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EncryptionListComponent,
    CreateEncryptionComponent,
    UpdateEncryptionComponent,
    EncryptionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
