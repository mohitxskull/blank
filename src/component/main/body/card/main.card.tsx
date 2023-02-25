import React from 'react';
import {
  createStyles,
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
} from '@mantine/core';
import { PhotoObjType } from '@/lib/types/world';
import { Share } from 'tabler-icons-react';
import { useClipboard } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { openContextModal } from '@mantine/modals';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

const MainCardComp = ({ PhotoObj }: { PhotoObj: PhotoObjType }) => {
  const { classes } = useStyles();
  const Clipboard = useClipboard({ timeout: 500 });

  return (
    <Card withBorder p="lg" radius="md" shadow="md" className={classes.card}>
      <Card.Section
        style={{
          cursor: 'pointer',
        }}
        onClick={() =>
          openContextModal({
            modal: 'photoViewer',
            innerProps: {
              PhotoObj,
            },
            radius: 'md',
            size: 'xl',
            title: (
              <Text size="sm" color="dimmed">
                {PhotoObj.likes} people liked this
              </Text>
            ),
          })
        }
        mb="sm"
      >
        <Image src={PhotoObj.urls.small} height={180} withPlaceholder />
      </Card.Section>

      <Group mt="lg" grow>
        <Avatar
          style={{
            flexGrow: 0,
          }}
          src={PhotoObj.user.profile_image.medium}
          radius="sm"
        />
        <div
          style={{
            flexGrow: 1,
          }}
        >
          <Text
            style={{
              width: '200px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            weight={500}
          >
            {PhotoObj.user.username}
          </Text>
          <Text
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            size="xs"
            color="dimmed"
          >
            {PhotoObj.user.bio}
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.footer}>
        <Group position="apart">
          <Text size="xs" color="dimmed">
            {PhotoObj.likes} people liked this
          </Text>
          <Group spacing={0}>
            <ActionIcon
              onClick={() => {
                Clipboard.copy(PhotoObj.urls.full);
                showNotification({
                  message: 'URL copied to clipboard',
                });
              }}
            >
              <Share size={16} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default MainCardComp;
