import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';    
import {MatSnackBar} from '@angular/material/snack-bar';
import { ApiRequestRespondService } from './api-request-respond.service';

@Injectable({
  providedIn: 'root'
})
export class DisplayProductDataService {

  productList: any =[];
  cartList: any = [];
  behaviourProductData = new BehaviorSubject<any>(this.productList); 
  behaviourCartData = new BehaviorSubject<any>(this.cartList);  
  constructor(public apiService: ApiRequestRespondService, private snackBar : MatSnackBar) { 
   this.getProductsData();
  }

  validateProductName(productName: String){
    return (productName!=null && productName.replace(/\s/g, '').length>0)? true : false;
  }

  getProductsData(){
    this.apiService.processGet('Product').subscribe(
      responseData => {
        Object.values(responseData).map(
          (checkIndividualProduct)=>{
            (this.validateProductName(checkIndividualProduct.productName)) && this.productList.push(checkIndividualProduct);
          }
        )
      }
    );
    this.behaviourProductData.next(this.productList);
  }

  addProductCart(individualProduct: any){
    if(individualProduct.selectedQuantity<=0){
      this.triggerToaster('minimum quantity should be 1',2);
      return;
    }
    this.apiService.processPost('Product','application/json',individualProduct).subscribe(
      responseData => {
        if(responseData){
          for(let i=0; i<this.productList.length;i++){
            if(this.productList[i].productId==individualProduct.productId){
              if(this.productList[i].availableQuantity<individualProduct.selectedQuantity){
                this.triggerToaster('Product maximum quantity reached',2);
                return;
              }
              this.productList[i].availableQuantity-=individualProduct.selectedQuantity;
              this.triggerToaster('Product added to cart',2);
              break;
            }
          }
          if(this.cartList.filter((product:any)=>product.productId==individualProduct.productId).length>0){
            for(let i=0; i<this.cartList.length;i++){
              if(this.cartList[i].productId==individualProduct.productId){
                this.cartList[i].selectedQuantity+=individualProduct.selectedQuantity;
                break;

              }
            }
          }
          else{
            this.cartList.push(individualProduct);
          }
          this.behaviourProductData.next(this.productList);
          this.behaviourCartData.next(this.cartList);

        }
      },
      error => {console.log("error")}
    );
  }

  placeOrderService(){
    this.cartList=[];
    this.behaviourCartData.next(this.cartList);
    this.triggerToaster('Order placed succrssfully',2);
    return;
  }

  triggerToaster(message : any, duration : any) {
    this.snackBar.open(message, 'OK', {
        duration: duration * 1000
    });
}
}