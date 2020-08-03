(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{67:function(e,t,a){e.exports=a(99)},72:function(e,t,a){},73:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),c=(a(72),a(25)),s=a(26),i=a(43),u=a(42),m=(a(73),a(59)),d=a(9);var h=function(){return r.a.createElement("div",{className:"container_spinner"},r.a.createElement("div",{className:"spiner_circle1"}))},v=a(133),b=a(137);function E(e){return Math.abs(Number(e))>=1e9?(Math.abs(Number(e))/1e9).toFixed(2)+"B":Math.abs(Number(e))>=1e6?(Math.abs(Number(e))/1e6).toFixed(2)+"M":Math.abs(Number(e))>=1e3?(Math.abs(Number(e))/1e3).toFixed(2)+"K":Math.abs(Number(e))}var f=function(e){var t=e.tag,a=e.total,n=e.today;return r.a.createElement(v.a,{className:"cardHandMade"},r.a.createElement(b.a,null,r.a.createElement("div",{className:"title"},t),r.a.createElement("div",{className:"title red numbers"},"+",E(n)),r.a.createElement("div",{className:"title total"},"Total ",E(a))))},p=a(45),y=a.n(p),g={API_COUNTRY:"https://disease.sh/v3/covid-19/countries/",API_ALL:"https://disease.sh/v3/covid-19/all"},N=function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,[{key:"countryParam",value:function(e){return y.a.get(g.API_COUNTRY+e)}},{key:"all",value:function(){return y.a.get(g.API_ALL)}}]),e}(),C=a(100),w=a(138),O=a(142),k=a(143),j=a(139),W=a(58),x=a.n(W);function M(e){return r.a.createElement(j.a,Object.assign({elevation:6,variant:"filled"},e))}var S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={countries:"",all:"",selectedLocation:"WorldWide",open:!1,error:""},e.handleChange=function(t){var a=t.target.value;e.setState({selectedLocation:a});var n=new N;"WorldWide"===a?n.all().then((function(t){e.setState({all:t.data})})).catch((function(e){return console.log(e)})):n.countryParam(a).then((function(t){e.setState({all:t.data})})).catch((function(e){return console.log(e)}))},e.handleClose=function(){e.setState({open:!1})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){var e=this.weight;e&&new x.a(e,{type:"line",data:{labels:[9,10,11,12,13,14,15,16,17,18,19,20,21,22],datasets:[{label:"# of Votes",data:[{x:9,y:63.35},{x:10,y:63.35},{x:11,y:63.35},{x:12,y:63.7},{x:13,y:63.4},{x:14,y:60}],borderColor:"rgba(0, 0, 0, 1)",borderWidth:1,borderJoinStyle:"round",pointStyle:"rectRot",pointHoverBackgroundColor:"rgba(0,255,0,1)"}]},options:{}})}},{key:"componentDidMount",value:function(){var e=this,t=new N;t.countryParam("").then((function(t){for(var a={},n=0;n<t.data.length;n++)for(var r=0;r<t.data.length-1;r++)t.data[r].cases<t.data[r+1].cases&&(a=t.data[r],t.data[r]=t.data[r+1],t.data[r+1]=a);e.setState({countries:t.data})})).catch((function(t){t.response?e.setState({error:t.response.data.message,open:!0}):e.setState({error:t.message,open:!0})})),t.all().then((function(t){return e.setState({all:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container mt-3"},this.state.countries?r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,"COVID-19 TRACKER"),r.a.createElement("form",{className:"form-group"},r.a.createElement(w.a,{className:"select ml-3",labelId:"demo-simple-select-label",id:"demo-simple-select",value:this.state.selectedLocation,onChange:this.handleChange},r.a.createElement(O.a,{value:"WorldWide"},"WorldWide"),this.state.countries&&this.state.countries.map((function(e,t){return r.a.createElement(O.a,{key:t,value:e.countryInfo.iso2},e.country)}))))),r.a.createElement("br",null),r.a.createElement("div",{className:"World-content"},this.state.all&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{tag:"Coronovirus Cases",today:this.state.all.todayCases,total:this.state.all.cases}),r.a.createElement(f,{tag:"Recovered",today:this.state.all.todayRecovered,total:this.state.all.recovered}),r.a.createElement(f,{tag:"Deaths",today:this.state.all.todayDeaths,total:this.state.all.deaths})))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(C.a,{className:"content"},r.a.createElement("h3",null,"Live Cases by Country"),r.a.createElement("br",null),r.a.createElement("div",{className:"table-container table-responsive"},r.a.createElement("table",{className:"table table-sm"},r.a.createElement("thead",{className:""}),r.a.createElement("tbody",null,this.state.countries&&this.state.countries.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.country),r.a.createElement("td",null,e.cases))}))))),r.a.createElement("canvas",{className:"chart",ref:function(t){return e.weight=t}})))):r.a.createElement(h,null),r.a.createElement(k.a,{open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose},r.a.createElement(M,{onClose:this.handleClose,severity:"error"},this.state.error)))}}]),a}(r.a.Component);var A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:S}),r.a.createElement(d.b,{path:"/*",render:function(){return r.a.createElement(d.a,{to:"/"})}}))))},I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(98);o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.b5e4950b.chunk.js.map