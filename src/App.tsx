import React, { memo, useState } from 'react'
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert';
import Switch, { SwitchType } from './components/Switch/switch';


import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Icon from './components/Icon/icon';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuitem';
import SubMenu from './components/Menu/subMenu';
library.add(fas)
const App = memo(() => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <a href="www.baidu.com">111111</a>
      <h1>hello world</h1>
      <h2>hello world</h2>
      <h4>hello world</h4>
      <h5>111</h5>
      <div style={{width:'200px'}}>
        <Alert message="温馨提示,你注册成功" type={AlertType.Waring}  closable/>
      </div>  
      
      <Alert message="注册成功" description="你在本网站已经注册成功,谢谢您的支持和反馈,多交流真正的技术吧" closable type="success" onClose={()=>{alert(123)}}/>
      <Button btnType={ButtonType.Primary} onClick={e=>{alert(123)}}  rounded size={ButtonSize.large}>click me</Button> 
      <Menu defaultIndex={'0'}   defaultOpenSubMenus={['4']} mode='vertical'>
        <MenuItem  disabled>cool link 1</MenuItem>
        <MenuItem >cool link 2</MenuItem>
        <MenuItem >cool link 3</MenuItem>
        <MenuItem >cool link 4</MenuItem>
        <SubMenu title='dropdown'>
          <MenuItem>1MenuItem</MenuItem>
          <MenuItem>2MenuItem</MenuItem>
          <MenuItem>3MenuItem</MenuItem>
        </SubMenu>
      </Menu>
      <Icon icon='user-secret' size='10x' theme='dark'/>
      <Switch checked={visible} onChange={setVisible} switchType={SwitchType.Success}></Switch>
    </div>
  )
})

export default App


