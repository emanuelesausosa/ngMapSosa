import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) { }

  getPositions() {
   return this.http.get('http://emanuelesausosa-002-site3.ftempurl.com/api/Home/allGps').map(res => res.json());
  }
}
