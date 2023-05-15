import React, { memo, useState } from 'react'
import classNames from 'classnames'
// import styles from './style.scss'
function Alert(props) {
  const { style, closable, closeText, message, description, type, onClose } =
    props
  let [visible, setVisible] = useState(true)
  const handleColse = () => {
    setVisible(false)
    onClose && onClose()
  }
  const classes = classNames('xAlertWrap', {
    [`alert-${type}`]: type
  })
  return visible ? (
    <div
      className={classes}
      style={{
        opacity: visible ? '1' : '0',
        ...style
      }}
    >
      <div className={'alertMes'}>{message}</div>
      <div className={'alertDesc'}>{description}</div>
      {!!closable && (
        <span className={'closeBtn'} onClick={handleColse}>
          {closeText ? closeText : 'x'}
        </span>
      )}
    </div>
  ) : null
}
Alert.defaultProps = {
  Type: 'warning'
}

export default Alert
