import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


import { DataService, HttpService, Product, MessangerService } from '../shared/index';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    products:Product[] = [];
    filteredProducts:Product[] = [];

    constructor(private dataService:DataService,
                private httpService:HttpService,
                private activatedRoute:ActivatedRoute,
                private router:Router,
                private messageService: MessangerService) {
    }

    ngOnInit() {
        this.httpService.get('app/data/products.json').subscribe(this.lol);
        this.messageService.listener('filter_id').subscribe(this.lol2);
    }

    private lol = (data:any) => {
        this.products = JSON.parse(data._body);

        this.dataService.products = JSON.parse(data._body);

        this.activatedRoute.params.forEach((params:Params) => {
            this.dataService.filteredProducts = this.products.filter(elem => elem.subcategoryAlias == params["subcategory"]);
            for (let i = 0; i < this.dataService.products.length; i++) {
                this.dataService.products[i] = Object.assign(this.dataService.products[i], {filter: false})
            }
        });
    };

    private lol2 = (data:any) => {console.log('data', data)};

    goToProductPage(product:Product) {
        this.router.navigate(['shop', 'product', product['articul']]);
    }

    addToCart(product:Product) {
        if (!~this.dataService.cart.indexOf(product)) {
            this.dataService.cart.push(Object.assign(product, {count: 1}));
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
            this.dataService.cartSummaryPrice += this.dataService.cart[i].price * this.dataService.cart[i].count;
        }
    }

}
