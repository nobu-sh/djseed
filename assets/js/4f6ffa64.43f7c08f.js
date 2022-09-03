"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={title:"Client"},o=void 0,i={unversionedId:"classes/client",id:"version-v13/classes/client",title:"Client",description:"Extends DJSClient",source:"@site/versioned_docs/version-v13/classes/client.mdx",sourceDirName:"classes",slug:"/classes/client",permalink:"/djseed/docs/v13/classes/client",draft:!1,tags:[],version:"v13",frontMatter:{title:"Client"},sidebar:"sidebar",previous:{title:"Cluster Stats",permalink:"/djseed/docs/v13/examples/clusterstats"},next:{title:"ClusterEventEmitter",permalink:"/djseed/docs/v13/classes/clustereventemitter"}},s={},p=[{value:"Extends DJSClient",id:"extends-djsclient",level:4},{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"_token <code>READONLY</code>",id:"_token-readonly",level:3},{value:"_options <code>READONLY</code>",id:"_options-readonly",level:3},{value:"cluster <code>READONLY</code>",id:"cluster-readonly",level:3},{value:"Methods",id:"methods",level:2},{value:"login <code>OVERRIDE</code>",id:"login-override",level:3},{value:"Returns",id:"returns",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"extends-djsclient"},"Extends ",(0,a.kt)("a",{parentName:"h4",href:"https://discord.js.org/#/docs/discord.js/stable/class/Client"},"DJSClient")),(0,a.kt)("p",null,"The main hub for interacting with the DJSeed."),(0,a.kt)("h2",{id:"constructor"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Client(token, options);\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"token"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Discord API Token.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"options"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"/docs/typedefs/clientoptions"},"ClientOptions")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Client Options. Current No Different From ",(0,a.kt)("a",{parentName:"td",href:"https://discord.js.org/#/docs/discord.js/stable/typedef/ClientOptions"},"DJSClientOptions"),".")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"_token-readonly"},"_token ",(0,a.kt)("inlineCode",{parentName:"h3"},"READONLY")),(0,a.kt)("p",null,"Client Discord API token."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_options-readonly"},"_options ",(0,a.kt)("inlineCode",{parentName:"h3"},"READONLY")),(0,a.kt)("p",null,"Client options object."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/typedefs/clientoptions"},"ClientOptions")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"cluster-readonly"},"cluster ",(0,a.kt)("inlineCode",{parentName:"h3"},"READONLY")),(0,a.kt)("p",null,"Client cluster partial."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Will only be defined if using ",(0,a.kt)("a",{parentName:"p",href:"/docs/classes/clusterutil"},"ClusterUtil"),"!")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/classes/clusterpartial"},"ClusterPartial")," | undefined"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"login-override"},"login ",(0,a.kt)("inlineCode",{parentName:"h3"},"OVERRIDE")),(0,a.kt)("p",null,"Method that overrides ",(0,a.kt)("a",{parentName:"p",href:"https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=login"},"DJSClient#login"),".\nA token does ",(0,a.kt)("strong",{parentName:"p"},"NOT")," need to be passed as a parameter, as it is passed in ",(0,a.kt)("a",{parentName:"p",href:"/docs/Classes/client#constructor"},"Client#contructor"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"login();\n")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise"),"< ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")," >"),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);