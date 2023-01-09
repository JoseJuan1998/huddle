import React from 'react'
import { IHeader } from './interface'
import { StyledHeader } from './styles/Header.styled'

export default function Header({ children, ...rest }: IHeader) {
  return <StyledHeader {...rest}>{children}</StyledHeader>
}
