import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllNftCollectionsService {

  constructor() { }

  getPopularCollections(): ReplaySubject<any> {
    var replaySubject = new ReplaySubject<any>(1);

    fetch('./assets/popular-nft-collections.json').
      then(response => response.json()).
      then(rawJson => {
        console.log(rawJson);
        replaySubject.next(JSON.stringify(rawJson))
      });

    return replaySubject;
  }
}
