import{S as l,i as c,s as d,e as u,t as _,c as f,b as g,d as h,f as r,h as m,j as p,k as b,n as i}from"../chunks/index.e929c26a.js";const v={en:"hello!",de:"hallo!",fr:"bonjour!",es:"hola!"};function j({params:o}){return{greeting:v[o.lang??"en"]}}const O=Object.freeze(Object.defineProperty({__proto__:null,load:j},Symbol.toStringTag,{value:"Module"}));function x(o){let e,a=o[0].greeting+"",n;return{c(){e=u("h1"),n=_(a)},l(t){e=f(t,"H1",{});var s=g(e);n=h(s,a),s.forEach(r)},m(t,s){m(t,e,s),p(e,n)},p(t,[s]){s&1&&a!==(a=t[0].greeting+"")&&b(n,a)},i,o:i,d(t){t&&r(e)}}}function y(o,e,a){let{data:n}=e;return o.$$set=t=>{"data"in t&&a(0,n=t.data)},[n]}class P extends l{constructor(e){super(),c(this,e,y,x,d,{data:0})}}export{P as component,O as universal};
