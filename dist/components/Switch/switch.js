import { jsx as _jsx } from "react/jsx-runtime";
import classnames from 'classnames';
var SdSwitch = function (props) {
    var checked = props.checked, onChange = props.onChange, _a = props.disabled, disabled = _a === void 0 ? false : _a, _b = props.switchType, switchType = _b === void 0 ? 'primary' : _b;
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
export default SdSwitch;
