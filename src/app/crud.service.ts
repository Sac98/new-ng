import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  apiUrl = 'http://localhost:3000/Users';

  constructor(private http: HttpClient) {

  }

  //get call
  getData(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl);
  }

  //post call
  postData(user: IUser) {
    return this.http.post<IUser>(this.apiUrl, user)
  }

  getDataById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/${id}`);
  }

  putDataById(id: number, user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.apiUrl}/${id}`, user);
  }

  deleteDataById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
