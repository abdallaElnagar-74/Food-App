import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private _HttpClient:HttpClient) { }
getAllUsers(data:any):Observable<any>{
  return this._HttpClient.get('Users',{params:data})
}
deleteUser(id:number):Observable<any>{
 return this._HttpClient.delete(`Users/${id}`)
}
addToFavourites(id:number):Observable<any>{
  return this._HttpClient.post('userRecipe',{recipeId:id})
}

getFavourites():Observable<any>{
  return this._HttpClient.get('userRecipe')
}
deleteFavourites(id:number):Observable<any>{
  return this._HttpClient.delete(`userRecipe/${id}`)
}
updateUSer(data:FormData):Observable<any>{
  return this._HttpClient.put('Users',data)
}
getUserById(id:number):Observable<any>{
  return this._HttpClient.get(`Users/${id}`)
}
}
