import React, { memo } from 'react'
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert copy';

const App = memo(() => {
  return (
    <div>
      <a href="www.baidu.com">111111</a>
      <h1>hello world</h1>
      <h2>hello world</h2>
      <h4>hello world</h4>  
      <Alert message="温馨提示,你注册成功" type={AlertType.Success} closable />
      <Alert message="注册成功" description="你在本网站已经注册成功,谢谢您的支持和反馈,多交流真正的技术吧" closable type="success" />
      
    </div>
  )
})

export default App
