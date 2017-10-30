import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class GetBookListService {

  constructor(private http: Http) { }

  data = [];

  getBookList(){
    // let url = "http://localhost:8181/token";
    //
    // let headers = new Headers({
    //   'Content-Type': 'application/json',
    //   'x-auth-token': localStorage.getItem('xAuthToken')
    // });
    // return this.http.post(url, {headers: headers});
    return this.http.get('assets/MOCK_DATA.json');
  }

}
