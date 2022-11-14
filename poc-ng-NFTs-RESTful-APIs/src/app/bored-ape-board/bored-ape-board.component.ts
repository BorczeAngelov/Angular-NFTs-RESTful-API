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
  public response$!: Observable<NftAssets>;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  onSendRequest(url: string) {
    this.response$ = this.httpService.getRequest(url);
  }
}
