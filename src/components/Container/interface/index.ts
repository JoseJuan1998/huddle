export interface IStyledContainer {
  theme?: {
    colors?: {
      container?: string
    }
  }
}

export interface IContainer {
  children: JSX.Element | JSX.Element[]
}
