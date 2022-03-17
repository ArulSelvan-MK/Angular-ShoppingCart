import {Component, OnInit} from '@angular/core';
import {DisplayProductDataService} from '../display-product-data.service';

@Component({selector: 'app-show-products-list', templateUrl: './show-products-list.component.html', styleUrls: ['./show-products-list.component.scss']})


export class ShowProductsListComponent implements OnInit {

    apiBackupData : any = [];
    apiData : any = [];
    cartProductsList : any = [];
    displayType : String = "";
    breakpoint : any;

    constructor(public accessDisplayProductDataService : DisplayProductDataService) {
        this.accessDisplayProductDataService.behaviourProductData.subscribe((behaviourProductData : any) => {
            this.apiBackupData = behaviourProductData;
        });
        this.accessDisplayProductDataService.behaviourCartData.subscribe((behaviourCartData : any) => {
            this.cartProductsList = behaviourCartData;
        });
        this.apiData = this.apiBackupData;
    }

    ngOnInit() {}

    searchProduct(filterType : String) {
        if(filterType.length>0){
        this.apiData = [...this.apiBackupData.filter((filterProduct : any) => 
        filterProduct.productName == filterType)];
        }
        else{
            this.apiData=[...this.apiBackupData]
        }
    }

    addProductToCart(productId : String, SelectQuantity : String) {
        let productsInCart = {
            ...this.apiBackupData.filter(
                (product : any) => product.productId == productId
            )[0]
        };
        productsInCart.selectedQuantity = Number(SelectQuantity);
        this.accessDisplayProductDataService.addProductCart(productsInCart);
    }
}
