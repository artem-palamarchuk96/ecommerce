import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Category, Subcategory, Product, Producer } from '../index';

@Injectable()
export class DataService {

    constructor(private router: Router) {
    }

    producers:Producer[] = [
        new Producer('1', 'ATLANT'),
        new Producer('2', 'Samsung'),
        new Producer('3', 'Indesit'),
        new Producer('4', 'Beko'),
        new Producer('5', 'Bosch')
    ];

    //getProductsBySubcategory(subname: string) {
    //    if (subname) {
    //        return this.products.filter(elem => elem.subcategory == subname)
    //    }
    //}

    //getSubcategoriesByCategory(category: string) {
    //    if (category) {
    //        return this.subcategories.filter(elem => elem.category == category);
    //    }
    //}

    //getProduct(articul: number) {
    //    if (articul) {
    //        return this.products.find(elem => elem.articul == articul);
    //    }
    //}
    //
    //producerFilter(producer: string) {
    //    if (producer) {
    //        return this.products.filter(elem => elem.producer == producer);
    //    }
    //}

    /* Cart */
    cart = [];

    cartCount: number = 0;

    cartSummaryPrice: number = 0;

}
