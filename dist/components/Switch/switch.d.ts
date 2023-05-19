import { FC } from 'react';
export type SwitchType = 'primary' | 'danger' | 'success' | 'warning';
export interface IButton {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    switchType?: SwitchType;
}
declare const SdSwitch: FC<IButton>;
export default SdSwitch;
