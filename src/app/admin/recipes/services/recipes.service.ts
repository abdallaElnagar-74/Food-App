import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private _HttpClient:HttpClient) { }
  getRecipes(myparams:any):Observable<any>{
    return this._HttpClient.get('Recipe',{params:myparams}
    )
  }
  getTags():Observable<any>{
    return this._HttpClient.get('tag')
  }
  deleteRecipe(id:number):Observable<any>{
    return this._HttpClient.delete(`Recipe/${id}`)
  }
  addRecipe(form:FormData):Observable<any>{
    return this._HttpClient.post('Recipe',form)
  }
  updateService(id:number,data:FormData):Observable<any>{
    return this._HttpClient.put(`Recipe/${id}`,data)
  }
  getRecipeById(id:any):Observable<any>{
    return this._HttpClient.get(`Recipe/${id}`)
  }
}
