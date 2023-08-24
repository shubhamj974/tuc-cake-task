import { Component, OnInit } from '@angular/core';

import { Icakeshop } from '../../models/Icakeshop';
import { cakeArray } from './../constant/cake';

@Component({
  selector: 'app-cake-dashboard',
  templateUrl: './cake-dashboard.component.html',
  styleUrls: ['./cake-dashboard.component.scss']
})
export class CakeDashboardComponent implements OnInit {
  public cakeShopArr !: Array<Icakeshop>
  public searchVal !: string

  public allItemArr: Array<Icakeshop> = []
  constructor() { }

  ngOnInit(): void {
    this.cakeShopArr = cakeArray
    this.cakeShopArr.forEach(ele => {
      this.allItemArr.push(ele)
    })
  }

  onAllItems(item1: string, item2: string, item3: string) {
    this.allItemArr.splice(0, this.allItemArr.length)
    this.cakeShopArr.forEach(ele => {
      if (ele.name.toLowerCase().includes(item1) ||
        ele.name.toLowerCase().includes(item2) ||
        ele.name.toLowerCase().includes(item3)) {
        this.allItemArr.push(ele)
      }
    })
  }


  onItemData(item: string) {
    this.allItemArr.splice(0, this.allItemArr.length)
    this.cakeShopArr.forEach(ele => {
      if (ele.name.toLowerCase().includes(item)) {
        this.allItemArr.push(ele)
      }
    })
  }


}
