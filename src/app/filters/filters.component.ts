import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


import { DataService, HttpService, Producer, MessangerService } from '../shared/index';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

    producers: Producer[];


    constructor(private dataService:DataService,
                private httpService:HttpService,
                private router:Router,
                private activatedRoute:ActivatedRoute,
                private messageService: MessangerService) {
    }

    ngOnInit() {
        this.httpService.get('app/data/producers.json').subscribe((response: any) => {
            this.dataService.filteredProducers = JSON.parse(response._body);

            this.activatedRoute.params.forEach((params: Params) => {
                if (params["subcategory"]) {
                    this.dataService.paramSubcategory = params["subcategory"];
                } else {
                    this.dataService.paramSubcategory = '';
                }
            });
        });
        this.httpService.get('app/data/price.json').subscribe((response: any) => {
            this.dataService.prices = JSON.parse(response._body);

            for (let i = 0; i < this.dataService.prices.length; i++) {
                this.dataService.prices[i] = Object.assign(this.dataService.prices[i], {filter: false});
            }
            console.log(this.dataService.prices)
        })
    }

    selectPrice(start: any, end: any, value: any) {
        console.log(start, end, value);
        for (let i = 0; i < this.dataService.products.length; i++) {
            if (this.dataService.products[i]["price"] > start && this.dataService.products[i]["price"] < end) {
                let lol = this.dataService.filteredByProd.filter(elem => {
                    return elem["price"] > start &&  elem["price"] < end;
                });
                console.log('filtered', lol)
            }
        }
    }



    showIt(text: string, value: any) {
        if (text) {
            for (let i = 0; i < this.dataService.products.length; i++) {
                for (let prop in this.dataService.products[i]) {
                    if (this.dataService.products[i][prop] == text.trim()) {
                        if (this.dataService.products[i]["filter"] == false) {
                            this.dataService.products[i]["filter"] = true;
                            this.dataService.filteredByProd.push(this.dataService.products[i]);
                        } else {
                            this.dataService.products[i]["filter"] = false;
                            //console.log('need delete = ', this.dataService.products[i], i)
                            this.dataService.filteredByProd = this.dataService.filteredByProd.filter(elem => {
                                return this.dataService.products[i]["producer"] != elem["producer"];
                            });
                            //console.log(this.dataService.filteredByProd)
                        }
                    }
                }
            }

        }

        this.messageService.send('filter_id', {name: 'Vasya', age: 23});
    }


}
