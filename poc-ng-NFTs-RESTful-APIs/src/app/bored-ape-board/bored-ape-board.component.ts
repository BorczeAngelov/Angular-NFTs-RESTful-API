import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NftAssets } from '../data/dto/NftAssets';
import { NftAssetWithMedia } from '../data/NftAssetWithMedia';
import { HttpService } from '../http.service';
import { NftMediaService } from '../nft-media/nft-media.service';

@Component({
  selector: 'app-bored-ape-board',
  templateUrl: './bored-ape-board.component.html',
  styleUrls: ['./bored-ape-board.component.css']
})
export class BoredApeBoardComponent implements OnInit {
  private queryParameter = "assets?collection_name=Bored Ape Yacht Club";
  private initialUrl = "https://svc.blockdaemon.com/nft/v1/ethereum/mainnet/"
  public urlValue = this.initialUrl + this.queryParameter;
  // public response$!: Observable<NftAssets>;
  public response$!: Observable<NftAssetWithMedia[]>; //todo: refac to Observable<NftAssetWithMedia>

  constructor(private httpService: HttpService, private nftMediaService: NftMediaService) { }

  ngOnInit(): void {
  }

  onSendRequest() {
    // this.response$ = this.httpService.getRequest(this.urlValue);
    this.response$ = this.nftMediaService.getAssetsWithMedia(this.initialUrl, this.queryParameter);
  }
}
