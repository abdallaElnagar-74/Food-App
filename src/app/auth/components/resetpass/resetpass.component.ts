import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RxwebFormDirective, RxwebValidators, email } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.scss']
})
export class ResetpassComponent {
  constructor(private _AuthService:AuthService,private _FormGroup:FormBuilder,private _ToastrService:ToastrService,private _DialogRef:DialogRef){}
loading:boolean=false
  resetPassForm:FormGroup = this._FormGroup.group({
    email:['',[Validators.email,Validators.required]],
    password:['',[Validators.required]],
    confirmPassword:['',[RxwebValidators.compare({fieldName:'password'}),Validators.required]],
    seed:['',[Validators.required]]
  })
  eye:boolean=false
  eyeLash:boolean=false
resetPassword(){
 if(!this.loading){
  this.loading=true
  this._AuthService.resetPassword(this.resetPassForm.value).subscribe({
    next:res=>{
      this._DialogRef.close()
      this._ToastrService.success(res.message)
      this.loading=false
      console.log(res);
      
    },
    error:err=>{
      this.loading=false
      console.log(err);
      
    }
  })
}
 }
}

