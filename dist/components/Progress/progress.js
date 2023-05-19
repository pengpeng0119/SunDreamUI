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
import { useEffect, useState } from 'react';
// 升序排序
var sortArr = function (arr) { return arr.sort(function (a, b) { return a[0] - b[0]; }); };
// 检测值所对应的进度条颜色状态
function checkStatus(scope, val, defaultColor) {
    val = +val;
    // 从小到大排序
    sortArr(scope);
    if (scope.length === 1) {
        return val < scope[0][0] ? scope[0][1] : defaultColor;
    }
    else if (scope.length === 2) {
        return val < scope[0][0] ? scope[0][1]
            : scope[0][0] < val && val < scope[1][0] ? scope[1][1]
                : defaultColor;
    }
    else if (scope.length === 3) {
        return val < scope[0][0] ? scope[0][1]
            : scope[0][0] < val && val < scope[1][0] ? scope[1][1]
                : scope[1][0] < val && val < scope[2][0] ? scope[2][1]
                    : defaultColor;
    }
}
var Progress = function (props) {
    // 解构
    var _a = props.themeColor, themeColor = _a === void 0 ? '#297bba' : _a, _b = props.percent, percent = _b === void 0 ? 20 : _b, _c = props.autoHidden, autoHidden = _c === void 0 ? false : _c, _d = props.hiddenText, hiddenText = _d === void 0 ? false : _d, _e = props.width, width = _e === void 0 ? 320 : _e, _f = props.textColor, textColor = _f === void 0 ? '#666' : _f, statusScope = props.statusScope, _g = props.height, height = _g === void 0 ? 10 : _g, _h = props.showInnerText, showInnerText = _h === void 0 ? true : _h, _j = props.showOuterText, showOuterText = _j === void 0 ? false : _j;
    // 管理percent
    var _k = useState(percent), progressPercent = _k[0], setProgressPercent = _k[1];
    useEffect(function () {
        if (percent >= 100) {
            setProgressPercent(100);
        }
        else if (percent <= 0) {
            setProgressPercent(0);
        }
        else {
            setProgressPercent(percent);
        }
    }, [percent]);
    return (+progressPercent === 100 && autoHidden ?
        null :
        _jsxs("div", __assign({ className: 'progressWrap' }, { children: [_jsx("div", __assign({ className: 'progressBar', style: { width: typeof width === 'number' ? width + 'px' : width, height: typeof height === 'number' ? height + 'px' : height } }, { children: _jsx("div", __assign({ className: 'progressInnerBar', style: {
                            width: "".concat(progressPercent, "%"),
                            backgroundColor: statusScope && statusScope.length ? checkStatus(statusScope, percent, themeColor) : themeColor
                        } }, { children: showInnerText && _jsx("span", __assign({ className: "inner-text" }, { children: "".concat(progressPercent, "%") })) })) })), showOuterText && (!hiddenText && _jsx("span", __assign({ className: 'progressText', style: { color: textColor } }, { children: progressPercent + '%' })))] })));
};
export default Progress;
