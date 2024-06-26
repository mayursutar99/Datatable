import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../app.model';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url: string = 'http://localhost:3000/userDetails'
  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
}
