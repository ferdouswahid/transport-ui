import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/service/auth.service';
import {DashboardService} from './dashboard.service';

import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  gmapLat = 45.0735886;
  gmapLng = 7.6055661;
  zoom = 12;
  selectedStop = {id: '', lat: 0, lng: 0, lines: '', location: '',name:'',placeName:'',type:''};
  userProfileDetail = {name:''};
  public stopList: any = [];
  /*icon = { url: '', scaledSize: { width: 30, height: 30 } };*/
  lineList=[];
  loadingLine=false;

  constructor(private dashboardService: DashboardService,private toastrService: ToastrService,
              private authService: AuthService,private router: Router) {}

  ngOnInit() {
    if (this.authService.getToken() === '') {
      this.router.navigate(['/auth/login']);
    }else{
      this.getAllStop();
    }
  }

  stopClicked(marker) {
    this.selectedStop = marker;
  }

  getAllStop(){
    this.dashboardService.getAllStop().subscribe(res => {
        if (res.status === true) {
          this.stopList=res.data;
        }
        if (res.status === false) {
          this.toastrService.error( 'Could not fetched All Stops', 'Error',{timeOut: 3000,});
        }
      }, err => {
        this.toastrService.error( 'Could not fetched All Stops','Error', {timeOut: 3000,});
        console.log(' err: ', err);
        // console.error(`Error: ${err.status} ${err.statusText}`);
      }
    );
  }

  getLineList(selectedStop){
    this.loadingLine=true;
    this.dashboardService.getStopList(selectedStop.id).subscribe(res => {
        if (res.status === true) {
          this.lineList=res.data;
          this.loadingLine=false;
        }
        if (res.status === false) {
          console.log('response err: ', res);
          this.toastrService.error( 'Could not fetched Steps','Error', {timeOut: 3000,});
          this.loadingLine=false;
        }
      }, err => {
        console.log(' err: ', err);
        this.loadingLine=false;
        this.toastrService.error('Could not fetched Steps','Error', {timeOut: 3000,});
        // console.error(`Error: ${err.status} ${err.statusText}`);
      }
    );
  }



}
