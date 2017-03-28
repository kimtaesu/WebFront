import {Injectable, OnInit} from "@angular/core";
import {AbstractControl, Form, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {normalizeAsyncValidator} from "@angular/forms/src/directives/normalize_validator";
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
      Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(6), this.passwordValidator])))
    return this
  }

  withUserName(): this {
    this.addControl('userName', new FormControl('',
      Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(6), this.userNameValidator])))
    return this
  }

  emailValidator(control) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return {'invalidEmailAddress': true};
    }
  }


  passwordValidator(control) {
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]/)) {
      return null;
    } else {
      return {'invalidPassword': true};
    }
  }

  userNameValidator(control) {
    // (?=.*[0-9])       - Assert a string has at least one number

    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]/)) {
      return null;
    } else {
      return {'invalidUserName': true};
    }
  }
}
