import { Component, OnInit } from '@angular/core';
import {DisplayProductDataService } from '../display-product-data.service';
import{ v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {

  constructor(public accessDisplayProductDataService : DisplayProductDataService , ) { }

  ngOnInit(): void {
  }

addNewProduct(nameOfProduct: String , quantityOfProduct : String){
  let newProduct = {
    "productName": nameOfProduct,
    "productId": uuidv4(),
    "availableQuantity": Number(quantityOfProduct),
  }
  this.accessDisplayProductDataService.addNewProductService(newProduct);
}

}
