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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["large"] = "lg";
    ButtonSize["Small"] = "sm";
})(ButtonSize || (ButtonSize = {}));
export var ButtonType;
(function (ButtonType) {
    ButtonType["Primary"] = "primary";
    ButtonType["Default"] = "default";
    ButtonType["Danger"] = "danger";
    ButtonType["Link"] = "link";
    ButtonType["Success"] = "success";
})(ButtonType || (ButtonType = {}));
var Button = function (props) {
    var _a;
    var btnType = props.btnType, className = props.className, disabled = props.disabled, rounded = props.rounded, size = props.size, children = props.children, href = props.href, ellipse = props.ellipse, restProps = __rest(props, ["btnType", "className", "disabled", "rounded", "size", "children", "href", "ellipse"]);
    var classes = classNames('btn', className, (_a = {},
        _a["btn-".concat(btnType)] = btnType,
        _a["btn-".concat(size)] = size,
        _a.disabled = btnType === ButtonType.Link && disabled,
        _a['btn-ellipse'] = ellipse,
        _a['btn-rounded'] = rounded,
        _a));
    if (btnType === ButtonType.Link && href) {
        return (_jsx("a", __assign({ className: classes, href: href }, restProps, { children: children })));
    }
    else {
        return (_jsx("button", __assign({ className: classes, disabled: disabled }, restProps, { children: children })));
    }
};
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
};
export default Button;
