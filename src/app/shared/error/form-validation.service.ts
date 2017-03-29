import {Injectable, OnInit} from "@angular/core";
import {AbstractControl, Form, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {normalizeAsyncValidator} from "@angular/forms/src/directives/normalize_validator";
import {environment} from "../../../environments/environment";
@Injectable()
export class FormValidationService extends FormGroup {

  constructor(private fb: FormBuilder) {
    super({})
  }

  withEmail(): this {
    this.addControl('userEmail', new FormControl('', Validators.compose([Validators.required, this.emailValidator])))
    return this
  }

  withPassword(): this {
    this.addControl('password', new FormControl('',
      Validators.compose([Validators.required, this.passwordValidator])))
    return this
  }

  withUserName(): this {
    this.addControl('userName', new FormControl('',
      Validators.compose([Validators.required, this.userNameValidator])))
    return this
  }

  emailValidator(control) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return {'invalidEmailAddress': '올바른 이메일 형식이 아닙니다.'};
    }
  }


  passwordValidator(control) {
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(environment.validation.passwordRex)) {
      return null;
    } else {
      var msg = environment.validation.minLen + '~' + environment.validation.maxLen + '자릿 수'
      return {'invalidPassword': msg};
    }
  }

  userNameValidator(control: FormControl) {
    if (control.value.match(environment.validation.userNameRex)) {
      return null;
    } else {
      var msg = environment.validation.minLen + '~' + environment.validation.maxLen + '자릿 수'
      return {'invalidUserName': msg};
    }
  }
}
