import { Component, OnInit} from '@angular/core';
import { DataService } from './index';
import { Router } from '@angular/router'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(
        private dataService: DataService,
        private router: Router
    ) {};

    ngOnInit() {
        //this.router.navigate(['category', this.dataService.categories[0].name, this.dataService.subcategories[0].name]);
    }

    searchValue: string;

    getSearchValue(value: string) {
        this.searchValue = value;
    }

    getSearchValueEnter(event: any, value: string) {
        if (event.keyCode == 13) {
            this.searchValue = value;
        }
    }

}
