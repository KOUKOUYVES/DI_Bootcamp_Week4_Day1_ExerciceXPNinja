import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
 ngOnInit(): void {
   
 }
 produits = Array()

 constructor(){
  this.produits =  this.getNames();
 }

  getNames() {
    return [
        { 'name': 'pagne','prix': 15000 },
        { 'name': 'phone','prix': 2000},
        { 'name': 'ordinateur','prix': 5000},
        { 'name':'TV','prix': 1500}
    ];
}
}
