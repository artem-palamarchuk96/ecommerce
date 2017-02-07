import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Product } from '../index';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute, private dataService: DataService, private router: Router) {
    }

    searchedProducts: Product[];

    ngOnInit() {
        this.activatedRoute.queryParams.forEach((queryParams: any) => {
            console.log(queryParams);
            this.searchedProducts = this.dataService.products.filter(elem => {
                if (~elem.name.toLowerCase().indexOf(queryParams['productName'])) return elem;
            });
            console.log(this.searchedProducts)
        })
    }
    /*TODO: вынести дублирующуюся функцию goToProductPage в компоненте ProductComponent в сервис */
    goToProductPage(product: Product) {
        this.router.navigate(['shop', 'product', product['articul']]);
    }

}
