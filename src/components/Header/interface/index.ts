export interface IStyledHeader {
  theme?: {
    colors?: {
      header?: string
    }
  }
  bg?: string
}

export interface IHeader {
  children: JSX.Element | JSX.Element[]
}
