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

  public imageUrl$!: Observable<any>
  public isImageLoading: boolean = false;
  public imageToShow: any;

  constructor(private httpService: HttpService) {

  }


  onSendRequest(url: string) {
    this.response$ = this.httpService.getRequest(url);
  }


  onGetMediaRequest(url: string, mediaPath: string) {
    console.log(url);
    console.log(mediaPath);

    // this.imageUrl$ = this.httpService.getImage(url, mediaPath);

    this.isImageLoading = true;
    this.httpService.getImage(url, mediaPath)
      .subscribe(data => {
        console.log("OK");
        console.log(data);
        // this.image = data.arrayBuffer();
        this.imageUrl$ = data.arrayBuffer();
        this.createImageFromBlob(data);
        this.isImageLoading = false;
      }, error => {
        this.isImageLoading = false;
        console.log("NOK");
        console.log(error);
      });
  }


  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

}
