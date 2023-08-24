import { Icakeshop } from './../models/Icakeshop';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cakeFilter'
})
export class CakeFilterPipe implements PipeTransform {
  transform(value: Array<Icakeshop>, search: string): Array<Icakeshop> {
    if (!search) {
      return value
    }
    if (!value) {
      return []
    }
    return value.filter(ele => {
      return ele.name.toLowerCase().includes(search)
    })

  }

}
