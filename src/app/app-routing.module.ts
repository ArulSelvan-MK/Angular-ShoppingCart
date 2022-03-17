import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { ShowProductsListComponent } from './show-products-list/show-products-list.component';

const routes: Routes = [
  {path:'', component: ShowProductsListComponent},
  {path: 'viewCart', component: CartProductsComponent},
  {path:'addNewProduct', component: AddNewProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
