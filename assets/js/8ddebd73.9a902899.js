"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[588],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8683:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Client"},s=void 0,c={unversionedId:"classes/client",id:"classes/client",title:"Client",description:"Extends DJSClient",source:"@site/docs/classes/client.mdx",sourceDirName:"classes",slug:"/classes/client",permalink:"/djseed/docs/classes/client",tags:[],version:"current",frontMatter:{title:"Client"},sidebar:"sidebar",previous:{title:"Cluster Stats",permalink:"/djseed/docs/examples/clusterstats"},next:{title:"ClusterEventEmitter",permalink:"/djseed/docs/classes/clustereventemitter"}},d=[{value:"Extends DJSClient",id:"extends-djsclient",children:[],level:4},{value:"Constructor",id:"constructor",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"_token <code>READONLY</code>",id:"_token-readonly",children:[],level:3},{value:"_options <code>READONLY</code>",id:"_options-readonly",children:[],level:3},{value:"cluster <code>READONLY</code>",id:"cluster-readonly",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"login <code>OVERRIDE</code>",id:"login-override",children:[{value:"Returns",id:"returns",children:[],level:4}],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"extends-djsclient"},"Extends ",(0,l.kt)("a",{parentName:"h4",href:"https://discord.js.org/#/docs/discord.js/stable/class/Client"},"DJSClient")),(0,l.kt)("p",null,"The main hub for interacting with the DJSeed."),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Client(token, options);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"token"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Discord API Token.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"/docs/typedefs/clientoptions"},"ClientOptions")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Client Options. Current No Different From ",(0,l.kt)("a",{parentName:"td",href:"https://discord.js.org/#/docs/discord.js/stable/typedef/ClientOptions"},"DJSClientOptions"),".")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"_token-readonly"},"_token ",(0,l.kt)("inlineCode",{parentName:"h3"},"READONLY")),(0,l.kt)("p",null,"Client Discord API token."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"_options-readonly"},"_options ",(0,l.kt)("inlineCode",{parentName:"h3"},"READONLY")),(0,l.kt)("p",null,"Client options object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/typedefs/clientoptions"},"ClientOptions")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cluster-readonly"},"cluster ",(0,l.kt)("inlineCode",{parentName:"h3"},"READONLY")),(0,l.kt)("p",null,"Client cluster partial."),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Will only be defined if using ",(0,l.kt)("a",{parentName:"p",href:"/docs/classes/clusterutil"},"ClusterUtil"),"!"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/classes/clusterpartial"},"ClusterPartial")," | undefined"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"login-override"},"login ",(0,l.kt)("inlineCode",{parentName:"h3"},"OVERRIDE")),(0,l.kt)("p",null,"Method that overrides ",(0,l.kt)("a",{parentName:"p",href:"https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=login"},"DJSClient#login"),".\nA token does ",(0,l.kt)("strong",{parentName:"p"},"NOT")," need to be passed as a parameter, as it is passed in ",(0,l.kt)("a",{parentName:"p",href:"/docs/Classes/client#constructor"},"Client#contructor"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"login();\n")),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise"),"< ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")," >"),(0,l.kt)("hr",null))}u.isMDXComponent=!0}}]);