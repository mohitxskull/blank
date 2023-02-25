import React from 'react';
import Document, { DocumentContext } from 'next/document';
import { ServerStyles, createStylesServer } from '@mantine/next';
import ltrCache from '@/lib/ltr.cache';

const stylesServer = createStylesServer(ltrCache);

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
          key="styles"
        />,
      ],
    };
  }
}
