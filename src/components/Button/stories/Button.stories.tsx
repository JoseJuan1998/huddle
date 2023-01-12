import Button from '../'
import { IButton } from '../interface'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    bg: {
      control: { type: 'color' },
    },
    color: {
      control: { type: 'color' },
    },
  },
} as Meta

const Template: Story<IButton> = (args) => <Button {...args} />
// export const Default = () => <Button>Default Button</Button>
// export const Rose = () => <Button bg='#ff0099' color='#fff'>Rose Button</Button>

export const CustomButton = Template.bind({})

CustomButton.args = {
  bg: '#ff0099',
  color: '#fff',
  children: 'Hello World',
}

CustomButton.storyName = 'Button'
