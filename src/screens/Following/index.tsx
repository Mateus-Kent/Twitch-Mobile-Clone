import React from 'react'
import { FlatList, View } from 'react-native'

import { Header } from '../../components/Header'
import { Heading } from '../../components/Heading'
import { Title } from '../../components/Title'
import { CategoryList } from '../../components/CategoryList'

import { Wrapper, Container, Main } from './styles'

interface Item {
  key: string
  render: () => JSX.Element
  isTittle?: boolean
}

export function Following() {
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>,
      },

      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTittle: true,
      },
      { key: 'C1', render: () => <CategoryList /> },

      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTittle: true,
      },
      { key: 'C2', render: () => <View /> },

      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue Watching</Title>,
        isTittle: true,
      },
      { key: 'C3', render: () => <View /> },

      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline Channels</Title>,
        isTittle: true,
      },
      { key: 'C4', render: () => <View /> },
    ]

    const indices: number[] = []

    items.forEach((item, index) => item.isTittle && indices.push(index))

    return {
      data: items,
      indices,
    }
  }, [])

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indices}
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  )
}