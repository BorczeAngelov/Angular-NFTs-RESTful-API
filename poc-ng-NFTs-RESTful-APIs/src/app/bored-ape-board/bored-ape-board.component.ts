import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NftAssetWithMedia } from '../data/NftAssetWithMedia';
import { NftMediaService } from '../nft-media/nft-media.service';

@Component({
  selector: 'app-bored-ape-board',
  templateUrl: './bored-ape-board.component.html',
  styleUrls: ['./bored-ape-board.component.css']
})
export class BoredApeBoardComponent implements OnInit {
  private initialQueryParameter = "assets?collection_name=Bored Ape Yacht Club";
  private initialUrl = "https://svc.blockdaemon.com/nft/v1/ethereum/mainnet/"

  public urlValue = this.initialUrl;
  public queryParameter = this.initialQueryParameter;
  
  public response$!: Observable<NftAssetWithMedia[]>; //todo: refac to Observable<NftAssetWithMedia>

  constructor(private nftMediaService: NftMediaService) { }

  ngOnInit(): void {
  }

  onSendRequest() {
    // this.response$ = this.httpService.getRequest(this.urlValue);
    console.log("onSendRequest() urlValue:" + this.urlValue);
    console.log("onSendRequest() urlValue:" + this.queryParameter);
    this.response$ = this.nftMediaService.getAssetsWithMedia(this.initialUrl, this.queryParameter);
  }
}
