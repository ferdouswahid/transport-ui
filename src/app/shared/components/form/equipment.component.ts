import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NavService } from '../../service/nav.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-equipment',
  template: `
    <div style="border: 3px solid green">
      <h3>Child Component Equipment count is {{ count }}
      <button (click)="increment()">+ child</button>
      <button (click)="decrement()">- child</button>
      </h3>
    </div>
  ` ,
  styleUrls: []
})
export class EquipmentComponent  implements OnInit {
  count = 0;

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

  constructor() { }
  ngOnInit() {  }


}
