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
import { Fragment as _Fragment, jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { memo, useState } from 'react';
import Button from './components/Button/button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Icon from './components/Icon/icon';
import { AutoComplete } from './components/AutoComplete/autoComplete';
import Progress from './components/Progress/progress';
import Upload from './components/Upload/upload';
import Page from './components/Page/page';
library.add(fas);
var App = memo(function () {
    var _a = useState(10), val = _a[0], setVal = _a[1];
    var _b = useState(false), visible = _b[0], setVisible = _b[1];
    var lakersWithNumber = [
        { value: 'bradley', number: 11 },
        { value: 'pope', number: 1 },
        { value: 'caruso', number: 4 },
        { value: 'cook', number: 2 },
        { value: 'cousins', number: 15 },
        { value: 'james', number: 23 },
        { value: 'AD', number: 3 },
        { value: 'green', number: 14 },
        { value: 'howard', number: 39 },
        { value: 'kuzma', number: 0 }
    ];
    // const handleFetch=(query:string)=>{
    //   return lakersWithNumber.filter(player => player.value.includes(query))
    // }
    var handleFetch = function (query) {
        return fetch("https://api.github.com/search/users?q=".concat(query))
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var items = _a.items;
            console.log(items);
            if (!items) {
                return [];
            }
            if (items.length < 10) {
                return items
                    .slice(0, items.length)
                    .map(function (item) { return (__assign({ value: item.login }, item)); });
            }
            return items
                .slice(0, 10)
                .map(function (item) { return (__assign({ value: item.login }, item)); });
        });
    };
    var renderOption = function (item) {
        return (_jsxs(_Fragment, { children: ["Url:", item.url] }));
    };
    var check = function (file) {
        // if(Math.round(file.size/1024)>50){
        //   alert('file too big')
        //   return false
        // }
        return true;
    };
    var defaultFileList = [
        {
            uid: '123',
            size: 1234,
            name: 'hello.md',
            status: 'uploading',
            percent: 30
        },
        { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
        { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
    ];
    return (_jsxs("div", { children: [_jsx(AutoComplete, { fetchSuggestion: handleFetch, onSelect: function (i) {
                    console.log('first', i);
                }, renderOption: renderOption }), _jsx(Progress, { percent: val }), _jsx(Button, __assign({ onClick: function (e) { return setVal(val + 10); } }, { children: "+10" })), _jsx(Progress, { percent: val, themeColor: "#6699FF", statusScope: [
                    [18, 'red'],
                    [40, 'orange']
                ] }), _jsxs(Upload, __assign({ action: "https://jsonplaceholder.typicode.com/posts/", beforeUpload: check, defaultFileList: defaultFileList, name: "fileName", data: { key: 'value' }, accept: 'png', multiple: true, drag: true }, { children: [_jsx(Icon, { icon: "upload", size: "5x", theme: "secondary" }), _jsx("br", {}), _jsx("p", { children: "Drag file over to upload" })] })), _jsx(Page, { pageCallbackFn: function (i) { return console.log('page', i); } })] }));
});
export default App;
