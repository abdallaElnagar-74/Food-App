import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepassComponent } from 'src/app/auth/components/updatepass/updatepass.component';
import { menu } from 'src/app/auth/interfaces/dashboard';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private _AuthService:AuthService,public dialog: MatDialog){}
  @Output() sidebarEvent = new EventEmitter<any>; 
  words:boolean = false
  changeView(){
    this.sidebarEvent.emit(this.words =! this.words)
  }
  isUser():boolean{
    return true ? this._AuthService.role == "SystemUser" : false
  }
  isِAdmin():boolean{
    return true ? this._AuthService.role == "SuperAdmin" : false
  }
menu:Array<menu>=[
  {
    icon:'fa-solid fa-users',
    title:'Users',
    isActive:this.isِAdmin(),
    link:'/dashboard/admin/users'
  },
  {
    icon:'fa-solid fa-utensils',
    title:'Recipes',
    isActive:this.isِAdmin(),
    link:'/dashboard/admin/recipes'
  },
  {
    icon:'fa-regular fa-calendar-days',
    title:'Categories',
    isActive:this.isِAdmin(
    ),
    link:'/dashboard/admin/categories'
  },
  {
    icon:'fa-solid fa-utensils',
    title:'Recipes',
    isActive:this.isUser(),
    link:'/dashboard/user/userrecipe'
  },
  {
    icon:'fa-regular fa-heart',
    title:'Favourites',
    isActive:this.isUser(),
    link:'/dashboard/user/fav'
  },
]
collapse:boolean=false
openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  this.dialog.open(UpdatepassComponent, {
    width: '500px',
    enterAnimationDuration,
    exitAnimationDuration,
  });
}

}
