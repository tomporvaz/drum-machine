(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,n){e.exports=n.p+"static/media/TR808_bass-drum.e9f52e60.mp3"},function(e,a,n){e.exports=n.p+"static/media/TR808_snare.ae7a80c4.mp3"},function(e,a,n){e.exports=n.p+"static/media/TR808_low-tom-tom.b93c84b9.mp3"},function(e,a,n){e.exports=n.p+"static/media/TR808_low-conga.3dcd4ffa.mp3"},function(e,a,n){e.exports=n.p+"static/media/TR808_mid-conga.87f2798d.mp3"},function(e,a,n){e.exports=n.p+"static/media/TR808_high-conga.751195d3.mp3"},function(e,a,n){e.exports=n.p+"static/media/TR808_cow-bell.62fe1b9d.mp3"},function(e,a,n){e.exports=n.p+"static/media/TR808_clap.cbad116f.mp3"},function(e,a,n){e.exports=n.p+"static/media/TR808_closedHH.3b3923f0.mp3"},,,function(e,a,n){e.exports=n(26)},,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var i=n(0),c=n.n(i),t=n(3),l=n.n(t),d=(n(24),n(4)),s=n(5),o=n(16),r=n(6),m=n(1),u=n(17),p=n(7),h=n.n(p),k=n(8),C=n.n(k),f=n(9),E=n.n(f),b=n(10),v=n.n(b),w=n(11),g=n.n(w),y=n(12),T=n.n(y),N=n(13),S=n.n(N),x=n(14),H=n.n(x),D=n(15),R=n.n(D),_=(n(25),function(e){function a(e){var n;return Object(d.a)(this,a),(n=Object(o.a)(this,Object(r.a)(a).call(this,e))).state={clicked:"Q",display:""},n.handleClick=n.handleClick.bind(Object(m.a)(n)),n.playSound=n.playSound.bind(Object(m.a)(n)),n.handleKeyPress=n.handleKeyPress.bind(Object(m.a)(n)),n}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){switch(e.keyCode){case 81:this.handleClick("Q","Bass Drum");break;case 87:this.handleClick("W","Low Tom Tom");break;case 69:this.handleClick("E","Snare");break;case 65:this.handleClick("A","Low Conga");break;case 83:this.handleClick("S","Mid Conga");break;case 68:this.handleClick("D","High Conga");break;case 90:this.handleClick("Z","Cow Bell");break;case 88:this.handleClick("X","Clap");break;case 67:this.handleClick("C"," Closed High Hat")}}},{key:"handleClick",value:function(e,a){this.setState({clicked:e,display:a}),this.playSound(e)}},{key:"playSound",value:function(e){var a=document.getElementById(e);a.currentTime=0,a.play()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"Drum Machine")),c.a.createElement("div",{id:"drum-machine"},c.a.createElement("div",{id:"display"},this.state.display),c.a.createElement("div",{className:"drum-pad",id:"bassDrum",onClick:function(){return e.handleClick("Q","Bass Drum")}},"Q",c.a.createElement("audio",{class:"clip",src:h.a,id:"Q"})),c.a.createElement("div",{className:"drum-pad",id:"lowTomTom",onClick:function(){return e.handleClick("W","Low Tom Tom")}},"W",c.a.createElement("audio",{class:"clip",src:E.a,id:"W"})),c.a.createElement("div",{className:"drum-pad",id:"snare",onClick:function(){return e.handleClick("E","Snare")}},"E",c.a.createElement("audio",{class:"clip",src:C.a,id:"E"})),c.a.createElement("div",{className:"drum-pad",id:"lowConga",onClick:function(){return e.handleClick("A","Low Conga")}},"A",c.a.createElement("audio",{class:"clip",src:v.a,id:"A"})),c.a.createElement("div",{className:"drum-pad",id:"midConga",onClick:function(){return e.handleClick("S","Mid Conga")}},"S",c.a.createElement("audio",{class:"clip",src:g.a,id:"S"})),c.a.createElement("div",{className:"drum-pad",id:"highConga",onClick:function(){return e.handleClick("D","High Conga")}},"D",c.a.createElement("audio",{class:"clip",src:T.a,id:"D"})),c.a.createElement("div",{className:"drum-pad",id:"cowbell",onClick:function(){return e.handleClick("Z","Cow Bell")}},"Z",c.a.createElement("audio",{class:"clip",src:S.a,id:"Z"})),c.a.createElement("div",{className:"drum-pad",id:"clap",onClick:function(){return e.handleClick("X","Clap")}},"X",c.a.createElement("audio",{class:"clip",src:H.a,id:"X"})),c.a.createElement("div",{className:"drum-pad",id:"closedHH",onClick:function(){return e.handleClick("C"," Closed High Hat")}},"C",c.a.createElement("audio",{class:"clip",src:R.a,id:"C"}))))}}]),a}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,1,2]]]);
//# sourceMappingURL=main.25b83916.chunk.js.map