export declare module ModelGenerateHashQrcodeResponse {
  export interface IRootObjetct {
    status: boolean;
    data: IDataQrcode
  }
  export interface IDataQrcode {
    hash: string;
		updated_at: string;
		created_at: string;
	  id: number;
  }
}
