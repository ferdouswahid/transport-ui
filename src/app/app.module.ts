import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import {ToastModule} from './shared/components/toast/toast.module';
import { AuthModule } from './components/auth/auth.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AuthGuard } from './shared/service/auth.guard';
import { AuthInterceptor } from './shared/service/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    DashboardModule,
    AuthModule,
    SharedModule,
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
  ],

  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
