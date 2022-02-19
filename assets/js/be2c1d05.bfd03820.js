"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[921],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,f=p["".concat(i,".").concat(g)]||p[g]||d[g]||s;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6276:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),l=["components"],o={title:"Broadcast Eval"},i=void 0,c={unversionedId:"examples/broadcasteval",id:"examples/broadcasteval",title:"Broadcast Eval",description:"In this example we will review broadcast evaluation with and without references. This will be based off of what was done in the Sharding Example.",source:"@site/docs/examples/broadcasteval.mdx",sourceDirName:"examples",slug:"/examples/broadcasteval",permalink:"/djseed/docs/examples/broadcasteval",tags:[],version:"current",frontMatter:{title:"Broadcast Eval"},sidebar:"sidebar",previous:{title:"Sharding",permalink:"/djseed/docs/examples/sharding"},next:{title:"Cluster Stats",permalink:"/djseed/docs/examples/clusterstats"}},u=[{value:"No References",id:"no-references",children:[{value:"Wrapping Up",id:"wrapping-up",children:[],level:3}],level:2},{value:"No References",id:"no-references-1",children:[{value:"Wrapping Up",id:"wrapping-up-1",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this example we will review broadcast evaluation with and without references. This will be based off of what was done in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/examples/sharding"},"Sharding Example"),"."),(0,s.kt)("h2",{id:"no-references"},"No References"),(0,s.kt)("p",null,"Sometimes on a specfic cluster you will need data from the client on all other clusters.\nRather than approaching this with ",(0,s.kt)("a",{parentName:"p",href:"/docs/classes/ipc"},"IPC")," and having to write more code.\nYou can simply approach it with a broadcastEval to get needed data."),(0,s.kt)("p",null,"To display this we will be registering a command which returns\nthe total amount of guilds the bot is in."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/cluster.js"',title:'"src/cluster.js"'},"// Import Client And Intents.\nconst { Client, Intents } = require('djseed');\n\n// Construct New Bot.\nconst bot = new Client('replace-with-bot-token', { intents: [Intents.FLAGS.GUILDS] });\n\n...\n\n// Add Listener For Message Create\nbot.on('messageCreate', async (msg) => {\n  // If Message Is !guilds.\n  if (msg.content.toLowerCase() === '!guilds') {\n    // Send Broadcast Eval Request To Get Cache Size On All Clusters.\n    const guilds = await bot.cluster.util.broadcastEval((client) => {\n      return client.guilds.cache.size\n    });\n    \n    // Calculate Total\n    const total = guilds.map((cluster) => cluster.result).reduce((a, b) => a + b);\n    \n    // Reply To Message.\n    msg.reply(`${total}`);\n  }\n});\n\n// Log Bot Into Gateway.\nbot.login();\n")),(0,s.kt)("h3",{id:"wrapping-up"},"Wrapping Up"),(0,s.kt)("p",null,"Running ",(0,s.kt)("inlineCode",{parentName:"p"},"!guilds")," in the code example above will reply with the total number of guilds\nacross all clusters."),(0,s.kt)("h2",{id:"no-references-1"},"No References"),(0,s.kt)("p",null,"The above code is all fine and dandy until you need a reference from outside the callback.\nBy default references are not linked to your callback resulting in an error when trying\nto use a variable outside the callback."),(0,s.kt)("p",null,"So reusing the code example above lets say we want to add 10 guilds to each clusters guild\ncount."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u274c src/cluster.js"',title:'"\u274c','src/cluster.js"':!0},"// THROWS ERROR: \"guildsToAdd\" is not defined.\n...\n\n// Add Listener For Message Create\nbot.on('messageCreate', async (msg) => {\n  // If Message Is !guilds.\n  if (msg.content.toLowerCase() === '!guilds') {\n    // Guilds To Add To Each Cluster\n    const guildsToAdd = 10;\n\n    // Send Broadcast Eval Request To Get Cache Size On All Clusters.\n    const guilds = await bot.cluster.util.broadcastEval((client) => {\n      return client.guilds.cache.size + guildsToAdd\n    });\n\n    // Calculate Total\n    const total = guilds.map((cluster) => cluster.result).reduce((a, b) => a + b);\n    \n    // Reply To Message.\n    msg.reply(`${total}`);\n  }\n});\n\n...\n")),(0,s.kt)("p",null,"THIS WILL NOT WORK! This is the callback is converted to a string when being\nsent off to be evaulated. Meaning it loses all outside references."),(0,s.kt)("p",null,"The way around this if to pass ",(0,s.kt)("inlineCode",{parentName:"p"},"guildsToAdd")," as a primitave reference.\nWe can do this like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u2714\ufe0f src/cluster.js"',title:'"\u2714\ufe0f','src/cluster.js"':!0},"// Works\n...\n\n// Add Listener For Message Create\nbot.on('messageCreate', async (msg) => {\n  // If Message Is !guilds.\n  if (msg.content.toLowerCase() === '!guilds') {\n    // Guilds To Add To Each Cluster\n    const guildsToAdd = 10;\n\n    // Send Broadcast Eval Request To Get Cache Size On All Clusters.\n    const guilds = await bot.cluster.util.broadcastEval((client) => {\n      return client.guilds.cache.size + guildsToAdd\n    }, {\n      // Add `guildsToAdd` as a reference\n      guildsToAdd,\n    });\n\n    // Calculate Total\n    const total = guilds.map((cluster) => cluster.result).reduce((a, b) => a + b);\n    \n    // Reply To Message.\n    msg.reply(`${total}`);\n  }\n});\n\n...\n")),(0,s.kt)("h3",{id:"wrapping-up-1"},"Wrapping Up"),(0,s.kt)("p",null,"When needing to use variables outside of the callback scope you will need\nto pass a second parameter to ",(0,s.kt)("inlineCode",{parentName:"p"},"broadcastEval")," of type object which contains\nall outside references used inside the callback."))}p.isMDXComponent=!0}}]);