(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa4ad64c"],{"04d1":function(t,e,r){var c=r("342f"),o=c.match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"1dde":function(t,e,r){var c=r("d039"),o=r("b622"),n=r("2d00"),a=o("species");t.exports=function(t){return n>=51||!c((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"466d":function(t,e,r){"use strict";var c=r("d784"),o=r("825a"),n=r("50c4"),a=r("1d80"),i=r("8aa5"),d=r("14c3");c("match",1,(function(t,e,r){return[function(e){var r=a(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,r):new RegExp(e)[t](String(r))},function(t){var c=r(e,t,this);if(c.done)return c.value;var a=o(t),s=String(this);if(!a.global)return d(a,s);var l=a.unicode;a.lastIndex=0;var u,f=[],b=0;while(null!==(u=d(a,s))){var h=String(u[0]);f[b]=h,""===h&&(a.lastIndex=i(s,n(a.lastIndex),l)),b++}return 0===b?null:f}]}))},"4de4":function(t,e,r){"use strict";var c=r("23e7"),o=r("b727").filter,n=r("1dde"),a=n("filter");c({target:"Array",proto:!0,forced:!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(t,e,r){"use strict";var c=r("23e7"),o=r("1c0b"),n=r("7b0b"),a=r("50c4"),i=r("d039"),d=r("addb"),s=r("a640"),l=r("04d1"),u=r("d998"),f=r("2d00"),b=r("512c"),h=[],p=h.sort,O=i((function(){h.sort(void 0)})),j=i((function(){h.sort(null)})),v=s("sort"),g=!i((function(){if(f)return f<70;if(!(l&&l>3)){if(u)return!0;if(b)return b<603;var t,e,r,c,o="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(c=0;c<47;c++)h.push({k:e+c,v:r})}for(h.sort((function(t,e){return e.v-t.v})),c=0;c<h.length;c++)e=h[c].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}})),m=O||!j||!v||!g,N=function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:String(e)>String(r)?1:-1}};c({target:"Array",proto:!0,forced:m},{sort:function(t){void 0!==t&&o(t);var e=n(this);if(g)return void 0===t?p.call(e):p.call(e,t);var r,c,i=[],s=a(e.length);for(c=0;c<s;c++)c in e&&i.push(e[c]);i=d(i,N(t)),r=i.length,c=0;while(c<r)e[c]=i[c++];while(c<s)delete e[c++];return e}})},"512c":function(t,e,r){var c=r("342f"),o=c.match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},8418:function(t,e,r){"use strict";var c=r("c04e"),o=r("9bf2"),n=r("5c6c");t.exports=function(t,e,r){var a=c(e);a in t?o.f(t,a,n(0,r)):t[a]=r}},"841c":function(t,e,r){"use strict";var c=r("d784"),o=r("825a"),n=r("1d80"),a=r("129f"),i=r("14c3");c("search",1,(function(t,e,r){return[function(e){var r=n(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,r):new RegExp(e)[t](String(r))},function(t){var c=r(e,t,this);if(c.done)return c.value;var n=o(t),d=String(this),s=n.lastIndex;a(s,0)||(n.lastIndex=0);var l=i(n,d);return a(n.lastIndex,s)||(n.lastIndex=s),null===l?-1:l.index}]}))},"860c":function(t,e,r){"use strict";r.r(e);r("ac1f"),r("841c"),r("b0c0");var c=r("7a23"),o={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb",class:"mb-3"},n={class:"breadcrumb"},a=Object(c["createVNode"])("li",{class:"breadcrumb-item"},[Object(c["createVNode"])("p",{class:"mb-0"},"訂單")],-1),i={class:"breadcrumb-item active","aria-current":"page"},d=Object(c["createTextVNode"])("全部訂單"),s={class:"row justify-content-end mb-3"},l={class:"col-md-3"},u={class:"input-group"},f=Object(c["createVNode"])("span",{class:"input-group-text material-icons bg-transparent me-3"},"search",-1),b={class:"dropdown"},h=Object(c["createVNode"])("button",{class:"\n              material-icons\n              btn btn-outline-secondary\n              d-flex\n              justify-content-center\n              align-items-center\n              me-2\n            ",type:"button",id:"filterBtn","data-bs-toggle":"dropdown","aria-expanded":"false"}," sort ",-1),p={class:"dropdown-menu","aria-labelledby":"filterBtn"},O={class:"mb-2"},j={class:"mb-2"},v={class:"mb-2"},g={class:"table align-middle mb-3"},m=Object(c["createVNode"])("thead",null,[Object(c["createVNode"])("tr",{class:"text-center"},[Object(c["createVNode"])("th",{scope:"col"},"#"),Object(c["createVNode"])("th",{scope:"col"},"訂單編號"),Object(c["createVNode"])("th",{scope:"col"},"訂購人"),Object(c["createVNode"])("th",{scope:"col"},"訂購時間"),Object(c["createVNode"])("th",{scope:"col"},"總金額"),Object(c["createVNode"])("th",{scope:"col"},"付款狀態"),Object(c["createVNode"])("th",{scope:"col"},"訂單狀態"),Object(c["createVNode"])("th",{scope:"col"},"查看"),Object(c["createVNode"])("th",{scope:"col"},"編輯"),Object(c["createVNode"])("th",{scope:"col"},"刪除")])],-1),N={key:0},V=Object(c["createVNode"])("tr",null," 目前沒有訂單呦 ",-1),x={key:1,class:"text-center"},w={scope:"row"},y=Object(c["createTextVNode"])(" remove_red_eye "),k=Object(c["createTextVNode"])(" edit "),_={class:"d-flex justify-content-center"},C=Object(c["createVNode"])("div",{class:"loadingio-spinner-dual-ball-haac1tizt7t"},[Object(c["createVNode"])("div",{class:"ldio-u3364un719"},[Object(c["createVNode"])("div"),Object(c["createVNode"])("div"),Object(c["createVNode"])("div")])],-1);function S(t,e,r,S,L,B){var I=Object(c["resolveComponent"])("router-link"),$=Object(c["resolveComponent"])("Loading");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("nav",o,[Object(c["createVNode"])("ol",n,[a,Object(c["createVNode"])("li",i,[Object(c["createVNode"])(I,{to:"/admin/products"},{default:Object(c["withCtx"])((function(){return[d]})),_:1})])])]),Object(c["createVNode"])("div",s,[Object(c["createVNode"])("div",l,[Object(c["createVNode"])("div",u,[Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text",class:"form-control",placeholder:"請輸入訂單編號","aria-label":"search","aria-describedby":"searchBtn","onUpdate:modelValue":e[1]||(e[1]=function(t){return L.search=t})},null,512),[[c["vModelText"],L.search]]),f,Object(c["createVNode"])("div",b,[h,Object(c["createVNode"])("ul",p,[Object(c["createVNode"])("li",O,[Object(c["createVNode"])("button",{type:"button",class:"dropdown-item",href:"#","data-field":"create_new_old",onClick:e[2]||(e[2]=function(){return B.filterItem&&B.filterItem.apply(B,arguments)})}," 訂購時間新到舊 ")]),Object(c["createVNode"])("li",j,[Object(c["createVNode"])("button",{type:"button",class:"dropdown-item",href:"#","data-field":"create_old_new",onClick:e[3]||(e[3]=function(){return B.filterItem&&B.filterItem.apply(B,arguments)})}," 訂購時間舊到新 ")]),Object(c["createVNode"])("li",v,[Object(c["createVNode"])("button",{type:"button",class:"dropdown-item",href:"#","data-field":"total_low_high",onClick:e[4]||(e[4]=function(){return B.filterItem&&B.filterItem.apply(B,arguments)})}," 總金額低到高 ")]),Object(c["createVNode"])("li",null,[Object(c["createVNode"])("button",{type:"button",class:"dropdown-item",href:"#","data-field":"total_high_low",onClick:e[5]||(e[5]=function(){return B.filterItem&&B.filterItem.apply(B,arguments)})}," 總金額高到低 ")])])])])])]),Object(c["createVNode"])("table",g,[m,L.orderList.length?(Object(c["openBlock"])(),Object(c["createBlock"])("tbody",x,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(B.filterOrder,(function(e,r){return Object(c["openBlock"])(),Object(c["createBlock"])("tr",{key:e.id},[Object(c["createVNode"])("th",w,Object(c["toDisplayString"])(r+1),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.create_at),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.user.name),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(t.$date.toDate(e.create_at)),1),Object(c["createVNode"])("td",null,"NT "+Object(c["toDisplayString"])(t.$toCurrency(Math.round(e.total))),1),Object(c["createVNode"])("td",{class:{"text-secondary":!e.is_paid}},Object(c["toDisplayString"])(e.is_paid?"已付款":"未付款"),3),Object(c["createVNode"])("td",{class:{"text-secondary":!e.orderStatus}},Object(c["toDisplayString"])(e.orderStatus?e.orderStatus:"確認中"),3),Object(c["createVNode"])("td",null,[Object(c["createVNode"])(I,{to:"order/".concat(e.id),onClick:function(t){return B.pushOrderInfo(!0,e)},class:"material-icons btn"},{default:Object(c["withCtx"])((function(){return[y]})),_:2},1032,["to","onClick"])]),Object(c["createVNode"])("td",null,[Object(c["createVNode"])(I,{to:"order/".concat(e.id),onClick:function(t){return B.pushOrderInfo(!1,e)},class:"material-icons btn"},{default:Object(c["withCtx"])((function(){return[k]})),_:2},1032,["to","onClick"])]),Object(c["createVNode"])("td",null,[Object(c["createVNode"])("button",{type:"button",class:"material-icons btn",onClick:function(t){return B.delOrder(e.id)}}," delete ",8,["onClick"])])])})),128))])):(Object(c["openBlock"])(),Object(c["createBlock"])("tbody",N,[V]))]),Object(c["createVNode"])("div",_,[Object(c["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:e[6]||(e[6]=function(t){return B.delAll()})}," 刪除全部訂單 ")]),Object(c["createVNode"])($,{active:L.isLoading},{default:Object(c["withCtx"])((function(){return[C]})),_:1},8,["active"])],64)}r("4de4"),r("466d"),r("d3b7"),r("25f0"),r("99af"),r("4e82");var L={data:function(){return{orderList:"",isLoading:!1,search:""}},computed:{filterOrder:function(){var t=this;return this.orderList.filter((function(e){return e.create_at.toString().match(t.search)}))}},methods:{getOrderList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var r="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiren","/admin/orders?page=").concat(e);this.$http.get(r).then((function(e){e.data.success?(t.orderList=e.data.orders,t.isLoading=!1):(t.isLoading=!1,t.$swal({text:e.data.message,icon:"error",confirmButtonColor:"#ffbc1f"}))})).catch((function(){t.$swal({text:"Opps ... 發生錯誤，請嘗試重新整理此頁面",icon:"error",confirmButtonColor:"#ffbc1f"})}))},delOrder:function(t){var e=this,r="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiren","/admin/order/").concat(t);this.$http.delete(r).then((function(t){t.data.success?(e.isLoading=!1,e.$swal({text:t.data.message,icon:"success",confirmButtonColor:"#ffbc1f"}),e.getOrderList()):(e.isLoading=!1,e.$swal({text:t.data.message,icon:"error",confirmButtonColor:"#ffbc1f"}))})).catch((function(){e.$swal({text:"Opps ... 發生錯誤，請嘗試重新整理此頁面",icon:"error",confirmButtonColor:"#ffbc1f"})}))},delAll:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiren","/admin/orders/all");this.$http.delete(e).then((function(e){e.data.success?(t.isLoading=!1,t.$swal({text:e.data.message,icon:"success",confirmButtonColor:"#ffbc1f"}),t.getOrderList()):(t.isLoading=!1,t.$swal({text:e.data.message,icon:"error",confirmButtonColor:"#ffbc1f"}))})).catch((function(){t.$swal({text:"Opps ... 發生錯誤，請嘗試重新整理此頁面",icon:"error",confirmButtonColor:"#ffbc1f"})}))},filterItem:function(t){var e=this,r=t.target.getAttribute("data-field");switch(r){case"total_low_high":this.orderList.sort((function(t,e){return t.total-e.total}));break;case"total_high_low":this.orderList.sort((function(t,e){return e.total-t.total}));break;case"create_new_old":this.orderList.sort((function(t,r){var c=e.$date.toUnix(t.create_at),o=e.$date.toUnix(r.create_at);return o-c}));break;case"create_old_new":this.orderList.sort((function(t,r){var c=e.$date.toUnix(t.create_at),o=e.$date.toUnix(r.create_at);return c-o}));break;default:break}},pushOrderInfo:function(t,e){sessionStorage.setItem("readOnly",t),sessionStorage.setItem("checkOrder",JSON.stringify(e))}},mounted:function(){this.getOrderList()}};L.render=S;e["default"]=L},"99af":function(t,e,r){"use strict";var c=r("23e7"),o=r("d039"),n=r("e8b5"),a=r("861d"),i=r("7b0b"),d=r("50c4"),s=r("8418"),l=r("65f0"),u=r("1dde"),f=r("b622"),b=r("2d00"),h=f("isConcatSpreadable"),p=9007199254740991,O="Maximum allowed index exceeded",j=b>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),v=u("concat"),g=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:n(t)},m=!j||!v;c({target:"Array",proto:!0,forced:m},{concat:function(t){var e,r,c,o,n,a=i(this),u=l(a,0),f=0;for(e=-1,c=arguments.length;e<c;e++)if(n=-1===e?a:arguments[e],g(n)){if(o=d(n.length),f+o>p)throw TypeError(O);for(r=0;r<o;r++,f++)r in n&&s(u,f,n[r])}else{if(f>=p)throw TypeError(O);s(u,f++,n)}return u.length=f,u}})},addb:function(t,e){var r=Math.floor,c=function(t,e){var a=t.length,i=r(a/2);return a<8?o(t,e):n(c(t.slice(0,i),e),c(t.slice(i),e),e)},o=function(t,e){var r,c,o=t.length,n=1;while(n<o){c=n,r=t[n];while(c&&e(t[c-1],r)>0)t[c]=t[--c];c!==n++&&(t[c]=r)}return t},n=function(t,e,r){var c=t.length,o=e.length,n=0,a=0,i=[];while(n<c||a<o)n<c&&a<o?i.push(r(t[n],e[a])<=0?t[n++]:e[a++]):i.push(n<c?t[n++]:e[a++]);return i};t.exports=c},b0c0:function(t,e,r){var c=r("83ab"),o=r("9bf2").f,n=Function.prototype,a=n.toString,i=/^\s*function ([^ (]*)/,d="name";c&&!(d in n)&&o(n,d,{configurable:!0,get:function(){try{return a.call(this).match(i)[1]}catch(t){return""}}})},d998:function(t,e,r){var c=r("342f");t.exports=/MSIE|Trident/.test(c)}}]);
//# sourceMappingURL=chunk-fa4ad64c.6521d378.js.map