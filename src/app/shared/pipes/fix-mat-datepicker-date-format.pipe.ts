import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'fixMatDatepickerDateFormat'
})
export class FixMatDatepickerDateFormatPipe implements PipeTransform {

  transform(control: any, args?: any): any {
      let birthDate = control.value;
      if (birthDate) {
          control.patchValue(birthDate == "0000-00-00" ? '' : moment(birthDate).format('YYYY-MM-DD'));
      }
  }

}
