(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{17:function(e,t,n){e.exports={item:"TodoItem_item__2D0fx",checkbox:"TodoItem_checkbox__1uLKZ",textInput:"TodoItem_textInput__ZXG5z"}},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),o=n(24),i=n.n(o),s=n(8),r=n(22),l=n(11),j=n(9),d=n(16),u=n(17),b=n.n(u),p=n(1),h=function(e){var t=e.todo,n=t.completed,a=t.id,o=t.title,i=Object(c.useState)(!1),s=Object(j.a)(i,2),r=s[0],l=s[1],u={},h={};return r?u.display="none":h.display="none",Object(p.jsxs)("li",{className:b.a.item,children:[Object(p.jsxs)("div",{onDoubleClick:function(){l(!0)},style:u,children:[Object(p.jsx)("input",{type:"checkbox",className:b.a.checkbox,checked:n,onChange:function(){return e.handleChangeProps(a)}}),Object(p.jsx)("button",{onClick:function(){return e.deleteTodoProps(a)},children:Object(p.jsx)(d.a,{color:"orangered",size:"23px"})}),Object(p.jsx)("span",{style:n?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:void 0,children:o})]}),Object(p.jsx)("input",{type:"text",className:b.a.textInput,style:h,value:o,onChange:function(t){e.setUpdateProps(t.target.value,a)},onKeyDown:function(e){"Enter"===e.key&&l(!1)}})]})},O=function(e){return Object(p.jsx)("ul",{children:e.todos.map((function(t){return Object(p.jsx)(h,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdateProps:e.setUpdateProps},t.id)}))})},x=function(){return Object(p.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(p.jsx)("h1",{style:{fontSize:"6rem",fontWeight:600,marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},m=n(15),f=function(e){var t=Object(c.useState)({title:""}),n=Object(j.a)(t,2),a=n[0],o=n[1];return Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a.title.trim()?(e.addTodoProps(a.title),o({title:""})):alert("Nie wpisa\u0142e\u015b opisu zadania")},className:"form-container",children:[Object(p.jsx)("input",{type:"text",className:"input-text",placeholder:"Dodaj zadanie...",value:a.title,onChange:function(e){o(Object(l.a)(Object(l.a)({},a),{},Object(m.a)({},e.target.name,e.target.value)))},name:"title"}),Object(p.jsx)("button",{className:"input-submit",children:Object(p.jsx)(d.b,{className:"submit-icon"})})]})},g=n(42),z=n(3),k=function(){var e=Object(z.f)().slug,t=[{slug:"about-app",title:"O aplikacji",description:"W tej aplikacji mo\u017cesz dodawa\u0107, usuwa\u0107, zapisywa\u0107 i edytowa\u0107 elementy. Aby edytowa\u0107 elementy, po prostu kliknij je dwukrotnie. Po zako\u0144czeniu naci\u015bnij klawisz Enter, aby zapisa\u0107. Ta aplikacja zachowa Twoje dane w lokalnej pami\u0119ci przegl\u0105darki. Niezale\u017cnie od tego, czy prze\u0142adujesz, zamkniesz aplikacj\u0119, czy j\u0105 ponownie otworzysz, nadal masz dost\u0119p do swoich zada\u0144 do wykonania."},{slug:"about-author",title:"O autorze",description:"Ta aplikacja zosta\u0142a stworzona przez Kamila Juchniewicz, programist\u0119 m.in. webowego, IOT, Data Mining i specjalist\u0119 ERP."}].find((function(t){return t.slug===e})),n=t.title,c=t.description;return Object(p.jsxs)("div",{className:"main__content",children:[Object(p.jsx)("h1",{children:n}),Object(p.jsx)("p",{children:c})]})},y=function(){var e=Object(z.g)(),t=e.url,n=e.path;return Object(p.jsxs)("div",{className:"about__content",children:[Object(p.jsxs)("ul",{className:"about__list",children:[Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"".concat(t,"/about-app"),children:"O nas Aplikacja"})}),Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"".concat(t,"/about-author"),children:"O nas Autor"})})]}),Object(p.jsx)(z.a,{path:"".concat(n,"/:slug"),children:Object(p.jsx)(k,{})})]})},w=function(){return Object(p.jsx)("h3",{children:"Brak dopasowania dla tej strony"})},v=n(26),N=n(27),P=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(p.jsxs)("nav",{className:"navBar",children:[Object(p.jsx)("button",{onClick:function(){a(!n)},children:n?Object(p.jsx)(v.a,{color:"#fff",size:"40px"}):Object(p.jsx)(N.a,{color:"#7b7b7b",size:"40px"})}),Object(p.jsx)("ul",{className:"menuNav ".concat(n?" showMenu":""),children:[{id:1,path:"/",text:"Domowa"},{id:2,path:"/about",text:"O nas"}].map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(s.c,{to:e.path,activeClassName:"active-link",onClick:function(){a(!1)},exact:!0,children:e.text})},e.id)}))})]})},_=function(){var e=Object(c.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(j.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){0===n.length&&fetch("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return e.json()})).then((function(e){return a(e)})),localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(P,{}),Object(p.jsxs)(z.c,{children:[Object(p.jsx)(z.a,{path:"/",exact:!0,children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"inner",children:[Object(p.jsx)(x,{}),Object(p.jsx)(f,{addTodoProps:function(e){var t={userId:1,id:Object(g.a)(),title:e,completed:!1};a([].concat(Object(r.a)(n),[t]))}}),Object(p.jsx)(O,{todos:n,handleChangeProps:function(e){a((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){a(Object(r.a)(n.filter((function(t){return t.id!==e}))))},setUpdateProps:function(e,t){a(n.map((function(n){return n.id===t&&(n.title=e),n})))}})]})})}),Object(p.jsx)(z.a,{path:"/about",children:Object(p.jsx)(y,{})}),Object(p.jsx)(z.a,{path:"*",children:Object(p.jsx)(w,{})})]})]})};n(38),n(39);i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(s.a,{children:Object(p.jsx)(_,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.4a3bb4eb.chunk.js.map