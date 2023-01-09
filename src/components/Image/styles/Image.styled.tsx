import styled from 'styled-components'

export const StyledImage = styled.img`
  width: 365px;
  margin-inline-start: 40px;

  @media (max-width: ${({ theme }) =>
      theme.mobile ? theme.mobile : '768px'}) {
    margin: 40px 0 30px;
  }
`
