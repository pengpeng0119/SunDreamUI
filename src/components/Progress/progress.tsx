import React, { FC, memo, useEffect, useState } from 'react'

export interface ProgressProps{
  /**进度条颜色 */
  themeColor?:string;
  /**初始值 */
  percent?:number;
  /**到达100自动隐藏 */
  autoHidden?:boolean;
  /**隐藏文本 */
  hiddenText?:boolean;
  /**进度条长度 */
  width?:string|number;
  /**文本颜色 */
  textColor?:string;
  /**传入数组控制阈值变换 */
  statusScope?:any[];
  height?:number|string
  showInnerText?:boolean
  showOuterText?:boolean
}
// 升序排序
let sortArr = (arr:any[]) => arr.sort((a,b) => a[0] - b[0])

// 检测值所对应的进度条颜色状态
function checkStatus(scope:any[], val:number, defaultColor:string) {
  val = +val
  // 从小到大排序
  sortArr(scope)

  if(scope.length === 1) {
    return val < scope[0][0] ? scope[0][1] : defaultColor
  }else if(scope.length === 2) {
    return val < scope[0][0] ? scope[0][1]
      : scope[0][0] < val && val < scope[1][0] ? scope[1][1]
        : defaultColor
  }else if(scope.length === 3) {
    return val < scope[0][0] ? scope[0][1]
      : scope[0][0] < val && val < scope[1][0] ? scope[1][1]
        : scope[1][0] < val && val < scope[2][0] ? scope[2][1]
          : defaultColor
  }
}

const Progress:FC<ProgressProps>=(props)=>{
// 解构
  const {
    themeColor = '#297bba', 
    percent = 20, 
    autoHidden = false, 
    hiddenText = false, 
    width = 320, 
    textColor = '#666',
    statusScope ,
    height=10,
    showInnerText=true,
    showOuterText=false
  }=props
  // 管理percent
  const [progressPercent,setProgressPercent]=useState(percent)
  useEffect(()=>{
    if(percent>=100){
      setProgressPercent(100)
    }else if(percent<=0){
      setProgressPercent(0)
    }else{
      setProgressPercent(percent)
    }
  },[percent])
  return(
    +progressPercent === 100 && autoHidden ? 
    null : 
    <div className={'progressWrap'} >
      <div className={'progressBar'} style={{ width: typeof width === 'number' ? width + 'px' : width ,height: typeof height === 'number' ? height + 'px' : height }}>
        <div 
          className={'progressInnerBar'} 
          style={{
            width: `${progressPercent}%`,
            backgroundColor: statusScope && statusScope.length ? checkStatus(statusScope, percent, themeColor) : themeColor
          }}
        >
         {showInnerText && <span className="inner-text">{`${progressPercent}%`}</span>}
        </div>
      </div>
      {
        showOuterText&&(!hiddenText && <span className={'progressText'} style={{ color: textColor }}>{progressPercent + '%'}</span>)
      }
    </div>
  )
}

export default Progress