import { FC } from 'react';
export declare enum SwitchType {
    Primary = "primary",
    Danger = "danger",
    Success = "success",
    Warning = "warning"
}
export interface IButton {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    switchType?: SwitchType;
}
export declare const Switch: FC<IButton>;
export default Switch;
