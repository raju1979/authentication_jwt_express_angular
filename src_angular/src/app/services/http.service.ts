import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers,Response,Request } from '@angular/http';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {

  constructor(private _http:Http, private _httpClien:HttpClient) { 


  }

  getContacts(){
    let token = "aeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiYWRtaW4iOiJ0cnVlIiwiaWF0IjoxNTA5NjkwODMzLCJleHAiOjE1MDk3MDUyMzN9.V8qxVdknqntZXJHRvvDa2P-t5C4Gb3HbsRKVI4_ujCk"
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization','Bearer '+token)

    let user =  { "username": "admin", "admin": true, "password": "Pt4bvZSSI4KN4g"}

    var body = JSON.stringify(user);
    
    let options = new RequestOptions({headers: headers});
    let _request = new Request({
        method: "POST",
        body:body,
        // change url to "./data/data.junk" to generate an error
        url: "http://localhost:5000/user/contact",
        headers:new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        })
    });

    return this._http.request(_request)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw({status:error.status,message:error.json().error})); 

  }


}
