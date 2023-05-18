import type { Meta, StoryObj } from '@storybook/react';
import '../styles/index.scss';

import Progress from '../components/Progress/progress';

const meta = {
  title: 'Example/Progress',
  component: Progress,
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export  const DefaultButton: Story = {
  args: {
    /**进度条颜色 */
    themeColor :'#297bba', 
    /**初始值 */
    percent : 20, 
    /**到达100自动隐藏 */
    autoHidden : false, 
    /**隐藏文本 */
    hiddenText : false, 
    /**进度条长度 */
    width : 320, 
    /**文本颜色 */
    textColor : '#666',
    /**传入数组控制阈值变换 */
    statusScope:[[18, 'red'], [40, 'orange']] ,
    height:20,
    showInnerText:true,
    showOuterText:false
  },
  name:'进度条'
};