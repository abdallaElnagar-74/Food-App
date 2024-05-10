import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Icategory } from 'src/app/admin/categories/categories';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  constructor(private _RecipesService:RecipesService,private _FormBuilder:FormBuilder){
    this.getTags()
  }
  files: File[] = [];
  tags:Icategory[]=[]
  addRecipeForm:FormGroup=this._FormBuilder.group({
    name:[''],
    description:[''],
    price:[''],
    tagId:[''],
    recipeImage:['']
  })
  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
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
