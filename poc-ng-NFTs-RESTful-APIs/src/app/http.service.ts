import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NftAssets } from './data/dto/NftAssets';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public apiKey = ''; //at the moment is set by user during runtime

  constructor(private http: HttpClient) { }

  getRequest(url: string): Observable<NftAssets> {
    var fullUrl = url + '&apiKey=' + this.apiKey;
    console.log("getRequest() fullUrl:" + fullUrl);
    return this.http.get<NftAssets>(fullUrl);
  }

  getImage(url: string, mediaPath: string): Observable<any> {
    var fullUrl = url + mediaPath + '?apiKey=' + this.apiKey;
    console.log("getImage() fullUrl:" + fullUrl);
    return this.http.get<any>(fullUrl, { responseType: 'blob' as 'json' });
  }
}
