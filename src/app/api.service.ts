import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  get_all(){
    return this.http.get("http://127.0.0.1:8000/api/get_all")
  }

  upload(query:any){
    const formData = new FormData(); 
    formData.append("image", query.file);
    return this.http.post("http://127.0.0.1:8000/api/upload",formData)
  }
}
