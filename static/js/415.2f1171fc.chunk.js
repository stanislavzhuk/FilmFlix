"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{9409:function(t,e,r){r(2791);var n=r(184);e.Z=function(t){var e=t.children;return(0,n.jsx)("section",{children:(0,n.jsx)("ul",{children:e})})}},6481:function(t,e,r){r(2791);var n=r(1087),a=r(184);e.Z=function(t){var e=t.data,r=t.state,c=e.id,s=e.poster_path,u=e.release_date,o=e.title,i=e.vote_average;return(0,a.jsx)("li",{children:(0,a.jsxs)(n.rU,{to:"/movies/".concat(c),state:r,children:[(0,a.jsx)("p",{children:o}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:i}),(0,a.jsx)("li",{children:u})]})}),(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(s),alt:o,loading:"lazy",width:"180"})]})})}},5415:function(t,e,r){r.r(e);var n=r(5861),a=r(9439),c=r(7757),s=r.n(c),u=r(2791),o=r(3714),i=r(9409),p=r(6481),v=r(184);e.default=function(){var t=(0,u.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Df)();case 3:e=t.sent,r=e.results,c(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{children:"Trending movies today"}),(0,v.jsx)(i.Z,{children:r.map((function(t){return(0,v.jsx)(p.Z,{data:t,state:{from:"/"}},t.id)}))})]})}},3714:function(t,e,r){r.d(e,{Df:function(){return i},TP:function(){return v},tx:function(){return h},z1:function(){return p},zv:function(){return f}});var n=r(5861),a=r(7757),c=r.n(a),s=r(1243),u="https://api.themoviedb.org/3",o="ab7c8e3be151e2a634eb03e6c55db2da",i=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&page=1"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("".concat(u,"/movie/").concat(e,"?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.2f1171fc.chunk.js.map