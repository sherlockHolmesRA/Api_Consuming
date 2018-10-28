import { Injectable } from '@angular/core';

import {Http} from '@angular/http';

@Injectable()
export class ServiceapiService {

  constructor(private http: Http) { }
  getdata() {
    return this.http.get('https://api.myglamapp.pl/api/categories?language=EN');
  }
}
