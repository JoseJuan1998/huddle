import React from 'react'
import Button from '../Button'
import Container from '../Container'
import Flex from '../Flex'
import Logo from '../Logo'
import Image from '../Image'
import Nav from '../Nav'
import { IHeader } from './interface'
import { StyledHeader } from './styles/Header.styled'

export default function Header({ ...rest }: IHeader) {
  return (
    <StyledHeader {...rest}>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' alt='' />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>

          <Image src='./images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}
