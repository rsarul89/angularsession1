import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'count'
})
export class CountPipe implements PipeTransform {

    transform(collection: Array<any>, key: string): any {
        let out = "test";
        for (var i = 0; i < collection.length; i++) {
            //console.log(collection[i].Price);
            //var out = myApp.filter('filter')(collection[i].Price, "42", true);
        }
        return out;
    }
}
