import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleStatus=false;

  toggle(){
    this.toggleStatus=!this.toggleStatus;
  }
  getSidenavDisplay(){
    if(!this.toggleStatus){
      return 'none'
    }
    else{
      return "block"
    }
  }

}
