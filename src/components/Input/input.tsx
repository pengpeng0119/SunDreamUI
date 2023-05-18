import React, { ChangeEvent, FC, InputHTMLAttributes, ReactElement } from 'react'
import Icon from '../Icon/icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames'
type InputSize='lg'|'sm'
export interface InputProps extends InputHTMLAttributes<HTMLElement>{
  disabled?:boolean;
  inputSize?:InputSize;
  icon?:IconProp;
  prepend?:string|ReactElement;
  append?:string|ReactElement;
  onChange?:(e:ChangeEvent<HTMLInputElement>)=>void
}

export const Input :FC<InputProps>=(props)=>{
  //取出各种属性
  const{
    disabled,
    inputSize,
    icon,
    prepend,
    append,
    style,
    ...restProps
  } = props
  // 根据属性计算不同的样式
  const cnames=classNames('viking-input-wrapper',{
    [`input-size-${inputSize}`]:inputSize,
    'is-disabled':disabled,
    'input-group':prepend||append,
    'input-group-append':!!append,
    'input-group-prepend':!!prepend
  })
  const fixControlledValue=(value:any)=>{
    if(typeof value==='undefined'|| value===null){
      return ''
    }
    return value
  }
  if('value' in props){
    delete restProps.defaultValue
    restProps.value=fixControlledValue(props.value)
  }
  // 根据属性来判断是否返回特定节点
  return(
    <div className={cnames} style={style}>
      {prepend && <div className='viking-input-group-prepend'>{prepend}</div>}
      {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}/></div>}
      <input 
        className='viking-input-inner'
        disabled={disabled}
        {...restProps}
      />
      {append && <div className='viking-input-group-append'>{append}</div>}
    </div>
  )
}

