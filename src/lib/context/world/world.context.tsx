/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDebouncedState, useListState } from '@mantine/hooks';
import { PhotoObjType } from '@/lib/types/world';
import { showNotification } from '@mantine/notifications';
import PhotoListGetCall from '@/lib/apiCall/photo.list.get.call';
import { createGenericContext } from '../create.context';
import { WorldContextTypes } from './world.context.types';

const [useWorldContext, WorldContextProvider] =
  createGenericContext<WorldContextTypes>();

const WorldProvider = ({ children }: { children: React.ReactNode }) => {
  const [SearchQuery, setSearchQuery] = useDebouncedState('', 1000);
  const [PhotoList, PhotoListHandler] = useListState<PhotoObjType>([]);

  const SearchHandler = async () => {
    PhotoListHandler.setState([]);

    const PhotoListRouteRes = await PhotoListGetCall({
      search: SearchQuery,
    });

    if (PhotoListRouteRes.status !== 200 || !PhotoListRouteRes.data) {
      console.error('Error', PhotoListRouteRes);
      showNotification({
        title: 'Error',
        message: 'Something went wrong',
        color: 'red',
      });
      return;
    }

    PhotoListHandler.setState(PhotoListRouteRes.data.results);
  };

  useEffect(() => {
    SearchHandler();
  }, [SearchQuery]);

  return (
    <WorldContextProvider value={{ SearchQuery, setSearchQuery, PhotoList }}>
      {children}
    </WorldContextProvider>
  );
};

export { useWorldContext, WorldProvider };
