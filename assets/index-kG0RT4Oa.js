(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();var re=function(o,t){return re=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])},re(o,t)};function C(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");re(o,t);function e(){this.constructor=o}o.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function Qe(o,t,e,r){function n(i){return i instanceof e?i:new e(function(a){a(i)})}return new(e||(e=Promise))(function(i,a){function s(u){try{l(r.next(u))}catch(d){a(d)}}function c(u){try{l(r.throw(u))}catch(d){a(d)}}function l(u){u.done?i(u.value):n(u.value).then(s,c)}l((r=r.apply(o,t||[])).next())})}function Ee(o,t){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,n,i,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(e=0)),e;)try{if(r=1,n&&(i=l[0]&2?n.return:l[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,l[1])).done)return i;switch(n=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return e.label++,{value:l[1],done:!1};case 5:e.label++,n=l[1],l=[0];continue;case 7:l=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){e.label=l[1];break}if(l[0]===6&&e.label<i[1]){e.label=i[1],i=l;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(l);break}i[2]&&e.ops.pop(),e.trys.pop();continue}l=t.call(o,e)}catch(u){l=[6,u],n=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function $(o){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&o[t],r=0;if(e)return e.call(o);if(o&&typeof o.length=="number")return{next:function(){return o&&r>=o.length&&(o=void 0),{value:o&&o[r++],done:!o}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function D(o,t){var e=typeof Symbol=="function"&&o[Symbol.iterator];if(!e)return o;var r=e.call(o),n,i=[],a;try{for(;(t===void 0||t-- >0)&&!(n=r.next()).done;)i.push(n.value)}catch(s){a={error:s}}finally{try{n&&!n.done&&(e=r.return)&&e.call(r)}finally{if(a)throw a.error}}return i}function L(o,t,e){if(e||arguments.length===2)for(var r=0,n=t.length,i;r<n;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return o.concat(i||Array.prototype.slice.call(t))}function U(o){return this instanceof U?(this.v=o,this):new U(o)}function Ye(o,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e.apply(o,t||[]),n,i=[];return n=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),n[Symbol.asyncIterator]=function(){return this},n;function a(p){return function(b){return Promise.resolve(b).then(p,d)}}function s(p,b){r[p]&&(n[p]=function(v){return new Promise(function(k,T){i.push([p,v,k,T])>1||c(p,v)})},b&&(n[p]=b(n[p])))}function c(p,b){try{l(r[p](b))}catch(v){m(i[0][3],v)}}function l(p){p.value instanceof U?Promise.resolve(p.value.v).then(u,d):m(i[0][2],p)}function u(p){c("next",p)}function d(p){c("throw",p)}function m(p,b){p(b),i.shift(),i.length&&c(i[0][0],i[0][1])}}function Je(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=o[Symbol.asyncIterator],e;return t?t.call(o):(o=typeof $=="function"?$(o):o[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(i){e[i]=o[i]&&function(a){return new Promise(function(s,c){a=o[i](a),n(s,c,a.done,a.value)})}}function n(i,a,s,c){Promise.resolve(c).then(function(l){i({value:l,done:s})},a)}}function h(o){return typeof o=="function"}function X(o){var t=function(r){Error.call(r),r.stack=new Error().stack},e=o(t);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var te=X(function(o){return function(e){o(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(r,n){return n+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function K(o,t){if(o){var e=o.indexOf(t);0<=e&&o.splice(e,1)}}var W=(function(){function o(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return o.prototype.unsubscribe=function(){var t,e,r,n,i;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var s=$(a),c=s.next();!c.done;c=s.next()){var l=c.value;l.remove(this)}}catch(v){t={error:v}}finally{try{c&&!c.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}else a.remove(this);var u=this.initialTeardown;if(h(u))try{u()}catch(v){i=v instanceof te?v.errors:[v]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var m=$(d),p=m.next();!p.done;p=m.next()){var b=p.value;try{fe(b)}catch(v){i=i??[],v instanceof te?i=L(L([],D(i)),D(v.errors)):i.push(v)}}}catch(v){r={error:v}}finally{try{p&&!p.done&&(n=m.return)&&n.call(m)}finally{if(r)throw r.error}}}if(i)throw new te(i)}},o.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)fe(t);else{if(t instanceof o){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(t)}},o.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},o.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},o.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&K(e,t)},o.prototype.remove=function(t){var e=this._finalizers;e&&K(e,t),t instanceof o&&t._removeParent(this)},o.EMPTY=(function(){var t=new o;return t.closed=!0,t})(),o})(),ke=W.EMPTY;function Te(o){return o instanceof W||o&&"closed"in o&&h(o.remove)&&h(o.add)&&h(o.unsubscribe)}function fe(o){h(o)?o():o.unsubscribe()}var Ge={Promise:void 0},Ke={setTimeout:function(o,t){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setTimeout.apply(void 0,L([o,t],D(e)))},clearTimeout:function(o){return clearTimeout(o)},delegate:void 0};function Ie(o){Ke.setTimeout(function(){throw o})}function F(){}function G(o){o()}var se=(function(o){C(t,o);function t(e){var r=o.call(this)||this;return r.isStopped=!1,e?(r.destination=e,Te(e)&&e.add(r)):r.destination=et,r}return t.create=function(e,r,n){return new ne(e,r,n)},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,o.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})(W),Ze=(function(){function o(t){this.partialObserver=t}return o.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(r){Y(r)}},o.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(r){Y(r)}else Y(t)},o.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(e){Y(e)}},o})(),ne=(function(o){C(t,o);function t(e,r,n){var i=o.call(this)||this,a;return h(e)||!e?a={next:e??void 0,error:r??void 0,complete:n??void 0}:a=e,i.destination=new Ze(a),i}return t})(se);function Y(o){Ie(o)}function Xe(o){throw o}var et={closed:!0,next:F,error:Xe,complete:F},ce=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function q(o){return o}function tt(o){return o.length===0?q:o.length===1?o[0]:function(e){return o.reduce(function(r,n){return n(r)},e)}}var w=(function(){function o(t){t&&(this._subscribe=t)}return o.prototype.lift=function(t){var e=new o;return e.source=this,e.operator=t,e},o.prototype.subscribe=function(t,e,r){var n=this,i=rt(t)?t:new ne(t,e,r);return G(function(){var a=n,s=a.operator,c=a.source;i.add(s?s.call(i,c):c?n._subscribe(i):n._trySubscribe(i))}),i},o.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},o.prototype.forEach=function(t,e){var r=this;return e=ve(e),new e(function(n,i){var a=new ne({next:function(s){try{t(s)}catch(c){i(c),a.unsubscribe()}},error:i,complete:n});r.subscribe(a)})},o.prototype._subscribe=function(t){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(t)},o.prototype[ce]=function(){return this},o.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return tt(t)(this)},o.prototype.toPromise=function(t){var e=this;return t=ve(t),new t(function(r,n){var i;e.subscribe(function(a){return i=a},function(a){return n(a)},function(){return r(i)})})},o.create=function(t){return new o(t)},o})();function ve(o){var t;return(t=o??Ge.Promise)!==null&&t!==void 0?t:Promise}function ot(o){return o&&h(o.next)&&h(o.error)&&h(o.complete)}function rt(o){return o&&o instanceof se||ot(o)&&Te(o)}function nt(o){return h(o?.lift)}function y(o){return function(t){if(nt(t))return t.lift(function(e){try{return o(e,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function f(o,t,e,r,n){return new it(o,t,e,r,n)}var it=(function(o){C(t,o);function t(e,r,n,i,a,s){var c=o.call(this,e)||this;return c.onFinalize=a,c.shouldUnsubscribe=s,c._next=r?function(l){try{r(l)}catch(u){e.error(u)}}:o.prototype._next,c._error=i?function(l){try{i(l)}catch(u){e.error(u)}finally{this.unsubscribe()}}:o.prototype._error,c._complete=n?function(){try{n()}catch(l){e.error(l)}finally{this.unsubscribe()}}:o.prototype._complete,c}return t.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;o.prototype.unsubscribe.call(this),!r&&((e=this.onFinalize)===null||e===void 0||e.call(this))}},t})(se),at=X(function(o){return function(){o(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),H=(function(o){C(t,o);function t(){var e=o.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return t.prototype.lift=function(e){var r=new be(this,this);return r.operator=e,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new at},t.prototype.next=function(e){var r=this;G(function(){var n,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var a=$(r.currentObservers),s=a.next();!s.done;s=a.next()){var c=s.value;c.next(e)}}catch(l){n={error:l}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}}})},t.prototype.error=function(e){var r=this;G(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=e;for(var n=r.observers;n.length;)n.shift().error(e)}})},t.prototype.complete=function(){var e=this;G(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var r=e.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(e){return this._throwIfClosed(),o.prototype._trySubscribe.call(this,e)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var r=this,n=this,i=n.hasError,a=n.isStopped,s=n.observers;return i||a?ke:(this.currentObservers=null,s.push(e),new W(function(){r.currentObservers=null,K(s,e)}))},t.prototype._checkFinalizedStatuses=function(e){var r=this,n=r.hasError,i=r.thrownError,a=r.isStopped;n?e.error(i):a&&e.complete()},t.prototype.asObservable=function(){var e=new w;return e.source=this,e},t.create=function(e,r){return new be(e,r)},t})(w),be=(function(o){C(t,o);function t(e,r){var n=o.call(this)||this;return n.destination=e,n.source=r,n}return t.prototype.next=function(e){var r,n;(n=(r=this.destination)===null||r===void 0?void 0:r.next)===null||n===void 0||n.call(r,e)},t.prototype.error=function(e){var r,n;(n=(r=this.destination)===null||r===void 0?void 0:r.error)===null||n===void 0||n.call(r,e)},t.prototype.complete=function(){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||r===void 0||r.call(e)},t.prototype._subscribe=function(e){var r,n;return(n=(r=this.source)===null||r===void 0?void 0:r.subscribe(e))!==null&&n!==void 0?n:ke},t})(H),st=(function(o){C(t,o);function t(e){var r=o.call(this)||this;return r._value=e,r}return Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),t.prototype._subscribe=function(e){var r=o.prototype._subscribe.call(this,e);return!r.closed&&e.next(this._value),r},t.prototype.getValue=function(){var e=this,r=e.hasError,n=e.thrownError,i=e._value;if(r)throw n;return this._throwIfClosed(),i},t.prototype.next=function(e){o.prototype.next.call(this,this._value=e)},t})(H),le={now:function(){return(le.delegate||Date).now()},delegate:void 0},ct=(function(o){C(t,o);function t(e,r,n){e===void 0&&(e=1/0),r===void 0&&(r=1/0),n===void 0&&(n=le);var i=o.call(this)||this;return i._bufferSize=e,i._windowTime=r,i._timestampProvider=n,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=r===1/0,i._bufferSize=Math.max(1,e),i._windowTime=Math.max(1,r),i}return t.prototype.next=function(e){var r=this,n=r.isStopped,i=r._buffer,a=r._infiniteTimeWindow,s=r._timestampProvider,c=r._windowTime;n||(i.push(e),!a&&i.push(s.now()+c)),this._trimBuffer(),o.prototype.next.call(this,e)},t.prototype._subscribe=function(e){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(e),n=this,i=n._infiniteTimeWindow,a=n._buffer,s=a.slice(),c=0;c<s.length&&!e.closed;c+=i?1:2)e.next(s[c]);return this._checkFinalizedStatuses(e),r},t.prototype._trimBuffer=function(){var e=this,r=e._bufferSize,n=e._timestampProvider,i=e._buffer,a=e._infiniteTimeWindow,s=(a?1:2)*r;if(r<1/0&&s<i.length&&i.splice(0,i.length-s),!a){for(var c=n.now(),l=0,u=1;u<i.length&&i[u]<=c;u+=2)l=u;l&&i.splice(0,l+1)}},t})(H),lt=(function(o){C(t,o);function t(){var e=o!==null&&o.apply(this,arguments)||this;return e._value=null,e._hasValue=!1,e._isComplete=!1,e}return t.prototype._checkFinalizedStatuses=function(e){var r=this,n=r.hasError,i=r._hasValue,a=r._value,s=r.thrownError,c=r.isStopped,l=r._isComplete;n?e.error(s):(c||l)&&(i&&e.next(a),e.complete())},t.prototype.next=function(e){this.isStopped||(this._value=e,this._hasValue=!0)},t.prototype.complete=function(){var e=this,r=e._hasValue,n=e._value,i=e._isComplete;i||(this._isComplete=!0,r&&o.prototype.next.call(this,n),o.prototype.complete.call(this))},t})(H),ut=(function(o){C(t,o);function t(e,r){return o.call(this)||this}return t.prototype.schedule=function(e,r){return this},t})(W),he={setInterval:function(o,t){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setInterval.apply(void 0,L([o,t],D(e)))},clearInterval:function(o){return clearInterval(o)},delegate:void 0},dt=(function(o){C(t,o);function t(e,r){var n=o.call(this,e,r)||this;return n.scheduler=e,n.work=r,n.pending=!1,n}return t.prototype.schedule=function(e,r){var n;if(r===void 0&&(r=0),this.closed)return this;this.state=e;var i=this.id,a=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(a,i,r)),this.pending=!0,this.delay=r,this.id=(n=this.id)!==null&&n!==void 0?n:this.requestAsyncId(a,this.id,r),this},t.prototype.requestAsyncId=function(e,r,n){return n===void 0&&(n=0),he.setInterval(e.flush.bind(e,this),n)},t.prototype.recycleAsyncId=function(e,r,n){if(n===void 0&&(n=0),n!=null&&this.delay===n&&this.pending===!1)return r;r!=null&&he.clearInterval(r)},t.prototype.execute=function(e,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,r);if(n)return n;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,r){var n=!1,i;try{this.work(e)}catch(a){n=!0,i=a||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),i},t.prototype.unsubscribe=function(){if(!this.closed){var e=this,r=e.id,n=e.scheduler,i=n.actions;this.work=this.state=this.scheduler=null,this.pending=!1,K(i,this),r!=null&&(this.id=this.recycleAsyncId(n,r,null)),this.delay=null,o.prototype.unsubscribe.call(this)}},t})(ut),ye=(function(){function o(t,e){e===void 0&&(e=o.now),this.schedulerActionCtor=t,this.now=e}return o.prototype.schedule=function(t,e,r){return e===void 0&&(e=0),new this.schedulerActionCtor(this,t).schedule(r,e)},o.now=le.now,o})(),pt=(function(o){C(t,o);function t(e,r){r===void 0&&(r=ye.now);var n=o.call(this,e,r)||this;return n.actions=[],n._active=!1,n}return t.prototype.flush=function(e){var r=this.actions;if(this._active){r.push(e);return}var n;this._active=!0;do if(n=e.execute(e.state,e.delay))break;while(e=r.shift());if(this._active=!1,n){for(;e=r.shift();)e.unsubscribe();throw n}},t})(ye),N=new pt(dt),mt=N,R=new w(function(o){return o.complete()});function Oe(o){return o&&h(o.schedule)}function ue(o){return o[o.length-1]}function ee(o){return h(ue(o))?o.pop():void 0}function Q(o){return Oe(ue(o))?o.pop():void 0}function ft(o,t){return typeof ue(o)=="number"?o.pop():t}var de=(function(o){return o&&typeof o.length=="number"&&typeof o!="function"});function Ce(o){return h(o?.then)}function Pe(o){return h(o[ce])}function qe(o){return Symbol.asyncIterator&&h(o?.[Symbol.asyncIterator])}function je(o){return new TypeError("You provided "+(o!==null&&typeof o=="object"?"an invalid object":"'"+o+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function vt(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ae=vt();function Me(o){return h(o?.[Ae])}function De(o){return Ye(this,arguments,function(){var e,r,n,i;return Ee(this,function(a){switch(a.label){case 0:e=o.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,U(e.read())];case 3:return r=a.sent(),n=r.value,i=r.done,i?[4,U(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,U(n)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function Le(o){return h(o?.getReader)}function E(o){if(o instanceof w)return o;if(o!=null){if(Pe(o))return bt(o);if(de(o))return ht(o);if(Ce(o))return yt(o);if(qe(o))return _e(o);if(Me(o))return gt(o);if(Le(o))return St(o)}throw je(o)}function bt(o){return new w(function(t){var e=o[ce]();if(h(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ht(o){return new w(function(t){for(var e=0;e<o.length&&!t.closed;e++)t.next(o[e]);t.complete()})}function yt(o){return new w(function(t){o.then(function(e){t.closed||(t.next(e),t.complete())},function(e){return t.error(e)}).then(null,Ie)})}function gt(o){return new w(function(t){var e,r;try{for(var n=$(o),i=n.next();!i.done;i=n.next()){var a=i.value;if(t.next(a),t.closed)return}}catch(s){e={error:s}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}t.complete()})}function _e(o){return new w(function(t){xt(o,t).catch(function(e){return t.error(e)})})}function St(o){return _e(De(o))}function xt(o,t){var e,r,n,i;return Qe(this,void 0,void 0,function(){var a,s;return Ee(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),e=Je(o),c.label=1;case 1:return[4,e.next()];case 2:if(r=c.sent(),!!r.done)return[3,4];if(a=r.value,t.next(a),t.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=c.sent(),n={error:s},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(i=e.return)?[4,i.call(e)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(n)throw n.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function M(o,t,e,r,n){r===void 0&&(r=0),n===void 0&&(n=!1);var i=t.schedule(function(){e(),n?o.add(this.schedule(null,r)):this.unsubscribe()},r);if(o.add(i),!n)return i}function ze(o,t){return t===void 0&&(t=0),y(function(e,r){e.subscribe(f(r,function(n){return M(r,o,function(){return r.next(n)},t)},function(){return M(r,o,function(){return r.complete()},t)},function(n){return M(r,o,function(){return r.error(n)},t)}))})}function Re(o,t){return t===void 0&&(t=0),y(function(e,r){r.add(o.schedule(function(){return e.subscribe(r)},t))})}function wt(o,t){return E(o).pipe(Re(t),ze(t))}function Et(o,t){return E(o).pipe(Re(t),ze(t))}function kt(o,t){return new w(function(e){var r=0;return t.schedule(function(){r===o.length?e.complete():(e.next(o[r++]),e.closed||this.schedule())})})}function Tt(o,t){return new w(function(e){var r;return M(e,t,function(){r=o[Ae](),M(e,t,function(){var n,i,a;try{n=r.next(),i=n.value,a=n.done}catch(s){e.error(s);return}a?e.complete():e.next(i)},0,!0)}),function(){return h(r?.return)&&r.return()}})}function $e(o,t){if(!o)throw new Error("Iterable cannot be null");return new w(function(e){M(e,t,function(){var r=o[Symbol.asyncIterator]();M(e,t,function(){r.next().then(function(n){n.done?e.complete():e.next(n.value)})},0,!0)})})}function It(o,t){return $e(De(o),t)}function Ot(o,t){if(o!=null){if(Pe(o))return wt(o,t);if(de(o))return kt(o,t);if(Ce(o))return Et(o,t);if(qe(o))return $e(o,t);if(Me(o))return Tt(o,t);if(Le(o))return It(o,t)}throw je(o)}function x(o,t){return t?Ot(o,t):E(o)}function j(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];var e=Q(o);return x(o,e)}function Ct(o,t){var e=h(o)?o:function(){return o},r=function(n){return n.error(e())};return new w(r)}var pe=X(function(o){return function(){o(this),this.name="EmptyError",this.message="no elements in sequence"}});function Be(o){return o instanceof Date&&!isNaN(o)}var Pt=X(function(o){return function(e){e===void 0&&(e=null),o(this),this.message="Timeout has occurred",this.name="TimeoutError",this.info=e}});function qt(o,t){var e=Be(o)?{first:o}:{each:o},r=e.first,n=e.each,i=e.with,a=i===void 0?jt:i,s=e.scheduler,c=s===void 0?N:s,l=e.meta,u=l===void 0?null:l;if(r==null&&n==null)throw new TypeError("No timeout provided.");return y(function(d,m){var p,b,v=null,k=0,T=function(_){b=M(m,c,function(){try{p.unsubscribe(),E(a({meta:u,lastValue:v,seen:k})).subscribe(m)}catch(He){m.error(He)}},_)};p=d.subscribe(f(m,function(_){b?.unsubscribe(),k++,m.next(v=_),n>0&&T(n)},void 0,void 0,function(){b?.closed||b?.unsubscribe(),v=null})),!k&&T(r!=null?typeof r=="number"?r:+r-c.now():n)})}function jt(o){throw new Pt(o)}function S(o,t){return y(function(e,r){var n=0;e.subscribe(f(r,function(i){r.next(o.call(t,i,n++))}))})}var At=Array.isArray;function Mt(o,t){return At(t)?o.apply(void 0,L([],D(t))):o(t)}function me(o){return S(function(t){return Mt(o,t)})}var Dt=Array.isArray,Lt=Object.getPrototypeOf,_t=Object.prototype,zt=Object.keys;function Ve(o){if(o.length===1){var t=o[0];if(Dt(t))return{args:t,keys:null};if(Rt(t)){var e=zt(t);return{args:e.map(function(r){return t[r]}),keys:e}}}return{args:o,keys:null}}function Rt(o){return o&&typeof o=="object"&&Lt(o)===_t}function Ue(o,t){return o.reduce(function(e,r,n){return e[r]=t[n],e},{})}function $t(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];var e=Q(o),r=ee(o),n=Ve(o),i=n.args,a=n.keys;if(i.length===0)return x([],e);var s=new w(Bt(i,e,a?function(c){return Ue(a,c)}:q));return r?s.pipe(me(r)):s}function Bt(o,t,e){return e===void 0&&(e=q),function(r){ge(t,function(){for(var n=o.length,i=new Array(n),a=n,s=n,c=function(u){ge(t,function(){var d=x(o[u],t),m=!1;d.subscribe(f(r,function(p){i[u]=p,m||(m=!0,s--),s||r.next(e(i.slice()))},function(){--a||r.complete()}))},r)},l=0;l<n;l++)c(l)},r)}}function ge(o,t,e){o?M(e,o,t):t()}function Vt(o,t,e,r,n,i,a,s){var c=[],l=0,u=0,d=!1,m=function(){d&&!c.length&&!l&&t.complete()},p=function(v){return l<r?b(v):c.push(v)},b=function(v){l++;var k=!1;E(e(v,u++)).subscribe(f(t,function(T){t.next(T)},function(){k=!0},void 0,function(){if(k)try{l--;for(var T=function(){var _=c.shift();a||b(_)};c.length&&l<r;)T();m()}catch(_){t.error(_)}}))};return o.subscribe(f(t,p,function(){d=!0,m()})),function(){}}function B(o,t,e){return e===void 0&&(e=1/0),h(t)?B(function(r,n){return S(function(i,a){return t(r,i,n,a)})(E(o(r,n)))},e):(typeof t=="number"&&(e=t),y(function(r,n){return Vt(r,n,o,e)}))}function Fe(o){return o===void 0&&(o=1/0),B(q,o)}function Ut(){return Fe(1)}function ie(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];return Ut()(x(o,Q(o)))}function Ft(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];var e=ee(o),r=Ve(o),n=r.args,i=r.keys,a=new w(function(s){var c=n.length;if(!c){s.complete();return}for(var l=new Array(c),u=c,d=c,m=function(b){var v=!1;E(n[b]).subscribe(f(s,function(k){v||(v=!0,d--),l[b]=k},function(){return u--},void 0,function(){(!u||!v)&&(d||s.next(i?Ue(i,l):l),s.complete())}))},p=0;p<c;p++)m(p)});return e?a.pipe(me(e)):a}var Nt=["addListener","removeListener"],Wt=["addEventListener","removeEventListener"],Ht=["on","off"];function z(o,t,e,r){if(h(e)&&(r=e,e=void 0),r)return z(o,t,e).pipe(me(r));var n=D(Jt(o)?Wt.map(function(s){return function(c){return o[s](t,c,e)}}):Qt(o)?Nt.map(Se(o,t)):Yt(o)?Ht.map(Se(o,t)):[],2),i=n[0],a=n[1];if(!i&&de(o))return B(function(s){return z(s,t,e)})(E(o));if(!i)throw new TypeError("Invalid event target");return new w(function(s){var c=function(){for(var l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];return s.next(1<l.length?l:l[0])};return i(c),function(){return a(c)}})}function Se(o,t){return function(e){return function(r){return o[e](t,r)}}}function Qt(o){return h(o.addListener)&&h(o.removeListener)}function Yt(o){return h(o.on)&&h(o.off)}function Jt(o){return h(o.addEventListener)&&h(o.removeEventListener)}function g(o,t,e){o===void 0&&(o=0),e===void 0&&(e=mt);var r=-1;return t!=null&&(Oe(t)?e=t:r=t),new w(function(n){var i=Be(o)?+o-e.now():o;i<0&&(i=0);var a=0;return e.schedule(function(){n.closed||(n.next(a++),0<=r?this.schedule(void 0,r):n.complete())},i)})}function P(o,t){return o===void 0&&(o=0),t===void 0&&(t=N),o<0&&(o=0),g(o,o,t)}function Gt(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];var e=Q(o),r=ft(o,1/0),n=o;return n.length?n.length===1?E(n[0]):Fe(r)(x(n,e)):R}var Kt=Array.isArray;function Ne(o){return o.length===1&&Kt(o[0])?o[0]:o}function Zt(o,t){return y(function(e,r){var n=0;e.subscribe(f(r,function(i){return o.call(t,i,n++)&&r.next(i)}))})}function Xt(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];return o=Ne(o),o.length===1?E(o[0]):new w(eo(o))}function eo(o){return function(t){for(var e=[],r=function(i){e.push(E(o[i]).subscribe(f(t,function(a){if(e){for(var s=0;s<e.length;s++)s!==i&&e[s].unsubscribe();e=null}t.next(a)})))},n=0;e&&!t.closed&&n<o.length;n++)r(n)}}function to(o,t,e){var r=t+o;return new w(function(n){for(var i=o;i<r&&!n.closed;)n.next(i++);n.complete()})}function oo(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];var e=ee(o),r=Ne(o);return r.length?new w(function(n){var i=r.map(function(){return[]}),a=r.map(function(){return!1});n.add(function(){i=a=null});for(var s=function(l){E(r[l]).subscribe(f(n,function(u){if(i[l].push(u),i.every(function(m){return m.length})){var d=i.map(function(m){return m.shift()});n.next(e?e.apply(void 0,L([],D(d))):d),i.some(function(m,p){return!m.length&&a[p]})&&n.complete()}},function(){a[l]=!0,!i[l].length&&n.complete()}))},c=0;!n.closed&&c<r.length;c++)s(c);return function(){i=a=null}}):R}function ae(o){return y(function(t,e){var r=null,n=!1,i;r=t.subscribe(f(e,void 0,void 0,function(a){i=E(o(a,ae(o)(t))),r?(r.unsubscribe(),r=null,i.subscribe(e)):n=!0})),n&&(r.unsubscribe(),r=null,i.subscribe(e))})}function ro(o,t,e,r,n){return function(i,a){var s=e,c=t,l=0;i.subscribe(f(a,function(u){var d=l++;c=s?o(c,u,d):(s=!0,u),a.next(c)},n))}}function I(o,t){return h(t)?B(o,t,1):B(o,1)}function no(o,t){return t===void 0&&(t=N),y(function(e,r){var n=null,i=null,a=null,s=function(){if(n){n.unsubscribe(),n=null;var l=i;i=null,r.next(l)}};function c(){var l=a+o,u=t.now();if(u<l){n=this.schedule(void 0,l-u),r.add(n);return}s()}e.subscribe(f(r,function(l){i=l,a=t.now(),n||(n=t.schedule(c,o),r.add(n))},function(){s(),r.complete()},void 0,function(){i=n=null}))})}function Z(o){return y(function(t,e){var r=!1;t.subscribe(f(e,function(n){r=!0,e.next(n)},function(){r||e.next(o),e.complete()}))})}function O(o){return o<=0?function(){return R}:y(function(t,e){var r=0;t.subscribe(f(e,function(n){++r<=o&&(e.next(n),o<=r&&e.complete())}))})}function A(o){return S(function(){return o})}function io(o,t){return B(function(e,r){return E(o(e,r)).pipe(O(1),A(e))})}function V(o,t){t===void 0&&(t=N);var e=g(o,t);return io(function(){return e})}function ao(o,t){return y(function(e,r){var n=new Set;e.subscribe(f(r,function(i){var a=o?o(i):i;n.has(a)||(n.add(a),r.next(i))})),t&&E(t).subscribe(f(r,function(){return n.clear()},F))})}function so(o,t){return t===void 0&&(t=q),o=o??co,y(function(e,r){var n,i=!0;e.subscribe(f(r,function(a){var s=t(a);(i||!o(n,s))&&(i=!1,n=s,r.next(a))}))})}function co(o,t){return o===t}function We(o){return o===void 0&&(o=lo),y(function(t,e){var r=!1;t.subscribe(f(e,function(n){r=!0,e.next(n)},function(){return r?e.complete():e.error(o())}))})}function lo(){return new pe}function xe(o,t){return y(function(e,r){var n=0;e.subscribe(f(r,function(i){o.call(t,i,n++,e)||(r.next(!1),r.complete())},function(){r.next(!0),r.complete()}))})}function uo(o){return y(function(t,e){try{t.subscribe(e)}finally{e.add(o)}})}function po(o,t){return y(mo(o,t,"value"))}function mo(o,t,e){return function(r,n){var i=0;r.subscribe(f(n,function(a){var s=i++;o.call(t,a,s,r)&&(n.next(a),n.complete())},function(){n.next(void 0),n.complete()}))}}function fo(o,t){var e=arguments.length>=2;return function(r){return r.pipe(q,O(1),e?Z(t):We(function(){return new pe}))}}function we(){return y(function(o,t){o.subscribe(f(t,function(){t.next(!1),t.complete()},function(){t.next(!0),t.complete()}))})}function vo(o){return o<=0?function(){return R}:y(function(t,e){var r=[];t.subscribe(f(e,function(n){r.push(n),o<r.length&&r.shift()},function(){var n,i;try{for(var a=$(r),s=a.next();!s.done;s=a.next()){var c=s.value;e.next(c)}}catch(l){n={error:l}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}e.complete()},void 0,function(){r=null}))})}function bo(o,t){var e=arguments.length>=2;return function(r){return r.pipe(q,vo(1),e?Z(t):We(function(){return new pe}))}}function ho(){return y(function(o,t){var e,r=!1;o.subscribe(f(t,function(n){var i=e;e=n,r&&t.next([i,n]),r=!0}))})}function yo(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];var e=o.length;if(e===0)throw new Error("list of properties cannot be empty.");return S(function(r){for(var n=r,i=0;i<e;i++){var a=n?.[o[i]];if(typeof a<"u")n=a;else return}return n})}function go(o){var t;t={count:o};var e=t.count,r=e===void 0?1/0:e,n=t.delay,i=t.resetOnSuccess,a=i===void 0?!1:i;return r<=0?q:y(function(s,c){var l=0,u,d=function(){var m=!1;u=s.subscribe(f(c,function(p){a&&(l=0),c.next(p)},void 0,function(p){if(l++<r){var b=function(){u?(u.unsubscribe(),u=null,d()):m=!0};if(n!=null){var v=typeof n=="number"?g(n):E(n(p,l)),k=f(c,function(){k.unsubscribe(),b()},function(){c.complete()});v.subscribe(k)}else b()}else c.error(p)})),m&&(u.unsubscribe(),u=null,d())};d()})}function So(o,t){return y(ro(o,t,arguments.length>=2,!0))}function xo(o){return y(function(t,e){var r=!1,n=f(e,function(){n?.unsubscribe(),r=!0},F);E(o).subscribe(n),t.subscribe(f(e,function(i){return r&&e.next(i)}))})}function wo(o){return y(function(t,e){var r=!1,n=0;t.subscribe(f(e,function(i){return(r||(r=!o(i,n++)))&&e.next(i)}))})}function oe(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];var e=Q(o);return y(function(r,n){(e?ie(o,r,e):ie(o,r)).subscribe(n)})}function Eo(o,t){return y(function(e,r){var n=null,i=0,a=!1,s=function(){return a&&!n&&r.complete()};e.subscribe(f(r,function(c){n?.unsubscribe();var l=0,u=i++;E(o(c,u)).subscribe(n=f(r,function(d){return r.next(t?t(c,d,u,l++):d)},function(){n=null,s()}))},function(){a=!0,s()}))})}function ko(o){return y(function(t,e){E(o).subscribe(f(e,function(){return e.complete()},F)),!e.closed&&t.subscribe(e)})}function To(o,t){return t===void 0&&(t=!1),y(function(e,r){var n=0;e.subscribe(f(r,function(i){var a=o(i,n++);(a||t)&&r.next(i),!a&&r.complete()}))})}function J(o,t,e){var r=h(o)||t||e?{next:o,error:t,complete:e}:o;return r?y(function(n,i){var a;(a=r.subscribe)===null||a===void 0||a.call(r);var s=!0;n.subscribe(f(i,function(c){var l;(l=r.next)===null||l===void 0||l.call(r,c),i.next(c)},function(){var c;s=!1,(c=r.complete)===null||c===void 0||c.call(r),i.complete()},function(c){var l;s=!1,(l=r.error)===null||l===void 0||l.call(r,c),i.error(c)},function(){var c,l;s&&((c=r.unsubscribe)===null||c===void 0||c.call(r)),(l=r.finalize)===null||l===void 0||l.call(r)}))}):q}function Io(o,t){return y(function(e,r){var n=t??{},i=n.leading,a=i===void 0?!0:i,s=n.trailing,c=s===void 0?!1:s,l=!1,u=null,d=null,m=!1,p=function(){d?.unsubscribe(),d=null,c&&(k(),m&&r.complete())},b=function(){d=null,m&&r.complete()},v=function(T){return d=E(o(T)).subscribe(f(r,p,b))},k=function(){if(l){l=!1;var T=u;u=null,r.next(T),!m&&v(T)}};e.subscribe(f(r,function(T){l=!0,u=T,!(d&&!d.closed)&&(a?k():v(T))},function(){m=!0,!(c&&l&&d&&!d.closed)&&r.complete()}))})}function Oo(o,t,e){t===void 0&&(t=N);var r=g(o,t);return Io(function(){return r},e)}function Co(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];var e=ee(o);return y(function(r,n){for(var i=o.length,a=new Array(i),s=o.map(function(){return!1}),c=!1,l=function(d){E(o[d]).subscribe(f(n,function(m){a[d]=m,!c&&!s[d]&&(s[d]=!0,(c=s.every(q))&&(s=null))},F))},u=0;u<i;u++)l(u);r.subscribe(f(n,function(d){if(c){var m=L([d],D(a));n.next(e?e.apply(void 0,L([],D(m))):m)}}))})}class Po{constructor(){this.examples=[],this.currentSubscriptions=[],this.currentCategory="",this.initializeExamples(),this.setupNavigation(),this.setupThemeToggle(),this.initializeTheme(),this.showCategory("basic")}initializeExamples(){this.examples=[{id:"observable-basic",title:"Observable Básico",description:"Creación y suscripción a un Observable simple",explanation:`Un Observable es como un "canal de datos" que puede emitir valores a lo largo del tiempo. 

🔹 **¿Qué hace?** Creamos un Observable que emite dos valores ('Hola' y 'Mundo') y luego se completa.

🔹 **¿Cómo funciona?** 
- Usamos 'subscriber.next()' para enviar valores
- Usamos 'subscriber.complete()' para indicar que terminamos
- Nos suscribimos para recibir los valores

🔹 **¿Por qué es útil?** Los Observables nos permiten manejar datos asincrónicos de forma elegante, como eventos del usuario, respuestas de APIs, etc.`,category:"basic",code:`const observable = new Observable(subscriber => {
  subscriber.next('Hola');
  subscriber.next('Mundo');
  subscriber.complete();
});

observable.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completado')
});`,demo:()=>this.demoObservableBasic()},{id:"subject-basic",title:"Subject",description:"Subject como Observable y Observer",explanation:`Un Subject es especial: ¡es Observable Y Observer al mismo tiempo!

🔹 **¿Qué hace?** Permite que múltiples suscriptores reciban los mismos valores al mismo tiempo.

🔹 **¿Cómo funciona?**
- Varios observadores se suscriben al mismo Subject
- Cuando emitimos un valor con 'next()', TODOS los suscriptores lo reciben
- Es como un "altavoz" que transmite a toda una audiencia

🔹 **¿Por qué es útil?** Perfecto para compartir datos entre diferentes partes de tu aplicación, como notificaciones o estados globales.`,category:"basic",code:`const subject = new Subject();

subject.subscribe(value => console.log('Suscriptor 1:', value));
subject.subscribe(value => console.log('Suscriptor 2:', value));

subject.next('Mensaje 1');
subject.next('Mensaje 2');`,demo:()=>this.demoSubject()},{id:"interval-observable",title:"Interval Observable",description:"Observable que emite valores cada cierto tiempo",explanation:`El operador 'interval' es como un cronómetro que cuenta números automáticamente.

🔹 **¿Qué hace?** Emite números secuenciales (0, 1, 2, 3...) cada cierto tiempo.

🔹 **¿Cómo funciona?**
- 'interval(800)' emite un número cada 800 milisegundos
- 'take(5)' limita la emisión a solo 5 valores
- Los números empiezan desde 0

🔹 **¿Por qué es útil?** Ideal para crear temporizadores, animaciones, polling de APIs, o cualquier tarea que necesite repetirse periódicamente.`,category:"basic",code:`const source = interval(800);
const subscription = source.pipe(
  take(5)
).subscribe(
  value => console.log('Valor:', value)
);`,demo:()=>this.demoInterval()},{id:"behaviorsubject-basic",title:"BehaviorSubject",description:"Subject que recuerda el último valor emitido",explanation:`BehaviorSubject es como un "buzón con memoria": siempre tiene un valor disponible para nuevos suscriptores.

🔹 **¿Qué hace?** Es un Subject que almacena el último valor emitido y lo entrega inmediatamente a nuevos suscriptores.

🔹 **¿Cómo funciona?**
- Requiere un valor inicial
- Nuevos suscriptores reciben inmediatamente el último valor
- Siempre tiene un valor "actual" disponible
- Perfecto para estados que necesitan persistir

🔹 **¿Por qué es útil?** Ideal para estados de aplicación, configuraciones, datos que los componentes necesitan inmediatamente al suscribirse.`,category:"basic",code:`const currentUser = new BehaviorSubject('Invitado');

// Suscriptor temprano recibe el valor inicial
currentUser.subscribe(user => console.log('Sub1:', user));

currentUser.next('Ana');
currentUser.next('Luis');

// Suscriptor tardío recibe el último valor inmediatamente
currentUser.subscribe(user => console.log('Sub2:', user));`,demo:()=>this.demoBehaviorSubject()},{id:"replaysubject-basic",title:"ReplaySubject",description:"Subject que reproduce los últimos N valores",explanation:`ReplaySubject es como una "grabadora": guarda los últimos valores y los reproduce para nuevos suscriptores.

🔹 **¿Qué hace?** Almacena un número específico de valores anteriores y los entrega a nuevos suscriptores.

🔹 **¿Cómo funciona?**
- Configuras cuántos valores quieres recordar (buffer)
- Nuevos suscriptores reciben todos los valores del buffer
- Es como "ponerse al día" con lo que pasó antes
- Útil cuando necesitas historial

🔹 **¿Por qué es útil?** Perfecto para logs, historial de acciones, cuando nuevos componentes necesitan contexto de lo que pasó antes.`,category:"basic",code:`const history = new ReplaySubject(3); // Recuerda últimos 3

history.next('Acción 1');
history.next('Acción 2');
history.next('Acción 3');
history.next('Acción 4');

// Nuevo suscriptor recibe las últimas 3 acciones
history.subscribe(action => console.log('Historial:', action));`,demo:()=>this.demoReplaySubject()},{id:"asyncsubject-basic",title:"AsyncSubject",description:"Subject que solo emite el último valor al completarse",explanation:`AsyncSubject es como "esperar al final de la película": solo te dice el resultado final cuando todo termina.

🔹 **¿Qué hace?** Solo emite el último valor cuando el Observable se completa.

🔹 **¿Cómo funciona?**
- Recibe múltiples valores pero no los emite
- Solo cuando se llama a complete(), emite el último valor
- Si no se completa, nunca emite nada
- Es como una "promesa" que se resuelve al final

🔹 **¿Por qué es útil?** Ideal para operaciones que solo importa el resultado final: cálculos complejos, procesos que deben terminar completamente.`,category:"basic",code:`const finalResult = new AsyncSubject();

finalResult.subscribe(value => console.log('Resultado:', value));

finalResult.next('Procesando...');
finalResult.next('Casi listo...');
finalResult.next('¡Completado!');
finalResult.complete(); // Solo ahora emite '¡Completado!'`,demo:()=>this.demoAsyncSubject()},{id:"of-observable",title:"Observable Of",description:"Crea un Observable que emite valores específicos",explanation:`El operador 'of' es como una "lista de reproducción": emite los valores que le das, uno tras otro.

🔹 **¿Qué hace?** Crea un Observable que emite una secuencia específica de valores y luego se completa.

🔹 **¿Cómo funciona?**
- Le pasas los valores que quieres emitir
- Los emite sincrónicamente uno tras otro
- Se completa automáticamente después del último valor
- Es la forma más simple de crear un Observable con datos conocidos

🔹 **¿Por qué es útil?** Perfecto para testing, datos estáticos, transformar arrays en streams, crear ejemplos rápidos.`,category:"basic",code:`const fruits = of('🍎', '🍌', '🍊', '🍇');

fruits.subscribe({
  next: fruit => console.log('Fruta:', fruit),
  complete: () => console.log('¡No más frutas!')
});`,demo:()=>this.demoOf()},{id:"from-observable",title:"Observable From",description:"Convierte arrays, promesas o iterables en Observables",explanation:`El operador 'from' es como un "convertidor universal": toma diferentes tipos de datos y los convierte en Observables.

🔹 **¿Qué hace?** Convierte arrays, promesas, iterables o cualquier "observable-like" en un Observable real.

🔹 **¿Cómo funciona?**
- Arrays: emite cada elemento por separado
- Promesas: emite el valor resuelto
- Strings: emite cada carácter
- Es muy flexible y potente

🔹 **¿Por qué es útil?** Esencial para integrar código existente con RxJS, convertir APIs que devuelven promesas, procesar arrays de forma reactiva.`,category:"basic",code:`const numbers = from([10, 20, 30, 40]);
const promise = from(Promise.resolve('¡Éxito!'));
const text = from('HOLA');

numbers.subscribe(num => console.log('Número:', num));
promise.subscribe(result => console.log('Promesa:', result));
text.subscribe(char => console.log('Letra:', char));`,demo:()=>this.demoFrom()},{id:"range-observable",title:"Observable Range",description:"Genera una secuencia de números",explanation:`Range es como un "contador automático": genera una secuencia de números consecutivos.

🔹 **¿Qué hace?** Emite una secuencia de números enteros consecutivos.

🔹 **¿Cómo funciona?**
- Le das un número inicial y cuántos números quieres
- Genera la secuencia automáticamente
- Emite todos los números sincrónicamente
- Se completa cuando termina la secuencia

🔹 **¿Por qué es útil?** Perfecto para generar IDs, crear loops reactivos, testing con secuencias predecibles, inicializar arrays.`,category:"basic",code:`const sequence = range(1, 5); // Del 1 al 5

sequence.subscribe({
  next: num => console.log('Número:', num),
  complete: () => console.log('Secuencia completa')
});`,demo:()=>this.demoRange()},{id:"timer-observable",title:"Observable Timer",description:"Emite después de un delay, opcionalmente de forma periódica",explanation:`Timer es como un "despertador programable": puede emitir una vez después de un tiempo, o repetirse periódicamente.

🔹 **¿Qué hace?** Emite un valor después de un delay especificado, y opcionalmente continúa emitiendo periódicamente.

🔹 **¿Cómo funciona?**
- Con un parámetro: emite una vez después del delay
- Con dos parámetros: delay inicial + intervalo de repetición
- Más flexible que interval porque puedes controlar el primer delay

🔹 **¿Por qué es útil?** Ideal para delays, timeouts, polling con delay inicial, animaciones con timing específico.`,category:"basic",code:`// Emite una vez después de 2 segundos
const singleTimer = timer(2000);

// Emite después de 1s, luego cada 1s
const periodicTimer = timer(1000, 1000).pipe(take(3));

singleTimer.subscribe(() => console.log('¡Tiempo!'));
periodicTimer.subscribe(x => console.log('Tick:', x));`,demo:()=>this.demoTimer()},{id:"empty-never-error",title:"EMPTY, NEVER y throwError",description:"Observables especiales para casos específicos",explanation:`Estos son Observables especiales para situaciones específicas, como herramientas de utilidad.

🔹 **EMPTY**: Se completa inmediatamente sin emitir valores
- Como un "sobre vacío"
- Útil para casos donde no hay datos que procesar

🔹 **NEVER**: Nunca emite ni se completa
- Como "esperar para siempre"
- Útil para testing o placeholders

🔹 **throwError**: Emite un error inmediatamente
- Como "lanzar una excepción"
- Útil para simular errores o manejar casos de fallo

🔹 **¿Por qué son útiles?** Esenciales para testing, manejo de casos edge, control de flujo especial.`,category:"basic",code:`import { EMPTY, NEVER, throwError } from 'rxjs';

// EMPTY: se completa inmediatamente
EMPTY.subscribe({
  next: () => console.log('Nunca se ejecuta'),
  complete: () => console.log('EMPTY completado')
});

// throwError: emite error inmediatamente
throwError('¡Algo salió mal!').subscribe({
  error: err => console.log('Error:', err)
});`,demo:()=>this.demoSpecialObservables()},{id:"map-operator",title:"Operador Map",description:"Transforma cada valor emitido por el Observable",explanation:`El operador 'map' es como una fábrica que transforma cada elemento que pasa por ella.

🔹 **¿Qué hace?** Toma cada valor del Observable y lo transforma usando una función.

🔹 **¿Cómo funciona?**
- Primer 'map': convierte 0→1, 1→2, 2→3, etc.
- Segundo 'map': duplica cada número (1→2, 2→4, 3→6, etc.)
- Cada valor pasa por ambas transformaciones en secuencia

🔹 **¿Por qué es útil?** Esencial para transformar datos: convertir respuestas de API, formatear fechas, calcular valores derivados, etc.`,category:"transformation",code:`const source = interval(300).pipe(
  map(x => x + 1),
  take(5)
);
const doubled = source.pipe(
  map(x => x * 2)
);

doubled.subscribe(value => console.log(value));`,demo:()=>this.demoMap()},{id:"mapTo-operator",title:"Operador MapTo",description:"Transforma todos los valores a un valor constante",explanation:`MapTo es como un sello que marca todo con el mismo valor, sin importar lo que reciba.

🔹 **¿Qué hace?** Convierte TODOS los valores emitidos al mismo valor constante.

🔹 **¿Cómo funciona?**
- Recibe cualquier valor (números, strings, objetos)
- Los ignora completamente
- Siempre emite el mismo valor predefinido

🔹 **¿Por qué es útil?** Perfecto para convertir eventos a acciones (clicks → 'CLICKED'), resetear valores, o crear señales constantes.`,category:"transformation",code:`const clicks = fromEvent(button, 'click');
const clickSignal = clicks.pipe(
  mapTo('¡Click detectado!')
);

clickSignal.subscribe(value => console.log(value));`,demo:()=>this.demoMapTo()},{id:"pluck-operator",title:"Operador Pluck",description:"Extrae una propiedad específica de objetos",explanation:`Pluck es como un extractor que saca solo la información que necesitas de objetos complejos.

🔹 **¿Qué hace?** Extrae una propiedad específica de cada objeto emitido.

🔹 **¿Cómo funciona?**
- Recibe objetos con múltiples propiedades
- Extrae solo la propiedad que especifiques
- Emite únicamente esos valores extraídos

🔹 **¿Por qué es útil?** Ideal para APIs que devuelven objetos complejos pero solo necesitas ciertos campos, como extraer nombres de usuarios, IDs, etc.`,category:"transformation",code:`const users = of(
  { id: 1, name: 'Ana', age: 25 },
  { id: 2, name: 'Luis', age: 30 },
  { id: 3, name: 'María', age: 28 }
);

const names = users.pipe(pluck('name'));
names.subscribe(name => console.log(name));`,demo:()=>this.demoPluck()},{id:"concatMap-operator",title:"Operador ConcatMap",description:"Mapea a Observables internos y los concatena en orden",explanation:`ConcatMap es como una fila ordenada: procesa cada elemento completamente antes de pasar al siguiente.

🔹 **¿Qué hace?** Transforma cada valor en un Observable interno y los ejecuta uno tras otro, en orden.

🔹 **¿Cómo funciona?**
- Recibe un valor y crea un Observable interno
- Espera a que ese Observable se complete
- Solo entonces procesa el siguiente valor
- Mantiene el orden original

🔹 **¿Por qué es útil?** Perfecto cuando el orden importa: procesar archivos secuencialmente, operaciones que deben ser ordenadas, etc.`,category:"transformation",code:`const numbers = from([1, 2, 3]);
const delayed = numbers.pipe(
  concatMap(x => 
    timer(1000).pipe(map(() => x * 10))
  )
);

delayed.subscribe(value => console.log(value));`,demo:()=>this.demoConcatMap()},{id:"mergeMap-operator",title:"Operador MergeMap",description:"Mapea a Observables internos y los ejecuta en paralelo",explanation:`MergeMap es como un chef con múltiples sartenes: cocina todo al mismo tiempo y sirve lo que esté listo.

🔹 **¿Qué hace?** Transforma cada valor en un Observable interno y los ejecuta todos en paralelo.

🔹 **¿Cómo funciona?**
- Cada valor crea su propio Observable interno
- Todos los Observables internos se ejecutan simultáneamente
- Los resultados se emiten tan pronto como estén listos
- El orden de salida puede diferir del orden de entrada

🔹 **¿Por qué es útil?** Ideal para operaciones paralelas: múltiples llamadas HTTP, procesamiento independiente, máximo rendimiento.`,category:"transformation",code:`const numbers = from([1, 2, 3]);
const parallel = numbers.pipe(
  mergeMap(x => 
    timer(Math.random() * 2000).pipe(map(() => x * 10))
  )
);

parallel.subscribe(value => console.log(value));`,demo:()=>this.demoMergeMap()},{id:"filter-operator",title:"Operador Filter",description:"Filtra valores basado en una condición",explanation:`El operador 'filter' actúa como un portero que solo deja pasar ciertos valores.

🔹 **¿Qué hace?** Examina cada valor y solo deja pasar los que cumplen una condición.

🔹 **¿Cómo funciona?**
- Recibe los números: 1, 2, 3, 4, 5, 6
- La condición 'x % 2 === 0' verifica si es par
- Solo pasan: 2, 4, 6 (los números pares)

🔹 **¿Por qué es útil?** Perfecto para filtrar listas, validar datos, mostrar solo elementos relevantes, etc.`,category:"filtering",code:`const source = from([1, 2, 3, 4, 5, 6]).pipe(
  concatMap(x => timer(400).pipe(map(() => x)))
);
const evenNumbers = source.pipe(
  filter(x => x % 2 === 0)
);

evenNumbers.subscribe(value => console.log(value));`,demo:()=>this.demoFilter()},{id:"debounce-operator",title:"Operador DebounceTime",description:"Retrasa la emisión hasta que pase un tiempo sin nuevos valores",explanation:`DebounceTime es como esperar a que alguien termine de hablar antes de responder.

🔹 **¿Qué hace?** Espera un tiempo de "silencio" antes de emitir el último valor recibido.

🔹 **¿Cómo funciona?**
- Cada vez que escribes, se reinicia el temporizador de 300ms
- Solo cuando dejas de escribir por 300ms, se emite el valor
- 'distinctUntilChanged' evita emitir el mismo valor dos veces

🔹 **¿Por qué es útil?** Esencial para búsquedas en tiempo real, validación de formularios, evitar llamadas excesivas a APIs.`,category:"filtering",code:`const searchInput = fromEvent(input, 'input');
const debouncedSearch = searchInput.pipe(
  debounceTime(300),
  map(event => event.target.value)
);

debouncedSearch.subscribe(value => console.log(value));`,demo:()=>this.demoDebounce()},{id:"throttle-operator",title:"Operador ThrottleTime",description:"Limita la frecuencia de emisiones ignorando valores por un tiempo",explanation:`ThrottleTime es como un "control de velocidad": deja pasar el primer valor y luego ignora los siguientes por un tiempo.

🔹 **¿Qué hace?** Emite el primer valor y luego ignora todos los valores siguientes durante un período específico.

🔹 **¿Cómo funciona?**
- Recibe un valor → lo emite inmediatamente
- Inicia un período de "silencio" (throttle)
- Ignora todos los valores durante ese período
- Después del período, vuelve a estar listo para el siguiente valor

🔹 **¿Por qué es útil?** Perfecto para botones (evitar doble clic), scroll events, resize events, cualquier evento que se dispare muy frecuentemente.`,category:"filtering",code:`const clicks = fromEvent(button, 'click');
const throttledClicks = clicks.pipe(
  throttleTime(1000) // Ignora clicks por 1 segundo después de cada click
);

throttledClicks.subscribe(() => console.log('Click válido'));`,demo:()=>this.demoThrottle()},{id:"distinct-operator",title:"Operador Distinct",description:"Filtra valores duplicados basado en todo el historial",explanation:`Distinct es como un "detector de repeticiones": recuerda TODOS los valores que ha visto y filtra duplicados.

🔹 **¿Qué hace?** Mantiene un registro de todos los valores emitidos y solo deja pasar valores únicos.

🔹 **¿Cómo funciona?**
- Mantiene una "lista negra" de valores ya vistos
- Cada nuevo valor se compara con toda la lista
- Solo pasan los valores que nunca se han visto antes
- La memoria crece con cada valor único

🔹 **¿Por qué es útil?** Ideal para listas de elementos únicos, evitar procesamiento duplicado, filtrar IDs repetidos.`,category:"filtering",code:`const values = of(1, 2, 2, 3, 1, 4, 3, 5);
const uniqueValues = values.pipe(
  distinct()
);

uniqueValues.subscribe(value => console.log('Único:', value));
// Emite: 1, 2, 3, 4, 5`,demo:()=>this.demoDistinct()},{id:"first-last-operator",title:"Operadores First y Last",description:"Toma solo el primer o último valor",explanation:`First y Last son como "tomar la primera/última carta del mazo": se enfocan en posiciones específicas.

🔹 **First**: Toma solo el primer valor emitido y se completa
- Como "el primero en llegar gana"
- Útil cuando solo necesitas el primer resultado
- Se puede combinar con condiciones

🔹 **Last**: Espera a que el Observable se complete y emite solo el último valor
- Como "esperar al final para ver quién ganó"
- Útil para obtener el resultado final

🔹 **¿Por qué son útiles?** Perfecto para obtener el primer/último elemento de una secuencia, resultados únicos, validaciones.`,category:"filtering",code:`const numbers = of(1, 2, 3, 4, 5);

const firstNumber = numbers.pipe(first());
const lastNumber = numbers.pipe(last());

firstNumber.subscribe(x => console.log('Primero:', x));
lastNumber.subscribe(x => console.log('Último:', x));`,demo:()=>this.demoFirstLast()},{id:"take-skip-while-operator",title:"TakeWhile y SkipWhile",description:"Toma o salta valores mientras se cumple una condición",explanation:`TakeWhile y SkipWhile son como "semáforos condicionales": controlan el flujo basado en condiciones dinámicas.

🔹 **TakeWhile**: Toma valores MIENTRAS la condición sea verdadera
- Como "sigue adelante mientras el semáforo esté verde"
- Se detiene en cuanto la condición es falsa
- No vuelve a evaluar después de detenerse

🔹 **SkipWhile**: Ignora valores MIENTRAS la condición sea verdadera
- Como "espera hasta que el semáforo cambie"
- Una vez que la condición es falsa, deja pasar todo lo demás

🔹 **¿Por qué son útiles?** Perfecto para procesar datos hasta cierto punto, filtros dinámicos, validaciones progresivas.`,category:"filtering",code:`const numbers = of(1, 2, 3, 4, 5, 6, 7, 8);

const takeWhileSmall = numbers.pipe(
  takeWhile(x => x < 5)
);

const skipWhileSmall = numbers.pipe(
  skipWhile(x => x < 5)
);

takeWhileSmall.subscribe(x => console.log('Take:', x)); // 1,2,3,4
skipWhileSmall.subscribe(x => console.log('Skip:', x)); // 5,6,7,8`,demo:()=>this.demoTakeSkipWhile()},{id:"take-skip-until-operator",title:"TakeUntil y SkipUntil",description:"Controla el flujo basado en otro Observable",explanation:`TakeUntil y SkipUntil son como "interruptores externos": otro Observable controla cuándo actuar.

🔹 **TakeUntil**: Toma valores HASTA que otro Observable emita
- Como "sigue hasta que suene la alarma"
- Muy útil para cancelar operaciones
- El Observable "notificador" actúa como un interruptor

🔹 **SkipUntil**: Ignora valores HASTA que otro Observable emita
- Como "espera la señal de inicio"
- Una vez que el notificador emite, deja pasar todo

🔹 **¿Por qué son útiles?** Esencial para cancelaciones, timeouts, sincronización entre streams, cleanup automático.`,category:"filtering",code:`const source = interval(500);
const stopSignal = timer(3000);
const startSignal = timer(1500);

const takeUntilStop = source.pipe(
  takeUntil(stopSignal)
);

const skipUntilStart = source.pipe(
  skipUntil(startSignal),
  take(3)
);

takeUntilStop.subscribe(x => console.log('Until stop:', x));
skipUntilStart.subscribe(x => console.log('Until start:', x));`,demo:()=>this.demoTakeSkipUntil()},{id:"merge-operator",title:"Operador Merge",description:"Combina múltiples Observables en uno solo",explanation:`Merge es como mezclar dos ríos en uno solo, manteniendo el orden temporal.

🔹 **¿Qué hace?** Combina múltiples Observables emitiendo valores tan pronto como cualquiera de ellos los produzca.

🔹 **¿Cómo funciona?**
- Stream A emite cada 1000ms: A0, A1, A2
- Stream B emite cada 1500ms: B0, B1, B2
- El resultado mezcla ambos por orden de tiempo: A0, B0, A1, A2, B1, B2

🔹 **¿Por qué es útil?** Ideal para combinar eventos de diferentes fuentes: clics, teclado, notificaciones, etc.`,category:"combination",code:`const source1 = interval(1000).pipe(
  map(x => \`A\${x}\`), 
  take(3)
);
const source2 = interval(1500).pipe(
  map(x => \`B\${x}\`), 
  take(3)
);

const merged = merge(source1, source2);
merged.subscribe(value => console.log(value));`,demo:()=>this.demoMerge()},{id:"switchmap-operator",title:"Operador SwitchMap",description:"Cambia a un nuevo Observable interno cancelando el anterior",explanation:`SwitchMap es como cambiar de canal de TV: cancela lo anterior y se enfoca en lo nuevo.

🔹 **¿Qué hace?** Cada vez que llega un nuevo valor, cancela el Observable anterior y crea uno nuevo.

🔹 **¿Cómo funciona?**
- Cada clic inicia un contador del 0 al 4
- Si haces clic mientras cuenta, cancela el contador anterior
- Solo el último contador completará su secuencia

🔹 **¿Por qué es útil?** Perfecto para búsquedas autocomplete, cancelar peticiones HTTP anteriores, navegación dinámica.`,category:"transformation",code:`const clicks = fromEvent(button, 'click');
const result = clicks.pipe(
  switchMap(() => interval(500).pipe(take(5)))
);

result.subscribe(value => console.log(value));`,demo:()=>this.demoSwitchMap()},{id:"combinelatest-operator",title:"CombineLatest",description:"Combina los últimos valores de múltiples Observables",explanation:`CombineLatest es como una foto grupal: espera a que todos estén listos y luego captura el momento.

🔹 **¿Qué hace?** Combina los últimos valores de cada Observable cada vez que cualquiera emite.

🔹 **¿Cómo funciona?**
- NO emite hasta que TODOS los Observables hayan emitido al menos una vez
- Después, cada nueva emisión de cualquier stream genera una combinación
- Siempre usa el valor más reciente de cada stream

🔹 **¿Por qué es útil?** Ideal para formularios reactivos, configuraciones que dependen de múltiples inputs, dashboards en tiempo real.`,category:"combination",code:`const source1 = interval(1000).pipe(
  map(x => \`A\${x}\`), 
  take(4)
);
const source2 = interval(1500).pipe(
  map(x => \`B\${x}\`), 
  take(3)
);

const combined = combineLatest([source1, source2]);
combined.subscribe(([a, b]) => console.log([a, b]));`,demo:()=>this.demoCombineLatest()},{id:"zip-operator",title:"Operador Zip",description:"Combina valores por posición, como una cremallera",explanation:`Zip es como una "cremallera": combina valores de múltiples Observables por posición, esperando a que todos tengan un valor en esa posición.

🔹 **¿Qué hace?** Toma el primer valor de cada Observable, los combina, luego el segundo de cada uno, etc.

🔹 **¿Cómo funciona?**
- Espera a que TODOS los Observables tengan un valor en la misma posición
- Combina esos valores en un array o usando una función
- Si un Observable se completa, zip se completa (no espera más valores)
- Es sincronizado por posición, no por tiempo

🔹 **¿Por qué es útil?** Perfecto para combinar arrays paralelos, procesar datos relacionados por índice, sincronizar secuencias.`,category:"combination",code:`const letters = of('A', 'B', 'C', 'D');
const numbers = of(1, 2, 3);
const symbols = of('!', '@', '#');

const zipped = zip(letters, numbers, symbols);
zipped.subscribe(([letter, num, symbol]) => 
  console.log(\`\${letter}\${num}\${symbol}\`)
);
// Emite: A1!, B2@, C3# (se detiene porque numbers solo tiene 3)`,demo:()=>this.demoZip()},{id:"concat-operator",title:"Operador Concat",description:"Concatena Observables uno después del otro",explanation:`Concat es como una "fila ordenada": ejecuta Observables secuencialmente, esperando a que cada uno se complete antes del siguiente.

🔹 **¿Qué hace?** Suscribe al primer Observable, espera a que se complete, luego suscribe al segundo, y así sucesivamente.

🔹 **¿Cómo funciona?**
- Mantiene el orden estricto de los Observables
- NO hay paralelismo - todo es secuencial
- Si un Observable nunca se completa, los siguientes nunca se ejecutan
- Preserva el orden temporal dentro de cada Observable

🔹 **¿Por qué es útil?** Ideal para operaciones que deben ejecutarse en orden específico, workflows secuenciales, evitar condiciones de carrera.`,category:"combination",code:`const first = of('Primero').pipe(delay(1000));
const second = of('Segundo').pipe(delay(500));
const third = of('Tercero').pipe(delay(200));

const sequential = concat(first, second, third);
sequential.subscribe(value => console.log(value));
// Emite: "Primero" (después de 1s), "Segundo" (después de 0.5s más), "Tercero" (después de 0.2s más)`,demo:()=>this.demoConcat()},{id:"race-operator",title:"Operador Race",description:"El primer Observable que emite gana la carrera",explanation:`Race es como una "carrera": múltiples Observables compiten, y el primero que emite un valor gana y cancela a los demás.

🔹 **¿Qué hace?** Suscribe a múltiples Observables simultáneamente, pero solo el primero que emite continúa, los demás se cancelan.

🔹 **¿Cómo funciona?**
- Todos los Observables empiezan al mismo tiempo
- El primer valor emitido por cualquiera "gana"
- Los demás Observables se desuscriben automáticamente
- Solo un Observable puede "ganar" la carrera

🔹 **¿Por qué es útil?** Perfecto para timeouts, múltiples fuentes de datos (usar la más rápida), fallbacks, optimización de rendimiento.`,category:"combination",code:`const slow = timer(3000).pipe(mapTo('Lento'));
const fast = timer(1000).pipe(mapTo('Rápido'));
const medium = timer(2000).pipe(mapTo('Medio'));

const winner = race(slow, fast, medium);
winner.subscribe(result => console.log('Ganador:', result));
// Emite: "Ganador: Rápido" (después de 1s, cancela los otros)`,demo:()=>this.demoRace()},{id:"forkjoin-operator",title:"Operador ForkJoin",description:"Espera a que todos se completen y combina los últimos valores",explanation:`ForkJoin es como "esperar a que todo el equipo termine": ejecuta múltiples Observables en paralelo y emite solo cuando TODOS se han completado.

🔹 **¿Qué hace?** Ejecuta múltiples Observables en paralelo y emite un array con el último valor de cada uno cuando todos se completan.

🔹 **¿Cómo funciona?**
- Todos los Observables se ejecutan simultáneamente
- NO emite nada hasta que TODOS se completen
- Solo emite una vez con los valores finales
- Es como Promise.all() pero para Observables

🔹 **¿Por qué es útil?** Perfecto para múltiples llamadas HTTP paralelas, esperar múltiples operaciones asíncronas, obtener resultados finales.`,category:"combination",code:`const user = timer(1000).pipe(mapTo({name: 'Ana', id: 1}));
const posts = timer(1500).pipe(mapTo(['Post 1', 'Post 2']));
const comments = timer(800).pipe(mapTo(['Comentario 1']));

const allData = forkJoin({
  user: user,
  posts: posts,
  comments: comments
});

allData.subscribe(result => console.log('Todo listo:', result));
// Emite después de 1.5s: {user: {...}, posts: [...], comments: [...]}`,demo:()=>this.demoForkJoin()},{id:"withlatestfrom-operator",title:"Operador WithLatestFrom",description:"Combina con los últimos valores de otros Observables",explanation:`WithLatestFrom es como "tomar una foto con acompañantes": cuando el Observable principal emite, toma los últimos valores de los otros Observables.

🔹 **¿Qué hace?** Cuando el Observable fuente emite, combina ese valor con los últimos valores de otros Observables especificados.

🔹 **¿Cómo funciona?**
- Solo emite cuando el Observable PRINCIPAL emite
- Los otros Observables son "pasivos" - solo proporcionan contexto
- Usa siempre el último valor disponible de cada Observable acompañante
- Si un Observable acompañante nunca ha emitido, no se emite nada

🔹 **¿Por qué es útil?** Ideal para agregar contexto a eventos, combinar estado actual con acciones, enriquecer datos con información adicional.`,category:"combination",code:`const clicks = fromEvent(button, 'click');
const currentUser = of('Ana').pipe(delay(500));
const currentTime = interval(1000).pipe(map(() => new Date()));

const enrichedClicks = clicks.pipe(
  withLatestFrom(currentUser, currentTime)
);

enrichedClicks.subscribe(([click, user, time]) => 
  console.log(\`\${user} hizo clic a las \${time}\`)
);`,demo:()=>this.demoWithLatestFrom()},{id:"startwith-pairwise-operator",title:"StartWith y Pairwise",description:"Agregar valores iniciales y comparar valores consecutivos",explanation:`StartWith y Pairwise son operadores que trabajan con secuencias y valores consecutivos.

🔹 **StartWith**: Agrega valores al inicio del Observable
- Como "poner una introducción"
- Los valores iniciales se emiten primero
- Útil para valores por defecto o estados iniciales

🔹 **Pairwise**: Emite el valor anterior y actual como un par
- Como "recordar el valor anterior"
- Permite comparar cambios consecutivos
- Útil para detectar diferencias o calcular deltas

🔹 **¿Por qué son útiles?** StartWith para inicialización, Pairwise para análisis de cambios, detección de tendencias, validaciones comparativas.`,category:"combination",code:`const numbers = of(10, 20, 30, 40);

const withStart = numbers.pipe(
  startWith(0, 5)
);

const pairs = numbers.pipe(
  startWith(0),
  pairwise()
);

withStart.subscribe(x => console.log('Con start:', x));
pairs.subscribe(([prev, curr]) => console.log(\`\${prev} → \${curr}\`));`,demo:()=>this.demoStartWithPairwise()},{id:"scan-operator",title:"Operador Scan",description:"Acumula valores como reduce pero emite cada resultado intermedio",explanation:`Scan es como llevar una cuenta corriente: va sumando y te muestra el balance después de cada operación.

🔹 **¿Qué hace?** Acumula valores usando una función, pero emite cada resultado parcial (no solo el final).

🔹 **¿Cómo funciona?**
- Empieza con 0 (valor inicial)
- Recibe 1 → suma: 0+1=1 → emite 1
- Recibe 2 → suma: 1+2=3 → emite 3
- Recibe 3 → suma: 3+3=6 → emite 6, etc.

🔹 **¿Por qué es útil?** Perfecto para contadores en tiempo real, carritos de compra, estadísticas acumulativas, progress bars.`,category:"utility",code:`const source = from([1, 2, 3, 4, 5]).pipe(
  concatMap(x => timer(500).pipe(map(() => x)))
);
const accumulated = source.pipe(
  scan((acc, value) => acc + value, 0)
);

accumulated.subscribe(value => console.log(value));`,demo:()=>this.demoScan()},{id:"tap-operator",title:"Operador Tap",description:"Ejecuta efectos secundarios sin modificar el stream",explanation:`Tap es como un "espía silencioso": observa los valores que pasan pero no los modifica ni interfiere con el flujo.

🔹 **¿Qué hace?** Permite ejecutar código (efectos secundarios) para cada valor sin alterar el Observable.

🔹 **¿Cómo funciona?**
- Recibe cada valor del stream
- Ejecuta la función que le proporciones (logging, debugging, etc.)
- Pasa el valor original sin modificaciones
- No afecta el flujo normal del Observable

🔹 **¿Por qué es útil?** Esencial para debugging, logging, analytics, efectos secundarios que no deben modificar los datos.`,category:"utility",code:`const numbers = of(1, 2, 3, 4, 5);

const withLogging = numbers.pipe(
  tap(x => console.log('Procesando:', x)),
  map(x => x * 2),
  tap(x => console.log('Resultado:', x))
);

withLogging.subscribe(result => console.log('Final:', result));`,demo:()=>this.demoTap()},{id:"catcherror-retry-operator",title:"CatchError y Retry",description:"Manejo de errores y reintentos automáticos",explanation:`CatchError y Retry son como un "sistema de respaldo y recuperación": manejan errores elegantemente.

🔹 **CatchError**: Captura errores y permite recuperación
- Como "tener un plan B"
- Puede devolver un valor por defecto o un Observable alternativo
- Evita que el error rompa toda la cadena

🔹 **Retry**: Reintenta automáticamente cuando hay errores
- Como "intentar de nuevo"
- Configurable: número de reintentos, delays, condiciones
- Útil para operaciones que pueden fallar temporalmente

🔹 **¿Por qué son útiles?** Esenciales para aplicaciones robustas, APIs inestables, recuperación automática, UX sin interrupciones.`,category:"utility",code:`const unstableAPI = throwError('Error de red').pipe(
  retry(3), // Reintenta 3 veces
  catchError(err => {
    console.log('Error capturado:', err);
    return of('Valor por defecto'); // Plan B
  })
);

unstableAPI.subscribe(result => console.log('Resultado:', result));`,demo:()=>this.demoCatchErrorRetry()},{id:"finalize-operator",title:"Operador Finalize",description:"Ejecuta código de limpieza al completarse o cancelarse",explanation:`Finalize es como "cerrar la puerta al salir": garantiza que cierto código se ejecute sin importar cómo termine el Observable.

🔹 **¿Qué hace?** Ejecuta una función cuando el Observable se completa, tiene error, o se desuscribe.

🔹 **¿Cómo funciona?**
- Se ejecuta SIEMPRE, sin importar cómo termine el Observable
- Útil para cleanup, cerrar conexiones, liberar recursos
- Es como el "finally" de los try-catch pero para Observables
- No modifica los valores del stream

🔹 **¿Por qué es útil?** Esencial para evitar memory leaks, cerrar conexiones, cleanup de recursos, logging de finalización.`,category:"utility",code:`const dataStream = interval(500).pipe(
  take(3),
  finalize(() => console.log('Stream finalizado - limpieza realizada'))
);

dataStream.subscribe({
  next: x => console.log('Valor:', x),
  complete: () => console.log('Completado')
});`,demo:()=>this.demoFinalize()},{id:"timeout-operator",title:"Operador Timeout",description:"Establece un límite de tiempo para las emisiones",explanation:`Timeout es como un "cronómetro de paciencia": si el Observable no emite dentro del tiempo límite, actúa.

🔹 **¿Qué hace?** Establece un tiempo máximo de espera entre emisiones o para la primera emisión.

🔹 **¿Cómo funciona?**
- Si no hay emisión dentro del tiempo límite, emite un error
- Puede configurarse para usar un Observable alternativo en lugar de error
- Reinicia el cronómetro con cada nueva emisión
- Útil para detectar "colgadas" o respuestas lentas

🔹 **¿Por qué es útil?** Esencial para UX responsiva, detectar problemas de red, evitar esperas infinitas, timeouts de API.`,category:"utility",code:`const slowAPI = timer(3000).pipe(mapTo('Respuesta lenta'));

const withTimeout = slowAPI.pipe(
  timeout(2000), // Máximo 2 segundos
  catchError(err => of('Timeout - usando cache'))
);

withTimeout.subscribe(result => console.log(result));`,demo:()=>this.demoTimeout()},{id:"defaultifempty-operator",title:"Operador DefaultIfEmpty",description:"Proporciona un valor por defecto si el Observable está vacío",explanation:`DefaultIfEmpty es como "tener un plan de respaldo": si el Observable se completa sin emitir nada, proporciona un valor por defecto.

🔹 **¿Qué hace?** Emite un valor especificado si el Observable se completa sin haber emitido ningún valor.

🔹 **¿Cómo funciona?**
- Si el Observable emite valores normalmente, no hace nada
- Si el Observable se completa sin emitir, emite el valor por defecto
- Solo actúa cuando hay completación sin emisiones
- No afecta Observables que sí emiten valores

🔹 **¿Por qué es útil?** Perfecto para evitar resultados vacíos, valores por defecto en búsquedas, fallbacks cuando no hay datos.`,category:"utility",code:`const emptySearch = EMPTY;
const searchWithDefault = emptySearch.pipe(
  defaultIfEmpty('No se encontraron resultados')
);

searchWithDefault.subscribe(result => console.log(result));
// Emite: "No se encontraron resultados"`,demo:()=>this.demoDefaultIfEmpty()},{id:"validation-operators",title:"Operadores de Validación (Every, Find)",description:"Validar condiciones y buscar elementos específicos",explanation:`Every y Find son como "inspectores de calidad": validan condiciones y buscan elementos específicos en el stream.

🔹 **Every**: Verifica si TODOS los valores cumplen una condición
- Como "¿todos aprobaron el examen?"
- Emite true solo si todos los valores pasan la prueba
- Emite false tan pronto como encuentra uno que no cumple

🔹 **Find**: Busca el PRIMER valor que cumple una condición
- Como "encontrar la primera coincidencia"
- Se completa tan pronto como encuentra el elemento
- Útil para búsquedas específicas

🔹 **¿Por qué son útiles?** Esenciales para validaciones, búsquedas, control de calidad, verificaciones de datos.`,category:"utility",code:`const numbers = of(2, 4, 6, 8, 10);

const allEven = numbers.pipe(
  every(x => x % 2 === 0)
);

const firstBig = numbers.pipe(
  find(x => x > 5)
);

allEven.subscribe(result => console.log('Todos pares:', result));
firstBig.subscribe(result => console.log('Primero > 5:', result));`,demo:()=>this.demoValidationOperators()},{id:"isempty-operator",title:"Operador IsEmpty",description:"Verifica si el Observable está vacío",explanation:`IsEmpty es como un "detector de vacío": verifica si un Observable se completa sin emitir ningún valor.

🔹 **¿Qué hace?** Emite true si el Observable se completa sin emitir valores, false si emite al menos uno.

🔹 **¿Cómo funciona?**
- Observa todo el ciclo de vida del Observable
- Si se completa sin emisiones → emite true
- Si emite al menos un valor → emite false y se completa
- Solo emite un valor booleano al final

🔹 **¿Por qué es útil?** Perfecto para validar si hay datos, verificar resultados de búsquedas, condicionales basadas en contenido.`,category:"utility",code:`const emptyStream = EMPTY;
const nonEmptyStream = of(1, 2, 3);

const checkEmpty = emptyStream.pipe(isEmpty());
const checkNonEmpty = nonEmptyStream.pipe(isEmpty());

checkEmpty.subscribe(result => console.log('Vacío:', result)); // true
checkNonEmpty.subscribe(result => console.log('Vacío:', result)); // false`,demo:()=>this.demoIsEmpty()}]}setupNavigation(){document.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",r=>{const n=r.target,i=n.dataset.category;i&&(this.showCategory(i),this.updateActiveNav(n))})})}setupThemeToggle(){const t=document.getElementById("theme-toggle");t&&t.addEventListener("click",()=>{this.toggleTheme()})}initializeTheme(){const t=localStorage.getItem("theme"),e=window.matchMedia("(prefers-color-scheme: dark)").matches;t==="dark"||!t&&e?this.setDarkMode(!0):this.setDarkMode(!1)}toggleTheme(){const t=document.documentElement.classList.contains("dark");this.setDarkMode(!t)}setDarkMode(t){const e=document.documentElement,r=document.getElementById("theme-toggle");t?(e.classList.add("dark"),localStorage.setItem("theme","dark"),r&&(r.innerHTML=`
          <svg class="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
        `)):(e.classList.remove("dark"),localStorage.setItem("theme","light"),r&&(r.innerHTML=`
          <svg class="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
          </svg>
        `))}updateActiveNav(t){document.querySelectorAll(".nav-item").forEach(e=>{e.classList.remove("active")}),t.classList.add("active")}showCategory(t){this.cleanup(),this.currentCategory=t;const e=document.getElementById("examples-container");if(!e)return;const r=this.examples.filter(n=>n.category===t);e.innerHTML=r.map((n,i)=>`
      <div class="example-card fade-in" style="animation-delay: ${i*.1}s">
        <!-- Header del ejemplo -->
        <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
          <div class="flex-1 mb-4 lg:mb-0">
            <div class="flex items-center mb-3">
              <div class="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
              <h3 class="text-2xl font-bold text-gray-900">${n.title}</h3>
            </div>
            <p class="text-gray-600 text-lg mb-4">${n.description}</p>
            
            <!-- Botón de explicación mejorado -->
            <button 
              class="explanation-button group"
              onclick="app.toggleExplanation('${n.id}')"
            >
              <svg class="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span id="explanation-toggle-${n.id}">Ver explicación detallada</span>
            </button>
            
            <!-- Panel de explicación mejorado -->
            <div id="explanation-${n.id}" class="hidden mt-4 explanation-panel slide-up">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <div class="text-sm text-gray-700 whitespace-pre-line leading-relaxed">${n.explanation}</div>
              </div>
            </div>
          </div>
          
          <!-- Botón ejecutar mejorado -->
          <div class="flex flex-col items-end space-y-3">
            <button 
              class="control-button group flex items-center" 
              onclick="app.runExample('${n.id}')"
            >
              <svg class="w-5 h-5 mr-2 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6V7a2 2 0 00-2-2H5a2 2 0 00-2 2v3m14 0v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m14 0H3"></path>
              </svg>
              Ejecutar Demo
            </button>
            <div class="status-badge info">
              <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Interactivo
            </div>
          </div>
        </div>
        
        <!-- Contenido principal -->
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <!-- Sección de código -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h4 class="text-lg font-semibold text-gray-800 flex items-center">
                <svg class="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
                Código TypeScript
              </h4>
              <button class="text-xs text-gray-500 hover:text-gray-700 flex items-center" onclick="navigator.clipboard.writeText(\`${n.code.replace(/`/g,"\\`")}\`)">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                Copiar
              </button>
            </div>
            <pre class="code-snippet custom-scrollbar">${n.code}</pre>
          </div>
          
          <!-- Sección de visualización -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-gray-800 flex items-center">
              <svg class="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              Visualización en Vivo
            </h4>
            <div id="demo-${n.id}" class="stream-visualization">
              <div class="flex flex-col items-center justify-center py-8 text-gray-500">
                <div class="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center mb-4">
                  <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6V7a2 2 0 00-2-2H5a2 2 0 00-2 2v3m14 0v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m14 0H3"></path>
                  </svg>
                </div>
                <p class="text-center font-medium">Haz clic en "Ejecutar Demo" para ver la magia</p>
                <p class="text-sm text-gray-400 mt-1">Los valores aparecerán aquí en tiempo real</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join("")}runExample(t){const e=this.examples.find(r=>r.id===t);e&&(this.cleanup(),e.demo())}toggleExplanation(t){const e=document.getElementById(`explanation-${t}`),r=document.getElementById(`explanation-toggle-${t}`);e&&r&&(e.classList.contains("hidden")?(e.classList.remove("hidden"),e.classList.add("slide-up"),r.textContent="Ocultar explicación",setTimeout(()=>{e.scrollIntoView({behavior:"smooth",block:"nearest"})},100)):(e.classList.add("hidden"),e.classList.remove("slide-up"),r.textContent="Ver explicación detallada"))}cleanup(){this.currentSubscriptions.forEach(t=>{t&&typeof t.unsubscribe=="function"&&t.unsubscribe()}),this.currentSubscriptions=[]}updateDemo(t,e){const r=document.getElementById(`demo-${t}`);r&&(r.innerHTML=e,r.classList.add("fade-in"),r.querySelectorAll("input").forEach(a=>{a.classList.add("modern-input")}),r.querySelectorAll("button:not(.control-button)").forEach(a=>{a.classList.contains("control-button")||a.classList.add("control-button")}))}addStreamItem(t,e,r=!1){const n=document.getElementById(`demo-${t}`);if(n){const i=n.querySelector(".flex.flex-col.items-center.justify-center");i&&i.remove();let a=n.querySelector(".output-display");a||(a=document.createElement("div"),a.className="output-display",a.innerHTML='<div class="font-medium text-sm text-gray-700 mb-3">Salida:</div>',n.appendChild(a));const s=document.createElement("span");s.className=r?"stream-item bg-red-500":"stream-item",s.textContent=String(e),s.style.opacity="0",s.style.transform="translateY(10px) scale(0.9)",a.appendChild(s),requestAnimationFrame(()=>{s.style.transition="all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",s.style.opacity="1",s.style.transform="translateY(0) scale(1)"}),setTimeout(()=>{a.children.length>10&&(a.scrollTop=a.scrollHeight)},100)}}demoObservableBasic(){this.updateDemo("observable-basic",'<div class="output-display">Salida: </div>');const e=new w(r=>{r.next("Hola"),setTimeout(()=>r.next("Mundo"),1e3),setTimeout(()=>r.complete(),2e3)}).subscribe({next:r=>this.addStreamItem("observable-basic",r),complete:()=>this.addStreamItem("observable-basic","✓ Completado")});this.currentSubscriptions.push(e)}demoSubject(){this.updateDemo("subject-basic",'<div class="output-display">Múltiples suscriptores: </div>');const t=new H,e=t.subscribe(n=>this.addStreamItem("subject-basic",`Sub1: ${n}`)),r=t.subscribe(n=>this.addStreamItem("subject-basic",`Sub2: ${n}`));setTimeout(()=>t.next("Mensaje 1"),500),setTimeout(()=>t.next("Mensaje 2"),1500),setTimeout(()=>t.complete(),2500),this.currentSubscriptions.push(e,r)}demoInterval(){this.updateDemo("interval-observable",'<div class="output-display">Contador: </div>');const e=P(800).pipe(O(5)).subscribe(r=>this.addStreamItem("interval-observable",r));this.currentSubscriptions.push(e)}demoMap(){this.updateDemo("map-operator",'<div class="output-display">Números duplicados: </div>');const r=P(300).pipe(S(n=>n+1),O(5)).pipe(S(n=>n*2)).subscribe(n=>{this.addStreamItem("map-operator",n)});this.currentSubscriptions.push(r)}demoFilter(){this.updateDemo("filter-operator",'<div class="output-display">Solo números pares: </div>');const r=x([1,2,3,4,5,6]).pipe(I(n=>g(400).pipe(S(()=>n)))).pipe(Zt(n=>n%2===0)).subscribe(n=>{this.addStreamItem("filter-operator",n)});this.currentSubscriptions.push(r)}demoDebounce(){this.updateDemo("debounce-operator",`
      <div class="mb-4">
        <input type="text" id="search-input" placeholder="Escribe aquí..." 
               class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
      </div>
      <div class="output-display">Búsqueda con debounce (300ms): </div>
    `);const t=document.getElementById("search-input");if(t){const r=z(t,"input").pipe(S(n=>n.target.value),no(300),so()).subscribe(n=>this.addStreamItem("debounce-operator",n||"(vacío)"));this.currentSubscriptions.push(r)}}demoMerge(){this.updateDemo("merge-operator",'<div class="output-display">Streams combinados: </div>');const t=P(1e3).pipe(S(i=>`A${i}`),O(3)),e=P(1500).pipe(S(i=>`B${i}`),O(3)),n=Gt(t,e).subscribe(i=>this.addStreamItem("merge-operator",i));this.currentSubscriptions.push(n)}demoSwitchMap(){this.updateDemo("switchmap-operator",`
      <div class="mb-4">
        <button id="switch-button" class="control-button">Hacer clic para cambiar</button>
      </div>
      <div class="output-display">Contador que se reinicia con cada clic: </div>
    `);const t=document.getElementById("switch-button");if(t){const n=z(t,"click").pipe(Eo(()=>P(500).pipe(O(5)))).subscribe(i=>this.addStreamItem("switchmap-operator",i));this.currentSubscriptions.push(n)}}demoCombineLatest(){this.updateDemo("combinelatest-operator",'<div class="output-display">Últimos valores combinados: </div>');const t=P(1e3).pipe(S(i=>`A${i}`),O(4)),e=P(1500).pipe(S(i=>`B${i}`),O(3)),n=$t([t,e]).subscribe(([i,a])=>this.addStreamItem("combinelatest-operator",`[${i}, ${a}]`));this.currentSubscriptions.push(n)}demoScan(){this.updateDemo("scan-operator",'<div class="output-display">Suma acumulativa: </div>');const r=x([1,2,3,4,5]).pipe(I(n=>g(500).pipe(S(()=>n)))).pipe(So((n,i)=>n+i,0)).subscribe(n=>{this.addStreamItem("scan-operator",n)});this.currentSubscriptions.push(r)}demoMapTo(){this.updateDemo("mapTo-operator",`
      <div class="mb-4">
        <button id="mapTo-button" class="control-button">Hacer clic aquí</button>
      </div>
      <div class="output-display">Todos los clicks se convierten en: </div>
    `);const t=document.getElementById("mapTo-button");if(t){const n=z(t,"click").pipe(A("¡Click detectado!")).subscribe(i=>this.addStreamItem("mapTo-operator",i));this.currentSubscriptions.push(n)}}demoPluck(){this.updateDemo("pluck-operator",'<div class="output-display">Nombres extraídos: </div>');const r=x([{id:1,name:"Ana",age:25},{id:2,name:"Luis",age:30},{id:3,name:"María",age:28}]).pipe(I(n=>g(800).pipe(S(()=>n)))).pipe(yo("name")).subscribe(n=>this.addStreamItem("pluck-operator",n));this.currentSubscriptions.push(r)}demoConcatMap(){this.updateDemo("concatMap-operator",'<div class="output-display">Procesamiento secuencial: </div>');const r=x([1,2,3]).pipe(I(n=>g(1e3).pipe(S(()=>n*10)))).subscribe(n=>this.addStreamItem("concatMap-operator",n));this.currentSubscriptions.push(r)}demoMergeMap(){this.updateDemo("mergeMap-operator",'<div class="output-display">Procesamiento paralelo: </div>');const r=x([1,2,3]).pipe(B(n=>g(Math.random()*2e3).pipe(S(()=>n*10)))).subscribe(n=>this.addStreamItem("mergeMap-operator",n));this.currentSubscriptions.push(r)}demoBehaviorSubject(){this.updateDemo("behaviorsubject-basic",'<div class="output-display">Comportamiento de BehaviorSubject: </div>');const t=new st("Invitado"),e=t.subscribe(r=>this.addStreamItem("behaviorsubject-basic",`Sub1: ${r}`));setTimeout(()=>t.next("Ana"),1e3),setTimeout(()=>t.next("Luis"),2e3),setTimeout(()=>{const r=t.subscribe(n=>this.addStreamItem("behaviorsubject-basic",`Sub2: ${n}`));this.currentSubscriptions.push(r)},2500),this.currentSubscriptions.push(e)}demoReplaySubject(){this.updateDemo("replaysubject-basic",'<div class="output-display">Historial de ReplaySubject: </div>');const t=new ct(3);setTimeout(()=>t.next("Acción 1"),500),setTimeout(()=>t.next("Acción 2"),1e3),setTimeout(()=>t.next("Acción 3"),1500),setTimeout(()=>t.next("Acción 4"),2e3),setTimeout(()=>{const e=t.subscribe(r=>this.addStreamItem("replaysubject-basic",`Historial: ${r}`));this.currentSubscriptions.push(e)},2500)}demoAsyncSubject(){this.updateDemo("asyncsubject-basic",'<div class="output-display">AsyncSubject esperando... </div>');const t=new lt,e=t.subscribe(r=>this.addStreamItem("asyncsubject-basic",`Resultado: ${r}`));setTimeout(()=>t.next("Procesando..."),500),setTimeout(()=>t.next("Casi listo..."),1500),setTimeout(()=>t.next("¡Completado!"),2500),setTimeout(()=>t.complete(),3e3),this.currentSubscriptions.push(e)}demoOf(){this.updateDemo("of-observable",'<div class="output-display">Frutas emitidas: </div>');const t=j("🍎","🍌","🍊","🍇");let e=0;const r=t.subscribe({next:n=>{setTimeout(()=>this.addStreamItem("of-observable",n),e*500),e++},complete:()=>{setTimeout(()=>this.addStreamItem("of-observable","✓ Completado"),e*500)}});this.currentSubscriptions.push(r)}demoFrom(){this.updateDemo("from-observable",'<div class="output-display">Conversiones de From: </div>');const t=x([10,20,30]);let e=0;const r=t.subscribe(n=>{setTimeout(()=>this.addStreamItem("from-observable",`Array: ${n}`),e),e+=500});setTimeout(()=>{const i=x(Promise.resolve("¡Éxito!")).subscribe(a=>this.addStreamItem("from-observable",`Promesa: ${a}`));this.currentSubscriptions.push(i)},2e3),setTimeout(()=>{const n=x("HOLA");let i=0;const a=n.subscribe(s=>{setTimeout(()=>this.addStreamItem("from-observable",`Char: ${s}`),i),i+=300});this.currentSubscriptions.push(a)},3e3),this.currentSubscriptions.push(r)}demoRange(){this.updateDemo("range-observable",'<div class="output-display">Secuencia generada: </div>');const t=to(1,5);let e=0;const r=t.subscribe({next:n=>{setTimeout(()=>this.addStreamItem("range-observable",n),e*400),e++},complete:()=>{setTimeout(()=>this.addStreamItem("range-observable","✓ Completado"),e*400)}});this.currentSubscriptions.push(r)}demoTimer(){this.updateDemo("timer-observable",'<div class="output-display">Temporizadores: </div>');const e=g(2e3).subscribe(()=>this.addStreamItem("timer-observable","⏰ Timer único")),n=g(1e3,1e3).pipe(O(3)).subscribe(i=>this.addStreamItem("timer-observable",`🔄 Tick: ${i}`));this.currentSubscriptions.push(e,n)}demoSpecialObservables(){this.updateDemo("empty-never-error",'<div class="output-display">Observables especiales: </div>');const t=R.subscribe({next:()=>this.addStreamItem("empty-never-error","EMPTY next (nunca)"),complete:()=>this.addStreamItem("empty-never-error","✓ EMPTY completado")});setTimeout(()=>{const e=Ct("¡Error simulado!").subscribe({next:()=>this.addStreamItem("empty-never-error","Error next (nunca)"),error:r=>this.addStreamItem("empty-never-error",`❌ Error: ${r}`,!0)});this.currentSubscriptions.push(e)},1e3),this.currentSubscriptions.push(t)}demoThrottle(){this.updateDemo("throttle-operator",`
      <div class="mb-4">
        <button id="throttle-button" class="control-button">Haz clic rápido (throttle 1s)</button>
      </div>
      <div class="output-display">Clicks válidos (máximo 1 por segundo): </div>
    `);const t=document.getElementById("throttle-button");if(t){const n=z(t,"click").pipe(Oo(1e3)).subscribe(()=>this.addStreamItem("throttle-operator",`✓ Click válido (${new Date().getSeconds()}s)`));this.currentSubscriptions.push(n)}}demoDistinct(){this.updateDemo("distinct-operator",'<div class="output-display">Valores únicos: </div>');const r=x([1,2,2,3,1,4,3,5,2,1]).pipe(I(n=>g(600).pipe(S(()=>n)))).pipe(ao()).subscribe(n=>this.addStreamItem("distinct-operator",`Único: ${n}`));this.currentSubscriptions.push(r)}demoFirstLast(){this.updateDemo("first-last-operator",'<div class="output-display">Primer y último valor: </div>');const t=x([1,2,3,4,5]).pipe(I(a=>g(500).pipe(S(()=>a)))),e=t.pipe(fo()),r=t.pipe(bo()),n=e.subscribe(a=>this.addStreamItem("first-last-operator",`🥇 Primero: ${a}`)),i=r.subscribe(a=>this.addStreamItem("first-last-operator",`🏁 Último: ${a}`));this.currentSubscriptions.push(n,i)}demoTakeSkipWhile(){this.updateDemo("take-skip-while-operator",'<div class="output-display">TakeWhile vs SkipWhile: </div>');const t=x([1,2,3,4,5,6,7,8]).pipe(I(a=>g(400).pipe(S(()=>a)))),e=t.pipe(To(a=>a<5)),r=t.pipe(wo(a=>a<5)),n=e.subscribe(a=>this.addStreamItem("take-skip-while-operator",`📥 Take: ${a}`)),i=r.subscribe(a=>this.addStreamItem("take-skip-while-operator",`⏭️ Skip: ${a}`));this.currentSubscriptions.push(n,i)}demoTakeSkipUntil(){this.updateDemo("take-skip-until-operator",'<div class="output-display">TakeUntil vs SkipUntil: </div>');const t=P(500),e=g(3e3),r=g(1500),n=t.pipe(ko(e)),i=t.pipe(xo(r),O(4)),a=n.subscribe(c=>this.addStreamItem("take-skip-until-operator",`🛑 Until stop: ${c}`)),s=i.subscribe(c=>this.addStreamItem("take-skip-until-operator",`🚀 Until start: ${c}`));this.currentSubscriptions.push(a,s)}demoZip(){this.updateDemo("zip-operator",'<div class="output-display">Valores combinados por posición: </div>');const t=x(["A","B","C","D"]).pipe(I(a=>g(500).pipe(S(()=>a)))),e=x([1,2,3]).pipe(I(a=>g(700).pipe(S(()=>a)))),r=x(["!","@","#"]).pipe(I(a=>g(300).pipe(S(()=>a)))),i=oo(t,e,r).subscribe(([a,s,c])=>this.addStreamItem("zip-operator",`${a}${s}${c}`));this.currentSubscriptions.push(i)}demoConcat(){this.updateDemo("concat-operator",'<div class="output-display">Secuencia ordenada: </div>');const t=j("🥇 Primero").pipe(V(1e3)),e=j("🥈 Segundo").pipe(V(500)),r=j("🥉 Tercero").pipe(V(200)),i=ie(t,e,r).subscribe(a=>this.addStreamItem("concat-operator",a));this.currentSubscriptions.push(i)}demoRace(){this.updateDemo("race-operator",'<div class="output-display">¡Carrera en progreso! </div>');const t=g(3e3).pipe(A("🐢 Lento")),e=g(1e3).pipe(A("🐰 Rápido")),r=g(2e3).pipe(A("🚶 Medio")),i=Xt(t,e,r).subscribe(a=>this.addStreamItem("race-operator",`🏆 Ganador: ${a}`));this.currentSubscriptions.push(i)}demoForkJoin(){this.updateDemo("forkjoin-operator",'<div class="output-display">Esperando a que todos terminen... </div>');const t=g(1e3).pipe(A({name:"Ana",id:1})),e=g(1500).pipe(A(["Post 1","Post 2"])),r=g(800).pipe(A(["Comentario 1"])),i=Ft({user:t,posts:e,comments:r}).subscribe(a=>{this.addStreamItem("forkjoin-operator",`👤 Usuario: ${a.user.name}`),this.addStreamItem("forkjoin-operator",`📝 Posts: ${a.posts.length}`),this.addStreamItem("forkjoin-operator",`💬 Comentarios: ${a.comments.length}`),this.addStreamItem("forkjoin-operator","✅ ¡Todo completado!")});this.currentSubscriptions.push(i)}demoWithLatestFrom(){this.updateDemo("withlatestfrom-operator",`
      <div class="mb-4">
        <button id="withlatest-button" class="control-button">Hacer clic para combinar</button>
      </div>
      <div class="output-display">Clicks enriquecidos: </div>
    `);const t=document.getElementById("withlatest-button");if(t){const e=z(t,"click"),r=j("Ana").pipe(V(500)),n=P(1e3).pipe(S(()=>new Date().toLocaleTimeString()),oe("Cargando...")),a=e.pipe(Co(r,n)).subscribe(([s,c,l])=>this.addStreamItem("withlatestfrom-operator",`${c} hizo clic a las ${l}`));this.currentSubscriptions.push(a)}}demoStartWithPairwise(){this.updateDemo("startwith-pairwise-operator",'<div class="output-display">StartWith y Pairwise: </div>');const t=x([10,20,30,40]).pipe(I(a=>g(600).pipe(S(()=>a)))),e=t.pipe(oe(0,5)),r=t.pipe(oe(0),ho()),n=e.subscribe(a=>this.addStreamItem("startwith-pairwise-operator",`▶️ Start: ${a}`)),i=r.subscribe(([a,s])=>this.addStreamItem("startwith-pairwise-operator",`🔄 ${a} → ${s}`));this.currentSubscriptions.push(n,i)}demoTap(){this.updateDemo("tap-operator",'<div class="output-display">Logging con Tap: </div>');const r=x([1,2,3,4,5]).pipe(I(n=>g(500).pipe(S(()=>n)))).pipe(J(n=>this.addStreamItem("tap-operator",`📥 Procesando: ${n}`)),S(n=>n*2),J(n=>this.addStreamItem("tap-operator",`🔄 Resultado: ${n}`))).subscribe(n=>this.addStreamItem("tap-operator",`✅ Final: ${n}`));this.currentSubscriptions.push(r)}demoCatchErrorRetry(){this.updateDemo("catcherror-retry-operator",'<div class="output-display">Manejo de errores: </div>');let t=0;const n=new w(i=>{t++,this.addStreamItem("catcherror-retry-operator",`🔄 Intento ${t}`),setTimeout(()=>{t<3?i.error("Error de red"):(i.next("¡Éxito!"),i.complete())},800)}).pipe(go(2),ae(i=>(this.addStreamItem("catcherror-retry-operator",`❌ Error: ${i}`,!0),j("🔄 Valor por defecto")))).subscribe(i=>this.addStreamItem("catcherror-retry-operator",`✅ Resultado: ${i}`));this.currentSubscriptions.push(n)}demoFinalize(){this.updateDemo("finalize-operator",'<div class="output-display">Stream con cleanup: </div>');const e=P(600).pipe(O(3),J(r=>this.addStreamItem("finalize-operator",`📊 Dato: ${r}`)),uo(()=>this.addStreamItem("finalize-operator","🧹 Limpieza realizada"))).subscribe({next:r=>this.addStreamItem("finalize-operator",`✅ Procesado: ${r}`),complete:()=>this.addStreamItem("finalize-operator","🏁 Completado")});this.currentSubscriptions.push(e)}demoTimeout(){this.updateDemo("timeout-operator",'<div class="output-display">Timeout en acción: </div>');const r=g(3e3).pipe(A("🐌 Respuesta lenta")).pipe(J(()=>this.addStreamItem("timeout-operator","⏳ Esperando respuesta...")),qt(2e3),ae(n=>(this.addStreamItem("timeout-operator","⏰ Timeout detectado",!0),j("💾 Usando cache")))).subscribe(n=>this.addStreamItem("timeout-operator",`✅ ${n}`));this.currentSubscriptions.push(r)}demoDefaultIfEmpty(){this.updateDemo("defaultifempty-operator",'<div class="output-display">Valores por defecto: </div>');const t=R.pipe(Z("📭 No se encontraron resultados")),e=j("📄 Resultado encontrado").pipe(V(1e3),Z("Este no se usará")),r=t.subscribe(i=>this.addStreamItem("defaultifempty-operator",`Vacío: ${i}`)),n=e.subscribe(i=>this.addStreamItem("defaultifempty-operator",`Con datos: ${i}`));this.currentSubscriptions.push(r,n)}demoValidationOperators(){this.updateDemo("validation-operators",'<div class="output-display">Validaciones y búsquedas: </div>');const t=x([2,4,6,8,10]).pipe(I(a=>g(400).pipe(S(()=>a)))),e=t.pipe(xe(a=>a%2===0)),r=t.pipe(po(a=>a>5)),n=e.subscribe(a=>this.addStreamItem("validation-operators",`🔍 Todos pares: ${a}`)),i=r.subscribe(a=>this.addStreamItem("validation-operators",`🎯 Primero > 5: ${a}`));setTimeout(()=>{const s=x([1,3,5,7]).pipe(xe(c=>c%2===0)).subscribe(c=>this.addStreamItem("validation-operators",`🔍 Mixtos todos pares: ${c}`));this.currentSubscriptions.push(s)},2500),this.currentSubscriptions.push(n,i)}demoIsEmpty(){this.updateDemo("isempty-operator",'<div class="output-display">Verificando si están vacíos: </div>');const t=R.pipe(we()),e=j(1,2,3).pipe(V(1e3),we()),r=t.subscribe(i=>this.addStreamItem("isempty-operator",`📭 Stream vacío: ${i}`)),n=e.subscribe(i=>this.addStreamItem("isempty-operator",`📦 Stream con datos: ${i}`));this.currentSubscriptions.push(r,n)}}const qo=new Po;window.app=qo;
