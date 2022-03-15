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
            this.apiData = behaviourProductData;
        });
        this.accessDisplayProductDataService.behaviourCartData.subscribe((behaviourCartData : any) => {
            this.cartProductsList = behaviourCartData;
        });
        this.apiBackupData = this.apiData;
    }

    ngOnInit() {}

    searchProduct(filterType : String) {
        let filterSearchResult = this.apiBackupData.filter((filterProduct : any) => 
        filterProduct.productName == filterType);
        this.apiData = [... filterSearchResult];
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
