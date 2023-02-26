"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7377],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(r),d=n,f=h["".concat(l,".").concat(d)]||h[d]||c[d]||s;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4720:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const s={slug:"2020-04-22-a-state-of-bliss-april-2020",title:"A State of Bliss (April 2020)",authors:"eric",date:new Date("2020-04-22T00:00:00.000Z")},o=void 0,i={permalink:"/2020-04-22-a-state-of-bliss-april-2020",source:"@site/blog/2020/2020-04-22-a-state-of-bliss-april-2020.md",title:"A State of Bliss (April 2020)",description:"It\u2019s been a little while since we\u2019ve shared the inner workings of our team with you all, so we thought we\u2019d set this blog off right and bring back these posts \ud83d\ude09",date:"2020-04-22T00:00:00.000Z",formattedDate:"April 22, 2020",tags:[],readingTime:2.53,hasTruncateMarker:!1,authors:[{name:"Eric Park",title:"Backend Engineer @ BlissLabs",url:"https://github.com/ericswpark",imageURL:"https://avatars.githubusercontent.com/u/13326074?v=4",key:"eric"}],frontMatter:{slug:"2020-04-22-a-state-of-bliss-april-2020",title:"A State of Bliss (April 2020)",authors:"eric",date:"2020-04-22T00:00:00.000Z"},prevItem:{title:"Updates (June 2020)",permalink:"/2020-06-11-updates-june-2020"},nextItem:{title:"Updates (April 2020)",permalink:"/2020-04-22-updates-april-2020"}},l={authorsImageUrls:[void 0]},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"It\u2019s been a little while since we\u2019ve shared the inner workings of our team with you all, so we thought we\u2019d set this blog off right and bring back these posts \ud83d\ude09"),(0,n.kt)("p",null,"There\u2019s been a lot of changes under the hood, as well as a few new paint jobs added to Bliss since our last ASOB post. We\u2019ve updated the websites with some new content, adding a docs section to both sites, a ",(0,n.kt)("a",{parentName:"p",href:"https://www.blissroms.com/stats.html"},"BlissROMs stats page")," & ",(0,n.kt)("a",{parentName:"p",href:"https://www.blissos.org/osstats.html"},"Bliss OS stats page"),", and revamping the Bliss OS site with Bliss-Bot upgrades that allow it to help in more ways than just providing somewhat legible sentences. It can now answer a bunch of FAQ\u2019s, and even supply the common download links for not just Bliss OS, but many of the devices supported through BlissROMs as well."),(0,n.kt)("p",null,"Speaking of BlissROMs, we also added a maintainers section to both websites. Check the team tab to see their glorious avatars, and if you are a device developer and want to get your builds that Official status, we\u2019ve also moved to a new way of handling maintainers too. Please head over to ",(0,n.kt)("a",{parentName:"p",href:"https://blissroms.com/maintainers/"},"https://blissroms.com/maintainers/")," to check that out."),(0,n.kt)("p",null,"As for how Bliss has been doing as an organization, we\u2019ve restructured recently to better enable the various parts of Bliss to communicate a little better, and not have so many people spread out across the various branches of Bliss. Just like our current social distancing measures we\u2019re all getting used to in real life, the move for Bliss has been a hard move for some and an easy move for others, but we\u2019re definitely doing everything we can to make the experience a bit more blissful \ud83d\ude09"),(0,n.kt)("p",null,"Now, what about Bliss OS? Well, Bliss OS is still going strong. We\u2019ve pushed out a few updates for Bliss OS 11.x (Android 9) and have been working on getting proper 32-bit builds going again. On the Bliss OS 12.x (Android 10) front, we\u2019ve had a few more bugs pop up, but are well on our way to getting those fixed up and working better than ever. And some new news for everyone out there, we\u2019ve already started working on bringing Android 11 to PC\u2019s and will start posting more about that project as time goes. So far, we have things building as a generic .iso and booting in a vm. It\u2019s so exciting to dive in and get things like this working with our PC hardware. Due to the higher than usual learning curve when it comes to the x86/x86_64 side of things, we are always looking for contributors on the Bliss OS side of things. So find us on ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/blissx86"},"Telegram")," if you are interested in learning more about contributing towards Bliss OS."),(0,n.kt)("p",null,"So that wraps up this month\u2019s \u201cA State of Bliss\u201d post! If you haven\u2019t checked it out yet, please visit ","[Eric\u2019s \u201cUpdates\u201d post for more detailed information regarding changes to BlissRoms][updates-post]"," and have a great rest of the week!"),(0,n.kt)("p",null,"\u2013 Jon (@electrikjesus)"),(0,n.kt)("p",null,"[updates-post]",": {% post_url 2020/2020-04-22-updates-april-2020 %}"))}c.isMDXComponent=!0}}]);