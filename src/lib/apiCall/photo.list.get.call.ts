import { PhotoListRouteParamsType } from '../types/api.params.types';
import { PhotoListRouteResType } from '../types/api.res.types';
import {} from '../types/world';
import QueryBuilderFun from '../utils/query.builder';

const PhotoListGetCall = async (PARAMS: PhotoListRouteParamsType) => {
  const ApiRes: PhotoListRouteResType = await fetch(
    QueryBuilderFun('/api/photo/list', PARAMS),
    {
      next: { revalidate: 100 },
    }
  ).then((res) => res.json());

  return ApiRes;
};

export default PhotoListGetCall;
