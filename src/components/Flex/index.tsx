import React from 'react'
import { IFlex } from './interface'
import { StyledFlex } from './styles/Flex.styled'

export default function Flex({ children }: IFlex) {
  return <StyledFlex>{children}</StyledFlex>
}
