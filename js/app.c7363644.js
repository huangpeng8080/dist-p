(function(t){function e(e){for(var i,r,s=e[0],l=e[1],c=e[2],h=0,u=[];h<s.length;h++)r=s[h],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/zqdemo/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"124d":function(t,e,n){},2105:function(t,e,n){"use strict";n("b3fb")},"34e1":function(t,e,n){},"36cf":function(t,e,n){"use strict";n("124d")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],r={name:"App",components:{}},s=r,l=(n("034f"),n("2877")),c=Object(l["a"])(s,a,o,!1,null,null,null),d=c.exports,h=n("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("router-link",{attrs:{to:"/demo18"}},[t._v("筹码分布")]),n("div",{staticClass:"m-t"},[n("router-link",{staticClass:"m-t",attrs:{to:"/analysis"}},[t._v("分析")])],1)],1)},v=[],p={name:"HelloWorld",props:{msg:String}},f=p,w=(n("2105"),Object(l["a"])(f,u,v,!1,null,"c08dc8b6",null)),S=w.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticStyle:{width:"900px",height:"400px",position:"relative"},attrs:{id:"kline"}})])}],y=(n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("841c"),{name:"Demo18",mounted:function(){function t(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?decodeURI(n[2]):null}function e(){var t=window.$(window).height(),e=window.$(window).width(),n=document.getElementById("kline");n.style.width=t+"px",n.style.height=e+"px",n.JSChart.OnSize()}window.$(window).resize(e),window.$((function(){var n=t("symbol");null==n&&(n="002797.sz");var i=t("index");null==i&&(i="MA");var a=t("index2");null==a&&(a="VOL");var o=t("index3");null==o&&(o="TJCJL");var r=new Array;r.push({Index:i,Modify:!1,Change:!1}),r.push({Index:a,Modify:!1,Change:!1}),o&&r.push({Index:o,Modify:!1,Change:!1}),console.log("create JSChart");var s=window.JSChart.Init(document.getElementById("kline")),l={Type:"历史K线图",Windows:[{Index:"MA"}],Symbol:n,IsAutoUpate:!0,IsShowRightMenu:!0,IsShowCorssCursorInfo:!0,CorssCursorInfo:{Right:0},KLine:{DragMode:1,Right:1,Period:0,MaxReqeustDataCount:1e3,PageSize:50,IndexTreeApiUrl:"https://opensourcecache.zealink.com/cache/hqh5/index/commonindextree.json",KLineDoubleClick:!0,IsShowTooltip:!0,DrawType:0},KLineTitle:{IsShowName:!0,IsShowSettingInfo:!0},Border:{Left:100,Right:180,Bottom:25},Frame:[{SplitCount:4,IsShowRightText:!0},{SplitCount:4,IsShowRightText:!0},{SplitCount:4,IsShowRightText:!0}],ExtendChart:[{Name:"筹码分布",ShowType:0,IsShowX:!0,ShowXCount:3,Width:200}],Overlay:[]},c=window.$(window).width();c<=420&&(l.Border.Left=1,l.Border.Right=1,l.KLine.IsShowTooltip=!1),s.SetOption(l),s.ForceLandscape(!0),e()}))}}),g=y,C=(n("ff36"),Object(l["a"])(g,m,x,!1,null,"0d311bac",null)),_=C.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticStyle:{width:"900px",height:"400px",position:"relative"},attrs:{id:"kline2"}})])}],D={name:"Demo18",mounted:function(){function t(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?decodeURI(n[2]):null}function e(){var t=window.$(window).height(),e=window.$(window).width(),n=document.getElementById("kline2");n.style.width=e+"px",n.style.height=t+"px",n.JSChart.OnSize()}window.$(window).resize(e),window.$((function(){var n=t("symbol");null==n&&(n="002797.sz");var i=t("index");null==i&&(i="MA");var a=t("index2");null==a&&(a="VOL");var o=t("index3");null==o&&(o="TJCJL");var r=new Array;r.push({Index:i,Modify:!1,Change:!1}),r.push({Index:a,Modify:!1,Change:!1}),o&&r.push({Index:o,Modify:!1,Change:!1}),console.log("create JSChart");var s=window.JSChart.Init(document.getElementById("kline2")),l={Type:"历史K线图横屏",Windows:[{Index:"MA"}],Symbol:n,IsAutoUpate:!0,IsShowRightMenu:!0,IsShowCorssCursorInfo:!0,KLine:{DragMode:1,Right:1,Period:0,MaxReqeustDataCount:1e3,PageSize:50,IndexTreeApiUrl:"https://opensourcecache.zealink.com/cache/hqh5/index/commonindextree.json",KLineDoubleClick:!0,IsShowTooltip:!0,DrawType:0},KLineTitle:{IsShowName:!0,IsShowSettingInfo:!0},Border:{Left:100,Right:25,Bottom:300},Frame:[{SplitCount:3,StringFormat:0,IsShowLeftText:!1,RightTextPosition:2},{SplitCount:2,StringFormat:0,IsShowLeftText:!1},{SplitCount:2,StringFormat:0,IsShowLeftText:!1}],ExtendChart:[{Name:"筹码分布横屏",ShowType:0,IsShowX:!0,ShowXCount:3,Width:200}],Overlay:[]},c=window.$(window).width();c<=420&&(l.Border.Left=1,l.Border.Right=1,l.KLine.IsShowTooltip=!1),s.SetOption(l),setTimeout((function(){s.RecvDepthMapData()}),1e3),e(),s.RecvDepthMapData=function(){for(var t={Data:[],Type:0},e={Data:[],Type:0,LineColor:"rgba(255,165,0,0.6)",AreaColor:["rgba(255,165,0,0.5)","rgba(255,165,0,0.4)","rgba(255,165,0,0.3)","rgba(255,165,0,0.2)"],TextColor:"rgb(248,248,255)",TextBGColor:"rgb(255,165,0)"},n=5;n<=12;n+=.01){var i={X:n,Y:1e5*parseInt(100*(Math.random()+1))};t.Data.push(i)}for(var a=12;a<15;a+=.01){var o={X:a,Y:1e5*parseInt(100*(Math.random()+1))};e.Data.push(o)}var r=[t,e];s.SetDepthMapData([{ID:0,Data:r}],!0)}}))}},T=D,L=(n("36cf"),Object(l["a"])(T,I,b,!1,null,null,null)),O=L.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"analysis"},[n("van-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("van-tab",{attrs:{title:"报价"}},[t._v("报价")]),n("van-tab",{attrs:{title:"评论"}},[t._v("评论")]),n("van-tab",{attrs:{title:"资讯"}},[t._v("资讯")]),n("van-tab",{attrs:{title:"分析",name:"分析"}},[n("div",[t._v("002797 第一创业")]),n("div",[t._v("10.85 +0.01 +0.09%")]),n("div",[n("a",[t._v("资金面")]),t._v(" "),n("a",[t._v("技术面")]),t._v(" "),n("a",[t._v("基本面")])]),n("div",[n("div",[t._v("深股通持股比例")]),n("div",{staticStyle:{position:"relative"},attrs:{id:"klineRi"}}),n("div",[n("div",[t._v("深股通累计资金净流向")]),n("van-row",{attrs:{type:"flex",justify:"space-between"}},[n("van-col",{attrs:{span:"6"}},[t._v("时间")]),n("van-col",{attrs:{span:"6"}},[t._v("净买卖股数")]),n("van-col",{attrs:{span:"6"}},[t._v("资金净流向")]),n("van-col",{attrs:{span:"6"}},[t._v("金额排名")])],1),n("van-row",{attrs:{type:"flex",justify:"space-between"}},[n("van-col",{attrs:{span:"6"}},[t._v("最近1日")]),n("van-col",{attrs:{span:"6"}},[t._v("-2,736,583")]),n("van-col",{attrs:{span:"6"}},[t._v("-2,974,583万")]),n("van-col",{attrs:{span:"6"}},[t._v("521/564")])],1),n("van-row",{attrs:{type:"flex",justify:"space-between"}},[n("van-col",{attrs:{span:"6"}},[t._v("最近5日")]),n("van-col",{attrs:{span:"6"}},[t._v("+12,035,260")]),n("van-col",{attrs:{span:"6"}},[t._v("+1.27亿")]),n("van-col",{attrs:{span:"6"}},[t._v("25/564")])],1),n("van-row",{attrs:{type:"flex",justify:"space-between"}},[n("van-col",{attrs:{span:"6"}},[t._v("最近20日")]),n("van-col",{attrs:{span:"6"}},[t._v("+3,580,935")]),n("van-col",{attrs:{span:"6"}},[t._v("+4115.40万")]),n("van-col",{attrs:{span:"6"}},[t._v("136/564")])],1),n("van-row",{attrs:{type:"flex",justify:"space-between"}},[n("van-col",{attrs:{span:"6"}},[t._v("最近60日")]),n("van-col",{attrs:{span:"6"}},[t._v("+15,316,388")]),n("van-col",{attrs:{span:"6"}},[t._v("+1.58亿")]),n("van-col",{attrs:{span:"6"}},[t._v("83/564")])],1)],1)]),n("div",[n("div",[t._v("指标解读")]),n("a",{staticClass:"m-l",on:{click:t.createData}},[t._v("1日")]),t._v(" "),n("a",{staticClass:"m-l",on:{click:t.createData}},[t._v("1分")]),t._v(" "),n("a",{staticClass:"m-l",on:{click:t.createData}},[t._v("60分")]),n("div",{attrs:{id:"container"}})]),n("div",[n("div",[t._v("形态解读")]),n("div",{staticStyle:{position:"relative"},attrs:{id:"kline"}}),n("div",[n("div",[t._v("形态释义")]),n("div",[t._v("名称：黄金金叉")]),n("div",[t._v("解读：短期趋势看好")]),n("div",[t._v("特征：DIF线上穿DEA线")])]),t._v(" 近一年历史回测 "),n("table",{staticStyle:{width:"100%"}},[n("tr",[n("td",[t._v("上涨概率")]),n("td",[t._v("出现次数")]),n("td",[t._v("16次")]),n("td",[t._v("平均涨跌")]),n("td",[t._v("+0.54%")])]),n("tr",[n("td",{attrs:{rowspan:"2"}},[t._v("56%")]),n("td",[t._v("次日上涨")]),n("td",[t._v("9次")]),n("td",[t._v("最大涨幅")]),n("td",[t._v("+5.32%")])]),n("tr",[n("td",[t._v("次日下跌")]),n("td",[t._v("7次")]),n("td",[t._v("最大跌幅")]),n("td",[t._v("-3.45%")])])]),t._v(" 以上所有数据信息仅供参考，不构成投资建议。后续走势预测，请查看"),n("a",[t._v("相似K线")])])]),n("van-tab",{attrs:{title:"财务"}},[t._v("财务")]),n("van-tab",{attrs:{title:"简况"}},[t._v("简况")])],1)],1)},R=[],k=(n("b680"),n("917c")),z=["#0086FA","#FFBF00","#F5222D","#FF00FF","#ED9899"],A={name:"analysis",data:function(){return{activeName:"分析",chart:null}},methods:{createData:function(){var t=[],e=(99*Math.random()).toFixed(0);t.push({value:+e}),this.draw(t,this.chart),this.chart.changeData(t)},draw:function(t,e){var n=25;e.annotation().clear(!0),e.annotation().arc({top:!1,start:[0,1],end:[100,1],style:{stroke:"#CBCBCB",lineWidth:n,lineDash:null}}),e.annotation().arc({start:[0,1],end:[20,1],style:{stroke:z[0],lineWidth:n,lineDash:null}}),e.annotation().arc({start:[20,1],end:[40,1],style:{stroke:z[1],lineWidth:n,lineDash:null}}),e.annotation().arc({start:[40,1],end:[60,1],style:{stroke:z[2],lineWidth:n,lineDash:null}}),e.annotation().arc({start:[60,1],end:[80,1],style:{stroke:z[3],lineWidth:n,lineDash:null}}),e.annotation().arc({start:[80,1],end:[100,1],style:{stroke:z[4],lineWidth:n,lineDash:null}}),e.annotation().text({position:["50%","85%"],content:"上涨概率",style:{fontSize:20,fill:"#545454",textAlign:"center"}}),e.annotation().text({position:["50%","90%"],content:"".concat(t[0].value," %"),style:{fontSize:36,fill:"#545454",textAlign:"center"},offsetY:15}),e.annotation().text({position:["-5%","70%"],content:"严重超买",style:{fontSize:14,fill:"#545454",textAlign:"center"}}),e.annotation().text({position:["20%","40%"],content:"超买",style:{fontSize:14,fill:"#545454",textAlign:"center"}}),e.annotation().text({position:["50%","30%"],content:"中性",style:{fontSize:14,fill:"#545454",textAlign:"center"}}),e.annotation().text({position:["105%","70%"],content:"严重超卖",style:{fontSize:14,fill:"#545454",textAlign:"center"}}),e.annotation().text({position:["80%","40%"],content:"超卖",style:{fontSize:14,fill:"#545454",textAlign:"center"}}),e.changeData(t)}},mounted:function(){var t=this;function e(t){this.DivKLine=t,this.Chart=window.JSChart.Init(t),this.Option={Type:"历史K线图",Windows:[{Script:"B1:=WEEK==N;\n                           S1:=WEEK==N2;\n                           MA10:MA(C,10);\n                           DRAWICON(B1,L*0.97,13);\n                           DRAWICON(S1,H*1.03,14);",Args:[{Name:"N",Value:1},{Name:"N2",Value:5}],Name:"我的指标",Modify:!0,Change:!1}],Symbol:"002797.sz",IsAutoUpdate:!0,IsShowRightMenu:!1,IsShowCorssCursorInfo:!1,CorssCursorInfo:{IsShowCorss:!1},KLine:{DragMode:1,Right:1,Period:0,MaxReqeustDataCount:1e3,PageSize:50,IsShowTooltip:!1},KLineTitle:{IsShowName:!0,IsShowSettingInfo:!0},Border:{Left:1,Right:1,Bottom:25,Top:25},Frame:[{SplitCount:3,StringFormat:0,IsShowLeftText:!0,IsShowRightText:!1}]},this.Create=function(){var t=this;window.$(window).resize((function(){t.OnSize()})),this.OnSize(),this.Chart.SetOption(this.Option)},this.OnSize=function(){var t=window.$(window).width();this.DivKLine.style.top="px",this.DivKLine.style.left="px",this.DivKLine.style.width=t+"px",this.DivKLine.style.height="200px",this.Chart.OnSize()}}function n(t){this.DivKLine=t,this.Chart=window.JSChart.Init(t),this.Option={Type:"历史K线图",Windows:[{Index:"RSI",Modify:!1,Change:!1},{Index:"VOL",Modify:!1,Change:!1}],Symbol:"002797.sz",IsAutoUpdate:!0,IsShowRightMenu:!1,IsShowCorssCursorInfo:!1,CorssCursorInfo:{IsShowCorss:!1},KLine:{DragMode:1,Right:1,Period:0,MaxReqeustDataCount:1e3,PageSize:50,IsShowTooltip:!1},KLineTitle:{IsShowName:!0,IsShowSettingInfo:!0},Border:{Left:1,Right:1,Bottom:25,Top:25},Frame:[{SplitCount:3,StringFormat:0,IsShowLeftText:!0,IsShowRightText:!1}]},this.Create=function(){var t=this;window.$(window).resize((function(){t.OnSize()})),this.OnSize(),this.Chart.SetOption(this.Option)},this.OnSize=function(){var t=window.$(window).width();this.DivKLine.style.top="px",this.DivKLine.style.left="px",this.DivKLine.style.width=t+"px",this.DivKLine.style.height="400px",this.Chart.OnSize()}}this.$nextTick((function(){window.$((function(){var t=new e(document.getElementById("kline"));t.Create();var i=new n(document.getElementById("klineRi"));i.Create()}));var i=t;function a(){var t=[],e=(99*Math.random()).toFixed(0);return t.push({value:+e}),t}Object(k["b"])("point","pointer",{draw:function(t,e){var n=e.addGroup({}),i=this.parsePoint({x:0,y:0});return n.addShape("line",{attrs:{x1:i.x,y1:i.y,x2:t.x,y2:t.y,stroke:t.color,lineWidth:5,lineCap:"round"}}),n.addShape("circle",{attrs:{x:i.x,y:i.y,r:9.75,stroke:t.color,lineWidth:4.5,fill:"#fff"}}),n}});var o=new k["a"]({container:"container",autoFit:!0,height:300,padding:[0,50,0,50]});t.chart=o,o.data(a()),o.animate(!1),o.coordinate("polar",{startAngle:Math.PI,endAngle:2*Math.PI,radius:.75}),o.scale("value",{min:0,max:100,tickInterval:20}),o.axis("1",!1),o.axis("value",{line:null,label:{offset:-40,style:{fontSize:18,fill:"#CBCBCB",textAlign:"center",textBaseline:"middle"}},tickLine:{length:-24},grid:null}),o.legend(!1),o.tooltip(!1),o.point().position("value*1").shape("pointer").color("value",(function(t){return t<20?z[0]:t<=40?z[1]:t<=60?z[2]:t<=80?z[3]:t<=100?z[4]:void 0})),i.draw(a(),o)}))}},B=A,K=(n("d232"),Object(l["a"])(B,M,R,!1,null,"10c97482",null)),$=K.exports;i["a"].use(h["a"]);var E=new h["a"]({mode:"history",base:"/zqdemo/",routes:[{path:"/",redirect:"/index"},{path:"/index",component:S},{path:"/demo18",component:_},{path:"/cmfb",component:O},{path:"/analysis",component:$}]}),F=E,j=(n("157a"),n("9ffb")),N=n("d1e1"),P=n("0b33"),W=n("5e46"),J=n("b650");i["a"].use(j["a"]),i["a"].use(N["a"]),i["a"].use(P["a"]),i["a"].use(W["a"]),i["a"].config.productionTip=!1,i["a"].use(J["a"]),new i["a"]({router:F,render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,e,n){},a58c:function(t,e,n){},b3fb:function(t,e,n){},d232:function(t,e,n){"use strict";n("34e1")},ff36:function(t,e,n){"use strict";n("a58c")}});