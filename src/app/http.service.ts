import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(input: string): Observable<object> {
    return this.http.get(`https://api.agify.io?name=${input}`);
  }
}
