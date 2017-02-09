import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { DataService, HttpService, Category } from '../shared/index';


@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    categories: Category[] = [];

    constructor(private dataService:DataService,
                private httpService:HttpService,
                private router:Router,
                private activatedRoute:ActivatedRoute) {
    }

    ngOnInit() {
        this.httpService.get('app/categories.json').subscribe((data:any) => {
            this.categories = JSON.parse(data._body);

            this.activatedRoute.params.forEach((params: Params) => {
                /* TODO: сделать перенаправление */
                if (!params["category"]) {
                    for (let i = 0; i < this.categories.length; i++) {
                       if (this.categories[i].alias == params["category"]) this.router.navigate(['catalog', 'list', this.categories[0].alias]);
                    }
                }
            })
        });
    }

    goToRoute(categoryAlias:any) {
        this.router.navigate(['catalog', 'list', categoryAlias]);
        //console.log(categoryName)
    }

}
