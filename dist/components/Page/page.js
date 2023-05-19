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
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
var Page = function (props) {
    var _a = props.currentPage, currentPage = _a === void 0 ? 1 : _a, _b = props.groupCount, groupCount = _b === void 0 ? 5 : _b, _c = props.startPage, startPage = _c === void 0 ? 1 : _c, _d = props.totalPage, totalPage = _d === void 0 ? 12 : _d, pageCallbackFn = props.pageCallbackFn;
    var _e = useState(startPage), varStartPage = _e[0], setVarStartPage = _e[1];
    var _f = useState(currentPage), varCurrentPage = _f[0], setVarCurrentPage = _f[1];
    useEffect(function () {
        if (pageCallbackFn)
            pageCallbackFn(varCurrentPage);
    }, [setVarCurrentPage]);
    var createPage = function () {
        var pages = [];
        //上一页
        pages.push(_jsx("li", __assign({ className: varCurrentPage === 1 ? 'nomore' : '', onClick: prePageHandeler }, { children: "\u4E0A\u4E00\u9875" }), 0));
        if (totalPage <= 10) {
            var _loop_1 = function (i) {
                pages.push(_jsx("li", __assign({ onClick: function (e) { return pageClick(i); }, className: varCurrentPage === i ? 'activePage' : '' }, { children: i }), i));
            };
            /*总页码小于等于10时，全部显示出来*/
            for (var i = 1; i <= totalPage; i++) {
                _loop_1(i);
            }
        }
        else {
            // 页码大于10
            pages.push(_jsx("li", __assign({ className: varCurrentPage === 1 ? 'activePage' : '', onClick: function (e) { return pageClick(1); } }, { children: "1" }), 1));
            var pageLength = 0;
            if (groupCount + varStartPage > totalPage) {
                pageLength = totalPage;
            }
            else {
                pageLength = groupCount + varStartPage;
            }
            if (varCurrentPage >= groupCount) {
                pages.push(_jsx("li", __assign({ className: "" }, { children: "\u00B7\u00B7\u00B7" }), -1));
            }
            var _loop_2 = function (i) {
                if (i <= totalPage - 1 && i > 1) {
                    pages.push(_jsx("li", __assign({ className: varCurrentPage === i ? 'activePage' : '', onClick: function (e) { return pageClick(i); } }, { children: i }), i));
                }
            };
            //非第一页和最后一页显示
            for (var i = varStartPage; i < pageLength; i++) {
                _loop_2(i);
            }
            //后面省略号
            if (totalPage - varStartPage >= groupCount + 1) {
                pages.push(_jsx("li", __assign({ className: "" }, { children: "\u00B7\u00B7\u00B7" }), -2));
            }
            //最后一页
            pages.push(_jsx("li", __assign({ className: varCurrentPage === totalPage ? 'activePage' : '', onClick: function (e) { return pageClick(totalPage); } }, { children: totalPage }), totalPage));
        }
        pages.push(_jsx("li", __assign({ className: varCurrentPage === totalPage ? 'nomore' : '', onClick: nextPageHandeler }, { children: "\u4E0B\u4E00\u9875" }), totalPage + 1));
        return pages;
    };
    //页码点击
    function pageClick(currentPage) {
        var getCurrentPage = pageCallbackFn;
        //当 当前页码 大于 分组的页码 时，使 当前页 前面 显示 两个页码
        if (currentPage >= groupCount) {
            // this.setState({
            //     startPage: currentPage - 2,
            // })
            setVarStartPage(currentPage - 2);
        }
        if (currentPage < groupCount) {
            // this.setState({
            //     startPage: 1,
            // })
            setVarStartPage(1);
        }
        //第一页时重新设置分组的起始页
        if (currentPage === 1) {
            // this.setState({
            //     startPage: 1,
            // })
            setVarStartPage(1);
        }
        // this.setState({
        //     currentPage
        // })
        setVarCurrentPage(currentPage);
        //将当前页码返回父组件
        if (getCurrentPage)
            getCurrentPage(currentPage);
    }
    //上一页事件
    function prePageHandeler() {
        if (varCurrentPage === 1) {
            return false;
        }
        setVarCurrentPage(varCurrentPage - 1);
        pageClick(varCurrentPage - 1);
    }
    //下一页事件
    function nextPageHandeler() {
        // const {totalPage} = this.props.pageConfig;
        // if (++currentPage > totalPage) {
        //     return false
        // }
        // pageClick(currentPage)
        if (varCurrentPage + 1 >= totalPage) {
            return false;
        }
        setVarCurrentPage(varCurrentPage + 1);
        pageClick(varCurrentPage + 1);
    }
    return _jsx("ul", __assign({ className: "page-container" }, { children: createPage() }));
};
export default Page;
