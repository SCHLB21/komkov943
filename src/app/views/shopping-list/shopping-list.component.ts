import { Component, OnInit } from '@angular/core';
import { MyProduct } from '../../models/shopping-list.model';
import { ShoppingListService } from '../../services/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  shopping_list: MyProduct[] = [];
  constructor(private ShoppingList: ShoppingListService) {}

  ngOnInit(): void {
    this.getData();
  }
  getStatus(status: boolean) {
    if (status) {
      return 'Куплено';
    } else {
      return 'Не куплено';
    }
  }
  async changeStatus(product: MyProduct) {
    product.status = !product.status;
    await this.editProduct(product.id, product);
    this.getData();
  }
  async editThisProduct(product: MyProduct) {
    if (product.edit) {
      product.edit = false;
      await this.editProduct(product.id, product);
    } else {
      product.edit = true;
    }
  }
  async deleteThisProduct(id: number) {
    await this.deleteProduct(id);
    this.getData();
  }
  async getData() {
    try {
      this.shopping_list = await this.ShoppingList.getAll();
    } catch (err) {
      console.log(err);
    }
  }
  async editProduct(id: number, product: MyProduct) {
    try {
      await this.ShoppingList.putOneById(id, product);
    } catch (err) {
      console.log(err);
    }
  }
  async deleteProduct(id: number) {
    try {
      await this.ShoppingList.deleteOneById(id);
    } catch (err) {
      console.log(err);
    }
  }
}
