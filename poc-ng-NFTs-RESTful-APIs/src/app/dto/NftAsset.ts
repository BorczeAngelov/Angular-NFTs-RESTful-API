export interface NftAsset {
    id: string;
    token_id: string;
    image_url: string;
    name: string;
    contract_address: string;
    wallets: any[];
    burned: boolean;
}