import {Component, Input} from "@angular/core";
import {FormControl, AbstractControl} from "@angular/forms";
@Component({
  selector: 'user-name-error',
  template: `
    <div [hidden]="!control.touched">
      <span *ngIf="(control.hasError('minlength') || control.hasError('maxlength'))">6~20 자릿 수</span>
    </div>
  `
})
export class UserNameErrorComponent {
  @Input('control') control: AbstractControl
}
