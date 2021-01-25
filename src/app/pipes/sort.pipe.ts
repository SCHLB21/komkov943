import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(shopping_list: { name: string; status: boolean }[]): any[] {
    shopping_list.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
    let sortedList: any[] = [];
    for (let product of shopping_list) {
      if (!product.status) sortedList.push(product);
    }
    for (let product of shopping_list) {
      if (product.status) sortedList.push(product);
    }
    return sortedList;
  }
}
