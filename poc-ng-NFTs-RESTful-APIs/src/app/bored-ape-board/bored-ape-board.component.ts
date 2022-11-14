import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NftAssets } from '../dto/NftAssets';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-bored-ape-board',
  templateUrl: './bored-ape-board.component.html',
  styleUrls: ['./bored-ape-board.component.css']
})
export class BoredApeBoardComponent implements OnInit {
  private initialUrl = "https://svc.blockdaemon.com/nft/v1/ethereum/mainnet/assets?collection_name=Bored Ape Yacht Club"
  public urlValue = this.initialUrl;
  public response$!: Observable<NftAssets>;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  onSendRequest() {
    this.response$ = this.httpService.getRequest(this.urlValue);
  }
}
