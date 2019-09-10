import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  URI = "http://localhost:4000/API"

  constructor(private http: HttpClient) { }

  registerUser(txtUsername, txtPassword) {
    const obj = {
      txtUsername,
      txtPassword
    };
    this.http.post(`${this.URI}/registerUser`, obj).subscribe(res =>alert(res));
  }
 
}
