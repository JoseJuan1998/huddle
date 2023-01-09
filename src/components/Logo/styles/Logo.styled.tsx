import styled from 'styled-components'

export const StyledLogo = styled.img`
  @media (max-width: ${({ theme }) =>
      theme.mobile ? theme.mobile : '768px'}) {
    margin-block-end: 40px;
  }
`
