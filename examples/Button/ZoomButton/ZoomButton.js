!function(e){function t(t){for(var a,r,u=t[0],m=t[1],i=t[2],c=0,f=[];c<u.length;c++)r=u[c],o[r]&&f.push(o[r][0]),o[r]=0;for(a in m)Object.prototype.hasOwnProperty.call(m,a)&&(e[a]=m[a]);for(d&&d(t);f.length;)f.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,u=1;u<n.length;u++){var m=n[u];0!==o[m]&&(a=!1)}a&&(l.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={23:0},l=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var u=window.webpackJsonp=window.webpackJsonp||[],m=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var d=m;l.push([466,1,0]),n()}({466:function(e,t,n){"use strict";var a=c(n(2)),o=n(16),l=c(n(40)),r=c(n(52)),u=c(n(48)),m=c(n(64)),i=c(n(19)),d=n(36);function c(e){return e&&e.__esModule?e:{default:e}}var f=new l.default({layers:[new u.default({name:"OSM",source:new m.default})],view:new r.default({center:i.default.fromLonLat([37.4057,8.81566]),zoom:10})});(0,o.render)(a.default.createElement("div",null,a.default.createElement("div",{id:"map",style:{height:"400px"}}),a.default.createElement("div",{className:"example-block"},a.default.createElement("span",null,"Zoom buttons:"),a.default.createElement("br",null),a.default.createElement(d.ZoomButton,{map:f},"Zoom in (standard, animated)")," ",a.default.createElement(d.ZoomButton,{map:f,delta:.5},"Zoom in (0.5 zoomlevels, animated)")," ",a.default.createElement(d.ZoomButton,{map:f,animate:!1},"Zoom in (no animation)")," ",a.default.createElement(d.ZoomButton,{map:f,animateOptions:{duration:1500}},"Zoom in (1.5 seconds animation)"),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(d.ZoomButton,{map:f,delta:-1},"Zoom out (standard, animated)")," ",a.default.createElement(d.ZoomButton,{map:f,delta:-2},"Zoom out (2 zoomlevels, animated)")," ",a.default.createElement(d.ZoomButton,{map:f,delta:-1,animate:!1},"Zoom out (no animation)")," ",a.default.createElement(d.ZoomButton,{map:f,delta:-1,animateOptions:{duration:1500}},"Zoom out (1.5 seconds animation)"))),document.getElementById("exampleContainer"),function(){f.setTarget("map")})}});