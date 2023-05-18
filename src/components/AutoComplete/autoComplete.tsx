import React, { ChangeEvent,KeyboardEvent, FC, ReactElement, useEffect, useState, useRef } from 'react'
import { Input, InputProps } from '../Input/input';
import Icon from '../Icon/icon';
import useDebounce from '../../hooks/useDebounce';
import classNames from 'classnames'
import useClickOutside from '../../hooks/useClickOutside';
// 接口
interface DataSourceObject{
  value:string
}
export type DataSourceType<T={}>=T&DataSourceObject
export interface AutoCompleteProps extends Omit<InputProps,'onSelect'>{
  fetchSuggestion:(str:string)=>DataSourceType[]|Promise<DataSourceType[]>
  onSelect?:(item:DataSourceType)=>void
  renderOption?:(item:DataSourceType)=>ReactElement
}

// 组件
export const AutoComplete:FC<AutoCompleteProps>=(props)=>{
  const{
    fetchSuggestion,
    onSelect,
    value,
    renderOption,
    ...restProps
  }=props
// 整个组件节点
const componentRef=useRef<HTMLDivElement>(null)
// input值
  const [inputValue,setInputValue]=useState(value as string)
// 推荐存储
  const [suggestions,setSuggestions]=useState<DataSourceType[]>([])
  useClickOutside(componentRef,()=>{setSuggestions([])})
// 加载icon
  const [loading,setLoading]=useState(false)
// enter按下
  const triggerSearch=useRef(false)
// 高亮显示
const [highlightIndex,setHightlightIndex]=useState(-1)
const highlight=(index:number)=>{
  if(index<0) index=0
  if(index>=suggestions.length) {
    index=suggestions.length-1
  }
  console.log(index)
  setHightlightIndex(index)
}
const handleKeyDown=(e:KeyboardEvent<HTMLInputElement>)=>{
  switch(e.code){
    case 'Enter':
      if(suggestions[highlightIndex]){
        handleSelect(suggestions[highlightIndex])
      }
      break
    case 'ArrowUp':
      console.log('xia')
      highlight(highlightIndex-1)
      break
    case 'Escape':
      setSuggestions([])
      break
    case 'ArrowDown':
      highlight(highlightIndex+1)
      break
    default:
      break
  }
}
// 监听键盘
const debounceValue=useDebounce(inputValue,500)
  useEffect(()=>{
    if(debounceValue&&triggerSearch.current){
      const result=fetchSuggestion(debounceValue)
      if(result instanceof Promise){
        setLoading(true)
        result.then(data=>{
          setSuggestions(data)
          setLoading(false)
        })
      }else{
        setSuggestions(result)
      }
    }else{
      setSuggestions([])
    }
    setHightlightIndex(-1)
  },[debounceValue])
  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    const value=e.target.value.trim()
    setInputValue(value)
    triggerSearch.current=true
  }
// 鼠标点击
  const handleSelect=(item:DataSourceType)=>{
    setInputValue(item.value)
    setSuggestions([])
    if(onSelect){
      onSelect(item)
    }
    triggerSearch.current=false
  }
// 下拉render模板
  const renderTemplate :any=(item:DataSourceType)=>{
    return renderOption?renderOption(item):item.value
  }
// 下拉模板
  const generateDropdown=()=>{
   
    return (
      <ul className="viking-suggestion-list">
          { loading &&
            <div className="suggstions-loading-icon">
              <Icon icon="spinner" spin/>
            </div>
          }
        {suggestions.map((item,index)=>{
           const cnames=classNames('suggestion-item',{
            'is-active': index === highlightIndex
          })
          return (
            <li key={index} className={cnames} onClick={()=>handleSelect(item)}>
              {renderTemplate(item)}
            </li>
          )
        })}
      </ul>
    )
  }
// 主体
  return(
    <div className='viking-auto-complete' ref={componentRef}>
      <Input value={inputValue}
        {...restProps}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {/* {loading&&  <ul><Icon icon='spinner' spin></Icon></ul>} */}
      {(suggestions.length>0)&&generateDropdown()}
    </div>
  )
}
