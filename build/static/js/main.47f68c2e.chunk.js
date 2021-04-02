(this["webpackJsonpphone-book"]=this["webpackJsonpphone-book"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(0),r=n.n(c),o=n(9),i=n.n(o),s=(n(76),n(23)),u=n(33),d=n.n(u),l="api/persons",h=function(){return d.a.get(l).then((function(e){return e.data}))},b=function(e){return d.a.post(l,e).then((function(e){return e.data}))},j=function(e,t){return d.a.put("".concat(l,"/").concat(e),t).then((function(e){return e.data}))},m=function(e){return d.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},f=n(132),p=n(142),O=function(e){var t=e.showFilter,n=e.setshowFilter,c=Object(f.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}))();return Object(a.jsx)("div",{className:c.root,children:Object(a.jsx)(p.a,{id:"outlined-basic",value:t,label:"filter",variant:"outlined",onChange:function(e){n(e.target.value)}})})},x={success:{color:"green",background:"white",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},fail:{color:"red",background:"white",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},g=function(e){var t=e.notification,n=e.success;return null===t?null:n?Object(a.jsx)("div",{className:"success",style:x.success,children:t}):Object(a.jsx)("div",{className:"success",style:x.fail,children:t})},v=n(138),N=n(139),w=n(58),y=n.n(w),C=function(e){var t=e.newName,n=e.newNumber,c=e.addNewName,r=e.handleNameChange,o=e.handleNumberChange,i=Object(f.a)((function(e){return{root:{"& > *":{margin:e.spacing(2),width:"50ch"}},press:{marginLeft:75,extendedIcon:{marginRight:e.spacing(1)}}}}))();return Object(a.jsx)(v.a,{container:!0,spacing:1,children:Object(a.jsxs)("form",{onSubmit:c,className:i.root,noValidate:!0,autoComplete:"off",children:[Object(a.jsx)(v.a,{item:!0,xs:12,children:Object(a.jsx)(p.a,{id:"outlined-basic",className:i.root,label:"Name",value:t,onChange:r,variant:"outlined"})}),Object(a.jsx)(v.a,{item:!0,xs:12,children:Object(a.jsx)(p.a,{id:"outlined-basic",className:i.root,value:n,onChange:o,label:"Number",variant:"outlined"})}),Object(a.jsxs)(N.a,{variant:"extended",color:"primary","aria-label":"add",className:i.press,type:"submit",children:[Object(a.jsx)(y.a,{className:i.extendedIcon}),"Add"]})]})})},k=n(140),S=n(141),F=n(143),I=n(59),R=n.n(I),U=function(e){var t=e.persons,n=e.showFilter,c=e.removeEntry,r=Object(f.a)((function(e){return{root:{backgroundColor:e.palette.background.paper}}})),o=n.toUpperCase(),i=t.filter((function(e){return e.name.toUpperCase().includes(o)})),s=r();return i.map((function(e){return Object(a.jsxs)("div",{className:s.root,children:[Object(a.jsx)(k.a,{}),Object(a.jsxs)(S.a,{button:!0,children:[Object(a.jsxs)(F.a,{children:[e.name,"  :  ",e.number]}),Object(a.jsx)(R.a,{onClick:function(){return c(e)}})]},e.name)]})}))},B=n(136),E=n(137),A=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(""),i=Object(s.a)(o,2),u=i[0],d=i[1],l=Object(c.useState)(""),p=Object(s.a)(l,2),x=p[0],N=p[1],w=Object(c.useState)(""),y=Object(s.a)(w,2),k=y[0],S=y[1],F=Object(c.useState)(null),I=Object(s.a)(F,2),R=I[0],A=I[1],z=Object(c.useState)(null),D=Object(s.a)(z,2),J=D[0],M=D[1],T=Object(f.a)((function(e){return{root:{flexGrow:1,margin:50},paper:{padding:e.spacing(2),justifyItems:"center",color:e.palette.text.secondary,overflow:"auto",height:400},header1:{padding:e.spacing(2),justifyItems:"center",color:e.palette.text.secondary,overflow:"auto",textAlign:"center"},addFriend:{padding:e.spacing(2),justifyItems:"center",color:e.palette.text.secondary,overflow:"auto",height:650,justifyContent:"center"}}}));Object(c.useEffect)((function(){h().then((function(e){r(e)})).catch((function(e){return G("Could not retrieve data",!1)}))}),[]);var G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];A(e),M(t),setTimeout((function(){A(null),M(null)}),3e3)},L=T();return Object(a.jsx)("div",{className:L.root,children:Object(a.jsxs)(v.a,{container:!0,spacing:2,children:[Object(a.jsx)(v.a,{item:!0,xs:12,children:Object(a.jsx)(B.a,{className:L.header1,children:Object(a.jsx)("h2",{children:"Phone Book"})})}),Object(a.jsx)(v.a,{item:!0,xs:6,children:Object(a.jsxs)(B.a,{className:L.addFriend,children:[Object(a.jsx)(B.a,{className:L.header1,children:Object(a.jsx)("h2",{children:"Add a new friend"})}),Object(a.jsx)(C,{addNewName:function(e){e.preventDefault();var t={name:u,number:x};if(n.some((function(e){return e.name===u}))){var a=n.find((function(e){return e.name===u})),c=Object.assign(a,t);window.confirm("Do you want to update ".concat(u," with number ").concat(x,"?"))&&j(a.id,t).then((function(){r(n.map((function(e){return e.name===u?c:e}))),d(""),N(""),G(" ".concat(u," phone number updated"))})).catch((function(e){G("Update failed. ".concat(u," has already been removed from the phone book."),!1),r(n.filter((function(e){return e.name!==u})))}))}else n.some((function(e){return e.number===x}))?G("# ".concat(x," is already in the phone book."),!1):""===u||""===x?G("The name and number must not be empty",!1):(b(t).then((function(e){r(n.concat(e)),d(""),N(""),G("User ".concat(u," has been added to the phone book"))})).catch((function(e){return console.log(e.response.data.error),G("Failed to add number. More about error: ".concat(e.response.data.error),!1)})),h().then((function(e){r(e)})).catch((function(e){return G("Could not retrieve data",!1)})))},newName:u,handleNameChange:function(e){d(e.target.value)},handleNumberChange:function(e){N(e.target.value)}})]})}),Object(a.jsx)(v.a,{item:!0,xs:6,children:Object(a.jsxs)(B.a,{className:L.addFriend,children:[Object(a.jsx)(B.a,{className:L.header1,children:Object(a.jsx)("h2",{children:"Numbers"})}),Object(a.jsx)(g,{notification:R,success:J}),Object(a.jsx)(O,{showFilter:k,setshowFilter:S}),Object(a.jsx)(B.a,{className:L.paper,children:Object(a.jsx)(E.a,{children:Object(a.jsx)(U,{persons:n,showFilter:k,removeEntry:function(e){window.confirm("Remove ".concat(e.name,"?"))&&m(e.id).then((function(){r(n.filter((function(t){return t.id!==e.id}))),G("".concat(e.name," has been removed from the phone book"))})).catch((function(t){G("Removal failed. User ".concat(e.name," has already been removed from the phone book."),!1),h().then((function(e){r(e)})).catch((function(e){return G("Could not retrieve data",!1)}))}))}})})})]})})]})})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))},76:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.47f68c2e.chunk.js.map