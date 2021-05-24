(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,c){},27:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),l=c(19),a=c.n(l),o=(c(25),c(26),c(27),c(3)),i=c(5),r=c(4),j=c.n(r),p=c(0),b=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){j.a.get("http://localhost:8000/api/pets").then((function(e){console.log(e),s(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Pet Shelter"}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"These Pets Are Looking For A Good Home :"}),Object(p.jsx)("br",{}),c.map((function(e,t){return Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsxs)("h4",{className:"card-title",children:["Name : ",e.petName]}),Object(p.jsxs)("h6",{className:"card-subtitle mb-2 text-muted",children:["Pet Type : ",e.petType]}),Object(p.jsx)("p",{children:e.petDescription}),Object(p.jsx)(o.a,{className:"btn btn-dark mr-2",to:"/pets/edit/".concat(e._id),children:"Edit"}),Object(p.jsx)(o.a,{className:"btn btn-dark ml-2",to:"/pets/details/".concat(e._id),children:"Details"})]})},t)}))]})},h=c(6),d=c(8),m=function(){var e=Object(n.useState)({petName:"",petType:"",petDescription:"",petSkillOne:"",petSkillTwo:"",petSkillthree:"",petLikes:0}),t=Object(i.a)(e,2),c=t[0],s=t[1],l=Object(n.useState)({}),a=Object(i.a)(l,2),r=a[0],b=a[1],m=function(e){s(Object(d.a)(Object(d.a)({},c),{},Object(h.a)({},e.target.name,e.target.value)))};return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{children:"Pet Shelter"}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"Know A Pet Needing A Good Home?"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j.a.post("http://localhost:8000/api/pets/create",c).then((function(e){console.log(e),e.data.results?Object(o.c)("/"):(console.log(e.data),b(e.data))})).catch((function(e){return console.log(e)}))},children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"",children:"Pet Name : "}),Object(p.jsx)("input",{onChange:m,type:"text",name:"petName",className:"form-control"}),Object(p.jsx)("p",{className:"text-danger",children:r.petName?r.petName.message:""})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"",children:"Pet Type : "}),Object(p.jsx)("input",{onChange:m,type:"text",name:"petType",className:"form-control"}),Object(p.jsx)("p",{className:"text-danger",children:r.petType?r.petType.message:""})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"",children:"Pet Description : "}),Object(p.jsx)("input",{onChange:m,type:"text",name:"petDescription",className:"form-control"}),Object(p.jsx)("p",{className:"text-danger",children:r.petDescription?r.petDescription.message:""})]}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"Pet Skills (optional) :"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"",children:"Pet Skill One : "}),Object(p.jsx)("input",{onChange:m,type:"text",name:"petSkillOne",className:"form-control"})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"",children:"Pet Skill Two : "}),Object(p.jsx)("input",{onChange:m,type:"text",name:"petSkillTwo",className:"form-control"})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"",children:"Pet Skill Three : "}),Object(p.jsx)("input",{onChange:m,type:"text",name:"petSkillThree",className:"form-control"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"submit",value:"Add Pet",className:"btn btn-primary"})]})]})},O=function(e){var t=Object(n.useState)({petName:"",petType:"",petDescription:"",petSkillOne:"",petSkillTwo:"",petSkillthree:"",petLikes:0}),c=Object(i.a)(t,2),s=c[0],l=c[1],a=Object(n.useState)({}),r=Object(i.a)(a,2),b=r[0],m=r[1];Object(n.useEffect)((function(){j.a.get("http://localhost:8000/api/pets/".concat(e.id)).then((function(e){console.log(e),l(e.data.results)})).catch((function(e){return console.log(e)}))}),[e]);var O=function(e){l(Object(d.a)(Object(d.a)({},s),{},Object(h.a)({},e.target.name,e.target.value)))};return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{children:"Pet Shelter"}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"Know A Pet Needing A Good Home?"}),Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j.a.put("http://localhost:8000/api/pets/update/".concat(e.id),s).then((function(e){console.log(e),e.data.results?Object(o.c)("/"):(console.log(e.data),m(e.data))})).catch((function(e){return console.log(e)}))},children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"",children:"Pet Name : "}),Object(p.jsx)("input",{onChange:O,type:"text",name:"petName",className:"form-control",value:s.petName}),Object(p.jsx)("p",{className:"text-danger",children:b.petName?b.petName.message:""})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"",children:"Pet Type : "}),Object(p.jsx)("input",{onChange:O,type:"text",name:"petType",className:"form-control",value:s.petType}),Object(p.jsx)("p",{className:"text-danger",children:b.petType?b.petType.message:""})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"",children:"Pet Description : "}),Object(p.jsx)("input",{onChange:O,type:"text",name:"petDescription",className:"form-control",value:s.petDescription}),Object(p.jsx)("p",{className:"text-danger",children:b.petDescription?b.petDescription.message:""})]}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"Pet Skills (optional) :"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"",children:"Pet Skill One : "}),Object(p.jsx)("input",{onChange:O,type:"text",name:"petSkillOne",className:"form-control",value:s.petSkillOne})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"",children:"Pet Skill Two : "}),Object(p.jsx)("input",{onChange:O,type:"text",name:"petSkillTwo",className:"form-control",value:s.petSkillTwo})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"",children:"Pet Skill Three : "}),Object(p.jsx)("input",{onChange:O,type:"text",name:"petSkillThree",className:"form-control",value:s.petSkillthree})]}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"submit",value:"Update Pet",className:"btn btn-primary"})]})]})},u=function(e){var t=Object(n.useState)({}),c=Object(i.a)(t,2),s=c[0],l=c[1],a=Object(n.useState)(0),r=Object(i.a)(a,2),b=r[0],h=r[1];Object(n.useEffect)((function(){j.a.get("http://localhost:8000/api/pets/".concat(e.id)).then((function(e){console.log(e),l(e.data.results)})).catch((function(e){return console.log(e)}))}),[e]);return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{children:s.petName}),Object(p.jsx)("br",{}),Object(p.jsxs)("h3",{children:["Pet Type : ",s.petType]}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:["Pet Description : ",s.petDescription]}),Object(p.jsx)("p",{children:"Pet Skills (optional) : "}),Object(p.jsx)("p",{children:s.petSkillOne}),Object(p.jsx)("p",{children:s.petSkillTwo}),Object(p.jsx)("p",{children:s.petSkillThree}),Object(p.jsx)("br",{}),Object(p.jsxs)("h5",{children:["Likes : ",s.petLikes]}),Object(p.jsx)("br",{}),Object(p.jsxs)("button",{onClick:function(e){return t=s,h(b+1),t.petLikes+=1,void j.a.put("http://localhost:8000/api/pets/update/".concat(t._id),t).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}));var t},className:"btn btn-dark mr-2",children:["Like ",s.petName]}),Object(p.jsx)("button",{onClick:function(){j.a.delete("http://localhost:8000/api/pets/delete/".concat(e.id)).then((function(e){console.log(e),Object(o.c)("/")})).catch((function(e){return console.log(e)}))},className:"btn btn-danger ml-2",children:"Adopt Pet"})]})};var x=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"links",children:[Object(p.jsx)(o.a,{className:"btn btn-primary",to:"/",children:"Home"}),Object(p.jsx)(o.a,{className:"btn btn-primary",to:"/pets/new",children:"New Pet"})]}),Object(p.jsxs)(o.b,{children:[Object(p.jsx)(b,{path:"/"}),Object(p.jsx)(m,{path:"/pets/new"}),Object(p.jsx)(O,{path:"/pets/edit/:id"}),Object(p.jsx)(u,{path:"/pets/details/:id"})]})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,l=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),l(e),a(e)}))};a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),f()}},[[53,1,2]]]);
//# sourceMappingURL=main.1814ef2b.chunk.js.map