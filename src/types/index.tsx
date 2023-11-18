export interface IType {}
interface IItem {
  [key: string]: string;
}

export interface IResponse {
  Featured: IItem;
  TendingNow: IItem[];
}
