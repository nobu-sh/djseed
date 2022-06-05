"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[880],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),s=c(n),k=a,N=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return n?r.createElement(N,i(i({ref:t},o),{},{components:n})):r.createElement(N,i({ref:t},o))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2659:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return o},default:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],d={title:"IPC"},p=void 0,c={unversionedId:"classes/ipc",id:"classes/ipc",title:"IPC",description:"The main hub for recieving messages and interacting with other clusters.",source:"@site/docs/classes/ipc.mdx",sourceDirName:"classes",slug:"/classes/ipc",permalink:"/djseed/docs/classes/ipc",tags:[],version:"current",frontMatter:{title:"IPC"},sidebar:"sidebar",previous:{title:"ClusterUtil",permalink:"/djseed/docs/classes/clusterutil"},next:{title:"Util",permalink:"/djseed/docs/classes/util"}},o=[{value:"Constructor",id:"constructor",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"send",id:"send",children:[{value:"Returns",id:"returns",children:[],level:4}],level:3},{value:"sendTo",id:"sendto",children:[{value:"Returns",id:"returns-1",children:[],level:4}],level:3},{value:"addListener",id:"addlistener",children:[{value:"Returns",id:"returns-2",children:[],level:4}],level:3},{value:"removeListener",id:"removelistener",children:[{value:"Returns",id:"returns-3",children:[],level:4}],level:3},{value:"removeListeners",id:"removelisteners",children:[{value:"Returns",id:"returns-4",children:[],level:4}],level:3},{value:"removeAllListeners",id:"removealllisteners",children:[{value:"Returns",id:"returns-5",children:[],level:4}],level:3},{value:"envokeEvent",id:"envokeevent",children:[{value:"Returns",id:"returns-6",children:[],level:4}],level:3},{value:"listeners",id:"listeners",children:[{value:"Returns",id:"returns-7",children:[],level:4}],level:3},{value:"listenerCount",id:"listenercount",children:[{value:"Returns",id:"returns-8",children:[],level:4}],level:3},{value:"getMaxListeners",id:"getmaxlisteners",children:[{value:"Returns",id:"returns-9",children:[],level:4}],level:3},{value:"setMaxListeners",id:"setmaxlisteners",children:[{value:"Returns",id:"returns-10",children:[],level:4}],level:3},{value:"on",id:"on",children:[{value:"Returns",id:"returns-11",children:[],level:4}],level:3},{value:"once",id:"once",children:[{value:"Returns",id:"returns-12",children:[],level:4}],level:3},{value:"off",id:"off",children:[{value:"Returns",id:"returns-13",children:[],level:4}],level:3},{value:"emit",id:"emit",children:[{value:"Returns",id:"returns-14",children:[],level:4}],level:3}],level:2}],m={toc:o};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The main hub for recieving messages and interacting with other clusters."),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Client(cid, max);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"cid"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Cluster ID.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"max"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number?")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"50")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Max number of listeners.")))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"send"},"send"),(0,l.kt)("p",null,"Sends an IPC event to all clusters. This will trigger all\nlisteners for given event on all clusters with given arguments."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Any arguments given will become dereferenced so ensure\nany references are deep cloned."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"send(event, ...args);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"event"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Event name to envoke listeners from.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"args"),(0,l.kt)("td",{parentName:"tr",align:"center"},"any[]?"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Arguments to pass through CallableFunction.")))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sendto"},"sendTo"),(0,l.kt)("p",null,"Sends an IPC event to a certain cluster. This will trigger all\nlisteners for given event on given cluster with given arguments."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Any arguments given will become dereferenced so ensure\nany references are deep cloned."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"send(cluster, event, ...args);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"cluster"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Id of cluster to send to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"event"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Event name to envoke listeners from.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"args"),(0,l.kt)("td",{parentName:"tr",align:"center"},"any[]?"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Arguments to pass through CallableFunction.")))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"addlistener"},"addListener"),(0,l.kt)("p",null,"Add a new listener to be synchronously called on an event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"addListener(event, listener);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"event"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Event name to add listener to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"listener"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"},"CallableFunction")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Function to execute.")))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"removelistener"},"removeListener"),(0,l.kt)("p",null,"Removes a previously registered listener from an event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"removeListener(event, listener);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"event"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Event name to remove listener from.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"listener"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"},"CallableFunction")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Function that was given.")))),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"removelisteners"},"removeListeners"),(0,l.kt)("p",null,"Remove all previously registered listeners from an event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"removeListeners(event);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"event"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Event name to remove listeners from.")))),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"removealllisteners"},"removeAllListeners"),(0,l.kt)("p",null,"Removes all previously registered listeners from all event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"removeAllListeners();\n")),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"envokeevent"},"envokeEvent"),(0,l.kt)("p",null,"Envokes all listeners to be synchronously called on an event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"envokeEvent(event, ...args);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"event"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Event name to envoke listeners from.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"args"),(0,l.kt)("td",{parentName:"tr",align:"center"},"any[]?"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Arguments to pass through CallableFunction.")))),(0,l.kt)("h4",{id:"returns-6"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"listeners"},"listeners"),(0,l.kt)("p",null,"Returns an array of all listeners on an event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"listeners(event);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"event"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Event name to get listeners from.")))),(0,l.kt)("h4",{id:"returns-7"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"},"CallableFunction[]")," | ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined"},"undefined")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"listenercount"},"listenerCount"),(0,l.kt)("p",null,"Returns number of listeners on an event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"listenerCount(event);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"event"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Event name to get amount of listeners from.")))),(0,l.kt)("h4",{id:"returns-8"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getmaxlisteners"},"getMaxListeners"),(0,l.kt)("p",null,"Returns the max amount of listeners before mem leak warning occurs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getMaxListeners();\n")),(0,l.kt)("h4",{id:"returns-9"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"setmaxlisteners"},"setMaxListeners"),(0,l.kt)("p",null,"Returns the max amount of listeners before mem leak warning occurs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"setMaxListeners(amount);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"amount"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"New amount of listeners before mem leak warning.")))),(0,l.kt)("h4",{id:"returns-10"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"on"},"on"),(0,l.kt)("p",null,"Add a new listener to be synchronously called on an event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"on(event, listener);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"event"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Event name to add listener to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"listener"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"},"CallableFunction")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Function to execute.")))),(0,l.kt)("h4",{id:"returns-11"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"once"},"once"),(0,l.kt)("p",null,"Similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"on")," however after being called ",(0,l.kt)("em",{parentName:"p"},"once")," it cannot be called again."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"once(event, listener);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"event"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Event name to add listener to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"listener"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"},"CallableFunction")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Function to execute.")))),(0,l.kt)("h4",{id:"returns-12"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"off"},"off"),(0,l.kt)("p",null,"Removes a previously registered listener from an event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"removeListener(event, listener);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"event"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Event name to remove listener from.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"listener"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"},"CallableFunction")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Function that was given.")))),(0,l.kt)("h4",{id:"returns-13"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"emit"},"emit"),(0,l.kt)("p",null,"Envokes all listeners to be synchronously called on an event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"envokeEvent(event, ...args);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"event"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Event name to envoke listeners from.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"args"),(0,l.kt)("td",{parentName:"tr",align:"center"},"any[]?"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Arguments to pass through CallableFunction.")))),(0,l.kt)("h4",{id:"returns-14"},"Returns"),(0,l.kt)("p",null,"void"),(0,l.kt)("hr",null))}s.isMDXComponent=!0}}]);