import { Component } from '@angular/core';
import { CategoryService } from './services/category.service';
import { Icategory } from './categories';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { ViewComponent } from './components/view/view.component';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { ToastrService } from 'ngx-toastr';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
constructor(private _CategoryService:CategoryService,public dialog: MatDialog,private _ToastrService:ToastrService){
}

ngOnInit(): void {

  this.getData()
  console.log(this.data);
  
  
}
pageSize:number = 15
pageNumber:number = 1
listData:any
data:Icategory[]=[]
getData(){
  this._CategoryService.getCategotiesData(this.pageNumber,this.pageSize).subscribe({
    next:(res)=>{
      console.log(res);
      this.listData = res
      this.data = res.data
      console.log(this.data);
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
categoryItem:string=''
openDialog2(enterAnimationDuration: string, exitAnimationDuration: string,idOfCat:number): void {
  this.dialog.open(ViewComponent, {
    width: '500px',
    enterAnimationDuration,
    exitAnimationDuration,
    data:idOfCat
  });
}
deleteCat(id:number){
  this._CategoryService.deleteCategory(id).subscribe({
    next:res=>{
      this._ToastrService.success('Item Deleted Successfully')
      console.log(res);
    },
    error:err=>{
      console.log(err);
      
    },complete:()=>{
      this.getData()
    }
  })
}
openDialog(value:boolean,id?:number,name?:string): void {
  const dialogRef = this.dialog.open(AddEditCategoryComponent, {
    width: '500px',
    data: {
      name:this.categoryItem,
      add:value,
      namee:name
    },
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    if(result&&value==true){
      this.addToCategories(result)
    }
    else{
      this.updateCategory(result,id)
    }
  
  });
}
hidePageSize = false;
showPageSizeOptions = true;
showFirstLastButtons = true;
disabled = false;
pageEvent!: PageEvent;
length = this.data.length;
pageSizze = 10;
pageIndex = 50;
pageSizeOptions = [5, 10,15,20, 25];
handlePageEvent(e: PageEvent) {
  this.pageEvent = e;
  this.length = e.length;
  this.pageSize = e.pageSize;
  this.pageNumber = e.pageIndex;
  this.getData()
}

openDeleteDialog(enterAnimationDuration: string, exitAnimationDuration: string,id:any,key:string): void {
 const dialo= this.dialog.open(DeleteComponent, {
    width: '500px',
    enterAnimationDuration,
    exitAnimationDuration,
    data:{
      know:id,
      toknow:key
    }
  });
  dialo.afterClosed().subscribe(res=>{
    this.deleteCat(res)
  })
}
addToCategories(catName:string){
  this._CategoryService.addToCategory(catName).subscribe({
    next:res=>{
      console.log(res);
      this._ToastrService.success('Item Added Successfully')
    },
    error:err=>{
      console.log(err);
      
    },
    complete: ()=>{
      this.getData()
    }
  })
}
updateCategory(catName:string,id:any){
  this._CategoryService.updateCategory(id,catName).subscribe({
    next:res=>{
      console.log(res);
      this._ToastrService.success('Item Updated Successfully')
    },
    error:err=>{
      console.log(err);
      
    }
    ,
    complete:()=>{
      this.getData()
    }
  })
}

}

