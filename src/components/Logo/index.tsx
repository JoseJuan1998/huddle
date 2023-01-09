import React from 'react'
import { ILogo } from './interface'
import { StyledLogo } from './styles/Logo.styled'

export default function Logo({ ...props }: ILogo) {
  return <StyledLogo {...props} />
}
