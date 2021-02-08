import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CountToModule } from 'angular-count-to';
import { ChartsModule } from 'ng2-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartistModule } from 'ng-chartist';
import { SharedModule } from '../../shared/shared.module';
import {AgmCoreModule} from '@agm/core';
import {AuthGuard} from '../../shared/service/auth.guard';
import {AuthService} from '../../shared/service/auth.service';
import {DashboardService} from './dashboard.service';
import {ToastModule} from '../../shared/components/toast/toast.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CountToModule,
    SharedModule,
    ChartsModule,
    Ng2GoogleChartsModule,
    NgxChartsModule,
    ChartistModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOXbB9MA_zJqMLQX5MV52kN05jelcTxtw'
    }),

  ],
  providers: [
    DashboardService,
    ]
})
export class DashboardModule { }
