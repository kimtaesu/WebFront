import {Component, OnInit} from "@angular/core";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormValidationService} from "../shared/form-validation.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FormValidationService]
})
export class LoginComponent {


  private loginForm: FormValidationService;

  constructor(form: FormValidationService, private fb:FormBuilder) {
    this.loginForm = form
      .withEmail()
      .withPassword()
  }

  onLogin() {
  }

}
