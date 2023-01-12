import Flex from '../'
import { IFlex } from '../interface'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Containers/Flex',
  component: Flex,
  decorators: [
    (Story) => (
      <div style={{ border: '1px dotted black', margin: '0', padding: '0' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<IFlex> = () => (
  <Flex>
    <ul>
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        perspiciatis voluptates fuga est? Consequatur voluptate a cum iste.
        Voluptate dolorem eum inventore dolore ut modi eos ad repellat minus
        tempore!
      </li>
      <li>+1-543-123-4567</li>
      <li>example@huddle.com</li>
    </ul>

    <ul>
      <li>About Us</li>
      <li>What We Do?</li>
      <li>FAQ</li>
    </ul>

    <ul>
      <li>Career</li>
      <li>Blog</li>
      <li>Contact Us</li>
    </ul>
  </Flex>
)

export const CustomFlex = Template.bind({})

CustomFlex.storyName = 'Flex'
