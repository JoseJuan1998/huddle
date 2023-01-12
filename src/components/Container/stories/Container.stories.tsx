import Container from '..'
import { IContainer } from '../interface'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Containers/Container',
  component: Container,
  decorators: [
    (Story) => (
      <div style={{ border: '1px dotted black', margin: '0', padding: '0' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<IContainer> = () => (
  <Container>
    <h1>Build The Community Your Fans Will Love</h1>

    <p>
      Huddle re-imagines the way we build communities. You have a voice, but so
      does your audience. Create connections with your users as you engage in
      genuine discussion.
    </p>
  </Container>
)

export const CustomContainer = Template.bind({})

CustomContainer.storyName = 'Container'
