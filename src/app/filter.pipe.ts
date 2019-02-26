import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any, filter: any, filterItems: Array<any>, isAnd: boolean): any {
        console.log('Filtering ..');
        if (filter && Array.isArray(items) && filterItems) {
            let filterKeys = Object.keys(filter);
            // let checkedItems = filterItems.filter(item => { return item.Checked; });
            let checkedItems = filterItems;
            if (!checkedItems || checkedItems.length === 0) { return items; }
            if (isAnd) {
                return items.filter(item =>
                    filterKeys.reduce((acc1, keyName) =>
                        (acc1 && checkedItems.reduce((acc2, checkedItem) => acc2 && new RegExp(item[keyName], 'gi').test(checkedItem[keyName]) || checkedItem[keyName] === "", true))
                        , true)
                );
            } else {
                return items.filter(item => {
                    return filterKeys.some((keyName) => {
                        return checkedItems.some((checkedItem) => {
                            if (item[keyName] && Array.isArray(item[keyName])) {
                                return item[keyName].includes(filter[keyName]) || item[keyName] == null;
                            }
                            else {
                                return new RegExp(item[keyName], 'gi').test(checkedItem[keyName]) || checkedItem[keyName] === "";
                            }
                        });
                    });
                });
            }
        } else {
            return items;
        }
    }
}
