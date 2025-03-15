import { Component, inject, OnInit, signal } from '@angular/core';
import { VieworderService } from '../../services/vieworder.service';
import { OrderItem } from '../../model/orders.type';
import { catchError } from 'rxjs';

import { TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';
import { Rating } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
  selector: 'app-vieworders',
  imports: [OverlayBadgeModule, TableModule, Tag, Rating, ButtonModule, CommonModule],
  templateUrl: './vieworders.component.html',
  styleUrl: './vieworders.component.css'
})
export class ViewordersComponent implements OnInit{
  viewOrderService = inject(VieworderService)
  viewOrderItems = signal<Array<OrderItem>>([])

  numberTabOne = signal(0);
  numberTabTwo = signal(0);
  numberTabThree = signal(0);
  numberTabFour = signal(0);
  numberTabOutTab = signal(0);




  products!: OrderItem[];


  ngOnInit(): void {
    this.viewOrderService.getOrdersApi()
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err
      })
    ).subscribe((items) =>{
      this.viewOrderItems.set(items)
      this.products = items
      console.log(items)



    })
  }

  filterTable(tabName: string){

    

    console.log(tabName)

    const filterResult = this.viewOrderItems().filter(data => data.table_name.includes(tabName))

    if(tabName == "Table 1"){
      this.numberTabOne.set(filterResult.length)
    }
    else if(tabName == "Table 2"){
      this.numberTabTwo.set(filterResult.length)
    }
    else if(tabName == "Table 3"){
      this.numberTabThree.set(filterResult.length)
    }
    else if(tabName = "Table 4"){
      this.numberTabFour.set(filterResult.length)
    }
    else  if(tabName = "Outside Table"){
      console.log(tabName)
      this.numberTabOutTab.set(filterResult.length)
    }

    this.products = filterResult
  }






}
