import React from 'react'
import { INav } from './interface'
import { StyledNav } from './styles/Nav.styled'

export default function Nav({ children, ...rest }: INav) {
  return <StyledNav {...rest}>{children}</StyledNav>
}
