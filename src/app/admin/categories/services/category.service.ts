import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

constructor(private _HttpClient:HttpClient) { }
getCategotiesData(pageNo:number,pageSiz:number):Observable<any>{
  return this._HttpClient.get('Category',{params:{pageSize:pageSiz,pageNumber:pageNo}})
}
addToCategory(name:string):Observable<any>{
return this._HttpClient.post('Category',{name:name})
}
getOneCategory(id:number):Observable<any>{
return this._HttpClient.get(`Category/${id}`)
}
updateCategory(id:number,upName:string):Observable<any>{
  return this._HttpClient.put(`Category/${id}`,{name:upName})
}
deleteCategory(id:number):Observable<any>{
  return this._HttpClient.delete(`Category/${id}`)
}
}
