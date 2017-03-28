import {Component, Input} from "@angular/core";
import {FormControl} from "@angular/forms";
@Component({
  selector: 'password-error',
  template: `
    <div [hidden]="!control.password.touched">
        <span
          *ngIf="(control.password.hasError('minlength') || control.password.hasError('maxlength'))">6~20 자릿 수</span>
      <span *ngIf="control.password.hasError('invalidPassword')">적어도 숫자 1개가 포함</span>
    </div>
  `
})
export class PassWordErrorComponent {
  @Input('control') control: FormControl
}
