import { Component, OnInit } from '@angular/core';
import * as chartData from '../../shared/data/chart';
import { doughnutData, pieData } from '../../shared/data/chart';
import {AuthService} from '../../shared/service/auth.service';
import {DashboardService} from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  gmapLat = 23.799567;
  gmapLng = 90.364012;
  selectedStop = {id: '', lat: 0, lng: 0, lines: '', location: '',name:'',placeName:'',type:''};

  public stopList: any = [
    {id: '1', lat: 23.796987, lng: 90.402148, lines: '1,36', location: 'C.FRANCIA / V.BORGOSESIA',
      name:'RUBIANA 1',placeName:'Torino',type:'BUS'},
    {id: '2', lat: 23.8128029, lng: 90.4074484, lines: '1,36', location: 'C.FRANCIA / V.BORGOSESIA',
      name:'RUBIANA 2',placeName:'Torino',type:'BUS'},
    {id: '3', lat: 23.753762, lng: 90.3755624, lines: '1,36', location: 'C.FRANCIA / V.BORGOSESIA',
      name:'RUBIANA 3',placeName:'Torino',type:'BUS'},
  ];
  /*icon = { url: '', scaledSize: { width: 30, height: 30 } };*/
  lineList=[];

  stopClicked(marker) {
    this.selectedStop = marker;
  }

  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit() {
    // this.getAllStop();
  }

  getAllStop(){
    this.dashboardService.getAllStop().subscribe(res => {
        /*if (res.status === true) {
          this.stopList=res.data;
        }
        if (res.status === false) {
          console.log('response err: ', res);
        }*/
      }, err => {
        console.log(' err: ', err);
        // console.error(`Error: ${err.status} ${err.statusText}`);
      }
    );
  }

  getLineList(selectedStop){
    this.lineList=[{line:"2",hour:"18:32",realtime:"true"},{line:"2",hour:"19:34",realtime:"false"},{line:"2",hour:"",realtime:"false"}];
    this.dashboardService.getStopList(selectedStop.id).subscribe(res => {
          /*if (res.status === true) {
            this.lineList=res.data;
          }
          if (res.status === false) {
            console.log('response err: ', res);
          }*/
        }, err => {
          console.log(' err: ', err);
          // console.error(`Error: ${err.status} ${err.statusText}`);
        }
      );
  }

}
