import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import SocialIcons from '../SocialIcons'
import { StyledFooter } from './styles/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logo_white.svg' alt='' />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              perspiciatis voluptates fuga est? Consequatur voluptate a cum
              iste. Voluptate dolorem eum inventore dolore ut modi eos ad
              repellat minus tempore!
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>

          <ul>
            <li>About Us</li>
            <li>What We Do?</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2023 Huddle. All rights reserved.</p>
      </Container>
    </StyledFooter>
  )
}
