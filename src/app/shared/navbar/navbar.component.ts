import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepassComponent } from 'src/app/auth/components/updatepass/updatepass.component';
import { dataOfUser } from 'src/app/core/interfaces/blank';
import { AdminService } from 'src/app/core/services/admin.service';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private _AdminService:AdminService,public dialog: MatDialog , private _Router:Router){
  }
  data!:dataOfUser
  ngOnInit(): void {
    this.getUser()
    
  }
  openUpdateDialog(enterAnimationDuration: string, exitAnimationDuration: string,id:object): void {
    const dialo = this.dialog.open(UpdateUserComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:id
    });
    dialo.afterClosed().subscribe((res)=>{
      this.getUser()
    })
  }

  imgUrl:string='https://upskilling-egypt.com:3006/'
  getUser(){
    this._AdminService.getUserData().subscribe({
      next:res=>{
        console.log(res);
        this.data = res
        console.log(this.data);
      },
      error:err=>{
        console.error(err);
      }
    })
    
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(UpdatepassComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  
  logOut(){
    localStorage.removeItem('tokenOfUser')
    this._Router.navigate(['/auth/login'])
  }
  
}
