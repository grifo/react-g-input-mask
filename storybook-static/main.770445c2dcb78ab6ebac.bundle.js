(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{246:function(module,exports,__webpack_require__){__webpack_require__(247),__webpack_require__(348),module.exports=__webpack_require__(349)},349:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(159),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(45);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(522),module)}.call(this,__webpack_require__(350)(module))},522:function(module,exports,__webpack_require__){var map={"./currency-mask/CurrencyMask.stories.js":542,"./custom-mask/CustomMask.stories.js":541};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=522},541:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(4),react_default=__webpack_require__.n(react),dist=__webpack_require__(45),addon_actions_dist=__webpack_require__(67),prop_types=(__webpack_require__(16),__webpack_require__(20),__webpack_require__(21),__webpack_require__(52),__webpack_require__(115),__webpack_require__(22),__webpack_require__(17),__webpack_require__(540),__webpack_require__(51),__webpack_require__(23),__webpack_require__(14),__webpack_require__(15),__webpack_require__(32),__webpack_require__(116),__webpack_require__(24),__webpack_require__(108),__webpack_require__(25),__webpack_require__(7)),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var patterns={9:/\d/,A:/[A-Za-z]/,"*":/./},CustomMask=function(_ref){var mask=_ref.mask,placeholderChar=_ref.placeholderChar,defaultValue=_ref.defaultValue,inputProps=_ref.inputProps,as=_ref.as,ref=Object(react.useRef)(),_useState2=_slicedToArray(Object(react.useState)(defaultValue),2),value=_useState2[0],setValue=_useState2[1],_useState4=_slicedToArray(Object(react.useState)([]),2),sepChars=_useState4[0],setSepChars=_useState4[1],_useState6=_slicedToArray(Object(react.useState)([]),2),patternsArray=_useState6[0],setPatternsArray=_useState6[1],_useState8=_slicedToArray(Object(react.useState)(0),2),cursorPosition=_useState8[0],setCursorPosition=_useState8[1];Object(react.useEffect)(function(){var patternsArray=mask.split("").map(function(_char){return Object.keys(patterns).includes(_char)?patterns[_char]:_char});setPatternsArray(patternsArray),setSepChars(patternsArray.filter(function(i){return"string"==typeof i}))},[mask]),Object(react.useEffect)(function(){ref.current.setSelectionRange(cursorPosition,cursorPosition)},[value,cursorPosition]);return react_default.a.createElement(as,_extends({},inputProps,{ref:ref,type:"text",onChange:function handleChange(e){var target=e.target;setValue(function(inputValue){var valueIndex=0;return patternsArray.map(function(p){if("string"==typeof p)return p;var _char3=inputValue[valueIndex];return++valueIndex,_char3&&p.test(_char3)?_char3:placeholderChar}).join("")}(target.value.split("").filter(function(_char2){return!sepChars.includes(_char2)}).join("")));var cursorOffset="string"==typeof patternsArray[target.selectionStart]?1:0;setCursorPosition(target.selectionStart+cursorOffset),inputProps.onChange&&inputProps.onChange(e)},onKeyUp:function handleKeyUp(e){var keyCode=e.keyCode,target=e.target;if(8===keyCode){var pos=target.selectionStart-1;"string"==typeof patternsArray[pos]&&setCursorPosition(pos)}inputProps.onKeyUp&&inputProps.onKeyUp(e)},value:value}))};CustomMask.displayName="CustomMask",CustomMask.propTypes={mask:prop_types_default.a.string.isRequired,placeholderChar:prop_types_default.a.string,defaultValue:prop_types_default.a.string,inputProps:prop_types_default.a.shape({onChange:prop_types_default.a.func,onKeyUp:prop_types_default.a.func}),as:prop_types_default.a.oneOfType([prop_types_default.a.func,prop_types_default.a.string])},CustomMask.defaultProps={placeholderChar:"_",defaultValue:"",inputProps:{},as:"input"};var custom_mask_CustomMask=CustomMask;CustomMask.__docgenInfo={description:"",methods:[],displayName:"CustomMask",props:{placeholderChar:{defaultValue:{value:"'_'",computed:!1},type:{name:"string"},required:!1,description:""},defaultValue:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},inputProps:{defaultValue:{value:"{}",computed:!1},type:{name:"shape",value:{onChange:{name:"func",required:!1},onKeyUp:{name:"func",required:!1}}},required:!1,description:""},as:{defaultValue:{value:"'input'",computed:!1},type:{name:"union",value:[{name:"func"},{name:"string"}]},required:!1,description:""},mask:{type:{name:"string"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/custom-mask/CustomMask.jsx"]={name:"CustomMask",docgenInfo:CustomMask.__docgenInfo,path:"src/custom-mask/CustomMask.jsx"}),__webpack_require__.d(__webpack_exports__,"customMask",function(){return customMask});__webpack_exports__.default={title:"CustomMask"};var customMask=function(story){var _ref=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},mask=_ref.mask,placeholderChar=_ref.placeholderChar,onChange=_ref.onChange,onKeyUp=_ref.onKeyUp;return react_default.a.createElement(custom_mask_CustomMask,{mask:story?Object(dist.text)("Mask","99/99/9999"):mask,placeholderChar:story?Object(dist.text)("Placeholder char","_"):placeholderChar,inputProps:{"data-testid":"input",onChange:story?Object(addon_actions_dist.action)("onChange"):onChange,onKeyUp:story?Object(addon_actions_dist.action)("onKeyUp"):onKeyUp}})};customMask.displayName="customMask",customMask.__docgenInfo={description:"",methods:[],displayName:"customMask"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/custom-mask/CustomMask.stories.js"]={name:"customMask",docgenInfo:customMask.__docgenInfo,path:"src/custom-mask/CustomMask.stories.js"})},542:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(4),react_default=__webpack_require__.n(react),dist=__webpack_require__(45),addon_actions_dist=__webpack_require__(67),prop_types=(__webpack_require__(16),__webpack_require__(20),__webpack_require__(21),__webpack_require__(52),__webpack_require__(9),__webpack_require__(22),__webpack_require__(17),__webpack_require__(535),__webpack_require__(101),__webpack_require__(23),__webpack_require__(153),__webpack_require__(1),__webpack_require__(131),__webpack_require__(537),__webpack_require__(14),__webpack_require__(15),__webpack_require__(32),__webpack_require__(24),__webpack_require__(65),__webpack_require__(106),__webpack_require__(107),__webpack_require__(10),__webpack_require__(25),__webpack_require__(7)),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var reducer=function(state,action){switch(action.type){case"INPUT_VALUE":return _objectSpread({},state,{formatting:!1,value:action.value});case"FORMAT_VALUE":return _objectSpread({},state,{formatting:!0,value:action.value,cursorPosition:action.cursorPosition});default:throw new Error}},getOffset=function(prevValue,formattedValue){return prevValue.length===formattedValue.length?0:prevValue.length<formattedValue.length?1:-1},CurrencyMask=function(_ref2){var options=_ref2.options,defaultValue=_ref2.defaultValue,inputProps=_ref2.inputProps,as=_ref2.as,ref=Object(react.useRef)(),_useReducer2=_slicedToArray(Object(react.useReducer)(reducer,function(defaultValue){return{value:defaultValue,formatting:!1,cursorPosition:0}}(defaultValue)),2),state=_useReducer2[0],dispatch=_useReducer2[1],value=state.value,formatting=state.formatting,cursorPosition=state.cursorPosition;return Object(react.useEffect)(function(){var formattedValue=function(value,_ref){var locale=_ref.locale,currency=_ref.currency,number=value.replace(/\D/g,"").replace(/.{2}$/,".$&");return Intl.NumberFormat(locale,{style:"currency",currency:currency}).format(number)}(value,options);value!==formattedValue&&dispatch({type:"FORMAT_VALUE",value:formattedValue,cursorPosition:Math.max(formattedValue.search(/\d/)+1,ref.current.selectionStart+getOffset(value,formattedValue))})},[options,value]),Object(react.useEffect)(function(){formatting&&ref.current.setSelectionRange(cursorPosition,cursorPosition)},[formatting,cursorPosition]),react_default.a.createElement(as,_extends({},inputProps,{ref:ref,type:"text",value:value,onChange:function handleChange(e){dispatch({type:"INPUT_VALUE",value:e.target.value}),inputProps.onChange&&inputProps.onChange(e)},onKeyUp:function handleKeyUp(e){var keyCode=e.keyCode;if(188===keyCode||190===keyCode){var index=value.lastIndexOf(value.match(/\d+/g).slice(-1)[0]);ref.current.setSelectionRange(index,index+2)}inputProps.onKeyUp&&inputProps.onKeyUp(e)}}))};CurrencyMask.displayName="CurrencyMask",CurrencyMask.propTypes={options:prop_types_default.a.shape({locale:prop_types_default.a.string.isRequired,currency:prop_types_default.a.string.isRequired}).isRequired,defaultValue:prop_types_default.a.string,inputProps:prop_types_default.a.shape({onChange:prop_types_default.a.func,onKeyUp:prop_types_default.a.func}),as:prop_types_default.a.oneOfType([prop_types_default.a.func,prop_types_default.a.string])},CurrencyMask.defaultProps={defaultValue:"",inputProps:{},as:"input"};var currency_mask_CurrencyMask=CurrencyMask;CurrencyMask.__docgenInfo={description:"",methods:[],displayName:"CurrencyMask",props:{defaultValue:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},inputProps:{defaultValue:{value:"{}",computed:!1},type:{name:"shape",value:{onChange:{name:"func",required:!1},onKeyUp:{name:"func",required:!1}}},required:!1,description:""},as:{defaultValue:{value:"'input'",computed:!1},type:{name:"union",value:[{name:"func"},{name:"string"}]},required:!1,description:""},options:{type:{name:"shape",value:{locale:{name:"string",required:!0},currency:{name:"string",required:!0}}},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/currency-mask/CurrencyMask.jsx"]={name:"CurrencyMask",docgenInfo:CurrencyMask.__docgenInfo,path:"src/currency-mask/CurrencyMask.jsx"}),__webpack_require__.d(__webpack_exports__,"currencyMask",function(){return currencyMask});__webpack_exports__.default={title:"CurrencyMask"};var currencyMask=function(story){var _ref=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},locale=_ref.locale,currency=_ref.currency,onChange=_ref.onChange,onKeyUp=_ref.onKeyUp;return react_default.a.createElement(currency_mask_CurrencyMask,{options:{locale:story?Object(dist.text)("Locale","en-us"):locale,currency:story?Object(dist.text)("Currency","USD"):currency},inputProps:{"data-testid":"input",onChange:story?Object(addon_actions_dist.action)("onChange"):onChange,onKeyUp:story?Object(addon_actions_dist.action)("onKeyUp"):onKeyUp}})};currencyMask.displayName="currencyMask",currencyMask.__docgenInfo={description:"",methods:[],displayName:"currencyMask"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/currency-mask/CurrencyMask.stories.js"]={name:"currencyMask",docgenInfo:currencyMask.__docgenInfo,path:"src/currency-mask/CurrencyMask.stories.js"})}},[[246,1,2]]]);
//# sourceMappingURL=main.770445c2dcb78ab6ebac.bundle.js.map