import Button from "."

export default {
  title: 'Atoms/Button',
  component: Button
}

const Template = args => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  type: 'button',
  variant: 'primary',
  disabled: false,
  className: '',
  children: 'Get Cost Estimate'
}

export const StandardButton = Template.bind({})
StandardButton.args = {
  type: 'button',
  variant: 'white',
  disabled: false,
  className: '',
  children: 'Get Cost Estimate'
}