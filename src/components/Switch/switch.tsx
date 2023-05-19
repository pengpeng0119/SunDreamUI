import classnames from 'classnames'
import { FC } from 'react'

export type SwitchType = 'primary' | 'danger' | 'success' | 'warning'
export interface IButton {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  switchType?: SwitchType
}

const SdSwitch: FC<IButton> = props => {
  const { checked, onChange, disabled = false, switchType = 'primary' } = props
  return (
    <div
      onClick={() => {
        if (!disabled) {
          onChange(!checked)
        }
      }}
      className={classnames('dumbo-switch', [`switch-style-${switchType}`], {
        'dumbo-switch--default': !checked,
        'dumbo-switch--checked': checked,
        'dumbo-switch--disabled': disabled
      })}
    ></div>
  )
}
export default SdSwitch
