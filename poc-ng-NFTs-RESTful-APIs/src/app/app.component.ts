import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NftAssets } from './dto/NftAssets';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poc-ng-NFTs-RESTful-APIs';
  public response$!: Observable<NftAssets>;

  constructor(private httpService: HttpService) {
    
  }

  public placeDetail = {
    "menu": {
      "id": "file",
      "value": "File",
      "popup": {
        "menuitem": [
          { "value": "New", "onclick": "CreateNewDoc()" },
          { "value": "Open", "onclick": "OpenDoc()" },
          { "value": "Close", "onclick": "CloseDoc()" }
        ]
      }
    }
  };


  onSendRequest(url: string) {
    this.response$ = this.httpService.getRequest(url);
  }

}
