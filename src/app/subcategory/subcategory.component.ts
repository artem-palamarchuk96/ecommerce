import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterState } from '@angular/router';


import { DataService, HttpService, Subcategory, Product } from '../shared/index';
import { ProductComponent } from '../index';

@Component({
    selector: 'app-subcategory',
    templateUrl: './subcategory.component.html',
    styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

    subcategories:Subcategory[] = [];
    filteredSubcategories:Subcategory[] = [];

    constructor(private dataService:DataService,
                private httpService: HttpService,
                private activatedRoute:ActivatedRoute,
                private router:Router) {
    }

    ngOnInit() {
        this.httpService.get('app/subcategories.json').subscribe((data:any) => {
            this.subcategories = JSON.parse(data._body);

            this.activatedRoute.params.forEach((params:Params) => {
                this.filteredSubcategories = this.subcategories.filter((elem) => elem.categoryAlias == params["category"]);
            });
        });
    }

    goToRoute(subcategory: any) {
        this.router.navigate(['catalog', 'list', subcategory.categoryAlias, subcategory.alias])
    }

}
