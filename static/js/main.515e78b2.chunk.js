(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{104:function(e,t,a){e.exports=a(226)},109:function(e,t,a){},110:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),o=(a(109),a(28)),s=a(29),i=a(54),u=a(53),m=(a(110),a(64)),d=a(9);var h=function(){return r.a.createElement("div",{className:"container_spinner"},r.a.createElement("div",{className:"spiner_circle1"}))},v=a(260),f=a(264);function E(e){return Math.abs(Number(e))>=1e9?(Math.abs(Number(e))/1e9).toFixed(2)+"B":Math.abs(Number(e))>=1e6?(Math.abs(Number(e))/1e6).toFixed(2)+"M":Math.abs(Number(e))>=1e3?(Math.abs(Number(e))/1e3).toFixed(2)+"K":Math.abs(Number(e))}var b=function(e){var t=e.tag,a=e.total,n=e.today;return r.a.createElement(v.a,{className:"cardHandMade"},r.a.createElement(f.a,null,r.a.createElement("div",{className:"title"},t),r.a.createElement("div",{className:"title red numbers"},"+",E(n)),r.a.createElement("div",{className:"title total"},"Total ",E(a))))},g=a(65),p=a.n(g),y={API_COUNTRY:"https://disease.sh/v3/covid-19/countries/",API_ALL:"https://disease.sh/v3/covid-19/all"},N=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"countryParam",value:function(e){return console.log(e),p.a.get(y.API_COUNTRY+e)}},{key:"all",value:function(){return p.a.get(y.API_ALL)}}]),e}(),C=a(227),w=a(265),O=a(269),j=a(270),k=a(266);a(130);function M(e){return r.a.createElement(k.a,Object.assign({elevation:6,variant:"filled"},e))}var W=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={countries:"",all:"",selectedLocation:"WorldWide",open:!1,error:""},e.handleChange=function(t){var a=t.target.value;e.setState({selectedLocation:a});var n=new N;"WorldWide"===a?n.all().then((function(t){e.setState({all:t.data})})).catch((function(e){return console.log(e)})):n.countryParam(a).then((function(t){e.setState({all:t.data})})).catch((function(e){return console.log(e)}))},e.handleClose=function(){e.setState({open:!1})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.weight;console.log(t);var a=new N;a.countryParam("").then((function(t){for(var a={},n=0;n<t.data.length;n++)for(var r=0;r<t.data.length-1;r++)t.data[r].cases<t.data[r+1].cases&&(a=t.data[r],t.data[r]=t.data[r+1],t.data[r+1]=a);e.setState({countries:t.data})})).catch((function(t){t.response?e.setState({error:t.response.data.message,open:!0}):e.setState({error:t.message,open:!0})})),a.all().then((function(t){return e.setState({all:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container mt-3"},this.state.countries?r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,"COVID-19 TRACKER"),r.a.createElement("form",{className:"form-group"},r.a.createElement(w.a,{className:"select ml-3",labelId:"demo-simple-select-label",id:"demo-simple-select",value:this.state.selectedLocation,onChange:this.handleChange},r.a.createElement(O.a,{value:"WorldWide"},"WorldWide"),this.state.countries&&this.state.countries.map((function(e,t){return r.a.createElement(O.a,{key:t,value:e.countryInfo.iso2},e.country)}))))),r.a.createElement("br",null),r.a.createElement("div",{className:"World-content"},this.state.all&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{tag:"Coronovirus Cases",today:this.state.all.todayCases,total:this.state.all.cases}),r.a.createElement(b,{tag:"Recovered",today:this.state.all.todayRecovered,total:this.state.all.recovered}),r.a.createElement(b,{tag:"Deaths",today:this.state.all.todayDeaths,total:this.state.all.deaths})))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(C.a,{className:"content"},r.a.createElement("h3",null,"Live Cases by Country"),r.a.createElement("br",null),r.a.createElement("div",{className:"table-container table-responsive"},r.a.createElement("table",{className:"table table-sm"},r.a.createElement("thead",{className:""}),r.a.createElement("tbody",null,this.state.countries&&this.state.countries.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.country),r.a.createElement("td",null,e.cases))}))))),r.a.createElement("canvas",{className:"chart",ref:function(t){return e.weight=t}})))):r.a.createElement(h,null),r.a.createElement(j.a,{open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose},r.a.createElement(M,{onClose:this.handleClose,severity:"error"},this.state.error)))}}]),a}(r.a.Component);var A=function(){var e="";return Object(n.useEffect)((function(){var t=e;console.log(t)})),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:W}),r.a.createElement(d.b,{path:"/*",render:function(){return r.a.createElement(d.a,{to:"/"})}}))),r.a.createElement("canvas",{className:"chart",ref:function(t){return e=t}}))},I=(a(79),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.weight;console.log(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement("canvas",{className:"chart",ref:function(t){return e.weight=t}}))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(225);c.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[104,1,2]]]);
//# sourceMappingURL=main.515e78b2.chunk.js.map