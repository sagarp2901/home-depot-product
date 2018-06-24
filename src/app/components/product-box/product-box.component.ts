import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
  @Input() amount;

  constructor() { }

  ngOnInit() {
  }

  amountArray(n: number): any[] {
    return Array(n);
  }
}
