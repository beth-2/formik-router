(this["webpackJsonpformik-router"]=this["webpackJsonpformik-router"]||[]).push([[0],{1729:function(e,n,t){"use strict";t.r(n);t(0);var i,a,o,r,c,s=t(9),l=t.n(s),b=t(74),j=t.n(b),d=t(17),x=t(18),h=x.a.div(i||(i=Object(d.a)(["\n  background-color: #808080;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -1;\n"]))),p=x.a.div(a||(a=Object(d.a)(["\n  background-color: #212121 ;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 130px;\n  height: 446px;\n  z-index: 0;\n"]))),u=x.a.img(o||(o=Object(d.a)(["\n  position: absolute;\n  left: 25px;\n  top: 90px;\n  width: 60px;\n  height: 60px;\n  z-index: 2;\n  border-radius: 50%;\n"]))),m=x.a.div(r||(r=Object(d.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 65px;\n  background-color: #90caf9;\n"]))),O=x.a.p(c||(c=Object(d.a)(["\n  font-family: 'Mouse Memoirs', sans-serif;\n  position: absolute;\n  left: 20px;\n  top: 150px;\n  font-size: 35px;\n"]))),f=t(4);var g,v,w,C,y,k,L=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(h,{children:[Object(f.jsx)(p,{}),Object(f.jsx)(m,{}),Object(f.jsx)(u,{className:"image",src:j.a.image.avatar()}),Object(f.jsx)(O,{children:j.a.name.firstName()})]})})},S=t(61),z=t(11),M=t(124),q=t(45),B=t(1766),F=t(1765),H=x.a.div(g||(g=Object(d.a)(["\n  position: absolute;\n  top: 60px;\n  left: 200px;\n"]))),J=x.a.p(v||(v=Object(d.a)(["\n  font-family: 'Mouse Memoirs', sans-serif;\n  position: absolute;\n  left: 250px;\n  top: 50px;\n  font-size: 80px;\n"]))),N=x.a.svg(w||(w=Object(d.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 963px;\n"]))),R=x.a.div(C||(C=Object(d.a)(["\n  color: #ff0000;\n"]))),T=x.a.nav(y||(y=Object(d.a)(["\n  position: absolute;\n  top: 1px;\n  right: 10px;\n"]))),I=x.a.nav(k||(k=Object(d.a)(["\n  position: absolute;\n  top: 240px;\n  left: -10px;\n"]))),P=t(1763),V=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(M.a,{initialValues:{name:"",email:"",agree:""},validationSchema:q.b({name:q.c().required("name field cannot be left blank"),email:q.c().email().required("email field cannot be left blan"),agree:q.a().required("conditions must be accepted")}),onSubmit:function(e,n){var t=n.resetForm,i=n.setSubmitting;console.log(e),setTimeout((function(){i(!1),t()}),2e3)},children:function(e){var n=e.values,t=e.errors,i=e.handleSubmit,a=(e.handleReset,e.handleChange),o=e.handleBlur,r=e.dirty,c=e.isSubmitting,s=e.touched;return Object(f.jsx)(H,{children:Object(f.jsxs)("form",{onSubmit:i,children:[Object(f.jsx)("br",{}),Object(f.jsx)(F.a,{id:"name",type:"text",onBlur:o,placeholder:"enter name",value:n.name,onChange:a,label:"name",variant:"outlined"}),Object(f.jsx)("br",{}),t.name&&s.name&&Object(f.jsx)(R,{children:t.name}),Object(f.jsx)("br",{}),Object(f.jsx)(F.a,{id:"email",type:"text",placeholder:"enter email",value:n.email,onChange:a,onBlur:o,label:"email",variant:"outlined"}),Object(f.jsx)("br",{}),t.email&&s.email&&Object(f.jsx)(R,{children:t.email}),Object(f.jsx)("br",{}),Object(f.jsx)(B.a,{onChange:a,id:"agree",value:n.agree,color:"primary",inputProps:{"aria-label":"secondary checkbox"}}),Object(f.jsx)("label",{htmlFor:"agree",children:"I have read and accept the contract"}),Object(f.jsx)("br",{}),t.agree&&s.agree&&Object(f.jsx)(R,{children:t.agree}),Object(f.jsx)("br",{}),Object(f.jsx)(P.a,{type:"submit",disabled:!r||c,variant:"contained",color:"primary",children:"Login"})]})})}})})},Z=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(J,{children:"Hi! This is my page where i use Router and Formik"}),Object(f.jsx)(N,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:Object(f.jsx)("path",{fill:"#ff5500","fill-opacity":"1",d:"M0,96L48,96C96,96,192,96,288,117.3C384,139,480,181,576,202.7C672,224,768,224,864,192C960,160,1056,96,1152,64C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})})]})},A=t(1764),D=function(){return Object(f.jsxs)("div",{children:[Object(f.jsxs)(S.a,{children:[Object(f.jsx)(T,{children:Object(f.jsx)(S.b,{to:"/login",children:Object(f.jsx)(A.a,{children:Object(f.jsx)(P.a,{color:"inherit",children:"Login"})})})}),Object(f.jsx)(I,{children:Object(f.jsx)(S.b,{to:"/Home",children:Object(f.jsx)(A.a,{children:Object(f.jsx)(P.a,{color:"inherit",children:"Home"})})})}),Object(f.jsx)(z.a,{path:"/login",component:V}),Object(f.jsx)(z.a,{path:"/home",component:Z})]}),Object(f.jsx)(L,{})]})};l.a.render(Object(f.jsx)(D,{}),document.querySelector("#root"))}},[[1729,1,2]]]);
//# sourceMappingURL=main.3190cd1c.chunk.js.map