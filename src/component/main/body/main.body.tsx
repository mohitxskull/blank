import React from 'react';
import { Container, SimpleGrid, Skeleton } from '@mantine/core';
import { useWorldContext } from '@/lib/context/world/world.context';
import MainCardComp from './card/main.card';

const MainBodyComp = () => {
  const { PhotoList } = useWorldContext();

  return (
    <>
      <Container>
        <SimpleGrid
          cols={3}
          breakpoints={[
            { maxWidth: 600, cols: 1 },
            { maxWidth: 900, cols: 2 },
            { maxWidth: 1200, cols: 3 },
          ]}
        >
          {React.Children.toArray(
            PhotoList && PhotoList.length > 1
              ? PhotoList.map((PhotoObj) => (
                  <MainCardComp PhotoObj={PhotoObj} />
                ))
              : Array.from({ length: 20 }).map(() => (
                  <Skeleton
                    color="dark"
                    height="300px"
                    width="100%"
                    radius="md"
                  />
                ))
          )}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default MainBodyComp;
