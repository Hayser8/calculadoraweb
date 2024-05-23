import React from 'react';
import Button from '../Button';
import "../../App.css"

export default {
  title: 'Component/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'button dark',
  children: 'Click me',
  onClick: () => alert('Button clicked'),
};

export const Orange = Template.bind({});
Orange.args = {
  className: 'button orange',
  children: 'Operator',
  onClick: () => alert('Operator clicked'),
};
