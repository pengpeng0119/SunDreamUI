import type { Meta, StoryObj } from '@storybook/react';
import '../styles/index.scss';
import {ShowMenuH} from '../components/Menu/menu';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import api from '../components/Message/Message'

library.add(fas)
const handleClick = (index:any) => {
  api.success(`您点击的是${index}号menu`)
  // message.info('我是全局提示组件'); 其他提示类型都按照此方式即可。
  // message.info('我是全局提示组件'，4); 第二个参数为自定义时长。
}
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
    onSelect:(index:any)=>{handleClick(index)}
  },
  name:'菜单'
};
export  const DefaultButton1: Story = {
  args: {
    mode:'vertical',
    onSelect:(index:any)=>{handleClick(index)}
  },
  name:'菜单竖向'
};