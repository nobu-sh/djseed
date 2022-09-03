"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),s=(n(7294),n(3905));const a={title:"Cluster Stats"},o=void 0,l={unversionedId:"examples/clusterstats",id:"version-v13/examples/clusterstats",title:"Cluster Stats",description:"In this example, we will be building off of what was done in the Sharding Example.",source:"@site/versioned_docs/version-v13/examples/clusterstats.mdx",sourceDirName:"examples",slug:"/examples/clusterstats",permalink:"/djseed/docs/v13/examples/clusterstats",draft:!1,tags:[],version:"v13",frontMatter:{title:"Cluster Stats"},sidebar:"sidebar",previous:{title:"Broadcast Eval",permalink:"/djseed/docs/v13/examples/broadcasteval"},next:{title:"Client",permalink:"/djseed/docs/v13/classes/client"}},i={},c=[{value:"Stats Command",id:"stats-command",level:2},{value:"Wrapping Up",id:"wrapping-up",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this example, we will be building off of what was done in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/examples/sharding"},"Sharding Example"),"."),(0,s.kt)("h2",{id:"stats-command"},"Stats Command"),(0,s.kt)("p",null,"To keep it simple we are going to make a ",(0,s.kt)("em",{parentName:"p"},"chat")," command that responds with the bots stats."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/cluster.js"',title:'"src/cluster.js"'},"// Import Client And Intents.\nconst { Client, Intents } = require('djseed');\n\n// Construct New Bot.\nconst bot = new Client('replace-with-bot-token', {\n  intents: [\n    Intents.FLAGS.GUILDS,\n    Intents.FLAGS.GUILD_MESSAGES\n  ]\n});\n\n...\n\n// Add Listener For Message Create\nbot.on('messageCreate', async (msg) => {\n  // If Message Is !stats.\n  if (msg.content.toLowerCase() === '!stats') {\n    // Fetch Fresh Stats.\n    const stats = await bot.cluster.util.getStats();\n\n    // Map Clusters Into Embed Fields.\n    const mappedStats = stats.map((cluster) => {\n      let value = `\\`\\`\\``;\n      value += `Shards: ${cluster.shards.length}\\n`;\n      value += `Guilds: ${cluster.guilds}\\n`;\n      value += `Users: ${cluster.users}`;\n      value += `\\`\\`\\``;\n\n      return {\n        inline: true,\n        name: `Cluster ${cluster.id}`,\n        value: value\n      }\n    });\n\n    // Send Message.\n    msg.reply({ embeds: [{\n      title: \"Stats\",\n      fields: mappedStats\n    }] });\n  }\n});\n\n// Log Bot Into Gateway.\nbot.login();\n")),(0,s.kt)("h2",{id:"wrapping-up"},"Wrapping Up"),(0,s.kt)("p",null,"If you send ",(0,s.kt)("inlineCode",{parentName:"p"},"!stats")," in a channel the bot is in, it should respond\nwith a dynamic embed with imformation on your cluster(s)."))}u.isMDXComponent=!0}}]);