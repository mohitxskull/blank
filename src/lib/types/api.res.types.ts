import { PhotoObjType, ServerResType } from './world';

export interface PhotoListRouteResType extends ServerResType {
  data: {
    total: number;
    total_pages: number;
    results: Array<PhotoObjType>;
  } | null;
}
