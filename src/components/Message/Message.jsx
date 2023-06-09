import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Icon from '../Icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'

library.add(fas)
// import './style.less'

const div = document.createElement('div')
document.body.appendChild(div)

function notice(args) {
  // const root = createRoot(document.getElementById("root"));
  // return ReactDOM.render(<Message {...args} />, div)
  // return div.render(<Message {...args} />)
  const root2 = ReactDOM.createRoot(div)
  root2.render(<Message {...args} />)
}

let timer

export function Message(props) {
  const [msgs, setMsgs] = useState([])
  const { content, type } = props
  const showIcon = () => {
    if (type === 'info') {
      return <Icon className={`message-content-icon`} icon={'info'}></Icon>
    }
    if (type === 'success') {
      return (
        <Icon className={`message-content-icon`} icon={'check-circle'}></Icon>
      )
    }
    if (type === 'warn') {
      return (
        <Icon className={`message-content-icon`} icon={'radiation-alt'}></Icon>
      )
    }
    if (type === 'danger') {
      return (
        <Icon
          className={`message-content-icon`}
          icon={'exclamation-triangle'}
        ></Icon>
      )
    }

    console.log('show', type)
  }
  useEffect(() => {
    setMsgs([...msgs, props])
  }, [props])

  useEffect(() => {
    if (msgs.length) {
      let msgscopy = JSON.parse(JSON.stringify(msgs))
      // setInterval 写法
      clearInterval(timer)
      timer = setInterval(
        setMsgs => {
          msgscopy.shift()
          setMsgs(JSON.parse(JSON.stringify(msgscopy)))
          if (!msgscopy.length) {
            clearInterval(timer)
          }
        },
        props.duration * 1000,
        setMsgs
      )
    }
  }, [msgs])
  const classes = classNames('message-content', { [`message-${type}`]: type })
  return (
    <div className="message">
      {msgs.map((item, index) => {
        return (
          <div className={classes} key={index}>
            {showIcon()}
            <span className="message-content-text">{content}</span>
          </div>
        )
      })}
    </div>
  )
}

let api = {
  info: (content, duration = 3, type = 'info') => {
    return notice({ content, duration, type })
  },
  success: (content, duration = 3, type = 'success') => {
    return notice({ content, duration, type })
  },
  warn: (content, duration = 3, type = 'warn') => {
    return notice({ content, duration, type })
  },
  danger: (content, duration = 3, type = 'danger') => {
    return notice({ content, duration, type })
  }
}

export default api
