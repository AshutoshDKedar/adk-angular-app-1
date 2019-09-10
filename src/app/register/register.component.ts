import { Component, OnInit } from '@angular/core';
//import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //angForm: FormGroup;
  constructor(/*private fb: FormBuilder,*/ private RS: RegistrationService) {
    //this.createForm();
  }

  /*createForm() {
    this.angForm = this.fb.group({
      txtUsername: ['', Validators.required ],
      txtPassword: ['', Validators.required ],
      txtConfirmPassword: ['', Validators.required ]
    });
  }*/

  registerUser(txtUsername, txtPassword) {
    this.RS.registerUser(txtUsername, txtPassword);
  }

  ngOnInit() {
  }

}
