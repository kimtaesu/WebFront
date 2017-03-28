import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormControl, FormBuilder, ValidatorFn} from "@angular/forms";
import {Http, RequestOptionsArgs} from "@angular/http";
import {environment} from "../../environments/environment";
import {FormValidationService} from "../shared/form-validation.service";

@Component({
  selector: 'app-join',
  templateUrl: 'join.component.html',
  styleUrls: ['join.component.css']
})
export class JoinComponent implements OnInit {

  private joinForm: FormValidationService;
  private passwordConfirm: FormGroup

  constructor(form: FormValidationService, private fb: FormBuilder) {
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
    console.info("onJoin")
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
      return {'MissMatch': true};
    };
  }
}
