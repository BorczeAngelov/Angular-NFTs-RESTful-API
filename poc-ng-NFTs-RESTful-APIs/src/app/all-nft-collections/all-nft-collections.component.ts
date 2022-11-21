import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AllNftCollectionsService } from './all-nft-collections.service';

@Component({
  selector: 'app-all-nft-collections',
  templateUrl: './all-nft-collections.component.html',
  styleUrls: ['./all-nft-collections.component.css']
})
export class AllNftCollectionsComponent implements OnInit {

  public response$!: ReplaySubject<any>;

  constructor(private allNftCollectionsService: AllNftCollectionsService) { }

  ngOnInit(): void {
    this.response$ = this.allNftCollectionsService.getPopularCollections();
  }

}
