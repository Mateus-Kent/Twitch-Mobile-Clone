import React from 'react'

import { Container, HeadingText } from './styles'

type HeadingProps = {
  children: String
}

export function Heading({ children }: HeadingProps) {
  return (
    <Container>
      <HeadingText>{children}</HeadingText>
    </Container>
  )
}
