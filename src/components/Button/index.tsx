import React from 'react'
import { IButton } from './interface'
import { StyledButton } from './styles/Button.styled'

export default function Button({ children, ...rest }: IButton) {
  return <StyledButton {...rest}>{children}</StyledButton>
}
