import { Component, OnInit } from '@angular/core';
import * as chartData from '../../shared/data/chart';
import { doughnutData, pieData } from '../../shared/data/chart';
import {AuthService} from '../../shared/service/auth.service';
import {DashboardService} from './dashboard.service';
import {ToastService} from '../../shared/service/toast.service';
import {ActivatedRoute, Router} from '@angular/router';

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
  public stopList: any = []
  /*icon = { url: '', scaledSize: { width: 30, height: 30 } };*/
  lineList=[];
  loadingLine=false;

  constructor(private dashboardService: DashboardService,private toastService: ToastService,
              private authService: AuthService,private router: Router,) {}

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
          //this.toastService.successToast('All stops fetched successfully');
          this.stopList=res.data;
        }
        if (res.status === false) {
          this.toastService.failedToast('Error');
          console.log('response err: ', res);
        }
      }, err => {
        console.log(' err: ', err);
        this.toastService.failedToast('Error');
        // console.error(`Error: ${err.status} ${err.statusText}`);
      }
    );
  }

  getLineList(selectedStop){
    // this.lineList=[{line:"2",hour:"18:32",realtime:"true"},{line:"2",hour:"19:34",realtime:"false"},{line:"2",hour:"",realtime:"false"}];
    this.loadingLine=true;
    this.dashboardService.getStopList(selectedStop.id).subscribe(res => {
        if (res.status === true) {
          this.lineList=res.data;
          this.loadingLine=false;
        }
        if (res.status === false) {
          console.log('response err: ', res);
          this.loadingLine=false;
        }
      }, err => {
        console.log(' err: ', err);
        this.loadingLine=false;
        // console.error(`Error: ${err.status} ${err.statusText}`);
      }
    );
  }

}
