import { Component, inject, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FieldsetModule } from 'primeng/fieldset';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ToastModule } from 'primeng/toast';
import { Ripple } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

interface Table {
  name: string;
  code: string;
}

interface Payment {
  name: string;
}

interface BlackCoffee {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}


interface MilkCoffee {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface IcedCoffee {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}



interface NonCoffee {
  id: number;
  name: string;
  price: number;
}


interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface SelectedProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  newTotal: number;
  totalBill: number;
}


interface Order {
  tableName: string;
  orderList: object;
  totalBill: number;
  paymentMethod: string;
}

@Component({
  selector: 'app-placeorder',
  imports: [ToastModule, Ripple, AvatarGroupModule, AvatarModule, TabsModule, ButtonModule, SliderModule, SelectModule, CommonModule, CardModule, RadioButtonModule, FieldsetModule, FormsModule],
  templateUrl: './placeorder.component.html',
  styleUrl: './placeorder.component.css',
  standalone: true,
  providers: [MessageService]
})
export class PlaceorderComponent {

  http = inject(HttpClient)

  value: number = 10;
  tables: Table[] | undefined;
  selectedTable: Table | undefined;

  paymentMethod: Payment[] | undefined;
  selectedPaymentMethod: Payment | undefined;


  blackCoffee: BlackCoffee[] | undefined;
  selectedBlackCoffee: BlackCoffee | undefined;

  milkCoffee: MilkCoffee[] | undefined;
  selectedMilkCoffee: MilkCoffee | undefined;

  icedCoffee: IcedCoffee[] | undefined;
  selectedIcedCoffee: IcedCoffee | undefined;

  nonCoffee: NonCoffee[] | undefined;
  selectedNonCoffee: NonCoffee | undefined;

  selectedProducts: SelectedProduct[] | undefined;

  orderList: Order[] | undefined;



  grandTotal: number = 0;

  constructor(private messageService: MessageService) { }

  showMessage() {
    this.messageService.add({ severity: 'error', summary: 'Info!', detail: 'Select at least 1 quantity', key: 'bl', life: 3000 });
  }


  showEmptyMessage() {
    this.messageService.add({ severity: 'error', summary: 'Info!', detail: 'Fill all fields', key: 'bl', life: 3000 });
  }

  placeOrderSuccessMessage() {
    this.messageService.add({ severity: 'success', summary: 'Order Status', detail: 'Order Placed Successfully', key: 'br', life: 3000 });
  }

  placeOrderErrorMessage() {
    this.messageService.add({ severity: 'danger', summary: 'Order Status', detail: 'Order Place Failed', key: 'br', life: 3000 });
  }





  ngOnInit() {

    // this.paymentMethod = [
    //   {name: 'Cash'},
    //   {name: 'QR'},

    // ]
    this.tables = [
      { name: 'Table 1', code: 'TAB_ONE' },
      { name: 'Table 2', code: 'TAB_TWO' },
      { name: 'Table 3', code: 'TAB_THREE' },
      { name: 'Table 4', code: 'TAB_FOUR' },
      { name: 'Outside Table', code: 'TAB_OUT' }
    ];

    this.blackCoffee = [
      { id: 1, name: 'Espresso', image: '/Coffee/blackcoffee/espresso.png', price: 90, quantity: 0 },
      { id: 2, name: 'Doppio', image: '/Coffee/blackcoffee/doppio.png', price: 100, quantity: 0 },
      { id: 3, name: 'Americano (Light)', image: '/Coffee/blackcoffee/americano.png', price: 120, quantity: 0 },
      { id: 4, name: 'Americano (Strong)', image: '/Coffee/blackcoffee/americano.png', price: 140, quantity: 0 },
      { id: 5, name: 'Cafe Lungo (Double)', image: '/Coffee/blackcoffee/lungo.png', price: 140, quantity: 0 },
      { id: 6, name: 'Cafe Lungo (Single)', image: '/Coffee/blackcoffee/lungo.png', price: 120, quantity: 0 }

    ];

    this.milkCoffee = [
      { id: 7, name: 'Cafe Latte', image: '/Coffee/milkcoffee/latte.png', price: 150, quantity: 0 },
      { id: 8, name: 'Cappuccino', image: '/Coffee/milkcoffee/cappuccino.png', price: 150, quantity: 0 },
      { id: 9, name: 'Cafe Mocha', image: '/Coffee/milkcoffee/mocha.png', price: 180, quantity: 0 },
      { id: 10, name: 'Flat White', image: '/Coffee/milkcoffee/flatwhite.png', price: 150, quantity: 0 },
      { id: 11, name: 'Piccolo', image: '/Coffee/milkcoffee/piccolo.png', price: 150, quantity: 0 },
      { id: 12, name: 'Cortado', image: '/Coffee/milkcoffee/cortado.png', price: 160, quantity: 0 },
      { id: 13, name: 'Macchiato', image: '/Coffee/milkcoffee/macchiato.png', price: 150, quantity: 0 },
      { id: 14, name: 'Caramel Macchiato', image: '/Coffee/milkcoffee/caramelmachhiato.png', price: 180, quantity: 0 },
      { id: 15, name: 'Flavour Milk Coffee', image: '/Coffee/milkcoffee/flavlatte.png', price: 200, quantity: 0 }

    ];

    this.icedCoffee = [
      { id: 16, name: 'Iced Americano', image: '/Coffee/icedcoffee/icedamericano.png', quantity: 0, price: 90 },
      { id: 17, name: 'Iced Latte', image: '/Coffee/icedcoffee/icedlatte.png', quantity: 0, price: 90 },
      { id: 18, name: 'Iced Cappuccino', image: '/Coffee/icedcoffee/icedcapp.png', quantity: 0, price: 100 },
      { id: 19, name: 'Iced Mocha', image: '/Coffee/icedcoffee/icedmocha.png', quantity: 0, price: 120 },
      { id: 20, name: 'Iced Caramel Macchiato', image: '/Coffee/icedcoffee/icedcaramel.png', quantity: 0, price: 120 },
      { id: 21, name: 'Iced Frappe', image: '/Coffee/icedcoffee/icedfrappe.png', quantity: 0, price: 120 }

    ];

    this.nonCoffee = [
      { id: 22, name: 'Blended Oreo Milk Shake', price: 90 },
      { id: 23, name: 'Ice Cream Shake', price: 100 },
      { id: 24, name: 'Milk Shake', price: 120 },
      { id: 25, name: 'Iced Peach Tea', price: 120 },
      { id: 26, name: 'Green Tea', price: 120 }

    ];
  }


  increment(product: BlackCoffee) {
    product.quantity++;

  }
  decrement(product: BlackCoffee) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }


  getSelectedProduct(product: Product) {
    console.log("Product received:", product);

    if (product.quantity <= 0) {
      this.showMessage();
      console.log("Select at least 1 quantity")
      return
    }
    else {
      // Ensure selectedProducts is initialized as an array
      if (!this.selectedProducts) {
        this.selectedProducts = [];
      }

      // Check if the product already exists in the array using its `id`
      const existingProduct = this.selectedProducts.find(p => p.id === product.id);

      if (existingProduct) {
        // Update quantity and newTotal if product exists
        existingProduct.quantity = product.quantity;
        existingProduct.newTotal = existingProduct.quantity * existingProduct.price;
        // existingProduct.totalBill = existingProduct.totalBill + existingProduct.price; 
        existingProduct.totalBill = existingProduct.newTotal
      } else {
        // Add new product if it does not exist
        this.selectedProducts.push({
          ...product,
          newTotal: product.quantity * product.price,
          totalBill: product.quantity * product.price
        });
      }

      console.log("Updated selectedProducts:", this.selectedProducts);

      this.grandTotal = this.selectedProducts.reduce((sum, item) => sum + item.totalBill, 0);


    }



  }

  placeOrder() {

    if (!this.selectedTable?.name || !this.selectedProducts || !this.grandTotal) {
      this.showEmptyMessage();
      return
    }
    const order = {
      tableName: this.selectedTable?.name,
      products: this.selectedProducts,
      total: this.grandTotal,
      // paymentMethod: this.selectedPaymentMethod?.name
    };
    const url = "http://localhost:4000/placeorder"
    this.http.post(url, order).subscribe((res: any) => {
      if (res.message = "Order placed successfully") {
        this.placeOrderSuccessMessage();
      }
      else {
        this.placeOrderErrorMessage();
      }
    })



    console.log("Order added:", order);
  }




}
