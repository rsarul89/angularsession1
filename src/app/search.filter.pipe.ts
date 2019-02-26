import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'searchfilter'
})
export class SearchFilterPipe implements PipeTransform {
    transform(items: any[], key: string, searchText: string): any[] {
        if (!items) { return []; }
        else {
            if ((!searchText || searchText == '') && (!key || key == '')) { return items; }
            else {
                searchText = searchText.toLowerCase();
                return items.filter(it => {
                    return it[key].toLowerCase().includes(searchText);
                });
            }
        }
    }
}