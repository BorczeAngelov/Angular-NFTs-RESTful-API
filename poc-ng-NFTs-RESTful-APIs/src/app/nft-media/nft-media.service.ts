import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { NftAssetWithMedia } from '../data/NftAssetWithMedia';
import { HttpService } from '../http.service';
import { map } from 'rxjs/operators';
import { NftAsset } from '../data/dto/NftAsset';
import { NftAssets } from '../data/dto/NftAssets';
import { ImageReader } from '../utils/image-reader';

@Injectable({
  providedIn: 'root'
})
export class NftMediaService {

  constructor(private httpService: HttpService) { }

  //todo: refac to Observable<NftAssetWithMedia>
  //todo: remove the url argument
  getAssetsWithMedia(initialUrl: string, queryParameter: string): Observable<NftAssetWithMedia[]> { 
    var fullUrlValue = initialUrl + queryParameter;
    console.log("getAssetsWithMedia() initialUrl:" + initialUrl);
    console.log("getAssetsWithMedia() fullUrlValue:" + fullUrlValue);
    return this.httpService.getRequest(fullUrlValue)
      .pipe(
        map(nftAssets =>
          this.createArrayNftAssetWithMedia(nftAssets, initialUrl)));
  }

  //todo: remove the url argument
  private createArrayNftAssetWithMedia(nftAssets: NftAssets, initialUrl: string): NftAssetWithMedia[] {
    var result: Array<NftAssetWithMedia> = [];

    nftAssets.data
      .forEach(nftAsset => {
        var assetWithMedia = this.createNftAssetWithMedia(nftAsset, initialUrl);
        result.push(assetWithMedia);
      });

    return result;
  }

  //todo: remove the url argument
  private createNftAssetWithMedia(nftAsset: NftAsset, initialUrl: string): NftAssetWithMedia {
    var fullUrlValue = initialUrl + "media/";
    console.log("createNftAssetWithMedia() initialUrl:" + initialUrl);
    console.log("createNftAssetWithMedia() fullUrlValue:" + fullUrlValue);
    var obMedia$ = this.httpService.getImage(fullUrlValue, nftAsset.image_url)
      .pipe(
        map(blob =>
          ImageReader
            .createImageFromBlob(blob)));

    return new NftAssetWithMedia(nftAsset, obMedia$);
  }
}
