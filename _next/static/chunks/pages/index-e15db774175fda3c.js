(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(3678)}])},1210:function(e,t){"use strict";function o(e,t,o,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;o(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,a=o(7273).Z,u=r(o(7294)),l=o(6273),c=o(2725),f=o(3462),i=o(1018),s=o(7190),d=o(1210),p=o(8684),v={};function h(e,t,o,n){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,o,n)).catch(function(e){});var r=n&&void 0!==n.locale?n.locale:e&&e.locale;v[t+"%"+o+(r?"%"+r:"")]=!0}}var y=u.default.forwardRef(function(e,t){var o,r,y=e.href,_=e.as,b=e.children,g=e.prefetch,C=e.passHref,x=e.replace,m=e.shallow,M=e.scroll,j=e.locale,L=e.onClick,E=e.onMouseEnter,O=e.onTouchStart,R=e.legacyBehavior,P=void 0===R?!0!==Boolean(!1):R,w=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=b,P&&("string"==typeof o||"number"==typeof o)&&(o=u.default.createElement("a",null,o));var k=!1!==g,T=u.default.useContext(f.RouterContext),S=u.default.useContext(i.AppRouterContext);S&&(T=S);var N=u.default.useMemo(function(){var e=n(l.resolveHref(T,y,!0),2),t=e[0],o=e[1];return{href:t,as:_?l.resolveHref(T,_):o||t}},[T,y,_]),I=N.href,U=N.as,B=u.default.useRef(I),Z=u.default.useRef(U);P&&(r=u.default.Children.only(o));var A=P?r&&"object"==typeof r&&r.ref:t,D=n(s.useIntersection({rootMargin:"200px"}),3),H=D[0],K=D[1],G=D[2],X=u.default.useCallback(function(e){(Z.current!==U||B.current!==I)&&(G(),Z.current=U,B.current=I),H(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[U,A,I,G,H]);u.default.useEffect(function(){var e=K&&k&&l.isLocalURL(I),t=void 0!==j?j:T&&T.locale,o=v[I+"%"+U+(t?"%"+t:"")];e&&!o&&h(T,I,U,{locale:t})},[U,I,K,j,k,T]);var q={ref:X,onClick:function(e){P||"function"!=typeof L||L(e),P&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,a,c,f,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&l.isLocalURL(o)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:a,locale:f,scroll:c}):t[r?"replace":"push"](o,{forceOptimisticNavigation:!s})};i?u.default.startTransition(v):v()}}(e,T,I,U,x,m,M,j,Boolean(S),k)},onMouseEnter:function(e){P||"function"!=typeof E||E(e),P&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!k&&S)&&l.isLocalURL(I)&&h(T,I,U,{priority:!0})},onTouchStart:function(e){P||"function"!=typeof O||O(e),P&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!k&&S)&&l.isLocalURL(I)&&h(T,I,U,{priority:!0})}};if(!P||C||"a"===r.type&&!("href"in r.props)){var z=void 0!==j?j:T&&T.locale,F=T&&T.isLocaleDomain&&d.getDomainLocale(U,z,T.locales,T.domainLocales);q.href=F||p.addBasePath(c.addLocale(U,z,T&&T.defaultLocale))}return P?u.default.cloneElement(r,q):u.default.createElement("a",Object.assign({},w,q),o)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,f=e.disabled||!u,i=n(r.useState(!1),2),s=i[0],d=i[1],p=n(r.useState(null),2),v=p[0],h=p[1];return r.useEffect(function(){if(u){if(!f&&!s&&v&&v.tagName){var e,n,r,i,p,h,y;return n=function(e){return e&&d(e)},p=(i=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===o.root&&e.margin===o.margin});if(n&&(t=l.get(n)))return t;var r=new Map;return t={id:o,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e),elements:r},c.push(o),l.set(o,t),t}(r={root:null==t?void 0:t.current,rootMargin:o})).id,h=i.observer,(y=i.elements).set(v,n),h.observe(v),function(){if(y.delete(v),h.unobserve(v),0===y.size){h.disconnect(),l.delete(p);var e=c.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});e>-1&&c.splice(e,1)}}}}else if(!s){var _=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(_)}}},[v,f,o,t,s]),[h,s,r.useCallback(function(){d(!1)},[])]};var r=o(7294),a=o(9311),u="function"==typeof IntersectionObserver,l=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(2648).Z)(o(7294)),r=n.default.createContext(null);t.AppRouterContext=r;var a=n.default.createContext(null);t.LayoutRouterContext=a;var u=n.default.createContext(null);t.GlobalLayoutRouterContext=u;var l=n.default.createContext(null);t.TemplateContext=l},3678:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return u},default:function(){return l}});var n=o(5893),r=o(1664),a=o.n(r),u=!0;function l(e){var t=e.blog;return(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:t.map(function(e){return(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"/blog/".concat(e.id),children:(0,n.jsx)("a",{children:e.title})})},e.id)})})})}},1664:function(e,t,o){e.exports=o(8418)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);