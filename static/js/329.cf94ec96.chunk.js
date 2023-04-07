"use strict";(self.webpackChunkproject_fullstack_frontend=self.webpackChunkproject_fullstack_frontend||[]).push([[329],{5327:function(n,e,i){i.d(e,{Z:function(){return h}});i(2791);var t,a,o,r=i(168),p=i(7691),d=p.ZP.div(t||(t=(0,r.Z)(["\n  position: relative;\n  /* margin-bottom: 24px; */\n  img {\n    width: 100%;\n    border-radius: 8px;\n  }\n  > a {\n    text-decoration: none;\n  }\n"]))),x=p.ZP.div(a||(a=(0,r.Z)(["\n  position: absolute;\n  left: 16px;\n  right: 16px;\n  bottom: 26px;\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 16px;\n  max-width: 286px;\n"]))),c=p.ZP.h3(o||(o=(0,r.Z)(["\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.25;\n  letter-spacing: -0.24px;\n  color: #3e4462;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),g=i(1087),s=i(184);function h(n){var e=n.location,i=n.recipe;return(0,s.jsx)(d,{children:(0,s.jsxs)(g.Link,{to:"/recipe/".concat(i._id),state:{from:e},children:[(0,s.jsx)("img",{src:i.imageUrl,alt:i.title}),(0,s.jsx)(x,{children:(0,s.jsx)(c,{children:i.title})})]})})}},7104:function(n,e,i){i.d(e,{Z:function(){return l}});var t,a,o,r=i(9439),p=i(2791),d=i(168),x=i(7691),c=x.ZP.form(t||(t=(0,d.Z)(["\n  display: flex;\n  width: fit-content;\n  position: relative;\n  /* margin: 0 auto;\n  justify-content: center;\n  align-items: center; */\n  margin-bottom: ",";\n  /* margin-top: ","; */\n  @media screen and (max-width: 767px) {\n    margin: ",";\n  }\n  @media screen and (min-width: 768px) {\n    margin-left: ",";\n  }\n  @media screen and (min-width: 1240px) {\n    margin-left: ",";\n  }\n  /* margin-top: 0px; */\n"])),(function(n){return n.marginBottom?"24px":0}),(function(n){return n.marginTop?"650px":0}),(function(n){return"main"===n.page&&"0px auto"}),(function(n){return"main"===n.page&&"32px"}),(function(n){return"main"===n.page&&"100px"})),g=x.ZP.input(a||(a=(0,d.Z)(["\n  background-color: #fafafa;\n  border: none;\n  outline: none;\n  /* Secondary/Secondary1 */\n  border-radius: 24px 44px;\n  border: 1px solid #f0f0f0;\n  height: 52px;\n  /* width: 295px; */\n  width: ",";\n  padding-left: 17px;\n  @media screen and (min-width: 768px) {\n    width: ",";\n    height: ",";\n    font-size: ",";\n    padding-left: ",";\n  }\n  @media screen and (min-width: 1240px) {\n    width: ",";\n    height: ",";\n  }\n\n  ::placeholder {\n    font-family: 'Poppins';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 1.5;\n    color: #bdbdbd;\n    @media screen and (min-width: 768px) {\n      font-size: ",";\n    }\n  }\n  /* ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  } */\n"])),(function(n){return"main"===n.page?"295px":"283px"}),(function(n){return"main"===n.page&&"330px"}),(function(n){return"main"===n.page&&"59px"}),(function(n){return"main"===n.page&&"16px"}),(function(n){return"main"===n.page&&"38px"}),(function(n){return"main"===n.page&&"465px"}),(function(n){return"main"===n.page&&"70px"}),(function(n){return"main"===n.page&&"16px"})),s=x.ZP.button(o||(o=(0,d.Z)(["\n  position: absolute;\n  right: 0;\n  width: 113px;\n  height: 56px;\n  /* border-color: transparent; */\n  border-radius: 24px 44px;\n  /* border: 1px solid rgba(34, 37, 42, 1); */\n  color: #fafafa;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.5;\n  background-color: ",";\n  border: ",";\n  @media screen and (max-width: 767px) {\n    width: ",";\n  }\n  @media screen and (min-width: 768px) {\n    width: ",";\n    height: ",";\n    font-size: ",";\n  }\n  @media screen and (min-width: 1240px) {\n    width: ",";\n    height: ",";\n    font-size: ",";\n  }\n"])),(function(n){return n.green?"#8BAA36":"#22252a"}),(function(n){return n.green?"1px solid #8BAA36":"1px solid #22252a"}),(function(n){return"main"===n.page&&"113px"}),(function(n){return"main"===n.page&&"161px"}),(function(n){return"main"===n.page&&"59px"}),(function(n){return"main"===n.page&&"16px"}),(function(n){return"main"===n.page&&"161px"}),(function(n){return"main"===n.page&&"75px"}),(function(n){return"main"===n.page&&"16px"})),h=i(184);function l(n){var e=n.green,i=n.onSubm,t=n.marginBottom,a=n.searchQuery,o=n.marginTop,d=n.isSearchPage,x=(0,p.useState)(a||""),l=(0,r.Z)(x,2),m=l[0],f=l[1];console.log("is?",d);return(0,h.jsxs)(c,{onSubmit:function(n){n.preventDefault(),console.log("Query in SF submit",m),""!==m.trim()?i(m):console.log("Please fill the search form ")},marginBottom:t,marginTop:o,page:d?"search":"main",children:[(0,h.jsx)(g,{placeholder:"Beef",value:m,onChange:function(n){f(n.currentTarget.value)},page:d?"search":"main"}),(0,h.jsx)(s,{green:e,page:d?"search":"main",children:"Search"})]})}},4329:function(n,e,i){i.r(e),i.d(e,{default:function(){return L}});var t,a,o,r,p,d,x,c,g,s,h,l,m,f,A,u,w=i(9439),b=i(2791),C=i(7689),G=i(8372),j=i(168),B=i(7691),y=i(4749),E=B.ZP.div(t||(t=(0,j.Z)(["\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (min-width: 768px) {\n  }\n  @media screen and (min-width: 1240px) {\n  }\n"]))),R=B.ZP.section(a||(a=(0,j.Z)(["\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-bottom: 100px;\n  @media screen and (min-width: 768px) {\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n  @media "," {\n    padding-left: 99px;\n    padding-right: 99px;\n    padding-bottom: 118px;\n  }\n"])),y.Z.device.desktop),D=B.ZP.div(o||(o=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 32px;\n  margin-bottom: 40px;\n  @media screen and (min-width: 768px) {\n    gap: 50px;\n    margin-bottom: 32px;\n  }\n\n  @media "," {\n    gap: 100px;\n    margin-bottom: 14px;\n  }\n"])),y.Z.device.desktop),I=B.ZP.div(r||(r=(0,j.Z)(["\n  justify-content: center;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    gap: 32px;\n  }\n\n  @media "," {\n    display: flex;\n    gap: 14px;\n  }\n"])),y.Z.device.desktop),P=B.ZP.h2(p||(p=(0,j.Z)(["\n  margin-bottom: 32px;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 1;\n\n  letter-spacing: -0.02em;\n  /* font-feature-settings: 'liga' off; */\n\n  color: #001833;\n"]))),z=(B.ZP.div(d||(d=(0,j.Z)(["\n  position: relative;\n  margin-bottom: 24px;\n  img {\n    /* width: 343px;\n    height: 323px; */\n    /* object-fit: cover; */\n    width: 100%;\n    border-radius: 8px;\n  }\n  > a {\n    text-decoration: none;\n  }\n"]))),B.ZP.div(x||(x=(0,j.Z)(["\n  position: absolute;\n  left: 16px;\n  right: 16px;\n  bottom: 26px;\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 16px;\n"]))),B.ZP.h3(c||(c=(0,j.Z)(["\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.25;\n  /* identical to box height, or 125% */\n\n  letter-spacing: -0.24px;\n\n  /* Color - Text Primary */\n\n  color: #3e4462;\n"]))),B.ZP.button(g||(g=(0,j.Z)(["\n  display: flex;\n  width: 94px;\n  height: 38px;\n\n  background: #8aa936;\n  border-radius: 6px;\n  border-color: transparent;\n  justify-content: center;\n  align-items: center;\n  /* padding: 10px 24px; */\n  color: #fafafa;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.29;\n  margin-left: auto;\n  margin-top: 24px;\n  @media screen and (min-width: 768px) {\n    margin-top: 40px;\n  }\n\n  @media screen and (min-width: 1240px) {\n    margin-top: 60px;\n  }\n"])))),F=B.ZP.button(s||(s=(0,j.Z)(["\n  display: block;\n  width: 195px;\n  height: 46px;\n  /* border-color: transparent; */\n  border-radius: 24px 44px;\n  border: 2px solid #8baa36;\n  background-color: transparent;\n  margin: 0 auto;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.5;\n  text-align: center;\n  color: #22252a;\n  @media screen and (min-width: 768px) {\n    width: 239px;\n    height: 61px;\n\n    font-size: 16px;\n  }\n"]))),k=i(9126),Z=i(7104),v=i(1087),N=i(401),Q=i(1540),O=i(6362),Y=i(9045),S=i(4506),q=i(1050),J=B.ZP.div(h||(h=(0,j.Z)(["\n  position: relative;\n  width: 100%;\n  @media screen and (max-width: 767px) {\n    height: 841px;\n    background-repeat: no-repeat;\n    background-image: url('","'), url('","'),\n      url('","'), url('","');\n    background-position: top 322px center, top 70px right 0px, top 10px left 0px,\n      top 140px right 0px;\n    background-size: 320px, 375px, 60px, 280px;\n  }\n\n  @media screen and (min-width: 768px) {\n    height: 640px;\n    /* width: 768px; */\n    background-repeat: no-repeat;\n    background-image: url('","');\n    background-size: cover;\n    background-position: center center;\n  }\n\n  @media screen and (min-width: 1240px) {\n    position: relative;\n\n    height: 688px;\n    background-repeat: no-repeat;\n    background-image: url('","');\n    background-size: cover;\n    /* background-position: center center; */\n  }\n"])),Y,Q,O,N,q,S),T=B.ZP.h1(l||(l=(0,j.Z)(["\n  color: #8baa36;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 60px;\n  line-height: 1;\n\n  letter-spacing: -0.005em;\n  margin-top: 132px;\n  margin-bottom: 14px;\n  span {\n    color: #22252a;\n  }\n  @media screen and (max-width: 767px) {\n    text-align: center;\n  }\n  @media screen and (min-width: 768px) {\n    margin-left: 32px;\n    margin-top: 204px;\n    margin-bottom: 24px;\n    font-size: 72px;\n  }\n  @media screen and (min-width: 1240px) {\n    margin-left: 100px;\n    margin-top: 226px;\n    margin-bottom: 14px;\n\n    font-size: 100px;\n\n    /* width: 465px; */\n  }\n"]))),U=B.ZP.span(m||(m=(0,j.Z)(["\n  display: block;\n\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n\n  color: #23262a;\n  width: 248px;\n  font-size: 14px;\n  line-height: 1.29;\n  letter-spacing: -0.02em;\n  @media screen and (max-width: 767px) {\n    text-align: center;\n    margin: 0 auto 364px;\n  }\n  @media screen and (min-width: 768px) {\n    margin-left: 38px;\n    margin-bottom: 32px;\n    width: 362px;\n    font-size: 14px;\n    line-height: 1.29;\n    letter-spacing: -0.02em;\n  }\n  @media screen and (min-width: 1240px) {\n    margin-left: 107px;\n    margin-bottom: 50px;\n    width: 465px;\n    font-size: 18px;\n    line-height: 1.33;\n    letter-spacing: -0.02em;\n  }\n"]))),M=B.ZP.span(f||(f=(0,j.Z)(["\n  position: absolute;\n  display: block;\n  width: 225px;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.5;\n  letter-spacing: -0.24px;\n  color: #3e4462;\n\n  background-color: #ffffff;\n  border-radius: 8px;\n\n  @media screen and (max-width: 767px) {\n    padding: 8px;\n    top: 435px;\n    left: 116px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 260px;\n\n    right: 43px;\n    top: 372px;\n\n    padding: 12px;\n    font-size: 14px;\n    line-height: 1.29;\n  }\n  @media screen and (min-width: 1240px) {\n    width: 298px;\n\n    left: 820px;\n    top: 462px;\n    padding: 16px;\n\n    font-size: 14px;\n    line-height: 1.43;\n  }\n"]))),H=B.ZP.span(A||(A=(0,j.Z)(["\n  color: #8baa36;\n"]))),V=(0,B.ZP)(v.Link)(u||(u=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-top: 7px;\n  color: #3e4462;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  margin-left: 135px;\n  font-size: 10px;\n  line-height: 1.2;\n\n  @media screen and (min-width: 768px) {\n    margin-left: 164px;\n    font-size: 10px;\n  }\n  @media screen and (min-width: 1240px) {\n    margin-left: 200px;\n    font-size: 10px;\n  }\n"]))),K=i(184);function W(n){var e=n.onSubm;return(0,K.jsxs)(J,{children:[(0,K.jsxs)(T,{children:["So",(0,K.jsx)("span",{children:"Yummy"})]}),(0,K.jsx)(U,{children:'"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.'}),(0,K.jsx)(Z.Z,{onSubm:e}),(0,K.jsxs)(M,{children:[(0,K.jsxs)("div",{children:[(0,K.jsx)(H,{children:"Delicious and healthy "}),(0,K.jsxs)("span",{children:["way to enjoy a ",(0,K.jsx)("br",{})," variety of fresh ingredients in one ",(0,K.jsx)("br",{}),"satisfying meal"]})]}),(0,K.jsxs)(V,{to:"/categories/breakfast",children:[(0,K.jsx)("span",{children:"See recipes"}),(0,K.jsx)(k.lzl,{style:{marginLeft:"7px"}})]})]})]})}var X=i(5327);function L(){var n=(0,C.TH)(),e=(0,C.s0)(),i=(0,b.useState)([]),t=(0,w.Z)(i,2),a=t[0],o=t[1],r=(0,b.useState)(window.innerWidth),p=(0,w.Z)(r,1)[0];(0,b.useEffect)((function(){var n;G.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkZDdmODlmN2I0N2RlNDk0OGI4ZDIiLCJpYXQiOjE2ODA3MjYwMDh9._Zf3orn5P6u54hilJsmRc8snd2oRt7Ol77pu3M3IqYQ",p>=768&&p<1240?n=2:p>=1240?n=4:p<768&&(n=1),G.Z.get("/recipes/main-page?query=".concat(n)).then((function(e){o(e.data.result.data),console.log(n,p)})).catch((function(n){console.log(n.message)}))}),[p]);var d=a.reduce((function(n,e){return n[e.category]?n[e.category].push(e):n[e.category]=[e],n}),{}),x=function(n){console.log("category in Main",n);var i=function(n){var e="categories/".concat(n.toLowerCase());return console.log("categoryUrl",e),e}(n);e(i)};return(0,K.jsxs)(E,{children:[(0,K.jsx)(W,{onSubm:function(n){console.log("Query in Main",n);var i=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"title",i=n.toLowerCase(),t=encodeURIComponent(i),a="/search?query=".concat(t,"&type=").concat(e);return console.log("searchUrl",a),a}(n);console.log("SearchUrl in MainPage",i),e(i)}}),(0,K.jsxs)(R,{children:[(0,K.jsx)(D,{children:Object.entries(d).map((function(e){var i=(0,w.Z)(e,2),t=i[0],a=i[1];return(0,K.jsxs)("div",{children:[(0,K.jsx)(P,{children:t}),(0,K.jsx)(I,{children:a.map((function(e){return(0,K.jsx)(X.Z,{location:n,recipe:e},e._id)}))}),(0,K.jsx)(z,{onClick:function(){return x(t)},children:"See all"})]},t)}))}),(0,K.jsx)(F,{onClick:function(){return x("breakfast")},children:"Other categories"})]})]})}},401:function(n){n.exports="data:image/png;base64,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"},6362:function(n){n.exports="data:image/png;base64,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"},1540:function(n,e,i){n.exports=i.p+"static/media/blatt_mob-min.31e2db532772c25fdf8a.png"},4506:function(n,e,i){n.exports=i.p+"static/media/desktop_bg3.736be01c55fb1872239a.png"},1050:function(n,e,i){n.exports=i.p+"static/media/tablet_bg.bd214bbcbdff8f67c762.png"},9045:function(n,e,i){n.exports=i.p+"static/media/unsplash_mob-min.585b9d28316afb91982b.png"}}]);
//# sourceMappingURL=329.cf94ec96.chunk.js.map