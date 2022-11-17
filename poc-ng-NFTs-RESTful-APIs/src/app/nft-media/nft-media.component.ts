import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpService } from '../http.service';
import { ImageReader } from '../utils/image-reader';

@Component({
  selector: 'app-nft-media',
  templateUrl: './nft-media.component.html',
  styleUrls: ['./nft-media.component.css']
})
export class NftMediaComponent implements OnInit {
  private initialUrlPrefix = "https://svc.blockdaemon.com/nft/v1/ethereum/mainnet/media/";
  private initialTokenPath = "token/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D/5e1f4454-34ff-5118-9987-96b481625128.png";
  public urlPrefix = this.initialUrlPrefix;
  public tokenPath = this.initialTokenPath; //todo: bug: the binding is borken

  public imageToShow: any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  onGetMediaRequest() {
    console.log(this.urlPrefix);
    console.log(this.tokenPath);

    this.httpService.getImage(this.urlPrefix, this.tokenPath)
      .subscribe(data => {
        ImageReader
          .createImageFromBlob(data)
          .subscribe(result => this.imageToShow = result) //todo?: remove eventHandler and dispose?
      }, error => {
        console.log(error);
      });
  }
}
