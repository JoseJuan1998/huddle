import Image from '../'
import { IImage } from '../interface'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Assets/Image',
  component: Image,
} as Meta

const Template: Story<IImage> = (args) => <Image {...args} />

export const CustomImage = Template.bind({})

CustomImage.args = {
  src: 'https://imgs.search.brave.com/v5m7fmQ6obkYGuVyc5e4jj0FDVUL-6l4C27jNpW6oXY/rs:fit:558:491:1/g:ce/aHR0cHM6Ly9yZWFj/dGlmeS50aGVpcm9u/bmV0d29yay5vcmcv/ZGVtby9hc3NldHMv/aW1hZ2VzL3JlYWN0/LW5hdGl2ZS1sb2dv/LnBuZw',
}

CustomImage.storyName = 'Image'
