(this["webpackJsonpmagic-maze"]=this["webpackJsonpmagic-maze"]||[]).push([[0],{34:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n.n(r),c=n(27),s=n.n(c),u=(n(34),n(6)),i=n(0),o=n.n(i),l=n(1),p=n(12),j=n(2),b=new p.a({id:"application-0-exwhb"});var d=function(){var e=a.a.useState("signIn"),t=Object(u.a)(e,2),n=t[0],r=t[1],c=a.a.useState(""),s=Object(u.a)(c,2),i=s[0],d=s[1],h=a.a.useState(""),f=Object(u.a)(h,2),g=f[0],x=f[1],v=a.a.useState(""),O=Object(u.a)(v,2),m=O[0],w=O[1];a.a.useEffect((function(){d(""),x(""),w("")}),[n]);var y=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.logIn(p.b.emailPassword(g,m));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.emailPasswordAuth.registerUser(g,m);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:["signIn"===n?Object(j.jsxs)("form",{className:"signInForm",children:[Object(j.jsx)("input",{type:"text",placeholder:"email",value:g,onChange:function(e){return x(e.target.value)}}),Object(j.jsx)("input",{type:"password",placeholder:"password",value:m,onChange:function(e){return w(e.target.value)}}),Object(j.jsx)("button",{type:"submit",onClick:y,children:"Sign In"})]}):Object(j.jsxs)("form",{className:"signUpForm",children:[Object(j.jsx)("input",{type:"username",placeholder:"username",value:i,onChange:function(e){return d(e.target.value)}}),Object(j.jsx)("input",{type:"text",placeholder:"email",value:g,onChange:function(e){return x(e.target.value)}}),Object(j.jsx)("input",{type:"password",placeholder:"password",value:m,onChange:function(e){return w(e.target.value)}}),Object(j.jsx)("button",{type:"submit",onClick:C,children:"Sign up"})]}),Object(j.jsx)("button",{onClick:function(e){r((function(e){return"signIn"===e?"signUp":"signIn"}))},children:"signIn"===n?"Go to sign up":"Go to sign in"})]})},h=(n(42),new p.a({id:"application-0-exwhb"}));function f(e){var t=e.user;return Object(j.jsx)("div",{children:Object(j.jsxs)("h1",{children:["Logged in with anonymous id: ",t.id]})})}function g(e){var t=e.setUser,n=function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.logIn(p.b.anonymous());case 2:n=e.sent,t(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("button",{onClick:n,children:"Log In"})}function x(e){e.setUser;var t=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.currentUser.logOut();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("button",{onClick:t,children:"Log out"})}var v=function(){var e=a.a.useState(h.currentUser),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"App-header",children:[Object(j.jsx)("h1",{children:"Magic Maze"}),Object(j.jsx)("div",{children:"A game created by CSCI3100 Project Group E3"}),n?Object(j.jsx)(f,{user:n}):Object(j.jsx)(g,{setUser:r})]}),Object(j.jsx)(x,{}),Object(j.jsx)(d,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.8d8ecd5b.chunk.js.map