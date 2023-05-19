import { ButtonSize } from '../components/Button/button';
import type { Meta, StoryObj } from '@storybook/react';
import '../styles/index.scss';

import SdSwitch from '../components/Switch/switch';

const meta = {
  title: 'Example/Switch',
  component: SdSwitch,
  tags: ['autodocs'],
} satisfies Meta<typeof SdSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export  const DefaultButton: Story = {
  args: {
    checked:true,
    switchType:'primary',
  },
  name:'switch',
};
