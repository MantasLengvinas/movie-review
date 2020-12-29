(this["webpackJsonpfilm-review"]=this["webpackJsonpfilm-review"]||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),c=a.n(s),i=a(19),l=a.n(i),r=(a(37),a(7)),o=a(8),d=a(10),h=a(9),j=a(31),b=(a(38),a(16)),m=a(5),u=(s.Component,a(12)),O=a(13),p=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={movieData:[]},n.getMoviesData=n.getMoviesData.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"getMoviesData",value:function(){var e=this;fetch("https://api.themoviedb.org/3/discover/movie?api_key=530c56d37a8200c3cb27b16bcc2e444c").then((function(e){return e.json()})).then((function(t){e.setState({movieData:t.results})}))}},{key:"componentDidMount",value:function(){this.getMoviesData()}},{key:"render",value:function(){var e=this.state.movieData.map((function(e){return Object(n.jsxs)("div",{className:"carousel-item",children:[Object(n.jsx)(b.b,{to:"/movie/".concat(e.id),children:Object(n.jsx)("img",{className:"d-block w-100",src:"https://image.tmdb.org/t/p/w500".concat(e.backdrop_path),alt:""})}),Object(n.jsx)("div",{class:"carousel-caption d-none d-md-block",children:Object(n.jsx)("h2",{className:"black-outline",children:e.original_title})})]})}));return Object(n.jsxs)("div",{className:"homeScreen container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md d-flex justify-content-center",children:Object(n.jsx)("h3",{children:"Select a movie you would like to review"})})}),Object(n.jsx)("div",{className:"row d-flex justify-content-center",children:Object(n.jsx)("div",{className:"col-md-8 mt-5 border border-light rounded p-3",children:Object(n.jsx)(O.a,{keyboard:!0,interval:5e3,children:e})})})]})}}]),a}(s.Component),v=a(18),g=5,x=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={rButtons:[],currentR:""},n.renderRatings=n.renderRatings.bind(Object(u.a)(n)),n.handleOptionChange=n.handleOptionChange.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.renderRatings()}},{key:"handleOptionChange",value:function(e){var t=this;this.setState({currentR:e.target.value},(function(){t.renderRatings(),g=t.state.currentR}))}},{key:"renderRatings",value:function(){for(var e=this.props.rscale,t=this.state.currentR,a=[],s=1;s<=e;s++)a.push(Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{type:"radio",value:s,name:"rad",className:"invisible",checked:t=="value"+s,onChange:this.handleOptionChange}),Object(n.jsx)("span",{style:{color:"#fff1b5"},className:"fa fa-star"})]},s));this.setState({rButtons:a})}},{key:"render",value:function(){var e=this.state.rButtons;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{for:"exampleReview",className:"color-white",children:"Your rating:"}),Object(n.jsx)("div",{className:"rating_scale",children:e})]})})}}]),a}(c.a.Component),f=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={review:"",movie:{}},n.movieData=n.movieData.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.handleChange=n.handleChange.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"movieData",value:function(e){var t=this;fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=530c56d37a8200c3cb27b16bcc2e444c")).then((function(e){return e.json()})).then((function(e){t.setState({movie:e})}))}},{key:"componentDidMount",value:function(){var e=this.props.match.params.movieID;this.movieData(e)}},{key:"handleSubmit",value:function(e){console.log(g),e.preventDefault()}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-sm-2",children:Object(n.jsx)("button",{onClick:function(){window.location.replace("/")},className:"global-button",id:"register-button",children:"Back"})}),Object(n.jsx)("div",{className:"col-md d-flex justify-content-center",children:Object(n.jsx)("h3",{className:"black-outline"})})]}),Object(n.jsx)("div",{className:"row mt-5 border border-light rounded",children:Object(n.jsxs)("div",{className:"col-md",children:[Object(n.jsxs)("div",{className:"row mt-3",children:[Object(n.jsxs)("div",{className:"col-md-5",children:[Object(n.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(this.state.movie.backdrop_path),alt:"movie",className:"m-3",style:{height:"330px",width:"450px"},srcset:""}),Object(n.jsxs)("p",{className:"ml-3",children:["Current rating: ",Object(n.jsxs)("i",{children:[this.state.movie.vote_average,"/10"]})," "]})]}),Object(n.jsx)("div",{className:"col-md-7",children:Object(n.jsxs)("div",{className:"col m-1 ml-1",children:[Object(n.jsx)("h3",{className:"black-outline",children:this.state.movie.original_title}),Object(n.jsxs)("p",{children:["Homepage: ",Object(n.jsx)("i",{children:Object(n.jsx)("a",{target:"_blank",href:this.state.movie.homepage,children:this.state.movie.homepage})})]}),Object(n.jsxs)("p",{children:["Overview: ",Object(n.jsx)("i",{children:this.state.movie.overview})]}),Object(n.jsxs)("p",{children:["Released: ",Object(n.jsx)("i",{children:this.state.movie.release_date})]})]})})]}),Object(n.jsxs)("div",{className:"row border-top border-light",children:[Object(n.jsx)("div",{className:"col-md d-flex justify-content-center mt-3",children:Object(n.jsx)("h4",{children:"Your review of the movie"})}),Object(n.jsx)("div",{className:"w-100"}),Object(n.jsx)("div",{className:"col-md",children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{for:"exampleReview",className:"color-white",children:"Opinion about the movie"}),Object(n.jsx)("input",{type:"textarea",name:"review",className:"form-control",rows:"5",id:"exampleInputEmail","aria-describedby":"review",placeholder:"I love this movie..",value:this.state.review,onChange:this.handleChange,required:!0})]})}),Object(n.jsx)("div",{className:"col-md-4 d-flex justify-content-center",children:Object(n.jsx)(x,{name:"rating",rscale:"5",currentR:"value5"})})]}),Object(n.jsx)("div",{className:"col-md-2 d-flex justify-content-end float-right mt-2 mb-3",children:Object(n.jsx)("button",{type:"submit",className:"color-white btn full-width",id:"register-button",children:"Save review"})})]})})]})]})})]})}}]),a}(s.Component),w=Object(m.f)(f),N=a.p+"static/media/avengers.612cadbe.jpg",y=a.p+"static/media/spiderman.7d07dcb0.jpg",k=a.p+"static/media/deadpool.f22d7d34.jpg",A=a.p+"static/media/hercules.9e4faef8.jpg",C=a.p+"static/media/godzilla.afc90c13.jpg",S=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)(O.a,{interval:3e3,pause:!1,className:"full-width",children:[Object(n.jsxs)(O.a.Item,{style:{height:"100vh",width:"inherit"},children:[Object(n.jsx)("img",{style:{height:"100%",width:"inherit"},className:"d-block w-100",src:y,alt:""}),Object(n.jsxs)(O.a.Caption,{children:[Object(n.jsx)("h1",{className:"black-outline",children:"Welcome!"}),Object(n.jsx)("h3",{className:"black-outline",children:"In order to review movies, you must sign in"})]})]}),Object(n.jsxs)(O.a.Item,{style:{height:"100vh",width:"inherit"},children:[Object(n.jsx)("img",{style:{height:"100%",width:"inherit"},className:"d-block w-100",src:k,alt:""}),Object(n.jsxs)(O.a.Caption,{children:[Object(n.jsx)("h1",{className:"black-outline",children:"Welcome!"}),Object(n.jsx)("h3",{className:"black-outline",children:"In order to review movies, you must sign in"})]})]}),Object(n.jsxs)(O.a.Item,{style:{height:"100vh",width:"inherit"},children:[Object(n.jsx)("img",{style:{height:"100%",width:"inherit"},className:"d-block w-100",src:N,alt:""}),Object(n.jsxs)(O.a.Caption,{children:[Object(n.jsx)("h1",{className:"black-outline",children:"Welcome!"}),Object(n.jsx)("h3",{className:"black-outline",children:"In order to review movies, you must sign in"})]})]}),Object(n.jsxs)(O.a.Item,{style:{height:"100vh",width:"inherit"},children:[Object(n.jsx)("img",{style:{height:"100vh",width:"inherit"},className:"d-block w-100",src:A,alt:""}),Object(n.jsxs)(O.a.Caption,{children:[Object(n.jsx)("h1",{className:"black-outline",children:"Welcome!"}),Object(n.jsx)("h3",{className:"black-outline",children:"In order to review movies, you must sign in"})]})]}),Object(n.jsxs)(O.a.Item,{style:{height:"100vh",width:"inherit"},children:[Object(n.jsx)("img",{style:{height:"100vh",width:"inherit"},className:"d-block w-100",src:C,alt:""}),Object(n.jsxs)(O.a.Caption,{children:[Object(n.jsx)("h1",{className:"black-outline",children:"Welcome!"}),Object(n.jsx)("h3",{className:"black-outline",children:"In order to review movies, you must sign in"})]})]})]})})}}]),a}(s.Component),I=a(20),P=a.n(I),J=a(21),R=a(4),B=new function e(){Object(r.a)(this,e),Object(R.g)(this,{loading:!1,isLoggedIn:!1,token:null,email:""})},E=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",loginError:""},n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.handleChange=n.handleChange.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){var t=this;fetch("https://moviereview-test-1608553173564.azurewebsites.net/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({email:this.state.email,password:this.state.password})}).then((function(e){return e.json()})).then(function(){var e=Object(J.a)(P.a.mark((function e(a){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.success?(localStorage.setItem("isLoggedIn",!0),localStorage.setItem("email",a.email),localStorage.setItem("username",a.username),B.isLoggedIn=!0,window.location.replace("/")):t.setState({loginError:"Neteisingi prisijungimo duomenys!"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)})),e.preventDefault()}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col d-flex justify-content-center margin-top",children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:"border border-light rounded p-5",children:[Object(n.jsx)("div",{className:"col d-flex justify-content-center color-white",children:Object(n.jsx)("h4",{children:"PRISIJUNGIMAS"})}),Object(n.jsx)("div",{className:"col d-flex justify-content-center",children:Object(n.jsx)("p",{className:"red",children:this.state.loginError})}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{for:"exampleInputEmail1",className:"color-white",children:"Elektroninio pa\u0161to adresas"}),Object(n.jsx)("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"El. pa\u0161tas",value:this.state.email,onChange:this.handleChange,required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{for:"exampleInputPassword1",className:"color-white",children:"Slapta\u017eodis"}),Object(n.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0,className:"form-control",id:"exampleInputPassword1",placeholder:"Slapta\u017eodis"})]}),Object(n.jsx)("div",{className:"col-md-12 d-flex justify-content-center",children:Object(n.jsx)("button",{type:"submit",className:"btn btn-primary full-width ",children:"PRISIJUNGTI"})})]})})})}}]),a}(s.Component),H=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={email:"",username:"",password:"",registrationErrors:""},n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.handleChange=n.handleChange.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){fetch("https://moviereview-test-1608553173564.azurewebsites.net/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({email:this.state.email,password:this.state.password})}).then((function(e){return e.json()})).then(function(){var e=Object(J.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)})),e.preventDefault()}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col d-flex justify-content-center margin-top color-white",children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:"border border-light rounded p-5",children:[Object(n.jsx)("div",{className:"col d-flex justify-content-center",children:Object(n.jsx)("h4",{children:"REGISTRACIJA"})}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{for:"exampleInputEmail1",children:"Elektroninio pa\u0161to adresas"}),Object(n.jsx)("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"El. pa\u0161tas",value:this.state.email,onChange:this.handleChange,required:!0}),Object(n.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"J\u016bs\u0173 el. pa\u0161tas bus reikalingas norint prisijungti"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{for:"exampleInputPassword1",children:"Vartotojo vardas"}),Object(n.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,required:!0,className:"form-control",id:"exampleInputUsername",placeholder:"Vartotojo vardas"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{for:"exampleInputPassword1",children:"Slapta\u017eodis"}),Object(n.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0,className:"form-control",id:"exampleInputPassword1",placeholder:"Slapta\u017eodis"})]}),Object(n.jsx)("div",{className:"col-md-12 d-flex justify-content-center",children:Object(n.jsx)("button",{type:"submit",className:"btn btn-primary full-width ",children:"REGISTRUOTIS"})})]})})})}}]),a}(s.Component),T="data:image/png;base64,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",D=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return"true"!==localStorage.getItem("isLoggedIn")?Object(n.jsxs)("div",{className:"headerPartial row navbar navbar-dark fixed-top",children:[Object(n.jsx)("div",{className:"col-sm-8 pl-1 header-logo",children:Object(n.jsx)(b.b,{to:"/",children:Object(n.jsx)("img",{src:T,alt:"logo",srcset:""})})}),Object(n.jsxs)("div",{className:"col-sm-4 m-auto p-2 d-flex justify-content-end",children:[Object(n.jsx)(b.b,{to:"/login",children:Object(n.jsx)("button",{className:"global-button",id:"login-button",children:"Sign in"})}),Object(n.jsx)(b.b,{to:"/register",children:Object(n.jsx)("button",{className:"global-button",id:"register-button",children:"Sign up"})})]})]}):Object(n.jsxs)("div",{className:"headerPartial row",children:[Object(n.jsx)("div",{className:"col-sm-8 pl-1 header-logo",children:Object(n.jsx)(b.b,{to:"/",children:Object(n.jsx)("img",{src:T,alt:"logo",srcset:""})})}),Object(n.jsx)("div",{className:"col-sm-4 m-auto d-flex justify-content-end",children:Object(n.jsxs)("h5",{children:["Welcome, ",this.props.email]})})]})}}]),a}(s.Component),Y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return"true"===localStorage.getItem("isLoggedIn")||B.isLoggedIn?Object(n.jsxs)(b.a,{children:[Object(n.jsx)(D,{email:localStorage.getItem("email")}),Object(n.jsxs)(m.c,{children:[Object(n.jsx)(m.a,{path:"/",exact:!0,component:p}),Object(n.jsx)(m.a,{path:"/movie/:movieID",component:w})]})]}):Object(n.jsxs)(b.a,{children:[Object(n.jsx)(D,{}),Object(n.jsxs)(m.c,{children:[Object(n.jsx)(m.a,{path:"/",exact:!0,component:S}),Object(n.jsx)(m.a,{path:"/login",component:E}),Object(n.jsx)(m.a,{path:"/register",component:H})]})]})}}]),a}(s.Component),q=Object(j.a)(Y),W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};a(44);l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(q,{})}),document.getElementById("root")),W()}},[[45,1,2]]]);
//# sourceMappingURL=main.c4482051.chunk.js.map