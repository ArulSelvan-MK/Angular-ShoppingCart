import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { ShowProductsListComponent } from './show-products-list/show-products-list.component';

const routes: Routes = [
  {path:'', component: ShowProductsListComponent},
  {path: 'viewCart', component: CartProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
