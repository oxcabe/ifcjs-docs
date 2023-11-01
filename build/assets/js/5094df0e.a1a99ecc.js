"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7621],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return a?r.createElement(f,i(i({ref:t},m),{},{components:a})):r.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3263:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:4},i="Tutorial paths",p={unversionedId:"components/tutorial-paths",id:"components/tutorial-paths",title:"Tutorial paths",description:"As you can see, we have tons of tutorials in this documentations, and we will keep adding more as new features come out. If you're not looking for anything specific, it can be a little difficult to know where to start. For that reason, here are some interesting itineraries to take your first steps in the library!",source:"@site/docs/components/tutorial-paths.md",sourceDirName:"components",slug:"/components/tutorial-paths",permalink:"/docs/components/tutorial-paths",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Clean components ABC",permalink:"/docs/components/clean-components-guide"},next:{title:"Get involved",permalink:"/docs/components/contributing"}},s={},l=[],m={toc:l},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tutorial-paths"},"Tutorial paths"),(0,n.kt)("p",null,"As you can see, we have tons of tutorials in this documentations, and we will keep adding more as new features come out. If you're not looking for anything specific, it can be a little difficult to know where to start. For that reason, here are some interesting itineraries to take your first steps in the library!"),(0,n.kt)("admonition",{title:"First steps in the library",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The best place to start is playing the core components of our library. These are the basic building blocks you will need in all the apps you build on top of this!"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd8 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/SimpleScene"},"Create your first 3D app")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd8 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/SimpleRaycaster"},"Interact with your scene")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd8 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/SimpleRaycaster"},"Create some clipping planes")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd8 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/ToolsComponent"},"Use some tools"))))),(0,n.kt)("admonition",{title:"Making great 3D apps",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Basics are great, but that's not enough to build professional 3D apps. Let's discover some tools that will bring our BIM software to the next level:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd9 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/OrthoPerspectiveCamera"},"Using a fancy camera")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd9 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/ScreenCuller"},"Building scalable 3D scenes"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd9 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/PostproductionRenderer"},"Setting up beatiful graphics"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd9 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/UIManager"},"Creating UI fast"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd9 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/MiniMap"},"Creating a minimap"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd9 ",(0,n.kt)("a",{parentName:"p",href:"../Tutorials/CubeMap.mdx"},"Setting up a nav cube"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd9 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/ShadowDropper"},"Casting shadows"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd9 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/EdgesClipper"},"Clipping edges"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd9 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/LengthMeasurement"},"Measuring distances"))))),(0,n.kt)("admonition",{title:"Loading and editing BIM data",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"We are here to make BIM apps, and the library has tons of tools to make it super easy! Our library is based on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/fragment"},"fragments"),", an open source geometric format that can load display big amounts of BIM data super efficiently. Let's learn how to build BIM apps with it!"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd5 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/FragmentManager"},"Discovering fragments"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd5 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/FragmentIfcLoader"},"Loading IFC files"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd5 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/FragmentHighlighter"},"Touching BIM models"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd5 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/FragmentExploder"},"Exploding models"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd5 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/FragmentCacher"},"Caching BIM data"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd5 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/FragmentPlans"},"Navigating floorplans"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd5 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/IfcPropertiesProcessor"},"Reading properties"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd5 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/FragmentTree"},"Building trees"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd5 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/FragmentHider"},"Filtering geometry"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udcd5 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorials/IfcPropertiesManager"},"Writing properties"))))),(0,n.kt)("p",null,"Keep in mind that this documentation assumes some basic level of web development and Three.js. If you are just starting or have never coded before in the web, don't worry! Get around our community, say hi, meet other aspiring BIM software developers and start your coding journey with us. \ud83d\ude80"))}c.isMDXComponent=!0}}]);