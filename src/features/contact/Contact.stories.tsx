import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Contact } from './Contact';

export default {
  title: 'Features/Contact',
  component: Contact,
} as Meta;

const Template: Story = (args) => <Contact {...args} />;

export const Default = Template.bind({});
Default.args = {};
