import React from 'react';
import classnames from 'classnames';

export enum SwitchType{
  Primary='primary',
  Danger='danger',
  Success='success',
  Warning='warning'
}
export interface IButton {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    switchType?:SwitchType
}

export default function Switch(props: IButton) {
    const { checked, onChange, disabled = false,switchType=SwitchType.Primary } = props;
    return (
        <div
            onClick={() => {
                if (!disabled) {
                    onChange(!checked)
                }
            }}
            className={classnames("dumbo-switch",[`switch-style-${switchType}`], {
                'dumbo-switch--default': !checked,
                'dumbo-switch--checked': checked,
                'dumbo-switch--disabled': disabled
            })}>

        </div>
    )
}

