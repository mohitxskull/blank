import { PhotoObjType } from '@/lib/types/world';
import {
  ActionIcon,
  Avatar,
  Divider,
  Group,
  Image,
  Text,
} from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';
import Link from 'next/link';
import React from 'react';
import { BrandInstagram, BrandTwitter } from 'tabler-icons-react';

const PhotoViewerModal = ({
  innerProps,
}: ContextModalProps<{ PhotoObj: PhotoObjType }>) => (
  <>
    <Image
      withPlaceholder
      src={innerProps.PhotoObj.urls.full}
      radius="md"
      fit="cover"
      height={600}
    />

    <Divider my="md" />

    <Group position="apart">
      <Group grow>
        <Avatar
          style={{
            flexGrow: 0,
          }}
          src={innerProps.PhotoObj.user.profile_image.medium}
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
            {innerProps.PhotoObj.user.username}
          </Text>
        </div>
      </Group>

      <Group>
        {innerProps.PhotoObj.user.instagram_username && (
          <ActionIcon
            variant="transparent"
            color="gray"
            component={Link}
            href={`https://instagram.com/${innerProps.PhotoObj.user.instagram_username}`}
          >
            <BrandInstagram />
          </ActionIcon>
        )}

        {innerProps.PhotoObj.user.twitter_username && (
          <ActionIcon
            variant="transparent"
            color="gray"
            component={Link}
            href={`https://twitter.com/${innerProps.PhotoObj.user.twitter_username}`}
          >
            <BrandTwitter />
          </ActionIcon>
        )}
      </Group>
    </Group>
  </>
);

export default PhotoViewerModal;
