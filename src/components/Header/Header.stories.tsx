import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Header, Props } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story<Props> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
