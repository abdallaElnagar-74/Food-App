import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ResetpassComponent } from '../resetpass/resetpass.component';
import { DialogRef } from '@angular/cdk/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _FormBuilder:FormBuilder,private _AuthService:AuthService,public dialog: MatDialog , private _ToastrService:ToastrService){}
  eye:boolean=true;
  loading:boolean=false
  loginForm:FormGroup = this._FormBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })
  changeeye(){
    this.eye=!this.eye
  }
  inptype(){
    return this.eye == true ?'password':'text'
  }

  login(){
  if(!this.loading){
  this.loading=true
  this._AuthService.handleLogin(this.loginForm.value).subscribe({
    next:(resp)=>{
      console.log(resp);
      localStorage.setItem("tokenOfUser",resp.token)
      this._AuthService.getDecodedInfo()
      this.loading=false
    },
    error:(err)=>{
      console.log(err);
      this.loading=false
      this._ToastrService.error(err.error.message)
    }
  }
)
 }
  }

  forgetForm:FormGroup = this._FormBuilder.group({
    email:['']
  })
  floading:boolean=false
  msg:string=''
  good:boolean = false
  reset:boolean = false
  handleForgetPass(){
    if(!this.floading){
      this.floading = true
    this._AuthService.forgotPass(this.forgetForm.value).subscribe({
      next:res=>{
        console.log(res);
        this.floading =false
        this.msg = res.message
        this.good=true
        this.reset = true
      },
      error:err=>{
        this.reset= false
        this.good=false
        console.log(err);
        this.floading=false
        this.msg = err.error.message
      }
    })
    }
  }
  handleValue(a:HTMLInputElement){
    a.value=''
    this.reset=false
  }
  // resetPass
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ResetpassComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

