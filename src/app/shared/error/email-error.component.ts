import {Component, Input} from "@angular/core";
import {FormControl} from "@angular/forms";
@Component({
  selector: 'email-error',
  template: `
    <div [hidden]="!control.userEmail.touched">
      <span *ngIf="!control.userEmail.valid">이메일 형식이 올바르지 않습니다.</span>
    </div>
  `
})
export class EmailErrorComponent {
  @Input('control') control: FormControl
}
