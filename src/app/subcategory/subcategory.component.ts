import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterState } from '@angular/router';
import { DataService, ProductComponent, Subcategory, Product } from '../index';

@Component({
    selector: 'app-subcategory',
    templateUrl: './subcategory.component.html',
    styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

    constructor(
        private dataService: DataService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    subcategories: Subcategory[];

    productsOnPage: Product[];
    sub: any;

    ngOnInit() {
        let that = this;
        this.activatedRoute.params.forEach((params: Params) => {
            console.log(params);
            let category = params['name'];
            that.subcategories = that.dataService.getSubcategoriesByCategory(category);
        });
        this.activatedRoute.children.forEach((childRoute) => {
            childRoute.params.forEach((params: Params) => {
                console.log(params['subname'])
            });
        });
    }


}
