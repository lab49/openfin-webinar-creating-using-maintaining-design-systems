import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Badge, Props } from './Badge';
import { Size } from '../../common/size';
import { Intent } from '../../common/intent';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    children: {
      defaultValue: 'Badge',
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

const Template: Story<Props> = (args) => <Badge {...args} />;

export const Default = Template.bind({});

export const Pill = Template.bind({});
Pill.args = {
  pill: true,
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
