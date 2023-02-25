import React from 'react';
import { NextPage } from 'next';
import { AppShell } from '@mantine/core';
import MainHeaderComp from '@/component/main/header/main.header';
import MainBodyComp from '@/component/main/body/main.body';

const IndexPage: NextPage = () => (
  <>
    <AppShell
      padding="md"
      header={<MainHeaderComp />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[2],
        },
      })}
    >
      <MainBodyComp />
    </AppShell>
  </>
);

export default IndexPage;
