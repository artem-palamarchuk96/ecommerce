import { Component, OnInit } from '@angular/core';
import { DataService } from '../index';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    constructor(private dataService:DataService) {
    }

    ngOnInit() {
    }

    plusCount(articul:number) {
        this.dataService.cartSummaryPrice = 0;
        for (let i = 0; i < this.dataService.cart.length; i++) {
            if (this.dataService.cart[i].articul == articul && this.dataService.cart[i].count < 999) {
                this.dataService.cart[i].count++;
                this.dataService.cartCount++;
            }
            this.dataService.cartSummaryPrice += this.dataService.cart[i].price * this.dataService.cart[i].count;
        }
    }

    minusCount(articul:number) {
        for (let i = 0; i < this.dataService.cart.length; i++) {
            if (this.dataService.cart[i].articul == articul && this.dataService.cart[i].count > 1) {
                this.dataService.cart[i].count--;
                this.dataService.cartCount--;
                this.dataService.cartSummaryPrice -= this.dataService.cart[i].price;
            }
        }
    }

    onChangeInput(item:any) {
        this.dataService.cartSummaryPrice = 0;
        this.dataService.cartCount = 0;
        for (let i = 0; i < this.dataService.cart.length; i++) {
            this.dataService.cartSummaryPrice += this.dataService.cart[i].count * this.dataService.cart[i].price;
            this.dataService.cartCount += +this.dataService.cart[i].count;
        }
    }
}
