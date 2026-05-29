import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  API_URL = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) {

  }

  getUsers() {
    return this.http.get(this.API_URL);
  }
  
  getUserData() {
    return {
      name: 'John Doe',
      email: 'john.doe@example.com'
    };
  }
}
