import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled'

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <ul>
        <li>
          <a href='facebook.com'><FaFacebook/></a>
        </li>
        <li>
          <a href='twitter.com'><FaTwitter/></a>
        </li>
        <li>
          <a href='linkedin.com'><FaLinkedin/></a>
        </li>
      </ul>
    </StyledSocialIcons>
  )
}
