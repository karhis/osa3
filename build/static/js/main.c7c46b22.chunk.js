(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(2),u=t.n(c),a=t(15),o=t.n(a),r=(t(20),t(6)),i=t(3),s=t(4),l=t.n(s),d="/api/persons",j=function(){return l.a.get(d).then((function(e){return e.data}))},b=function(e){return l.a.post(d,e).then((function(e){return e.data}))},f=function(e){return l.a.put("".concat(d,"/").concat(e.id),e).then((function(e){return e.data}))},h=function(e){return l.a.delete("".concat(d,"/").concat(e)).catch((function(e){console.log("error")})).then((function(e){return e.data}))},m=t(0),O=function(e){var n=e.message,t=e.boolean;return null===n?null:t?Object(m.jsx)("div",{className:"success",children:n}):Object(m.jsx)("div",{className:"error",children:n})},v=function(e){var n=e.addName,t=e.newName,c=e.handleNameAdd,u=e.newNumber,a=e.handleNumberAdd;return Object(m.jsxs)("form",{onSubmit:n,children:[Object(m.jsxs)("div",{children:["name: ",Object(m.jsx)("input",{value:t,onChange:c})]}),Object(m.jsxs)("div",{children:["number: ",Object(m.jsx)("input",{value:u,onChange:a})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"add"})})]})},x=function(e){var n=e.newQuery,t=e.handleQuery;return Object(m.jsx)("form",{children:Object(m.jsxs)("div",{children:["filter to show ",Object(m.jsx)("input",{value:n,onChange:t})]})})},p=function(e){var n=e.parts,t=e.removePerson;return Object(m.jsxs)("p",{children:[n.name," ",n.number," ",Object(m.jsx)("button",{onClick:t(n),children:"delete"})]})},g=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],u=n[1],a=Object(c.useState)(""),o=Object(i.a)(a,2),s=o[0],l=o[1],d=Object(c.useState)(""),g=Object(i.a)(d,2),w=g[0],N=g[1],S=Object(c.useState)(""),y=Object(i.a)(S,2),C=y[0],A=y[1],T=Object(c.useState)(!0),k=Object(i.a)(T,2),P=k[0],F=k[1],L=Object(c.useState)(null),Q=Object(i.a)(L,2),B=Q[0],D=Q[1],E=Object(c.useState)(null),I=Object(i.a)(E,2),J=I[0],M=I[1];Object(c.useEffect)((function(){j().then((function(e){u(e)}))}),[]);var R=function(e){return function(n){window.confirm("Are you sure you want to delete ".concat(e.name,"?"))&&h(e.id).then((function(n){u((function(n){return n.filter((function(n){return n.name!==e.name}))})),M("Removed ".concat(e.name)),setTimeout((function(){M(null)}),5e3)}))}};function U(e,n){return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())}))}var q=P?t:U(t,C);return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsx)(O,{message:B,boolean:!1}),Object(m.jsx)(O,{message:J,boolean:!0}),Object(m.jsx)(x,{newQuery:C,handleQuery:function(e){console.log(e.target.value),A(e.target.value),U(t,C)&&F(!1)}}),Object(m.jsx)("h2",{children:"add a new"}),Object(m.jsx)(v,{addName:function(e){e.preventDefault();var n={name:s,number:w};if(t.some((function(e){return e.name.includes(s)}))){if(window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))){var c=t.find((function(e){return e.name===s})),a=Object(r.a)(Object(r.a)({},c),{},{number:w});f(a).then((function(e){u((function(n){return n.map((function(n){return n.name!==s?n:e}))})),M("Updated ".concat(s)),setTimeout((function(){M(null)}),5e3)})).catch((function(e){D(e),setTimeout((function(){D(null)}),5e3)}))}}else b(n).then((function(e){u(t.concat(e)),M("Added ".concat(s)),setTimeout((function(){M(null)}),5e3)}));l(""),N("")},newName:s,handleNameAdd:function(e){console.log(e.target.value),l(e.target.value)},newNumber:w,handleNumberAdd:function(e){console.log(e.target.value),N(e.target.value)}}),Object(m.jsx)("h2",{children:"Numbers"}),q.map((function(e){return Object(m.jsx)(p,{parts:e,removePerson:R},e.id)}))]})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,c=n.getFID,u=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),c(e),u(e),a(e),o(e)}))};o.a.render(Object(m.jsx)(u.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),w()}},[[40,1,2]]]);
//# sourceMappingURL=main.c7c46b22.chunk.js.map