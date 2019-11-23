import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getCredentialsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCredential(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCredential(credential: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, credential);
  }

  updateCredential(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCredential(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'json' });
  }
}
