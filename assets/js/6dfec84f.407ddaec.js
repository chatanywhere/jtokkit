"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Introduction",sidebar_position:1,slug:"/getting-started/"},i=void 0,s={unversionedId:"getting-started/intro",id:"getting-started/intro",title:"Introduction",description:"JTokkit is a fast and efficient tokenizer designed for use in natural language processing tasks using the OpenAI models. It provides an easy-to-use interface for tokenizing input text, for example for counting required tokens in preparation of requests to the gpt-3.5-turbo model. This library resulted out of the need to have similar capacities in the JVM ecosystem as the library tiktoken provides for Python.",source:"@site/docs/getting-started/intro.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/docs/getting-started/",draft:!1,editUrl:"https://github.com/knuddelsgmbh/jtokkit/docs/docs/getting-started/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1,slug:"/getting-started/"},sidebar:"gettingStarted",next:{title:"Usage",permalink:"/docs/getting-started/usage"}},l={},p=[{value:"Features",id:"features",level:2},{value:"Performance",id:"performance",level:2},{value:"Installation",id:"installation",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"JTokkit is a fast and efficient tokenizer designed for use in natural language processing tasks using the OpenAI models. It provides an easy-to-use interface for tokenizing input text, for example for counting required tokens in preparation of requests to the ",(0,o.kt)("inlineCode",{parentName:"p"},"gpt-3.5-turbo")," model. This library resulted out of the need to have similar capacities in the JVM ecosystem as the library ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openai/tiktoken"},"tiktoken")," provides for Python."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"\u2705 Implements encoding and decoding via ",(0,o.kt)("inlineCode",{parentName:"p"},"r50k_base"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"p50k_base"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"p50k_edit")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cl100k_base")),(0,o.kt)("p",null,"\u2705 Easy-to-use API"),(0,o.kt)("p",null,"\u2705 Easy extensibility for custom encoding algorithms"),(0,o.kt)("p",null,"\u2705 ",(0,o.kt)("strong",{parentName:"p"},"Zero")," Dependencies"),(0,o.kt)("p",null,"\u2705 Supports Java 8 and above"),(0,o.kt)("p",null,"\u2705 Fast and efficient performance"),(0,o.kt)("h2",{id:"performance"},"Performance"),(0,o.kt)("p",null,"JTokkit reaches 2-3 times the throughput of a comparable tokenizer. Take a look in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/knuddelsgmbh/jtokkit/tree/main/benchmark"},"benchmarks")," for more details."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You can install JTokkit by adding the following dependency to your Maven project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.knuddels</groupId>\n    <artifactId>jtokkit</artifactId>\n    <version>0.6.1</version>\n</dependency>\n")),(0,o.kt)("p",null,"Or alternatively using Gradle:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'com.knuddels:jtokkit:0.6.1'\n}\n")))}u.isMDXComponent=!0}}]);