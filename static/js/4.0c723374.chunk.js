(this["webpackJsonpabv-calculator"]=this["webpackJsonpabv-calculator"]||[]).push([[4],{39:function(n,e,t){"use strict";function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function a(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,a=!1,u=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(o){a=!0,u=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw u}}return t}}(n,e)||function(n,e){if(n){if("string"===typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(e,"a",(function(){return a}))},40:function(n,e,t){"use strict";t.d(e,"c",(function(){return r})),t.d(e,"d",(function(){return a})),t.d(e,"b",(function(){return u})),t.d(e,"a",(function(){return i})),t.d(e,"f",(function(){return c})),t.d(e,"e",(function(){return o}));var r=1.16,a=.98,u=0,i=40,c=1,o=1.179},41:function(n,e,t){"use strict";function r(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Number(n.toFixed(e))}function a(n,e){return 131.25*(n-e)}function u(n,e){return 76.08*(n-e)/(1.775-n)*(e/.794)}function i(n){return n/(258.6-n/258.2*227.1)+1}function c(n){return((182.4601*n-775.6821)*n+1262.7794)*n-669.5622}t.d(e,"e",(function(){return r})),t.d(e,"d",(function(){return a})),t.d(e,"c",(function(){return u})),t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return c}))},42:function(n,e,t){"use strict";var r=t(3),a=t(0),u=t.n(a),i=t(4),c=t(9);function o(){var n=Object(r.a)(["\n  padding: 12px 0px;\n  border: 0;\n  input {\n    width: 100%;\n    height: 5px;\n    border-radius: 5px;\n    background: ",";\n    outline: none;\n    opacity: 0.7;\n    transition: opacity 0.2s;\n    appearance: none;\n    :hover {\n      opacity: 1;\n    }\n    ::-webkit-slider-thumb {\n      appearance: none;\n      width: 30px;\n      height: 30px;\n      border-radius: 50%;\n      background: ",";\n      cursor: pointer;\n    }\n  }\n  output {\n    display: block;\n    color: ",";\n    font-size: 1.4rem;\n    text-align: center;\n    text-transform: uppercase;\n    span {\n      margin-right: 0.4rem;\n      font-size: 1rem;\n    }\n  }\n"]);return o=function(){return n},n}var l=Object(a.memo)((function(n){var e=n.label,t=n.value,r=n.min,a=n.max,i=n.step,c=n.fractionDigits,o=void 0===c?3:c,l=n.onChange;return u.a.createElement(f,null,u.a.createElement("output",null,u.a.createElement("span",null,e),t.toFixed(o)),u.a.createElement("input",{"aria-label":e,type:"range",min:r,max:a,step:i,value:t,onChange:l}))})),f=i.c.fieldset(o(),c.g,c.f,c.g);e.a=l},43:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(39),a=t(0),u=t.n(a);function i(n,e){var t=u.a.useState(n),a=Object(r.a)(t,2),i=a[0],c=a[1];return u.a.useEffect((function(){var t=setTimeout((function(){c(n)}),e);return function(){clearTimeout(t)}}),[n,e]),i}},53:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),u=t(3),i=t(39),c=t(4),o=t(40),l=t(9),f=t(43),s=t(41),m=t(42);function d(){var n=Object(u.a)(["\n  font-size: 2.2rem;\n  span {\n    font-size: 1.6rem;\n  }\n"]);return d=function(){return n},n}function p(){var n=Object(u.a)(["\n  width: 100%;\n  max-width: 350px;\n"]);return p=function(){return n},n}function b(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 90%;\n\n  background-color: ",";\n  margin-top: 30px;\n  padding: 20px;\n  border-radius: 3px;\n"]);return b=function(){return n},n}var v=c.c.div(b(),l.e),g=c.c.div(p()),h=c.c.h2(d()),x=function(){var n=a.a.useState(o.b),e=Object(i.a)(n,2),t=e[0],r=e[1],u=a.a.useState(o.f),c=Object(i.a)(u,2),l=c[0],d=c[1],p=Object(f.a)(t,250),b=Object(f.a)(l,250);return a.a.createElement(a.a.Fragment,null,a.a.createElement(v,null,a.a.createElement("span",null,"Brix \u2192 SG"),a.a.createElement(h,null,a.a.createElement("span",null,"SG")," ",Object(s.e)(Object(s.b)(p))),a.a.createElement(g,null,a.a.createElement(m.a,{label:"brix",value:t,min:o.b,max:o.a,step:.1,fractionDigits:2,onChange:function(n){return r(parseFloat(n.target.value))}}))),a.a.createElement(v,null,a.a.createElement("span",null,"SG \u2192 Brix"),a.a.createElement(h,null,a.a.createElement("span",null,"Brix")," ",Object(s.e)(Object(s.a)(b),2)),a.a.createElement(g,null,a.a.createElement(m.a,{label:"sg",value:l,min:o.f,max:o.e,step:.001,onChange:function(n){return d(Number(n.target.value))}}))))},y=t(16);e.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(y.b,null,"Brix Converter"),a.a.createElement(x,null))}}}]);
//# sourceMappingURL=4.0c723374.chunk.js.map