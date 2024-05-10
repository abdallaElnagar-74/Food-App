import { Component, Renderer2 } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { Icategory } from 'src/app/admin/categories/categories';
import { CategoryService } from 'src/app/admin/categories/services/category.service';
import { IRecipe } from 'src/app/admin/recipes/interfaces/recipes';
import { RecipesService } from 'src/app/admin/recipes/services/recipes.service';
import { UsersService } from 'src/app/admin/users/services/users.service';

@Component({
  selector: 'app-userrecipe',
  templateUrl: './userrecipe.component.html',
  styleUrls: ['./userrecipe.component.scss']
})
export class UserrecipeComponent {
  constructor(private _RecipesService:RecipesService,private _CategoryService:CategoryService,private _ToastrService:ToastrService,private _user:UsersService,private _renderer:Renderer2){}
  searchValue:string = ''
  tag:number=0
  cat:number=0
  pSize:number=10
  pNum:number=1
  recipeData:IRecipe[]=[]
  totalData:number = 0
  tags: Icategory[] = [];
  imgUrl: string = 'https://upskilling-egypt.com:3006/';
  categories:Icategory[]=[]
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getRecipes()
    this.getCategories()
    this.getAllTags()
  }
  getCategories() {
    this._CategoryService.getCategotiesData(1, 10000).subscribe({
      next: (res) => {
        console.log(res);
        this.categories = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getAllTags() {
    this._RecipesService.getTags().subscribe({
      next: (res) => {
        console.log(res);
        this.tags = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getRecipes(){
    let data={
      name:this.searchValue,
      tagId:this.tag,
      categoryId:this.cat,
      pageSize:this.pSize,
      pageNumber:this.pNum
    }
    this._RecipesService.getRecipes(data).subscribe({
      next:res=>{
        this.recipeData = res.data
        this.totalData=res.totalNumberOfRecords;
      },
      error:err=>{
        this._ToastrService.error('The is A problem in Showing data')
      }
    })
  }
  pageSizeOptions = [5, 10, 25];
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  handlePageEvent(e: PageEvent) {
    this.totalData = e.length;
    this.pSize = e.pageSize;
    this.pNum = e.pageIndex;
    this.getRecipes();
  }
  addToFav(id:number,ele:HTMLButtonElement){
    this._renderer.setAttribute(ele,'disabled','true')
    this._user.addToFavourites(id).subscribe({
      next:res=>{
        this._renderer.removeAttribute(ele,'disabled','false')
        this._ToastrService.success('Item Added Successfully')
      }
    })
  }
}
