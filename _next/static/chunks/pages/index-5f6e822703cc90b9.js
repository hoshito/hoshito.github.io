(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(3678)}])},1210:function(e,t){"use strict";function o(e,t,o,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;o(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,a=o(7273).Z,l=r(o(7294)),u=o(6273),c=o(2725),i=o(3462),f=o(1018),s=o(7190),d=o(1210),p=o(8684),v={};function h(e,t,o,n){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,o,n)).catch(function(e){});var r=n&&void 0!==n.locale?n.locale:e&&e.locale;v[t+"%"+o+(r?"%"+r:"")]=!0}}var y=l.default.forwardRef(function(e,t){var o,r,y=e.href,x=e.as,b=e.children,_=e.prefetch,g=e.passHref,m=e.replace,C=e.shallow,j=e.scroll,M=e.locale,w=e.onClick,L=e.onMouseEnter,E=e.onTouchStart,O=e.legacyBehavior,R=void 0===O?!0!==Boolean(!1):O,k=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=b,R&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));var P=!1!==_,T=l.default.useContext(i.RouterContext),N=l.default.useContext(f.AppRouterContext);N&&(T=N);var S=l.default.useMemo(function(){var e=n(u.resolveHref(T,y,!0),2),t=e[0],o=e[1];return{href:t,as:x?u.resolveHref(T,x):o||t}},[T,y,x]),I=S.href,U=S.as,B=l.default.useRef(I),Z=l.default.useRef(U);R&&(r=l.default.Children.only(o));var A=R?r&&"object"==typeof r&&r.ref:t,D=n(s.useIntersection({rootMargin:"200px"}),3),H=D[0],K=D[1],G=D[2],X=l.default.useCallback(function(e){(Z.current!==U||B.current!==I)&&(G(),Z.current=U,B.current=I),H(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[U,A,I,G,H]);l.default.useEffect(function(){var e=K&&P&&u.isLocalURL(I),t=void 0!==M?M:T&&T.locale,o=v[I+"%"+U+(t?"%"+t:"")];e&&!o&&h(T,I,U,{locale:t})},[U,I,K,M,P,T]);var q={ref:X,onClick:function(e){R||"function"!=typeof w||w(e),R&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,a,c,i,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&u.isLocalURL(o)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:a,locale:i,scroll:c}):t[r?"replace":"push"](o,{forceOptimisticNavigation:!s})};f?l.default.startTransition(v):v()}}(e,T,I,U,m,C,j,M,Boolean(N),P)},onMouseEnter:function(e){R||"function"!=typeof L||L(e),R&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!P&&N)&&u.isLocalURL(I)&&h(T,I,U,{priority:!0})},onTouchStart:function(e){R||"function"!=typeof E||E(e),R&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!P&&N)&&u.isLocalURL(I)&&h(T,I,U,{priority:!0})}};if(!R||g||"a"===r.type&&!("href"in r.props)){var z=void 0!==M?M:T&&T.locale,F=T&&T.isLocaleDomain&&d.getDomainLocale(U,z,T.locales,T.domainLocales);q.href=F||p.addBasePath(c.addLocale(U,z,T&&T.defaultLocale))}return R?l.default.cloneElement(r,q):l.default.createElement("a",Object.assign({},k,q),o)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,i=e.disabled||!l,f=n(r.useState(!1),2),s=f[0],d=f[1],p=n(r.useState(null),2),v=p[0],h=p[1];return r.useEffect(function(){if(l){if(!i&&!s&&v&&v.tagName){var e,n,r,f,p,h,y;return n=function(e){return e&&d(e)},p=(f=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===o.root&&e.margin===o.margin});if(n&&(t=u.get(n)))return t;var r=new Map;return t={id:o,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e),elements:r},c.push(o),u.set(o,t),t}(r={root:null==t?void 0:t.current,rootMargin:o})).id,h=f.observer,(y=f.elements).set(v,n),h.observe(v),function(){if(y.delete(v),h.unobserve(v),0===y.size){h.disconnect(),u.delete(p);var e=c.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});e>-1&&c.splice(e,1)}}}}else if(!s){var x=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(x)}}},[v,i,o,t,s]),[h,s,r.useCallback(function(){d(!1)},[])]};var r=o(7294),a=o(9311),l="function"==typeof IntersectionObserver,u=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(2648).Z)(o(7294)),r=n.default.createContext(null);t.AppRouterContext=r;var a=n.default.createContext(null);t.LayoutRouterContext=a;var l=n.default.createContext(null);t.GlobalLayoutRouterContext=l;var u=n.default.createContext(null);t.TemplateContext=u},3678:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return l},default:function(){return u}});var n=o(5893),r=o(1664),a=o.n(r),l=!0;function u(e){var t=e.blog;return(0,n.jsx)("div",{class:"flex flex-wrap container mx-auto px-4",children:t.map(function(e){return(0,n.jsxs)("div",{class:"w-96 px-2 py-2",children:[(0,n.jsx)(a(),{href:"/blog/".concat(e.id),children:(0,n.jsx)("a",{children:(0,n.jsxs)("div",{class:"flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]",children:[(0,n.jsx)("img",{class:"w-full h-auto rounded-t-xl",src:e.eyecatch.url}),(0,n.jsx)("div",{class:"p-4 md:p-5",children:(0,n.jsx)("h3",{class:"text-lg font-bold text-gray-800 dark:text-white",children:e.title})})]})})}),(0,n.jsx)("div",{className:"mt-12"})]},e.id)})})}},1664:function(e,t,o){e.exports=o(8418)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);