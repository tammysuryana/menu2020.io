(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),m=t.n(l),c=t(2),n=t.n(c),s=(t(9),t(3));t(10),t(11);function r(){return m.a.createElement("div",null,m.a.createElement("nav",{className:"py-4 d-lg-flex"},m.a.createElement("div",{id:"logo"},m.a.createElement("h1",null," ",m.a.createElement("a",{href:"index.html"},m.a.createElement("span",{className:"fa fa-align-center","aria-hidden":"true"}),"RUFU"))),m.a.createElement("label",{for:"drop",className:"toggle"},"Menu"),m.a.createElement("input",{type:"checkbox",id:"drop"}),m.a.createElement("ul",{className:"menu mt-2 ml-auto"},m.a.createElement("li",{className:"active"},m.a.createElement("a",{href:"index.html"},"Home")),m.a.createElement("li",null,m.a.createElement("a",{href:"#about",className:"scroll"},"About")),m.a.createElement("li",null,m.a.createElement("a",{href:"#menu",className:"scroll"},"Menu")),m.a.createElement("li",null),m.a.createElement("li",null,m.a.createElement("a",{href:"#testimonials",className:"scroll"},"Reviews")),m.a.createElement("li",null,m.a.createElement("a",{href:"#contact",className:"scroll"},"Contact")))))}var i=function(e){return console.log(e.photo.url),m.a.createElement("div",{className:"col-lg-3 ab-content"},m.a.createElement("div",{className:"ab-content-inner"},m.a.createElement("img",{src:"https://rufumenu.herokuapp.com".concat(e.photo.url)||!1,alt:"news image",className:"img-fluid"}),m.a.createElement("div",{className:"ab-info-con"},m.a.createElement("h4",null,e.name),m.a.createElement("p",null,"Rp.",e.price))))};var o=function(){var e=Object(l.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(l.useEffect)((function(){fetch("https://rufumenu.herokuapp.com/Menu-items?_sort=id:ASC",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){c(e)}))}),[]),m.a.createElement("div",{className:"App"},m.a.createElement(r,null),m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"banner-info-w3layouts text-center"},m.a.createElement("h3",null,"RUFU MENU"),m.a.createElement("div",{className:"read-more"},m.a.createElement("a",{href:"#about",className:"read-more scroll"},"SELANJUT NYA  ")," ")),m.a.createElement("div",{className:"row order-info"},m.a.createElement("div",{className:"middle mt-3 col-md-6 text-left"},m.a.createElement("ul",{className:"social mb-4"},m.a.createElement("li",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"fa fa-facebook icon_facebook"}))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"fa fa-twitter icon_twitter"}))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"fa fa-google-plus icon_google-plus"}))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"fa fa-linkedin icon_linkedin"}))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"fa fa-dribbble icon_dribbble"}))))),m.a.createElement("div",{className:"middle-right mt-md-3 col-md-6 text-right"},m.a.createElement("h6",null,m.a.createElement("span",{className:"fa fa-phone"})," RUFU INDONESIA")))),m.a.createElement("section",{className:"banner-bottom-wthree py-5",id:"about"},m.a.createElement("div",{className:"container py-md-3"},m.a.createElement("div",{className:"row banner-grids"},m.a.createElement("div",{className:"col-md-6 content-left-bottom text-left pr-lg-5"},m.a.createElement("h4",null,"RUFU INDONESIA"),m.a.createElement("p",{className:"mt-2 text-left"},"Integer pulvinar leo id viverra feugiat.",m.a.createElement("strong",{className:"text-capitalize"}," Pellentesque libero justo, semper at tempus vel, ultrices in sed ligula. Nulla uter sollicitudin velit.")," Sed porttitor orci vel fermentum elit maximus. Curabitur ut turpis massa in condimentum libero. Pellentesque maximus Pellentesque libero justo Nulla uter sollicitudin velit. Sed porttitor orci vel ferm semper at vel, ultrices in ligula semper at vel.Curabitur ut turpis massa in condimentum libero.")),m.a.createElement("div",{className:"col-md-6 content-right-bottom text-left"},m.a.createElement("img",{src:"images/logorufu.jpg",alt:"news image",className:"img-fluid"}))))),m.a.createElement("section",{className:"services py-5",id:"services"},m.a.createElement("div",{className:"container py-md-5"},m.a.createElement("div",{className:"header pb-lg-3 pb-3 text-center"},m.a.createElement("h3",{className:"tittle two mb-lg-3 mb-3"},"MAINS MENU")),m.a.createElement("div",{className:"row ab-info mt-lg-4"},t.length>0?t.map((function(e,a){return m.a.createElement(i,{name:e.menu_items_nama,price:e.menu_items_price,photo:e.menu_items_photo[0],key:a})})):m.a.createElement("div",{className:"waiting",style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}},"wait..")))),m.a.createElement("section",{className:"mid-sec py-5",id:"menu"},m.a.createElement("div",{className:"container-fluid py-lg-5"},m.a.createElement("div",{className:"header pb-lg-3 pb-3 text-center"},m.a.createElement("h3",{className:"tittle mb-lg-3 mb-3"},"snack  &  Drink")),m.a.createElement("div",{className:"middile-inner-con"},m.a.createElement("div",{className:"tab-main mx-auto text-center"},m.a.createElement("input",{id:"tab1",type:"radio",name:"tabs",checked:!0}),m.a.createElement("label",{for:"tab1"},m.a.createElement("span",{className:"fa fa-align-center","aria-hidden":"true"})," snack"),m.a.createElement("input",{id:"tab2",type:"radio",name:"tabs"}),m.a.createElement("label",{for:"tab2"},m.a.createElement("span",{className:"fa fa-bolt","aria-hidden":"true"})," Coffee"),m.a.createElement("input",{id:"tab3",type:"radio",name:"tabs"}),m.a.createElement("label",{for:"tab3"},m.a.createElement("span",{className:"fa fa-bitbucket","aria-hidden":"true"})," NonCoffee"),m.a.createElement("section",{id:"content1"},m.a.createElement("div",{className:"ab-info row"},m.a.createElement("div",{className:"col-md-3 ab-content"},m.a.createElement("div",{className:"tab-wrap"},m.a.createElement("img",{src:"images/5.jpg",alt:"news image",className:"img-fluid"}),m.a.createElement("div",{className:"ab-info-con"},m.a.createElement("h4",null,"Bacon Burger"),m.a.createElement("p",{className:"price"},"$5.99")))),m.a.createElement("div",{className:"col-md-3 ab-content"},m.a.createElement("div",{className:"tab-wrap"},m.a.createElement("img",{src:"images/6.jpg",alt:"news image",className:"img-fluid"}),m.a.createElement("div",{className:"ab-info-con"},m.a.createElement("h4",null,"Cheese Butter"),m.a.createElement("p",{className:"price"},"$15.99")))),m.a.createElement("div",{className:"col-md-3 ab-content"},m.a.createElement("div",{className:"tab-wrap"},m.a.createElement("img",{src:"images/7.jpg",alt:"news image",className:"img-fluid"}),m.a.createElement("div",{className:"ab-info-con"},m.a.createElement("h4",null,"Delicious sandwich"),m.a.createElement("p",{className:"price"},"$25.99")))),m.a.createElement("div",{className:"col-md-3 ab-content"},m.a.createElement("div",{className:"tab-wrap"},m.a.createElement("img",{src:"images/6.jpg",alt:"news image",className:"img-fluid"}),m.a.createElement("div",{className:"ab-info-con"},m.a.createElement("h4",null,"Delicious sandwich"),m.a.createElement("p",{className:"price"},"$35.99")))))),m.a.createElement("section",{id:"content2"},m.a.createElement("div",{className:"ab-info row"},m.a.createElement("div",{className:"col-md-3 ab-content"},m.a.createElement("div",{className:"tab-wrap"},m.a.createElement("img",{src:"images/8.jpg",alt:"news image",className:"img-fluid"}),m.a.createElement("div",{className:"ab-info-con"},m.a.createElement("h4",null,"Pene Salmone"),m.a.createElement("p",{className:"price"},"$5.99")))),m.a.createElement("div",{className:"col-md-3 ab-content"},m.a.createElement("div",{className:"tab-wrap"},m.a.createElement("img",{src:"images/9.jpg",alt:"news image",className:"img-fluid"}),m.a.createElement("div",{className:"ab-info-con"},m.a.createElement("h4",null,"Cheese Butter"),m.a.createElement("p",{className:"price"},"$15.99")))),m.a.createElement("div",{className:"col-md-3 ab-content"},m.a.createElement("div",{className:"tab-wrap"},m.a.createElement("img",{src:"images/7.jpg",alt:"news image",className:"img-fluid"}),m.a.createElement("div",{className:"ab-info-con"},m.a.createElement("h4",null,"Bolognese Pasta"),m.a.createElement("p",{className:"price"},"$25.99")))),m.a.createElement("div",{className:"col-md-3 ab-content"},m.a.createElement("div",{className:"tab-wrap"},m.a.createElement("img",{src:"images/10.jpg",alt:"news image",className:"img-fluid"}),m.a.createElement("div",{className:"ab-info-con"},m.a.createElement("h4",null,"Tagliatelle Molto"),m.a.createElement("p",{className:"price"},"$35.99")))))),m.a.createElement("section",{id:"content3"},m.a.createElement("div",{className:"ab-info row"},m.a.createElement("div",{className:"col-md-3 ab-content"},m.a.createElement("div",{className:"tab-wrap"},m.a.createElement("img",{src:"images/11.jpg",alt:"news image",className:"img-fluid"}),m.a.createElement("div",{className:"ab-info-con"},m.a.createElement("h4",null,"Cola Bottle"),m.a.createElement("p",{className:"price"},"$5.99")))),m.a.createElement("div",{className:"col-md-3 ab-content"},m.a.createElement("div",{className:"tab-wrap"},m.a.createElement("img",{src:"images/12.jpg",alt:"news image",className:"img-fluid"}),m.a.createElement("div",{className:"ab-info-con"},m.a.createElement("h4",null,"Fresh Lime"),m.a.createElement("p",{className:"price"},"$15.99")))),m.a.createElement("div",{className:"col-md-3 ab-content"},m.a.createElement("div",{className:"tab-wrap"},m.a.createElement("img",{src:"images/11.jpg",alt:"news image",className:"img-fluid"}),m.a.createElement("div",{className:"ab-info-con"},m.a.createElement("h4",null,"Cola Bottle"),m.a.createElement("p",{className:"price"},"$25.99")))),m.a.createElement("div",{className:"col-md-3 ab-content"},m.a.createElement("div",{className:"tab-wrap"},m.a.createElement("img",{src:"images/12.jpg",alt:"news image",className:"img-fluid"}),m.a.createElement("div",{className:"ab-info-con"},m.a.createElement("h4",null,"Kiwi Smoothie"),m.a.createElement("p",{className:"price"},"$35.99")))))))))),m.a.createElement("section",{className:"gallery py-5",id:"gallery"},m.a.createElement("div",{className:"container py-md-5"},m.a.createElement("div",{className:"header text-center"},m.a.createElement("h3",{className:"tittle mb-lg-5 mb-3"},"COUNTER ")),m.a.createElement("div",{className:"row news-grids text-center gallery-wrap"},m.a.createElement("div",{className:"col-md-3 gal-img"},m.a.createElement("a",{href:"#gal1"},m.a.createElement("img",{src:"images/g1.jpg",alt:"news image",className:"img-fluid"}))),m.a.createElement("div",{className:"col-md-3 gal-img"},m.a.createElement("a",{href:"#gal2"},m.a.createElement("img",{src:"images/g2.jpg",alt:"news image",className:"img-fluid"}))),m.a.createElement("div",{className:"col-md-3 gal-img"},m.a.createElement("a",{href:"#gal3"},m.a.createElement("img",{src:"images/g3.jpg",alt:"news image",className:"img-fluid"}))),m.a.createElement("div",{className:"col-md-3 gal-img"},m.a.createElement("a",{href:"#gal4"},m.a.createElement("img",{src:"images/g4.jpg",alt:"news image",className:"img-fluid"})))),m.a.createElement("div",{id:"gal1",className:"pop-overlay animate"},m.a.createElement("div",{className:"popup"},m.a.createElement("img",{src:"images/g1.jpg",alt:"Popup Image",className:"img-fluid"}),m.a.createElement("a",{className:"close",href:"#gallery"},"\xd7"))),m.a.createElement("div",{id:"gal2",className:"pop-overlay animate"},m.a.createElement("div",{className:"popup"},m.a.createElement("img",{src:"images/g2.jpg",alt:"Popup Image",className:"img-fluid"}),m.a.createElement("a",{className:"close",href:"#gallery"},"\xd7"))),m.a.createElement("div",{id:"gal3",className:"pop-overlay animate"},m.a.createElement("div",{className:"popup"},m.a.createElement("img",{src:"images/g3.jpg",alt:"Popup Image",className:"img-fluid"}),m.a.createElement("a",{className:"close",href:"#gallery"},"\xd7"))),m.a.createElement("div",{id:"gal4",className:"pop-overlay animate"},m.a.createElement("div",{className:"popup"},m.a.createElement("img",{src:"images/g4.jpg",alt:"Popup Image",className:"img-fluid"}),m.a.createElement("a",{className:"close",href:"#gallery"},"\xd7"))))),m.a.createElement("footer",{className:"footer-content"},m.a.createElement("div",{className:"layer footer"},m.a.createElement("div",{className:"container-fluid"},m.a.createElement("div",{className:"row footer-top-inner-w3ls"},m.a.createElement("div",{className:"col-lg-4 col-md-6 footer-top mt-md-0 mt-sm-5"},m.a.createElement("h2",null,m.a.createElement("a",{href:"index.html"},m.a.createElement("span",{className:"fa fa-align-center","aria-hidden":"true"}),"RUFU INDONESIA")),m.a.createElement("p",{className:"my-3"},"Donec consequat sam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus"),m.a.createElement("p",null,"Id quod possimusapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus at, semper varius orci.")),m.a.createElement("div",{className:"col-lg-4 col-md-6 mt-md-0 mt-5"},m.a.createElement("div",{className:"footer-w3pvt"},m.a.createElement("h3",{className:"mb-3 w3pvt_title"},"Alamat : "),m.a.createElement("hr",null),m.a.createElement("p",null,"Id quod possimusapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus at, semper varius orci."))),m.a.createElement("div",{className:"col-lg-3 col-md-6 mt-lg-0 mt-5"},m.a.createElement("div",{className:"footer-w3pvt"},m.a.createElement("h3",{className:"mb-3 w3pvt_title"},"Contact Us"),m.a.createElement("hr",null),m.a.createElement("div",{className:"last-w3ls-contact"},m.a.createElement("p",null,m.a.createElement("a",{href:"mailto:example@email.com"},"RufuIndonesia@gmail.com"))),m.a.createElement("div",{className:"last-w3ls-contact my-2"},m.a.createElement("p",null,"+62 00000000")),m.a.createElement("div",{className:"last-w3ls-contact"},m.a.createElement("p",null,"+ 90 0000000000,",m.a.createElement("br",null),"xxx Honey State 049436."))))),m.a.createElement("p",{className:"copy-right-grids text-li text-center my-sm-4 my-4"},"\xa9 2020 RUFUINDONESIA. All Rights Reserved | Design by",m.a.createElement("a",{href:"http://facebook.com/tammysuryana"}," tammy sruyana ")),m.a.createElement("div",{className:"w3ls-footer text-center mt-4"},m.a.createElement("ul",{className:"list-unstyled w3ls-icons"},m.a.createElement("li",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"fa fa-facebook-f"}))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"fa fa-twitter"}))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"fa fa-dribbble"}))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},m.a.createElement("span",{className:"fa fa-vk"}))))),m.a.createElement("div",{className:"move-top text-right"},m.a.createElement("a",{href:"#home",className:"move-top"}," ",m.a.createElement("span",{className:"fa fa-angle-up  mb-3","aria-hidden":"true"})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(o,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.279fa015.chunk.js.map