import React from 'react'

import {
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
  List,
} from './styles'

export function ChannelList() {
  const ChannelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />

        <Column>
          <Username>Alanzoka</Username>
          <Info>3 new videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  )

  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  )
}
