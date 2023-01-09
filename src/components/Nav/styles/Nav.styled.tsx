import styled from 'styled-components'

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 40px;

  @media (max-width: ${({ theme }) =>
      theme.mobile ? theme.mobile : '768px'}) {
    flex-direction: column;
  }
`
