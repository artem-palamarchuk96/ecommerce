import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


import { DataService, HttpService, Producer } from '../shared/index';

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
                private activatedRoute:ActivatedRoute) {
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
            //for (let i = 0; i < this.dataService.filteredProducers.length; i++) {
            //    this.dataService.filteredProducers[i] = Object.assign(this.dataService.filteredProducers[i], {filter: false})
            //}
            //console.log(this.dataService.filteredProducers)
        })
    }

    showIt(text: string, value: any) {
        if (text) {
            for (let i = 0; i < this.dataService.products.length; i++) {
                for (let prop in this.dataService.products[i]) {
                    if (this.dataService.products[i][prop] == text.trim()) {
                        if (this.dataService.products[i]["filter"] == false) {
                            this.dataService.products[i]["filter"] = true;
                            this.dataService.filteredByProd.push(this.dataService.products[i]);
                            console.log('true')
                        } else {
                            this.dataService.products[i]["filter"] = false;
                            this.dataService.filteredByProd.pop();
                            console.log('false')
                        }
                    }
                }
            }

        }
    }


}
