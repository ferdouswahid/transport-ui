import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NavService } from '../../service/nav.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-card',
  template: `
    <div style="border: 3px solid blue">
      <h3>Child component Card count is {{ cardCountChild }}</h3>
      <button (click)="increment()">+ child</button>
      <button (click)="decrement()">- child</button>
    </div>
  ` ,
  styleUrls: []
})
export class CardComponent  implements OnInit {
  cardCountChild = 0;

  increment() {
    this.cardCountChild = this.cardCountChild + 1;
  }
  decrement() {
    this.cardCountChild = this.cardCountChild - 1;
  }

  constructor() { }
  ngOnInit() {  }


}
