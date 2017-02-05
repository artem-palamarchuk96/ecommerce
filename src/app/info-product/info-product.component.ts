import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService, Product } from '../index';

@Component({
    selector: 'app-info-product',
    templateUrl: './info-product.component.html',
    styleUrls: ['./info-product.component.css']
})
export class InfoProductComponent implements OnInit {

    constructor(private activatedRoute:ActivatedRoute, private dataService: DataService) {
    }

    selectedProduct: Product;

    ngOnInit() {
        let that = this;
        this.activatedRoute.params.forEach((params: Params) => {
            let articul = parseInt(params['articul']);
            that.selectedProduct = that.dataService.getProduct(articul);
        });
    }

}
