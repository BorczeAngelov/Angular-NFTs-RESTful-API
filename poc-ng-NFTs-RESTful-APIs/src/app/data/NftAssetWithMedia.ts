import { Observable, ReplaySubject } from "rxjs";
import { NftAsset } from "./dto/NftAsset";

export class NftAssetWithMedia {
    nftAsset: NftAsset;
    media$?: Observable<string | ArrayBuffer | null>;
    // media: (string | ArrayBuffer | null);
    
    //todo 1: refac Observable<ReplaySubject<string | ArrayBuffer | null>> to ReplaySubject<string | ArrayBuffer | null>
    //todo 2: use the other ctor
    constructor(nftAsset: NftAsset, obMedia$: Observable<ReplaySubject<string | ArrayBuffer | null>>) {
        this.nftAsset = nftAsset;
        obMedia$.subscribe(value => this.media$ = value);
    }

    // constructor(nftAsset: NftAsset, media: (string | ArrayBuffer | null)) {
    //     this.nftAsset = nftAsset;
    //     this.media = media;
    // }
}