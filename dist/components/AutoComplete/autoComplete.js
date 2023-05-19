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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useRef } from 'react';
import { Input } from '../Input/input';
import Icon from '../Icon/icon';
import useDebounce from '../../hooks/useDebounce';
import classNames from 'classnames';
import useClickOutside from '../../hooks/useClickOutside';
// 组件
export var AutoComplete = function (props) {
    var fetchSuggestion = props.fetchSuggestion, onSelect = props.onSelect, value = props.value, renderOption = props.renderOption, restProps = __rest(props
    // 整个组件节点
    , ["fetchSuggestion", "onSelect", "value", "renderOption"]);
    // 整个组件节点
    var componentRef = useRef(null);
    // input值
    var _a = useState(value), inputValue = _a[0], setInputValue = _a[1];
    // 推荐存储
    var _b = useState([]), suggestions = _b[0], setSuggestions = _b[1];
    useClickOutside(componentRef, function () {
        setSuggestions([]);
    });
    // 加载icon
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    // enter按下
    var triggerSearch = useRef(false);
    // 高亮显示
    var _d = useState(-1), highlightIndex = _d[0], setHightlightIndex = _d[1];
    var highlight = function (index) {
        if (index < 0)
            index = 0;
        if (index >= suggestions.length) {
            index = suggestions.length - 1;
        }
        console.log(index);
        setHightlightIndex(index);
    };
    var handleKeyDown = function (e) {
        switch (e.code) {
            case 'Enter':
                if (suggestions[highlightIndex]) {
                    handleSelect(suggestions[highlightIndex]);
                }
                break;
            case 'ArrowUp':
                console.log('xia');
                highlight(highlightIndex - 1);
                break;
            case 'Escape':
                setSuggestions([]);
                break;
            case 'ArrowDown':
                highlight(highlightIndex + 1);
                break;
            default:
                break;
        }
    };
    // 监听键盘
    var debounceValue = useDebounce(inputValue, 500);
    useEffect(function () {
        if (debounceValue && triggerSearch.current) {
            var result = fetchSuggestion(debounceValue);
            if (result instanceof Promise) {
                setLoading(true);
                result.then(function (data) {
                    setSuggestions(data);
                    setLoading(false);
                });
            }
            else {
                setSuggestions(result);
            }
        }
        else {
            setSuggestions([]);
        }
        setHightlightIndex(-1);
    }, [debounceValue]);
    var handleChange = function (e) {
        var value = e.target.value.trim();
        setInputValue(value);
        triggerSearch.current = true;
    };
    // 鼠标点击
    var handleSelect = function (item) {
        setInputValue(item.value);
        setSuggestions([]);
        if (onSelect) {
            onSelect(item);
        }
        triggerSearch.current = false;
    };
    // 下拉render模板
    var renderTemplate = function (item) {
        return renderOption ? renderOption(item) : item.value;
    };
    // 下拉模板
    var generateDropdown = function () {
        return (_jsxs("ul", __assign({ className: "viking-suggestion-list" }, { children: [loading && (_jsx("div", __assign({ className: "suggstions-loading-icon" }, { children: _jsx(Icon, { icon: "spinner", spin: true }) }))), suggestions.map(function (item, index) {
                    var cnames = classNames('suggestion-item', {
                        'is-active': index === highlightIndex
                    });
                    return (_jsx("li", __assign({ className: cnames, onClick: function () { return handleSelect(item); } }, { children: renderTemplate(item) }), index));
                })] })));
    };
    // 主体
    return (_jsxs("div", __assign({ className: "viking-auto-complete", ref: componentRef }, { children: [_jsx(Input, __assign({ value: inputValue }, restProps, { onChange: handleChange, onKeyDown: handleKeyDown })), suggestions.length > 0 && generateDropdown()] })));
};
export default AutoComplete;
