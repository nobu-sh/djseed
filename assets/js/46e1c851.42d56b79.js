"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7391],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>o});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),o=n,N=m["".concat(s,".").concat(o)]||m[o]||k[o]||l;return r?a.createElement(N,d(d({ref:t},c),{},{components:r})):a.createElement(N,d({ref:t},c))}));function o(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,d=new Array(l);d[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,d[1]=i;for(var p=2;p<l;p++)d[p]=r[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2686:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={title:"ClusterUtil"},d=void 0,i={unversionedId:"classes/clusterutil",id:"version-v13/classes/clusterutil",title:"ClusterUtil",description:"Extends EventEmitter",source:"@site/versioned_docs/version-v13/classes/clusterutil.mdx",sourceDirName:"classes",slug:"/classes/clusterutil",permalink:"/djseed/docs/v13/classes/clusterutil",draft:!1,tags:[],version:"v13",frontMatter:{title:"ClusterUtil"},sidebar:"sidebar",previous:{title:"ClusterPartial",permalink:"/djseed/docs/v13/classes/clusterpartial"},next:{title:"IPC",permalink:"/djseed/docs/v13/classes/ipc"}},s={},p=[{value:"Extends EventEmitter",id:"extends-eventemitter",level:4},{value:"Constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"isPrimary",id:"isprimary",level:3},{value:"Returns",id:"returns",level:4},{value:"getStats",id:"getstats",level:3},{value:"Returns",id:"returns-1",level:4},{value:"getStatsFrom",id:"getstatsfrom",level:3},{value:"Returns",id:"returns-2",level:4},{value:"sendEvent",id:"sendevent",level:3},{value:"Returns",id:"returns-3",level:4},{value:"sendEventTo",id:"sendeventto",level:3},{value:"Returns",id:"returns-4",level:4},{value:"broadcast",id:"broadcast",level:3},{value:"Returns",id:"returns-5",level:4},{value:"sendTo",id:"sendto",level:3},{value:"Returns",id:"returns-6",level:4},{value:"broadcastEval",id:"broadcasteval",level:3},{value:"Returns",id:"returns-7",level:4},{value:"disposeOf",id:"disposeof",level:3},{value:"Returns",id:"returns-8",level:4},{value:"launch",id:"launch",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Events",id:"events",level:2},{value:"Cluster_Util_Info",id:"cluster_util_info",level:3},{value:"Cluster_Util_Error",id:"cluster_util_error",level:3},{value:"Cluster_Death",id:"cluster_death",level:3},{value:"Cluster_Error",id:"cluster_error",level:3},{value:"Cluster_Warn",id:"cluster_warn",level:3},{value:"Cluster_Ready",id:"cluster_ready",level:3},{value:"Shard_Ready",id:"shard_ready",level:3},{value:"Shard_Resume",id:"shard_resume",level:3},{value:"Shard_Reconnecting",id:"shard_reconnecting",level:3},{value:"Shard_Disconnect",id:"shard_disconnect",level:3},{value:"Shard_Error",id:"shard_error",level:3}],c={toc:p};function k(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"extends-eventemitter"},"Extends ",(0,n.kt)("a",{parentName:"h4",href:"https://nodejs.org/api/events.html"},"EventEmitter")),(0,n.kt)("p",null,"The main hub for creating clusters."),(0,n.kt)("h2",{id:"constructor"},"Constructor"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"new ClusterUtil(token, file, options);\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"token"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Discord API Token.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"file"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Path to file containing ",(0,n.kt)("a",{parentName:"td",href:"/docs/classes/client"},"Client")," code.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"options"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/typedefs/clusterutiloptions"},"ClusterUtilOptions?")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Options for cluster util.")))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"isprimary"},"isPrimary"),(0,n.kt)("p",null,"Checks if the current process is the primary process."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"isPrimary();\n")),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean"},"boolean")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getstats"},"getStats"),(0,n.kt)("p",null,"Returns stats on every cluster and the shards it contains etc."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"getStats();\n")),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise"),"< ",(0,n.kt)("a",{parentName:"p",href:"/docs/typedefs/clusterstats"},"ClusterStats"),"[] >"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getstatsfrom"},"getStatsFrom"),(0,n.kt)("p",null,"Returns stats on a specfic cluster and the shards it contains etc."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"getStatsFrom(clusterId);\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"clusterId"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"null")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Cluster identifier.")))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise"),"< ",(0,n.kt)("a",{parentName:"p",href:"/docs/typedefs/clusterstats"},"ClusterStats")," | undefined >"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"sendevent"},"sendEvent"),(0,n.kt)("p",null,"Sends an event to every cluster through ",(0,n.kt)("a",{parentName:"p",href:"/docs/Classes/clusterpartial#events-readonly"},"events"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"sendEvent(message);\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"message"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/typedefs/processeventpartials"},"ProcessEventPartials")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Event Partials.")))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,"void"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"sendeventto"},"sendEventTo"),(0,n.kt)("p",null,"Sends an event to a certain cluster through ",(0,n.kt)("a",{parentName:"p",href:"/docs/Classes/clusterpartial#events-readonly"},"events"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"sendEventTo(clusterId, message);\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"clusterId"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"null")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Clusters ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"message"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/typedefs/processeventpartials"},"ProcessEventPartials")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Event Partials.")))),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,"void"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"broadcast"},"broadcast"),(0,n.kt)("p",null,"Sends an IPC event to every cluster through ",(0,n.kt)("a",{parentName:"p",href:"/docs/Classes/clusterpartial#ipc-readonly"},"ipc"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"broadcast(message);\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"message"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/typedefs/ipcevent"},"IPCEvent")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"center"},"IPC Event.")))),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,"void"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"sendto"},"sendTo"),(0,n.kt)("p",null,"Sends an IPC event to a certain cluster through ",(0,n.kt)("a",{parentName:"p",href:"/docs/Classes/clusterpartial#ipc-readonly"},"ipc"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"sendTo(clusterId, message);\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"clusterId"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"null")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Clusters ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"message"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/typedefs/ipcevent"},"IPCEvent")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"center"},"IPC Event.")))),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,"void"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"broadcasteval"},"broadcastEval"),(0,n.kt)("p",null,"Sends some code to every cluter to be evaulated then returns the results or errors."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},'The callback may only contain references outside of the callback if you pass them as\n"references" where they will be scoped into context.')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"broadcastEval(callback, references);\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"callback"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/typedefs/broadcastevalcallback"},"BroadcastEvalCallback")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Callback.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"references"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"object?")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Variables to reference in context.")))),(0,n.kt)("h4",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise"),"< ",(0,n.kt)("a",{parentName:"p",href:"/docs/typedefs/broadcastevalresponse"},"BroadcastEvalResponse"),"[] >"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"disposeof"},"disposeOf"),(0,n.kt)("p",null,"Sends a request to specified cluster to dispose itself.\nWill result in the cluster exiting with code 0 and being automatically\nrestarted by ",(0,n.kt)("inlineCode",{parentName:"p"},"ClusterUtil"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"disposeOf(clusterId);\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"clusterId"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"null")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Cluster identifier.")))),(0,n.kt)("h4",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,"void"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"launch"},"launch"),(0,n.kt)("p",null,"Starts the util."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"launch();\n")),(0,n.kt)("h4",{id:"returns-9"},"Returns"),(0,n.kt)("p",null,"void"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)("h3",{id:"cluster_util_info"},"Cluster_Util_Info"),(0,n.kt)("p",null,"Sends general debug info for telling when a cluster is ready or whatnot."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"info"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Info Event.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"cluster_util_error"},"Cluster_Util_Error"),(0,n.kt)("p",null,"Usually sent when you write bad code that throws an error."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"error"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/typedefs/clusterutilerror"},"ClusterUtilError")),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Error Info.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"cluster_death"},"Cluster_Death"),(0,n.kt)("p",null,"Sent when a cluster dies."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"death"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/typedefs/clusterdeath"},"ClusterDeath")),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Death Info.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"cluster_error"},"Cluster_Error"),(0,n.kt)("p",null,"Sent when a cluster errors out. Usually sent when you write bas code that throws an error."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"error"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/typedefs/clustererror"},"ClusterError")),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Error Info.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"cluster_warn"},"Cluster_Warn"),(0,n.kt)("p",null,"Sent when a cluster encounters a warn usually somthing to do with DJS."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"warn"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/typedefs/clusterwarn"},"ClusterWarn")),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Warn Info.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"cluster_ready"},"Cluster_Ready"),(0,n.kt)("p",null,"Sent when a cluster becomes ready."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"ready"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/typedefs/clusterready"},"ClusterReady")),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Ready Info.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"shard_ready"},"Shard_Ready"),(0,n.kt)("p",null,"Sent when a shard on a cluster becomes ready."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"ready"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/typedefs/shardready"},"ShardReady")),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Ready Info.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"shard_resume"},"Shard_Resume"),(0,n.kt)("p",null,"Sent when a shard on a cluster resumes."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"resume"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/typedefs/shardresume"},"ShardResume")),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Resume Info.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"shard_reconnecting"},"Shard_Reconnecting"),(0,n.kt)("p",null,"Sent when a shard on a cluster is reconnecting."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"reconnecting"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/typedefs/shardreconnecting"},"ShardReconnecting")),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Reconnecting Info.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"shard_disconnect"},"Shard_Disconnect"),(0,n.kt)("p",null,"Sent when a shard on a cluster disconnects."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"disconnect"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/typedefs/sharddisconnect"},"ShardDisconnect")),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Disconnect Info.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"shard_error"},"Shard_Error"),(0,n.kt)("p",null,"Sent when a shard on a cluster encounters and error. Sent when your code sucks, you know the drill."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,n.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,n.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"error"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/typedefs/sharderror"},"ShardError")),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Error Info.")))),(0,n.kt)("hr",null))}k.isMDXComponent=!0}}]);