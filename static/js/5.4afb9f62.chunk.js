(this["webpackJsonpabv-calculator"]=this["webpackJsonpabv-calculator"]||[]).push([[5],{40:function(n,e,t){"use strict";t.d(e,"c",(function(){return a})),t.d(e,"d",(function(){return r})),t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return u})),t.d(e,"f",(function(){return i})),t.d(e,"e",(function(){return o}));var a=1.16,r=.98,c=0,u=40,i=1,o=1.179},41:function(n,e,t){"use strict";function a(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Number(n.toFixed(e))}function r(n,e){return 131.25*(n-e)}function c(n,e){return 76.08*(n-e)/(1.775-n)*(e/.794)}function u(n){return n/(258.6-n/258.2*227.1)+1}function i(n){return((182.4601*n-775.6821)*n+1262.7794)*n-669.5622}t.d(e,"e",(function(){return a})),t.d(e,"d",(function(){return r})),t.d(e,"c",(function(){return c})),t.d(e,"b",(function(){return u})),t.d(e,"a",(function(){return i}))},42:function(n,e,t){"use strict";var a=t(3),r=t(0),c=t.n(r),u=t(4),i=t(9);function o(){var n=Object(a.a)(["\n  padding: 12px 0px;\n  border: 0;\n  input {\n    width: 100%;\n    height: 5px;\n    border-radius: 5px;\n    background: ",";\n    outline: none;\n    opacity: 0.7;\n    transition: opacity 0.2s;\n    appearance: none;\n    :hover {\n      opacity: 1;\n    }\n    ::-webkit-slider-thumb {\n      appearance: none;\n      width: 30px;\n      height: 30px;\n      border-radius: 50%;\n      background: ",";\n      cursor: pointer;\n    }\n  }\n  output {\n    display: block;\n    color: ",";\n    font-size: 1.4rem;\n    text-align: center;\n    text-transform: uppercase;\n    span {\n      margin-right: 0.4rem;\n      font-size: 1rem;\n    }\n  }\n"]);return o=function(){return n},n}var l=Object(r.memo)((function(n){var e=n.label,t=n.value,a=n.min,r=n.max,u=n.step,i=n.fractionDigits,o=void 0===i?3:i,l=n.onChange;return c.a.createElement(d,null,c.a.createElement("output",null,c.a.createElement("span",null,e),t.toFixed(o)),c.a.createElement("input",{"aria-label":e,type:"range",min:a,max:r,step:u,value:t,onChange:l}))})),d=u.c.fieldset(o(),i.g,i.f,i.g);e.a=l},43:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var a=t(39),r=t(0),c=t.n(r);function u(n,e){var t=c.a.useState(n),r=Object(a.a)(t,2),u=r[0],i=r[1];return c.a.useEffect((function(){var t=setTimeout((function(){i(n)}),e);return function(){clearTimeout(t)}}),[n,e]),u}},52:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(3),u=t(39),i=t(4),o=t(40),l=t(41),d=t(44),s=Object(a.createContext)({equation:"standard",changeHandler:function(){},calculateAbv:function(){return 0}}),f=function(){return Object(a.useContext)(s)},p=function(n){var e=n.children,t=Object(a.useState)("standard"),c=Object(u.a)(t,2),i=c[0],o=c[1];Object(a.useEffect)((function(){var n=localStorage.getItem("EquationMode");n&&o(n)}),[]);return r.a.createElement(s.Provider,{value:{equation:i,changeHandler:function(){"standard"===i?(localStorage.setItem("EquationMode","alternate"),o("alternate")):(localStorage.setItem("EquationMode","standard"),o("standard"))},calculateAbv:function(n,e){return"alternate"===i?Object(l.c)(n,e):Object(l.d)(n,e)}}},r.a.createElement(d.a,{context:s,id:"abv-context",displayName:"Abv Equation Context"}),e)},m=t(45),b=t.n(m),v=t(9),x=Object(a.memo)((function(n){var e=n.abv,t=f().calculateAbv,c=Object(a.useMemo)((function(){return t(o.c,o.d)}),[t]);return r.a.createElement(b.a,{id:"abv-gauge",style:{height:"100px",margin:"15px 0"},nrOfLevels:20,colors:[v.g,v.a],arcWidth:.2,needleColor:v.f,needleBaseColor:v.f,percent:e/c,hideText:!0})})),g=t(42),h=t(43);function E(){var n=Object(c.a)(["\n  font-size: 3.75rem;\n  margin: 15px 0;\n  span {\n    margin-right: 0.7rem;\n    font-size: 2.5rem;\n  }\n"]);return E=function(){return n},n}function O(){var n=Object(c.a)(["\n  width: 100%;\n  max-width: 350px;\n"]);return O=function(){return n},n}function j(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 90%;\n  background-color: ",";\n  margin-top: 10px;\n  padding: 10px;\n  border-radius: 3px;\n  padding: 20px;\n"]);return j=function(){return n},n}var y=i.c.div(j(),v.e),w=i.c.div(O()),k=i.c.div(E()),C=function(){var n=f().calculateAbv,e=r.a.useState(o.d),t=Object(u.a)(e,2),a=t[0],c=t[1],i=r.a.useState(o.d),d=Object(u.a)(i,2),s=d[0],p=d[1],m=r.a.useState(0),b=Object(u.a)(m,2),v=b[0],E=b[1];r.a.useEffect((function(){var e=Object(l.e)(n(a,s),2);E(e>0?e:0)}),[a,s,n]);var O=Object(h.a)(v,250);return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{abv:O}),r.a.createElement(k,null,r.a.createElement("span",null,"ABV"),O,"%"),r.a.createElement(y,null,r.a.createElement(w,null,r.a.createElement(g.a,{label:"og",value:a,min:o.d,max:o.c,step:.001,onChange:function(n){return c(Object(l.e)(Number(n.target.value)))}}),r.a.createElement(g.a,{label:"fg",value:s,min:o.d,max:o.c,step:.001,onChange:function(n){return p(Object(l.e)(Number(n.target.value)))}}))))},S=function(n,e){Object(a.useEffect)((function(){function t(t){n.current&&!n.current.contains(t.target)&&e()}return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[n,e])};function z(){var n=Object(c.a)(["\n  ",";\n  transform: ",";\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 15px 25px;\n  h5 {\n    font-size: 1.8rem;\n    text-align: center;\n  }\n"]);return z=function(){return n},n}function q(){var n=Object(c.a)(["\n  ",";\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  color: ",";\n  font-size: 1.8rem;\n  font-family: 'Roboto', sans-serif;\n  cursor: pointer;\n"]);return q=function(){return n},n}function A(){var n=Object(c.a)(["\n  position: fixed;\n  top: calc(80vh / 5);\n  left: 0;\n  background-color: ",";\n  border: 1px solid ",";\n  border-left: none;\n  border-radius: 0 3px 3px 0;\n"]);return A=function(){return n},n}function F(){var n=Object(c.a)(["\n  margin: 25px 0;\n  display: flex;\n  align-items: center;\n  user-select: none;\n\n  label {\n    font-size: 1.2rem;\n    position: absolute;\n    padding-left: 30px;\n    cursor: pointer;\n  }\n\n  input {\n    opacity: 0;\n    visibility: hidden;\n    position: absolute;\n\n    &:checked {\n      ~ span {\n        border-color: ",";\n        box-shadow: 0px 0px 0px 5px "," inset;\n\n        &::after {\n          opacity: 1;\n          transform: scale(1);\n        }\n      }\n    }\n  }\n\n  span {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    border: 2px solid ",";\n    box-shadow: 0px 0px 0px 0px "," inset;\n    transition: all 0.15s cubic-bezier(0, 1.05, 0.72, 1.07);\n  }\n"]);return F=function(){return n},n}var M=i.c.div(F(),v.i,v.i,v.i,v.i),N=Object(i.b)(A(),v.h,v.g),B=i.c.div(q(),N,v.d),H=i.c.div(z(),N,(function(n){return n.showMenu?"translateX(0)":"translateX(-100%)"})),I=function(){var n=Object(a.useRef)(null),e=f(),t=e.equation,c=e.changeHandler;S(n,(function(){return d(!1)}));var i=Object(a.useState)(!1),o=Object(u.a)(i,2),l=o[0],d=o[1];return r.a.createElement("div",{ref:n},r.a.createElement(B,{onClick:function(){return d(!0)}},"\u03a3"),r.a.createElement(H,{showMenu:l},r.a.createElement("h5",null,"Equation"),r.a.createElement(M,null,r.a.createElement("input",{id:"standard",type:"checkbox",checked:"standard"===t,onChange:c}),r.a.createElement("span",null),r.a.createElement("label",{htmlFor:"standard"},"Standard")),r.a.createElement(M,null,r.a.createElement("input",{id:"alternate",type:"checkbox",checked:"alternate"===t,onChange:c}),r.a.createElement("span",null),r.a.createElement("label",{htmlFor:"alternate"},"Alternate"))))},L=t(16);e.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.b,null,"ABV Calculator"),r.a.createElement(p,null,r.a.createElement(C,null),r.a.createElement(I,null)))}}}]);
//# sourceMappingURL=5.4afb9f62.chunk.js.map