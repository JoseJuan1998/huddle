import styled from 'styled-components'
import { IStyledHeader } from '../interface'

export const StyledHeader = styled.header`
  background-color: ${({ theme, bg }: IStyledHeader) =>
    bg ? bg : theme?.colors?.header ? theme.colors.header : '#fff'};
  padding: 40px 0;
`
