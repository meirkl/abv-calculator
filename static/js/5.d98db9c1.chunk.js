(this["webpackJsonpabv-calculator"]=this["webpackJsonpabv-calculator"]||[]).push([[5],{46:function(n,e,t){"use strict";t.d(e,"c",(function(){return r})),t.d(e,"d",(function(){return a})),t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return u})),t.d(e,"f",(function(){return i})),t.d(e,"e",(function(){return o}));var r=1.16,a=.98,c=0,u=40,i=1,o=1.179},47:function(n,e,t){"use strict";function r(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Number(n.toFixed(e))}function a(n,e){return 131.25*(n-e)}function c(n,e){return 76.08*(n-e)/(1.775-n)*(e/.794)}function u(n){return n/(258.6-n/258.2*227.1)+1}function i(n){return((182.4601*n-775.6821)*n+1262.7794)*n-669.5622}t.d(e,"e",(function(){return r})),t.d(e,"d",(function(){return a})),t.d(e,"c",(function(){return c})),t.d(e,"b",(function(){return u})),t.d(e,"a",(function(){return i}))},48:function(n,e,t){"use strict";var r=t(4),a=t(0),c=t.n(a),u=t(5),i=t(10);function o(){var n=Object(r.a)(["\n  padding: 0.75rem 0;\n  border: 0;\n  input {\n    width: 100%;\n    height: 0.3rem;\n    border-radius: 5px;\n    background: ",";\n    outline: none;\n    opacity: 0.7;\n    transition: opacity 0.2s;\n    appearance: none;\n    :hover {\n      opacity: 1;\n    }\n    ::-webkit-slider-thumb {\n      appearance: none;\n      width: 1.8rem;\n      height: 1.8rem;\n      border-radius: 50%;\n      background: ",";\n      cursor: pointer;\n    }\n  }\n  output {\n    display: block;\n    color: ",";\n    font-size: 1.4rem;\n    text-align: center;\n    text-transform: uppercase;\n    span {\n      margin-right: 0.4rem;\n      font-size: 1rem;\n    }\n  }\n"]);return o=function(){return n},n}var l=c.a.memo((function(n){var e=n.label,t=n.value,r=n.min,a=n.max,u=n.step,i=n.fractionDigits,o=void 0===i?3:i,l=n.onChange;return c.a.createElement(d,null,c.a.createElement("output",null,c.a.createElement("span",null,e),t.toFixed(o)),c.a.createElement("input",{"aria-label":e,type:"range",min:r,max:a,step:u,value:t,onChange:l}))})),d=u.c.fieldset(o(),i.e.main,i.d,i.e.main);e.a=l},56:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(4),u=t(45),i=t(5),o=t(46),l=t(47),d=a.a.createContext({equation:"standard",changeHandler:function(){},calculateAbv:function(){return 0}}),s=function(){return a.a.useContext(d)},m=function(n){var e=n.children,t=a.a.useState("standard"),r=Object(u.a)(t,2),c=r[0],i=r[1];a.a.useEffect((function(){var n=localStorage.getItem("EquationMode");n&&i(n)}),[]);return a.a.createElement(d.Provider,{value:{equation:c,changeHandler:function(){"standard"===c?(localStorage.setItem("EquationMode","alternate"),i("alternate")):(localStorage.setItem("EquationMode","standard"),i("standard"))},calculateAbv:function(n,e){return"alternate"===c?Object(l.c)(n,e):Object(l.d)(n,e)}}},e)},f=t(49),b=t.n(f),p=t(10),g=a.a.memo((function(n){var e=n.abv,t=s().calculateAbv,r=a.a.useMemo((function(){return t(o.c,o.d)}),[t]);return a.a.createElement(b.a,{id:"abv-gauge",style:{height:"6.2rem",margin:"1rem 0"},nrOfLevels:20,colors:[p.e.main,p.a],arcWidth:.2,needleColor:p.d,needleBaseColor:p.d,percent:e/r,hideText:!0})})),v=t(48);function h(){var n=Object(c.a)(["\n  font-size: 3.75em;\n  margin: 1rem 0;\n  span {\n    margin-right: 0.7rem;\n    font-size: 2.5rem;\n  }\n"]);return h=function(){return n},n}function E(){var n=Object(c.a)(["\n  width: 100%;\n  max-width: 22rem;\n"]);return E=function(){return n},n}function x(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 0 0 auto;\n  text-align: center;\n  width: 90%;\n  background-color: ",";\n  margin: 1rem 0;\n  padding: 1.2rem;\n  border-radius: 3px;\n"]);return x=function(){return n},n}var O=i.c.div(x(),p.b.light),j=i.c.div(E()),k=i.c.div(h()),w=function(){var n=s().calculateAbv,e=a.a.useState(o.d),t=Object(u.a)(e,2),r=t[0],c=t[1],i=a.a.useState(o.d),d=Object(u.a)(i,2),m=d[0],f=d[1],b=a.a.useState(0),p=Object(u.a)(b,2),h=p[0],E=p[1];return a.a.useEffect((function(){var e=Object(l.e)(n(r,m),2);E(e>0?e:0)}),[r,m,n]),a.a.createElement(a.a.Fragment,null,a.a.createElement(g,{abv:h}),a.a.createElement(k,null,a.a.createElement("span",null,"ABV"),h,"%"),a.a.createElement(O,null,a.a.createElement(j,null,a.a.createElement(v.a,{label:"og",value:r,min:o.d,max:o.c,step:.001,onChange:function(n){return c(Object(l.e)(Number(n.target.value)))}}),a.a.createElement(v.a,{label:"fg",value:m,min:o.d,max:o.c,step:.001,onChange:function(n){return f(Object(l.e)(Number(n.target.value)))}}))))};function y(){var n=Object(c.a)(["\n  ",";\n  transform: ",";\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 0.9rem 1.5rem;\n  h2 {\n    font-size: 1.8rem;\n    text-align: center;\n  }\n"]);return y=function(){return n},n}function C(){var n=Object(c.a)(["\n  ",";\n  padding: 0.2rem 0.5rem;\n  display: flex;\n  align-items: center;\n  color: ",";\n  font-size: 1.8rem;\n  font-family: 'Roboto', sans-serif;\n  cursor: pointer;\n"]);return C=function(){return n},n}function z(){var n=Object(c.a)(["\n  position: fixed;\n  top: 20%;\n  left: 0;\n  background-color: ",";\n  border: 1px solid ",";\n  border-left: none;\n  border-radius: 0 3px 3px 0;\n"]);return z=function(){return n},n}function S(){var n=Object(c.a)(["\n  margin: 1.5rem 0;\n  display: flex;\n  align-items: center;\n  user-select: none;\n\n  label {\n    font-size: 1.2rem;\n    position: absolute;\n    padding-left: 1.8rem;\n    cursor: pointer;\n  }\n\n  input {\n    opacity: 0;\n    visibility: hidden;\n    position: absolute;\n\n    &:checked {\n      ~ span {\n        border-color: ",";\n        box-shadow: 0px 0px 0px 5px "," inset;\n\n        &::after {\n          opacity: 1;\n          transform: scale(1);\n        }\n      }\n    }\n  }\n\n  span {\n    width: 1.25rem;\n    height: 1.25rem;\n    border-radius: 50%;\n    border: 2px solid ",";\n    box-shadow: 0px 0px 0px 0px "," inset;\n    transition: all 0.15s cubic-bezier(0, 1.05, 0.72, 1.07);\n  }\n"]);return S=function(){return n},n}var q=i.c.div(S(),p.e.light,p.e.light,p.e.light,p.e.light),A=Object(i.b)(z(),p.e.dark,p.e.main),F=i.c.div(C(),A,p.c),M=i.c.div(y(),A,(function(n){return n.showMenu?"translateX(0)":"translateX(-100%)"})),B=function(){var n,e,t=a.a.useRef(null),r=s(),c=r.equation,i=r.changeHandler;n=t,e=function(){return m(!1)},a.a.useEffect((function(){function t(t){n.current&&!n.current.contains(t.target)&&e()}return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[n,e]);var o=a.a.useState(!1),l=Object(u.a)(o,2),d=l[0],m=l[1];return a.a.createElement("div",{ref:t},a.a.createElement(F,{onClick:function(){return m(!0)}},"\u03a3"),a.a.createElement(M,{showMenu:d},a.a.createElement("h2",null,"Equation"),a.a.createElement(q,null,a.a.createElement("input",{id:"standard",type:"checkbox",checked:"standard"===c,onChange:i}),a.a.createElement("span",null),a.a.createElement("label",{htmlFor:"standard"},"Standard")),a.a.createElement(q,null,a.a.createElement("input",{id:"alternate",type:"checkbox",checked:"alternate"===c,onChange:i}),a.a.createElement("span",null),a.a.createElement("label",{htmlFor:"alternate"},"Alternate"))))},H=t(19);e.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(H.c,null,"ABV Calculator"),a.a.createElement(m,null,a.a.createElement(w,null),a.a.createElement(B,null)))}}}]);
//# sourceMappingURL=5.d98db9c1.chunk.js.map