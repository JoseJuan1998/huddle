export interface IStyledCard {
  layout: boolean
}

export interface ICard {
  item: {
    id: number
    title: string
    body: string
    image: string
  }
}
