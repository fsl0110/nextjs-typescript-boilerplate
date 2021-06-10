import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Counter } from './Counter';

export default {
  title: 'Features/Counter',
  component: Counter,
} as Meta;

const Template: Story = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {};
