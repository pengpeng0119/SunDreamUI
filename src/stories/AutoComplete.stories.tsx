import type { Meta, StoryObj } from '@storybook/react';
import '../styles/index.scss';
import { AutoComplete } from '../components/AutoComplete/autoComplete';
import {action} from '@storybook/addon-actions'
const meta = {
  title: 'Example/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const handleFetch=(query:string)=>{
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res => res.json())
    .then(({ items }) => {
      console.log(items)
      if(!items){
        return []
      }
      if(items.length<10){
        return items.slice(0, items.length).map((item: any) => ({ value: item.login, ...item}))
      }
      return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
    })
}

/**
 * #### 传入的函数(当然您也可以自己选择函数传入):
 * ~~~js
 * const handleFetch=(query:string)=>{
 *   return fetch(`https://api.github.com/search/users?q=${query}`)
 *      .then(res => res.json())
 *      .then(({ items }) => {
 *        console.log(items)
 *        if(!items){
 *        return []
 *        }
 *    if(items.length<10){
 *      return items.slice(0, items.length).map((item: any) => ({ value: item.login, ...item}))
 *    }
 *    return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
 *    })
 *    }
 * 
 * 
 * 
 * 
 * 
 * ~~~
 * ####可以通过上下键来选择
 * ####可以来按Enter命中
 * ####esc键可以去除
 * ####内部有做防抖处理,放心使用异步请求
 */
export const Primary :Story={
  // render:(args)=>(
  //   <>
  //     <AutoComplete 
  //     fetchSuggestions={handleFetch}
  //     onSelect={action('selected')}
  //     //renderOption={renderOption}
  //     />
  //   </>
    
  // ), 
  args:{
    onSelect:action('selected'),
    fetchSuggestion:handleFetch
  },
  name:'带自动提示的增强input'
}