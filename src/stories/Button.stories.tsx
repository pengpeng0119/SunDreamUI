
import { ButtonSize } from '../components/Button/button';
import type { Meta, StoryObj } from '@storybook/react';
import '../styles/index.scss';
import  Button, { ButtonType }  from '../components/Button/button';
import {action} from '@storybook/addon-actions'
// import { render } from '@testing-library/react';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export  const DefaultButton: Story = {
  args: {
    children:'Default',
    onClick:()=>{alert(123);action('1');},
    btnType:ButtonType.Default
  },
  name:'主按钮',
};
export  const PrimaryButton: Story = {
  args: {
    children: 'Primary',
    btnType:ButtonType.Primary
  },
};
export  const DangerButton: Story = {
  args: {
    children: 'Primary',
    btnType:ButtonType.Danger
  },
};
export  const SuccessButton: Story = {
  args: {
    children: 'Success',
    btnType:ButtonType.Success
  },
};
export  const LargeButton: Story = {
  args: {
    children: 'Large',
    size:ButtonSize.large
  },
};
export  const SmallButton: Story = {
  args: {
    children: 'Small',
    size:ButtonSize.Small
  },
};
export  const DisabledButton: Story = {
  args: {
    children: 'Disabled',
    disabled:true
  },
};
export  const RoundedButton: Story = {
  args: {
    children: 'Disabled',
    rounded:true
  },
};
export  const EllipseButton: Story = {
  render:(args)=>(
    <Button {...args}>EllipseButton</Button>
  ),
  args: {
    // children: 'Disabled',
    ellipse:true
  },
};









