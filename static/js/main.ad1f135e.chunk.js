(this.webpackJsonpopenz=this.webpackJsonpopenz||[]).push([[0],{14:function(e,n,t){e.exports=t(23)},19:function(e,n,t){},20:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var r,a,o,i,l,c,u,d,s,m=t(0),p=t.n(m),f=t(10),g=t.n(f),b=(t(19),t(3)),h=t(4),v=t(1),y=(t(20),t(5)),w=t.n(y),E=p.a.createContext({webmidi:w.a,init:function(){},initialized:!1,inputs:[]}),j=E.Provider,O=(E.Consumer,E.displayName,j),x=t(2),S=function(e){return e.green?e.theme.colors.green:e.blue?e.theme.colors.blue:e.yellow?e.theme.colors.yellow:e.red?e.theme.colors.red:e.theme.colors.secondary},k=function(e){return function(n){return e(Object(b.a)(Object(b.a)({},n),{},{propColor:S(n)}))}},C=v.c.button.withConfig({componentId:"oxiyve-0"})(["background:transparent;border-radius:3px;border:2px solid transparent;margin:0.5em 1em;padding:0.25em 1em;",""],k((function(e){return e.primary?Object(v.b)(r||(r=Object(x.a)(["\n    background: ",";\n    color: white;\n  "])),S(e)):Object(v.b)(a||(a=Object(x.a)(["\n    color: ",";\n    border-color: ",";\n  "])),S(e),S(e))}))),A=v.c.select.withConfig({componentId:"sc-166z4c6-0"})(["background:transparent;border-radius:3px;border:2px solid transparent;margin:0.5em 1em;padding:0.25em 1em;"," option{background:",";padding:.4rem .1rem;}"],k((function(e){return e.primary?Object(v.b)(o||(o=Object(x.a)(["\n    background: ",";\n    color: white;\n  "])),S(e)):Object(v.b)(i||(i=Object(x.a)(["\n    color: ",";\n    border-color: ",";\n  "])),S(e),S(e))})),(function(e){return e.theme.colors.background})),L=v.c.div(l||(l=Object(x.a)(["\n  display: flex;\n  flex-direction: ",";\n  flex: ",";\n  justify-content: ",";\n  user-select: none;\n"])),(function(e){return e.row?"row":e.col?"column":"inherit"}),(function(e){return e.fill?"1":"none"}),(function(e){return e.stretch?"stretch":"normal"})),F=v.c.h2(c||(c=Object(x.a)(["      \n    font-size: 6rem;\n    line-height: 1em;\n    width: 2em;\n    text-align: center;\n    font-weight: 300;\n    height: 1em;\n    margin: -.5rem 0 0 0;\n    opacity: ",";\n"])),(function(e){return e.disabled?.5:1})),z={borderRadius:"5px",colors:{main:"#f5b900",secondary:"#f0f0f0",green:"#1c6406",blue:"#0062f5",yellow:"#f5b900",red:"#ab0b0b",background:"#707070"}},R=["Param 1","Param 2","Filter","Resonance"],I=["Attack","Decay","Sustain","Release"],M=["LFO Amount","LFO Speed","LFO Target","LFO Shape"],P=["FX1 Send","FX2 Send","Pan","Level"],B=[["Pitch","Reverse","Filter","Resonance"],I,M,P],D=[R,I,M,P],T=[R,I,["Arp. Speed","Arp. Pattern","Arp. Style","Arp. Range"],P],X=[R,M],N=Array.from(Array(4),(function(e,n){return Array.from(Array(4),(function(e,t){return(4*n+t).toString(10).padStart(2,"0")}))})),W=[{group:"",params:[["---","---","---","---"]]},{group:"KCK",params:B},{group:"SNR",params:B},{group:"PCS",params:B},{group:"SMP",params:B},{group:"BAS",params:D},{group:"LEA",params:D},{group:"ARP",params:T},{group:"CHO",params:D},{group:"FX1",params:X},{group:"FX2",params:X},{group:"TAP",params:[["Speed","Fine Tune","Filter","Resonance"],P]},{group:"MAS",params:[["Chorus","Drive","Filter","Resonance"]]},{group:"PRF",params:[[]]},{group:"MOD",params:N},{group:"LGT",params:[["Color","Alt Color","Speed","Intensity"],N[1]]},{group:"MTN",params:[[]]}],G=function(e){var n=e.value,t=e.label,r=e.color;return p.a.createElement(L,{col:!0,style:{height:"5rem"}},p.a.createElement("div",{style:{textAlign:"right",fontSize:"4rem",fontWeight:300,lineHeight:"1em",height:"1em",marginTop:"-.5rem",width:"8rem"}},n),p.a.createElement(L,{row:!0,style:{alignItems:"center",justifyContent:"space-between"}},p.a.createElement("div",{style:{width:"1.2rem",height:"1.2rem",borderRadius:"50%",background:null!==r&&void 0!==r?r:"transparent"}}),p.a.createElement("div",{style:{textAlign:"right",fontSize:"1.2rem"}},t)))},K=v.c.div(u||(u=Object(x.a)(["\n  flex: 1;\n"]))),J=function(e){var n,t=e.wheels;return p.a.createElement(L,{row:!0,fill:!0},p.a.createElement(F,null,null===(n=W[t[0].channel])||void 0===n?void 0:n.group),p.a.createElement(K,null),t.map((function(e,n){var t=e.value,r=e.channel,a=e.page;return p.a.createElement(U,{key:n,index:n,value:t,channel:r,page:a})})))},H=v.c.div.withConfig({componentId:"vsylc1-0"})(["border-radius:50%;color:black;",""],k((function(e){return Object(v.b)(d||(d=Object(x.a)(["\n    background-color: ","\n  "])),e.propColor)}))),q=["#ffffff","#1fc400","#6300c1","#e99500"],U=function(e){var n,t=e.index,r=e.value,a=e.channel,o=e.page,i=(W[a]||{params:[[]]}).params,l="number"===typeof r,c=l?Math.ceil((null!==r&&void 0!==r?r:0)/1.28).toFixed(0):"XX",u=2.109375*(null!==r&&void 0!==r?r:64)-135;return p.a.createElement("div",{style:{display:"flex",flexDirection:"row",padding:"0 1rem",border:"1px #ff00ff00 dashed",opacity:l?1:.5}},p.a.createElement(H,{style:{transform:"rotateZ(".concat(u,"deg)"),width:"5rem",height:"5rem",marginRight:".5rem"},green:0===t,blue:1===t,yellow:2===t,red:3===t},p.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",background:"black",width:"2px",height:"50%"}})),p.a.createElement(G,{value:"".concat(c,"%"),color:q[o],label:(null===(n=i[o])||void 0===n?void 0:n[t])||"\ud83e\udd37\u200d 0x".concat(a.toString(16).padStart(2,"0")," ").concat(t.toString(16).padStart(2,"0"))}))};!function(e){e[e.Clock=248]="Clock",e[e.Start=250]="Start",e[e.Continue=251]="Continue",e[e.Stop=252]="Stop"}(s||(s={}));var Y,Z,$,Q=["F","F\u266f","G","G\u266f","A","A\u266f","B","C","C\u266f","D","D\u266f","E","F","G\u266d","G","A\u266d","A","B\u266d","B","C","D\u266d","D","E\u266d","E"],V=v.c.div.withConfig({componentId:"sc-2ei0kd-0"})(["user-select:none;vertical-align:bottom;display:flex;align-items:flex-end;justify-content:center;border-radius:.5rem;border-top:.1rem solid black;font-size:1.4rem;font-weight:300;padding-bottom:.5rem;pointer-events:all;"," ",""],(function(e){return e.black?Object(v.b)(Y||(Y=Object(x.a)(["\n      background-color: ",";\n      color: white;\n      height: 6rem;\n      margin: 0 -2.38095238095238%;\n      //position: absolute;\n      width: 2rem;\n      z-index: 2;\n      flex: 2;\n      \n  "])),e.pressed?"hsl(".concat(e.noteColor,", 90%, 30%)"):"black"):Object(v.b)(Z||(Z=Object(x.a)(["\n      background-color: ",";\n      color: black;\n      height: 10rem;\n      flex: 3;\n      width: 3rem;\n      border-right: .1rem solid black;\n  "])),e.pressed?"hsl(".concat(e.noteColor,", 90%, 70%)"):"white")}),(function(e){return e.pressed&&Object(v.b)($||($=Object(x.a)(["box-shadow: 0 0 .1rem #ff518c"])))})),_=function(e){var n=e.notes,t=e.onKeyClicked;return p.a.createElement("div",{style:{display:"flex",flexDirection:"row",position:"relative"}},n.map((function(e,n){var r=e.pressed,a=e.instrument,o=n%12,i=n>18?5:n>6?4:3,l=Q[n],c=l.replace("\u266f","#").replace("\u266d","b"),u=[1,3,5,8,10].includes(o),d=function(){return t(c,i,!0)},s=function(){return t(c,i,!1)};return p.a.createElement(V,{pressed:r,black:u,onMouseDown:d,onMouseUp:s,onMouseLeave:s,noteColor:45*a,onMouseEnter:function(e){return 1===e.buttons&&d()},key:n},l)})))},ee=function(e){var n=e.state,t=e.number,r=n.playing,a=n.note,o="hsl(".concat((t+1)%8*45,", 90%, 70%)"),i=W[t+1].group;return p.a.createElement(L,{col:!0,style:{height:"7rem",color:r?"white":o}},p.a.createElement("div",{style:{textAlign:"center",fontSize:"4rem",fontWeight:300,lineHeight:"1em",height:"1em",marginTop:"-.5rem",width:"8rem",opacity:r?1:.2}},"undefined"===typeof a?"":Q[a]),p.a.createElement("div",{style:{textAlign:"center",fontSize:"2.2rem",fontWeight:300,background:r?o:"#ffffff20"}},i))},ne=function(e){var n=e.channels,t=e.notes;return p.a.createElement(p.a.Fragment,null,p.a.createElement(L,{stretch:!0,row:!0,style:{padding:"2rem",flexWrap:"wrap",height:"14rem"}},n.map((function(e,n){return p.a.createElement(p.a.Fragment,null,p.a.createElement(L,{row:!0,style:{width:"12.5%",justifyContent:"center"}},p.a.createElement(ee,{state:e,number:n})))}))),p.a.createElement("div",{style:{padding:"2rem"}},p.a.createElement(_,{notes:t,onKeyClicked:function(){}})))},te=function(e){var n=e.notes,t=e.wheels,r=e.keyClicked;return p.a.createElement(p.a.Fragment,null,p.a.createElement(L,{stretch:!0,row:!0,style:{padding:"2rem",height:"14rem"}},p.a.createElement(J,{wheels:t})),p.a.createElement("div",{style:{padding:"2rem"}},p.a.createElement(_,{notes:n,onKeyClicked:r})))},re=v.c.div.withConfig({componentId:"sc-19x7a5j-0"})(["display:flex;padding:0 .5rem;align-items:center;flex-direction:row;"]),ae=re,oe=v.c.div.withConfig({componentId:"sc-19x7a5j-1"})(["background:",";display:flex;flex-direction:column;justify-content:center;color:white;min-height:100vh;"],(function(e){return e.theme.colors.background})),ie=v.c.div.withConfig({componentId:"sc-19x7a5j-2"})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;"]),le=v.c.div.withConfig({componentId:"sc-19x7a5j-3"})(["display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;flex:1;"]),ce=function(){var e,n,t,r,a,o,i,l=Object(m.useState)(),c=Object(h.a)(l,2),u=c[0],d=c[1],f=Object(m.useState)(),g=Object(h.a)(f,2),y=g[0],E=g[1],j=Object(m.useState)(0),x=Object(h.a)(j,2),S=x[0],k=x[1],R=Object(m.useState)(Array.from(new Array(16),(function(e){return{playing:!1}}))),I=Object(h.a)(R,2),M=I[0],P=I[1],B=Object(m.useState)({}),D=Object(h.a)(B,2),T=D[0],X=D[1],N=Object(m.useState)(Array.from(new Array(24),(function(e){return{pressed:!1,instrument:0}}))),W=Object(h.a)(N,2),K=W[0],J=W[1],H=Object(m.useState)(Array.from(new Array(4),(function(e){return{channel:0,page:0}}))),q=Object(h.a)(H,2),U=q[0],Y=q[1],Z=Object(m.useState)({bpm:0,playing:!1}),$=Object(h.a)(Z,2),Q=$[0],V=$[1],_=Object(m.useState)({lastBeat:0,pulses:0}),ee=Object(h.a)(_,2)[1],ce=function(e,n,t){var r=(e.number-5)%24;P((function(e){return e.map((function(e,a){return a===n-1?{playing:t,note:r}:e}))})),k(n),J((function(e){return e.map((function(e,a){return a===r?{pressed:t,instrument:n}:e}))}))};Object(m.useEffect)((function(){console.log("init!"),w.a.enable((function(e){e||(w.a.addListener("connected",(function(e){console.log("Connected!",e)})),w.a.addListener("disconnected",(function(e){console.log("Disconnected!",e)}))),me((function(n){return Object(b.a)(Object(b.a)({},n),{},{error:e,initialized:!e,inputs:w.a.inputs})}))}))}),[]),Object(m.useEffect)((function(){window.opz=u;var e=function(e){var n;console.log(e.type,(n=e.data,Array.from(n).map((function(e){return e.toString(16).padStart(2,"0")})).join(" ")))};null===u||void 0===u||u.removeListener(),null===u||void 0===u||u.addListener("controlchange","all",(function(e){return function(e,n,t){var r=(e.number-1)%4,a=Math.floor((e.number-r)/4);Y((function(e){return e.map((function(e,o){return o===r?{value:t,channel:n,page:a}:{page:a,channel:n,value:e.page===a&&e.channel===n?e.value:void 0}}))}))}(e.controller,e.channel,e.value)})),null===u||void 0===u||u.addListener("noteon","all",(function(e){return ce(e.note,e.channel,!0)})),null===u||void 0===u||u.addListener("noteoff","all",(function(e){return ce(e.note,e.channel,!1)})),null===u||void 0===u||u.addListener("clock","all",(function(e){return n=e.data[0],t=e.timestamp,void(n===s.Clock?ee((function(e){return 47===e.pulses?(V((function(n){return Object(b.a)(Object(b.a)({},n),{},{bpm:Math.round(12e4/(t-e.lastBeat))})})),{lastBeat:t,pulses:0}):{lastBeat:e.lastBeat||t,pulses:e.pulses+1}})):V((function(e){return Object(b.a)(Object(b.a)({},e),{},{playing:n!==s.Stop})})));var n,t})),null===u||void 0===u||u.addListener("channelmode","all",e),null===u||void 0===u||u.addListener("activesensing","all",e),null===u||void 0===u||u.addListener("songposition","all",e),null===u||void 0===u||u.addListener("sysex","all",e),null===u||void 0===u||u.addListener("unknownsystemmessage","all",e),null===u||void 0===u||u.addListener("tuningrequest","all",e),null===u||void 0===u||u.addListener("programchange","all",(function(e){return X((function(n){return Object(b.a)(Object(b.a)({},n),{},{number:e.channel,pattern:e.value})}))})),null===u||void 0===u||u.addListener("reset","all",e),null===u||void 0===u||u.addListener("start","all",(function(){return X((function(e){return Object(b.a)(Object(b.a)({},e),{},{playing:!0})}))})),null===u||void 0===u||u.addListener("stop","all",(function(){return X((function(e){return Object(b.a)(Object(b.a)({},e),{},{playing:!1})}))}))}),[u]),Object(m.useEffect)((function(){window.opzo=y}),[y]);var ue=Object(m.useState)({webmidi:w.a,init:function(){},initialized:!1,inputs:[]}),de=Object(h.a)(ue,2),se=de[0],me=de[1];Object(m.useEffect)((function(){!u&&se.inputs.length>0&&d(se.inputs[0]),!y&&se.webmidi.outputs.length>0&&E(se.webmidi.outputs[0])}),[se,u,y]);return p.a.createElement(v.a,{theme:z},p.a.createElement(O,{value:se},p.a.createElement(oe,null,p.a.createElement(ie,null,p.a.createElement(re,null,"MIDI",p.a.createElement(C,{primary:!0,blue:!0,disabled:se.initialized,onClick:function(){return se.init()}},se.initialized?"Enabled!":"Enable"),p.a.createElement("pre",null,null!==(e=null===se||void 0===se?void 0:se.error)&&void 0!==e?e:""),p.a.createElement("label",null,"Input:",p.a.createElement(A,{value:null===u||void 0===u?void 0:u.id,onChange:function(e){return d(se.inputs.find((function(n){return n.id==e.target.value})))}},p.a.createElement("option",{value:""},se.inputs.length>0?"Select a midi input":"No inputs detected"),se.inputs.map((function(e){return p.a.createElement("option",{key:e.id,value:e.id},e.name)})))),p.a.createElement("label",null,"Output:",p.a.createElement(A,{value:null===y||void 0===y?void 0:y.id,onChange:function(e){return E(w.a.outputs.find((function(n){return n.id==e.target.value})))}},p.a.createElement("option",{value:""},w.a.outputs.length>0?"Select a midi output":"No outputs detected"),se.webmidi.outputs.map((function(e){var n=e.id,t=e.name;return p.a.createElement("option",{key:n,value:n},t)}))))),p.a.createElement(ae,null,p.a.createElement(p.a.Fragment,null))),p.a.createElement(le,null,p.a.createElement(L,{row:!0,style:{padding:"2rem",alignItems:"center",justifyContent:"space-between"}},p.a.createElement(L,{row:!0,style:{cursor:"pointer"},onClick:function(){return X((function(e){return Object(b.a)(Object(b.a)({},e),{},{playing:!e.playing})}))}},p.a.createElement(F,{disabled:T.playing},"JAM"),p.a.createElement(F,{style:{width:"2rem"}},"/"),p.a.createElement(F,{disabled:!T.playing},"PLY")),p.a.createElement(L,{row:!0},p.a.createElement(G,{value:null!==(n=null===(t=T.number)||void 0===t||null===(r=t.toString())||void 0===r?void 0:r.padStart(2,"0"))&&void 0!==n?n:"XX",label:"PROJECT"}),p.a.createElement(G,{value:null!==(a=null===(o=T.pattern)||void 0===o||null===(i=o.toString())||void 0===i?void 0:i.padStart(2,"0"))&&void 0!==a?a:"XX",label:"PATTERN"}),p.a.createElement(G,{value:Q.bpm.toFixed(0),label:"BPM"}))),T.playing?p.a.createElement(ne,{channels:M,notes:K}):p.a.createElement(te,{channel:S,notes:K,wheels:U,keyClicked:function(e,n,t){try{null===y||void 0===y||y.playNote("".concat(e).concat(n),S||1,{velocity:t?.5:0})}catch(r){console.error("Failed to play note ")}}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g.a.render(p.a.createElement(p.a.StrictMode,null,p.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.ad1f135e.chunk.js.map