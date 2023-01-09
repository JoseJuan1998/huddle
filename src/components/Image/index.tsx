import React from 'react'
import { IImage } from './interface'
import { StyledImage } from './styles/Image.styled'

export default function Image({ ...props }: IImage) {
  return <StyledImage {...props} />
}
