import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-404',
    templateUrl: './page-404.component.html',
    styleUrls: ['./page-404.component.css']
})
export class Page404Component implements OnInit {

    constructor() {
    }

    message: String;

    ngOnInit() {
        this.message = 'Error 404, page not found';
    }


}
