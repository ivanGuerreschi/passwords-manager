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
}
