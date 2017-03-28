import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, ValidationService.emailValidator])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      userName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ])),
    });
  }

}
