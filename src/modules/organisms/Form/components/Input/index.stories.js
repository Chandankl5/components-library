import Input from "."

export default {
  title: 'Form/Input',
  component: Input
}

const Template = args => <Input {...args} />

export const InputA = Template.bind({});

InputA.storyName = 'Input'

InputA.args = {
  id: 'Name',
  name: 'name',
  type: 'text',
  placeholder: 'Enter your Name',
  required: true,
  disabled: false,
  className: 'rounded-lg p-4'
}