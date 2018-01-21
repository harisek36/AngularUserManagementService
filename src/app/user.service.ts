import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  users: User[] = [];

  private userUrl = 'app/userDictionary';  // URL to web api


  private serverResponse = '{ "email": [ "can\'t be blank" ], "first_name": [ "can\'t be blank" ], "last_name": [ "can\'t be blank" ] }';
  // private userDictionary = {
  //   1: '{ "id": 1, "buyer_id": 1, "first_name": "Fred", "last_name": "Flintstone", "email": "fred.flintstone@slaterockandgravel.com" }',
  //   2: '{ "id": 2, "buyer_id": 2, "first_name": "Barney", "last_name": "Rubble", "email": "barney.rubble@slaterockandgravel.com" }',
  //   3: '{ "id": 3, "buyer_id": 3, "first_name": "Wilma", "last_name": "Flintstone", "email": "wilma.flinstone@dailygranite.com" }'
  // };

  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
   // this.users = JSON.parse("["+Object.keys(this.userDictionary).map(key => this.userDictionary[key]).join(',')+"]");
  }

  getUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url);
    // return JSON.parse(this.userDictionary[id]);
  }

  // private logError(error: any) {
  //   console.error('service found an error: '+error);
  // }

}
