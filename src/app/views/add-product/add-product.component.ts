import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyNewProduct } from '../../models/shopping-list.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  constructor(private ShoppingList: ShoppingListService) {}

  ngOnInit(): void {}
  addForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
  });
  addProduct() {
    this.postNewProduct({
      name: this.addForm.value.name,
      number: this.addForm.value.number,
      status: false,
      edit: false,
    });
    alert('Продукты успешно добавлены');
    this.addForm.setValue({
      name: '',
      number: null,
    });
  }
  async postNewProduct(worker: MyNewProduct) {
    try {
      await this.ShoppingList.postOne(worker);
    } catch (err) {
      console.log(err);
    }
  }
}
