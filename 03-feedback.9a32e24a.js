function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,s=f||u||Function("return this")(),l=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return s.Date.now()};function v(e,t,n){var r,o,i,a,c,f,u=0,s=!1,l=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,u=t,a=e.apply(i,n)}function h(e){return u=e,c=setTimeout(T,t),s?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||l&&e-u>=i}function T(){var e=g();if(j(e))return O(e);c=setTimeout(T,function(e){var n=t-(e-f);return l?m(n,i-(e-u)):n}(e))}function O(e){return c=void 0,v&&r?b(e):(r=o=void 0,a)}function w(){var e=g(),n=j(e);if(r=arguments,o=this,f=e,n){if(void 0===c)return h(f);if(l)return c=setTimeout(T,t),b(f)}return void 0===c&&(c=setTimeout(T,t)),a}return t=y(t)||0,p(n)&&(s=!!n.leading,i=(l="maxWait"in n)?d(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=f=o=c=void 0},w.flush=function(){return void 0===c?a:O(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?c(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),h=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};!function(){const e=h("feedback-form-state");if(!e)return;Object.entries(e).forEach((([e,t])=>{b.elements[e].value=t}))}();const j=e(t)((e=>{const{name:t,value:n}=e.target;try{let e=h("feedback-form-state");e=e||{},e[t]=n,((e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}})("feedback-form-state",e)}catch(e){console.log(e)}}),500);b.addEventListener("input",j);b.addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;console.log({Email:t.value,Message:n.value}),e.currentTarget.reset(),(e=>{try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}})("feedback-form-state")}));
//# sourceMappingURL=03-feedback.9a32e24a.js.map
