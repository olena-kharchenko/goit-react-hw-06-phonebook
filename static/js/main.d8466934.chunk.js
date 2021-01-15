(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={form:"Form_form__2yJcn",input:"Form_input__3z9gK",button:"Form_button__Xazgn",buttonWrapper:"Form_buttonWrapper__tTWUp"}},19:function(t,e,n){t.exports={section:"Section_section__mLW2N",title:"Section_title__XsPoA"}},20:function(t,e,n){t.exports={filter:"Filter_filter__1EQvS",input:"Filter_input__2MvRe"}},29:function(t,e,n){t.exports={container:"Container_container__1Wq9A"}},52:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n.n(a),o=n(14),i=n.n(o),s=n(31),u=n(5),l=n(6),b=n(27),j=n(9),d={ADD:"phonebook/add",DELETE:"phonebook/delete",OVERWRITE:"phonebook/overwrite",CHANGE_FILTER:"phonebook/changeFilter"},m=[{id:"id-1",name:"Elon Mask",number:"10664888778"},{id:"id-2",name:"Lena Kharchenko",number:"380664969795"},{id:"id-3",name:"Bill Gates",number:"10662475771"},{id:"id-4",name:"Mark Zuckerberg ",number:"10625884318"}],p=Object(l.combineReducers)({items:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;switch(n){case d.ADD:return[c].concat(Object(j.a)(t));case d.DELETE:return t.filter((function(t){return t.id!==c}));case d.OVERWRITE:return Object(j.a)(c);default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;switch(n){case d.CHANGE_FILTER:return c;default:return t}}}),f=Object(l.combineReducers)({contacts:p}),h=Object(l.createStore)(f,Object(b.composeWithDevTools)()),O=n(28),_=n.n(O),v=n(29),x=n.n(v),E=function(t){var e=t.children;return Object(c.jsx)("div",{className:x.a.container,children:e})},g=n(19),N=n.n(g);var C=function(t){var e=t.title,n=t.children;return Object(c.jsxs)("div",{className:N.a.section,children:[Object(c.jsx)("h2",{className:N.a.title,children:e}),n]})},y=n(23),L=n(30),R=n.n(L),k=(n(51),n(12)),D=n.n(k);var F=Object(u.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e,n){return t(function(t,e){return{type:d.ADD,payload:{id:_.a.generate(),name:t,number:e}}}(e,n))}}}))((function(t){var e=t.contacts,n=t.onSubmit,r=Object(a.useState)(""),o=Object(y.a)(r,2),i=o[0],s=o[1],u=Object(a.useState)(""),l=Object(y.a)(u,2),b=l[0],d=l[1];return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s(""),d(""),function(){var t=e.reduce((function(t,e){return[].concat(Object(j.a)(t),[e.name])}),[]),n=e.reduce((function(t,e){return[].concat(Object(j.a)(t),[e.number])}),[]);return t.includes(i)||n.includes(b)?(alert("".concat(i).concat(b," is already in contacts")),!0):""===i||""===b?(alert("Please enter all data"),!0):void 0}()||n(i,b)},className:D.a.form,children:[Object(c.jsxs)("label",{children:["Name",Object(c.jsx)("input",{type:"text",name:"name",value:i,placeholder:"Elon Mask",onChange:function(t){return s(t.currentTarget.value)},className:D.a.input})]}),Object(c.jsxs)("label",{children:["Number",Object(c.jsx)(R.a,{country:"us",value:b,placeholder:"10664888778",onChange:d})]}),Object(c.jsx)("div",{className:D.a.buttonWrapper,children:Object(c.jsx)("button",{type:"submit",className:D.a.button,children:"Add contact"})})]})})),S=n(20),T=n.n(S);var I=Object(u.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t((n=e.target.value,{type:d.CHANGE_FILTER,payload:n}));var n}}}))((function(t){var e=t.value,n=t.onChange;return Object(c.jsxs)("label",{className:T.a.filter,children:["Find contacts by name",Object(c.jsx)("input",{type:"text",value:e,onChange:n,placeholder:"Enter name to search",className:T.a.input})]})})),W=n(7),w=n.n(W);var A=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},G=Object(u.b)((function(t){var e=t.contacts,n=e.items,c=e.filter;return{contacts:A(n,c)}}),(function(t){return{onDeleteContact:function(e){return t({type:d.DELETE,payload:e})}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return console.log(e),Object(c.jsx)("ul",{className:w.a.list,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(c.jsxs)("li",{className:w.a.item,children:[Object(c.jsx)("span",{className:w.a.heart,children:"\u2665"}),Object(c.jsxs)("p",{className:w.a.text,children:[a,": ",r]}),Object(c.jsx)("span",{className:w.a.span}),Object(c.jsx)("button",{type:"button",onClick:function(){return n(e)},className:w.a.button,children:Object(c.jsx)("span",{className:w.a.times,children:"\xd7"})})]},e)}))})}));var M=Object(u.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onFirstRender:function(e){return t({type:d.OVERWRITE,payload:e})}}}))((function(t){var e=t.contacts,n=t.onFirstRender,r=Object(a.useRef)(!0);return Object(a.useEffect)((function(){if(r.current){var t=JSON.parse(localStorage.getItem("contacts"));return t&&n(t),void(r.current=!1)}localStorage.setItem("contacts",JSON.stringify(e))}),[e]),Object(c.jsxs)(E,{children:[Object(c.jsx)(C,{title:"Phonebook",children:Object(c.jsx)(F,{})}),Object(c.jsxs)(C,{title:"Contacts",children:[Object(c.jsx)(I,{}),Object(c.jsx)(G,{})]})]})}));n(52);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(s.a,{children:Object(c.jsx)(u.a,{store:h,children:Object(c.jsx)(M,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={list:"ContactList_list__2PFGY",item:"ContactList_item__1CvXs",text:"ContactList_text__RMh8U",span:"ContactList_span__1aoGD",button:"ContactList_button__2K3Iq",heart:"ContactList_heart__NIgrR",times:"ContactList_times__1frn3"}}},[[56,1,2]]]);
//# sourceMappingURL=main.d8466934.chunk.js.map