import React from 'react'
import { IContainer } from './interface'
import { StyledContainer } from './styles/Container.styled'

export default function Container({ children, ...rest }: IContainer) {
  return <StyledContainer {...rest}>{children}</StyledContainer>
}
