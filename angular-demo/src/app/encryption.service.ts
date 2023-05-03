import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Encryption } from './encryption';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private baseURL = "http://localhost:8080/api/v1/encryptions";

  constructor(private httpClient: HttpClient) { }

  getEncryptionList(): Observable<Encryption[]>{
    return this.httpClient.get<Encryption[]>(`${this.baseURL}`);
  }

  createEncryption(encryption: Encryption): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, encryption);
  }

  getEncryptionById(id: number): Observable<Encryption>{
    return this.httpClient.get<Encryption>(`${this.baseURL}/${id}`);
  }

  updateEncryption(id: number, encryption: Encryption): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, encryption);
  }

  deleteEncryption(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  decryptEncryption(id: number, encryption: Encryption): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/decrypt/${id}`, encryption);
  }
}
