(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{27:function(e,n,t){},67:function(e,n,t){},90:function(e,n,t){"use strict";t.r(n);var i=t(0),c=t.n(i),l=t(31),s=t.n(l),a=(t(67),t(10)),r=t(4),o=t.p+"static/media/logo.6ce24c58.svg",d=(t(27),t(97)),j=t(96),b=t(94),h=t(2);var u=function(e){var n=e.id,t=e.title,i=e.release,c=e.isNominated,l=e.handleOnNominate;return Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"Movie-list-item",children:[Object(h.jsx)("label",{children:t}),Object(h.jsxs)("label",{children:["\xa0(",i,")\xa0"]}),Object(h.jsx)("button",{disabled:c,onClick:function(){l(n)},children:"Nominate"})]})})};var m=function(e){var n=e.list,t=e.nominations,i=e.handleOnNominate,c=(null===n||void 0===n?void 0:n.length)>0?n.map((function(e){return Object(h.jsx)(u,{id:e.imdbID,title:e.Title,release:e.Year,isNominated:(n=e.imdbID,t.length>0&&void 0!==t.find((function(e){return e.imdbID===n}))),handleOnNominate:function(){return i(e.imdbID)}},e.imdbID);var n})):null;return Object(h.jsx)("ul",{children:c})};var O=function(e){var n=e.id,t=e.title,i=e.release,c=e.handleOnRemove;return Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"Nomination-list-item",children:[Object(h.jsx)("label",{children:t}),Object(h.jsxs)("label",{children:["\xa0(",i,")\xa0"]}),Object(h.jsx)("button",{onClick:function(){return c(n)},children:"Remove"})]})})};function v(e){var n=e.nominations,t=e.handleOnRemove,i=(null===n||void 0===n?void 0:n.length)>0?null===n||void 0===n?void 0:n.map((function(e){return Object(h.jsx)(O,{id:e.imdbID,title:e.Title,release:e.Year,isNominated:e.isNominated,handleOnRemove:function(){return t(e.imdbID)}},e.imdbID)})):null,c=5===(null===n||void 0===n?void 0:n.length)?Object(h.jsx)("i",{className:"Limit-reached",children:"Maximum number of nominations (5) has been reached!"}):null;return Object(h.jsxs)(h.Fragment,{children:[c,Object(h.jsx)("ul",{children:i})]})}function x(){var e=Object(i.useState)(""),n=Object(r.a)(e,2),t=n[0],c=n[1],l=Object(i.useState)([]),s=Object(r.a)(l,2),u=s[0],O=s[1],x=function(){var e=Object(i.useState)(!1),n=Object(r.a)(e,2),t=n[0],c=n[1],l=Object(i.useState)([]),s=Object(r.a)(l,2),a=s[0],o=s[1];return{result:a,loading:t,searchByTitle:function(e){c(!0),fetch("http://www.omdbapi.com/?s="+e+"&apikey=a8600b0b").then((function(e){return e.json()})).then((function(e){o(e.Search)})).catch(console.log).finally((function(){return c(!1)}))}}}(),f=x.loading,g=x.searchByTitle,p=x.result,N=f?Object(h.jsx)("p",{children:"Loading....."}):null;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(h.jsx)("p",{children:"The Shoppies"})]}),N,Object(h.jsx)(d.a,{children:Object(h.jsx)(j.a,{className:"Movie-search-bar",sectioned:!0,children:Object(h.jsx)(b.a,{type:"text",label:"Search movies by title:",className:"Search-box",onBlur:function(){return g(t)},value:t,onChange:function(e){return c(e)}})})}),Object(h.jsxs)("div",{className:"Result-movie-list",children:[Object(h.jsx)("div",{className:"Movie-list",children:(null===p||void 0===p?void 0:p.length)>0?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h3",{children:["Results for",Object(h.jsxs)("i",{children:[" '",t,"' "]}),":"]}),Object(h.jsx)(m,{list:p,nominations:u,handleOnNominate:function(e){O((function(n){return[].concat(Object(a.a)(n),[p.find((function(n){return n.imdbID===e}))])}))}})]}):Object(h.jsx)("h3",{children:"No results yet. Start by searching a movie title..."})}),Object(h.jsxs)("div",{className:"Nomination-list",children:[Object(h.jsx)("h3",{children:"Nominations"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),u.length>0?Object(h.jsx)(v,{nominations:u,handleOnRemove:function(e){O(u.filter((function(n){return n.imdbID!==e})))}}):Object(h.jsx)("i",{children:"No nominations so far..."})]})]})]})}var f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,98)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,l=n.getLCP,s=n.getTTFB;t(e),i(e),c(e),l(e),s(e)}))},g=t(95);s.a.render(Object(h.jsx)(g.a,{theme:{colorScheme:"light"},children:Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(x,{})})}),document.getElementById("root")),f()}},[[90,1,2]]]);
//# sourceMappingURL=main.3b1be4b3.chunk.js.map