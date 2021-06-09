import React from 'react';
import { Story, Meta } from '@storybook/react';
import * as HeaderStories from '../Header/Header.stories';
import markdown from './Page.md';
import { Page, PageProps } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    notes: markdown,
  },
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
