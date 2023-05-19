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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, createContext } from 'react';
import classNames from 'classnames';
import MenuItem from './menuitem';
import SubMenu from './subMenu';
export var MenuContext = createContext({ index: '0' });
var Menu = function (props) {
    var className = props.className, mode = props.mode, style = props.style, onSelect = props.onSelect, children = props.children, defaultIndex = props.defaultIndex, defaultOpenSubMenus = props.defaultOpenSubMenus;
    var classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    });
    var _a = useState(defaultIndex), currentActive = _a[0], setActive = _a[1];
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, { index: index.toString() });
            }
            else {
                console.error('Warning:Menu has a child which is not a MenuItem component');
            }
        });
    };
    return (_jsx("ul", __assign({ className: classes, style: style }, { children: _jsx(MenuContext.Provider, __assign({ value: passedContext }, { children: renderChildren() })) })));
};
// sb
export var ShowMenuH = function (props) {
    var mode = props.mode, onSelect = props.onSelect;
    return (_jsxs(_Fragment, { children: [_jsxs(Menu, __assign({ defaultIndex: '1', defaultOpenSubMenus: ['4'], mode: mode, onSelect: onSelect }, { children: [_jsx(MenuItem, __assign({ disabled: true }, { children: "cool link 1" })), _jsx(MenuItem, { children: "cool link 2" }), _jsx(MenuItem, { children: "cool link 3" }), _jsx(MenuItem, { children: "cool link 4" }), _jsxs(SubMenu, __assign({ title: "dropdown" }, { children: [_jsx(MenuItem, { children: "1MenuItem" }), _jsx(MenuItem, { children: "2MenuItem" }), _jsx(MenuItem, { children: "3MenuItem" })] }))] })), _jsx("div", { style: { height: '100px' } })] }));
};
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: []
};
export default Menu;
