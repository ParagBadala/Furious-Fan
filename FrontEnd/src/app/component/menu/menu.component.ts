import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public pageTitle = 'Movie Database';
  public userName:string;
  private _isLoggedIn:boolean;
  constructor( public router:Router , private _loginService:LoginService) { }

  ngOnInit() {
    this._isLoggedIn=this._loginService.loggedInStatus;
    this.userName = this._loginService.userName;
  }

  logOut(){
    this.router.navigate(['login']);
    this._loginService.setLoggedin(this.userName,false);
  }

}
