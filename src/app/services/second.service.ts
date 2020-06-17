import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
  })
export class SecondService {

  constructor( private http : HttpClient ) { }
  getCmnt() :Observable<any>{
    return this.http.get('https://hiit.ria.rocks/videos_api/cdn/com.rstream.crafts?versionCode=40&lurl=Canvas%20painting%20ideas');
    }
}
