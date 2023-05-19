"use strict";(self.webpackChunksun_dream_ui=self.webpackChunksun_dream_ui||[]).push([[941],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/stories/Alert.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultButton:function(){return DefaultButton},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Alert_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=(__webpack_require__("./src/styles/index.scss"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js")),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),icon=__webpack_require__("./src/components/Icon/icon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),AlertType=function(AlertType){return AlertType.Success="success",AlertType.Info="info",AlertType.Waring="warning",AlertType.Error="error",AlertType}({}),Alert_alert=function Alert(props){var style=props.style,closable=props.closable,closeText=props.closeText,message=props.message,description=props.description,type=props.type,onClose=props.onClose,classes=classnames_default()("xAlertWrap",(0,defineProperty.Z)({},"alert-".concat(type),type)),_useState=(0,react.useState)(!0),_useState2=(0,slicedToArray.Z)(_useState,2),visible=_useState2[0],setVisible=_useState2[1];return visible?(0,jsx_runtime.jsxs)("div",{className:classes,style:(0,objectSpread2.Z)({opacity:visible?"1":"0"},style),children:[(0,jsx_runtime.jsx)("div",{className:"alertMes",children:message}),(0,jsx_runtime.jsx)("div",{className:"alertDesc",children:description}),!!closable&&(0,jsx_runtime.jsx)("span",{className:"closeBtn",onClick:function handleColse(){setVisible(!1),onClose&&onClose()},children:closeText||(0,jsx_runtime.jsx)(icon.Z,{icon:"times"})})]}):null};try{alert.displayName="alert",alert.__docgenInfo={description:"",displayName:"alert",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},closable:{defaultValue:null,description:"",name:"closable",required:!1,type:{name:"boolean"}},closeText:{defaultValue:null,description:"",name:"closeText",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((...args: any) => any)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/alert.tsx#alert"]={docgenInfo:alert.__docgenInfo,name:"alert",path:"src/components/Alert/alert.tsx#alert"})}catch(__react_docgen_typescript_loader_error){}var _DefaultButton$parame,_DefaultButton$parame2,_DefaultButton$parame3,_DefaultButton$parame4,_DefaultButton$parame5,fontawesome_svg_core=__webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.mjs"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");fontawesome_svg_core.vI.add(free_solid_svg_icons.mRB);var Alert_stories={title:"Example/Alert",component:Alert_alert,tags:["autodocs"]},DefaultButton={args:{message:"这是标题",description:"这是要传入的内容",type:AlertType.Info,closable:!0,onClose:function onClose(){alert(123)}},name:"公告"};DefaultButton.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},DefaultButton.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_DefaultButton$parame=DefaultButton.parameters)||void 0===_DefaultButton$parame?void 0:_DefaultButton$parame.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    message: '这是标题',\n    description: '这是要传入的内容',\n    type: AlertType.Info,\n    closable: true,\n    onClose: () => {\n      alert(123);\n    }\n  },\n  name: '公告'\n}"},null===(_DefaultButton$parame2=DefaultButton.parameters)||void 0===_DefaultButton$parame2||null===(_DefaultButton$parame3=_DefaultButton$parame2.docs)||void 0===_DefaultButton$parame3?void 0:_DefaultButton$parame3.source),description:(0,objectSpread2.Z)({story:"### 引入\r\n~~~js\r\nimport {Alert} from './Alert.stories.ts'\r\n~~~"},null===(_DefaultButton$parame4=DefaultButton.parameters)||void 0===_DefaultButton$parame4||null===(_DefaultButton$parame5=_DefaultButton$parame4.docs)||void 0===_DefaultButton$parame5?void 0:_DefaultButton$parame5.description)})});var __namedExportsOrder=["DefaultButton"];try{DefaultButton.displayName="DefaultButton",DefaultButton.__docgenInfo={description:"### 引入\n~~~js\nimport {Alert} from './Alert.stories.ts'\n~~~",displayName:"DefaultButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Alert.stories.tsx#DefaultButton"]={docgenInfo:DefaultButton.__docgenInfo,name:"DefaultButton",path:"src/stories/Alert.stories.tsx#DefaultButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Icon/icon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","theme"];__webpack_exports__.Z=function Icon(props){var className=props.className,theme=props.theme,restProps=(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(props,_excluded),classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("viking-icon",className,(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},"icon-".concat(theme),theme));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.G,(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({className:classes},restProps))};try{icon.displayName="icon",icon.__docgenInfo={description:"",displayName:"icon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"success"'},{value:'"primary"'},{value:'"secondary"'},{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/icon.tsx#icon"]={docgenInfo:icon.__docgenInfo,name:"icon",path:"src/components/Icon/icon.tsx#icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/index.scss":function(){}}]);