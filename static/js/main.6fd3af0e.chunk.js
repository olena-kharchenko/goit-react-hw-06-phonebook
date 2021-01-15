(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={form:"Form_form__2yJcn",input:"Form_input__3z9gK",button:"Form_button__Xazgn",buttonWrapper:"Form_buttonWrapper__tTWUp"}},23:function(t,e,n){t.exports={section:"Section_section__mLW2N",title:"Section_title__XsPoA"}},24:function(t,e,n){t.exports={filter:"Filter_filter__1EQvS",input:"Filter_input__2MvRe"}},34:function(t,e,n){t.exports={container:"Container_container__1Wq9A"}},59:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var c,a=n(1),r=n(0),i=n.n(r),o=n(16),s=n.n(o),l=n(36),u=n(28),b=n(5),j=n(10),d=n(7),m=n(31),O=n.n(m),h=n(8),p=n(32),f=n.n(p),_=n(18),x=n(3),v=n(33),N=n.n(v),g=Object(d.b)("phonebook/add",(function(t,e){return{payload:{id:N.a.generate(),name:t,number:e}}})),k=Object(d.b)("phonebook/delete"),C=Object(d.b)("phonebook/changeFilter"),y=Object(d.c)([{id:"id-1",name:"Elon Mask",number:"10664888778"},{id:"id-2",name:"Lena Kharchenko",number:"380664969795"},{id:"id-3",name:"Bill Gates",number:"10662475771"},{id:"id-4",name:"Mark Zuckerberg ",number:"10625884318"}],(c={},Object(_.a)(c,g,(function(t,e){return[e.payload].concat(Object(j.a)(t))})),Object(_.a)(c,k,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),L=Object(d.c)("",Object(_.a)({},C,(function(t,e){return e.payload}))),F=Object(x.c)({items:y,filter:L}),w=[].concat(Object(j.a)(Object(d.d)({serializableCheck:{ignoredActions:[h.a,h.f,h.b,h.c,h.d,h.e]}})),[O.a]),S={key:"contacts",storage:f.a,blacklist:["filter"]},M=Object(d.a)({reducer:{contacts:Object(h.g)(S,F)},middleware:w,devTools:!1}),W=Object(h.h)(M),E=function(t){return t.contacts.items},A=function(t){return t.contacts.filter},P=function(t){var e=E(t),n=A(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},R=n(34),z=n.n(R),G=function(t){var e=t.children;return Object(a.jsx)("div",{className:z.a.container,children:e})},I=n(23),J=n.n(I);var K=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("div",{className:J.a.section,children:[Object(a.jsx)("h2",{className:J.a.title,children:e}),n]})},T=n(27),X=n(35),q=n.n(X),B=(n(58),n(14)),D=n.n(B);function U(){var t=Object(b.c)(E),e=Object(b.b)(),n=Object(r.useState)(""),c=Object(T.a)(n,2),i=c[0],o=c[1],s=Object(r.useState)(""),l=Object(T.a)(s,2),u=l[0],d=l[1];return Object(a.jsxs)("form",{onSubmit:function(n){n.preventDefault(),o(""),d(""),function(){var e=t.reduce((function(t,e){return[].concat(Object(j.a)(t),[e.name])}),[]),n=t.reduce((function(t,e){return[].concat(Object(j.a)(t),[e.number])}),[]);return e.includes(i)||n.includes(u)?(alert("".concat(i).concat(u," is already in contacts")),!0):""===i||""===u?(alert("Please enter all data"),!0):void 0}()||function(t,n){e(g(t,n))}(i,u)},className:D.a.form,children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)("input",{type:"text",name:"name",value:i,placeholder:"Elon Mask",onChange:function(t){return o(t.currentTarget.value)},className:D.a.input})]}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)(q.a,{country:"us",value:u,placeholder:"10664888778",onChange:d})]}),Object(a.jsx)("div",{className:D.a.buttonWrapper,children:Object(a.jsx)("button",{type:"submit",className:D.a.button,children:"Add contact"})})]})}var Q=n(24),Y=n.n(Q);function Z(){var t=Object(b.c)(A),e=Object(b.b)();return Object(a.jsxs)("label",{className:Y.a.filter,children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:t,onChange:function(t){return e(C(t.target.value))},placeholder:"Enter name to search",className:Y.a.input})]})}var H=n(9),V=n.n(H);function $(){var t=Object(b.c)(P),e=Object(b.b)();return Object(a.jsx)("ul",{className:V.a.list,children:t.map((function(t){var n=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:V.a.item,children:[Object(a.jsx)("span",{className:V.a.heart,children:"\u2665"}),Object(a.jsxs)("p",{className:V.a.text,children:[c,": ",r]}),Object(a.jsx)("span",{className:V.a.span}),Object(a.jsx)("button",{type:"button",onClick:function(){return function(t){return e(k(t))}(n)},className:V.a.button,children:Object(a.jsx)("span",{className:V.a.times,children:"\xd7"})})]},n)}))})}function tt(){Object(b.c)(P),Object(b.b)(),Object(r.useRef)(!0);return Object(a.jsxs)(G,{children:[Object(a.jsx)(K,{title:"Phonebook",children:Object(a.jsx)(U,{})}),Object(a.jsxs)(K,{title:"Contacts",children:[Object(a.jsx)(Z,{}),Object(a.jsx)($,{})]})]})}n(59);s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(b.a,{store:M,children:Object(a.jsx)(u.a,{loading:null,persistor:W,children:Object(a.jsx)(l.a,{children:Object(a.jsx)(tt,{})})})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={list:"ContactList_list__2PFGY",item:"ContactList_item__1CvXs",text:"ContactList_text__RMh8U",span:"ContactList_span__1aoGD",button:"ContactList_button__2K3Iq",heart:"ContactList_heart__NIgrR",times:"ContactList_times__1frn3"}}},[[63,1,2]]]);
//# sourceMappingURL=main.6fd3af0e.chunk.js.map