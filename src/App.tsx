import React, { memo } from 'react'
import Button, { ButtonType } from './components/Button/button'

const App = memo(() => {
  return (
    <div>
      <a href="www.baidu.com">111111</a>
      <h1>hello world</h1>
      <h2>hello world</h2>
      <h4>hello world</h4>  
      <Button disabled>hello</Button>
      <Button btnType={ButtonType.Primary}>hello</Button>
      <Button btnType={ButtonType.Link} href='http://www.baidu.com' disabled>BaiDu</Button>
      <code>
        const a = 'b'
      </code>
    </div>
  )
})

export default App
