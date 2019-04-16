import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //showLoading = true;
  constructor(private _router: Router){
    // this._router.events.subscribe(
    //   (routerEvent: Event)=>{
    //     if(routerEvent instanceof NavigationStart){
    //       this.showLoading = true;
    //     }
    //     if(routerEvent instanceof NavigationEnd){
    //       this.showLoading = false;
    //     }
    //   }
    // )
  }

  ngOnInit() {
  }

}
