!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=NaN,i="[object Symbol]",c=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,t="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,v=t||s||Function("return this")(),h=Object.prototype.toString,b=Math.max,w=Math.min,g=function(){return v.Date.now()};function T(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function k(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||(n=t)&&"object"==typeof n&&h.call(t)==i)return a;var t,n;if(T(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=T(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var o=u.test(e);return o||d.test(e)?f(e.slice(2),o?2:8):l.test(e)?a:+e}var y=function(r,o,e){var a,i,c,l,u,d,f=0,s=!1,p=!1,t=!0;if("function"!=typeof r)throw new TypeError("Expected a function");function v(e){var t=a,n=i;return a=i=void 0,f=e,l=r.apply(n,t)}function h(e){var t=e-d;return void 0===d||o<=t||t<0||p&&c<=e-f}function y(){var e,t,n=g();if(h(n))return m(n);u=setTimeout(y,(t=o-((e=n)-d),p?w(t,c-(e-f)):t))}function m(e){return u=void 0,t&&a?v(e):(a=i=void 0,l)}function n(){var e,t=g(),n=h(t);if(a=arguments,i=this,d=t,n){if(void 0===u)return f=e=d,u=setTimeout(y,o),s?v(e):l;if(p)return u=setTimeout(y,o),v(d)}return void 0===u&&(u=setTimeout(y,o)),l}return o=k(o)||0,T(e)&&(s=!!e.leading,c=(p="maxWait"in e)?b(k(e.maxWait)||0,o):c,t="trailing"in e?!!e.trailing:t),n.cancel=function(){void 0!==u&&clearTimeout(u),a=d=i=u=void(f=0)},n.flush=function(){return void 0===u?l:m(g())},n},m=9007199254740991,j="[object Arguments]",C="[object Function]",A="[object GeneratorFunction]",O=/^(?:0|[1-9]\d*)$/;function E(e,t){for(var n=-1,r=e?e.length:0;++n<r&&!1!==t(e[n],n,e););return e}var I,K,x=Object.prototype,N=x.hasOwnProperty,L=x.toString,S=x.propertyIsEnumerable,z=(I=Object.keys,K=Object,function(e){return I(K(e))});function B(e,t){var n,r,o,a=Z(e)||(o=r=n=e)&&"object"==typeof o&&J(r)&&N.call(n,"callee")&&(!S.call(n,"callee")||L.call(n)==j)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],i=a.length,c=!!i;for(var l in e)!t&&!N.call(e,l)||c&&("length"==l||V(l,i))||a.push(l);return a}var M,R,q,W=(M=function(e,t){return e&&$(e,t,P)},function(e,t){if(null==e)return e;if(!J(e))return M(e,t);for(var n=e.length,r=R?n:-1,o=Object(e);(R?r--:++r<n)&&!1!==t(o[r],r,o););return e}),$=function(e,t,n){for(var r=-1,o=Object(e),a=n(e),i=a.length;i--;){var c=a[q?i:++r];if(!1===t(o[c],c,o))break}return e};function F(e){if(n=(t=e)&&t.constructor,r="function"==typeof n&&n.prototype||x,t!==r)return z(e);var t,n,r,o=[];for(var a in Object(e))N.call(e,a)&&"constructor"!=a&&o.push(a);return o}function V(e,t){return!!(t=null==t?m:t)&&("number"==typeof e||O.test(e))&&-1<e&&e%1==0&&e<t}var Z=Array.isArray;function J(e){return null!=e&&("number"==typeof(a=e.length)&&-1<a&&a%1==0&&a<=m)&&(o=typeof(r=t=e),!((n=!r||"object"!=o&&"function"!=o?"":L.call(t))==C||n==A));var t,n,r,o,a}function P(e){return J(e)?B(e):F(e)}function U(e){return e}var D=function(e,t){return(Z(e)?E:W)(e,"function"==typeof t?t:U)},G=function(e){if(!document.body.contains(e))return!1;var t=e.getBoundingClientRect();return t.top<=window.innerHeight&&0<=t.top+t.height&&t.left<=window.innerWidth&&0<=t.left+t.width},H=/^(https:\/\/trello\.com)\/b\/([a-zA-Z0-9]+)/,Q=/^(https:\/\/trello\.com)\/c\/([a-zA-Z0-9]+)/,X=function(e){return/^[a-f0-9]{24}$/.test(e)||/^[a-zA-Z0-9]{8}$/.test(e)},Y=function(e,t,n,r){e&&e.contentWindow&&e.contentWindow.postMessage({secret:n,command:"polling",options:{enabled:r}},t)},_=function(){function e(){var r=this;n(this,e),this.version="1.0.4",this.activeCards={};window.addEventListener("message",function(e){if("https://trello.com"===e.origin&&"resize"===e.data.command&&e.data.secret){var t=r.activeCards[e.data.secret];if(!t||!t.el)return;var n=e.data.options.height;void 0!==n&&(t.el.height=n,"function"==typeof r.onResize&&r.onResize({height:e.data.options.height,width:parseInt(t.el.width,10)})),Y(t.el,e.origin,e.data.secret,G(t.el))}},!1),window.addEventListener("resize",y(function(){return r.reassessVisibility()},1e3)),window.addEventListener("scroll",y(function(){return r.reassessVisibility()},1e3)),"complete"===document.readyState?this.load():window.addEventListener("load",function(){return r.load()})}return o(e,[{key:"reassessVisibility",value:function(){D(this.activeCards,function(e,t){var n=e.el,r=e.host;document.body.contains(n)&&Y(n,r,t,G(n))})}},{key:"createCardIframe",value:function(e,t,n,r){var o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},a=document.createElement("iframe"),i=encodeURIComponent(window.location.origin),c="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",l=Array(24).join().split(",").map(function(){return c.charAt(Math.floor(Math.random()*c.length))}).join("");if(a.src="".concat(e,"/embed/card?")+"id=".concat(t,"&targetOrigin=").concat(i,"&secret=").concat(l,"&compact=").concat(!0===r),a.width=316,a.height=152,a.style.border="none",a.style.overflow="hidden",a.className="trello-card trello-card-rendered",r&&a.classList.add("trello-card-compact"),o&&o.apiToken&&o.apiKey){var u=o.apiKey,d=o.apiToken;a.name=JSON.stringify({apiKey:u,apiToken:d})}return a.onload=o.onLoad,this.activeCards[l]={el:a,host:e},a}},{key:"create",value:function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{compact:!1},r=n.compact,o=n.apiKey,a=n.apiToken,i=n.onLoad,c=n.onResize,l="https://trello.com",u=e;if(Q.test(u)){var d=Q.exec(u);if(!d||!d[1]||!d[2])throw new Error("Invalid Trello card url");var f=p(d,3);l=f[1],u=f[2]}if(!X(u))throw new Error("Invalid Trello card id");this.onResize=c;var s=this.createCardIframe(l,u,"Trello Card",r,{apiKey:o,apiToken:a,onLoad:i});t.appendChild(s)}},{key:"load",value:function(e){var u=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{compact:!1,allAnchors:!1},d=t.allAnchors,f=t.compact,s=t.apiToken,p=t.apiKey,n=d?"a":"blockquote.trello-card>a, blockquote.trello-card-compact>a",r=(e||document).querySelectorAll(n);D(r,function(e){var t=e.href,n=Q.exec(t);if(n&&n[1]&&n[2]){var r=n[1],o=n[2],a=e.innerText,i=!0===f||e.parentElement.classList.contains("trello-card-compact"),c=u.createCardIframe(r,o,a,i,{apiKey:p,apiToken:s});if(d)e.parentNode.replaceChild(c,e);else{var l=e.parentNode;l.parentNode.replaceChild(c,l)}}})}}]),e}(),ee=function(){function t(){var e=this;n(this,t),this.version="1.0.4","complete"===document.readyState?this.load():window.addEventListener("load",function(){return e.load()})}return o(t,[{key:"createBoardIframe",value:function(e,t,n,r){var o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},a=document.createElement("iframe"),i=encodeURIComponent(window.location.origin),c="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",l=Array(24).join().split(",").map(function(){return c.charAt(Math.floor(Math.random()*c.length))}).join("");if(a.src="".concat(e,"/embed/board?")+"id=".concat(t,"&targetOrigin=").concat(i,"&secret=").concat(l,"&compact=").concat(!0===r),a.width=248,a.height=r?185:218,a.style.border="none",a.style.overflow="hidden",a.className="trello-board trello-board-rendered",r&&a.classList.add("trello-board-compact"),o&&o.apiToken&&o.apiKey){var u=o.apiKey,d=o.apiToken;a.name=JSON.stringify({apiKey:u,apiToken:d})}return a}},{key:"create",value:function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=n.apiKey,o=n.apiToken,a="https://trello.com",i=e;if(H.test(i)){var c=H.exec(i);if(!c||!c[1]||!c[2])throw new Error("Invalid Trello board url");var l=p(c,3);a=l[1],i=l[2]}if(!X(i))throw new Error("Invalid Trello board id");var u=this.createBoardIframe(a,i,"Trello Board",!0,{apiKey:r,apiToken:o});t.appendChild(u)}},{key:"load",value:function(e){var l=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{allAnchors:!1},u=t.allAnchors,d=t.apiKey,f=t.apiToken,n=u?"a":"blockquote.trello-board-compact>a",r=(e||document).querySelectorAll(n);D(r,function(e){var t=e.href,n=H.exec(t);if(n&&n[1]&&n[2]){var r=n[1],o=n[2],a=e.innerText,i=l.createBoardIframe(r,o,a,!0,{apiKey:d,apiToken:f});if(u)e.parentNode.replaceChild(i,e);else{var c=e.parentNode;c.parentNode.replaceChild(i,c)}}})}}]),t}();window.TrelloCards||(window.TrelloCards=new _),window.TrelloBoards||(window.TrelloBoards=new ee)});
//# sourceMappingURL=embed.min.js.map