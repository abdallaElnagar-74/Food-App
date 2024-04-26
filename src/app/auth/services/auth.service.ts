import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, IRegister, decoded } from '../interfaces/auth';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private _HttpClient:HttpClient) { 
  if(localStorage.getItem('tokenOfUser')!==null){
    this.getDecodedInfo()
  }
}
role:any = ''
getDecodedInfo(){
 
    let encode :any =localStorage.getItem('tokenOfUser')
    let decoded:decoded = jwtDecode(encode)
    localStorage.setItem('role',decoded.userGroup)
    localStorage.setItem('name',decoded.userName)
    this.getRole()
  
}
getRole(){
  if(localStorage.getItem('tokenOfUser')!==null && localStorage.getItem('role')!==null){
    this.role = localStorage.getItem('role')
  }
}
handleLogin(data:ILogin):Observable<any>{
  return this._HttpClient.post('Users/Login',data)
}
handleRegister(data:IRegister):Observable<any>{
  return this._HttpClient.post('Users/Register',data)
}
verification(data:object):Observable<any>{
  return this._HttpClient.put('Users/verify',data)
}
forgotPass(data:object):Observable<any>{
  return this._HttpClient.post('Users/Reset/Request',data)
}
resetPassword(data:object):Observable<any>{
  return this._HttpClient.post('Users/Reset',data)
}
}
