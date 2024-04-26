import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent {
  constructor(private _AuthService:AuthService,private _FormBuilder:FormBuilder,private _ToastrService:ToastrService,private _DialogRef:DialogRef,
    @Inject(MAT_DIALOG_DATA)public data:any
  ){}
  loading:boolean = false
  verifyForm = new FormGroup ({
    email : new FormControl(this.data.email),
    code : new FormControl('')
  })
  verify(){
    this.loading =true
    this._AuthService.verification(this.verifyForm.value).subscribe({
      next:res=>{
        this._DialogRef.close()
        this.loading=false
        console.log(res);
        this._ToastrService.success(res.message)
      },
      error:err=>{
        this.loading=false
        console.log(err);
        
      }
    })
  }
}
