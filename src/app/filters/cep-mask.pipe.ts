import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'cepMask'})
export class CepMask implements PipeTransform {
  transform(value: string): string {
    let newStr: string = value.substring(0,5)+'-'+value.substring(5);
    return newStr;
  }
}