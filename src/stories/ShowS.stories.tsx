import type { Meta } from '@storybook/react';
import '../styles/index.scss';

import Switch from '../components/Switch/St'
const meta = {
  title: 'Example/Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;



export  const DefaultButton = {
  args: {
   handleChange:(n:any)=>{alert(n)},
   checkValue:false,
   switchType:'primary',
   disabled:false
  },
  
  name:'Switch'
};