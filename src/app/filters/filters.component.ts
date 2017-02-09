import { Component, OnInit } from '@angular/core';


import { DataService } from '../shared/index';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
    }

    filtered: any;

    lol(producer: string) {
        let filteredArr = this.filtered.filter(elem => elem.producer == producer);
        //this.products = filteredArr;
    }

}
