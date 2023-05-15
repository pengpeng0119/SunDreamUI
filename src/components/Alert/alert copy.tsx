import React, { useState } from "react";
import classNames from 'classnames'
export enum AlertType{
  Success='success',
  Info='info',
  Waring='warning',
  Error='error'
}
interface BaseAlertProps{
  style?:any,
  closable?:boolean,
  closeText?:string,
  message?:string,
  description?:string,
  type?:string,
  onClose?:(...args:any)=>any;
}
const Alert:React.FC<BaseAlertProps>=(props)=>{
  const { style, closable, closeText, message, description, type, onClose } =
  props
  const classes = classNames('xAlertWrap', {
    [`alert-${type}`]: type
  })
  const [visible, setVisible] = useState(true)
  const handleColse = () => {
    setVisible(false)
    onClose && onClose()
  }
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
export default Alert