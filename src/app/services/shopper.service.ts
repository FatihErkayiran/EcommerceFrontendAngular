import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shopper } from '../models/Shopper';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopperService {
  
  baseUrl:string="http://localhost:3000/shoppers"


  constructor(private http:HttpClient) { }

  public get_shoppers() {
    return this.http.get<Shopper[]>(this.baseUrl)
  }
  
  public add_shopper(shopper:Shopper):Observable<any>{
   
    return this.http.post<Shopper>(this.baseUrl,shopper);

  }
  
  public delete_shopper(id){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  public update_shopper(id:number,edited_student ){
    return this.http.put(`${this.baseUrl}/${id}`,edited_student);
  }

  public get_shopper(id){
    return this.http.get(`${this.baseUrl}/${id}`);
  }


}

//99.14.206.33