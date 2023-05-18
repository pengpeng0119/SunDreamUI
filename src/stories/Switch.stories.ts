import { ButtonSize } from '../components/Button/button';
import type { Meta, StoryObj } from '@storybook/react';
import '../styles/index.scss';

import Switch, { SwitchType } from '../components/Switch/switch';

const meta = {
  title: 'Example/Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export  const DefaultButton: Story = {
  args: {
    checked:true,
    switchType:SwitchType.Success,
  },
  name:'开关'
};

// <Switch checked={visible} onChange={setVisible} switchType={SwitchType.Success}></Switch>