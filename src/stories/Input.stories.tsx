import type { Meta, StoryObj } from '@storybook/react';
import '../styles/index.scss';
import Switch, { SwitchType } from '../components/Switch/switch';
import { Input } from '../components/Input/input';

const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export  const DefaultButton: Story = {
  args: {

  },
  name:'默认input'
};
export const PreInput :Story={
  render:(args)=>(
    <><Input {...args} style={{width: '300px'}}
    defaultValue="google"
    append=".com"/>
    <Input
      style={{width: '300px'}}
      defaultValue="prepend text"
      prepend="https://"
    />
    </>
    
  ),
  name:'前后缀'
}