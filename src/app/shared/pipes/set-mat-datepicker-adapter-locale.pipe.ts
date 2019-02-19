import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setMatDatepickerAdapterLocale'
})
export class SetMatDatepickerAdapterLocalePipe implements PipeTransform {

  transform(adapter: any, lang: string): any {
      adapter.setLocale(lang === 'hy' ? 'hy-AM' : lang);
  }

}
