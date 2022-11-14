import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-nft-media',
  templateUrl: './nft-media.component.html',
  styleUrls: ['./nft-media.component.css']
})
export class NftMediaComponent implements OnInit {
  private initialUrlPrefix = "https://svc.blockdaemon.com/nft/v1/ethereum/mainnet/media/";
  private initialTokenPath = "token/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D/5e1f4454-34ff-5118-9987-96b481625128.png";
  public urlPrefix = this.initialUrlPrefix;
  public tokenPath = this.initialTokenPath;


  public imageUrl$!: Observable<any>
  public isImageLoading: boolean = false;
  public imageToShow: any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  onGetMediaRequest() {
    console.log(this.urlPrefix);
    console.log(this.tokenPath);

    // this.imageUrl$ = this.httpService.getImage(url, mediaPath);

    this.isImageLoading = true;
    this.httpService.getImage(this.urlPrefix, this.tokenPath)
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
