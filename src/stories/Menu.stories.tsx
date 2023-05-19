import type { Meta, StoryObj } from '@storybook/react';
import '../styles/index.scss';
import {ShowMenuH} from '../components/Menu/menu';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)
const meta = {
  title: 'Example/Menu',
  component: ShowMenuH,
  tags: ['autodocs'],
} satisfies Meta<typeof ShowMenuH>;

export default meta;
type Story = StoryObj<typeof meta>;

export  const DefaultButton: Story = {
  args: {
    mode:'horizontal',
    onSelect:(index:any)=>{alert(index)}
  },
  name:'菜单'
};
export  const DefaultButton1: Story = {
  args: {
    mode:'vertical',
    onSelect:(index:any)=>{alert(index)}
  },
  name:'菜单竖向'
};