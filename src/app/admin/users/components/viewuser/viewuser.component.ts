import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Users } from 'src/app/core/interfaces/users';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.scss']
})
export class ViewuserComponent {
constructor(@Inject(MAT_DIALOG_DATA) public data: Users , public _DialogRef:DialogRef){}
imgUrl: string = 'https://upskilling-egypt.com:3006/';


}
