import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import RouterTransitionCom from '@/component/router.transition';
import { WorldProvider } from '@/lib/context/world/world.context';
import { NotificationsProvider } from '@mantine/notifications';
import PhotoViewerModal from '@/component/modals/photo.viewer';

import '../styles/world.css';
import ltrCache from '@/lib/ltr.cache';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Unsplash API Client</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <WorldProvider>
        <MantineProvider
          emotionCache={ltrCache}
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: 'light',
            primaryColor: 'teal',
            primaryShade: 6,
          }}
        >
          <NotificationsProvider>
            <ModalsProvider
              modals={{
                photoViewer: PhotoViewerModal,
              }}
            >
              <RouterTransitionCom />
              <Component {...pageProps} />
            </ModalsProvider>
          </NotificationsProvider>
        </MantineProvider>
      </WorldProvider>
    </>
  );
}
