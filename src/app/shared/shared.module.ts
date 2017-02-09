import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';


import { DataService, HttpService, MessangerService } from './index';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        DataService,
        HttpService,
        MessangerService
    ],
    declarations: [],
    exports: []
})
export class SharedModule {
}