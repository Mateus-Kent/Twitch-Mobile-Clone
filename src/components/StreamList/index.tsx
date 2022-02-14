import React from 'react'

import streamThumbnail from '../../assets/stream_thumbnail.jpg'
import StreamPreview from '../../assets/streamPreview.jpg'

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles'

export function StreamList() {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={StreamPreview} />

      <StreamRow>
        <StreamColumn>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>YoDa</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Grindando no Lost Ark
          </StreamDescription>

          <StreamCategory numberOfLines={1}>LOST ARK</StreamCategory>
        </StreamColumn>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>RPG</TagText>
          </TagView>
        </TagRow>
      </StreamRow>
    </StreamContainer>
  )

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  )
}
