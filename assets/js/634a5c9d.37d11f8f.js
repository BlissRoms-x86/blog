"use strict";(self.webpackChunkblog_1=self.webpackChunkblog_1||[]).push([[2324],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(s,".").concat(b)]||p[b]||c[b]||a;return n?i.createElement(m,l(l({ref:t},d),{},{components:n})):i.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={slug:"bliss-os-linux-hybrid-preview",title:"[announcement] Bliss OS Linux Hybrid Preview (Bliss OS Go edition)",authors:["electrikjesus"],description:"Bliss OS Linux Hybrid Preview (Bliss OS Go edition)",img:null,date:new Date("2023-06-21T00:00:00.000Z"),comments:!0,tags:["linux","hybrid","android-linux","android","android-go","blissos","android-generic","bliss-x86"]},l="Bliss OS Linux Hybrid Preview (Bliss OS Go edition)",o={permalink:"/bliss-os-linux-hybrid-preview",source:"@site/blog/2023/bliss-os-linux-hybrid-preview.md",title:"[announcement] Bliss OS Linux Hybrid Preview (Bliss OS Go edition)",description:"Bliss OS Linux Hybrid Preview (Bliss OS Go edition)",date:"2023-06-21T00:00:00.000Z",formattedDate:"June 21, 2023",tags:[{label:"linux",permalink:"/tags/linux"},{label:"hybrid",permalink:"/tags/hybrid"},{label:"android-linux",permalink:"/tags/android-linux"},{label:"android",permalink:"/tags/android"},{label:"android-go",permalink:"/tags/android-go"},{label:"blissos",permalink:"/tags/blissos"},{label:"android-generic",permalink:"/tags/android-generic"},{label:"bliss-x86",permalink:"/tags/bliss-x-86"}],readingTime:1.035,hasTruncateMarker:!1,authors:[{name:"Jon West",title:"Founder / Developer @BlissCoLabs / Incorporator & CTO / Bliss OS / Android-Generic Project @BlissLabs",url:"https://github.com/electrikjesus",imageURL:"https://avatars.githubusercontent.com/u/8572619?v=4",key:"electrikjesus"}],frontMatter:{slug:"bliss-os-linux-hybrid-preview",title:"[announcement] Bliss OS Linux Hybrid Preview (Bliss OS Go edition)",authors:["electrikjesus"],description:"Bliss OS Linux Hybrid Preview (Bliss OS Go edition)",img:null,date:"2023-06-21T00:00:00.000Z",comments:!0,tags:["linux","hybrid","android-linux","android","android-go","blissos","android-generic","bliss-x86"]},prevItem:{title:"A State of Bliss : A Blissful Return - 2nd Quarter 2023",permalink:"/asob-q2-2023"},nextItem:{title:"[announcement] Bliss OS Go preview",permalink:"/announcement-bliss-os-go"}},s={authorsImageUrls:[void 0]},u=[{value:"Features:",id:"features",level:2},{value:"Download the preview:",id:"download-the-preview",level:2},{value:"Live Boot Info:",id:"live-boot-info",level:3},{value:"Step 1:",id:"step-1",level:3},{value:"Step 2:",id:"step-2",level:3},{value:"Step 3:",id:"step-3",level:3},{value:"Notes:",id:"notes",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This will be a new addition to the Bliss OS lineup, featuring a number of advancements to running Android on PC hardware. These builds bring the manageability of a full blown Linux distro, along with an Android side for usability and compatibility. It also features a QEMU based Bliss OS session to help with configuration along side Linux, and Bliss OS specific grub menu options to allow the Android side to boot on bare-metal, taking full advantage of the hardware. "),(0,r.kt)("h2",{id:"features"},"Features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Based on Xubuntu 22.04.x LTS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stripped of Snap and other Ubuntu apps/telemetry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Includes Ubuntu expanded hardware support drivers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"QEMU based Bliss OS session")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bliss OS grub menu options (for running on bare-metal hardware)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Includes basic update and management scripts for Android side")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lots more, but we are just getting started\u2026"))),(0,r.kt)("h2",{id:"download-the-preview"},"Download the preview:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mega.nz/file/rxgg2CIa#Xe54bBwyrrYZUnawkktKKxnJm9KqHSRPhrud7oXfqaU"},"https://mega.nz/file/rxgg2CIa#Xe54bBwyrrYZUnawkktKKxnJm9KqHSRPhrud7oXfqaU")," "),(0,r.kt)("h3",{id:"live-boot-info"},"Live Boot Info:"),(0,r.kt)("p",null,"User: Live"),(0,r.kt)("p",null,"Password: evolution"),(0,r.kt)("h3",{id:"step-1"},"Step 1:"),(0,r.kt)("p",null,"Live boot (boots to xfce4)"),(0,r.kt)("h3",{id:"step-2"},"Step 2:"),(0,r.kt)("p",null,"Run installer (last step shows pop-up to specify data.img size), Done."),(0,r.kt)("h3",{id:"step-3"},"Step 3:"),(0,r.kt)("p",null,"Reboot (hitting esc once when rebooting to show Grub menu, and select Bliss OS, or xubuntu)"),(0,r.kt)("h2",{id:"notes"},"Notes:"),(0,r.kt)("p",null,"Autologin is enabled, will launch last loaded session choice from Login screen"))}c.isMDXComponent=!0}}]);