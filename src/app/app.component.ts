import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


import { DataService, Product } from './shared/index';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


    /* cart from service */
    cartFromService: Product[] = this.dataService.cart;

    constructor(
        private dataService: DataService,
        private router: Router
    ) {};

    ngOnInit() {

        //this.router.navigate(['category', this.dataService.categories[0].name, this.dataService.subcategories[0].name]);
    }





}
