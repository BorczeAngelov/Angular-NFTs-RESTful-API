import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-nft-media',
  templateUrl: './nft-media.component.html',
  styleUrls: ['./nft-media.component.css']
})
export class NftMediaComponent implements OnInit {

  public imageUrl$!: Observable<any>
  public isImageLoading: boolean = false;
  public imageToShow: any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
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
