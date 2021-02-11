import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../shared/shared.module';
import {AuthGuard} from '../../shared/service/auth.guard';
import {AuthService} from '../../shared/service/auth.service';
import {AuthInterceptor} from '../../shared/service/auth.interceptor';
import {UrlPermission} from '../../shared/service/url.permission';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule,
    SharedModule,
  ],
  providers: [
    AuthService,
  ],
})
export class AuthModule { }
