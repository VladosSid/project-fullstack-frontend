"use strict";(self.webpackChunkproject_fullstack_frontend=self.webpackChunkproject_fullstack_frontend||[]).push([[3],{2730:function(t,e,r){r.d(e,{t:function(){return u}});var n=r(7657),a=r(184),u=function(t){var e=t.children;return(0,a.jsx)(n.o,{children:e})}},7657:function(t,e,r){r.d(e,{o:function(){return p}});var n,a=r(168),u=r(7691),s=r(4749),p=u.ZP.div(n||(n=(0,a.Z)(["\n  position: relative;\n  padding: 0 8px;\n  margin: 0 auto;\n  /* width: 375px; */\n  width: 359px;\n  @media "," {\n    padding: 0 32px;\n    width: 704px;\n  }\n\n  @media "," {\n    width: 1240px;\n    background-position: top 52px left 258px, top 74px left 1181px,\n      top 152px left 720px;\n  }\n"])),s.Z.device.tablet,s.Z.device.desktop)},4340:function(t,e,r){r.d(e,{e:function(){return w}});var n,a,u,s,p,c=r(9434),i=r(168),o=r(7691),A=r(4749),d=o.ZP.div(n||(n=(0,i.Z)(["\n  width: 100%;\n  position: relative;\n"]))),g=o.ZP.h2(a||(a=(0,i.Z)(["\n  padding-top: 114px;\n  padding-bottom: 50px;\n\n  font-family: 'Poppins';\n  font-size: 28px;\n  line-height: 28px;\n  color: ",";\n\n  @media "," {\n   \n    padding-bottom: 72px;\n    font-size: 32px;\n    line-height: 32px;\n  }\n  @media "," {\n    padding-top: 136px;\n    font-size: 44px;\n    line-height: 44px;\n  } ;\n"])),(function(t){return t.theme.color.mainPageTitle.colorTitle}),A.Z.device.tablet,A.Z.device.desktop),f=o.ZP.img(u||(u=(0,i.Z)(["\n  position: absolute;\n\n  width: 8px;\n  height: 8px;\n  bottom: 105px;\n  right: 236px;\n  @media "," {\n    width: 14px;\n    height: 14px;\n    bottom: 136px;\n    right: 495px;\n  }\n  @media "," {\n    bottom: 145px;\n    right: 993px;\n  } ;\n"])),A.Z.device.tablet,A.Z.device.desktop),v=o.ZP.img(s||(s=(0,i.Z)(["\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  bottom: 43px;\n  right: 112px;\n  @media "," {\n    width: 12px;\n    height: 12px;\n    bottom: 69px;\n    right: 280px;\n  }\n  @media "," {\n    bottom: 65px;\n    right: 517px;\n  } ;\n"])),A.Z.device.tablet,A.Z.device.desktop),h=o.ZP.img(p||(p=(0,i.Z)(["\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  bottom: 73px;\n  right: 7px;\n  color: red;\n  @media "," {\n    width: 14px;\n    height: 14px;\n    bottom: 123px;\n    right: -9px;\n  }\n  @media "," {\n    bottom: 132px;\n    right: 71px;\n  } ;\n"])),A.Z.device.tablet,A.Z.device.desktop),l=r(1644),x=r(6669),m=r(892),b=r(2836),Z=r(184),w=function(t){var e=t.title,r=(0,c.v9)(b.Z.getTheme);return(0,Z.jsxs)(d,{children:[(0,Z.jsx)(g,{children:e}),(0,Z.jsx)(f,{src:l,alt:"background"}),"white"===r?(0,Z.jsx)(v,{src:x,alt:"background"}):(0,Z.jsx)(v,{src:m,alt:"background"}),(0,Z.jsx)(h,{src:l,alt:"background"})]})}},86:function(t,e,r){var n=r(5861),a=r(4687),u=r.n(a),s=r(8372),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("/recipes/main-page?query=".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("/recipes/category/".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("/recipes/".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.post("/subscribe",{email:e});case 3:return r=t.sent,n=r.data,console.log(n),t.abrupt("return",n);case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),A=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("/ownRecipes");case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("/ownRecipes/".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("/recipes/category-list");case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("/ingredients/list");case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("/popular-recipe?query=".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.patch("/favorite/add",e);case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.patch("/favorite/remove",e);case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("/favorite");case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=(0,n.Z)(u().mark((function t(e,r){var n,a,p,c,i=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>2&&void 0!==i[2]?i[2]:6,a=i.length>3&&void 0!==i[3]?i[3]:1,t.prev=2,t.next=5,s.Z.get("/search?page=".concat(a,"&limit=").concat(n,"&query=").concat(r,"&type=").concat(e));case 5:return p=t.sent,c=p.data,t.abrupt("return",c);case 10:return t.prev=10,t.t0=t.catch(2),t.abrupt("return",t.t0.response.data.message);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,r){return t.apply(this,arguments)}}(),b=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("/shopping-list");case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),Z=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.patch("/shopping-list/add",e);case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.patch("/shopping-list/remove",e);case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.post("/ownRecipes",e,{headers:{"Content-type":"multipart/form-data"}});case 3:return r=t.sent,t.abrupt("return",r.status);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0.response.data.message),t.abrupt("return",t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),y={queryRecipeMinePage:p,queryRecipeCategori:c,queryRecipeId:i,querySubscribe:o,queryOwnRecipes:A,queryOwnRecipesDelete:d,queryCategoryList:g,querySearch:m,queryAllIngredients:f,queryPopular:v,queryAddFavorite:h,queryRemoveFavorite:l,queryAllFavorite:x,queryShoppingList:b,queryAddShoppingList:Z,queryRemoveShoppingList:w,queryAddRecipe:k};e.Z=y},6669:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEeSURBVHgBpZI9TsNAEIVnNsQyqZYNRohqKZAiKh8hZUqOgE+QdJyBDk4QSkpuQI6QjiIgli4SEmzFXywPM45ifmJLtvKk1epp9e2b2R2ADYRVB9ZarYLOEAhOxRLAlGCRuNlsWgn/QDgCIP3v2GeLt0PnnBfT+g2ZvYMzVME12wGvsKSgEFX78/XleVIk26PjWAHeliSVqUhX4hgc1wRFWm11RksuF8XQRAhD2fKedTc64fr3G+Ch6UZPOWzM7jYgDhrA/IOklw9mY63aX49SRJML8mTv5x87JuJ06NcFiWiiViZLgwu5pybqKKWkGJKa6Z6bPc/S98S5+/mf8azunRxDlwxdrUZTtD7bvZ7FtDVGpL70RQy5h7ubsjK+ATC4aM2zczIJAAAAAElFTkSuQmCC"},1644:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFVSURBVHgBrZNPToNAFIffgykmtguOQE9gTbRxWW+gK8OK9gTVjaar4opENu0Jyo7YjUeQtbrAE+gRurA1aQfGGSp/KtIK8VsQmLx885v3GIB/AncVmJOWWm8ofWTskgGqgMyjdNUb6P57to4UCSy3pRGiGJGAgcriPRl2iKw88LfDrYks96hTq8kGC1kXtkCD8HSgv3i5REJACA7FjlwCu4hqAbyNRHfT4y4CTqAk2VTS2hbZS/OdChIRR4Mq8DaIlqQiRA8qIstSP1KIhy2ssvQIFaHBspmM356236DiEfmQb6X0KxxDRfhPqyYiskcd3r0ZVIGBn4iuzv0Zn0LpVOJY1/qzI2UXibIc/SUV8hoW4pgGUvPm4slcr/3Avm+bfHVYKOCp54v9kdnzNjbM3X6Riq4UAzITjAUfi3pOkNb8guWeaATpGRL5gNHgdf7ZcIoEMV8FmYW3KddSjAAAAABJRU5ErkJggg=="},892:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADsSURBVHgBlVLtDYIwEL2WQMK/biCO4Aa4gU4gI7gBruAE6gZuUEZwA9gA/hEgpL4SSpCgti+5pF/v3l3fEf2BUkogInJBXddR13Vp27YlQiHypmkOP0kgxHh0HwnLKHVS85bPSbiUKFEyxk5fcgvOeWI2bCwx8TzvRnaofN/fQqAalJEtJXsIVHielHU/5IZB3fSckRsGddNzjJ4luaFgZgV7cnxCRPaoJqtg0ZXc8GQzsoDXOZbCgvjq+/44KWvfLNQzkPZBEOzCMCw+brS67n1lLKX+1GUmtjzQs4uhuaCSDbYFlB5QydbKeAMNkKRi7BdJKAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=3.1106a521.chunk.js.map