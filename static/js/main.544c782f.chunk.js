(this.webpackJsonpnotto=this.webpackJsonpnotto||[]).push([[0],{38:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),s=n.n(r),a=n(15),i=n.n(a),o=(n(38),n(39),n(19)),j=n(6),l=n(20),b=n(54),u=n(57),d=n(58),x=n(28),h=n.n(x),O=n(12),m=n(13),f=function(){var e=Object(r.useState)("environment"),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(j.e)();return Object(c.jsx)(b.a,{className:"p-3",children:Object(c.jsxs)(u.a,{className:"text-center",children:[Object(c.jsxs)(u.a.Header,{children:[" ",Object(c.jsx)(O.a,{icon:m.e,className:"text-3xl mr-2"}),"QR Code"]}),Object(c.jsx)(u.a.Body,{children:Object(c.jsx)(h.a,{delay:300,onScan:function(e){if(e){var t=new URL(e).searchParams.get("v");t&&a.push("/result/".concat(t))}},onError:function(e){console.log(e)},facingMode:n})}),Object(c.jsx)(u.a.Footer,{children:Object(c.jsxs)(d.a,{variant:"primary",onClick:function(){s("environment"===n?"user":"environment")},children:[Object(c.jsx)(O.a,{icon:m.f,className:"text-3xl mr-2"}),"Change Camera"]})})]})})},v=n(55),p=function(e){for(var t=Object.assign([],e),n=t.length-1;n>0;n--){var c=Math.floor(Math.random()*(n+1)),r=t[n];t[n]=t[c],t[c]=r}return t},g=function(e){var t=e.numbers;return Object(c.jsx)(v.a,{striped:!0,bordered:!0,children:Object(c.jsx)("tbody",{children:t.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:String.fromCharCode(t+65)}),e.map((function(e,t){return Object(c.jsx)("td",{children:e},t)}))]},t)}))})})},N=function(){var e=function(e){var t=e.split("q"),n=t.shift();return{round:void 0===n?0:+n,numbers:t.map((function(e){return[+e.slice(0,2),+e.slice(2,4),+e.slice(4,6),+e.slice(6,8),+e.slice(8,10),+e.slice(10,12)]}))}}(Object(j.f)().v),t=Object(r.useState)([]),n=Object(l.a)(t,2),s=n[0],a=n[1];return Object(c.jsxs)(b.a,{className:"p-2",children:[Object(c.jsxs)(u.a,{className:"text-center",children:[Object(c.jsxs)(u.a.Header,{className:"font-weight-bold",children:["\uc81c",null===e||void 0===e?void 0:e.round,"\ud68c"]}),Object(c.jsx)(u.a.Body,{children:Object(c.jsx)(g,{numbers:null===e||void 0===e?void 0:e.numbers})}),Object(c.jsxs)(u.a.Footer,{children:[Object(c.jsxs)(d.a,{variant:"primary",onMouseDown:function(){for(var t=[],n=1;n<46;n++)t.push(n);var c=[];e.numbers.forEach((function(e){e.forEach((function(e){c.push(e)}))}));for(var r=t.filter((function(e){return!c.includes(e)})),s=[],i=0;i<5;i++){var o=p(r);s.push([o[0],o[1],o[2],o[3],o[4],o[5]])}a(s)},children:[Object(c.jsx)(O.a,{icon:m.a,className:"text mr-1"}),"notto!"]}),Object(c.jsxs)(d.a,{className:"ml-2",variant:"primary",onMouseDown:function(){navigator.clipboard.writeText(window.location.href)},children:[Object(c.jsx)(O.a,{icon:m.c,className:"text-3xl mr-2"}),"Copy Link"]})]})]}),Object(c.jsxs)(u.a,{className:"text-center mt-2",children:[Object(c.jsxs)(u.a.Header,{children:[Object(c.jsx)(O.a,{icon:m.b,className:"text-3xl mr-2"}),"Numbers of week"]}),Object(c.jsx)(u.a.Body,{children:Object(c.jsx)(g,{numbers:s})})]})]})},y=n(56),w=function(){return Object(c.jsx)(y.a,{bg:"primary",expand:"lg",children:Object(c.jsxs)(y.a.Brand,{className:"text-light",href:"#",children:[Object(c.jsx)(O.a,{icon:m.d,className:"text-3xl mr-2"}),"notto"]})})},C=function(){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(w,{}),Object(c.jsx)(j.a,{exact:!0,path:"/",children:Object(c.jsx)(f,{})}),Object(c.jsx)(j.a,{path:"/result/:v",children:Object(c.jsx)(N,{})})]})},B=function(){return Object(c.jsx)(C,{})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root")),F()}},[[52,1,2]]]);
//# sourceMappingURL=main.544c782f.chunk.js.map