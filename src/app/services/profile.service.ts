import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../models/profile';
import { User } from '../models/user';
import { EventemitterService } from './eventemitter.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  PAGE_KEY="profilePage";

  pageNumber:BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private userSer: UserService, private http: HttpClient, private eventEmitter: EventemitterService) { }

  

  addProfile(profile: Profile) {

    return this.http.post<Profile>("http://localhost:8080/api/profiles/add", profile)

  }

  updateProfile(profile: Profile) {

    return this.http.put<Profile>("http://localhost:8080/api/profiles/update", profile)

  }

  getProfileById(id: number) {

    return this.http.get<Profile>("http://localhost:8080/api/profiles/"+id)

  }

  getProfileByUser(user:User) {

    return this.http.post<Profile>("http://localhost:8080/api/profiles/user", user)

  }

  getProfilesByUsers(users:User[]){
    return this.http.post<Profile[]>("http://localhost:8080/api/profiles/allByUsers", users)
  }

  getSpeciality(id:number){
    return this.http.get("http://localhost:8080/api/profiles/getSpecialization/"+id,{responseType:'text'})
  }

  getProfilesFiltred(pageNumber:number,pageSize:number,country:string='',speciality:string='',language:string =''){
    return this.http.get(`http://localhost:8080/api/profiles/?pageSize=${pageSize}&pageNumber=${pageNumber}&Country=${country}&Speciality=${speciality}&Language=${language}`)
  }
  
  setPage(id){
    localStorage.setItem(this.PAGE_KEY,id);
    this.pageNumber.next(id)
 
  }

  getPage(){
    this.pageNumber.next( localStorage.getItem(this.PAGE_KEY) ? parseInt( localStorage.getItem(this.PAGE_KEY)) : 0);
  }

  getPageFromLocalStorage(){
   return localStorage.getItem(this.PAGE_KEY);
  }



  clearPage(){
    this.pageNumber.next(0)
    localStorage.removeItem(this.PAGE_KEY);
  }
}
