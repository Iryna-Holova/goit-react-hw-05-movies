"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[203],{1776:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(828),a="ErrorMessage_message__7qeFy",s="ErrorMessage_message_icon__ZlXVT",c=t(184),i=function(e){var n=e.message;return(0,c.jsxs)("div",{className:a,children:[(0,c.jsx)(r.JV0,{className:s}),n]})}},2639:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(828),a="Loader_loader__+lRPl",s="Loader_spinner__iDFIv",c=t(184),i=function(){return(0,c.jsxs)("div",{className:a,children:[(0,c.jsx)(r.j8h,{className:s}),"Loading..."]})}},2203:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(885),a=t(2791),s=t(6871),c=t(1414),i=t(1776),o=t(2639),u=t(501),p=t(4373),l="MovieDescription_back_btn__cXXOj",d="MovieDescription_back_icon__ZlMOj",f="MovieDescription_description_wrapper__F4y-G",_="MovieDescription_description_image__xUskL",v="MovieDescription_description_info__PdiKy",h="MovieDescription_description_title__OYgTs",m="MovieDescription_description_type__mBfTi",x="MovieDescription_description_nav__Csa+0",g="MovieDescription_description_link__pMfb1",j=t(184),k=function(e){var n=e.movie,t=e.onBackBtn,r=(0,s.TH)(),c=n.poster_path,i=n.title,k=n.release_date,b=n.vote_average,w=n.overview,y=n.genres;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("button",{className:l,onClick:t,type:"button",children:[(0,j.jsx)(p.u1R,{className:d})," Go back"]}),(0,j.jsxs)("div",{className:f,children:[(0,j.jsx)("img",{className:_,src:function(e){return e?"https://image.tmdb.org/t/p/w500".concat(e):"https://ranobehub.org/img/ranobe/posters/default.jpg"}(c),alt:i}),(0,j.jsxs)("div",{className:v,children:[(0,j.jsxs)("h2",{className:h,children:[i," (",k.substring(0,4),")"]}),(0,j.jsxs)("p",{children:["User Score: ",Math.round(b/10*100),"%"]}),(0,j.jsx)("h3",{className:m,children:"Overview"}),(0,j.jsx)("p",{children:w||"no overview"}),(0,j.jsx)("h3",{className:m,children:"Genres"}),(0,j.jsx)("p",{children:y.map((function(e){return e.name})).join(", ")||"no genres"})]})]}),(0,j.jsxs)("nav",{className:x,children:[(0,j.jsx)(u.OL,{className:g,to:"cast",state:r.state,children:"Cast"}),(0,j.jsx)(u.OL,{className:g,to:"reviews",state:r.state,children:"Reviews"})]}),(0,j.jsx)(a.Suspense,{fallback:(0,j.jsx)(o.Z,{}),children:(0,j.jsx)(s.j3,{})})]})},b=function(){var e=(0,s.UO)().movieId,n=(0,a.useState)(null),t=(0,r.Z)(n,2),u=t[0],p=t[1],l=(0,a.useState)(!1),d=(0,r.Z)(l,2),f=d[0],_=d[1],v=(0,a.useState)(""),h=(0,r.Z)(v,2),m=h[0],x=h[1],g=(0,s.s0)(),b=(0,s.TH)();(0,a.useEffect)((function(){_(!0),x(""),(0,c.gQ)(e).then((function(e){p(e)})).catch((function(e){x(e.message),g("/")})).finally((function(){_(!1)}))}),[e,g]);return(0,j.jsxs)(j.Fragment,{children:[u&&(0,j.jsx)(k,{movie:u,onBackBtn:function(){var e,n;g(null!==(e=null===b||void 0===b||null===(n=b.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/")}}),f&&(0,j.jsx)(o.Z,{}),m&&(0,j.jsx)(i.Z,{message:m})]})}},1414:function(e,n,t){t.d(n,{Hx:function(){return m},Pv:function(){return l},gQ:function(){return f},uV:function(){return v},wr:function(){return u}});var r=t(5861),a=t(7757),s=t.n(a),c=t(4569),i=t.n(c),o="8b67a89c3b3cf87de76d1484537ca872";function u(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/trending/movie/day?api_key=".concat(o,"&page=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(n,t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({language:"en-US",page:t,include_adult:!1}),e.next=3,i().get("/search/movie?api_key=".concat(o,"&query=").concat(n,"&").concat(r));case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(n,"?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(n,"/credits?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(n,"/reviews?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=203.77d76e0f.chunk.js.map