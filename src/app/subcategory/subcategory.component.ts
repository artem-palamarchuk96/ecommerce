import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService, ProductComponent, Subcategory } from '../index';

@Component({
    selector: 'app-subcategory',
    templateUrl: './subcategory.component.html',
    styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

    constructor(
        private dataService: DataService,
        private activatedRoute: ActivatedRoute
    ) {}

    subcategories: Subcategory[];

    ngOnInit() {
        let that = this;
        this.activatedRoute.params.forEach((params: Params) => {
            let category = params['name'];
            that.subcategories = that.dataService.getSubcategoriesByCategory(category);
        })
    }
}
