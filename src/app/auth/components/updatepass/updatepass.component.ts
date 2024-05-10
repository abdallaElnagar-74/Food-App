import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RxwebValidators, error } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-updatepass',
  templateUrl: './updatepass.component.html',
  styleUrls: ['./updatepass.component.scss']
})
export class UpdatepassComponent {
  constructor(private _AuthService:AuthService,private _FormBuilder:FormBuilder,private _ToastrService:ToastrService,private _DialogRef:DialogRef){}
e1:boolean = false
e2:boolean = false
e3:boolean = false;
loading:boolean=false
updateForm:FormGroup=this._FormBuilder.group({
  oldPassword:[''],
  newPassword:[''],
  confirmNewPassword:['',[RxwebValidators.compare({fieldName:'newPassword'})]]
})
onClose(){
  this._DialogRef.close()
}
updatePass(){
 if(!this.loading){
  this.loading=true
  this._AuthService.updatePassword(this.updateForm.value).subscribe({
    next:res=>{
      this._DialogRef.close()
      console.log(res);
      this.loading=false
      this._ToastrService.success(res.message)
    },
    error:err=>{
      this.loading=false
      console.log(err);
      this._ToastrService.error(err.error.message)
    }
  })
 }
}
}
