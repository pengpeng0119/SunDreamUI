import { ChangeEvent, FC, InputHTMLAttributes, ReactElement } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
type InputSize = 'lg' | 'sm';
export interface InputProps extends InputHTMLAttributes<HTMLElement> {
    disabled?: boolean;
    inputSize?: InputSize;
    icon?: IconProp;
    prepend?: string | ReactElement;
    append?: string | ReactElement;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export declare const Input: FC<InputProps>;
export default Input;
