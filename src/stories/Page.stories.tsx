import type { Meta, StoryObj } from '@storybook/react';
import '../styles/index.scss';

import Page from '../components/Page/page';

const meta = {
  title: 'Example/Page',
  component: Page,
  tags: ['autodocs'],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export  const DefaultButton: Story = {
  args: {
    totalPage:15,
    pageCallbackFn:(index)=>{console.log(index)},
    groupCount:5,
    currentPage:5
  },
  name:'分页器'
};