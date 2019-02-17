parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"7ceU":[function(require,module,exports) {
"use strict";function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var o=0;o<r.length;o++){var t=r[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function o(e,o,t){return o&&r(e.prototype,o),t&&r(e,t),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(){function r(){e(this,r),this._usernameBackgroundColor="",this._usernames=[],this._usernamesAreRegExp=!1,this._moderatorBackgroundColor="",this._initialBackgroundColor="",this._chatListFunc=function(){return[]},this._loaded=!1}return o(r,[{key:"loadedChatList",value:function(){this._loaded=!0}},{key:"fetchedConfig",set:function(e){this._usernameBackgroundColor=e.usernameBackgroundColor||this._usernameBackgroundColor,this._usernames=e.usernames||this._usernames,this._usernamesAreRegExp=e.usernamesAreRegExp||this._usernamesAreRegExp,this._moderatorBackgroundColor=e.moderatorBackgroundColor||this._moderatorBackgroundColor}},{key:"colors",get:function(){return{username:this._usernameBackgroundColor,moderator:this._moderatorBackgroundColor,initialBackgroundColor:this._initialBackgroundColor}}},{key:"usernameBackgroundColor",get:function(){return this._usernameBackgroundColor}},{key:"usernames",get:function(){return this._usernames}},{key:"usernamesAreRegExp",get:function(){return this._usernamesAreRegExp}},{key:"moderatorBackgroundColor",get:function(){return this._moderatorBackgroundColor}},{key:"loaded",get:function(){return this._loaded}},{key:"initialBackgroundColor",get:function(){return this._initialBackgroundColor},set:function(e){""===this._initialBackgroundColor&&(this._initialBackgroundColor=e)}},{key:"chatListFunc",get:function(){return this._chatListFunc||function(){return[]}},set:function(e){0===this._chatListFunc.length&&(this._chatListFunc=e)}}]),r}(),n=new t;exports.default=n;
},{}],"xdg2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configKeys=void 0;var e={usernamesKeyName:"usernamesKeyName",usernamesAreRegExpKeyName:"usernamesAreRegExpKeyName"};exports.configKeys=e;
},{}],"1Ck9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.chatListFunc=exports.configKeys=exports.selectors=void 0;var e=require("./common-const"),r={moderator:"yt-live-chat-author-chip yt-icon.yt-live-chat-author-badge-renderer",username:"#author-name"};exports.selectors=r;var o={usernameBackgroundColorKeyName:"gaming_usernameBackgroundColorKeyName",usernamesKeyName:e.configKeys.usernamesKeyName,usernamesAreRegExpKeyName:e.configKeys.usernamesAreRegExpKeyName,moderatorBackgroundColorKeyName:"gaming_moderatorBackgroundColorKeyName"};exports.configKeys=o;var t=function(){return document.querySelector("yt-live-chat-renderer yt-live-chat-item-list-renderer #items")};exports.chatListFunc=t;
},{"./common-const":"xdg2"}],"De4i":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e,r,t){return null!=e.querySelector(t.moderator)},r=function(e,r,t,n){var o=e.querySelector(t.username);if(!o)return!1;var u=o.textContent;if(!n)return r.some(function(e){return u.includes(e)});try{return r.some(function(e){return new RegExp(e).test(u)})}catch(c){return!1}},t=function(t,n,o,u,c){return e(t,o,u)?n.moderator:r(t,o,u,c)?n.username:n.initialBackgroundColor},n=function(e,r,n,o,u){return e.forEach(function(e){e.style.backgroundColor=t(e,r,n,o,u)})},o=n;exports.default=o;
},{}],"SIAn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./paint")),t=r(require("../state"));function r(e){return e&&e.__esModule?e:{default:e}}var u=function(r){if(t.default.loaded){var u=t.default.chatListFunc().querySelectorAll("yt-live-chat-text-message-renderer");(0,e.default)(u,t.default.colors,t.default.usernames,r,t.default.usernamesAreRegExp)}},a=u;exports.default=a;
},{"./paint":"De4i","../state":"7ceU"}],"OhDo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("../state"));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(r){return new Promise(function(o,a){var u=r.usernameBackgroundColorKeyName,t=r.usernamesKeyName,n=r.usernamesAreRegExpKeyName,s=r.moderatorBackgroundColorKeyName;chrome.storage.sync.get([u,t,n,s],function(r){e.default.fetchedConfig={usernameBackgroundColor:r[u],usernames:r[t],usernamesAreRegExp:r[n],moderatorBackgroundColor:r[s]},o(e.default)})})},a=o;exports.default=a;
},{"../state":"7ceU"}],"20OM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./fetchConfigColors"));function t(e){return e&&e.__esModule?e:{default:e}}var n=[],r=null,o=function(e,t){n.push(t),r=e};chrome.runtime.onMessage.addListener(function(t,o,u){"save"===t.command&&(0,e.default)(r).then(function(){n.forEach(function(e){return e()})})});var u=o;exports.default=u;
},{"./fetchConfigColors":"OhDo"}],"mbGO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("./paint")),t=u(require("../state")),r=u(require("./paintAllChats")),n=u(require("./configListener")),a=u(require("./fetchConfigColors"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){return f(e)||l(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function f(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}var d=function(u,i){var l=setInterval(function(){var f=t.default.chatListFunc();f&&(t.default.initialBackgroundColor=getComputedStyle(f).backgroundColor,(0,a.default)(i).then(function(){new MutationObserver(function(r){var n=r.flatMap(function(e){return o(e.addedNodes)});(0,e.default)(n,t.default.colors,t.default.usernames,u,t.default.usernamesAreRegExp)}).observe(f,{childList:!0}),(0,n.default)(i,function(){return(0,r.default)(u)}),(0,r.default)(u)}),clearInterval(l),t.default.loadedChatList())},500)},c=d;exports.default=c;
},{"./paint":"De4i","../state":"7ceU","./paintAllChats":"SIAn","./configListener":"20OM","./fetchConfigColors":"OhDo"}],"9EAB":[function(require,module,exports) {
"use strict";var e=u(require("./state")),t=require("./gaming-const"),i=u(require("./modules/initialize"));function u(e){return e&&e.__esModule?e:{default:e}}e.default.chatListFunc=t.chatListFunc,(0,i.default)(t.selectors,t.configKeys);
},{"./state":"7ceU","./gaming-const":"1Ck9","./modules/initialize":"mbGO"}]},{},["9EAB"], null)