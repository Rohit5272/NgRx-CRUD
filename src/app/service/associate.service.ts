import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Associates } from '../Store/Model/Associate.model';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  baseurl = "http://localhost:3000/associate";

  constructor(private _http:HttpClient) { }

  getAll() {
    return this._http.get<any>("http://localhost:3000/associate");
  }

  create(data:any) {
    return this._http.post(this.baseurl,data);
  }

  getbyid(id:string){
    return this._http.get(`${this.baseurl}/${id}`);
  }

  update(data:any) {
    return this._http.put(`${this.baseurl}/${data.id}`,data);
  }

  delete(id:string){
    return this._http.delete(`${this.baseurl}/${id}`);
  }
}
