(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{15:function(e,t,n){e.exports=n(28)},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),c=n.n(l),i=(n(20),n(12)),o=n(7),s=n(8),u=n(2),m=n(14),d=n(13),p=(n(21),n(22),n(9)),h=n(10),f=function(e){var t=e.list.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("p",null,r.a.createElement("input",{type:"text",key:t.key,value:t.text,onChange:function(n){return e.setUpdate(n.target.value,t.key)}}),r.a.createElement("span",null,r.a.createElement(p.a,{className:"faicon",icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))))}));return r.a.createElement("div",null,r.a.createElement(h.a,{duration:500,easing:"ease-in-out"},t))},v=n(4),I=n(11);v.b.add(I.a);var b=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).addItem=function(e){e.preventDefault();var t=a.state.currentItem;if(console.log(t),""!==t){var n=[].concat(Object(i.a)(a.state.list),[t]);a.setState({list:n,currentItem:{text:"",key:""}})}},a.handleInput=function(e){a.setState({currentItem:{text:e.target.value,key:Date.now()}})},a.setUpdate=function(e,t){var n=a.state.list;n.map((function(n){n.key===t&&(n.text=e)})),a.setState({list:n})},a.deleteItem=function(e){var t=a.state.list.filter((function(t){return t.key!==e}));a.setState({list:t})},a.state={list:[],currentItem:{text:"",key:""}},a.addItem=a.addItem.bind(Object(u.a)(a)),a.handleInput=a.handleInput.bind(Object(u.a)(a)),a.deleteItem=a.deleteItem.bind(Object(u.a)(a)),a.setUpdate=a.setUpdate.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"Enter Text",className:"input1",value:this.state.currentItem.text,onChange:this.handleInput}),r.a.createElement("button",{className:"btn",type:"submit"},"Add"))),r.a.createElement("section",null,r.a.createElement("div",{className:"List_Item"},r.a.createElement(f,{list:this.state.list,deleteItem:this.deleteItem,setUpdate:this.setUpdate}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.bae1c78a.chunk.js.map