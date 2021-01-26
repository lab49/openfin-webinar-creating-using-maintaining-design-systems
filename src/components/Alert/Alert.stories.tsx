import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Alert } from './Alert';
import { Intent } from '../../common/intent';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    children: {
      defaultValue: 'Alert dialog'
    },
    intent: {
      control: {
        type: 'select',
        defaultOption: Intent.None,
        options: Intent,
      }
    }
  }
} as Meta;

const Template: Story = (args) => <Alert {...args} />;

export const Default = Template.bind({});

export const IntentPrimary = Template.bind({});
IntentPrimary.args = {
  intent: Intent.Primary,
};

export const IntentSecondary = Template.bind({});
IntentSecondary.args = {
  intent: Intent.Secondary,
};

export const IntentSuccess = Template.bind({});
IntentSuccess.args = {
  intent: Intent.Success,
};

export const IntentWarning = Template.bind({});
IntentWarning.args = {
  intent: Intent.Warning,
};

export const IntentDanger = Template.bind({});
IntentDanger.args = {
  intent: Intent.Danger,
};
