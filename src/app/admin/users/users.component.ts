import { Users } from './../../core/interfaces/users';
import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ViewuserComponent } from './components/viewuser/viewuser.component';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  constructor(private _UsersService:UsersService,public dialog: MatDialog , private _ToastrService:ToastrService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getUsers()
    
  }
  userData:Users[]=[]
  searchParam:string=''
  searchValue:any=''
  role:number[]=[]
  pageSize=10
  pageNum=1
  pageSizeOptions = [5, 10, 25];
  showPageSizeOptions = true;

  totalRecords:number=0
  imgUrl: string = 'https://upskilling-egypt.com:3006/';
  handlePageEvent(e: PageEvent) {
    this.totalRecords = e.length;
    this.pageSize = e.pageSize;
    this.pageNum = e.pageIndex;
    this.getUsers()
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string,item:object): void {
    this.dialog.open(ViewuserComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:item
    });
  }
  openDeleteDialog(enterAnimationDuration: string, exitAnimationDuration: string,item:number,type:string): void {
   const dial= this.dialog.open(DeleteComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:{
        toknow:type,
        know:item
      }
    });
    dial.afterClosed().subscribe(
      (res)=>{
        console.log(res);
        this.deleteUser(res)
      }
    )
  }

  deleteUser(id:number){
    this._UsersService.deleteUser(id).subscribe({
      next:res=>{
        console.log(res);
        this._ToastrService.success(res.message)
      },error:err=>{
        console.log(err);
        this._ToastrService.warning(err.message)
      },
      complete:()=>{
        this.getUsers()
      }
    })
  }
  getUsers(){
    let data ={
      [this.searchParam]:this.searchValue,
      groups:this.role,
      pageNumber:this.pageNum,
      pageSize:this.pageSize,
  
    }
    this._UsersService.getAllUsers(data).subscribe({
      next:res=>{
        console.log(res);
        console.log(res.data);
        this.userData = res.data
        this.totalRecords=res.totalNumberOfRecords
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
}
