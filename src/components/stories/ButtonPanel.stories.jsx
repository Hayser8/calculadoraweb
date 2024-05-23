import React from 'react';
import ButtonPanel from '../ButtonPanel';
import "../../App.css"

export default {
  title: 'Component/ButtonPanel',
  component: ButtonPanel
};

const Template = (args) => <ButtonPanel {...args} />;

export const Default = Template.bind({});
// Define props en args si es necesario
Default.args = {
  onDigit: () => console.log("Digit clicked"),
  onOperator: () => console.log("Operator clicked"),
  onClear: () => console.log("Clear"),
  onToggleSign: () => console.log("Toggle sign"),
  onDecimal: () => console.log("Decimal clicked")
};
