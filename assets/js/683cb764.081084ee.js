"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[109],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8487:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={title:"Front End System Design - Applications",slug:"front-end-system-design/applications",sidebar_label:"Applications"},s=void 0,p={unversionedId:"front-end-system-design-applications",id:"front-end-system-design-applications",title:"Front End System Design - Applications",description:"This page is still work in progress.",source:"@site/../contents/front-end-system-design-applications.md",sourceDirName:".",slug:"/front-end-system-design/applications",permalink:"/front-end-system-design/applications",editUrl:"https://github.com/yangshun/front-end-interview-handbook/edit/master/contents/../contents/front-end-system-design-applications.md",tags:[],version:"current",lastUpdatedBy:"Yangshun",lastUpdatedAt:1632714557,formattedLastUpdatedAt:"9/27/2021",frontMatter:{title:"Front End System Design - Applications",slug:"front-end-system-design/applications",sidebar_label:"Applications"},sidebar:"root",previous:{title:"UI Components",permalink:"/front-end-system-design/ui-components"},next:{title:"Behavorial Round",permalink:"/behavioral"}},c=[{value:"Examples",id:"examples",children:[],level:2},{value:"Framework",id:"framework",children:[{value:"Requirements clarification",id:"requirements-clarification",children:[],level:3},{value:"Architecture",id:"architecture",children:[],level:3},{value:"Data model",id:"data-model",children:[],level:3},{value:"API design",id:"api-design",children:[],level:3},{value:"Deep dives",id:"deep-dives",children:[],level:3}],level:2},{value:"Helpful articles",id:"helpful-articles",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This page is still work in progress."))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Social network"),(0,i.kt)("li",{parentName:"ul"},"Video watching website"),(0,i.kt)("li",{parentName:"ul"},"Chat application"),(0,i.kt)("li",{parentName:"ul"},"Mail application")),(0,i.kt)("h2",{id:"framework"},"Framework"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Requirements clarifications/alignment"),(0,i.kt)("li",{parentName:"ol"},"Architecture"),(0,i.kt)("li",{parentName:"ol"},"Data model"),(0,i.kt)("li",{parentName:"ol"},"API design"),(0,i.kt)("li",{parentName:"ol"},"Deep dive",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"User experience (UX)"),(0,i.kt)("li",{parentName:"ul"},"Performance"),(0,i.kt)("li",{parentName:"ul"},"Accessibility (a11y)"),(0,i.kt)("li",{parentName:"ul"},"Internationalization (i18n)"),(0,i.kt)("li",{parentName:"ul"},"Multi-device support"),(0,i.kt)("li",{parentName:"ul"},"Security")))),(0,i.kt)("h3",{id:"requirements-clarification"},"Requirements clarification"),(0,i.kt)("p",null,"Every system design interview should start with clarifying requirements about the question, which is usually left vague intentionally. Some considerations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What devices should the system support? Desktop web, mobile web, etc"),(0,i.kt)("li",{parentName:"ul"},"What's the primary device that users will access the system on?"),(0,i.kt)("li",{parentName:"ul"},"Which browsers should we support?"),(0,i.kt)("li",{parentName:"ul"},"Do we need to support internationalization?"),(0,i.kt)("li",{parentName:"ul"},"Does the app need to work offline?")),(0,i.kt)("h3",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"Architecture for front end interviews are typically focused on the client-side architecture, and not on large scale distributed systems where databases, load balancers and servers are involved."),(0,i.kt)("p",null,"For applications, common architectures include Model-View-Controller, Model-View-ViewModel, Flux, N-tier (where data tier is on the client) etc."),(0,i.kt)("h3",{id:"data-model"},"Data model"),(0,i.kt)("p",null,"Client app state, which is a combination of server state (database) and true client state (non-persisted to the server)."),(0,i.kt)("p",null,"TBD."),(0,i.kt)("h3",{id:"api-design"},"API design"),(0,i.kt)("p",null,"API design for applications will refer to the HTTP/network API parameters and the shape of the responses."),(0,i.kt)("p",null,"TBD."),(0,i.kt)("h3",{id:"deep-dives"},"Deep dives"),(0,i.kt)("p",null,"With the architectural basics of the application covered, we can dive into specific areas which the application might need special attention to. Note that there almost definitely won't be enough time to cover every area, and not every area will be very relevant to the component at hand."),(0,i.kt)("p",null,"Showing knowledge about these areas and being able to dive deep into them are traits of senior developers."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User experience (UX)"),(0,i.kt)("li",{parentName:"ul"},"Performance"),(0,i.kt)("li",{parentName:"ul"},"Accessibility (a11y)"),(0,i.kt)("li",{parentName:"ul"},"Internationalization (i18n)"),(0,i.kt)("li",{parentName:"ul"},"Multi-device support"),(0,i.kt)("li",{parentName:"ul"},"Security")),(0,i.kt)("h2",{id:"helpful-articles"},"Helpful articles"),(0,i.kt)("p",null,"Many companies blog about their technical challenges in the front end domain and these are great content to learn more about designing front end systems."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/google-design/google-photos-45b714dfbed1"},"Building the Google Photos Web UI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3"},"Twitter Lite and High Performance React Progressive Web Apps at Scale")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/dev-channel/a-netflix-web-performance-case-study-c0bcde26a9d9"},"A Netflix Web Performance Case Study")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0"},"A Tinder Progressive Web App Performance Case Study")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154"},"A Pinterest Progressive Web App Performance Case Study")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/dev-channel/treebo-a-react-and-preact-progressive-web-app-performance-case-study-5e4f450d5299"},"A React And Preact Progressive Web App Performance Case Study: Treebo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://engineering.fb.com/2020/05/08/web/facebook-redesign/"},"Rebuilding our tech stack for the new Facebook.com"))))}u.isMDXComponent=!0}}]);