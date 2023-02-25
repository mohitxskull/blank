import { PhotoObjType } from '../../types/world';

export interface WorldContextTypes {
  SearchQuery: string;
  setSearchQuery: (newValue: string) => void;
  PhotoList: PhotoObjType[];
}
