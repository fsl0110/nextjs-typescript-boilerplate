import { Story, Meta } from '@storybook/react';
import markdown from './Button.md';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    notes: markdown,
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

export const Gray = Template.bind({});
Gray.args = {
  color: 'gray',
};

export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
};
