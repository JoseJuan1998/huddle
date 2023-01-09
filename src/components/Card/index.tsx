import React from 'react'
import { ICard } from './interface'
import { StyledCard } from './styles/Card.styled'

export default function Card({ item: { id, title, body, image } }: ICard) {
  return (
    <StyledCard layout={Boolean(id % 2)}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt='' />
      </div>
    </StyledCard>
  )
}
