(function(t){function e(e){for(var i,a,l=e[0],d=e[1],r=e[2],u=0,p=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,r||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,l=1;l<n.length;l++){var d=n[l];0!==o[d]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var r=0;r<l.length;r++)e(l[r]);var c=d;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1131:function(t,e,n){},1282:function(t,e,n){},"1ae4":function(t,e,n){t.exports="./img/logo.5c1c02f5.svg"},"2b3c":function(t,e,n){},"2d75":function(t,e,n){t.exports="./img/profil.a7d1b1bb.png"},"3afa":function(t,e,n){"use strict";var i=n("1131"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("div",{staticStyle:{width:"75%",display:"flex","justify-content":"start"}},[n("router-link",{attrs:{to:"/"}},[t._v("Phonematon")])],1),n("div",{staticStyle:{width:"25%",display:"flex","justify-content":"space-around"}},[n("router-link",{attrs:{to:"/faq"}},[t._v("Comment ça marche ? ")]),n("router-link",{attrs:{to:"/about"}},[t._v("A propos")])],1)]),n("router-view"),n("footer",[n("router-link",{attrs:{to:"/condition-generale-utilisation"}},[t._v(" Condition generale d'utilisation")]),n("div",{staticStyle:{width:"10%"}}),n("router-link",{attrs:{to:"/mention-legal"}},[t._v(" Mentions légales")])],1)],1)},s=[],a=(n("5c0b"),n("2877")),l={},d=Object(a["a"])(l,o,s,!1,null,null,null),r=d.exports,c=n("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticStyle:{display:"flex",height:"100%"}},[n("div",{staticClass:"back",staticStyle:{width:"84%"}},[n("h1",[t._v(" Phonematon")]),n("p",[t._v("Entrez votre texte ici :")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.test,expression:"test"}],domProps:{value:t.test},on:{input:function(e){e.target.composing||(t.test=e.target.value)}}}),n("p",[t._v("Et obtenez le résultat ici :")]),n("div",{staticStyle:{"background-color":"white"},attrs:{id:"output"}})]),n("filterManager",{staticStyle:{width:"24%"},attrs:{phonemes:t.myJson.phonemes},on:{execute:function(e){return t.MakeWanted(e)}}})],1)])},p=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"background-color":"#f2f2f2",display:"flex","flex-direction":"column","justify-content":"space-between"}},[n("div",[t._m(0),n("div",{staticClass:"lister"},t._l(t.itemList,(function(e,i){return n("item",{key:e.id,attrs:{itemConfig:e},on:{askChangeDropDown:function(e){return t.askDropdownChange(e,i)},addItem:function(n){return t.AddItem(e,i)},removeItem:function(e){return t.RemoveItem(i)},Hey:function(e){return t.Hey(e,i)}}})})),1)]),n("button",{staticClass:"validateButton",on:{click:t.Validate}},[n("h1",{staticClass:"TitleButtonShadow"},[t._v("APPPLY")])])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h1",{staticClass:"TitleShadow"},[t._v("FILTRE")])])}],m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{warning:t.itemConfig.currentlyUsed>1},attrs:{id:"item"}},[t.itemConfig.active?t._e():i("button",{staticClass:"button success block",attrs:{type:"button"},on:{click:function(e){return t.$emit("addItem")}}},[i("img",{attrs:{alt:"Vue logo",src:n("ae89")}})]),t.itemConfig.active?i("button",{staticClass:"button danger block",attrs:{type:"button"},on:{click:function(e){return t.$emit("removeItem")}}},[i("img",{attrs:{alt:"Vue logo",src:n("c657")}})]):t._e(),t.itemConfig.active?i("dropdown",{staticClass:"block",attrs:{config:t.itemConfig.dropDownConfig},on:{setSelectedOption:function(e){return t.$emit("askChangeDropDown",e)}}}):t._e(),t.itemConfig.active?i("input",{staticClass:"inputColor block",attrs:{type:"color"},domProps:{value:t.itemConfig.color},on:{change:function(e){return t.$emit("Hey",e)}}}):t._e()],1)},g=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown",class:{expanded:t.isExpanded},style:t.computedStyles,on:{click:t.toggleRiskLevels}},[n("div",{staticClass:"dropdown-label-container"},[n("div",{staticClass:"dropdown-label"},[n("span",{staticClass:"text"},[t._v("\n        "+t._s((t.config&&t.config.prefix?t.config.prefix:"")+" ")+t._s(t.config&&t.config.options[t.config.selectedIndex]?t.config.options[t.config.selectedIndex].notation:t.placeholder.notation)+"\n      ")]),n("i",{staticClass:"angle-down",class:{toggled:t.isExpanded}})])]),n("div",{directives:[{name:"expand",rawName:"v-expand",value:t.isExpanded,expression:"isExpanded"}],staticClass:"options expand"},t._l(t.config.options,(function(e,i){return n("div",{key:e.id,staticClass:"option",on:{click:function(n){return t.$emit("setSelectedOption",{option:e,index:i})}}},[t._v(t._s(e.notation))])})),0)])},y=[],b={name:"dropdown",props:{config:{required:!0}},data(){return{isBottomSectionToggled:!1,optionsHeight:0,optionHeight:35,configOptions:[],backgroundColor:"#cde4f5",backgroundExpandedColor:"#fff",hoverBackgroundColor:"#0084d4",isExpanded:!1,placeholder:"Placeholder",textColor:"black",borderRadius:"1.5em",border:"1px solid gray",width:180}},components:{},computed:{computedStyles:function(){return[{"--options-height":this.optionsHeight+"px"},{"--options-height-neg":"-"+this.optionsHeight+"px"},{"--option-height":this.optionHeight+"px"},{"--main-el-border-radius":this.borderRadius},{"--dropdown-width":this.width+"px"},{"--dropdown-background-color":this.backgroundColor},{"--dropdown-expanded-color":this.backgroundExpandedColor},{"--dropdown-border":this.border},{"--dropdown-hover-background-color":this.hoverBackgroundColor},{"--dropdown-default-text-color":this.textColor}]}},directives:{expand:{inserted:function(t,e){if(null!==e.value){function n(){const e=t.getAttribute("aria-expanded");t.classList.add("u-no-transition"),t.removeAttribute("aria-expanded"),t.style.height=null,t.style.height=t.clientHeight+"px",t.setAttribute("aria-expanded",e),setTimeout((function(){t.classList.remove("u-no-transition")}))}t.classList.add("expand"),t.setAttribute("aria-expanded",e.value?"true":"false"),n(),window.addEventListener("resize",n)}},update:function(t,e){t.style.height&&null!==e.value&&t.setAttribute("aria-expanded",e.value?"true":"false")}}},methods:{toggleRiskLevels(){this.isExpanded=!this.isExpanded},setOptionsHeight(){this.optionsHeight=this.optionHeight*this.configOptions.length}},created(){this.setOptionsHeight()},beforeUdate(){},mounted(){}},x=b,w=(n("6551"),Object(a["a"])(x,v,y,!1,null,"75fc538f",null)),A=w.exports,C={name:"filter",components:{dropdown:A},props:{itemConfig:{required:!0}},data(){return{config:{options:[{value:"option 1"},{value:"option 2"},{value:"option 3"}],placeholder:"Placeholder",backgroundColor:"#cde4f5",textColor:"black",borderRadius:"1.5em",border:"1px solid gray",width:180}}},methods:{updateEditorColor:function(t,e,n){console.log("Hello world!")}},created(){}},_=C,S=(n("3afa"),Object(a["a"])(_,m,g,!1,null,"3304033e",null)),j=S.exports,B={name:"filterManager",components:{item:j},props:{phonemes:{type:Array,required:!0}},data(){return{itemList:[],selectedPhonemId:[],currentIndex:0}},methods:{askDropdownChange(t,e){let n=this.itemList[e];if(n.currentlyUsed>1){let t=n.dropDownConfig.selectedId;this.itemListUseChecker(-1,t,e)}n.dropDownConfig.selectedId=t.option.id,n.dropDownConfig.selectedIndex=t.index,this.itemListSameCounter(t.option.id)},itemListUseChecker(t,e,n){for(let i=0;i<this.itemList.length-1;i++){let o=this.itemList[i];i!=n&&o.dropDownConfig.selectedId==e&&(o.currentlyUsed+=t)}},itemListSameCounter(t){let e=[];for(let n=0;n<this.itemList.length-1;n++){let i=this.itemList[n];i.dropDownConfig.selectedId==t&&e.push(n)}e.forEach(t=>{this.itemList[t].currentlyUsed=e.length})},AddItem(t,e){return this.itemList.length<this.phonemes.length+1&&(this.itemList[e].active=!0,this.itemList.push({id:e+1,currentlyUsed:1,active:!1,color:"#FF0000",dropDownConfig:{options:this.phonemes,selectedIndex:0,selectedId:0}}),this.itemListSameCounter(0)),!0},RemoveItem(t){this.itemList.splice(t,1)},Validate(){let t=[],e=[];for(let n=0;n<this.itemList.length-1;n++){let i=this.itemList[n];-1==t.indexOf(i.dropDownConfig.selectedId)&&(t.push(i.dropDownConfig.selectedId),e.push(this.phonemes[i.dropDownConfig.selectedIndex]),e[e.length-1]["color"]=this.itemList[e.length-1]["color"])}this.$emit("execute",e)},Hey(t,e){this.itemList[e].color=t.target.value}},mounted(){this.itemList.push({id:0,currentlyUsed:1,active:!1,color:"",dropDownConfig:{options:this.phonemes,selectedIndex:0,selectedId:0}}),console.log(this.itemList[0])}},k=B,E=(n("8047"),Object(a["a"])(k,h,f,!1,null,"a9e4c2e0",null)),O=E.exports,I=n("b0c1"),H={name:"home",components:{filterManager:O},data(){return{test:"",myJson:I}},methods:{MakeWanted(t){this.ClearResult(),console.log("childNodes : ",document.getElementById("output").childNodes);let e=[],n=JSON.parse(JSON.stringify(this.test)),i=JSON.parse(JSON.stringify(this.test));console.log("phonem list : ",t);for(let o=0;o<t.length;o++){console.log("p : ",o);for(let s=0;s<t[o].madeBy.length;s++){console.log("m : ",s),console.log(t[o].madeBy[s]),console.log(n),console.log(i);while(n.indexOf(t[o].madeBy[s].with)>=0){console.log(n),console.log(i);let a=n.indexOf(t[o].madeBy[s].with);console.log(this.TestConditions(t[o].madeBy[s],this.test,a)),this.TestConditions(t[o].madeBy[s],this.test,a)&&(console.log("passed"),console.log(t[o]["color"]),e[a]=this.CreateSpan(t[o].madeBy[s].with,t[o]["color"]),i=i.replaceAt(a,"-")),n=n.replace(t[o].madeBy[s].with,"-"),console.log("-----------------------------------------------")}}}console.log("childNodes : ",document.getElementById("output").childNodes),console.log(n),console.log(i),console.log(e),this.FindAllRest(e,i)},TestConditions(t,e,n){if(Object.keys(t.conditions).length>0){let i=Object.keys(t.conditions),o=[];for(let s=0;s<i.length;s++){let a=i[s],l=this.myJson.conditions[a],d=this.TestList(t.conditions[a],e,n,l.needs,l.sense);o.push(d),console.log("result: "+d)}if(!(o.length>1))return o[0];switch(t.gate){case"or":return!(!o[0]&&!o[1]);case"and":return!(!o[0]||!o[1])}}return!0},TestList(t,e,n,i,o){for(let s=0;s<t.length;s++){let a=t[s];if(console.log("needs: "+i),console.log("sense: "+o),console.log(e.substr(n-(o?-1:a.length),a.length)),console.log(a),e.substr(n-(o?-1:a.length),a.length)==a)return console.log("ya"),i}return t.length>0?!i:i},FindAllRest(t,e){let n="",i=0;for(let o=0;o<e.length;o++)"-"==e[o]?(n.length>0&&(t[i]=this.CreateSpan(n,"000000")),i=o+1,n=""):n+=e[o];n.length>0&&(t[i]=this.CreateSpan(n,"000000")),this.FillResult(t)},ClearResult(){let t=document.getElementById("output");if(t.hasChildNodes()){var e=t.lastElementChild;while(e)t.removeChild(e),e=t.lastElementChild}console.log("childNodes : ",t.childNodes)},FillResult(t){console.warn("Fill Result"),console.log("childNodes : ",document.getElementById("output").childNodes),console.log("tab : ",t);for(let e=0;e<t.length;e++)void 0!=t[e]&&document.getElementById("output").appendChild(t[e])},CreateSpan(t,e){var n=document.createElement("span");return n.innerText=t,n.style.color=e,n}},mounted(){let t=document.getElementById("output");console.log(t)}},L=H,M=(n("cccb"),Object(a["a"])(L,u,p,!1,null,null,null)),N=M.exports,Y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",{staticStyle:{"font-family":"'Fredoka One'"}},[t._v("Phonematon comment ça marche ? ")]),i("p",{staticStyle:{width:"500px","text-align":"justify",margin:"auto"}},[t._v("\n        Pour utiliser Phonematon vous devez tout d'abord sélectionner des phonèmes dans votre filtre puis l'appliquer au texte que vous lui donnez. Les étapes suivante vont vous aider à réaliser ceci :\n    ")]),i("div",{staticClass:"line"},[i("div",{staticStyle:{width:"50%"}},[i("h2",{staticStyle:{"text-align":"start","font-family":"'Fredoka One'"}},[t._v("1. Comment crée un phoneme")]),i("p",{staticStyle:{width:"350px","text-align":"left"}},[t._v(" Pour ajouter un phonème il suffit de cliquer sur le petit plus dans la liste à droite ")])]),i("div",{staticStyle:{width:"50%",display:"flex","justify-content":"end"}},[i("img",{attrs:{src:n("5a18")}})])]),i("div",{staticClass:"line"},[i("div",{staticStyle:{width:"50%",display:"flex","justify-content":"start"}},[i("img",{attrs:{src:n("be4d")}})]),i("div",{staticStyle:{width:"50%"}},[i("h2",{staticStyle:{"text-align":"end","font-family":"'Fredoka One'"}},[t._v("2. Comment modifier un phoneme")]),i("div",{staticStyle:{display:"flex","flex-direction":"row-reverse"}},[i("p",{staticStyle:{width:"350px","text-align":"right"}},[t._v(" Vous pouvez sélectionner le son de votre choix\n                    Puis sélectionnez la couleur qui sera attribuée à ce son (cette couleur est la couleur qui sera affichée à la place du son s'il est trouvé) ")])])])]),i("div",{staticClass:"line"},[i("div",{staticStyle:{width:"50%"}},[i("h2",{staticStyle:{"text-align":"start","font-family":"'Fredoka One'"}},[t._v("3. Appliquer le filtre")]),i("p",{staticStyle:{width:"350px","text-align":"left"}},[t._v(" Une fois que les phonèmes souhaités ont été ajoutés. Entrez le texte dans l'encadrer prévue à cet effet puis cliquer sur le bouton appliquer")])]),i("div",{staticStyle:{width:"50%",display:"flex","justify-content":"flex-end"}},[i("img",{attrs:{src:n("8af1")}})])]),i("div",{staticClass:"line"},[i("div",{staticStyle:{width:"50%",display:"flex","justify-content":"flex-start"}},[i("img",{attrs:{src:n("7ca0")}})]),i("div",{staticStyle:{width:"50%"}},[i("h2",{staticStyle:{"text-align":"end","font-family":"'Fredoka One'"}},[t._v("4. Comment supprimer un phoneme")]),i("div",{staticStyle:{display:"flex","flex-direction":"row-reverse"}},[i("p",{staticStyle:{width:"350px","text-align":"right","margin-right":"0px"}},[t._v(" Si jamais vous souhaitez supprimer un phonème il vous suffit tout simplement de cliquer sur le bouton moins ")])])])])])}],D={name:"Faq"},F=D,P=(n("67e9"),Object(a["a"])(F,Y,R,!1,null,"7e26967e",null)),q=P.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("div",{staticStyle:{display:"flex"}},[i("div",[i("h1",[t._v(" A propos de l'outil")]),i("p",{staticStyle:{width:"90%"}},[t._v(" Cet outil à été réaliser en juillet 2020 dans le but d'aider les personnes à mettre en valeur les sons dans un texte")]),i("p",{staticStyle:{width:"90%"}},[t._v(" Si jamais vous trouver un bug n'hésiter pas à m'envoyer un email : "),i("b",[t._v("elisabeth.nathanael@gmail.com")]),t._v(" ( envoyer une photo du bug ou un descriptif précis ) ")])]),i("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center"}},[i("img",{attrs:{src:n("1ae4"),width:"300px"}})])]),i("div",{staticStyle:{display:"flex"}},[i("div",[i("p",[i("img",{attrs:{src:n("2d75"),height:"400"}})])]),i("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center"}},[i("h1",[t._v(" A propos du créateur")]),i("p",[t._v(" Je me présente Elisabeth Nathanael, je suis étudiant en informatique en deuxiéme année")]),i("p",[t._v(" Si jamais vous avez des idée d'outil dans le même style ou que vous avez une idée autour du développement web et vidéo ludique n'hésiter pas à me contacter sur mon email : "),i("b",[t._v("elisabeth.nathanael@gmail.com")])])])])])}],T={name:"About"},U=T,J=(n("e76e"),Object(a["a"])(U,z,W,!1,null,null,null)),G=J.exports;i["a"].use(c["a"]);var $=new c["a"]({routes:[{path:"/",name:"home",component:N},{path:"/faq",name:"foire au question",component:q},{path:"/about",name:"about",component:G}]});String.prototype.replaceAt=function(t,e){return this.substr(0,t)+e+this.substr(t+e.length)},i["a"].config.productionTip=!1,new i["a"]({router:$,render:function(t){return t(r)}}).$mount("#app")},"5a18":function(t,e,n){t.exports="./img/step_1.0e4d03bf.svg"},"5c0b":function(t,e,n){"use strict";var i=n("e332"),o=n.n(i);o.a},6551:function(t,e,n){"use strict";var i=n("ef30"),o=n.n(i);o.a},"67e9":function(t,e,n){"use strict";var i=n("1282"),o=n.n(i);o.a},"7ca0":function(t,e,n){t.exports="./img/step_3.a993174f.svg"},8047:function(t,e,n){"use strict";var i=n("97f8"),o=n.n(i);o.a},"8af1":function(t,e,n){t.exports="./img/step_4.574c176d.svg"},"97f8":function(t,e,n){},ae89:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNWRHWFIAAADlSURBVGhD1c4hjkRBDEPBuf+l/7IGrVKADTprqchTQH7f9/07jNsxbse4HeN2jNsxbse4HWNhmu4jjIVpuo8wFqbpPsJYmKb7CGNhmu4jjIVpuo8wFqbpPsJYmKb7CGNhmu4jjIVpuo8wFqbpPsJ4eTH9cTBeXkx/HIyXF9MfB+PlxfTHwXh5Mf1xMF5eTH8cjJcX0x8HY2Ga7iOMhWm6jzAWpuk+wliYpvsIY2Ga7iOMhWm6jzAWpuk+wliYpvsIY2Ga7iOMhWm6jzAWpuk+wrgd43aM2zFux7gd43aM2zHu9v3+ABBoCFjXZLAGAAAAAElFTkSuQmCC"},b0c1:function(t){t.exports=JSON.parse('{"phonemes":[{"id":1,"notation":["a"],"madeBy":[{"with":"a","gate":"and","conditions":{}}]},{"id":2,"notation":["i"],"madeBy":[{"with":"i","gate":"and","conditions":{"ufb":["n","m"]}}]},{"id":3,"notation":["y"],"madeBy":[{"with":"u","gate":"and","conditions":{}}]},{"id":4,"notation":["ɔ"],"madeBy":[{"with":"o","gate":"and","conditions":{}}]},{"id":5,"notation":["ə"],"madeBy":[{"with":"e","gate":"and","conditions":{"ufb":["au","u","in","n","m","i","t","r","z"]}}]},{"id":6,"notation":["e"],"madeBy":[{"with":"é","gate":"and","conditions":{}},{"with":"e","gate":"and","conditions":{"fb":["r","z"],"ufb":["au","u","in","n","m","i","t"]}}]},{"id":7,"notation":["ɛ"],"madeBy":[{"with":"e","gate":"and","conditions":{"fb":["i","t"],"ufb":["au","u","in","n","m","r","z"]}},{"with":"a","gate":"and","conditions":{"fb":["i"]}}]},{"id":8,"notation":["ø","œ"],"madeBy":[{"with":"e","gate":"and","conditions":{"fb":["u"],"ufb":["au","in","n","m","i","t","r","z"]}}]},{"id":9,"notation":["u"],"madeBy":[{"with":"ou","gate":"and","conditions":{}}]},{"id":10,"notation":["ɑ̃"],"madeBy":[{"with":"a","gate":"and","conditions":{"fb":["n","m"]}},{"with":"e","gate":"and","conditions":{"fb":["n","m"],"ufb":["au"]}}]},{"id":11,"notation":["ɛ"],"madeBy":[{"with":"i","gate":"and","conditions":{"fb":["n"],"ufb":["m"]}}]},{"id":12,"notation":["ɔ"],"madeBy":[{"with":"on","gate":"and","conditions":{}}]},{"id":13,"notation":["wa"],"madeBy":[{"with":"o","gate":"and","conditions":{"fb":["i"]}}]},{"id":14,"notation":"[o]","madeBy":[{"with":"o","gate":"and","conditions":{"ufb":["i"]}},{"with":"e","gate":"and","conditions":{"fb":["au"],"ufb":["u","in","n","m","i","t","r","z"]}},{"with":"a","gate":"and","conditions":{"fb":["u"]}}]},{"id":15,"notation":["l"],"madeBy":[{"with":"l","gate":"and","conditions":{}}]},{"id":16,"notation":["r"],"madeBy":[{"with":"r","gate":"and","conditions":{}}]},{"id":17,"notation":["t"],"madeBy":[{"with":"t","gate":"and","conditions":{}}]},{"id":18,"notation":["p"],"madeBy":[{"with":"p","gate":"and","conditions":{}}]},{"id":19,"notation":["b"],"madeBy":[{"with":"b","gate":"and","conditions":{}}]},{"id":20,"notation":["d"],"madeBy":[{"with":"d","gate":"and","conditions":{}}]},{"id":21,"notation":["k"],"madeBy":[{"with":"c","gate":"and","conditions":{}},{"with":"q","gate":"and","conditions":{"fb":["u"]}}]},{"id":23,"notation":["g"],"madeBy":[{"with":"g","gate":"and","conditions":{"fb":["a","o","u"],"ufb":["e"]}}]},{"id":24,"notation":["f"],"madeBy":[{"with":"f","gate":"and","conditions":{}},{"with":"p","gate":"and","conditions":{"fb":["h"]}}]},{"id":25,"notation":["v"],"madeBy":[{"with":"v","gate":"and","conditions":{}}]},{"id":26,"notation":["s"],"madeBy":[{"with":"s","gate":"or","conditions":{"ubb":["a","e","i","o","u","y"],"ufb":["a","e","i","o","u","y"]}}]},{"id":26,"notation":["z"],"madeBy":[{"with":"s","gate":"and","conditions":{"bb":["a","e","i","o","u","y"],"fb":["a","e","i","o","u","y"]}}]}],"conditions":{"fb":{"sense":true,"needs":true},"ufb":{"sense":true,"needs":false},"bb":{"sense":false,"needs":true},"ubb":{"sense":false,"needs":false}}}')},be4d:function(t,e,n){t.exports="./img/step_2.22117c8b.svg"},c657:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNWRHWFIAAACRSURBVGhD1c4hDgNBDATB+/+nN8zAKu7OSEUazffe+zuMdYx1jHWMdYx1jHWMdYx1jHWMdYx1jHWMdYx1jHWMdYx1jHWMy8X0YzAuF9OPwbhcTD8G43Ix/RiMy8X0YzAuF9OPwbhcTD8GYx1jHWMdYx1jHWMdYx1jHWMdYx1jHWMdYx1jHWMdYx1jHWMdY9v7fhxmbuORn3nLAAAAAElFTkSuQmCC"},cccb:function(t,e,n){"use strict";var i=n("d563"),o=n.n(i);o.a},d563:function(t,e,n){},e332:function(t,e,n){},e76e:function(t,e,n){"use strict";var i=n("2b3c"),o=n.n(i);o.a},ef30:function(t,e,n){}});
//# sourceMappingURL=app.3d3edb19.js.map