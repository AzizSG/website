"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,g=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:6},o=void 0,s={unversionedId:"Transactions",id:"Transactions",title:"Transactions",description:"Transactions Interface",source:"@site/docs/Transactions.md",sourceDirName:".",slug:"/Transactions",permalink:"/website/docs/Transactions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Transactions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Customers",permalink:"/website/docs/Customers"},next:{title:"Reported Problems",permalink:"/website/docs/Reported Problems"}},c={},l=[{value:"ID",id:"id",level:2},{value:"Date and Time",id:"date-and-time",level:2},{value:"Customer",id:"customer",level:2},{value:"Mode",id:"mode",level:2},{value:"Category",id:"category",level:2},{value:"Credit",id:"credit",level:2},{value:"Debit",id:"debit",level:2},{value:"Details",id:"details",level:2},{value:"Transaction",id:"transaction",level:2},{value:"Customer Info",id:"customer-info",level:2}],u={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"../img/Transactions/transactions1.png"}),(0,a.kt)("br",null),"Transactions Interface",(0,a.kt)("h2",{id:"id"},"ID"),(0,a.kt)("img",{src:"../img/Transactions/transactions3.png"}),(0,a.kt)("br",null),"Here you can see the ID of the customer",(0,a.kt)("h2",{id:"date-and-time"},"Date and Time"),(0,a.kt)("img",{src:"../img/Transactions/transactions4.png"}),(0,a.kt)("br",null),"This column shows the date and time when the transaction was made",(0,a.kt)("h2",{id:"customer"},"Customer"),(0,a.kt)("img",{src:"../img/Transactions/transactions5.png"}),(0,a.kt)("br",null),"This column shows the name of the customer",(0,a.kt)("h2",{id:"mode"},"Mode"),(0,a.kt)("img",{src:"../img/Transactions/transactions7.png"}),(0,a.kt)("br",null),"This column shows the payment method of the transaction (Cash, Bonus, Customer debit account)",(0,a.kt)("h2",{id:"category"},"Category"),(0,a.kt)("img",{src:"../img/Transactions/ransactions8.png"}),(0,a.kt)("br",null),"This column shows the category of the transaction (Wallet recharge, Ride fare, Bonus recharge)",(0,a.kt)("h2",{id:"credit"},"Credit"),(0,a.kt)("img",{src:"../img/Transactions/transactions9.png"}),(0,a.kt)("br",null),"The money that is in the customer wallet",(0,a.kt)("h2",{id:"debit"},"Debit"),(0,a.kt)("img",{src:"../img/Transactions/transactions10.png"}),(0,a.kt)("br",null),"The money that the customer spends (can also be minus if the customer had 0 credits and the ride is still active)",(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("img",{src:"../img/Transactions/transactions6.png"}),(0,a.kt)("br",null),"For more details click on this icon",(0,a.kt)("h2",{id:"transaction"},"Transaction"),(0,a.kt)("img",{src:"../img/Transactions/transactions11.png"}),(0,a.kt)("br",null),"When you click on details icon this page will appear it gives you more information about the transaction and the ride",(0,a.kt)("h2",{id:"customer-info"},"Customer Info"),(0,a.kt)("img",{src:"../img/Transactions/transactions12.png"}),'The other page is "Customer Info" it will provide you more details about the customer')}d.isMDXComponent=!0}}]);