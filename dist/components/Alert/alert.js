var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/icon';
export var AlertType;
(function (AlertType) {
    AlertType["Success"] = "success";
    AlertType["Info"] = "info";
    AlertType["Waring"] = "warning";
    AlertType["Error"] = "error";
})(AlertType || (AlertType = {}));
var Alert = function (props) {
    var _a;
    var style = props.style, closable = props.closable, closeText = props.closeText, message = props.message, description = props.description, type = props.type, onClose = props.onClose;
    var classes = classNames('xAlertWrap', (_a = {},
        _a["alert-".concat(type)] = type,
        _a));
    var _b = useState(true), visible = _b[0], setVisible = _b[1];
    var handleColse = function () {
        setVisible(false);
        onClose && onClose();
    };
    return visible ? (_jsxs("div", __assign({ className: classes, style: __assign({ opacity: visible ? '1' : '0' }, style) }, { children: [_jsx("div", __assign({ className: 'alertMes' }, { children: message })), _jsx("div", __assign({ className: 'alertDesc' }, { children: description })), !!closable && (_jsx("span", __assign({ className: 'closeBtn', onClick: handleColse }, { children: closeText ? closeText : _jsx(Icon, { icon: "times" }) })))] }))) : null;
};
export default Alert;
