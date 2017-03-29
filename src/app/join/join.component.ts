import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormControl, FormBuilder, ValidatorFn} from "@angular/forms";
import {Http, RequestOptionsArgs} from "@angular/http";
import {environment} from "../../environments/environment";
import {FormValidationService} from "../shared/error/form-validation.service";
import {getJsonUtf8Header} from "../shared/utils";

@Component({
  selector: 'app-join',
  templateUrl: 'join.component.html',
  styleUrls: ['join.component.css']
})
export class JoinComponent implements OnInit {

  private joinForm: FormValidationService;
  private passwordConfirm: FormGroup
  user = {
    userEmail: '',
    userName: '',
    password: '',
  }

  constructor(form: FormValidationService, private fb: FormBuilder, private http: Http) {
    this.joinForm = form.withEmail()
      .withPassword()
      .withUserName()
  }

  ngOnInit(): void {
    this.passwordConfirm = this.fb.group({
      'password': this.joinForm.controls['password'],
      'passwordConfirm': ['', [
        Validators.required
      ]],
    }, {
      validator: this.equalValueValidator('password', 'passwordConfirm')
    })
  }


  onJoin() {
    this.http.post(environment.api.join, JSON.stringify(this.user), {headers: getJsonUtf8Header()})
      .subscribe((res) => {
        console.info(res)
      }, (error) => {
        alert(error)
      });
  }

  equalValueValidator(targetKey: string, toMatchKey: string): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } => {
      const target = group.controls[targetKey];
      const toMatch = group.controls[toMatchKey];
      if (target.touched && toMatch.touched) {
        const isMatch = target.value === toMatch.value;
        // set equal value error on dirty controls
        if (isMatch)
          return null
      }
      return {'passwordMissMatch': '패스워드가 일치하지 않습니다.'};
    };
  }
}
