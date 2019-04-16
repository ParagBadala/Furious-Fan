import { Injectable } from '@angular/core';

import { User } from '../../assets/DataStruct/dataStruct'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  private _loggedInStatus = this._loggedInStatus?JSON.parse(JSON.parse(localStorage.getItem('userData')).loggedInStatus || 'false'):JSON.parse('false');
  private _user:User;
  constructor() { }

  public setLoggedin(name:string, value:boolean){
    this._user = JSON.parse('{"name":"'+name+'","loggedInStatus":"'+value+'"}');
    localStorage.setItem('userData',JSON.stringify(this._user));
  }

   get loggedInStatus(){
    return JSON.parse(JSON.parse(localStorage.getItem('userData')).loggedInStatus || this._loggedInStatus.toString());
   }

   get userName(){
     return JSON.parse(localStorage.getItem('userData')).name;
   }

}
