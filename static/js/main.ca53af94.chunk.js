(this.webpackJsonplegoapp=this.webpackJsonplegoapp||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var o=s(1),r=s.n(o),a=s(4),c=s.n(a),d=(s(15),s(5)),p=s(6),n=s(10),l=s(8),i=s.p+"static/media/lego-logo.b02efc07.svg",g=s(0),h=function(e){return Object(g.jsxs)("div",{className:e.toggleHeader?"jumbotron jumbotron-fluid toggleHeader":"jumbotron jumbotron-fluid",children:[Object(g.jsxs)("div",{className:"jumbotron-container jumbotron-full container",children:[Object(g.jsx)("img",{className:"header-logo",src:i,alt:"lego logo","aria-hidden":"true"}),Object(g.jsx)("h1",{className:"display-4",children:e.title})]}),e.children]})},w=s(9),m=function(e){var t=[],s=e.data.sort((function(e,t){return e.name>t.name?1:-1}));s.map((function(e){return t.push(e.theme)}));var o=Object(w.a)(new Set(t)).sort((function(e,t){return e>t?1:-1}));return Object(g.jsxs)("div",{className:"container form-container",children:[Object(g.jsx)("div",{className:"form-search-btn",role:"button","aria-hidden":"false",onClick:e.handleToggle,children:Object(g.jsx)("i",{className:"fa fa-search",children:Object(g.jsx)("span",{id:"search-text",children:"Search"})})}),Object(g.jsxs)("div",{className:e.toggleSearch?"select-form":"select-form openForm",children:[Object(g.jsxs)("select",{id:"form-select-name",className:"form-select","aria-label":"Default select example",onChange:e.handleItemSelect,defaultValue:"Select Sets by Name",children:[Object(g.jsx)("option",{id:"form-option-name",value:"Select Sets by Name",disabled:!0,children:"Select Sets by Name"}),Object(g.jsx)("option",{disabled:!0}),Object(g.jsx)("option",{value:"All sets",children:"All Sets"}),s?s.map((function(e){return Object(g.jsx)("option",{id:e.setId,value:e.setId,children:e.name},e.setId)})):null]}),Object(g.jsxs)("select",{id:"form-select-theme",className:"form-select","aria-label":"Default select example",onChange:e.handleThemeSelect,defaultValue:"Select Sets by Theme",children:[Object(g.jsx)("option",{id:"form-option-theme",disabled:!0,value:"Select Sets by Theme",children:"Select Sets by Theme"}),Object(g.jsx)("option",{disabled:!0}),Object(g.jsx)("option",{value:"All sets",children:"All Themes"}),o?o.map((function(e){return Object(g.jsx)("option",{id:e,value:e,children:e},e)})):null]})]})]})},f=function(e){return Object(g.jsx)("div",{className:"container",id:"card-container",children:Object(g.jsx)("div",{id:"card-row",className:"row",children:e.children})})},b=function(e){return Object(g.jsx)("div",{className:"card-col col-lg-4 col-md-6 col-sm-6 col-12 "+e.columnClass,children:Object(g.jsxs)("div",{className:"card",children:[Object(g.jsxs)("div",{className:"img-container "+e.containerClass,children:[Object(g.jsx)("img",{className:"card-img-top",loading:"lazy",alt:e.name,src:e.imgUrl,onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave}),Object(g.jsx)("i",{className:"fa fa-arrows-alt"})]}),Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsxs)("h6",{className:"card-id",children:["#",e.setId]}),Object(g.jsx)("img",{className:"theme-logo",alt:"theme logo",src:e.themeLogo}),Object(g.jsx)("div",{className:"card-title-container",children:Object(g.jsx)("h5",{className:"card-title "+e.titleClass,children:e.name})}),Object(g.jsx)("hr",{}),Object(g.jsxs)("span",{children:["Pieces: ",e.pieces]}),e.pdfTwo?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{type:"button",className:"btn btn-danger",children:Object(g.jsx)("a",{className:"card-btn",href:e.pdfTwo,target:"_blank",rel:"noreferrer",children:"PDF 2"})}),Object(g.jsx)("button",{type:"button",className:"btn btn-danger",children:Object(g.jsx)("a",{className:"card-btn",href:e.pdfOne,target:"_blank",rel:"noreferrer",children:"PDF 1"})})]}):Object(g.jsx)("button",{type:"button",className:"btn btn-danger",children:Object(g.jsx)("a",{className:"card-btn single-pdf-btn",href:e.pdfOne,target:"_blank",rel:"noreferrer",children:"PDF"})})]})]})})},u=function(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("footer",{id:"copy-year",className:e.toggleFooter?"main-footer toggleFooter":"main-footer",children:Object(g.jsxs)("div",{className:"footer-info",children:[Object(g.jsxs)("span",{children:["\xa9 ",e.date," John Geipel"]}),Object(g.jsx)("a",{href:"https://github.com/johnpgeipel",target:"_blank",rel:"noreferrer","aria-label":"github link",children:Object(g.jsx)("i",{className:"fa fa-github"})}),Object(g.jsx)("a",{href:"https://www.linkedin.com/in/johnpgeipel",target:"_blank",rel:"noreferrer","aria-label":"linkedin link",children:Object(g.jsx)("i",{className:"fa fa-linkedin"})})]})})})},j=s(7),y=s(3),_=(s(17),function(e){Object(n.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(d.a)(this,s);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={data:[],selectVal:"",currentSet:null,toggleSearch:!0,toggleHeader:!1,toggleFooter:!1,date:(new Date).getFullYear()},e.handleItemSelect=function(t){var s=t.target.value;e.setState({selectVal:s,currentSet:"All sets"===s?e.state.data:e.state.data.filter((function(e){return e.setId===s})),toggleSearch:!e.state.toggleSearch,toggleHeader:!0,toggleFooter:!0}),e.cardContainerStyle()},e.handleThemeSelect=function(t){var s=t.target.value;e.setState({selectVal:s,currentSet:"All sets"===s?e.state.data:e.state.data.filter((function(e){return e.theme===s})),toggleSearch:!e.state.toggleSearch,toggleHeader:!0,toggleFooter:!0}),e.cardContainerStyle()},e.toggleHeader=function(){e.setState({toggleHeader:!e.state.toggleHeader})},e.handleToggle=function(){e.setState({toggleSearch:!e.state.toggleSearch})},e.toggleFooter=function(){e.setState({toggleFooter:!e.state.toggleFooter})},e.cardContainerStyle=function(){document.getElementById("card-container").classList.add("marginBottom")},e.handleMouseEnter=function(e){var t=Object(y.a)(e.target,{maxScale:5});t.pan(10,10),t.zoom(2.5,{animate:!0})},e.handleMouseLeave=function(e){var t=Object(y.a)(e.target,{disablePan:!0});t.zoom(1,{animate:!0}),t.resetStyle()},e}return Object(p.a)(s,[{key:"componentDidMount",value:function(){console.log(this.state.data),this.setState({data:j})}},{key:"componentDidUpdate",value:function(){console.log(this.state)}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(h,{title:"John's Legos",toggleHeader:this.state.toggleHeader,children:Object(g.jsx)(m,{data:this.state.data,toggleSearch:this.state.toggleSearch,handleToggle:this.handleToggle,handleItemSelect:this.handleItemSelect,handleThemeSelect:this.handleThemeSelect})}),Object(g.jsx)(f,{children:this.state.currentSet&&1===this.state.currentSet.length?this.state.currentSet.map((function(t){return Object(g.jsx)(b,{name:t.name,imgUrl:t.imgUrl,setId:t.setId,themeLogo:t.themeLogo,pieces:t.pieces,pdfOne:t.pdfOne,pdfTwo:t.pdfTwo,columnClass:"card-col-one",containerClass:"img-col-one",titleClass:"title-col-one",handleMouseEnter:e.handleMouseEnter,handleMouseLeave:e.handleMouseLeave},t.setId)})):this.state.currentSet?this.state.currentSet.map((function(t){return Object(g.jsx)(b,{name:t.name,imgUrl:t.imgUrl,setId:t.setId,themeLogo:t.themeLogo,pieces:t.pieces,pdfOne:t.pdfOne,pdfTwo:t.pdfTwo,handleMouseEnter:e.handleMouseEnter,handleMouseLeave:e.handleMouseLeave},t.setId)})):null}),Object(g.jsx)(u,{date:this.state.date,toggleFooter:this.state.toggleFooter})]})}}]),s}(o.Component)),O=_;c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(O,{})}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"setId":"75288","name":"AT-AT\u2122","pieces":"1267","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt7dc15f12b7f8c85f/75288.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6330126.pdf","pdfTwo":""},{"setId":"76126","name":"Avengers Ultimate Quinjet","pieces":"840","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt5b2a5ddc7f86af45/76126.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Marvel","array":"marvelArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltdd909357fcaf0a02/Marvel.png?format=png&height=60&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6272034.pdf","pdfTwo":""},{"setId":"76200","name":"Bro Thor\u2019s New Asgard","pieces":"195","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt97b283d9f52d345f/76200.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Marvel","array":"marvelArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltdd909357fcaf0a02/Marvel.png?format=png&height=60&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6380108.pdf","pdfTwo":""},{"setId":"75257","name":"Millennium Falcon\u2122","pieces":"1353","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt892f38a4fd55edeb/75257.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6296457.pdf","pdfTwo":""},{"setId":"75292","name":"The Razor Crest","pieces":"1023","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt7a4292faec34e557/75292.png?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6332509.pdf","pdfTwo":""},{"setId":"75273","name":"Poe Dameron\'s X-wing Fighter\u2122","pieces":"761","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt9d411c8fcf66d68c/75273.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6310760.pdf","pdfTwo":""},{"setId":"75249","name":"Resistance Y-Wing Starfighter\u2122","pieces":"578","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt95bbb82fe5e50bd7/75249.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6296571.pdf","pdfTwo":""},{"setId":"75306","name":"Imperial Probe Droid\u2122","pieces":"683","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt3290b68ac1be98c4/75306.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6366003.pdf","pdfTwo":""},{"setId":"75254","name":"AT-ST\u2122 Raider from The Mandalorian","pieces":"540","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt8f764ff4e9e769ec/75254.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6296461.pdf","pdfTwo":""},{"setId":"75301","name":"Luke Skywalker\u2019s X-Wing Fighter\u2122","pieces":"474","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blte1238e85dc34c0a6/75301.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6350588.pdf","pdfTwo":""},{"setId":"75300","name":"Imperial TIE Fighter\u2122","pieces":"432","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt834c5ddd9d65a669/75300.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6352207.pdf","pdfTwo":""},{"setId":"75271","name":"Luke Skywalker\'s Landspeeder\u2122","pieces":"236","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt749335fc92b5dde5/75271.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6310848.pdf","pdfTwo":""},{"setId":"75299","name":"Trouble on Tatooine\u2122","pieces":"276","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt8f85ab67d88afa2c/75299.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6350586.pdf","pdfTwo":""},{"setId":"75298","name":"AT-AT\u2122 vs. Tauntaun\u2122 Microfighters","pieces":"205","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt258ef75def4d72a4/75298.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6352211.pdf","pdfTwo":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6352020.pdf"},{"setId":"75317","name":"The Mandalorian\u2122 & the Child","pieces":"295","imgUrl":"https://www.lego.com/cdn/cs/set/assets/bltf26654748edaee26/75317.png?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6334518.pdf","pdfTwo":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6334520.pdf"},{"setId":"75295","name":"Millennium Falcon\u2122 Microfighter","pieces":"101","imgUrl":"https://www.lego.com/cdn/cs/set/assets/bltb5a2801de6500ffd/75295.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6351680.pdf","pdfTwo":""},{"setId":"75281","name":"Anakin\'s Jedi\u2122 Interceptor","pieces":"248","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt203dd5d020dced3d/75281.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6330123.pdf","pdfTwo":""},{"setId":"75248","name":"Resistance A-Wing Starfighter\u2122","pieces":"269","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt84b3b0caeadeb716/75248.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6296589.pdf","pdfTwo":""},{"setId":"75049","name":"Snowspeeder\u2122","pieces":"263","imgUrl":"https://img.bricklink.com/ItemImage/SN/0/75049-1.png","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6093676.pdf","pdfTwo":""},{"setId":"76201","name":"Captain Carter & The Hydra Stomper","pieces":"343","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt51facd580a3531aa/76201_alt2.png?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Marvel","array":"marvelArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltdd909357fcaf0a02/Marvel.png?format=png&height=60&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6380737.pdf","pdfTwo":""},{"setId":"42122","name":"Jeep Wrangler","pieces":"665","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt5ca8d7adce06a3a4/42122.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Technic","array":"technicArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/blt76e937a89531c42c/technic_logo_pos_100h.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6364779.pdf","pdfTwo":""},{"setId":"31107","name":"Space Rover Explorer","pieces":"510","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt7400a500c110cee2/31107.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Creator 3 in 1","array":"creatorArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/blt53e5eeb1dac31640/creator3in1_logo_pos_100h.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/cs/set/assets/blt7400a500c110cee2/31107.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","pdfTwo":""},{"setId":"31088","name":"Deep Sea Creatures","pieces":"230","imgUrl":"https://www.lego.com/cdn/cs/set/assets/bltc691d8d0172af5f1/31088.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Creator 3 in 1","array":"creatorArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/blt53e5eeb1dac31640/creator3in1_logo_pos_100h.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6263589.pdf","pdfTwo":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6263590.pdf"},{"setId":"31112","name":"Wild Lion","pieces":"224","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt5d05a1802f79d93a/31112.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Creator 3 in 1","array":"creatorArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/blt53e5eeb1dac31640/creator3in1_logo_pos_100h.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6351405.pdf","pdfTwo":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6351409.pdf"},{"setId":"75532","name":"Scout Trooper\u2122 & Speeder Bike\u2122","pieces":"452","imgUrl":"https://www.lego.com/cdn/cs/set/assets/bltaf70b0f1aded8d34/75532.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6218871.pdf","pdfTwo":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6199516.pdf"},{"setId":"30449","name":"The Milano","pieces":"64","imgUrl":"https://www.lego.com/cdn/product-assets/product.img.pri/30449_Prod.jpg","theme":"Marvel","array":"marvelArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltdd909357fcaf0a02/Marvel.png?format=png&height=60&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6196807.pdf","pdfTwo":""},{"setId":"30525","name":"The Guardians\' Ship","pieces":"69","imgUrl":"https://www.lego.com/cdn/cs/set/assets/bltbcad7f90bdc85d62/30525.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Marvel","array":"marvelArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltdd909357fcaf0a02/Marvel.png?format=png&height=60&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6231792.pdf","pdfTwo":""},{"setId":"40451","name":"Tatooine\u2122 Homestead","pieces":"217","imgUrl":"https://www.lego.com/cdn/cs/set/assets/bltb8c13a9c0fc09bf1/40451.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"","pdfTwo":""},{"setId":"40407","name":"Death Star II Battle","pieces":"235","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt2af49b1fcec18c52/40407.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6323940.pdf","pdfTwo":""},{"setId":"30497","name":"First Order Heavy Assault Walker\u2122","pieces":"54","imgUrl":"https://www.lego.com/cdn/product-assets/product.img.pri/30497_Prod.jpg","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6201722.pdf","pdfTwo":""},{"setId":"40422","name":"Frankenstein","pieces":"108","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt6afc2e64197cac35/40422.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"BrickHeadz","array":"brickArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/blt117f545a76e30723/brickheadz_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6328450.pdf","pdfTwo":""},{"setId":"40436","name":"Lucky Cat","pieces":"134","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt1595a03a848ef9c1/40436.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"BrickHeadz","array":"brickArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/blt117f545a76e30723/brickheadz_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6309022.pdf","pdfTwo":""},{"setId":"30388","name":"Imperial Shuttle\u2122","pieces":"85","imgUrl":"https://www.lego.com/cdn/cs/set/assets/bltd62739f15309e5a6/30388.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6356161.pdf","pdfTwo":""},{"setId":"75168","name":"Yoda\'s Jedi Starfighter\u2122","pieces":"262","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blt18fccdae03837f5e/75168.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6186617.pdf","pdfTwo":""},{"setId":"75312","name":"Boba Fett\u2019s Starship\u2122","pieces":"325","imgUrl":"https://www.lego.com/cdn/cs/set/assets/blteb1fa8e4ac4f2617/75312.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6382342.pdf","pdfTwo":""},{"setId":"75242","name":"Black Ace TIE Interceptor\u2122","pieces":"396","imgUrl":"https://www.lego.com/cdn/cs/set/assets/bltc20a77d50fef3d07/75242.jpg?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1.5","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6278405.pdf","pdfTwo":""},{"setId":"30384","name":"Snowspeeder\u2122","pieces":"49","imgUrl":"https://www.lego.com/cdn/product-assets/product.img.pri/30384_Prod.jpg","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6278169.pdf","pdfTwo":""},{"setId":"30386","name":"Poe Dameron\'s X-wing Fighter\u2122","pieces":"72","imgUrl":"https://www.lego.com/cdn/product-assets/product.img.pri/30386_Prod.jpg","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6310733.pdf","pdfTwo":""},{"setId":"30461","name":"Podracer\u2122","pieces":"58","imgUrl":"https://img.bricklink.com/ItemImage/SN/0/30461-1.original.png","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6296767.pdf","pdfTwo":""},{"setId":"30279","name":"Kylo Ren\'s Command Shuttle\u2122","pieces":"43","imgUrl":"https://www.lego.com/cdn/product-assets/product.img.pri/30279_prod.jpg","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6142970.pdf","pdfTwo":""},{"setId":"30380","name":"Kylo Ren\'s Shuttle","pieces":"33","imgUrl":"https://www.lego.com/cdn/product-assets/product.img.pri/30380_Prod.jpg","theme":"Star Wars","array":"starArr","themeLogo":"https://www.lego.com/cdn/cs/set/assets/bltc55693f0b8cc3375/starWars_logo_pos_300w.png?format=png&height=40&dpr=1","pdfOne":"https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6225823.pdf","pdfTwo":""}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.ca53af94.chunk.js.map