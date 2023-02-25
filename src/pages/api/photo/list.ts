import { PhotoListRouteResType } from '@/lib/types/api.res.types';
import GetEnv from '@/lib/utils/get.env';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PhotoListRouteResType>
) {
  if (req.method !== 'GET') {
    res.status(405).json({
      status: 405,
      message: 'Method not allowed',
      data: null,
    });
    return;
  }

  // https://api.unsplash.com/photos for list of photos
  // https://api.unsplash.com/search/photos?query=office for search

  const { search } = req.query;

  const ExtraQuery = {
    page: 1,
    per_page: 20,
  };

  if (typeof search === 'string' && search.length > 0) {
    const ApiRes = await fetch(
      `https://api.unsplash.com/search/photos?query=${search}&client_id=${GetEnv(
        'ACCESSKEY'
      )}&page=${ExtraQuery.page}&per_page=${ExtraQuery.per_page}`
    );

    if (ApiRes.status === 200) {
      const ApiResData = await ApiRes.json();

      res.status(200).json({
        status: 200,
        message: 'Success',
        data: ApiResData,
      });
    } else {
      res.status(500).json({
        status: 500,
        message: 'Internal server error',
        data: null,
      });
    }
  } else {
    const ApiRes = await fetch(
      `https://api.unsplash.com/photos?client_id=${GetEnv('ACCESSKEY')}&page=${
        ExtraQuery.page
      }&per_page=${ExtraQuery.per_page}`
    );

    if (ApiRes.status === 200) {
      const ApiResData = await ApiRes.json();

      res.status(200).json({
        status: 200,
        message: 'Success',
        data: {
          total: ApiResData.total,
          total_pages: ApiResData.total_pages,
          results: ApiResData,
        },
      });
    } else {
      res.status(500).json({
        status: 500,
        message: 'Internal server error',
        data: null,
      });
    }
  }
}
