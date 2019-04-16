import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public errorMessage:string;
  constructor(public router:Router, private _loginService: LoginService) { }

  ngOnInit() {
  }

  public login(form){
    if(form.value.userName == 'admin' && form.value.password == 'admin'){
      this._loginService.setLoggedin(form.value.userName,true);
      this.router.navigate(['home']);
      
    }
    else{
      this.errorMessage='Wrong Credentials';  
    }
  }

}
