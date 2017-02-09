import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { DataService } from '../shared/index';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    searchValue:string;

    constructor(private dataService:DataService,
                private router:Router) {
    }

    ngOnInit() {
    }

    getSearchValue(event:any, value:string) {
        if (event.keyCode == 13 || event.type == 'click') {
            this.searchValue = value;
        }
    }

    goToSearchResult(value: any) {
        this.router.navigate(
            ['/catalog', 'search'],
            {
                queryParams: {
                    "searched": value
                }
            }
        );
    }

    goToCart() {
        this.router.navigate(['catalog', 'cart'])
    }

}
