import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'inputError'
})
export class InputErrorPipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    if (!value) return

    var ar = args.find((v, index, obj) => {
      if (value && value.hasOwnProperty(v))
        return v
    })
    return value[ar]
  }
}
