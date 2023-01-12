import Header from '..';
import { Story, Meta } from '@storybook/react';
import { IHeader } from '../interface';

export default {
  title: 'Page/Header',
  component: Header,
  argTypes: {
    bg: {
      control: { type: 'color' },
    },
  },
} as Meta

const Template: Story<IHeader> = (args) => <Header {...args} />

export const CustomHeader = Template.bind({})

CustomHeader.storyName = 'Header'