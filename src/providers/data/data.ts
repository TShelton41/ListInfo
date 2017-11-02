import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

    lists: any = [
        {
            itemName: 'Milk',
            price: "$1.98",
            size: 'Gallon'
        },
        {
            itemName: 'Cheese',
            price: "$2.98 lb",
            size: 'One Pound'
        },
        {
            itemName: 'Yogurt',
            price: "$3.98",
            size: 'Pint'
        },
        {
            itemName: 'Bread',
            price: "$2.98",
            size: 'Loaf'
        }
    ];

    constructor() {
        console.log('Hello DataProvider Provider');
    }

}
