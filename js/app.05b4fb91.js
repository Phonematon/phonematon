(function(t){function e(e){for(var i,a,l=e[0],r=e[1],d=e[2],u=0,h=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);c&&c(e);while(h.length)h.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,l=1;l<n.length;l++){var r=n[l];0!==o[r]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var c=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07b9":function(t,e,n){"use strict";n("2186")},1190:function(t,e,n){},"1ae4":function(t,e,n){t.exports="img/logo.5c1c02f5.svg"},2186:function(t,e,n){},"2d75":function(t,e,n){t.exports="img/profil.a7d1b1bb.png"},"56d7":function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("div",{staticStyle:{width:"75%",display:"flex","justify-content":"start"}},[n("router-link",{attrs:{to:"/"}},[t._v("Phonematon")])],1),n("div",{staticStyle:{width:"25%",display:"flex","justify-content":"space-around"}},[n("router-link",{attrs:{to:"/faq"}},[t._v("Comment ça marche ? ")]),n("router-link",{attrs:{to:"/about"}},[t._v("A propos")])],1)]),n("router-view"),n("footer",[n("router-link",{attrs:{to:"/condition-generale-utilisation"}},[t._v(" Condition generale d'utilisation")]),n("div",{staticStyle:{width:"10%"}}),n("router-link",{attrs:{to:"/mention-legal"}},[t._v(" Mentions légales")])],1)],1)},s=[],a=(n("5c0b"),n("2877")),l={},r=Object(a["a"])(l,o,s,!1,null,null,null),d=r.exports,c=n("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticStyle:{display:"flex",height:"100%"}},[n("div",{staticClass:"back",staticStyle:{width:"84%"}},[n("h1",[t._v(" Phonematon")]),n("p",[t._v("Entrez votre texte ici :")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.test,expression:"test"}],domProps:{value:t.test},on:{change:t.changText,input:function(e){e.target.composing||(t.test=e.target.value)}}}),n("p",[t._v("Et obtenez le résultat ici :")]),n("div",{staticStyle:{"background-color":"white"},attrs:{id:"output"}})]),n("filterManager",{staticStyle:{width:"24%"},attrs:{phonemes:t.phonemesList},on:{execute:function(e){return t.MakeWanted(e)}}})],1)])},h=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"background-color":"#f2f2f2",display:"flex","flex-direction":"column","justify-content":"space-between"}},[n("div",[t._m(0),n("div",{staticClass:"lister"},t._l(t.itemList,(function(e,i){return n("item",{key:e.id,attrs:{itemConfig:e},on:{askChangeDropDown:function(e){return t.itemDropDownChange(e,i)},addItem:function(n){return t.AddItem(e,i)},removeItem:function(e){return t.RemoveItem(i)},askColorChange:function(e){return t.itemColorChange(e,i)}}})})),1)]),n("button",{staticClass:"validateButton",on:{click:t.Validate}},[n("h1",{staticClass:"TitleButtonShadow"},[t._v("APPPLY")])])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h1",{staticClass:"TitleShadow"},[t._v("FILTRE")])])}],g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{warning:t.itemConfig.currentlyUsed>1},attrs:{id:"item"}},[t.itemConfig.active?t._e():i("button",{staticClass:"button success block",attrs:{type:"button"},on:{click:function(e){return t.$emit("addItem")}}},[i("img",{attrs:{alt:"Vue logo",src:n("ae89")}})]),t.itemConfig.active?i("button",{staticClass:"button danger block",staticStyle:{margin:"7.5px 10px auto 0px"},attrs:{type:"button"},on:{click:function(e){return t.$emit("removeItem")}}},[i("img",{attrs:{alt:"Vue logo",src:n("c657")}})]):t._e(),t.itemConfig.active?i("dropdown",{staticClass:"block",attrs:{config:t.itemConfig.dropDownConfig},on:{setSelectedOption:function(e){return t.$emit("askChangeDropDown",e)}}}):t._e(),t.itemConfig.active?i("input",{staticClass:"inputColor block",staticStyle:{width:"45px",margin:"5px 0px auto 0px"},attrs:{type:"color"},domProps:{value:t.itemConfig.color},on:{change:function(e){return t.$emit("askColorChange",e)}}}):t._e()],1)},f=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"currentOption"},[null!=t.currentOption?n("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[n("div",{staticClass:"currentDropdownOption"},[t._v(t._s(t.currentOption.notation))]),n("div",{on:{click:function(e){return t.toggleDropDown()}}},[t._v("▼")])]):t._e()]),t.dropdownOn?n("div",{staticClass:"dropdown"},t._l(t.config.options,(function(e,i){return n("div",{staticClass:"dropdownOption",on:{click:function(n){t.selectOption(i),t.$emit("setSelectedOption",{option:e,index:i})}}},[t._v(t._s(e.notation))])})),0):t._e()])},y=[],w={name:"DropDown",props:{config:{required:!0}},data(){return{dropdownOptions:["A","B","C","D","E","F","G","H","I","J","K"],dropdownOn:!1,currentOption:null}},methods:{toggleDropDown(){this.dropdownOn=!this.dropdownOn},selectOption(t){this.config.selectedIndex=t,this.config.selectedId=this.config.options[t].id,this.currentOption=this.config.options[t],this.dropdownOn=!1}},mounted(){this.currentOption=this.config.options[this.config.selectedIndex]}},b=w,A=(n("8d9a"),Object(a["a"])(b,v,y,!1,null,"4a73c2b2",null)),x=A.exports,S={name:"filter",components:{Dropdown:x},props:{itemConfig:{required:!0}},data(){return{config:{}}},methods:{},created(){console.log("itemConfig : ",this.itemConfig)}},C=S,_=(n("7bb1"),Object(a["a"])(C,g,f,!1,null,"b2e17744",null)),j=_.exports,O={name:"filterManager",components:{item:j},props:{phonemes:{type:Array,required:!0}},data(){return{itemList:[],selectedPhonemId:[],currentIndex:0}},methods:{itemDropDownChange(t,e){let n=this.itemList[e];if(n.currentlyUsed>1){let t=n.dropDownConfig.selectedId;this.itemListUseChecker(-1,t,e)}n.dropDownConfig.selectedId=t.option.id,n.dropDownConfig.selectedIndex=t.index,this.itemListSameCounter(t.option.id)},itemColorChange(t,e){this.itemList[e].color=t.target.value},itemListUseChecker(t,e,n){for(let i=0;i<this.itemList.length-1;i++){let o=this.itemList[i];i!=n&&o.dropDownConfig.selectedId==e&&(o.currentlyUsed+=t)}},itemListSameCounter(t){let e=[];for(let n=0;n<this.itemList.length-1;n++){let i=this.itemList[n];i.dropDownConfig.selectedId==t&&e.push(n)}e.forEach(t=>{this.itemList[t].currentlyUsed=e.length})},AddItem(t,e){return this.itemList.length<this.phonemes.length+1&&(this.itemList[e].active=!0,this.itemList.push({id:e+1,currentlyUsed:1,active:!1,color:"#FF0000",dropDownConfig:{options:this.phonemes,selectedIndex:0,selectedId:0}}),this.itemListSameCounter(0)),!0},RemoveItem(t){this.itemList.splice(t,1)},Validate(){let t=[],e=[];for(let n=0;n<this.itemList.length-1;n++){let i=this.itemList[n];if(-1===t.indexOf(i.dropDownConfig.selectedId)){t.push(i.dropDownConfig.selectedId);let n=this.phonemes[i.dropDownConfig.selectedIndex];e.push({color:i["color"],madeBy:n["madeBy"],id:n["id"]})}}console.log("phonemesList : ",e),this.$emit("execute",e)}},mounted(){console.warn("--- [ FILTER MANGER : MOUNTED ] ---"),console.log("this.phonemes :",this.phonemes),this.itemList.push({id:0,currentlyUsed:1,active:!1,color:"#FF0000",dropDownConfig:{options:this.phonemes,selectedIndex:0,selectedId:0}}),console.log(this.itemList[0])}},B=O,E=(n("07b9"),Object(a["a"])(B,p,m,!1,null,"65342db7",null)),I=E.exports,D=n("b0c1"),k={name:"home",components:{filterManager:I},data(){return{test:"",phonemesList:D.phonemes,conditions:D.conditions}},methods:{changText(){localStorage.setItem("text",this.test)},TestConditions(t,e,n){if(console.log("madeBy : ",t),console.log("text : ",e),console.log("currentIndex : ",n),Object.keys(t["conditions"]).length>0){let i=Object.keys(t["conditions"]),o=[];for(let s=0;s<i.length;s++){let a=i[s],l=this.conditions[a],r=this.TestList(t["conditions"][a],e,n,l.needs,l.sense);o.push(r),console.log("result: "+r)}if(!(o.length>1))return o[0];switch(t.gate){case"or":return!(!o[0]&&!o[1]);case"and":return!(!o[0]||!o[1])}}return!0},TestList(t,e,n,i,o){for(let s=0;s<t.length;s++){let a=t[s];console.log("p : ",a),console.log("text.length : ",e.length);for(let t=0;t<e.length;t++)console.log("letter : ",e[t]);if(console.log("currentIndex : ",n),console.log("needs: "+i),console.log("sense: "+o),"`"===a&&n===e.length-1)return!1;if(console.log("currentIndex : "+n),console.log("sense : "+o),console.log("(sense ? -1 : p.length) : "+(o?-1:a.length)),console.log("currentIndex - (sense ? -1 : p.length) : "+(n-(o?-1:a.length))),console.log(e.substr(n-(o?-1:a.length),a.length)),console.log(a),e.substr(n-(o?-1:a.length),a.length)===a)return console.log("ya"),i}return t.length>0?!i:i},FindAllRest(t,e){console.warn("--- [ FINDALLREST : START ] ---");let n="",i=0;for(let o=0;o<e.length;o++)"-"===e[o]?(n.length>0&&(t[i]=this.CreateSpan(n,"000000")),i=o+1,n=""):n+=e[o];n.length>0&&(t[i]=this.CreateSpan(n,"000000")),console.warn("--- [ FINDALLREST : END ] ---"),this.FillResult(t)},ClearResult(){console.warn("--- [ CLEAR RESULT : START ] ---");let t=document.getElementById("output");console.log(t),console.log("outputDiv.childNodes.length : ",t.childNodes.length),console.log("outputDiv.childElementCount : ",t.childElementCount),console.log("outputDiv.hasChildNodes() : ",t.hasChildNodes()),console.log("doc.firstChild : ",t.firstChild);while(null!==t.firstChild)console.log("doc.firstElementChild : ",t.firstChild),t.removeChild(t.lastChild);console.log("childNodes : ",t.childNodes),console.warn("--- [ CLEAR RESULT : END ] ---")},FillResult(t){console.warn("Fill Result"),console.log("childNodes : ",document.getElementById("output").childNodes),console.log("tab : ",t);for(let e=0;e<t.length;e++)void 0!==t[e]&&document.getElementById("output").appendChild(t[e])},CreateSpan(t,e){console.warn("--- [ CREATESPAN : START ] ---"),console.log("spanText : ",t),console.log("spanColor : ",e);let n=document.createElement("span");return n.innerText=t,n.style.color=e,console.warn("--- [ CREATESPAN : END ] ---"),n},MakeWanted(t){this.ClearResult();let e=[],n=JSON.parse(JSON.stringify(this.test));console.log("text : ",n),n=n.split(" ").join("`");let i=JSON.parse(JSON.stringify(this.test));console.log("finalText : ",i);let o=t;console.log("filterPhonemeList : ",o),o.forEach((t,o)=>{console.log("currentPhoneme :",t),t.madeBy.forEach((o,s)=>{console.log("currentMethod : ",o);while(n.indexOf(o["with"])>-1){let s=n.indexOf(o["with"]);this.TestConditions(o,n,s)?(console.log("Condition Passed"),console.log("method.with :",o["with"]),console.log("Current State of text : ",n),console.log("Current State of finalText : ",i),n=n.replaceAt(s,"-".repeat(o["with"].length)),i=i.replaceAt(s,"-".repeat(o["with"].length)),console.log("Current State of text : ",n),console.log("Current State of finalText : ",i),e[s]=this.CreateSpan(o.with,t["color"]),console.log("tab : ",e)):(console.log("method.with :",o["with"]),n=n.replaceAt(s,"-".repeat(o["with"].length)),console.log("Current State of text : ",n))}})}),console.log("Current State of text : ",n),console.log("Current State of finalText : ",i),console.log("tab : ",e),this.FindAllRest(e,i)}},mounted(){let t=document.getElementById("output");console.log("aie : ",t),void 0!=localStorage.getItem("text")&&""!=localStorage.getItem("text")&&(this.test=localStorage.getItem("text"))}},L=k,T=(n("cccb"),Object(a["a"])(L,u,h,!1,null,null,null)),N=T.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",{staticStyle:{"font-family":"'Fredoka One'"}},[t._v("Phonematon comment ça marche ? ")]),i("p",{staticStyle:{width:"500px","text-align":"justify",margin:"auto"}},[t._v(" Pour utiliser Phonematon vous devez tout d'abord sélectionner des phonèmes dans votre filtre puis l'appliquer au texte que vous lui donnez. Les étapes suivante vont vous aider à réaliser ceci : ")]),i("div",{staticClass:"line"},[i("div",{staticStyle:{width:"50%"}},[i("h2",{staticStyle:{"text-align":"start","font-family":"'Fredoka One'"}},[t._v("1. Comment crée un phoneme")]),i("p",{staticStyle:{width:"350px","text-align":"left"}},[t._v(" Pour ajouter un phonème il suffit de cliquer sur le petit plus dans la liste à droite ")])]),i("div",{staticStyle:{width:"50%",display:"flex","justify-content":"end"}},[i("img",{attrs:{src:n("5a18")}})])]),i("div",{staticClass:"line"},[i("div",{staticStyle:{width:"50%",display:"flex","justify-content":"start"}},[i("img",{attrs:{src:n("be4d")}})]),i("div",{staticStyle:{width:"50%"}},[i("h2",{staticStyle:{"text-align":"end","font-family":"'Fredoka One'"}},[t._v("2. Comment modifier un phoneme")]),i("div",{staticStyle:{display:"flex","flex-direction":"row-reverse"}},[i("p",{staticStyle:{width:"350px","text-align":"right"}},[t._v(" Vous pouvez sélectionner le son de votre choix Puis sélectionnez la couleur qui sera attribuée à ce son (cette couleur est la couleur qui sera affichée à la place du son s'il est trouvé) ")])])])]),i("div",{staticClass:"line"},[i("div",{staticStyle:{width:"50%"}},[i("h2",{staticStyle:{"text-align":"start","font-family":"'Fredoka One'"}},[t._v("3. Appliquer le filtre")]),i("p",{staticStyle:{width:"350px","text-align":"left"}},[t._v(" Une fois que les phonèmes souhaités ont été ajoutés. Entrez le texte dans l'encadrer prévue à cet effet puis cliquer sur le bouton appliquer")])]),i("div",{staticStyle:{width:"50%",display:"flex","justify-content":"flex-end"}},[i("img",{attrs:{src:n("8af1")}})])]),i("div",{staticClass:"line"},[i("div",{staticStyle:{width:"50%",display:"flex","justify-content":"flex-start"}},[i("img",{attrs:{src:n("7ca0")}})]),i("div",{staticStyle:{width:"50%"}},[i("h2",{staticStyle:{"text-align":"end","font-family":"'Fredoka One'"}},[t._v("4. Comment supprimer un phoneme")]),i("div",{staticStyle:{display:"flex","flex-direction":"row-reverse"}},[i("p",{staticStyle:{width:"350px","text-align":"right","margin-right":"0px"}},[t._v(" Si jamais vous souhaitez supprimer un phonème il vous suffit tout simplement de cliquer sur le bouton moins ")])])])])])}],F={name:"Faq"},Y=F,P=(n("67e9"),Object(a["a"])(Y,R,M,!1,null,"7e26967e",null)),z=P.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("div",{staticStyle:{display:"flex"}},[i("div",[i("h1",[t._v(" A propos de l'outil")]),i("p",{staticStyle:{width:"90%"}},[t._v(" Cet outil à été réaliser en juillet 2020 dans le but d'aider les personnes à mettre en valeur les sons dans un texte")]),i("p",{staticStyle:{width:"90%"}},[t._v(" Si jamais vous trouver un bug n'hésiter pas à m'envoyer un email : "),i("b",[t._v("elisabeth.nathanael@gmail.com")]),t._v(" ( envoyer une photo du bug ou un descriptif précis ) ")])]),i("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center"}},[i("img",{attrs:{src:n("1ae4"),width:"300px"}})])]),i("div",{staticStyle:{display:"flex"}},[i("div",[i("p",[i("img",{attrs:{src:n("2d75"),height:"400"}})])]),i("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center"}},[i("h1",[t._v(" A propos du créateur")]),i("p",[t._v(" Je me présente Elisabeth Nathanael, je suis étudiant en informatique en deuxiéme année")]),i("p",[t._v(" Si jamais vous avez des idée d'outil dans le même style ou que vous avez une idée autour du développement web et vidéo ludique n'hésiter pas à me contacter sur mon email : "),i("b",[t._v("elisabeth.nathanael@gmail.com")])])])])])}],H={name:"About"},U=H,G=(n("e76e"),Object(a["a"])(U,q,W,!1,null,null,null)),J=G.exports;i["a"].use(c["a"]);var $=new c["a"]({routes:[{path:"/",name:"home",component:N},{path:"/faq",name:"foire au question",component:z},{path:"/about",name:"about",component:J}]});String.prototype.replaceAt=function(t,e){return this.substr(0,t)+e+this.substr(t+e.length)},i["a"].config.productionTip=!1,new i["a"]({router:$,render:function(t){return t(d)}}).$mount("#app")},"5a18":function(t,e,n){t.exports="img/step_1.0e4d03bf.svg"},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5ced":function(t,e,n){},"618c":function(t,e,n){},"67e9":function(t,e,n){"use strict";n("95ea")},"7bb1":function(t,e,n){"use strict";n("1190")},"7ca0":function(t,e,n){t.exports="img/step_3.a993174f.svg"},"8af1":function(t,e,n){t.exports="img/step_4.574c176d.svg"},"8d9a":function(t,e,n){"use strict";n("618c")},"91aa":function(t,e,n){},"95ea":function(t,e,n){},"9c0c":function(t,e,n){},ae89:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNWRHWFIAAADlSURBVGhD1c4hjkRBDEPBuf+l/7IGrVKADTprqchTQH7f9/07jNsxbse4HeN2jNsxbse4HWNhmu4jjIVpuo8wFqbpPsJYmKb7CGNhmu4jjIVpuo8wFqbpPsJYmKb7CGNhmu4jjIVpuo8wFqbpPsJ4eTH9cTBeXkx/HIyXF9MfB+PlxfTHwXh5Mf1xMF5eTH8cjJcX0x8HY2Ga7iOMhWm6jzAWpuk+wliYpvsIY2Ga7iOMhWm6jzAWpuk+wliYpvsIY2Ga7iOMhWm6jzAWpuk+wrgd43aM2zFux7gd43aM2zHu9v3+ABBoCFjXZLAGAAAAAElFTkSuQmCC"},b0c1:function(t){t.exports=JSON.parse('{"phonemes":[{"id":1,"phonemeSign":" a","notation":"[ a ] : a","madeBy":[{"with":"a","gate":"and","conditions":{"ufb":["n"]}}]},{"id":2,"phonemeSign":"i","notation":"[ i ] : i","madeBy":[{"with":"i","gate":"and","conditions":{"ufb":["n","m"]}}]},{"id":3,"phonemeSign":"y","notation":"[ y  ] : u","madeBy":[{"with":"u","gate":"and","conditions":{}}]},{"id":4,"phonemeSign":"ɔ","notation":"[ ɔ ] : o","madeBy":[{"with":"o","gate":"and","conditions":{"ufb":["i","n","u"]}}]},{"id":5,"phonemeSign":"ə","notation":"[ ə ] : e","madeBy":[{"with":"e","gate":"and","conditions":{"ufb":["au","u","in","n","m","i","t","r","z"]}}]},{"id":6,"phonemeSign":"e","notation":"[ e ] : é","madeBy":[{"with":"é","gate":"and","conditions":{}},{"with":"e","gate":"and","conditions":{"fb":["r","z"],"ufb":["au","u","in","n","m","i","t"]}}]},{"id":7,"phonemeSign":"ɛ","notation":"[ ɛ ] : et","madeBy":[{"with":"e","gate":"and","conditions":{"fb":["i","t"],"ufb":["au","u","in","n","m","r","z"]}},{"with":"a","gate":"and","conditions":{"fb":["i"]}}]},{"id":8,"phonemeSign":"ø","notation":"[ ø ] : eu","madeBy":[{"with":"e","gate":"and","conditions":{"fb":["u"],"ufb":["au","in","n","m","i","t","r","z"]}}]},{"id":9,"phonemeSign":"u","notation":"[ u ] : ou","madeBy":[{"with":"ou","gate":"and","conditions":{}}]},{"id":10,"phonemeSign":"ã","notation":"[ ã ] : am","madeBy":[{"with":"a","gate":"and","conditions":{"fb":["n","m"]}},{"with":"e","gate":"and","conditions":{"fb":["n","m"],"ufb":["au"]}}]},{"id":11,"phonemeSign":"ɔ̃","notation":"[ ɔ̃ ]̃ : on","madeBy":[{"with":"on","gate":"and","conditions":{}}]},{"id":12,"phonemeSign":"ɛ","notation":"[ ɛ ] : in","madeBy":[{"with":"i","gate":"and","conditions":{"fb":["n","m"]}},{"with":"i","gate":"and","conditions":{"fb":["n"],"bb":["a","e"]}}]},{"id":13,"phonemeSign":"wa","notation":"[ wa ] : oi","madeBy":[{"with":"o","gate":"and","conditions":{"fb":["i"]}}]},{"id":14,"phonemeSign":"o","notation":"[ o ] : eau","madeBy":[{"with":"o","gate":"and","conditions":{"ufb":["i","n","u"]}},{"with":"e","gate":"and","conditions":{"fb":["au"],"ufb":["u","in","n","m","i","t","r","z"]}},{"with":"a","gate":"and","conditions":{"fb":["u"]}}]},{"id":15,"phonemeSign":"l","notation":"[ l ] : l","madeBy":[{"with":"l","gate":"and","conditions":{}},{"with":"ll","gate":"and","conditions":{}}]},{"id":16,"phonemeSign":"r","notation":"[ r ] : r","madeBy":[{"with":"r","gate":"and","conditions":{}}]},{"id":17,"phonemeSign":"t","notation":"[ t ] : t","madeBy":[{"with":"t","gate":"and","conditions":{"ufb":["`"]}}]},{"id":18,"phonemeSign":"p","notation":"[ p ] : p","madeBy":[{"with":"p","gate":"and","conditions":{}}]},{"id":19,"phonemeSign":"b","notation":"[ b ] : b","madeBy":[{"with":"b","gate":"and","conditions":{}}]},{"id":20,"phonemeSign":"d","notation":"[ d ] : d","madeBy":[{"with":"d","gate":"and","conditions":{}}]},{"id":21,"phonemeSign":"k","notation":"[ k ] : k","madeBy":[{"with":"c","gate":"and","conditions":{"fb":["a","u","o"]}},{"with":"q","gate":"and","conditions":{"fb":["u"]}}]},{"id":23,"phonemeSign":"g","notation":"[ g ] : ga","madeBy":[{"with":"g","gate":"and","conditions":{"fb":["a","o","u"],"ufb":["e"]}}]},{"id":24,"phonemeSign":"f","notation":"[ f ] : f","madeBy":[{"with":"f","gate":"and","conditions":{}},{"with":"p","gate":"and","conditions":{"fb":["h"]}}]},{"id":25,"phonemeSign":"v","notation":"[ v ] : v","madeBy":[{"with":"v","gate":"and","conditions":{}}]},{"id":26,"phonemeSign":"s","notation":"[ s ] : s","madeBy":[{"with":"s","gate":"or","conditions":{"ubb":["a","e","i","o","u","y"],"ufb":["a","e","i","o","u","y"]}}]},{"id":26,"phonemeSign":"z","notation":" [ z ] : z","madeBy":[{"with":"s","gate":"and","conditions":{"bb":["a","e","i","o","u","y"],"fb":["a","e","i","o","u","y"]}}]},{"id":27,"phonemeSign":"ʃ","notation":" [ ʃ ] : ch","madeBy":[{"with":"ch","gate":"and","conditions":{}}]},{"id":28,"phonemeSign":"ʒ","notation":" [ ʒ ] : j","madeBy":[{"with":"j","gate":"and","conditions":{}},{"with":"ge","gate":"and","conditions":{}}]},{"id":29,"phonemeSign":"m","notation":" [ m ] : m","madeBy":[{"with":"m","gate":"and","conditions":{}},{"with":"mm","gate":"and","conditions":{}}]},{"id":30,"phonemeSign":"n","notation":" [ n ] : n","madeBy":[{"with":"n","gate":"and","conditions":{}},{"with":"nn","gate":"and","conditions":{}}]},{"id":31,"phonemeSign":"ɲ","notation":" [ ɲ ] : gn","madeBy":[{"with":"gn","gate":"and","conditions":{}}]},{"id":32,"phonemeSign":"j","notation":" [ j ] : ill","madeBy":[{"with":"ill","gate":"and","conditions":{}}]}],"conditions":{"fb":{"sense":true,"needs":true},"ufb":{"sense":true,"needs":false},"bb":{"sense":false,"needs":true},"ubb":{"sense":false,"needs":false}}}')},be4d:function(t,e,n){t.exports="img/step_2.22117c8b.svg"},c657:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNWRHWFIAAACRSURBVGhD1c4hDgNBDATB+/+nN8zAKu7OSEUazffe+zuMdYx1jHWMdYx1jHWMdYx1jHWMdYx1jHWMdYx1jHWMdYx1jHWMy8X0YzAuF9OPwbhcTD8G43Ix/RiMy8X0YzAuF9OPwbhcTD8GYx1jHWMdYx1jHWMdYx1jHWMdYx1jHWMdYx1jHWMdYx1jHWMdY9v7fhxmbuORn3nLAAAAAElFTkSuQmCC"},cccb:function(t,e,n){"use strict";n("5ced")},e76e:function(t,e,n){"use strict";n("91aa")}});
//# sourceMappingURL=app.05b4fb91.js.map