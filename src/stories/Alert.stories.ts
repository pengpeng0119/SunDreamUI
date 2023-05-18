import type { Meta, StoryObj } from '@storybook/react';
import '../styles/index.scss';
import {action} from '@storybook/addon-actions'
import Alert, { AlertType } from '../components/Alert/alert';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)
const meta = {
  title: 'Example/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;
/**
 * ### 引入
 * ~~~js
 * import {Alert} from './Alert.stories.ts'
 * ~~~
 */
export  const DefaultButton: Story = {
  args: {
    message:'这是标题',
    description:'这是要传入的内容',
    type:AlertType.Info,
    closable:true,
    onClose:()=>{alert(123)}
  },
  name:'公告'
};