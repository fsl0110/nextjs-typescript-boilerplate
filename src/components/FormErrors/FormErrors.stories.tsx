import { Story, Meta } from '@storybook/react';
import { FormErrors, FormErrorsProps } from './FormErrors';
import markdown from './FormErrors.md';

export default {
  title: 'Components/FormErrors',
  component: FormErrors,
  parameters: {
    notes: markdown,
  },
} as Meta;

const Template: Story<FormErrorsProps> = (args) => <FormErrors {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: {
    type: 'required',
    message: 'This field is required',
  },
};
