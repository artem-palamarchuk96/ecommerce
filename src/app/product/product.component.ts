import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../index';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    constructor(
        private dataService: DataService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    products: Product[];
    filtered: any;


    ngOnInit() {
        let that = this;
        this.activatedRoute.params.forEach(function(params: Params) {
            //console.log('Product route = ', params['subname'])
            let subname = params['subname'];
            if (subname) {
                that.products = that.dataService.getProductsBySubcategory(subname);
                that.filtered = that.products;
                that.products = that.products.map(elem => Object.assign(elem, {filter: false}));
                //console.log(that.products.map(elem => Object.assign(elem, {filter: false})))
            }
        })
    }

    goToProductPage(product: Product) {
        this.router.navigate(['shop', 'product', product['articul']]);
    }

    filterProducts(producer: string) {
        this.products = this.filtered.filter(elem => elem.producer == producer);
        //console.log(this.filtered);
        //this.products = this.dataService.producerFilter(producer);
    }


    addToCart(product: Product) {
        if (!~this.dataService.cart.indexOf(product)) {
            this.dataService.cart.push(Object.assign(product, {count: 1}) );
        } else {
            for (let i = 0; i < this.dataService.cart.length; i++) {
                if (this.dataService.cart[i].articul == product.articul) {
                    this.dataService.cart[i].count++;
                }
            }
        }
        this.dataService.cartCount = 0;
        this.dataService.cartSummaryPrice = 0;
        for (let i = 0; i < this.dataService.cart.length; i++) {
            this.dataService.cartCount += this.dataService.cart[i].count;
            this.dataService.cartSummaryPrice += this.dataService.cart[i].price;
        }
        //console.log(this.dataService.cart, this.dataService.cartCount);
    }

    lol(producer: string) {
        let filteredArr = this.filtered.filter(elem => elem.producer == producer);
        this.products = filteredArr;
    }

}
