import { Component, Inject, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Icategory } from 'src/app/admin/categories/categories';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/admin/categories/services/category.service';
import { DialogRef } from '@angular/cdk/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from '../../interfaces/recipes';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.scss']
})
export class AddEditRecipeComponent implements OnInit {
  constructor(private _RecipesService:RecipesService,private _FormBuilder:FormBuilder,private _ToastrService:ToastrService,private _CategoryService:CategoryService,private _Router:Router,private _ActivatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.getTags()
    this.getCategories()
this.getId()
this.getRecipeById()


  }
  categories:Icategory[]=[]
  done:boolean=false
  getId():number{
    let a:any = 0
    this._ActivatedRoute.paramMap.subscribe({
      next:(id)=>{
        a = id.get('id')
        
      }
    })
    return a
  }
  imgUrl: string = 'https://upskilling-egypt.com:3006/'
  files: File[] = [];
  tags:Icategory[]=[]
  addRecipeForm:FormGroup=this._FormBuilder.group({
    name:[''],
    description:[''],
    price:[''],
    tagId:[''],
    categoriesIds:['']
  })
  singleData!:IRecipe
  imgPath:any
  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.imgPath = this.files[0]
  }
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  onCancel(){
    this._Router.navigate(['/dashboard/admin/recipes'])
  }
  getCategories(){
    this._CategoryService.getCategotiesData(1,10000).subscribe({
      next:res=>{
        console.log(res);
        this.categories= res.data
        
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  getRecipeById(){
  if(this.getId()){
    this._RecipesService.getRecipeById(this.getId()).subscribe({
      next:res=>{
        console.log(res);
        this.singleData=res
        this.addRecipeForm.patchValue({
          name:this.singleData.name,
          description:this.singleData.description,
          price:this.singleData.price,
          tagId:this.singleData.tag.id,
          categoriesIds:this.singleData.category[0].id
        })
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  }
loading:boolean = false
  addNote(dara:any){
    let data = new FormData()
    data.append('name',this.addRecipeForm.get('name')?.value)
    data.append('description',this.addRecipeForm.get('description')?.value)
    data.append('price',this.addRecipeForm.get('price')?.value)
    data.append('tagId',this.addRecipeForm.get('tagId')?.value)
    data.append('recipeImage',this.imgPath)
    data.append('categoriesIds',this.addRecipeForm.get('categoriesIds')?.value)
  if(this.getId()){
    this.loading = true
    this._RecipesService.updateService(this.getId(),data).subscribe({
      next:res=>{
        this.loading=false
        this._Router.navigate(['/dashboard/admin/recipes'])
        this._ToastrService.success('Item Updated Successfully')
      },
      error:err=>{
        this.loading=false
        this._ToastrService.error('there is a problem')

      }
    })
  }
  else{
    if(!this.loading){
      this.loading = true
      this._RecipesService.addRecipe(data).subscribe({
        next:res=>{
          this.loading=false
          this._Router.navigate(['/dashboard/admin/recipes'])
          console.log(res);
          this._ToastrService.success('Item Added Successfully')
        },
        error:err=>{
          this.loading=false
          console.log(err); 
          this._ToastrService.error('there is a problem')
  
        }
      })
    }
    
  }
  }
  getTags(){
    this._RecipesService.getTags().subscribe({
      next:res=>{
        this.tags = res
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
}
