"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[527],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(o),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},484:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const r={},i=void 0,l={unversionedId:"Tutorials/ToolsComponent",id:"Tutorials/ToolsComponent",title:"ToolsComponent",description:"\ud83c\udf71 Keeping things tidy",source:"@site/docs/Tutorials/ToolsComponent.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/ToolsComponent",permalink:"/docs/Tutorials/ToolsComponent",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SimpleScene",permalink:"/docs/Tutorials/SimpleScene"},next:{title:"UIManager",permalink:"/docs/Tutorials/UIManager"}},s={},p=[{value:"\ud83c\udf71 Keeping things tidy",id:"-keeping-things-tidy",level:3},{value:"\u2728 Components anywhere",id:"-components-anywhere",level:3},{value:"\u26c5 Tools from the cloud",id:"-tools-from-the-cloud",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"-keeping-things-tidy"},"\ud83c\udf71 Keeping things tidy"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"BIM applications are complex and can have a lot of different functionalities. We distinguish between 2 types of\nfunctionalities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Components: self-contained pieces of logic that can be used to create tools."),(0,a.kt)("li",{parentName:"ul"},"Tools: Features for the end user. They are unique and accessible from anywhere.\nFor example: the EdgesClipper of this library is a ",(0,a.kt)("inlineCode",{parentName:"li"},"tool"),", and it can create, edit and destroy clipping planes. Each\nclipping plane is a ",(0,a.kt)("inlineCode",{parentName:"li"},"component"),".",(0,a.kt)("admonition",{parentName:"li",title:"Why unique? \ud83e\udd14",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Tools are unique because you generally want one object to handle a specific feature. That way, we foster the single\nresponsibility principle. That means that each tool has an UUID (Universal Unique ID).")),"Luckily, there's an easy way to handle this: the ",(0,a.kt)("a",{parentName:"li",href:"../api/classes/components.ToolComponent"},"Tools Component"),"!\nThis component has two purposes:"),(0,a.kt)("li",{parentName:"ul"},"Making your components available anywhere in your application."),(0,a.kt)("li",{parentName:"ul"},"Getting your tools from ",(0,a.kt)("a",{parentName:"li",href:"/docs/that-open-platform/getting-started"},"That Open Platform"),".")),(0,a.kt)("h3",{id:"-components-anywhere"},"\u2728 Components anywhere"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"First, we will create a very simple tool: a ",(0,a.kt)("a",{parentName:"p",href:"../api/classes/components.SimpleGrid"},"simple grid component"),". It's not\nvery exciting, but we don't want to distract you with the fanciness of more complex tools! This same workflow will work for\nany other component that you use.\nFirst, let's instantiate it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const grid = new OBC.SimpleGrid(components);\n")),(0,a.kt)("p",null,"Now, it is likely that your application will have many menus. What if you need access to this component in many\nplaces? For example, you may have a menu that controls the color and size of the grid, and other menus that goes\ninto floor plan navigation mode and need to hide the grid.\nNow, getting the SimpleGrid component back is as easy as using the ",(0,a.kt)("inlineCode",{parentName:"p"},"get()")," method and passing the id of the\ncomponent as an argument. That's it! \ud83d\udc47"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const simpleGrid = await components.tools.get(OBC.SimpleGrid);\n")),(0,a.kt)("admonition",{title:"Psst... it get's even easier! \ud83e\udde0",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You don't even need to instantiate the tool yourself. You can simply call ",(0,a.kt)("inlineCode",{parentName:"p"},"components.tools.get")," and if the component\nwas not instantiated, the library will instantiate it for you! keep in mind that tools are designed to be singletons, so\nyou should never create more than one instance of a tool.")),(0,a.kt)("p",null,"The components library will also take care of releasing the memory of all the tools you create as soon as you call\n",(0,a.kt)("inlineCode",{parentName:"p"},"components.dispose()"),"."),(0,a.kt)("h3",{id:"-tools-from-the-cloud"},"\u26c5 Tools from the cloud"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Maybe you have uploaded some tools to That Open Platform and want to easily share them with someone. Or maybe you\nhave got some nice tools in That Open Store and want to use them in your app. Either way, using these components\nis a piece of cake with ToolComponent!"),(0,a.kt)("admonition",{title:"What's That Open Platform?",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"That Open Platform is a place where people can share and make money from their tools. You can learn more about\nhow to get started ",(0,a.kt)("a",{parentName:"p",href:"/docs/that-open-platform/getting-started"},"right here"),".")),(0,a.kt)("p",null,"For example, let's fetch an example tool from the platform and add it to a simple toolbar. This is a\nsimple tool that just logs a message to the console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'components.tools.init(OBC);\ncomponents.tools.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiNjUwNmYyZjk0NWM4YmM2YTk0Mzg0NjM4IiwiYSI6IjY1MDhhN2VjZGZjYTQ5Mjc2MmE0YjFlZiJ9.Rr7bq9qJdm4pRUnXF0pUt9QhrtJLOS6koVyZMcf5XoU";\nconst toolID = "50301542-4c0b-42ca-b2b4-066d45ca6735";\nconst tool = await components.tools.getPlatformComponent(toolID);\nconst button = tool.uiElement.get("Measure");\nbutton.materialIcon = "straighten";\nconst toolbar = new OBC.Toolbar(components);\ncomponents.ui.addToolbar(toolbar);\ntoolbar.addChild(button);\n')),(0,a.kt)("p",null,"Fantastic work! \ud83c\udf89\ud83c\udf89\ud83c\udf89 Now you know how to keep your ",(0,a.kt)("inlineCode",{parentName:"p"},"Tools")," tidy and how to get them from the cloud. Another\nstep forward in your journey to build your own BIM software. \ud83e\udd73 Don't forget to check out That Open Platform if\nyou haven't already!"),(0,a.kt)("iframe",{src:"https://ifcjs.github.io/components/core/ToolsComponent/index.html"}))}u.isMDXComponent=!0}}]);