import React from 'react';
export declare enum AlertType {
    Success = "success",
    Info = "info",
    Waring = "warning",
    Error = "error"
}
interface BaseAlertProps {
    style?: any;
    closable?: boolean;
    closeText?: string;
    message?: string;
    description?: string;
    type?: string;
    onClose?: (...args: any) => any;
}
declare const Alert: React.FC<BaseAlertProps>;
export default Alert;
