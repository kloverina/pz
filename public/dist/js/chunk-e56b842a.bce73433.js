(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e56b842a"],{"4d3f":function(t,o,n){"use strict";n.r(o);var s=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"container"},[t.showAddSection?t._e():n("c1-circuit-params",{attrs:{node:t.NodesAmount,resistor:t.ResAmount,capacitor:t.CapAmount,inductor:t.IndAmount},on:{"show-add-section":t.addCircuitParams}}),t.showAddSection?n("c2-circuit-add-section",{attrs:{"res-amount":t.ResAmount,"cap-amount":t.CapAmount,"ind-amount":t.IndAmount},on:{"save-values":t.addElemValues}}):t._e()],1)},a=[],e=(n("e25e"),n("e9c4"),n("53c3")),i=n("a178"),r={name:"Input",components:{C2CircuitAddSection:i["a"],C1CircuitParams:e["a"]},data:function(){return{showAddSection:!1,NodesAmount:0,ResAmount:0,CapAmount:0,IndAmount:0,Resistors:[],Capacitors:[],Inductors:[]}},methods:{addCircuitParams:function(t){this.NodesAmount=parseInt(t[0]),this.ResAmount=parseInt(t[1]),this.CapAmount=parseInt(t[2]),this.IndAmount=parseInt(t[3]),this.showAddSection=!0,window.scrollTo(0,0)},addElemValues:function(t,o,n){this.Resistors=t,this.Capacitors=o,this.Inductors=n,this.saveLocalData()},saveLocalData:function(){localStorage.setItem("NodeAmount",this.NodesAmount),localStorage.setItem("ResAmount",this.ResAmount),localStorage.setItem("CapAmount",this.CapAmount),localStorage.setItem("IndAmount",this.IndAmount),localStorage.setItem("Resistors",JSON.stringify(this.Resistors)),localStorage.setItem("Capacitors",JSON.stringify(this.Capacitors)),localStorage.setItem("Inductors",JSON.stringify(this.Inductors))}}},u=r,c=n("2877"),d=Object(c["a"])(u,s,a,!1,null,"51af310b",null);o["default"]=d.exports},e9c4:function(t,o,n){var s=n("23e7"),a=n("da84"),e=n("d066"),i=n("2ba4"),r=n("e330"),u=n("d039"),c=a.Array,d=e("JSON","stringify"),m=r(/./.exec),l=r("".charAt),A=r("".charCodeAt),h=r("".replace),p=r(1..toString),f=/[\uD800-\uDFFF]/g,I=/^[\uD800-\uDBFF]$/,C=/^[\uDC00-\uDFFF]$/,S=function(t,o,n){var s=l(n,o-1),a=l(n,o+1);return m(I,t)&&!m(C,a)||m(C,t)&&!m(I,s)?"\\u"+p(A(t,0),16):t},g=u((function(){return'"\\udf06\\ud834"'!==d("\udf06\ud834")||'"\\udead"'!==d("\udead")}));d&&s({target:"JSON",stat:!0,forced:g},{stringify:function(t,o,n){for(var s=0,a=arguments.length,e=c(a);s<a;s++)e[s]=arguments[s];var r=i(d,null,e);return"string"==typeof r?h(r,f,S):r}})}}]);
//# sourceMappingURL=chunk-e56b842a.bce73433.js.map