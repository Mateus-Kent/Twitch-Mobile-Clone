import React from 'react'

import {
  List,
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
} from './styles'
import data from './data'

type ItemProps = {
  item: typeof data[0]
}

export function CategoryList() {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>{item.specs}</Info>
      </CategoryStatus>
    </CategoryContainer>
  )

  return (
    <List>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  )
}
