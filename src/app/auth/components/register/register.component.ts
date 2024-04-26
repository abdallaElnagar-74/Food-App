import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { VerifyComponent } from '../verify/verify.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
constructor (private _FormBuilder:FormBuilder,private _AuthService:AuthService,private _ToastrService:ToastrService,public dialog: MatDialog){}
eyepass:boolean = false
eyeConfirm:boolean = false
imgSrc:any
loading:boolean = false
registerForm:FormGroup = this._FormBuilder.group({
  userName:['',[Validators.required]],
  email:['',[Validators.email,Validators.required]],
  country:['',[Validators.required]],
  phoneNumber:['',[Validators.required,Validators.pattern(/^(002)?01[0125][0-9]{8}$/)]],
  profileImage:['',[Validators.required]],
  password:['',Validators.required],
  confirmPassword:['',[RxwebValidators.compare({fieldName:'password'}),Validators.required]]
})
openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  this.dialog.open(VerifyComponent, {
    width: '500px',
    enterAnimationDuration,
    exitAnimationDuration,
  });
}
register(data:FormGroup){
  let myData = new FormData()
  myData.append('userName',this.registerForm.get('userName')?.value)
  myData.append('email',this.registerForm.get('email')?.value)
  myData.append('country',this.registerForm.get('country')?.value)
  myData.append('phoneNumber',this.registerForm.get('phoneNumber')?.value)
  myData.append('password',this.registerForm.get('password')?.value)
  myData.append('confirmPassword',this.registerForm.get('confirmPassword')?.value)
  myData.append('profileImage',this.imgSrc)
if(!this.loading){
  this.loading=true
  this._AuthService.handleRegister(data.value).subscribe({
    next:res=>{
      this.Data(this.registerForm.value,'500ms', '250ms')
      this.loading = false
      console.log(res);
      this._ToastrService.success(res.message)
    },error:err=>{
      this.loading =false
      console.log(err);
     this._ToastrService.error(err.error.message)
    }
    
  })

}
}
Data(inputs:object,enterAnimationDuration: string, exitAnimationDuration: string){
  this.dialog.open(VerifyComponent,{
    width: '500px',
    enterAnimationDuration,
    exitAnimationDuration,
    data:inputs
  });
}
files: File[] = [];
onSelect(event:any) {
  console.log(event);
  this.files.push(...event.addedFiles);
  this.imgSrc=this.files[0]
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}
}
