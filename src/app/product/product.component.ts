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

    ngOnInit() {
        let that = this;
        this.activatedRoute.params.forEach(function(params: Params) {
            let subname = params['subname'];
            if (subname) {
                that.products = that.dataService.getProductsBySubcategory(subname);
            }
        })
    }

    goToProductPage(product: Product) {
        this.router.navigate(['shop', 'product', product['articul']]);
    }

}
