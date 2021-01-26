import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, Intent, Props, Size } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      defaultValue: 'Button',
    },
    size: {
      control: {
        type: 'select',
        defaultOption: Size.None,
        options: Size,
      }
    },
    intent: {
      control: {
        type: 'select',
        defaultOption: Intent.None,
        options: Intent,
      }
    }
  },
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  size: Size.Large,
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  size: Size.Small,
};

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
