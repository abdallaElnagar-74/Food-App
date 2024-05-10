import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IRecipe } from 'src/app/admin/recipes/interfaces/recipes';
import { UsersService } from 'src/app/admin/users/services/users.service';
import { Fav } from 'src/app/core/interfaces/users';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent {
  constructor(private _UsersService:UsersService,private _ToastrService:ToastrService){}
  
  ngOnInit(): void {
    this.getFav()
  }
  imgUrl: string = 'https://upskilling-egypt.com:3006/';
  recipeData:Fav[]=[]
  getFav(){
    this._UsersService.getFavourites().subscribe({
      next:res=>{
        this.recipeData = res.data
        console.log(this.recipeData);
        
      }
    })
  }
  delete(id:number){
    this._UsersService.deleteFavourites(id).subscribe({
      next:res=>{
        this._ToastrService.success('Item deleted successfully')
      }
      ,complete:()=>{
        this.getFav()
      }
    })
  }
}
