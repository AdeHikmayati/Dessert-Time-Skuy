(this.webpackJsonpdesserttimeskuy02=this.webpackJsonpdesserttimeskuy02||[]).push([[0],{53:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),s=n.n(a),r=n(23),i=n.n(r),l=(n(53),n(16)),j=n(17),o=n(21),h=n(19),d=(n(33),n(83)),b=n(81),u=n(80),m=n(44),O=n(79),x=n(82);function p(e){return Object(c.jsxs)("header",{children:[Object(c.jsxs)(d.a,{style:g,children:[Object(c.jsx)(d.a.Brand,{href:"#home",style:{color:"#9B209B"},children:"DTS"}),Object(c.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsxs)(d.a.Collapse,{id:"basic-navbar-nav",children:[Object(c.jsxs)(b.a,{className:"mr-auto",children:[Object(c.jsx)(b.a.Link,{href:"",style:{color:"#9B209B"},children:"Home"}),Object(c.jsx)(b.a.Link,{href:"#link",style:{color:"#9B209B"},children:"Menu"})]}),Object(c.jsxs)(u.a,{inline:!0,children:[Object(c.jsx)(m.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(c.jsx)(O.a,{variant:"dark",children:"Search"})]})]})]}),Object(c.jsxs)(x.a,{children:[Object(c.jsxs)(x.a.Item,{children:[Object(c.jsx)("img",{width:"800",height:"400",className:"d-block w-100",src:"https://cdn.pixabay.com/photo/2015/04/01/20/06/chocolate-702939_1280.jpg",alt:"First slide",fluid:!0}),Object(c.jsxs)(x.a.Caption,{children:[Object(c.jsx)("h1",{children:Object(c.jsx)("strong",{children:"WELCOME"})}),Object(c.jsx)("p",{children:Object(c.jsx)("strong",{children:"Dessert Time Skuy"})})]})]}),Object(c.jsxs)(x.a.Item,{children:[Object(c.jsx)("img",{width:"800",height:"400",className:"d-block w-100",src:"https://cdn.pixabay.com/photo/2017/03/27/12/26/macaroons-2178371_1280.jpg",alt:"Third slide"}),Object(c.jsxs)(x.a.Caption,{children:[Object(c.jsx)("h3",{children:Object(c.jsx)("strong",{children:"Selamat Mencoba"})}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Resep Dessert Kami"})," "]})]})]})]})]})}var g={backgroundColor:"#F0E7F0"},f=(n(57),n(58),function(e){return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"post",onClick:function(){return e.open(e.data.idMeal)},children:[Object(c.jsx)("div",{className:"img-thumb",children:Object(c.jsx)("img",{src:e.data.strMealThumb,alt:"Dessert Pie"})}),Object(c.jsx)("div",{className:"content",children:Object(c.jsx)("p",{className:"title",children:e.data.strMeal})})]})})})}),v=n(46),y=n.n(v),C=(n(76),function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).handleOpen=function(e){console.log(e)},c.state={meals:[]},c}return Object(j.a)(n,[{key:"getPostApi",value:function(){var e=this;y.a.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert").then((function(e){return e.data.meals.map((function(e){return{idMeal:"".concat(e.idMeal),strMeal:"".concat(e.strMeal),strMealThumb:"".concat(e.strMealThumb)}}))})).then((function(t){e.setState({meals:t})}))}},{key:"componentDidMount",value:function(){this.getPostApi()}},{key:"render",value:function(){var e=this,t=this.state.meals;return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("p",{className:"section-title",children:"MENU"}),Object(c.jsx)("div",{className:"content-wrapper",children:t.map((function(t){t.idMeal,t.strMeal,t.strMealThumb;return Object(c.jsx)(f,{data:t,open:e.handleOpen},t.idMeal)}))})]})}}]),n}(a.Component)),k=n(47),M=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).myChangeHandler=function(e){var t=e.target.name,n=e.target.value;c.setState(Object(k.a)({},t,n))},c.state={username:"",mail:"",message:""},c}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("form",{children:[Object(c.jsx)("h1",{children:"Contact US"}),Object(c.jsx)("p",{children:"Enter your name:"}),Object(c.jsx)("input",{type:"text",name:"username",onChange:this.myChangeHandler}),Object(c.jsx)("p",{children:"Enter your mail:"}),Object(c.jsx)("input",{type:"email",name:"mail",onChange:this.myChangeHandler}),Object(c.jsx)("p",{children:"Enter your messege:"}),Object(c.jsx)("input",{type:"text",name:"message",onChange:this.myChangeHandler})]})}}]),n}(a.Component);function N(e){return Object(c.jsx)("footer",{children:Object(c.jsxs)(d.a,{style:B,children:[Object(c.jsx)(d.a.Brand,{href:"#home",style:{color:"#9B209B"},children:"@DTS-2020-Ade Hikmayati A."}),Object(c.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"})]})})}var B={backgroundColor:"#F0E7F0"},T=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(p,{}),Object(c.jsx)(C,{}),Object(c.jsx)(M,{}),Object(c.jsx)(N,{})]})}}]),n}(a.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(T,{})}),document.getElementById("root")),S()}},[[77,1,2]]]);
//# sourceMappingURL=main.c502481d.chunk.js.map