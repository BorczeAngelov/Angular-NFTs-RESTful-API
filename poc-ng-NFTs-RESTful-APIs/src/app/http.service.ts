import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NftAssets } from './dto/NftAssets';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  getRequest(url: string): Observable<NftAssets> {
    console.log("getRequest() url:" + url);
    return this.http.get<NftAssets>(url);
  }
}
