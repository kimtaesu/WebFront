import {Injectable, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Injectable()
export class FormValidationService extends FormGroup {

  constructor() {
    super({
      userEmail: new FormControl('', Validators.compose([Validators.required, FormValidationService.emailValidator])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(6), FormValidationService.passwordValidator])),
      userName: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(6), FormValidationService.userNameValidator])),
    });
  }

  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return {'invalidEmailAddress': true};
    }
  }

  static passwordValidator(control) {
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]/)) {
      return null;
    } else {
      return {'invalidPassword': true};
    }
  }

  static userNameValidator(control) {
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]/)) {
      return null;
    } else {
      return {'invalidPassword': true};
    }
  }
}
