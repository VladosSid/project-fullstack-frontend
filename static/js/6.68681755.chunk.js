"use strict";(self.webpackChunkproject_fullstack_frontend=self.webpackChunkproject_fullstack_frontend||[]).push([[6],{5327:function(n,e,t){t.d(e,{Z:function(){return x}});t(2791);var r,i,a,o=t(168),c=t(7691),d=t(4749),l=c.ZP.div(r||(r=(0,o.Z)(["\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  height: 323px;\n\n  img {\n    width: 100%;\n    height: 100%;\n\n    object-fit: cover;\n\n    @media "," {\n    }\n    @media "," {\n    }\n  }\n  > a {\n    text-decoration: none;\n  }\n  @media "," {\n    width: 336px;\n    height: 323px;\n  }\n  @media "," {\n    width: 300px;\n    height: 323px;\n  }\n"])),d.Z.device.tablet,d.Z.device.desktop,d.Z.device.tablet,d.Z.device.desktop),s=c.ZP.div(i||(i=(0,o.Z)(["\n  position: absolute;\n  left: 18px;\n  right: 18px;\n  bottom: 26px;\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 16px;\n  max-width: 323px;\n  @media "," {\n    max-width: 300px;\n  }\n  @media "," {\n    left: 16px;\n    right: 16px;\n    max-width: 286px;\n  }\n"])),d.Z.device.tablet,d.Z.device.desktop),p=c.ZP.h3(a||(a=(0,o.Z)(["\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.25;\n  letter-spacing: -0.24px;\n  color: #3e4462;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),u=t(1087),f=t(184);function x(n){var e=n.location,t=n.recipe;return(0,f.jsx)(l,{children:(0,f.jsxs)(u.Link,{to:"/recipe/".concat(t._id),state:{from:e},children:[(0,f.jsx)("img",{src:t.imageUrl,alt:t.title}),(0,f.jsx)(s,{children:(0,f.jsx)(p,{children:t.title})})]})})}},9006:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,i,a,o,c=t(5861),d=t(9439),l=t(4687),s=t.n(l),p=t(2730),u=t(1413),f=t(5987),x=t(2791),h=t(168),g=t(7691),b=t(4749),v=t(478),m=t(3896),Z=t(4554),w=(0,g.ZP)(v.Z)(r||(r=(0,h.Z)(["\n  && {\n    border: '1px solid blue';\n  }\n"]))),j=(0,g.ZP)(m.Z)(i||(i=(0,h.Z)(["  \n\n  && {\n    \n    font-family: 'Poppins';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 18px;\n    color: #bdbdbd;\n    text-transform: capitalize;\n    padding: 0 22px;\n    &:hover {\n      color: #8baa36;\n    },\n    &:focus {\n      color: #8baa36,\n    },\n    &:active {\n      color:#8baa36,\n    },\n    & button.Mui-selected {\n      color:#8baa36 !important,\n    },    \n  }\n  \n"]))),k=(0,g.ZP)(Z.Z)(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: 32px;\n  row-gap: 28px;\n  margin-bottom: 100px;\n\n  @media "," {\n    padding-top: 50px;\n    row-gap: 32px;\n    column-gap: 32px;\n    margin-bottom: 200px;\n  }\n  @media "," {\n    padding-top: 40px;\n    row-gap: 100px;\n    column-gap: 14px;\n    margin-bottom: 200px;\n  }\n"])),b.Z.device.tablet,b.Z.device.desktop),y=g.ZP.div(o||(o=(0,h.Z)(["\n  @media "," {\n    width: 336px;\n    heigth: 323px;\n  }\n  //  screen and (min-width: 1240px)\n  @media "," {\n    width: 299px;\n    heigth: 323px;\n    overflow: hidden;\n  }\n"])),b.Z.device.tablet,b.Z.device.desktop),C=t(5327),P=t(86),_=t(9434),S=t(184),q=["children","value","index"];function z(n){var e=n.children,t=n.value,r=n.index,i=(0,f.Z)(n,q);return(0,S.jsx)("div",(0,u.Z)((0,u.Z)({role:"tabpanel",hidden:t!==r,id:"categories-tabpanel-".concat(r),"aria-labelledby":"categories-tab-".concat(r)},i),{},{children:t===r&&(0,S.jsx)(k,{children:e})}))}function E(n){var e=n.tabsTitlesQ,t=n.idCategory,r=x.useState(t),i=(0,d.Z)(r,2),a=i[0],o=i[1],l=x.useState([]),p=(0,d.Z)(l,2),f=p[0],h=p[1],g=(0,_.v9)((function(n){return n.auth.theme}));console.log("theme",g),g="black",x.useEffect((function(){o(t)}),[t]),x.useEffect((function(){var n=function(){var n=(0,c.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P.Z.queryRecipeCategori(e[t]).then((function(n){return h(n.result.data)})).catch((function(n){return console.log(n)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[t,e]);var b=function(){var n=(0,c.Z)(s().mark((function n(t,r){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P.Z.queryRecipeCategori(e[r]).then((function(n){return h(n.result.data)})).catch((function(n){return console.log(n)}));case 2:o(r);case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,S.jsxs)(Z.Z,{sx:{width:"100%"},children:[(0,S.jsx)(Z.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,S.jsx)(w,{value:a,onChange:b,"aria-label":"categories",variant:"scrollable",allowScrollButtonsMobile:!0,TabIndicatorProps:{sx:{backgroundColor:"#8baa36"}},sx:{"& .Mui-selected":{color:"#8baa36 !important "}},children:e.map((function(n,e){return(0,S.jsx)(j,(0,u.Z)({label:n},function(n){return{id:"categories-tab-".concat(n),"aria-controls":"categories-tabpanel-".concat(n)}}({index:e})),e)}))})}),(0,S.jsx)(z,{value:a,index:a,children:f.map((function(n,e){return(0,S.jsx)(y,{children:(0,S.jsx)(C.Z,{recipe:n})},e)}))})]})}var M=t(4340),T=t(7689),B=function(){var n=(0,T.UO)().categName,e=(0,x.useState)([]),t=(0,d.Z)(e,2),r=t[0],i=t[1];(0,x.useEffect)((function(){var n=function(){var n=(0,c.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P.Z.queryCategoryList().then((function(n){return i(n.result.data)})).catch((function(n){return console.log(n.message)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]);var a=0;return n&&r.length>0&&(a=r.indexOf(n)),(0,S.jsxs)(p.t,{children:[(0,S.jsx)(M.e,{title:"Categories"}),(0,S.jsx)(E,{tabsTitlesQ:r,idCategory:a})]})}}}]);
//# sourceMappingURL=6.68681755.chunk.js.map