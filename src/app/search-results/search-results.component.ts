import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


import { DataService, HttpService, Product } from '../shared/index';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

    products: Product[] = [];
    searchedProducts:Product[] = [];

    constructor(private activatedRoute:ActivatedRoute,
                private dataService:DataService,
                private httpService:HttpService,
                private router:Router) {
    }



    ngOnInit() {
        this.httpService.get('app/data/products.json').subscribe((data:any) => {
            this.products = JSON.parse(data._body);

            this.activatedRoute.queryParams.forEach((queryParams:any) => {
                console.log('params = ',queryParams);
                this.searchedProducts = this.products.filter(elem => {
                    if (~elem.name.toLowerCase().indexOf(queryParams['searched'])) return elem;
                });
                console.log(this.searchedProducts)
            })
        });
    }

    /*TODO: вынести дублирующуюся функцию goToProductPage в компоненте ProductComponent в сервис */
    goToProductPage(product:Product) {
        this.router.navigate(['shop', 'product', product['articul']]);
    }

}
