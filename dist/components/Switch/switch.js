import { jsx as _jsx } from "react/jsx-runtime";
import classnames from 'classnames';
export var SwitchType;
(function (SwitchType) {
    SwitchType["Primary"] = "primary";
    SwitchType["Danger"] = "danger";
    SwitchType["Success"] = "success";
    SwitchType["Warning"] = "warning";
})(SwitchType || (SwitchType = {}));
export var Switch = function (props) {
    var checked = props.checked, onChange = props.onChange, _a = props.disabled, disabled = _a === void 0 ? false : _a, _b = props.switchType, switchType = _b === void 0 ? SwitchType.Primary : _b;
    return (_jsx("div", { onClick: function () {
            if (!disabled) {
                onChange(!checked);
            }
        }, className: classnames('dumbo-switch', ["switch-style-".concat(switchType)], {
            'dumbo-switch--default': !checked,
            'dumbo-switch--checked': checked,
            'dumbo-switch--disabled': disabled
        }) }));
};
export default Switch;
