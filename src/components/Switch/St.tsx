import { FC } from 'react'
import classnames from 'classnames'
export type ISwitchType = 'primary' | 'danger' | 'warning' | 'success'
export interface ISwitch {
  handleChange: (value: any) => void
  switchType?: ISwitchType
  checkValue: boolean
  disabled?: boolean
}

const Switch: FC<ISwitch> = props => {
  const {
    handleChange,
    switchType = 'primary',
    checkValue = false,
    disabled
  } = props
  const classes = classnames('d-switch', {
    'is-checked': checkValue,
    [`is-checked-${switchType}`]: switchType && checkValue,
    'dumbo-switch--disabled': disabled
  })
  return (
    <div className={classes}>
      <input
        className="d-switch__input"
        type="checkbox"
        onChange={e => {
          handleChange(e.target.checked)
        }}
      />
      <span className="d-switch_action"></span>
    </div>
  )
}

export default Switch
