import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Category, Subcategory, Product, Producer } from '../index';

@Injectable()
export class DataService {

    /* Cart */
    cart = [];

    cartCount: number = 0;

    cartSummaryPrice: number = 0;

    paramSubcategory: any = '';

    products: Product[] = [];
    filteredProducts: Product[] = [];
    filteredByProd: Product[] = [];

    filteredProducers: Producer[] = [];

    prices: any;

    constructor(private router: Router) {
    }
}
