(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t.n(c),o=t(15),r=t.n(o),u=(t(20),t(6)),i=t(3),s=t(4),l=t.n(s),d="/api/persons",j=function(){return l.a.get(d).then((function(e){return e.data}))},b=function(e){return l.a.post(d,e).then((function(e){return e.data}))},f=function(e){return l.a.put("".concat(d,"/").concat(e.id),e).then((function(e){return e.data}))},m=function(e){return l.a.delete("".concat(d,"/").concat(e)).catch((function(e){console.log("error")})).then((function(e){return e.data}))},h=t(0),O=function(e){var n=e.message,t=e.boolean;return null===n?null:t?Object(h.jsx)("div",{className:"success",children:n}):Object(h.jsx)("div",{className:"error",children:n})},v=function(e){var n=e.addName,t=e.newName,c=e.handleNameAdd,a=e.newNumber,o=e.handleNumberAdd;return Object(h.jsxs)("form",{onSubmit:n,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:t,onChange:c})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:a,onChange:o})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})},x=function(e){var n=e.newQuery,t=e.handleQuery;return Object(h.jsx)("form",{children:Object(h.jsxs)("div",{children:["filter to show ",Object(h.jsx)("input",{value:n,onChange:t})]})})},p=function(e){var n=e.parts,t=e.removePerson;return Object(h.jsxs)("p",{children:[n.name," ",n.number," ",Object(h.jsx)("button",{onClick:t(n),children:"delete"})]})},g=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],o=Object(c.useState)(""),r=Object(i.a)(o,2),s=r[0],l=r[1],d=Object(c.useState)(""),g=Object(i.a)(d,2),w=g[0],N=g[1],y=Object(c.useState)(""),S=Object(i.a)(y,2),C=S[0],A=S[1],T=Object(c.useState)(!0),k=Object(i.a)(T,2),P=k[0],F=k[1],L=Object(c.useState)(null),Q=Object(i.a)(L,2),I=Q[0],B=Q[1],D=Object(c.useState)(null),E=Object(i.a)(D,2),J=E[0],M=E[1];Object(c.useEffect)((function(){j().then((function(e){a(e)}))}),[]);var R=function(e){return function(n){window.confirm("Are you sure you want to delete ".concat(e.name,"?"))&&m(e.id).then((function(n){a((function(n){return n.filter((function(n){return n.name!==e.name}))})),M("Removed ".concat(e.name)),setTimeout((function(){M(null)}),5e3)}))}};function U(e,n){return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())}))}var q=P?t:U(t,C);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(O,{message:I,boolean:!1}),Object(h.jsx)(O,{message:J,boolean:!0}),Object(h.jsx)(x,{newQuery:C,handleQuery:function(e){console.log(e.target.value),A(e.target.value),U(t,C)&&F(!1)}}),Object(h.jsx)("h2",{children:"add a new"}),Object(h.jsx)(v,{addName:function(e){e.preventDefault();var n={name:s,number:w};if(t.some((function(e){return e.name.includes(s)}))){if(window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))){var c=t.find((function(e){return e.name===s})),o=Object(u.a)(Object(u.a)({},c),{},{number:w});f(o).then((function(e){a((function(n){return n.map((function(n){return n.name!==s?n:e}))})),M("Updated ".concat(s)),setTimeout((function(){M(null)}),5e3)})).catch((function(e){B("Information of ".concat(s," has already been removed from server")),setTimeout((function(){B(null)}),5e3)}))}}else b(n).then((function(e){a(t.concat(e)),M("Added ".concat(s)),setTimeout((function(){M(null)}),5e3)}));l(""),N("")},newName:s,handleNameAdd:function(e){console.log(e.target.value),l(e.target.value)},newNumber:w,handleNumberAdd:function(e){console.log(e.target.value),N(e.target.value)}}),Object(h.jsx)("h2",{children:"Numbers"}),q.map((function(e){return Object(h.jsx)(p,{parts:e,removePerson:R},e.id)}))]})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),w()}},[[40,1,2]]]);
//# sourceMappingURL=main.f621a35e.chunk.js.map