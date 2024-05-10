import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/admin/users/services/users.service';
import { dataOfUser } from 'src/app/core/interfaces/blank';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
constructor(private _UsersService:UsersService,private _FormBuilder:FormBuilder,private _ToastrService:ToastrService,public _DialogRef:DialogRef,@Inject(MAT_DIALOG_DATA) public data: dataOfUser){
  // this.getUserById()
}
updateForm:FormGroup=this._FormBuilder.group({
  userName:[this.data.userName],
  email:[this.data.email],
  country:[this.data.country],
  phoneNumber:[this.data.phoneNumber],
  confirmPassword:['',[Validators.required]]
})
imgSrc:any
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

updateUser(){
  let formdata = new FormData()
  Object.entries(this.updateForm.value).forEach(([key, value]:any) => {
    formdata.append(`${key}`,value)
  });
  formdata.append('profileImage',this.imgSrc)
this._UsersService.updateUSer(formdata).subscribe({
  next:res=>{
    console.log(res);
    this._DialogRef.close()
    this._ToastrService.success("Profile Updated Successfully")
    
  }
  ,error:err=>{
   console.log(err);
   this._ToastrService.error(err.error.message)
  }
})
}
// getUserById(){
//   console.log(this.data.data);
//   this._UsersService.getUserById(this.data.data).subscribe({
//     next:res=>{
      
//       console.log(res);
      
//     },
//     error:err=>{
//       console.log(err);
      
//     }
//   })
// }
}
