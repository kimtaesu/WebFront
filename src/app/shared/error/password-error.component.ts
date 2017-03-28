import {Component, Input} from "@angular/core";
import {FormControl, AbstractControl} from "@angular/forms";
@Component({
  selector: 'password-error',
  template: `
    <div [hidden]="!control.touched">
        <span
          *ngIf="(control.hasError('minlength') || control.hasError('maxlength'))">6~20 자릿 수</span>
      <span *ngIf="control.hasError('invalidPassword')">적어도 숫자 1개가 포함</span>
    </div>
  `
})
export class PassWordErrorComponent {
  @Input('control') control: AbstractControl
}
