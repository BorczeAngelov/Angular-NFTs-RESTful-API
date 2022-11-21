import { KeyedRead } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { NftCollection } from '../data/dto/NftCollection';

@Injectable({
  providedIn: 'root'
})
export class AllNftCollectionsService {

  constructor() { }

  getPopularCollections(): ReplaySubject<NftCollection[]> {
    var replaySubject = new ReplaySubject<NftCollection[]>(1);

    fetch('./assets/popular-nft-collections.json')
      .then(response => response.json())
      .then(jsonData => {
        console.log("getPopularCollections() -> fetch -> json()", jsonData);
        var array = jsonData as Array<NftCollection>;
        replaySubject.next(array)
      });

    return replaySubject;
  }
}
