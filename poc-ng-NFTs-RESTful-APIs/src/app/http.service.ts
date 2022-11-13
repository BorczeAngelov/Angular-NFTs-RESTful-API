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

  getImage(url: string, mediaPath: string): Observable<any> {
    console.log("getImage() url:" + url, + "mediaPath:" + mediaPath);
    var fullUrl = url + mediaPath;
    return this.http.get<any>(fullUrl,
      { responseType: 'blob' as 'json'});
  }
}
