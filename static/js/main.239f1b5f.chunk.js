(this["webpackJsonple-soft"]=this["webpackJsonple-soft"]||[]).push([[0],{244:function(e,t,a){},370:function(e,t,a){},375:function(e,t,a){},376:function(e,t,a){},377:function(e,t,a){},379:function(e,t,a){},382:function(e,t,a){},384:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(74),o=a.n(n),r=(a(244),a(12)),i=a(11),s=a(25),l=a.n(s),d=a(13),u=a(398),j=a(400),b=a(111),p=a(402),O=a(394),g=a(103),h=(a(370),a(1)),m=function(e){var t=e.titleColor,a=e.setTitleColor,n=e.textColor,o=e.setTextColor,i=e.backgroundColor,s=e.setBackgroundColor,d=e.productBackgroundColor,u=e.setProductBackgroundColor,j=e.colorConfig,m=e.setColorConfig;return Object(c.useEffect)((function(){var e=localStorage.getItem("token-le-Soft"),a={_id:j._id,titleColor:t,textColor:n,backgroundColor:i,productBackgroundColor:d};m(Object(r.a)({},a)),l()({method:"post",url:"/api/config/update",data:{update:a},headers:{Authorization:"Bearer "+e}})}),[t,n,i,d]),Object(h.jsxs)("div",{className:"admin",style:{background:i},children:[Object(h.jsx)(p.a,{as:"h2",style:{color:t},children:"Couleur des titres de Section"}),Object(h.jsx)(b.a,{color:t,onChangeComplete:function(e){return a(e.hex)}}),Object(h.jsx)(O.a,{}),Object(h.jsx)("p",{style:{color:n},children:"Couleur des textes"}),Object(h.jsx)(b.a,{color:n,onChangeComplete:function(e){return o(e.hex)}}),Object(h.jsx)(O.a,{}),Object(h.jsx)("div",{style:{height:50,width:200,background:i,border:"1px solid black"}}),Object(h.jsx)("p",{children:"Couleur du fond"}),Object(h.jsx)(b.a,{color:i,onChangeComplete:function(e){return s(e.hex)}}),Object(h.jsx)(O.a,{}),Object(h.jsx)(p.a,{as:"h3",children:"Changez la Couleur de fond des produits"}),Object(h.jsxs)("div",{className:"product",style:{background:d},children:[Object(h.jsxs)("header",{children:[Object(h.jsxs)("h3",{style:{color:t},children:[" ","Titre",Object(h.jsx)(g.a,{style:{color:n},name:"search"})]}),Object(h.jsxs)("span",{style:{color:t},children:[99999," ",Object(h.jsx)("small",{children:"\u20ac"})]})]}),Object(h.jsxs)("main",{children:[Object(h.jsx)("p",{style:{color:n},children:"lorem ipsum dolor sit amet...."}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{style:{color:t},children:"Allerg\xe8nes :"})," ",Object(h.jsx)("span",{style:{color:n},children:"Arachides"}),Object(h.jsx)("span",{style:{color:n},children:"Fruits \xe0 coques"}),Object(h.jsx)("span",{style:{color:n},children:"Soja"}),Object(h.jsx)("span",{style:{color:n},children:"...."})]})]})]}),Object(h.jsx)(b.a,{color:d,onChangeComplete:function(e){return u(e.hex)}})]})},f=a(395),x=a(401),y=(a(375),function(){return Object(h.jsxs)("div",{className:"loader",children:[Object(h.jsx)("span",{children:"L"}),Object(h.jsx)("span",{children:"E"}),Object(h.jsx)("span",{children:"\xa0"}),Object(h.jsx)("span",{children:"S"}),Object(h.jsx)("span",{children:"O"}),Object(h.jsx)("span",{children:"F"}),Object(h.jsx)("span",{children:"T"})]})}),v=function(e){var t=e.visibility,a=e._id,c=e.category,n=e.product,o=e.handleDeleteProduct,r=e.handleChangeVisibility,i=e.setSelectedProduct,s=e.setOpenEditProductModal,l=e.setOpenUpdateImageModal;return Object(h.jsxs)("div",{className:"adminbuttons",children:[Object(h.jsx)(x.a,{circular:!0,icon:"remove",size:"large",color:"red",onClick:function(){return o(a,c)}}),Object(h.jsx)(x.a,{circular:!0,icon:"edit",size:"large",color:"purple",onClick:function(){i(n),s(!0)}}),Object(h.jsx)(x.a,{circular:!0,icon:t?"hide":"unhide",size:"large",onClick:function(){return r(n)}}),Object(h.jsx)(x.a,{circular:!0,icon:"image",size:"large",color:"yellow",onClick:function(){i(n),l(!0)}})]})},C=(a(376),function(e){var t=e.title,a=e.tag,c=e.price,n=e.image,o=e.description,i=e.visibility,s=e.user,l=e.product,d=e.handleDeleteProduct,u=e.handleChangeVisibility,j=e.setSelectedProduct,b=e.setOpenEditProductModal,O=e.setOpenUpdateImageModal,m=e.setOpenImageModal,f=e.titleColor,x=e.textColor,y=e.productBackgroundColor;return Object(h.jsxs)("div",{className:"product",style:{backgroundColor:y},children:[s&&Object(h.jsx)(v,Object(r.a)(Object(r.a)({},l),{},{product:l,handleDeleteProduct:d,handleChangeVisibility:u,setSelectedProduct:j,setOpenEditProductModal:b,setOpenUpdateImageModal:O})),Object(h.jsxs)("header",{children:[Object(h.jsxs)(p.a,{className:"intitule",as:"h2",style:{color:f},children:[(i?"":"Cach\xe9 : ")+t," ",n&&Object(h.jsx)(g.a,{style:{color:x},onClick:function(){j(l),m(!0)},name:"search"})]}),Object(h.jsxs)("span",{className:"price",style:{color:f},children:[c.toFixed(2)," ",Object(h.jsx)("small",{children:"\u20ac"})]})]}),Object(h.jsxs)("main",{children:[Object(h.jsx)("p",{className:"description",style:{color:x},children:o}),a[1]&&Object(h.jsxs)("p",{className:"allergenes",children:[Object(h.jsx)("strong",{style:{color:f},children:"Allerg\xe8nes :"})," ",a.map((function(e){return Object(h.jsx)("span",{className:"allergene",style:{color:x},children:" ".concat(e," ")},e)}))]})]})]})}),M=(a(377),function(e){var t=e.name,a=e.user,n=e.setOpenAddProductModal,o=e.products,s=e.setProducts,u=e.setOpenLoginModal,j=e.setSelectedProduct,b=e.setOpenEditProductModal,O=e.setOpenUpdateImageModal,g=e.setOpenImageModal,m=e.titleColor,v=e.textColor,M=e.productBackgroundColor,S=Object(d.g)("categorie").categorie,k=Object(c.useState)(!1),P=Object(i.a)(k,2),A=P[0],I=P[1];Object(c.useEffect)((function(){I(!0),l()({method:"get",url:"/api/products/".concat(S)}).then((function(e){s(e.data.data)})).catch((function(e){return console.log(e)})).finally((function(){return I(!1)}))}),[S]);var E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S,a=localStorage.getItem("token-le-Soft");a?(I(!0),l()({method:"delete",url:"/api/products/deleteProduct",data:{productId:e,productCategory:t},headers:{Authorization:"Bearer "+a}}).then((function(e){return s(e.data.data)})).catch((function(e){return console.log(e)})).finally((function(){return I(!1)}))):u(!0)},F=function(e){var t=Object(r.a)({},e);t.visibility=!e.visibility;var a=localStorage.getItem("token-le-Soft");a?(I(!0),l()({method:"post",url:"/api/products/updateProduct",data:{update:t,productId:e._id,productCategory:e.category},headers:{Authorization:"Bearer "+a}}).then((function(e){return s(e.data.data)})).catch((function(e){return console.log(e)})).finally((function(){return I(!1)}))):u(!0)};return Object(h.jsxs)(f.a,{className:"categorie",children:[a&&Object(h.jsx)(x.a,{circular:!0,icon:"add",size:"large",onClick:function(){return n(!0)},color:"green"}),Object(h.jsx)(p.a,{as:"h2",style:{color:m},children:t}),A&&Object(h.jsx)("div",{className:"loadercontainer",children:Object(h.jsx)(y,{})}),!A&&(null===o||void 0===o?void 0:o.map((function(e){return Object(h.jsx)(C,Object(r.a)(Object(r.a)({},e),{},{user:a,product:e,handleDeleteProduct:E,handleChangeVisibility:F,setSelectedProduct:j,setOpenEditProductModal:b,setOpenUpdateImageModal:O,setOpenImageModal:g,titleColor:m,textColor:v,productBackgroundColor:M}),e._id)})))]})}),S=(a(379),function(e){var t=e.titleColor,a=e.textColor,c=e.productBackgroundColor;return Object(h.jsxs)(f.a,{fluid:!0,className:"first",children:[Object(h.jsx)(O.a,{}),Object(h.jsx)(p.a,{as:"h1",style:{color:t},children:"Le Soft Napol\xe9on"}),Object(h.jsx)(O.a,{}),Object(h.jsx)("img",{src:"/assets/images/le-soft.jpg",alt:"le soft"}),Object(h.jsx)(O.a,{}),Object(h.jsx)(f.a,{style:{color:a,background:c},as:"p",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam ipsum ut quia eaque, omnis earum dolore perferendis eligendi quod asperiores quidem? Eveniet, dolorem voluptatibus, cum eius doloribus beatae, veritatis laborum hic possimus quibusdam molestiae reiciendis eos fugiat amet quia?"})]})}),k=a(75),P=a(404),A=a(397),I=a(405),E=a(228),F=a(48),B=[{name:"Suggestions du Chef",slug:"suggestions",icon:F.d,innerMenu:[],style:{"--fa-primary-color":"firebrick","--fa-secondary-color":"chocolate","--fa-primary-opacity":1,"--fa-secondary-opacity":1}},{name:"Pizzas",slug:"pizzas",icon:F.e,innerMenu:[],style:{"--fa-primary-color":"burlywood","--fa-secondary-color":"firebrick","--fa-primary-opacity":1,"--fa-secondary-opacity":1}},{name:"Salades",slug:"salades",icon:F.f,innerMenu:[],style:{"--fa-primary-color":"firebrick","--fa-secondary-color":"green","--fa-primary-opacity":1,"--fa-secondary-opacity":1}},{name:"Viandes",slug:"viandes",icon:F.g,innerMenu:[],style:{"--fa-primary-color":"firebrick","--fa-secondary-color":"burlywood","--fa-primary-opacity":1,"--fa-secondary-opacity":1}},{name:"Desserts",slug:"desserts",icon:F.b,innerMenu:[],style:{"--fa-primary-color":"chocolate","--fa-secondary-color":"burlywood","--fa-primary-opacity":1,"--fa-secondary-opacity":1}},{name:"Boissons",slug:"boissons",icon:F.c,innerMenu:[],style:{"--fa-primary-color":"lightsteelblue","--fa-secondary-color":"darkred","--fa-primary-opacity":1,"--fa-secondary-opacity":1}},{name:"Cocktails",slug:"cocktails",icon:F.a,innerMenu:[],style:{"--fa-primary-color":"lightsteelblue","--fa-secondary-color":"yellow","--fa-primary-opacity":1,"--fa-secondary-opacity":1}},{name:"Gauffres",slug:"gauffres",icon:F.h,innerMenu:[],style:{"--fa-primary-color":"chocolate","--fa-secondary-color":"burlywood","--fa-primary-opacity":1,"--fa-secondary-opacity":1}},{name:"Cr\xeapes",slug:"crepes",icon:F.h,innerMenu:[],style:{"--fa-primary-color":"burlywood","--fa-secondary-color":"burlywood","--fa-primary-opacity":1,"--fa-secondary-opacity":1}}],w=function(e){var t=e.children,a=e.visible,c=e.setVisible,n=e.setCategorie;return Object(h.jsxs)(P.a.Pushable,{children:[Object(h.jsx)(P.a,{as:A.a,direction:"left",animation:"overlay",icon:"labeled",onHide:function(){return c(!1)},inverted:!0,vertical:!0,visible:a,width:"thin",children:B.map((function(e){return Object(h.jsx)(k.b,{to:"/".concat(e.slug),onClick:function(){return n(e)},children:Object(h.jsxs)(A.a.Item,{children:[Object(h.jsx)(A.a.Header,{children:Object(h.jsx)(E.a,{size:"4x",style:e.style,icon:e.icon})}),e.name]})},e.slug)}))}),Object(h.jsx)(P.a.Pusher,{dimmed:a,children:Object(h.jsx)(I.a,{basic:!0,children:t})})]})},z=(a(382),function(e){var t=e.setVisible,a=e.setOpenLoginModal,c=e.user;return Object(h.jsxs)(f.a,{className:"topappbar",children:[Object(h.jsx)(k.b,{to:"/",children:Object(h.jsx)(p.a,{as:"h1",children:Object(h.jsx)(y,{})})}),Object(h.jsxs)("div",{style:{display:"flex"},children:[Object(h.jsx)(u.a,{animation:"fade",duration:3e3,visible:!!c,children:Object(h.jsx)(k.b,{to:"/le-soft/admin",children:Object(h.jsx)(x.a,{color:"olive",icon:"settings",circular:!0})})}),Object(h.jsx)(x.a,{circular:!0,icon:"user",color:c?"blue":"grey",onClick:function(){return a(!0)}}),Object(h.jsx)(x.a,{onClick:function(){return t(!0)},circular:!0,icon:"bars",color:"teal"})]})]})}),L=a(399),N=a(396),D=a(407),U=[{id:1,name:"arachides",value:"Arachides"},{id:2,name:"fruits \xe0 coque",value:"Fruits \xe0 coque"},{id:3,name:"crustac\xe9s",value:"Crustac\xe9s"},{id:4,name:"gluten",value:"Gluten"},{id:5,name:"oeufs",value:"Oeufs"},{id:6,name:"poissons",value:"Poissons"},{id:7,name:"soja",value:"Soja"},{id:8,name:"lait",value:"Lait"},{id:9,name:"celeri",value:"C\xe9leri"},{id:10,name:"moutarde",value:"Moutarde"},{id:11,name:"sesame",value:"Sesame"},{id:12,name:"lupins",value:"Lupins"},{id:13,name:"mollusques",value:"Mollusques"}],V=function(e){var t=e.slug,a=e.setOpenAddProductModal,n=e.openAddProductModal,o=e.setOpenLoginModal,s=e.setProducts,d=e.setAppMessage,u=Object(c.useState)({title:"",description:"",price:"",category:"",image:"",tag:[]}),j=Object(i.a)(u,2),b=j[0],O=j[1],m=Object(c.useState)(!1),f=Object(i.a)(m,2),y=f[0],v=f[1],C=Object(c.useRef)(null);Object(c.useEffect)((function(){O(Object(r.a)(Object(r.a)({},b),{},{category:t})),O(Object(r.a)(Object(r.a)({},b),{},{tag:[]}))}),[t]);var M=function(e){var t={};t[e.target.name]=e.target.value,O(Object(r.a)(Object(r.a)({},b),t))},S=localStorage.getItem("token-le-Soft");return Object(h.jsxs)(L.a,{onClose:function(){return a(!1)},onOpen:function(){return a(!0)},open:n,size:"small",children:[Object(h.jsxs)(p.a,{icon:!0,children:[Object(h.jsx)(g.a,{name:"add"}),"Ajouter un Produit"]}),Object(h.jsx)(L.a.Content,{children:Object(h.jsxs)(N.a,{onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("title",b.title),t.append("description",b.description||""),t.append("price",b.price),t.append("category",b.category),t.append("tag",b.tag),t.append("image",b.image),S?(v(!0),l()({method:"post",url:"/api/products/createProduct",data:t,headers:{"content-type":"multipart/form-data",Authorization:"Bearer "+S}}).then((function(e){s(e.data.data),d({success:200===e.data.status,message:e.data.message})})).then((function(){O({title:"",description:"",price:"",category:"",image:"",tag:[]}),a(!1)})).catch((function(e){return console.log(e)})).finally((function(){v(!1)}))):o(!0)},id:"addProduct-form",children:[Object(h.jsxs)(N.a.Field,{children:[Object(h.jsx)("label",{children:"Nom du Produit"}),Object(h.jsx)("input",{value:b.title,name:"title",type:"text",onChange:function(e){return M(e)}})]}),Object(h.jsxs)(N.a.Field,{children:[Object(h.jsx)("label",{children:"Description"}),Object(h.jsx)("textarea",{value:b.description,name:"description",rows:"5",cols:"33",onChange:function(e){return M(e)}})]}),Object(h.jsxs)(N.a.Field,{children:[Object(h.jsx)("label",{children:"Allerg\xe8nes"}),U.map((function(e){var t;return Object(h.jsx)(D.a,{style:{padding:5},label:e.value,name:e.name,value:e.value,onChange:function(){return function(e,t){var a=b.tag,c=a.indexOf(t);c>-1?a.splice(c,1):a.push(t),O(Object(r.a)(Object(r.a)({},b),{},{tag:a}))}(e.id,e.value)},selected:null===(t=b.tag)||void 0===t?void 0:t.includes(e.value)},e.id)}))]}),Object(h.jsxs)(N.a.Field,{children:[Object(h.jsx)("label",{children:"Prix"}),Object(h.jsx)("input",{min:1,step:.1,value:b.price,name:"price",type:"number",onChange:function(e){return M(e)}})]}),Object(h.jsxs)(N.a.Field,{children:[Object(h.jsx)("label",{children:"Cat\xe9gorie"}),Object(h.jsxs)("select",{value:b.category,name:"category",onChange:function(e){return M(e)},placeholder:"Veuiller Selectionner une cat\xe9gorie",children:[Object(h.jsx)("option",{value:"",children:"Veuillez selectioner une categorie"}),B.map((function(e){return Object(h.jsx)("option",{value:e.slug,children:e.name},e.slug)}))]})]}),Object(h.jsxs)(N.a.Field,{children:[Object(h.jsx)("input",{ref:C,accept:"image/*",id:"addImage",files:b.image,type:"file",hidden:!0,onChange:function(e){return function(e){O(Object(r.a)(Object(r.a)({},b),{},{image:e.target.files[0]}))}(e)}}),Object(h.jsx)(x.a,{type:"button",onClick:function(){return C.current.click()},color:"orange",inverted:!0,children:"Ajouter une image"})]})]})}),Object(h.jsxs)(L.a.Actions,{children:[Object(h.jsxs)(x.a,{color:"green",type:"submit",form:"addProduct-form",inverted:!0,children:[Object(h.jsx)(g.a,{name:"add"})," Ajouter"]}),Object(h.jsxs)(x.a,{loading:y,color:"red",type:"submit",form:"addProduct-form",inverted:!0,onClick:function(){return a(!1)},children:[Object(h.jsx)(g.a,{name:"remove"})," Annuler"]})]})]})},q=function(e){var t=e.setOpenLoginModal,a=e.openLoginModal,n=e.setUser,o=e.setAppMessage,r=Object(c.useState)(""),s=Object(i.a)(r,2),d=s[0],u=s[1],j=Object(c.useState)(""),b=Object(i.a)(j,2),O=b[0],m=b[1],f=Object(c.useState)(!1),y=Object(i.a)(f,2),v=y[0],C=y[1];return Object(h.jsxs)(L.a,{onClose:function(){return t(!1)},onOpen:function(){return t(!0)},open:a,size:"small",children:[Object(h.jsxs)(p.a,{icon:!0,children:[Object(h.jsx)(g.a,{name:"user"}),"Se Connecter"]}),Object(h.jsx)(L.a.Content,{children:Object(h.jsxs)(N.a,{onSubmit:function(e){e.preventDefault(),C(!0),l()({method:"post",url:"/auth/login",data:{email:d,password:O}}).then((function(e){n(e.data.role),o({success:200===e.data.status,message:e.data.message}),localStorage.setItem("token-le-Soft",e.data.token),t(!1)})).catch((function(e){o({success:!1,message:"il y a eu un probl\xe9me durant la connexion"})})).finally((function(){C(!1)}))},id:"auth-form",children:[Object(h.jsxs)(N.a.Field,{children:[Object(h.jsx)("label",{children:"E-Mail"}),Object(h.jsx)("input",{value:d,type:"email",onChange:function(e){return u(e.target.value)}})]}),Object(h.jsxs)(N.a.Field,{children:[Object(h.jsx)("label",{children:"Mot de passe"}),Object(h.jsx)("input",{type:"password",value:O,onChange:function(e){return m(e.target.value)}})]})]})}),Object(h.jsx)(L.a.Actions,{children:Object(h.jsxs)(x.a,{color:"green",loading:v,type:"submit",form:"auth-form",disabled:0===d.length||0===O.length,inverted:!0,children:[Object(h.jsx)(g.a,{name:"checkmark"})," Connexion"]})})]})},T=function(e){var t=e.product,a=e.setOpenEditProductModal,n=e.openEditProductModal,o=e.setOpenLoginModal,s=e.setAppMessage,d=e.setProducts,u=t._id,j=t.title,b=t.description,O=t.price,m=t.tag,f=t.category,y=t.image,v=Object(c.useState)({title:j,description:b,price:O,category:f,image:y,tag:m}),C=Object(i.a)(v,2),M=C[0],S=C[1],k=Object(c.useState)(!1),P=Object(i.a)(k,2),A=P[0],I=P[1];Object(c.useEffect)((function(){S(Object(r.a)({},t))}),[t]);var E=function(e){var t={};t[e.target.name]=e.target.value,S(Object(r.a)(Object(r.a)({},M),t))},F=localStorage.getItem("token-le-Soft");return Object(h.jsxs)(L.a,{onClose:function(){return a(!1)},onOpen:function(){return a(!0)},open:n,size:"small",children:[Object(h.jsxs)(p.a,{icon:!0,children:[Object(h.jsx)(g.a,{name:"edit"}),"\xc9diter ",j]}),Object(h.jsx)(L.a.Content,{children:Object(h.jsxs)(N.a,{onSubmit:function(e){e.preventDefault(),F?(I(!0),l()({method:"post",url:"/api/products/updateProduct",data:{update:M,productId:u,productCategory:f},headers:{Authorization:"Bearer "+F}}).then((function(e){d(e.data.data),s({success:200===e.data.status,message:e.data.message})})).catch((function(e){return console.log(e)})).finally((function(){I(!1),a(!1)}))):(a(!1),o(!0))},id:"addProduct-form",children:[Object(h.jsxs)(N.a.Field,{children:[Object(h.jsx)("label",{children:"Nom du Produit"}),Object(h.jsx)("input",{value:M.title,name:"title",type:"text",onChange:function(e){return E(e)}})]}),Object(h.jsxs)(N.a.Field,{children:[Object(h.jsx)("label",{children:"Description"}),Object(h.jsx)("textarea",{value:M.description,name:"description",rows:"5",cols:"33",onChange:function(e){return E(e)}})]}),Object(h.jsxs)(N.a.Field,{children:[Object(h.jsx)("label",{children:"Allerg\xe8nes"}),U.map((function(e){var a,c;return Object(h.jsx)(D.a,{style:{padding:5},label:e.value,name:e.name,value:e.value,onChange:function(a){return function(e,a){var c=t.tag,n=c.indexOf(e);n>-1?c.splice(n,1):c.push(e),S(Object(r.a)(Object(r.a)({},M),{},{tag:c}))}(e.value)},selected:null===(a=M.tag)||void 0===a?void 0:a.includes(e.value),checked:null===(c=M.tag)||void 0===c?void 0:c.includes(e.value)},e.id)}))]}),Object(h.jsxs)(N.a.Field,{children:[Object(h.jsx)("label",{children:"Prix"}),Object(h.jsx)("input",{min:1,step:.1,value:M.price,name:"price",type:"number",onChange:function(e){return E(e)}})]}),Object(h.jsxs)(N.a.Field,{children:[Object(h.jsx)("label",{children:"Cat\xe9gorie"}),Object(h.jsxs)("select",{value:M.category,name:"category",onChange:function(e){return E(e)},placeholder:"Veuiller Selectionner une cat\xe9gorie",children:[Object(h.jsx)("option",{value:"",children:"Veuillez selectioner une categorie"}),B.map((function(e){return Object(h.jsx)("option",{value:e.slug,children:e.name},e.slug)}))]})]})]})}),Object(h.jsxs)(L.a.Actions,{children:[Object(h.jsxs)(x.a,{color:"purple",type:"submit",form:"addProduct-form",inverted:!0,children:[Object(h.jsx)(g.a,{name:"edit"})," Editer"]}),Object(h.jsxs)(x.a,{loading:A,color:"red",type:"submit",form:"addProduct-form",inverted:!0,onClick:function(){return a(!1)},children:[Object(h.jsx)(g.a,{name:"remove"})," Annuler"]})]})]})},_=function(e){var t,a=e.openImageModal,c=e.setOpenImageModal,n=e.product,o=n.image,r=n.title,i="data:".concat(null===o||void 0===o?void 0:o.contentType,";base64,"),s=function(e){var t="";return[].slice.call(new Uint8Array(e)).forEach((function(e){return t+=String.fromCharCode(e)})),window.btoa(t)}(null===o||void 0===o||null===(t=o.data)||void 0===t?void 0:t.data);return Object(h.jsxs)(L.a,{closeIcon:!0,open:a,onClose:function(){return c(!1)},children:[Object(h.jsx)(p.a,{children:r}),Object(h.jsx)(L.a.Content,{children:Object(h.jsx)("img",{style:{width:"100%"},src:i+s,alt:r})})]})},G=function(e){var t=e.openUpdateImageModal,a=e.setOpenUpdateImageModal,n=e.product,o=e.setProducts,r=e.setOpenLoginModal,s=e.setAppMessage,d=Object(c.useState)(""),u=Object(i.a)(d,2),j=u[0],b=u[1],O=Object(c.useState)(!1),m=Object(i.a)(O,2),f=m[0],y=m[1],v=Object(c.useRef)(null),C=n._id,M=n.category,S=n.title;return Object(h.jsxs)(L.a,{open:t,onClose:function(){return a(!1)},children:[Object(h.jsxs)(p.a,{icon:!0,children:[Object(h.jsx)(g.a,{name:"image"}),"Editer l'image"]}),Object(h.jsx)(L.a.Content,{children:Object(h.jsx)(N.a,{onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("image",j);var c=localStorage.getItem("token-le-Soft");c?(y(!0),l()({method:"post",url:"/api/products/updateProductImage/".concat(C,"/").concat(M),data:t,headers:{"content-type":"multipart/form-data",Authorization:"Bearer "+c}}).then((function(e){e&&200===e.data.status?(o(e.data.data),s(e.data.message)):s(e.data.message)})).catch((function(e){return console.log(e)})).finally((function(){return y(!1)}))):(a(!1),r(!0))},id:"editImage-form",children:Object(h.jsxs)(N.a.Field,{children:[Object(h.jsx)("input",{ref:v,accept:"image/*",id:"addImage",files:j,type:"file",hidden:!0,onChange:function(e){return b(e.target.files[0])}}),Object(h.jsx)(x.a,{type:"button",onClick:function(){return v.current.click()},color:"orange",inverted:!0,children:"Modifier l'image"})]})})}),Object(h.jsxs)(L.a.Actions,{children:[j&&Object(h.jsxs)(x.a,{color:"green",type:"submit",form:"editImage-form",inverted:!0,children:[Object(h.jsx)(g.a,{name:"add"})," Envoyer l'image pour ",S]}),Object(h.jsxs)(x.a,{loading:f,color:"red",type:"submit",form:"editImage-form",inverted:!0,onClick:function(){return a(!1)},children:[Object(h.jsx)(g.a,{name:"remove"})," Annuler"]})]})]})},H=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)({}),s=Object(i.a)(o,2),b=s[0],p=s[1],O=Object(c.useState)(!1),g=Object(i.a)(O,2),f=g[0],x=g[1],v=Object(c.useState)(!1),C=Object(i.a)(v,2),k=C[0],P=C[1],A=Object(c.useState)(!1),I=Object(i.a)(A,2),E=I[0],F=I[1],B=Object(c.useState)(!1),L=Object(i.a)(B,2),N=L[0],D=L[1],U=Object(c.useState)(!1),H=Object(i.a)(U,2),J=H[0],R=H[1],Q=Object(c.useState)(""),K=Object(i.a)(Q,2),W=K[0],X=K[1],Y=Object(c.useState)({}),Z=Object(i.a)(Y,2),$=Z[0],ee=Z[1],te=Object(c.useState)([]),ae=Object(i.a)(te,2),ce=ae[0],ne=ae[1],oe=Object(c.useState)({}),re=Object(i.a)(oe,2),ie=re[0],se=re[1],le=Object(c.useState)(""),de=Object(i.a)(le,2),ue=de[0],je=de[1],be=Object(c.useState)(""),pe=Object(i.a)(be,2),Oe=pe[0],ge=pe[1],he=Object(c.useState)(""),me=Object(i.a)(he,2),fe=me[0],xe=me[1],ye=Object(c.useState)(""),ve=Object(i.a)(ye,2),Ce=ve[0],Me=ve[1],Se=Object(c.useState)({}),ke=Object(i.a)(Se,2),Pe=ke[0],Ae=ke[1],Ie=Object(c.useState)(!0),Ee=Object(i.a)(Ie,2),Fe=Ee[0],Be=Ee[1];return Object(c.useEffect)((function(){setTimeout((function(){ee({})}),5e3)}),[$]),Object(c.useEffect)((function(){Be(!0),l.a.get("/api/config").then((function(e){Ae(e.data.config)})).catch((function(e){return console.log(e)})).finally((function(){return Be(!1)}))}),[]),Object(c.useEffect)((function(){je(Pe.titleColor),ge(Pe.textColor),xe(Pe.backgroundColor),Me(Pe.productBackgroundColor)}),[Pe]),Object(h.jsxs)("div",{style:{height:"100%",background:fe},children:[Fe&&Object(h.jsx)("div",{className:"loadercontainer",children:Object(h.jsx)(y,{})}),!Fe&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u.a,{animation:"jiggle",duration:500,visible:Object.keys($).length>0,children:Object(h.jsx)(j.a,{hidden:0===Object.keys($).length,success:!!$.success,error:!$.success,children:$.message})}),Object(h.jsxs)(w,{visible:a,setVisible:n,setCategorie:p,children:[Object(h.jsx)(z,{user:W,setVisible:n,setOpenLoginModal:x}),Object(h.jsx)(q,{openLoginModal:f,setOpenLoginModal:x,setUser:X,setAppMessage:ee}),Object(h.jsxs)(d.d,{children:[Object(h.jsx)(d.b,{exact:!0,path:"/",children:Object(h.jsx)(S,{user:W,titleColor:ue,textColor:Oe,productBackgroundColor:Ce})}),Object(h.jsx)(d.b,{exact:!0,path:"/le-soft/admin",children:"isAdmin"===W?Object(h.jsx)(m,{titleColor:ue,setTitleColor:je,textColor:Oe,setTextColor:ge,backgroundColor:fe,setBackgroundColor:xe,productBackgroundColor:Ce,setProductBackgroundColor:Me,colorConfig:Pe,setColorConfig:Ae}):Object(h.jsx)(d.a,{to:"/"})}),Object(h.jsxs)(d.b,{path:"/:categorie",children:[Object(h.jsx)(V,Object(r.a)(Object(r.a)({},b),{},{openAddProductModal:k,setOpenAddProductModal:P,setOpenLoginModal:x,setAppMessage:ee,setProducts:ne})),Object(h.jsx)(T,{openEditProductModal:E,setOpenEditProductModal:F,setOpenLoginModal:x,setAppMessage:ee,setProducts:ne,product:ie}),Object(h.jsx)(G,{openUpdateImageModal:N,setOpenUpdateImageModal:D,product:ie,setProducts:ne,setOpenLoginModal:x,setAppMessage:ee}),Object(h.jsx)(_,{setOpenImageModal:R,openImageModal:J,product:ie}),Object(h.jsx)(M,Object(r.a)(Object(r.a)({},b),{},{products:ce,user:W,setOpenAddProductModal:P,setOpenEditProductModal:F,setOpenUpdateImageModal:D,setOpenImageModal:R,setOpenLoginModal:x,setProducts:ne,setSelectedProduct:se,titleColor:ue,textColor:Oe,productBackgroundColor:Ce}))]})]})]})]})]})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,408)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),o(e),r(e)}))};a(383);o.a.render(Object(h.jsx)(k.a,{children:Object(h.jsx)(H,{})}),document.getElementById("root")),J()}},[[384,1,2]]]);
//# sourceMappingURL=main.239f1b5f.chunk.js.map