(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=(r=n(366))&&r.__esModule?r:{default:r},o=n(144),u=n(143);n(415).polyfill(),a.default.defaults.baseURL=o.prodDomain,a.default.defaults.withCredentials=!0,a.default.interceptors.request.use(function(e){return e.headers=e.headers||{},(0,u.getCookie)("token")&&(e.headers.Authorization="Bearer "+(0,u.getCookie)("token").replace(/(^\")|(\"$)/g,"")),e},function(e){return Promise.reject(e)}),a.default.interceptors.response.use(function(e){return 401===e.status&&((0,u.signOut)(),window.location.pathname="/login"),e},function(e){return Promise.reject(e)}),t.default=a.default},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(408);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var a=n(411);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var o=n(412);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var u=n(98);Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})});var l=n(413);Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})});var i=n(414);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})})},408:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getArticleDetail=t.getCateArticleList=t.getArticleList=t.getTagList=void 0;var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=(r=n(32))&&r.__esModule?r:{default:r},u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(52));t.getTagList=function(){return{type:o.default.TAG_LIST,promise:u.getTagList()}},t.getArticleList=function(){return!(arguments.length>0&&void 0!==arguments[0])||arguments[0],{type:o.default.getArticleList,promise:u.getArticleList()}},t.getCateArticleList=function(){return{type:o.default.getCateArticleList,promise:u.getCateArticleList()}},t.getArticleDetail=function(e){return function(t,n){console.log("getState is what",n());var r=n().auth.toJS();return u.getArticleDetaile(e).then(function(e){return{json:e.data,status:e.statusText}}).then(function(e){var n=e.json,u=(e.status,!1),l=n.data;return r.user&&r.user.likes.map(function(e){e.toString()===l._id&&(u=!0)}),t({type:o.default.ARTICLE_DETAIL_SUCCESS,articleDetail:a({},l,{isLike:u})})}).catch(function(e){return t({type:o.default.ARTICLE_DETAIL_FAILURE})})}}},409:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDetail=t.getCateArticleList=t.getCateBannerData=t.getRecommendData=t.getBannerData=t.getArticleDetail=t.addArticleList=t.localLogin=t.getArticleList=void 0;var r,a=(r=n(142))&&r.__esModule?r:{default:r};t.getArticleList=function(e){return a.default.get("article",{params:e})},t.localLogin=function(e){return a.default.post("auth/local",e)},t.addArticleList=function(e){return a.default.get("article",{params:e})},t.getArticleDetail=function(e){return a.default.get("article",{params:e})},t.getBannerData=function(){return a.default.get("banner")},t.getRecommendData=function(){return a.default.get("recommend")},t.getCateBannerData=function(){return a.default.get("category/cateBanner")},t.getCateArticleList=function(){return a.default.get("category/cateArticle")},t.getDetail=function(){return a.default.get("detail")}},410:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCategories=void 0;var r,a=(r=n(142))&&r.__esModule?r:{default:r};t.getCategories=function(){return a.default.get("getCategories")}},411:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDetail=void 0;var r,a=(r=n(32))&&r.__esModule?r:{default:r},o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(52));t.getDetail=function(){console.log(o);try{console.log(o.getDetail)}catch(e){throw e}return{type:a.default.getDetail,promise:o.getDetail()}}},412:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCommentList=void 0,t.addComment=function(e){return function(t,n){return a.addNewComment(e).then(function(e){return{json:e.data,status:e.statusText}}).then(function(e){var n,a=e.json;return"OK"!==e.status?t((0,o.showMsg)(a.data.error_msg||"添加评论失败")):(t((0,o.showMsg)("添加评论成功","success")),t((n=a.data,{type:r.ADD_COMMENT_SUCCESS,comment:n})))}).catch(function(e){return t((0,o.showMsg)(e.response.data.error_msg||"添加评论失败"))})}},t.addReply=function(e,t){return function(n,u){return a.addNewReply(e,t).then(function(e){return{json:e.data,status:e.statusText}}).then(function(t){var a=t.json;return"OK"!==t.status?n((0,o.showMsg)(a.data.error_msg||"添加回复失败")):(n((0,o.showMsg)("添加回复成功","success")),n(function(e,t){return{type:r.ADD_REPLY_SUCCESS,cid:e,replys:t}}(e,a.data)))}).catch(function(e){return n((0,o.showMsg)(e.response.data.error_msg||"添加回复失败"))})}};var r=u(n(32)),a=u(n(52)),o=n(98);function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.getCommentList=function(e){return{type:r.COMMENT_LIST,promise:a.getCommentList(e)}}},413:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getUserInfo=t.getCaptchaUrl=t.getSnsLogins=void 0,t.localLogin=function(e){return function(t,n){return l.localLogin(e).then(function(e){return{json:e.data,status:e.statusText}}).then(function(e){var n,l=e.json;if("OK"!==e.status)return t(s()),t((0,u.showMsg)(l.data.error_msg||"登录失败"));(0,o.saveCookie)("token",l.token),t(f(l.token)),t((n=l.token,{type:r.LOGIN_SUCCESS,token:n})),t(s()),t((0,u.showMsg)("登录成功,欢迎光临!","success")),t((0,a.push)("/")),window.location.reload()}).catch(function(e){var n=e.response&&e.response.data&&e.response.data.error_msg?e.response.data.error_msg:"登录失败";return t(s()),t((0,u.showMsg)(n))})}},t.logout=function(){return function(e){(0,o.signOut)(),e({type:r.LOGOUT_USER}),window.location.pathname="/"}},t.updateUser=function(e){return function(t,n){return l.mdUser(e).then(function(e){return{json:e.data,status:e.statusText}}).then(function(e){var n,a=e.json;return"OK"!==e.status?t((0,u.showMsg)(a.data&&a.data.error_msg||"更新用户资料失败")):(t((0,u.showMsg)("更新用户资料成功","success")),t((n=a.data,{type:r.UPDATE_USER_SUCCESS,user:n})))}).catch(function(e){return t((0,u.showMsg)(e.response.data.error_msg||"更新用户资料失败"))})}};var r=c(n(32)),a=n(367),o=n(143),u=n(98),l=c(n(52)),i=n(144);function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.getSnsLogins=function(){return{type:r.GET_SNSLOGINS,promise:l.getSnsLogins()}};var s=t.getCaptchaUrl=function(){return{type:r.GET_CAPTCHAURL,captchaUrl:i.API_ROOT+"users/getCaptcha?"+Math.random()}},f=t.getUserInfo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,o.getCookie)("token");return{type:r.GET_USERINFO,promise:l.getMe({headers:{Authorization:"Bearer "+e}})}}},414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCategories=void 0;var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(52)),o=(r=n(32))&&r.__esModule?r:{default:r};t.getCategories=function(){return{type:o.default.getCategories,promise:a.getCategories()}}},416:function(e,t){},52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(409);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var a=n(410);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})})},750:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),i=m(l),c=m(n(99)),s=n(31),f=n(33),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(34)),p=m(n(751)),g=m(n(0));function m(e){return e&&e.__esModule?e:{default:e}}var y=(a=r=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),u(t,[{key:"componentDidMount",value:function(){this.getCateBannerData()}},{key:"getCateBannerData",value:function(){this.props.actions.getCateBannerData()}},{key:"render",value:function(){var e=this.props.cateBannerData;return i.default.createElement(c.default,o({className:p.default.cateBanner},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),e.map(function(e,t){return i.default.createElement("li",{key:t},i.default.createElement("a",{href:e.url},i.default.createElement("div",{className:p.default.cateText},i.default.createElement("div",{className:"cateTextInner"},i.default.createElement("h3",null,e.title),i.default.createElement("p",null,e.abstract),i.default.createElement("ul",null,i.default.createElement("li",null,e.author+"."),i.default.createElement("li",null,e.click)))),i.default.createElement("img",{src:e.srcUrl,alt:""})))}))}}]),t}(),r.propTypes={cateBannerData:g.default.array.isRequired,actions:g.default.object.isRequired},a);t.default=(0,f.connect)(function(e){return{cateBannerData:e.cateBannerData.toJS()}},function(e){return{actions:(0,s.bindActionCreators)(d,e)}})(y)},751:function(e,t){e.exports={cateBanner:"cateBanner","slick-prev":"slick-prev","slick-next":"slick-next","slick-dots":"slick-dots",cateText:"cateText",cateTextInner:"cateTextInner"}},752:function(e,t){e.exports={container:"container",cateSubHead:"cateSubHead",body:"body",leftColumn:"leftColumn",rightColumn:"rightColumn"}},753:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),l=p(u),i=p(n(754)),c=p(n(0)),s=n(33),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(34)),d=n(31);function p(e){return e&&e.__esModule?e:{default:e}}var g=(a=r=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"componentDidMount",value:function(){this.getCateArticleList()}},{key:"getCateArticleList",value:function(){this.props.actions.getCateArticleList()}},{key:"render",value:function(){var e=this.props.cateArticleList;return l.default.createElement("div",{className:i.default.cateArticle},l.default.createElement("div",{className:i.default.cateArticleHead},l.default.createElement("div",null,l.default.createElement("span",null,"产品经理"))),l.default.createElement("div",{className:i.default.cateArticleList},e.map(function(e,t){return l.default.createElement("article",{key:t,className:i.default.articleWrap},l.default.createElement("a",{className:i.default.articleImg},l.default.createElement("img",{src:e.img,alt:""})),l.default.createElement("div",{className:i.default.articlePanel},l.default.createElement("a",{className:i.default.title,href:""},e.title),l.default.createElement("p",null,e.abstract),l.default.createElement("div",{className:i.default.soMuch},l.default.createElement("ul",{className:i.default.authorWrap},l.default.createElement("li",null,l.default.createElement("a",{href:""},l.default.createElement("img",{src:e.avatar,alt:""}))),l.default.createElement("li",null,l.default.createElement("a",{href:""},e.author)),l.default.createElement("li",null,"日期")),l.default.createElement("ul",{className:i.default.count},l.default.createElement("li",null,"点击"),l.default.createElement("li",null,"点击"),l.default.createElement("li",null,"点击")))))})),l.default.createElement("div",{ref:"tag"}))}}]),t}(),r.propTypes={cateArticleList:c.default.array.isRequired,actions:c.default.object.isRequired},a);t.default=(0,s.connect)(function(e){return{cateArticleList:e.cateArticleList.toJS()}},function(e){return{actions:(0,d.bindActionCreators)(f,e)}})(g)},754:function(e,t){e.exports={cateArticle:"cateArticle",cateArticleHead:"cateArticleHead",cateArticleList:"cateArticleList",articleWrap:"articleWrap",articleImg:"articleImg",articlePanel:"articlePanel",title:"title",soMuch:"soMuch",authorWrap:"authorWrap",count:"count"}},811:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=c(a),u=c(n(750)),l=c(n(752)),i=c(n(753));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentDidMount",value:function(){console.log(777)}},{key:"render",value:function(){return o.default.createElement("div",{className:l.default.container},o.default.createElement("div",{className:l.default.cateSubHead},o.default.createElement(u.default,null)),o.default.createElement("div",{className:l.default.body},o.default.createElement("div",{className:l.default.leftColumn},o.default.createElement(i.default,null))," ",o.default.createElement("div",{className:l.default.rightColumn},o.default.createElement("div",{className:"sidebar"})," ")," "))}}]),t}();t.default=s},98:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getIndexImage=t.getRecommendData=t.getCateBannerData=t.getBannerData=t.getApps=t.hideMsg=t.showMsg=t.changeStyleMode=void 0;var r,a=(r=n(32))&&r.__esModule?r:{default:r},o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(52));t.changeStyleMode=function(){return{type:a.default.CHANGE_STYLE_MODE}},t.showMsg=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error";return{type:a.default.SHOW_MSG,message:{content:e,type:t}}},t.hideMsg=function(){return{type:a.default.HIDE_MSG}},t.getApps=function(){return{type:a.default.GET_APPS,promise:o.getApps()}},t.getBannerData=function(){return{type:"GET_BANNER_DATA",promise:o.getBannerData()}},t.getCateBannerData=function(){return{type:a.default.getCateBannerData,promise:o.getCateBannerData()}},t.getRecommendData=function(){return{type:a.default.getRecommendData,promise:o.getRecommendData()}},t.getIndexImage=function(){return{type:a.default.GET_INDEX_IMG,promise:o.getIndexImage()}}}}]);