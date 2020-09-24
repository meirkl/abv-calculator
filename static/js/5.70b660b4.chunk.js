(this["webpackJsonpabv-calculator"]=this["webpackJsonpabv-calculator"]||[]).push([[5],{40:function(n,e,t){"use strict";t.d(e,"c",(function(){return r})),t.d(e,"d",(function(){return a})),t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return i})),t.d(e,"f",(function(){return u})),t.d(e,"e",(function(){return o}));var r=1.16,a=.98,c=0,i=40,u=1,o=1.179},41:function(n,e,t){"use strict";function r(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Number(n.toFixed(e))}function a(n,e){return 131.25*(n-e)}function c(n,e){return 76.08*(n-e)/(1.775-n)*(e/.794)}function i(n){return n/(258.6-n/258.2*227.1)+1}function u(n){return((182.4601*n-775.6821)*n+1262.7794)*n-669.5622}t.d(e,"e",(function(){return r})),t.d(e,"d",(function(){return a})),t.d(e,"c",(function(){return c})),t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return u}))},42:function(n,e,t){"use strict";var r=t(3),a=t(0),c=t.n(a),i=t(4),u=t(8);function o(){var n=Object(r.a)(["\n  padding: 0.75rem 0;\n  border: 0;\n  input {\n    width: 100%;\n    height: 0.3rem;\n    border-radius: 5px;\n    background: ",";\n    outline: none;\n    opacity: 0.7;\n    transition: opacity 0.2s;\n    appearance: none;\n    :hover {\n      opacity: 1;\n    }\n    ::-webkit-slider-thumb {\n      appearance: none;\n      width: 1.8rem;\n      height: 1.8rem;\n      border-radius: 50%;\n      background: ",";\n      cursor: pointer;\n    }\n  }\n  output {\n    display: block;\n    color: ",";\n    font-size: 1.4rem;\n    text-align: center;\n    text-transform: uppercase;\n    span {\n      margin-right: 0.4rem;\n      font-size: 1rem;\n    }\n  }\n"]);return o=function(){return n},n}var l=c.a.memo((function(n){var e=n.label,t=n.value,r=n.min,a=n.max,i=n.step,u=n.fractionDigits,o=void 0===u?3:u,l=n.onChange;return c.a.createElement(d,null,c.a.createElement("output",null,c.a.createElement("span",null,e),t.toFixed(o)),c.a.createElement("input",{"aria-label":e,type:"range",min:r,max:a,step:i,value:t,onChange:l}))})),d=i.c.fieldset(o(),u.e.main,u.d,u.e.main);e.a=l},50:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(3),i=t(39),u=t(4),o=t(40),l=t(41),d=a.a.createContext({equation:"standard",changeHandler:function(){},calculateAbv:function(){return 0}}),s=function(){return a.a.useContext(d)},m=function(n){var e=n.children,t=a.a.useState("standard"),r=Object(i.a)(t,2),c=r[0],u=r[1];a.a.useEffect((function(){var n=localStorage.getItem("EquationMode");n&&u(n)}),[]);return a.a.createElement(d.Provider,{value:{equation:c,changeHandler:function(){"standard"===c?(localStorage.setItem("EquationMode","alternate"),u("alternate")):(localStorage.setItem("EquationMode","standard"),u("standard"))},calculateAbv:function(n,e){return"alternate"===c?Object(l.c)(n,e):Object(l.d)(n,e)}}},e)},f=t(43),b=t.n(f),p=t(8),g=a.a.memo((function(n){var e=n.abv,t=s().calculateAbv,r=a.a.useMemo((function(){return t(o.c,o.d)}),[t]);return a.a.createElement(b.a,{id:"abv-gauge",style:{height:"6.2rem",margin:"1rem 0"},nrOfLevels:20,colors:[p.e.main,p.a],arcWidth:.2,needleColor:p.d,needleBaseColor:p.d,percent:e/r,hideText:!0})})),v=t(42);function h(){var n=Object(c.a)(["\n  font-size: 3.75em;\n  margin: 1rem 0;\n  span {\n    margin-right: 0.7rem;\n    font-size: 2.5rem;\n  }\n"]);return h=function(){return n},n}function E(){var n=Object(c.a)(["\n  width: 100%;\n  max-width: 22rem;\n"]);return E=function(){return n},n}function x(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 90%;\n  background-color: ",";\n  margin-top: 0.6rem;\n  margin-bottom: 1rem;\n  padding: 1.2rem;\n  border-radius: 3px;\n"]);return x=function(){return n},n}var O=u.c.div(x(),p.b.light),j=u.c.div(E()),k=u.c.div(h()),w=function(){var n=s().calculateAbv,e=a.a.useState(o.d),t=Object(i.a)(e,2),r=t[0],c=t[1],u=a.a.useState(o.d),d=Object(i.a)(u,2),m=d[0],f=d[1],b=a.a.useState(0),p=Object(i.a)(b,2),h=p[0],E=p[1];return a.a.useEffect((function(){var e=Object(l.e)(n(r,m),2);E(e>0?e:0)}),[r,m,n]),a.a.createElement(a.a.Fragment,null,a.a.createElement(g,{abv:h}),a.a.createElement(k,null,a.a.createElement("span",null,"ABV"),h,"%"),a.a.createElement(O,null,a.a.createElement(j,null,a.a.createElement(v.a,{label:"og",value:r,min:o.d,max:o.c,step:.001,onChange:function(n){return c(Object(l.e)(Number(n.target.value)))}}),a.a.createElement(v.a,{label:"fg",value:m,min:o.d,max:o.c,step:.001,onChange:function(n){return f(Object(l.e)(Number(n.target.value)))}}))))};function y(){var n=Object(c.a)(["\n  ",";\n  transform: ",";\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 0.9rem 1.5rem;\n  h5 {\n    font-size: 1.8rem;\n    text-align: center;\n  }\n"]);return y=function(){return n},n}function C(){var n=Object(c.a)(["\n  ",";\n  padding: 0.3rem;\n  display: flex;\n  align-items: center;\n  color: ",";\n  font-size: 1.8rem;\n  font-family: 'Roboto', sans-serif;\n  cursor: pointer;\n"]);return C=function(){return n},n}function z(){var n=Object(c.a)(["\n  position: fixed;\n  top: 25%;\n  left: 0;\n  background-color: ",";\n  border: 1px solid ",";\n  border-left: none;\n  border-radius: 0 3px 3px 0;\n"]);return z=function(){return n},n}function S(){var n=Object(c.a)(["\n  margin: 1.5rem 0;\n  display: flex;\n  align-items: center;\n  user-select: none;\n\n  label {\n    font-size: 1.2rem;\n    position: absolute;\n    padding-left: 1.8rem;\n    cursor: pointer;\n  }\n\n  input {\n    opacity: 0;\n    visibility: hidden;\n    position: absolute;\n\n    &:checked {\n      ~ span {\n        border-color: ",";\n        box-shadow: 0px 0px 0px 5px "," inset;\n\n        &::after {\n          opacity: 1;\n          transform: scale(1);\n        }\n      }\n    }\n  }\n\n  span {\n    width: 1.25rem;\n    height: 1.25rem;\n    border-radius: 50%;\n    border: 2px solid ",";\n    box-shadow: 0px 0px 0px 0px "," inset;\n    transition: all 0.15s cubic-bezier(0, 1.05, 0.72, 1.07);\n  }\n"]);return S=function(){return n},n}var q=u.c.div(S(),p.e.light,p.e.light,p.e.light,p.e.light),A=Object(u.b)(z(),p.e.dark,p.e.main),F=u.c.div(C(),A,p.c),M=u.c.div(y(),A,(function(n){return n.showMenu?"translateX(0)":"translateX(-100%)"})),B=function(){var n,e,t=a.a.useRef(null),r=s(),c=r.equation,u=r.changeHandler;n=t,e=function(){return m(!1)},a.a.useEffect((function(){function t(t){n.current&&!n.current.contains(t.target)&&e()}return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[n,e]);var o=a.a.useState(!1),l=Object(i.a)(o,2),d=l[0],m=l[1];return a.a.createElement("div",{ref:t},a.a.createElement(F,{onClick:function(){return m(!0)}},"\u03a3"),a.a.createElement(M,{showMenu:d},a.a.createElement("h5",null,"Equation"),a.a.createElement(q,null,a.a.createElement("input",{id:"standard",type:"checkbox",checked:"standard"===c,onChange:u}),a.a.createElement("span",null),a.a.createElement("label",{htmlFor:"standard"},"Standard")),a.a.createElement(q,null,a.a.createElement("input",{id:"alternate",type:"checkbox",checked:"alternate"===c,onChange:u}),a.a.createElement("span",null),a.a.createElement("label",{htmlFor:"alternate"},"Alternate"))))},H=t(16);e.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(H.b,null,"ABV Calculator"),a.a.createElement(m,null,a.a.createElement(w,null),a.a.createElement(B,null)))}}}]);
//# sourceMappingURL=5.70b660b4.chunk.js.map