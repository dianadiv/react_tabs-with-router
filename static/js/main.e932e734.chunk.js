(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{30:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(23),s=c.n(a),n=c(9),i=(c(28),c(29),c(30),c(13)),b=c.n(i),j=c(2),l=c(3),r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],d=function(){var e=Object(j.q)().tabId,t=r.find((function(t){return t.id===e}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:r.map((function(t){return Object(l.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":e===t.id}),children:Object(l.jsx)(n.b,{to:"/tabs/".concat(t.id),children:t.title})},t.id)}))})}),t?Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:null===t||void 0===t?void 0:t.content}):Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:"Please select a tab"})]})},o=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})},children:"Home"}),Object(l.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})},children:"Tabs"})]})})}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(j.d,{children:[Object(l.jsx)(j.b,{path:"/",element:Object(l.jsx)("h1",{className:"title",children:"Home page"})}),Object(l.jsx)(j.b,{path:"/home",element:Object(l.jsx)(j.a,{to:"/"})}),Object(l.jsxs)(j.b,{path:"tabs",children:[Object(l.jsx)(j.b,{index:!0,element:Object(l.jsx)(d,{})}),Object(l.jsx)(j.b,{path:":tabId",element:Object(l.jsx)(d,{})})]}),Object(l.jsx)(j.b,{path:"*",element:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};s.a.render(Object(l.jsx)(n.a,{children:Object(l.jsx)(o,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.e932e734.chunk.js.map