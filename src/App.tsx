import React, { memo, useState } from 'react'
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert'
import Switch, { SwitchType } from './components/Switch/switch'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Icon from './components/Icon/icon'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuitem'
import SubMenu from './components/Menu/subMenu'
import { Input } from './components/Input/input'
import {
  AutoComplete,
  DataSourceType
} from './components/AutoComplete/autoComplete'
import { any } from 'prop-types'
import Progress from './components/Progress/progress'
import Upload, { UploadFile } from './components/Upload/upload'
import Page from './components/Page/page'
library.add(fas)
interface LakerPlayerProps {
  value: string
  number: number
}
const App = memo(() => {
  const [val, setVal] = useState(10)
  const [visible, setVisible] = useState(false)

  const lakersWithNumber = [
    { value: 'bradley', number: 11 },
    { value: 'pope', number: 1 },
    { value: 'caruso', number: 4 },
    { value: 'cook', number: 2 },
    { value: 'cousins', number: 15 },
    { value: 'james', number: 23 },
    { value: 'AD', number: 3 },
    { value: 'green', number: 14 },
    { value: 'howard', number: 39 },
    { value: 'kuzma', number: 0 }
  ]
  // const handleFetch=(query:string)=>{
  //   return lakersWithNumber.filter(player => player.value.includes(query))
  // }
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items)
        if (!items) {
          return []
        }
        if (items.length < 10) {
          return items
            .slice(0, items.length)
            .map((item: any) => ({ value: item.login, ...item }))
        }
        return items
          .slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }))
      })
  }
  const renderOption = (item: any) => {
    return (
      <>
        {/* <li>Name:{item.value}</li> */}
        Url:{item.url}
      </>
    )
  }
  const check = (file: File) => {
    // if(Math.round(file.size/1024)>50){
    //   alert('file too big')
    //   return false
    // }
    return true
  }
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
  return (
    <div>
      <AutoComplete
        fetchSuggestion={handleFetch}
        onSelect={(i) => {
          console.log('first', i)
        }}
        renderOption={renderOption}
      />
      <Progress percent={val}></Progress>
      <Button onClick={(e) => setVal(val + 10)}>+10</Button>
      <Progress
        percent={val}
        themeColor="#6699FF"
        statusScope={[
          [18, 'red'],
          [40, 'orange']
        ]}
      />
      <Upload
        action="https://jsonplaceholder.typicode.com/posts/"
        beforeUpload={check}
        defaultFileList={defaultFileList}
        name="fileName"
        data={{ key: 'value' }}
        accept={'png'}
        multiple
        drag
      >
        <Icon icon="upload" size="5x" theme="secondary" />
        <br />
        <p>Drag file over to upload</p>
      </Upload>
      <Page pageCallbackFn={(i) => console.log('page', i)}></Page>
    </div>
  )
})

export default App
