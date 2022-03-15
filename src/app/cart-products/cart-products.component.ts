import {Component, OnInit} from '@angular/core';
import {DisplayProductDataService} from '../display-product-data.service';

@Component({
selector: 'app-cart-products', 
templateUrl: './cart-products.component.html', 
styleUrls: ['./cart-products.component.scss']})

export class CartProductsComponent implements OnInit {

    apiBackupData : any = [];
    apiData : any = [];
    cartProductsList : any = [];

    constructor(public accessDisplayProductDataService : DisplayProductDataService) {
        this.accessDisplayProductDataService.behaviourProductData.subscribe((behaviourProductData : any) => {
            this.apiData = behaviourProductData;
        });
        this.accessDisplayProductDataService.behaviourCartData.subscribe((behaviourCartData : any) => {
            this.cartProductsList = behaviourCartData;
        });
    }

    ngOnInit(): void {}

    placeOrder() {
        this.accessDisplayProductDataService.placeOrderService();
    }
}
