// Button.stories.ts|tsx

// import { Button } from './Button';
import api from '../components/Message/Message'
import Button from '../components/Button'

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Example/Message',
  component: Button
}

export default meta

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
const handleClick = () => {
  api.success('我是全局提示组件')
  // message.info('我是全局提示组件'); 其他提示类型都按照此方式即可。
  // message.info('我是全局提示组件'，4); 第二个参数为自定义时长。
}

export const Primary = {
  render: () => {
    return <Button onClick={handleClick}>click</Button>
  }
}
