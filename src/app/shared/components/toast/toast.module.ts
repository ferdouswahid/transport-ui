
import {NgModule} from '@angular/core';
import {ToastComponent} from './toast.component';
import {NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
@NgModule({
  declarations: [
    ToastComponent,
  ],
  imports: [
    NgbToastModule,
    CommonModule
  ],
  exports: [
    ToastComponent,
  ]
})
export class ToastModule { }

