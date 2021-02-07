import {Component, OnInit, Output, Input, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { NavService } from '../../service/nav.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
    <div style="border: 3px solid red">
      <h3>Child component Input count is {{ count }}</h3>
      <button (click)="increment()">+ child</button>
      <button (click)="decrement()">- child</button>
    </div>
  ` ,
  styleUrls: []
})
export class InputComponent  implements OnInit, OnChanges {

  @Input() count: number;

  @Output() countChangedChild: EventEmitter<number> =   new EventEmitter();

  increment() {
    this.count++;
    this.countChangedChild.emit(this.count);
  }
  decrement() {
    this.count--;
    this.countChangedChild.emit(this.count);
  }

  constructor() { }
  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }


}
