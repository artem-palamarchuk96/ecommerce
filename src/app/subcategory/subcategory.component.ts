import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterState } from '@angular/router';
import { DataService, ProductComponent, Subcategory, Product } from '../index';
import {Runner} from "tslint/lib/runner";

@Component({
    selector: 'app-subcategory',
    templateUrl: './subcategory.component.html',
    styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

    constructor(private dataService:DataService,
                private activatedRoute:ActivatedRoute,
                private router:Router) {
    }

    subcategories:Subcategory[];

    productsOnPage:Product[];

    ngOnInit() {
        let that = this;
        this.activatedRoute.params.forEach((params:Params) => {
            let category = params['name'];
            that.subcategories = that.dataService.getSubcategoriesByCategory(category);
        });
        if (this.activatedRoute.children[0]) {
            this.activatedRoute.children[0].params.forEach((params:Params) => {
                //console.log('subcategory route =', params['subname'])
            });
        }
    }

}
