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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import axios from 'axios';
import { useRef, useState } from 'react';
import { UploadList } from './uploadList';
import { Dragger } from './dragger';
// 组件
var Upload = function (props) {
    var action = props.action, defaultFileList = props.defaultFileList, onRemove = props.onRemove, onProgress = props.onProgress, onError = props.onError, beforeUpload = props.beforeUpload, onSuccess = props.onSuccess, onChange = props.onChange, name = props.name, headers = props.headers, data = props.data, withCredentials = props.withCredentials, accept = props.accept, multiple = props.multiple, children = props.children, drag = props.drag;
    var _a = useState(defaultFileList || []), fileList = _a[0], setFileList = _a[1];
    var fileInput = useRef(null);
    var handleClick = function () {
        if (fileInput.current) {
            fileInput.current.click();
        }
    };
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (!files) {
            return;
        }
        uploadFiles(files);
        if (fileInput.current) {
            fileInput.current.value = '';
        }
    };
    var handleRemove = function (file) {
        setFileList(function (preList) {
            return preList.filter(function (item) { return item.uid !== file.uid; });
        });
        if (onRemove)
            onRemove(file);
    };
    var uploadFiles = function (files) {
        var postFiles = Array.from(files);
        postFiles.forEach(function (file) {
            if (!beforeUpload) {
                post(file);
            }
            else {
                var result = beforeUpload(file);
                if (result && result instanceof Promise) {
                    result.then(function (processedFile) {
                        post(processedFile);
                    });
                }
                else if (result !== false) {
                    post(file);
                }
            }
        });
    };
    // axios请求
    var updateFileList = function (updateFile, updateObj) {
        setFileList(function (prevList) {
            return prevList.map(function (file) {
                if (file.uid === updateFile.uid) {
                    return __assign(__assign({}, file), updateObj);
                }
                else {
                    return file;
                }
            });
        });
    };
    var post = function (file) {
        var _file = {
            uid: Date.now() + 'upload-file',
            status: 'ready',
            name: file.name,
            size: file.size,
            percent: 0,
            raw: file
        };
        // setFileList([_file, ...fileList])
        setFileList(function (preList) {
            return __spreadArray([_file], preList, true);
        });
        var formData = new FormData();
        formData.append(name || 'file', file);
        if (data) {
            Object.keys(data).forEach(function (key) {
                formData.append(key, data[key]);
            });
        }
        axios
            .post(action, formData, {
            headers: __assign({ 'Content-Type': 'multipart/form-data' }, headers),
            withCredentials: withCredentials,
            onUploadProgress: function (e) {
                var percentage = Math.round((e.loaded * 100) / e.total) || 0;
                if (percentage <= 100) {
                    updateFileList(_file, { percent: percentage, status: 'uploading' });
                    if (onProgress)
                        onProgress(percentage, file);
                }
            }
        })
            .then(function (resp) {
            console.log(resp);
            updateFileList(_file, { status: 'success', response: resp.data });
            if (onSuccess) {
                onSuccess(resp.data, file);
            }
            if (onChange) {
                onChange(file);
            }
        })
            .catch(function (err) {
            console.error(err);
            updateFileList(_file, { status: 'error', error: err });
            if (onError) {
                onError(err, file);
            }
            if (onChange) {
                onChange(file);
            }
        });
    };
    console.log('@', fileList);
    return (_jsxs("div", __assign({ className: "viking-upload-component", onClick: handleClick, style: { display: 'inline-block' } }, { children: [drag ? (_jsx(Dragger, __assign({ onFile: function (files) {
                    uploadFiles(files);
                } }, { children: children }))) : (children), _jsx("input", { className: "viking-file-input", style: { display: 'none' }, type: "file", ref: fileInput, onChange: handleFileChange, accept: accept, multiple: multiple }), _jsx(UploadList, { fileList: fileList, onRemove: handleRemove })] })));
};
Upload.defaultProps = {
    name: 'file'
};
export default Upload;
