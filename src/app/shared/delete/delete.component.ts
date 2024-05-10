import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'src/app/admin/categories/services/category.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
constructor(private _CategoryService:CategoryService,private _DialogRef:DialogRef,@Inject(MAT_DIALOG_DATA) public data: any){}
close(){
  this._DialogRef.close()
}

}
