(this.webpackJsonpkryssord=this.webpackJsonpkryssord||[]).push([[0],{45:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(19),i=n.n(s),a=(n(45),n(25)),o=n.n(a),u=n(30),d=n(27),l=n(54),j=n(10);var h=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(!1),i=Object(d.a)(s,2),a=i[0],h=i[1],p=Object(r.useRef)(),b=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p.current.input.select(),0!==t.length){e.next=3;break}return e.abrupt("return");case 3:return h(!0),e.next=6,fetch("".concat("https://salty-gorge-71940.herokuapp.com/").concat(t)).then((function(e){return e.json()}));case 6:n=e.sent,window.history.replaceState({},t,t),h(!1),c(n);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{style:{overflow:"auto",height:"100vh"},children:[Object(j.jsx)("div",{style:{position:"sticky",top:"0",left:"0"},children:Object(j.jsx)(l.a.Search,{ref:p,onFocus:function(e){return e.target.select()},allowClear:!0,loading:a,size:"large",enterButton:"Search",onSearch:function(e){return b(e)}})}),Object(j.jsx)("div",{style:{display:"flex",padding:"4px"},children:n.map((function(e){var t=e.words,n=e.countLetters;return Object(j.jsxs)("div",{style:{padding:"4px"},children:[Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[n," "]})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)("div",{children:e})}))})})]},n)}))})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};n(50);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),p()}},[[51,1,2]]]);
//# sourceMappingURL=main.ca8c12a4.chunk.js.map