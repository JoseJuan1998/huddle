import styled from 'styled-components'
import { IStyledFooter } from '../interface'

export const StyledFooter = styled.footer`
  background-color: ${({ theme }: IStyledFooter) =>
    theme?.colors?.footer ? theme.colors.footer : '#003333'};
  color: #fff;
  padding: 100px 0 60px;

  ul {
    list-style: none;
  }

  ul li {
    margin-block-end: 20px;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) =>
      theme.mobile ? theme.mobile : '768px'}) {
    text-align: center;

    ul {
      padding: 0;
    }

    p {
      text-align: center;
    }
  }
`
