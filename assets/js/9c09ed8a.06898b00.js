"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4065],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,f=m["".concat(i,".").concat(u)]||m[u]||s[u]||l;return r?n.createElement(f,p(p({ref:t},d),{},{components:r})):n.createElement(f,p({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<l;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5346:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={title:"ShardResume"},p=void 0,o={unversionedId:"typedefs/shardresume",id:"typedefs/shardresume",title:"ShardResume",description:"Shard resume event.",source:"@site/docs/typedefs/shardresume.mdx",sourceDirName:"typedefs",slug:"/typedefs/shardresume",permalink:"/djseed/docs/typedefs/shardresume",draft:!1,tags:[],version:"current",frontMatter:{title:"ShardResume"},sidebar:"sidebar",previous:{title:"ShardReconnecting",permalink:"/djseed/docs/typedefs/shardreconnecting"},next:{title:"ShardStats",permalink:"/djseed/docs/typedefs/shardstats"}},i={},c=[{value:"Type",id:"type",level:2},{value:"Properties",id:"properties",level:2}],d={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Shard resume event."),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"object"))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"id"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"null")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Cluster identifier.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"shards"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number[]")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"null")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Array of shard ids.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"type"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"null")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Type of event, what occured?")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"shard"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"null")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Shard identifier.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"replayedEvents"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"null")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Number of replayed events.")))))}s.isMDXComponent=!0}}]);