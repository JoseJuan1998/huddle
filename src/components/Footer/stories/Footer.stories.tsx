import Footer from '..'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Page/Footer',
  component: Footer,
} as Meta

const Template: Story = () => <Footer />

export const CustomFooter = Template.bind({})

CustomFooter.storyName = 'Footer'
