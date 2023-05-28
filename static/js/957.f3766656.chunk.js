"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[957],{957:function(e,r,n){n.r(r),n.d(r,{default:function(){return m}});var t=n(5861),c=n(9439),a=n(7757),i=n.n(a),s=n(2791),o=n(7689),u=n(1087),l=n(2426),d=n.n(l),h=n(9905),p=n(184),v=function(e){var r,n=e.info,t=n.genres,c=n.homepage,a=n.original_title,i=n.overview,s=n.poster_path,o=n.production_companies,l=n.production_countries,v=n.release_date,f=n.tagline,x=n.title,m=n.vote_average,j=n.vote_count,g=null===t||void 0===t?void 0:t.map((function(e){return e.name})).join(", "),w=null===l||void 0===l?void 0:l.map((function(e){return e.name})).join(", "),_=null===o||void 0===o?void 0:o.map((function(e){var r=e.id,n=e.logo_path,t=e.name;return n&&(0,p.jsx)("li",{children:n&&(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:t,style:{maxHeight:50,maxWidth:200}})},r)})),b=s?"https://image.tmdb.org/t/p/w200".concat(s):h;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:c,children:(0,p.jsx)("img",{src:b,alt:a,loading:"lazy",width:"300","max-height":"709"})}),(0,p.jsx)("p",{children:""!==w?w:"Country information not available"})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h2",{children:[x,v&&(0,p.jsxs)("span",{children:[" (",v.slice(0,4),")"]})]}),(0,p.jsx)("p",{children:f})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h4",{children:"Overview: "}),(0,p.jsx)("p",{children:""!==i?i:"Unfortunately, there is no detailed overview available for this movie."})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h4",{children:"Genres: "}),(0,p.jsx)("p",{children:""!==g?g:"No genres provided"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h4",{children:"Statistics: "}),(0,p.jsxs)("ul",{children:[(0,p.jsxs)("li",{children:["Release Date:",(0,p.jsx)("p",{children:(r=v,d()(r).format("DD MMM YYYY"))})]}),(0,p.jsxs)("li",{children:["User Score:",(0,p.jsxs)("p",{children:[Math.round(10*m),"%\u2002"]})]}),(0,p.jsxs)("li",{children:["Votes:",(0,p.jsx)("p",{children:""!==j?j:"No votes yet"})]})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h4",{children:"Production Companies:"}),(null===_||void 0===_?void 0:_.length)>0&&(0,p.jsx)("div",{children:_})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{children:"Additional Information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]})]})]})},f=n(3714),x=n(6673),m=function(){var e,r,n=(0,o.TH)(),a=(0,s.useRef)(null!==(e=null===(r=n.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/"),l=(0,s.useState)({}),d=(0,c.Z)(l,2),h=d[0],m=d[1],j=(0,o.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.TP)(j);case 3:r=e.sent,m(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[j]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("article",{children:[(0,p.jsx)(u.rU,{to:a.current,children:"Go back"}),(0,p.jsx)(v,{info:h})]}),(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(x.Z,{}),children:(0,p.jsx)(o.j3,{})})]})}},3714:function(e,r,n){n.d(r,{Df:function(){return u},TP:function(){return d},tx:function(){return p},z1:function(){return l},zv:function(){return h}});var t=n(5861),c=n(7757),a=n.n(c),i=n(1243),s="https://api.themoviedb.org/3",o="ab7c8e3be151e2a634eb03e6c55db2da",u=function(){var e=(0,t.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(r,"&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(r,"?api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(r,"/credits?api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(r,"/reviews?api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},9905:function(e,r,n){e.exports=n.p+"static/media/default_poster.71253f31d01ef6cdd4cc.png"}}]);
//# sourceMappingURL=957.f3766656.chunk.js.map