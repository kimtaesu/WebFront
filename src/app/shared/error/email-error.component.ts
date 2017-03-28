import {Component, Input} from "@angular/core";
import {FormControl} from "@angular/forms";
@Component({
  selector: 'email-error',
  template: `
    <div [hidden]="!control.touched">
      <span *ngIf="!control.valid">이메일 형식이 올바르지 않습니다.</span>
    </div>
  `,
})
export class EmailErrorComponent {
  @Input('control') control: FormControl
}
