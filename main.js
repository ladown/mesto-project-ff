/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new A(n||[]);return i(a,"_invoke",{value:x(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var m="suspendedStart",h="suspendedYield",y="executing",v="completed",g={};function b(){}function E(){}function w(){}var _={};f(_,u,(function(){return this}));var L=Object.getPrototypeOf,S=L&&L(L(I([])));S&&S!==o&&a.call(S,u)&&(_=S);var O=w.prototype=b.prototype=Object.create(_);function C(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(e,r){function n(o,i,c,u){var l=d(e[o],e,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function x(t,e,n){var o=m;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=d(t,e,n);if("normal"===l.type){if(o=n.done?v:h,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function k(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=d(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return E.prototype=w,i(O,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:E,configurable:!0}),E.displayName=f(w,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(O),t},n.awrap=function(t){return{__await:t}},C(j.prototype),f(j.prototype,l,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new j(p(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},C(O),f(O,s,"Generator"),f(O,u,(function(){return this})),f(O,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=I,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(q),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),q(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;q(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){var n,a,i,c;n=e,a=r,i=o[r],c=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a),(a="symbol"==t(c)?c:c+"")in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function o(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function c(t){o(i,n,a,c,u,"next",t)}function u(t){o(i,n,a,c,u,"throw",t)}c(void 0)}))}}var i="https://nomoreparties.co/v1/cohort-magistr-2",c={authorization:"c9338f54-3149-4d64-bed7-2bb40db39375","Content-Type":"application/json"},u=function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))},l=function(t){console.error(t)},s=function(){var t=a(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(i,"/users/me"),{headers:n({},c)}).then(u).catch(l));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=a(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(i,"/cards"),{headers:n({},c)}).then(u).catch(l));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=a(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(i,"/users/me"),{body:JSON.stringify(r),headers:n({},c),method:"PATCH"}).then(u).catch(l));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=a(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(i,"/cards"),{body:JSON.stringify(r),headers:n({},c),method:"POST"}).then(u).catch(l));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=a(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(i,"/cards/").concat(r),{headers:n({},c),method:"DELETE"}).then(u).catch(l));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=a(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(i,"/cards/likes/").concat(r),{headers:n({},c),method:"PUT"}).then(u).catch(l));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=a(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(i,"/cards/likes/").concat(r),{headers:n({},c),method:"DELETE"}).then(u).catch(l));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=a(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(i,"/users/me/avatar"),{body:JSON.stringify(r),headers:n({},c),method:"PATCH"}).then(u).catch(l));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function b(){b=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),c=new A(n||[]);return o(i,"_invoke",{value:x(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",d="suspendedYield",m="executing",h="completed",y={};function v(){}function E(){}function w(){}var _={};l(_,i,(function(){return this}));var L=Object.getPrototypeOf,S=L&&L(L(I([])));S&&S!==r&&n.call(S,i)&&(_=S);var O=w.prototype=v.prototype=Object.create(_);function C(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==g(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function x(e,r,n){var o=p;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===h){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?h:d,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=h,n.method="throw",n.arg=l.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(g(e)+" is not iterable")}return E.prototype=w,o(O,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:E,configurable:!0}),E.displayName=l(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},C(j.prototype),l(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new j(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},C(O),l(O,u,"Generator"),l(O,i,(function(){return this})),l(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(q),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),q(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;q(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){var n,o,a,i;n=t,o=e,a=r[e],i=function(t,e){if("object"!=g(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),(o="symbol"==g(i)?i:i+"")in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var L={errorClass:"popup__error_visible",formSelector:".popup__form",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",inputSelector:".popup__input",submitButtonSelector:".popup__button"},S=function(){var t,e=(t=b().mark((function t(e){var r,n;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.formElement,n=e.inputElement,t.abrupt("return",fetch(n.value,{method:"HEAD"}).then((function(t){var e=t.headers.get("Content-Type");return!t.ok||"image/apng"===e||"image/avif"===e||"image/gif"===e||"image/jpeg"===e||"image/jpg"===e||"image/png"===e||"image/svg+xml"===e||"image/webp"===e||Promise.reject()})).catch((function(){n.setCustomValidity(n.dataset.errorMessage),O(w(w({},L),{},{errorMessage:n.validationMessage,formElement:r,inputElement:n})),j(w(w({},L),{},{buttonElement:r.elements.submit,inputList:[n]}))})));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){_(a,n,o,i,c,"next",t)}function c(t){_(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}(),O=function(t){var e=t.errorClass,r=t.errorMessage,n=t.formElement,o=t.inputElement,a=t.inputErrorClass,i=n.querySelector(".".concat(o.id,"-error"));o.classList.add(a),i&&(i.textContent=r,i.classList.add(e))},C=function(t){var e=t.errorClass,r=t.formElement,n=t.inputElement,o=t.inputErrorClass,a=r.querySelector(".".concat(n.id,"-error"));n.classList.remove(o),a&&(a.classList.remove(e),a.textContent="")},j=function(t){var e=t.buttonElement,r=t.inactiveButtonClass,n=t.inputList;e&&(function(t){return t.some((function(t){return!t.checkValidity()}))}(n)?function(t){var e=t.buttonElement,r=t.inactiveButtonClass;e.classList.remove("is-loading"),e.classList.add(r),e.disabled=!0}({buttonElement:e,inactiveButtonClass:r}):function(t){var e=t.buttonElement,r=t.inactiveButtonClass;e.classList.remove(r),e.disabled=!1}({buttonElement:e,inactiveButtonClass:r}))},x=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:L,r=e.errorClass,n=e.inactiveButtonClass,o=e.inputErrorClass,a=e.inputSelector,i=e.submitButtonSelector,c=Array.from(t.querySelectorAll(a)),u=t.querySelector(i);null!=c&&c.length&&(c.forEach((function(e){var n=t.querySelector(".".concat(e.id,"-error"));C({errorClass:r,errorElement:n,formElement:t,inputElement:e,inputErrorClass:o})})),u&&j({buttonElement:u,inactiveButtonClass:n,inputList:c}))};function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const P={addCard:{modalElement:document.querySelector(".popup_type_new-card"),triggerElement:document.querySelector(".profile__add-button")},cardDeleteConfirm:{modalElement:document.querySelector(".popup_type_card_delete_confirm"),modalInputCardId:document.querySelector('.popup_type_card_delete_confirm [name="card-id"]')},cardImagePreview:{modalElement:document.querySelector(".popup_type_image")},editProfile:{modalElement:document.querySelector(".popup_type_edit"),openCallback:function(t){t.forEach((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0];n[1].value=o.textContent})),x(document.forms["edit-profile"])},triggerElement:document.querySelector(".profile__edit-button")},updateAvatar:{modalElement:document.querySelector(".popup_type_update-avatar"),openCallback:function(){document.forms["update-avatar"].elements["avatar-link"].value="",x(document.forms["update-avatar"])},triggerElement:document.querySelector(".profile__image-edit")}};var q="popup_is-opened",A=function(t){t.classList.add(q),document.addEventListener("keydown",D)},I=function(t){t.classList.remove(q),document.removeEventListener("keydown",D)},D=function(t){if("Escape"===t.key){var e=document.querySelector(".".concat(q));I(e)}},T=document.querySelector("#card-template"),N="card__like-button_is-active",B=function(t){t.target.closest(".places__item.card").remove()},G=function(t){var e=t.cardButtonLikeElement,r=t.cardId,n=t.cardLikeCountElement;(e.classList.contains(N)?y(r):h(r)).then((function(t){var r;n.textContent=null===(r=t.likes)||void 0===r?void 0:r.length,e.classList.contains(N)?e.classList.remove(N):e.classList.add(N)}))};function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}var F,U=function(t){var e;return null!=t&&"object"===M(t)?null===(e=Object.values(t))||void 0===e?void 0:e.length:0},R={about:document.querySelector(".profile__description"),avatar:document.querySelector(".profile__image"),name:document.querySelector(".profile__title")},V=function(t){U(t)&&Object.keys(t).forEach((function(e){var r=t[e];r&&R[e]&&("avatar"===e?R[e].style.backgroundImage='url("'.concat(r,'")'):R[e].textContent=r)}))};function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var H="is-loading",J=document.querySelector(".places__list"),$=P.cardImagePreview.modalElement.querySelector(".popup__image"),z=P.cardImagePreview.modalElement.querySelector(".popup__caption"),K=document.querySelector('.popup__form[name="edit-profile"]'),Q=K.querySelector('.popup__input[name="name"]'),W=K.querySelector('.popup__input[name="description"]'),X=document.querySelector('.popup__form[name="new-place"]'),Z=X.querySelector('.popup__input[name="place-name"]'),tt=X.querySelector('.popup__input[name="link"]'),et=document.querySelector('.popup__form[name="card-delete-confirm"]'),rt=document.querySelector('.popup__form[name="update-avatar"]'),nt=rt.querySelector('.popup__input[name="avatar-link"]'),ot=function(t){var e=t.link,r=t.name;$.setAttribute("src",e),$.setAttribute("alt",r),z.textContent=r,A(P.cardImagePreview.modalElement)},at=function(t){var e=t.cardData,r=t.method,n=void 0===r?"append":r,o=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.cardData,n=e.handleImageClick,o=e.likeCard,a=e.PERSONAL_USER_ID,i=r._id,c=T.content.querySelector(".places__item.card").cloneNode(!0),u=c.querySelector(".card__image"),l=c.querySelector(".card__title"),s=c.querySelector(".card__delete-button"),f=c.querySelector(".card__like-button"),p=c.querySelector(".card__like-count");return c.setAttribute("data-card-id",i),u.setAttribute("src",r.link),u.setAttribute("alt",r.name),l.textContent=r.name,f.addEventListener("click",(function(){o({cardButtonLikeElement:f,cardId:i,cardLikeCountElement:p})})),u.addEventListener("click",(function(){n(r)})),r.likes&&(p.textContent=r.likes.length),null!==(t=r.likes)&&void 0!==t&&t.some((function(t){return t._id===a}))&&f.classList.add(N),r.owner._id===a&&(c.classList.add("card_personal"),s.addEventListener("click",(function(){P.cardDeleteConfirm.modalInputCardId.value=i,A(P.cardDeleteConfirm.modalElement)}))),c}({cardData:e,deleteCard:B,handleImageClick:ot,likeCard:G,openModal:A,PERSONAL_USER_ID:F});J[n](o)};K.addEventListener("submit",(function(t){t.preventDefault(),t.submitter.classList.add(H),p({about:W.value,name:Q.value}).then((function(e){V(e),t.submitter.classList.remove(H),I(P.editProfile.modalElement)}))})),P.editProfile.data=[[R.name,Q],[R.about,W]],X.addEventListener("submit",(function(t){t.preventDefault(),t.submitter.classList.add(H),S({formElement:X,inputElement:tt}).then((function(e){e&&d({link:tt.value,name:Z.value}).then((function(e){at({cardData:e,method:"prepend"}),t.submitter.classList.remove(H),I(P.addCard.modalElement),X.reset(),x(X)}))}))})),et.addEventListener("submit",(function(t){t.preventDefault(),t.submitter.classList.add(H),m(P.cardDeleteConfirm.modalInputCardId.value).then((function(){"Пост удалён"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).message&&(t.submitter.classList.remove(H),I(P.cardDeleteConfirm.modalElement),B({target:document.querySelector('.card[data-card-id="'.concat(P.cardDeleteConfirm.modalInputCardId.value,'"]'))}),P.cardDeleteConfirm.modalInputCardId.value="")}))})),rt.addEventListener("submit",(function(t){t.preventDefault(),t.submitter.classList.add(H),S({formElement:rt,inputElement:nt}).then((function(e){e&&v({avatar:nt.value}).then((function(e){t.submitter.classList.remove(H),V({avatar:e.avatar}),I(P.updateAvatar.modalElement),rt.reset(),x(rt)}))}))})),Object.keys(P).forEach((function(t){var e=P[t];e.triggerElement&&e.triggerElement.addEventListener("click",(function(){e.openCallback&&e.openCallback(e.data),A(e.modalElement)})),e.modalElement.addEventListener("click",(function(t){var r=t.target;(r.classList.contains("popup__close")||r.classList.contains("popup"))&&I(e.modalElement)}))})),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=t.errorClass,r=t.formSelector,n=t.inactiveButtonClass,o=t.inputErrorClass,a=t.inputSelector,i=t.submitButtonSelector,c=Array.from(document.querySelectorAll(r));c.length&&c.forEach((function(t){t.addEventListener("submit",(function(t){t.preventDefault()})),function(t){var e=t.errorClass,r=t.formElement,n=t.inactiveButtonClass,o=t.inputErrorClass,a=t.inputSelector,i=t.submitButtonSelector,c=r.querySelector(i),u=Array.from(r.querySelectorAll(a));null!=u&&u.length&&(j({buttonElement:c,inactiveButtonClass:n,inputList:u}),u.forEach((function(t){t.addEventListener("input",(function(){!function(t){var e=t.errorClass,r=t.formElement,n=t.inputElement,o=t.inputErrorClass;n.validity.valid?C({errorClass:e,formElement:r,inputElement:n,inputErrorClass:o}):(n.validity.patternMismatch?n.setCustomValidity(n.dataset.errorMessage):n.setCustomValidity(""),O({errorClass:e,errorMessage:n.validationMessage,formElement:r,inputElement:n,inputErrorClass:o}))}({errorClass:e,formElement:r,inputElement:t,inputErrorClass:o}),j({buttonElement:c,inactiveButtonClass:n,inputList:u})}))})))}({errorClass:e,formElement:t,inactiveButtonClass:n,inputErrorClass:o,inputSelector:a,submitButtonSelector:i})}))}(),Promise.all([s(),f()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return Y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],a=n[1];U(o)&&(o._id&&(F=o._id),V(o)),null!=a&&a.length&&a.forEach((function(t){return at({cardData:t})}))}))})();