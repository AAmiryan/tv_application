export interface IType {}
export interface IItem {
  [key: string]: string;
}

export interface IResponse {
  Featured: IItem;
  TendingNow: IItem[];
}
export interface IMovesSliderProps {
  data: IResponse | undefined;
  setMovesData: React.Dispatch<React.SetStateAction<IItem | undefined>>;
  isLoading: boolean;
}
export interface IMovesDescriptionProps {
  data: IResponse | undefined;
  isLoading: boolean;
}
