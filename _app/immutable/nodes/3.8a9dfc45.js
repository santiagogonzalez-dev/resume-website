import{S as l,i as c,s as d,e as _,t as g,c as u,b as f,d as h,f as r,h as m,j as p,k as v,n as i}from"../chunks/index.e929c26a.js";const b={en:"hello!",es:"hola!"};function x({params:s}){return{greeting:b[s.lang??"en"]}}const O=Object.freeze(Object.defineProperty({__proto__:null,load:x},Symbol.toStringTag,{value:"Module"}));function y(s){let e,a=s[0].greeting+"",n;return{c(){e=_("h1"),n=g(a)},l(t){e=u(t,"H1",{});var o=f(e);n=h(o,a),o.forEach(r)},m(t,o){m(t,e,o),p(e,n)},p(t,[o]){o&1&&a!==(a=t[0].greeting+"")&&v(n,a)},i,o:i,d(t){t&&r(e)}}}function S(s,e,a){let{data:n}=e;return s.$$set=t=>{"data"in t&&a(0,n=t.data)},[n]}class P extends l{constructor(e){super(),c(this,e,S,y,d,{data:0})}}export{P as component,O as universal};