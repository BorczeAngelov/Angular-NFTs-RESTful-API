import { NftAsset } from "./NftAsset";

export interface NftAssets {
    data: NftAsset[];
    meta: Meta;
}

export interface Meta {
    paging: Paging;
}

export interface Paging {
    next_page_token: string;
}
