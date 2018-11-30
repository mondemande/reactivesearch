webpackJsonp([5],{150:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=a(0),i=r(o),n=a(165),s=r(n),l=a(32),p=r(l),c=a(154),u=r(c);t.default=function(){return i.default.createElement(p.default,{config:s.default,theme:u.default})}},154:function(e,t,a){"use strict";t.__esModule=!0,t.default={fontFamily:"Open Sans,sans-serif",fontWeight:"normal",primary:"#7107D8",primaryDark:"#401A8E",secondary:"#FF2A6F",textLight:"#fefefe"}},155:function(e,t,a){"use strict";t.__esModule=!0,t.default={name:"web",githubCount:"2432",gettingStart:"https://opensource.appbase.io/reactive-manual/getting-started/reactivesearch.html",producthunt:"https://www.producthunt.com/posts/reactive-search-2-0",urls:{github:"https://github.com/appbaseio/reactivesearch/tree/dev/packages/web",support:"https://appbase.io/pricing#support"},header:{logo:{src:"../../images/RSlogo.svg",title:{light:"Reactive",dark:"Search"},href:"/reactivesearch"},links:[{description:"tools",href:"/tools"},{description:"quick start",href:"/quickstart"}]},footer:[{title:"Reactive <x>",list:[{title:"React",href:"https://opensource.appbase.io/reactivesearch",openWithTab:!0},{title:"React Native",href:"https://opensource.appbase.io/reactivesearch/native",openWithTab:!0},{title:"Vue.JS",href:"https://opensource.appbase.io/reactivesearch/vue",openWithTab:!0},{title:"ReactiveMaps",href:"https://opensource.appbase.io/reactivemaps",openWithTab:!0}]},{title:"Documentation",list:[{title:"Search Preview",href:"https://opensource.appbase.io/reactive-manual/getting-started/reactivesearch.html",openWithTab:!0},{title:"Base Components",href:"https://opensource.appbase.io/reactive-manual/base-components/textfield.html",openWithTab:!0},{title:"Map Components",href:"https://opensource.appbase.io/reactive-manual/map-components/geodistanceslider.html",openWithTab:!0},{title:"Search Components",href:"https://opensource.appbase.io/reactive-manual/search-components/datasearch.html",openWithTab:!0},{title:"Result Components",href:"https://opensource.appbase.io/reactive-manual/result-components/resultlist.html",openWithTab:!0}]},{title:"Community",list:[{title:"GitHub",href:"https://github.com/appbaseio/reactivesearch/",openWithTab:!0},{title:"Gitter",href:"https://gitter.im/appbaseio/reactivesearch",openWithTab:!0},{title:"Stackoverflow",href:"https://stackoverflow.com/questions/tagged/reactivesearch",openWithTab:!0},{title:"Twitter",href:"https://twitter.com/appbaseio",openWithTab:!0}]},{title:"More",list:[{title:"Medium Publication",href:"https://medium.appbase.io/",openWithTab:!0},{title:"Appbase.io Docs",href:"http://docs.appbase.io/",openWithTab:!0},{title:"Support Email",href:"mailto:support@appbase.io",openWithTab:!0}]}]}},165:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i=a(0),n=r(i),s=a(154),l=r(s),p=a(155),c=r(p),u=l.default.primary,h=l.default.primaryDark;t.default=o({},c.default,{title:"Get Started with Reactive Search",description:n.default.createElement(n.default.Fragment,null,"Use our step-by-step guide to learn all about Reactive Search, or check out our"," ",n.default.createElement("a",{rel:"noopener noreferrer",href:"https://opensource.appbase.io/reactive-manual/getting-started/reactivesearch.html",target:"_blank"},"docs"),"."),installationSteps:[{title:"Install ReactiveSearch",descriptions:["ReactiveSearch is a set of React UI components for building data-driven UIs with ElasticSearch."],codes:["npm install @appbaseio/reactivesearch"]},{title:"Connect to your ES index",descriptions:["ReactiveSearch components can connect to an Elasticsearch index hosted anywhere.",n.default.createElement(n.default.Fragment,null,"Create a free app (aka index) with"," ",n.default.createElement("a",{rel:"noopener noreferrer",href:"https://appbase.io",target:"_blank"},"appbase.io"),".")],links:[{title:"READ MORE",href:"https://opensource.appbase.io/reactive-manual/getting-started/reactivebase.html"}]},{title:"Create or Import dataset",descriptions:["Use Dejavu, an open-source databrowser from appbase.io to create, view, edit and import dataset into your Elasticsearch index."],links:[{title:"Dejavu",href:"https://opensource.appbase.io/dejavu"},{title:"Read more",href:"https://opensource.appbase.io/reactive-manual/getting-started/data.html#importing-custom-data"}]},{title:"UI Components",descriptions:[n.default.createElement(n.default.Fragment,null,"Add UI components for"," ",n.default.createElement("a",{rel:"noopener noreferrer",href:"https://opensource.appbase.io/reactive-manual/search-components/datasearch.html",target:"_blank"},"Search"),","," ",n.default.createElement("a",{rel:"noopener noreferrer",href:"https://opensource.appbase.io/reactive-manual/list-components/singlelist.html",target:"_blank"},"Lists"),","," ",n.default.createElement("a",{rel:"noopener noreferrer",href:"https://opensource.appbase.io/reactive-manual/range-components/singlerange.html",target:"_blank"},"Ranges"),", and"," ",n.default.createElement("a",{rel:"noopener noreferrer",href:"https://opensource.appbase.io/reactive-manual/result-components/resultlist.html",target:"_blank"},"Results"),"."),n.default.createElement(n.default.Fragment,null,"Or add in your own"," ",n.default.createElement("a",{rel:"noopener noreferrer",href:"https://opensource.appbase.io/reactive-manual/advanced/reactivecomponent.html",target:"_blank"},"UI components"),".")],links:[{title:"COMPONENTS OVERVIEW",href:"https://opensource.appbase.io/reactive-manual/getting-started/componentsindex.html"}]},{title:"Tutorials",descriptions:["Get a leg up by checking out these tutorials.",n.default.createElement(n.default.Fragment,null,n.default.createElement("li",null,n.default.createElement("a",{rel:"noopener noreferrer",href:"https://codeburst.io/how-to-build-an-e-commerce-search-ui-with-react-and-elasticsearch-a581c823b2c3",target:"_blank"},"Building e-commerce search")),n.default.createElement("li",null,n.default.createElement("a",{rel:"noopener noreferrer",href:"https://medium.appbase.io/how-to-build-a-movie-search-app-with-react-and-elasticsearch-2470f202291c",target:"_blank"},"Building Movie Search")),n.default.createElement("li",null,n.default.createElement("a",{rel:"noopener noreferrer",href:"https://medium.appbase.io/how-to-build-a-github-search-ui-in-60-minutes-295109211c70",target:"_blank"},"Building a Github Explorer")))],links:[{title:"Read more tutorials",href:"https://medium.appbase.io/tagged/appbase"}]},{title:"ReactiveSearch for <X>",descriptions:["ReactiveSearch is also available for:",n.default.createElement(n.default.Fragment,null,n.default.createElement("li",null,n.default.createElement("a",{rel:"noopener noreferrer",href:"https://opensource.appbase.io/reactivesearch/native",target:"_blank"},"React Native")),n.default.createElement("li",null,n.default.createElement("a",{rel:"noopener noreferrer",href:"https://opensource.appbase.io/reactivesearch/vue",target:"_blank"},"Vue.JS")),n.default.createElement("li",null,n.default.createElement("a",{rel:"noopener noreferrer",href:"https://opensource.appbase.io/reactivemaps",target:"_blank"},"Maps")))]}],banner:[{backgroundColor:u,title:"Build a live app in 5 easy steps",description:"Go from scratch to creating a data-driven search app with our beginner friendly quick start guide.",button:{title:"Get Started",href:"#"},link:{title:"Docs",href:"https://opensource.appbase.io/reactive-manual"}},{backgroundColor:h,title:"Get dedicated support",description:"We offer production support for ReactiveMaps. Work with us to bring your dream project to life.",button:{title:"SUPPORT PLANS",href:"https://appbase.io/support"},link:{title:"Get in touch",href:"https://appbase.io/contact"}}]})}});