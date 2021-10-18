(this.webpackJsonpgames=this.webpackJsonpgames||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),o=(n(16),n(8)),i=n.n(o),l=n(11),u=n(10),j=n(4),m=n(6),d=n.n(m),h=n(0),b=function(e){var t=e.searchValue,n=e.setSearchValue,a=e.onChangeSearchInput,c=e.onChangeSort,r=e.isSort;return Object(h.jsxs)("div",{className:d.a.contentUp,children:[Object(h.jsx)("h1",{children:t?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(t,'"'):"Games"}),Object(h.jsx)("div",{children:Object(h.jsxs)("button",{onClick:c,children:["\u0421\u043e\u0440\u0438\u0442\u043e\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443 ",Object(h.jsx)("img",{src:r?"games/img/az.png":"games/img/za.png",alt:"sortImg"})]})}),Object(h.jsxs)("div",{className:d.a.searchBlock,children:[Object(h.jsx)("img",{src:"games/img/search.svg",alt:"Search"}),t&&Object(h.jsx)("img",{onClick:function(){return n("")},className:d.a.clear,src:"games/img/btn-remove.svg",alt:"Clear"}),Object(h.jsx)("input",{onChange:a,value:t,placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]})},O=n(3),g=n.n(O),p=function(e){var t=e.icon_url,n=e.name,a=e.onRemove,c={name:n,icon_url:t};return Object(h.jsxs)("div",{className:g.a.card,children:[Object(h.jsx)("img",{className:g.a.icon,src:t,alt:"gameImage"}),Object(h.jsx)("h5",{children:n}),Object(h.jsx)("div",{className:g.a.cardFooter,children:Object(h.jsx)("img",{onClick:function(){a(c.name)},className:g.a.plus,src:"games/img/delete.svg",alt:"Delete"})})]})},f=function(e){var t=e.gamesData,n=e.searchValue,a=e.removeFromOrdersStore,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(h.jsx)("div",{className:"listOfGames",children:c.map((function(e,t){return Object(h.jsx)(p,{name:e.name,icon_url:e.icon_url,onRemove:function(e){return a(e)}},t)}))})},x=function(e){var t=e.gamesData,n=e.addToList,a=e.loading;return Object(h.jsx)(h.Fragment,{children:t&&0!==t.length?Object(h.jsx)("ul",{children:t.map((function(e,t){return Object(h.jsxs)("li",{onClick:function(){return n(e)},children:[Object(h.jsx)("img",{width:42,height:42,src:e.icon_url,alt:""}),Object(h.jsx)("span",{children:e.name})]},t)}))}):Object(h.jsx)("button",{onClick:a,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"})})};var v=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(j.a)(r,2),o=s[0],m=s[1],d=Object(a.useState)(!0),O=Object(j.a)(d,2),g=O[0],p=O[1],v=Object(a.useState)([]),_=Object(j.a)(v,2),C=_[0],S=_[1];function N(){return(N=Object(u.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pcg-appstore.s3.amazonaws.com/applications_for_import.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n.data),e.next=20;break;case 10:return e.prev=10,e.t0=e.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0441\u0435\u0440\u0435\u0432\u0435\u0440\u0430"+e.t0),e.next=15,fetch("games/games.json");case 15:return a=e.sent,e.next=18,a.json();case 18:r=e.sent,c(r.data);case 20:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var k=function(){g?C.sort((function(e,t){return e.name<t.name?1:-1})):C.sort((function(e,t){return e.name>t.name?1:-1}))};return Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("div",{className:"filter",children:Object(h.jsx)(b,{searchValue:o,setSearchValue:m,onChangeSearchInput:function(e){m(e.target.value)},onChangeSort:function(){p(!g),k()},isSort:g})}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("div",{className:"totalGames",children:Object(h.jsx)(x,{gamesData:n,addToList:function(e){C.find((function(t){return t.name===e.name}))?console.error("\u042d\u0442\u0430 \u0438\u0433\u0440\u0430 \u0443\u0436\u0435 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435"):S((function(t){return[].concat(Object(l.a)(t),[e])}))},loading:function(){return N.apply(this,arguments)}})}),Object(h.jsx)("div",{className:"wrapperListOfGames",children:Object(h.jsx)(f,{gamesData:C,searchValue:o,removeFromOrdersStore:function(e){S((function(t){return t.filter((function(t){return t.name!==e}))}))}})})]})]})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={card:"Card_card__1cGo_",icon:"Card_icon__3MayO",plus:"Card_plus__3SEMc",cardFooter:"Card_cardFooter__1rJa3"}},6:function(e,t,n){e.exports={contentUp:"Filter_contentUp__3gOL7",searchBlock:"Filter_searchBlock__1iACh",clear:"Filter_clear__3r1Ng"}}},[[19,1,2]]]);
//# sourceMappingURL=main.06b29de5.chunk.js.map