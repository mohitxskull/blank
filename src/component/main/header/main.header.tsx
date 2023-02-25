import React from 'react';
import { Container, Group, Header, TextInput } from '@mantine/core';
import { Search } from 'tabler-icons-react';
import { useWorldContext } from '@/lib/context/world/world.context';

const MainHeaderComp = () => {
  const { SearchQuery, setSearchQuery } = useWorldContext();

  return (
    <>
      <Header height={80}>
        <Container
          style={{
            height: '100%',
          }}
        >
          <Group
            style={{
              height: '100%',
            }}
            grow
          >
            <TextInput
              defaultValue={SearchQuery}
              onChange={(e) => setSearchQuery(e.currentTarget.value)}
              placeholder="Search..."
              icon={<Search size={17} />}
              radius="md"
            />
          </Group>
        </Container>
      </Header>
    </>
  );
};

export default MainHeaderComp;
