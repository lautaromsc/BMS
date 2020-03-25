import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class BaseService {
  token = environment.token

  urlService = null;

  endpoint = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=Windows-1252',
    })
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  constructor(private http: HttpClient) {

    if(environment.production == true){
      this.urlService = 'http://localhost:3000/'; // nodejs local server
    }else{
      this.urlService = 'http://localhost:3000/'; // nodejs local server
    }

  }

  getQuery(query: string) {
    const url = `${this.urlService}${query}`;
    return this.http.get(url, this.httpOptions);
  }



}
