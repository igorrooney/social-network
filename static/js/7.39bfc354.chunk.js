(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[7],{229:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return d}));var r=n(230),a=n(0),c=n.n(a),u=n(233),o=n.n(u),i=n(109),l=function(e){e.input;var t=e.meta,n=Object(r.a)(e,["input","meta"]),a=t.touched&&t.error;return c.a.createElement("div",{className:a?o.a.error:""},c.a.createElement("div",null,n.children),a&&c.a.createElement("span",{className:o.a.errorMessage},t.error))},s=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return c.a.createElement(l,e,c.a.createElement("input",Object.assign({},t,n)))},m=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return c.a.createElement(l,e,c.a.createElement("textarea",Object.assign({},t,n)))},d=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",u)}},231:function(e,t,n){"use strict";n.d(t,"k",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"j",(function(){return c})),n.d(t,"h",(function(){return u})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"g",(function(){return s})),n.d(t,"i",(function(){return m})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return f}));var r=function(e){return e.usersPage.users},a=function(e){return e.usersPage.currentPage},c=function(e){return e.usersPage.totalCount},u=function(e){return e.usersPage.pageSize},o=function(e){return e.usersPage.isFetching},i=function(e){return e.usersPage.isFetching},l=function(e){return e.usersPage.followingInProgress},s=function(e){return e.profilePage.isLoading},m=function(e){return e.usersPage.portion},d=function(e){return e.profilePage.editMode},f=function(e){return e.auth.captcha}},232:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c}));var r=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}},a=function(e){return e?void 0:"Field is required"},c=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0}},233:function(e,t,n){e.exports={error:"FormsControl_error__3Xx8o",errorMessage:"FormsControl_errorMessage__Jo2_I"}},302:function(e,t,n){e.exports={error:"login_error__wvio1"}},306:function(e,t,n){"use strict";n.r(t);var r=n(17),a=n(0),c=n.n(a),u=n(109),o=n(110),i=n(229),l=n(232),s=n(302),m=n.n(s),d=function(e){var t=e.handleSubmit;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"email"},"Login"),c.a.createElement(u.a,{name:"email",component:i.a,type:"text",validate:[l.c,l.a]})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement(u.a,{name:"password",component:i.a,type:"password",validate:[l.c]})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"rememberMe"},"Remember me"),c.a.createElement(u.a,{name:"rememberMe",component:i.a,type:"checkbox"})),e.captcha&&c.a.createElement("div",null,c.a.createElement("img",{src:e.captcha})," ",Object(i.c)("Symbols from image","captcha",[l.c],i.a)),c.a.createElement("div",{className:m.a.error},e.error),c.a.createElement("div",null,c.a.createElement("button",null,"Login")))},f=d=Object(o.a)({form:"loginForm"})(d),p=n(23),g=function(e){return e.isAuth?c.a.createElement(p.a,{to:"/profile"}):c.a.createElement("div",null,c.a.createElement("h1",null,"Login"),c.a.createElement(f,{onSubmit:function(t){var n=t.email,r=t.password,a=t.rememberMe,c=t.captcha;e.login(n,r,a,c)},captcha:e.captcha}))},h=n(20),b=n(27),v=n(231);t.default=Object(r.d)(Object(h.b)((function(e){return{isAuth:e.auth.isAuth,captcha:Object(v.a)(e)}}),{login:b.d}))(g)}}]);
//# sourceMappingURL=7.39bfc354.chunk.js.map