import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Header, HeaderProps } from 'components';
import markdown from './Header.md';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    notes: markdown,
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
