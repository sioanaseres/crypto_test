(this.webpackJsonpreact_crypto_currency=this.webpackJsonpreact_crypto_currency||[]).push([[0],{42:function(e,c,t){},43:function(e,c,t){},45:function(e,c,t){"use strict";t.r(c);var a=t(2),n=t.n(a),r=t(16),s=t.n(r),i=t(6),o=t.n(i),l=t(17),p=t(7),j=t(18),m=t.n(j),u=(t(42),t(43),t(0)),d=function(e){var c=e.image,t=e.name,a=e.symbol,n=e.price,r=e.volume,s=e.priceChange,i=e.marketcap;return Object(u.jsx)("div",{className:"coin-container",children:Object(u.jsxs)("div",{className:"coin-row",children:[Object(u.jsxs)("div",{className:"coin",children:[Object(u.jsx)("img",{src:c,alt:"crypto"}),Object(u.jsx)("h1",{children:t}),Object(u.jsx)("p",{className:"coin-symbol",children:a})]}),Object(u.jsxs)("div",{className:"coin-data",children:[Object(u.jsxs)("p",{className:"coin-price",children:["$",n]}),Object(u.jsxs)("p",{className:"coin-volume",children:["$",r.toLocaleString()]}),s<0?Object(u.jsxs)("p",{className:"coin-percent red",children:[s.toFixed(2),"%"]}):Object(u.jsxs)("p",{className:"coin-percent green",children:[s.toFixed(2),"%"]}),Object(u.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",i.toLocaleString()]})]})]})})};var h=function(){var e=Object(a.useState)([]),c=Object(p.a)(e,2),t=c[0],n=c[1],r=Object(a.useState)(""),s=Object(p.a)(r,2),i=s[0],j=s[1];Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false");case 2:c=e.sent,console.log(c.data),n(c.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var h=t.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(u.jsxs)("div",{className:"coin-app",children:[Object(u.jsxs)("div",{className:"coin-search",children:[Object(u.jsx)("h1",{className:"coin-text",children:"Search a currency"}),Object(u.jsx)("form",{children:Object(u.jsx)("input",{type:"text",className:"coin-input",placeholder:"Search",onChange:function(e){j(e.target.value)}})})]}),h.map((function(e){return Object(u.jsx)(d,{name:e.name,image:e.image,symbol:e.symbol,volume:e.total_volume,price:e.current_price,priceChange:e.price_change_percentage_24h,marketcap:e.market_cap},e.id)}))]})};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.e389fd6e.chunk.js.map