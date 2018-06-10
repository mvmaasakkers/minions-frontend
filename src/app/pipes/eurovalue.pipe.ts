import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eurovalue'
})
export class EurovaluePipe implements PipeTransform {

  transform(value: number): string {
    if (value) {
      //value = -123.45;
      var isNeg = value < 0;
      value = Math.abs(value);
      //console.log("tr ", value)
      var cents = (value * 100) % 100;
      var s = "00";
      s = cents.toString() + s;
      s = s.substring(0, 2);

      var  r = " &euro; " + Math.floor(value).toString() + ",<sup>" + s + "</sup>";
      if (isNeg) {
        r = "-" + r; 
      }
      //console.log("r = ", r);
      return r;
    }
    return "";
  }

}
