import { Component, OnInit } from '@angular/core';
import { DataService } from '../index';
import { Router } from '@angular/router';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    constructor(
        private dataService:DataService,
        private router:Router
    ) {}

    ngOnInit() {
        //this.router.navigate(['category', this.dataService.categories[0].name, this.dataService.subcategories[0].name]);
    }

}
