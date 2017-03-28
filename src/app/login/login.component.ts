import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators} from "@angular/forms";
import {FormValidationService} from "../shared/form-validation.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FormValidationService]
})
export class LoginComponent {

  private loginForm: FormValidationService;

  constructor(form: FormValidationService) {
    form.removeControl('userName')
    this.loginForm = form
  }

  onLogin() {
  }

}
