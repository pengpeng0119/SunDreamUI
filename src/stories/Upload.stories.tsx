import type { Meta, StoryObj } from '@storybook/react';
import '../styles/index.scss';
import { action } from '@storybook/addon-actions'
import Upload, { UploadFile } from '../components/Upload/upload';
import Button from '../components/Button/button';
import Icon from '../components/Icon/icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)
const meta = {
  title: 'Example/Upload',
  component: Upload,
  tags: ['autodocs'],

} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof meta>;


const defaultFileList: UploadFile[] = [
  {
    uid: '123',
    size: 1234,
    name: 'hello.md',
    status: 'uploading',
    percent: 30
  },
  { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
  { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
]
export  const DefaultButton: Story = {
  
  args: {
    action:"https://jsonplaceholder.typicode.com/posts/",
    /**test */
    defaultFileList:defaultFileList,
    beforeUpload:(file:File)=>{action('beforeUpload'); return true}
  },
  render:(args)=>{
    return(
      <Upload
      {...args}
      >
        <Button>点击上传</Button>
      </Upload>
    )
  },

  name:'文件上传'   
};

export const DraggerUpload:Story={
  args:{
    action:'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  },
  render:(args)=>{
    return(
      <Upload
      {...args}
      drag
      >
        <Icon icon="upload" size="5x" theme="secondary" />
        <br />
        <p>Drag file over to upload</p>
      </Upload>
    )
  },
  name:'拖拽上传'   
}