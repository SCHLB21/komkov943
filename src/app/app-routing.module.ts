import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './views/main/main.component';
import { ShoppingListComponent } from './views/shopping-list/shopping-list.component';
import { AddProductComponent } from './views/add-product/add-product.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
  {
    path: 'addproduct',
    component: AddProductComponent,
  },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
