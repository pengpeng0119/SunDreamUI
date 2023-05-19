import type { Meta } from '@storybook/react';
import '../styles/index.scss';
import Icon from '../components/Icon/icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)
const meta = {
  title: 'Example/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;

export  const DefaultIcon = {
  args: {
    className:'default',
    icon:'times',
    size:'3x',
    theme:'info'
  },
  name:'icon1'
};
export  const Icons1 = {
  args: {
    className:'default',
    icon:'map-marker-alt',
    size:'3x',
    theme:'danger'
  },
  name:'icon2'
};
export  const Icons2 = {
  args: {
    className:'default',
    icon:'grin-alt',
    size:'3x',
    theme:'success'
  },
  name:'icon3'
};
export  const Icons3 = {
  args: {
    className:'default',
    icon:'lightbulb',
    size:'3x',
    theme:'primary'
  },
  name:'icon4'
};