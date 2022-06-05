"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[842],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return o}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),o=n,N=m["".concat(c,".").concat(o)]||m[o]||k[o]||l;return r?a.createElement(N,d(d({ref:t},p),{},{components:r})):a.createElement(N,d({ref:t},p))}));function o(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,d=new Array(l);d[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,d[1]=i;for(var s=2;s<l;s++)d[s]=r[s];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2013:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),d=["components"],i={title:"ClusterUtil"},c=void 0,s={unversionedId:"classes/clusterutil",id:"classes/clusterutil",title:"ClusterUtil",description:"Extends EventEmitter",source:"@site/docs/classes/clusterutil.mdx",sourceDirName:"classes",slug:"/classes/clusterutil",permalink:"/djseed/docs/classes/clusterutil",tags:[],version:"current",frontMatter:{title:"ClusterUtil"},sidebar:"sidebar",previous:{title:"ClusterPartial",permalink:"/djseed/docs/classes/clusterpartial"},next:{title:"IPC",permalink:"/djseed/docs/classes/ipc"}},p=[{value:"Extends EventEmitter",id:"extends-eventemitter",children:[],level:4},{value:"Constructor",id:"constructor",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"isPrimary",id:"isprimary",children:[{value:"Returns",id:"returns",children:[],level:4}],level:3},{value:"getStats",id:"getstats",children:[{value:"Returns",id:"returns-1",children:[],level:4}],level:3},{value:"getStatsFrom",id:"getstatsfrom",children:[{value:"Returns",id:"returns-2",children:[],level:4}],level:3},{value:"sendEvent",id:"sendevent",children:[{value:"Returns",id:"returns-3",children:[],level:4}],level:3},{value:"sendEventTo",id:"sendeventto",children:[{value:"Returns",id:"returns-4",children:[],level:4}],level:3},{value:"broadcast",id:"broadcast",children:[{value:"Returns",id:"returns-5",children:[],level:4}],level:3},{value:"sendTo",id:"sendto",children:[{value:"Returns",id:"returns-6",children:[],level:4}],level:3},{value:"broadcastEval",id:"broadcasteval",children:[{value:"Returns",id:"returns-7",children:[],level:4}],level:3},{value:"disposeOf",id:"disposeof",children:[{value:"Returns",id:"returns-8",children:[],level:4}],level:3},{value:"launch",id:"launch",children:[{value:"Returns",id:"returns-9",children:[],level:4}],level:3}],level:2},{value:"Events",id:"events",children:[{value:"Cluster_Util_Info",id:"cluster_util_info",children:[],level:3},{value:"Cluster_Util_Error",id:"cluster_util_error",children:[],level:3},{value:"Cluster_Death",id:"cluster_death",children:[],level:3},{value:"Cluster_Error",id:"cluster_error",children:[],level:3},{value:"Cluster_Warn",id:"cluster_warn",children:[],level:3},{value:"Cluster_Ready",id:"cluster_ready",children:[],level:3},{value:"Shard_Ready",id:"shard_ready",children:[],level:3},{value:"Shard_Resume",id:"shard_resume",children:[],level:3},{value:"Shard_Reconnecting",id:"shard_reconnecting",children:[],level:3},{value:"Shard_Disconnect",id:"shard_disconnect",children:[],level:3},{value:"Shard_Error",id:"shard_error",children:[],level:3}],level:2}],k={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,d);return(0,l.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"extends-eventemitter"},"Extends ",(0,l.kt)("a",{parentName:"h4",href:"https://nodejs.org/api/events.html"},"EventEmitter")),(0,l.kt)("p",null,"The main hub for creating clusters."),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new ClusterUtil(token, file, options);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"token"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Discord API Token.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"file"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Path to file containing ",(0,l.kt)("a",{parentName:"td",href:"/docs/classes/client"},"Client")," code.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/typedefs/clusterutiloptions"},"ClusterUtilOptions?")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Options for cluster util.")))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"isprimary"},"isPrimary"),(0,l.kt)("p",null,"Checks if the current process is the primary process."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"isPrimary();\n")),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean"},"boolean")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getstats"},"getStats"),(0,l.kt)("p",null,"Returns stats on every cluster and the shards it contains etc."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getStats();\n")),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise"),"< ",(0,l.kt)("a",{parentName:"p",href:"/docs/typedefs/clusterstats"},"ClusterStats"),"[] >"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getstatsfrom"},"getStatsFrom"),(0,l.kt)("p",null,"Returns stats on a specfic cluster and the shards it contains etc."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getStatsFrom(clusterId);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"clusterId"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Cluster identifier.")))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise"),"< ",(0,l.kt)("a",{parentName:"p",href:"/docs/typedefs/clusterstats"},"ClusterStats")," | undefined >"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sendevent"},"sendEvent"),(0,l.kt)("p",null,"Sends an event to every cluster through ",(0,l.kt)("a",{parentName:"p",href:"/docs/Classes/clusterpartial#events-readonly"},"events"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"sendEvent(message);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"message"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/typedefs/processeventpartials"},"ProcessEventPartials")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Event Partials.")))),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sendeventto"},"sendEventTo"),(0,l.kt)("p",null,"Sends an event to a certain cluster through ",(0,l.kt)("a",{parentName:"p",href:"/docs/Classes/clusterpartial#events-readonly"},"events"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"sendEventTo(clusterId, message);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"clusterId"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Clusters ID.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"message"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/typedefs/processeventpartials"},"ProcessEventPartials")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Event Partials.")))),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"broadcast"},"broadcast"),(0,l.kt)("p",null,"Sends an IPC event to every cluster through ",(0,l.kt)("a",{parentName:"p",href:"/docs/Classes/clusterpartial#ipc-readonly"},"ipc"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"broadcast(message);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"message"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/typedefs/ipcevent"},"IPCEvent")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"IPC Event.")))),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sendto"},"sendTo"),(0,l.kt)("p",null,"Sends an IPC event to a certain cluster through ",(0,l.kt)("a",{parentName:"p",href:"/docs/Classes/clusterpartial#ipc-readonly"},"ipc"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"sendTo(clusterId, message);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"clusterId"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Clusters ID.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"message"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/typedefs/ipcevent"},"IPCEvent")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"IPC Event.")))),(0,l.kt)("h4",{id:"returns-6"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"broadcasteval"},"broadcastEval"),(0,l.kt)("p",null,"Sends some code to every cluter to be evaulated then returns the results or errors."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},'The callback may only contain references outside of the callback if you pass them as\n"references" where they will be scoped into context.'))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"broadcastEval(callback, references);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"callback"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/typedefs/broadcastevalcallback"},"BroadcastEvalCallback")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Callback.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"references"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"object?")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Variables to reference in context.")))),(0,l.kt)("h4",{id:"returns-7"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise"),"< ",(0,l.kt)("a",{parentName:"p",href:"/docs/typedefs/broadcastevalresponse"},"BroadcastEvalResponse"),"[] >"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disposeof"},"disposeOf"),(0,l.kt)("p",null,"Sends a request to specified cluster to dispose itself.\nWill result in the cluster exiting with code 0 and being automatically\nrestarted by ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterUtil"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"disposeOf(clusterId);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"clusterId"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Cluster identifier.")))),(0,l.kt)("h4",{id:"returns-8"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"launch"},"launch"),(0,l.kt)("p",null,"Starts the util."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"launch();\n")),(0,l.kt)("h4",{id:"returns-9"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"cluster_util_info"},"Cluster_Util_Info"),(0,l.kt)("p",null,"Sends general debug info for telling when a cluster is ready or whatnot."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"info"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Info Event.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cluster_util_error"},"Cluster_Util_Error"),(0,l.kt)("p",null,"Usually sent when you write bad code that throws an error."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"error"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/typedefs/clusterutilerror"},"ClusterUtilError")),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Error Info.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cluster_death"},"Cluster_Death"),(0,l.kt)("p",null,"Sent when a cluster dies."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"death"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/typedefs/clusterdeath"},"ClusterDeath")),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Death Info.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cluster_error"},"Cluster_Error"),(0,l.kt)("p",null,"Sent when a cluster errors out. Usually sent when you write bas code that throws an error."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"error"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/typedefs/clustererror"},"ClusterError")),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Error Info.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cluster_warn"},"Cluster_Warn"),(0,l.kt)("p",null,"Sent when a cluster encounters a warn usually somthing to do with DJS."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"warn"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/typedefs/clusterwarn"},"ClusterWarn")),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Warn Info.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cluster_ready"},"Cluster_Ready"),(0,l.kt)("p",null,"Sent when a cluster becomes ready."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ready"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/typedefs/clusterready"},"ClusterReady")),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Ready Info.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"shard_ready"},"Shard_Ready"),(0,l.kt)("p",null,"Sent when a shard on a cluster becomes ready."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ready"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/typedefs/shardready"},"ShardReady")),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Ready Info.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"shard_resume"},"Shard_Resume"),(0,l.kt)("p",null,"Sent when a shard on a cluster resumes."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"resume"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/typedefs/shardresume"},"ShardResume")),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Resume Info.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"shard_reconnecting"},"Shard_Reconnecting"),(0,l.kt)("p",null,"Sent when a shard on a cluster is reconnecting."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"reconnecting"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/typedefs/shardreconnecting"},"ShardReconnecting")),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Reconnecting Info.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"shard_disconnect"},"Shard_Disconnect"),(0,l.kt)("p",null,"Sent when a shard on a cluster disconnects."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"disconnect"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/typedefs/sharddisconnect"},"ShardDisconnect")),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Disconnect Info.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"shard_error"},"Shard_Error"),(0,l.kt)("p",null,"Sent when a shard on a cluster encounters and error. Sent when your code sucks, you know the drill."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"error"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/typedefs/sharderror"},"ShardError")),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Error Info.")))),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);