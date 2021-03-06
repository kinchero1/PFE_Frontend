import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient) {

  }

  addCategory(category) {
    return this.http.post("http://localhost:8080/api/category/add", category);

  }

  update(category) {
    return this.http.put("http://localhost:8080/api/category/update", category);

  }

  delete(id) {
    return this.http.delete("http://localhost:8080/api/category/delete/" + id,{responseType:'text'});

  }
  getOne(id) {
    return this.http.get<Category>("http://localhost:8080/api/category/" + id);
  }

  getAllCategories(){
    return this.http.get<Category[]>("http://localhost:8080/api/category/all");
  }

  getAllPaginCategories(pageSize, pageNumber, name = "") {
    var url = `http://localhost:8080/api/category/?pageSize=${pageSize}&pageNumber=${pageNumber}&title=${name}`

    return this.http.get<Category[]>(url);
  }


  addSubCat(category) {
    return this.http.post("http://localhost:8080/api/category/subcat/add", category);

  }

  updateSubCat(category) {
    return this.http.put("http://localhost:8080/api/category/subcat/update", category);

  }

  deleteSubCat(id) {
    return this.http.delete("http://localhost:8080/api/category/subcat/delete/" + id,{responseType:'text'});

  }
  getOneSubcat(id) {
    return this.http.get("http://localhost:8080/api/category/subcat/" + id);
  }
  getAllsubCatByCat(id){
    return this.http.get<Category[]>("http://localhost:8080/api/category/subcat/all/" + id);
  }

  getAllPaginSubCat(pageSize, pageNumber, id, name = "") {
    var url = `http://localhost:8080/api/category/subcat/?pageSize=${pageSize}&pageNumber=${pageNumber}&catid=${id}&title=${name}`

    return this.http.get<Category[]>(url);
  }


  addIRLCategory(category) {
    return this.http.post("http://localhost:8080/api/category/irlCat/add", category);

  }

  updateIRLCategory(category) {
    return this.http.put("http://localhost:8080/api/category/irlCat/update", category);

  }

  deleteIRLCategory(id) {
    return this.http.delete("http://localhost:8080/api/category/irlCat/delete/" + id,{responseType:'text'});

  }
  getOneIRLCategory(id) {
    return this.http.get<Category>("http://localhost:8080/api/irlCat/category/" + id);
  }

  getAllIRLCategories(){
    return this.http.get<Category[]>("http://localhost:8080/api/category/irlCat/all");
  }

  getAllPaginIRLCategories(pageSize, pageNumber, name = "") {
    var url = `http://localhost:8080/api/category/irlCat/?pageSize=${pageSize}&pageNumber=${pageNumber}&title=${name}`

    return this.http.get<Category[]>(url);
  }


}
