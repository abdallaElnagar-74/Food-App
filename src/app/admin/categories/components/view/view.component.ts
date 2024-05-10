import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Icategory } from '../../categories';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
constructor(private _DialogRef:DialogRef,private _CategoryService:CategoryService, @Inject(MAT_DIALOG_DATA)public data:any ){
  this.getSpecCat()
}
reposze!:Icategory
getSpecCat(){
  this._CategoryService.getOneCategory(this.data).subscribe({
    next:res=>{
      console.log(res);
      this.reposze = res
    },
    error:err=>{
      console.log(err);
      
    }
  })
}
}
