/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});

/* Phaser v2.0.2 - http://phaser.io - @photonstorm - (c) 2014 Photon Storm Ltd. */

(function(){var a=this,b=b||{};b.WEBGL_RENDERER=0,b.CANVAS_RENDERER=1,b.VERSION="v1.5.0",b.blendModes={NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16},b.scaleModes={DEFAULT:0,LINEAR:0,NEAREST:1},b.INTERACTION_FREQUENCY=30,b.AUTO_PREVENT_DEFAULT=!0,b.RAD_TO_DEG=180/Math.PI,b.DEG_TO_RAD=Math.PI/180,b.Point=function(a,b){this.x=a||0,this.y=b||0},b.Point.prototype.clone=function(){return new b.Point(this.x,this.y)},b.Point.prototype.constructor=b.Point,b.Point.prototype.set=function(a,b){this.x=a||0,this.y=b||(0!==b?this.x:0)},b.Rectangle=function(a,b,c,d){this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0},b.Rectangle.prototype.clone=function(){return new b.Rectangle(this.x,this.y,this.width,this.height)},b.Rectangle.prototype.contains=function(a,b){if(this.width<=0||this.height<=0)return!1;var c=this.x;if(a>=c&&a<=c+this.width){var d=this.y;if(b>=d&&b<=d+this.height)return!0}return!1},b.Rectangle.prototype.constructor=b.Rectangle,b.EmptyRectangle=new b.Rectangle(0,0,0,0),b.Polygon=function(a){if(a instanceof Array||(a=Array.prototype.slice.call(arguments)),"number"==typeof a[0]){for(var c=[],d=0,e=a.length;e>d;d+=2)c.push(new b.Point(a[d],a[d+1]));a=c}this.points=a},b.Polygon.prototype.clone=function(){for(var a=[],c=0;c<this.points.length;c++)a.push(this.points[c].clone());return new b.Polygon(a)},b.Polygon.prototype.contains=function(a,b){for(var c=!1,d=0,e=this.points.length-1;d<this.points.length;e=d++){var f=this.points[d].x,g=this.points[d].y,h=this.points[e].x,i=this.points[e].y,j=g>b!=i>b&&(h-f)*(b-g)/(i-g)+f>a;j&&(c=!c)}return c},b.Polygon.prototype.constructor=b.Polygon,b.Circle=function(a,b,c){this.x=a||0,this.y=b||0,this.radius=c||0},b.Circle.prototype.clone=function(){return new b.Circle(this.x,this.y,this.radius)},b.Circle.prototype.contains=function(a,b){if(this.radius<=0)return!1;var c=this.x-a,d=this.y-b,e=this.radius*this.radius;return c*=c,d*=d,e>=c+d},b.Circle.prototype.constructor=b.Circle,b.Ellipse=function(a,b,c,d){this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0},b.Ellipse.prototype.clone=function(){return new b.Ellipse(this.x,this.y,this.width,this.height)},b.Ellipse.prototype.contains=function(a,b){if(this.width<=0||this.height<=0)return!1;var c=(a-this.x)/this.width,d=(b-this.y)/this.height;return c*=c,d*=d,1>=c+d},b.Ellipse.prototype.getBounds=function(){return new b.Rectangle(this.x,this.y,this.width,this.height)},b.Ellipse.prototype.constructor=b.Ellipse,b.determineMatrixArrayType=function(){return"undefined"!=typeof Float32Array?Float32Array:Array},b.Matrix2=b.determineMatrixArrayType(),b.Matrix=function(){this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0},b.Matrix.prototype.fromArray=function(a){this.a=a[0],this.b=a[1],this.c=a[3],this.d=a[4],this.tx=a[2],this.ty=a[5]},b.Matrix.prototype.toArray=function(a){this.array||(this.array=new Float32Array(9));var b=this.array;return a?(this.array[0]=this.a,this.array[1]=this.c,this.array[2]=0,this.array[3]=this.b,this.array[4]=this.d,this.array[5]=0,this.array[6]=this.tx,this.array[7]=this.ty,this.array[8]=1):(this.array[0]=this.a,this.array[1]=this.b,this.array[2]=this.tx,this.array[3]=this.c,this.array[4]=this.d,this.array[5]=this.ty,this.array[6]=0,this.array[7]=0,this.array[8]=1),b},b.identityMatrix=new b.Matrix,b.DisplayObject=function(){this.position=new b.Point,this.scale=new b.Point(1,1),this.pivot=new b.Point(0,0),this.rotation=0,this.alpha=1,this.visible=!0,this.hitArea=null,this.buttonMode=!1,this.renderable=!1,this.parent=null,this.stage=null,this.worldAlpha=1,this._interactive=!1,this.defaultCursor="pointer",this.worldTransform=new b.Matrix,this.color=[],this.dynamic=!0,this._sr=0,this._cr=1,this.filterArea=new b.Rectangle(0,0,1,1),this._bounds=new b.Rectangle(0,0,1,1),this._currentBounds=null,this._mask=null,this._cacheAsBitmap=!1,this._cacheIsDirty=!1},b.DisplayObject.prototype.constructor=b.DisplayObject,b.DisplayObject.prototype.setInteractive=function(a){this.interactive=a},Object.defineProperty(b.DisplayObject.prototype,"interactive",{get:function(){return this._interactive},set:function(a){this._interactive=a,this.stage&&(this.stage.dirty=!0)}}),Object.defineProperty(b.DisplayObject.prototype,"worldVisible",{get:function(){var a=this;do{if(!a.visible)return!1;a=a.parent}while(a);return!0}}),Object.defineProperty(b.DisplayObject.prototype,"mask",{get:function(){return this._mask},set:function(a){this._mask&&(this._mask.isMask=!1),this._mask=a,this._mask&&(this._mask.isMask=!0)}}),Object.defineProperty(b.DisplayObject.prototype,"filters",{get:function(){return this._filters},set:function(a){if(a){for(var b=[],c=0;c<a.length;c++)for(var d=a[c].passes,e=0;e<d.length;e++)b.push(d[e]);this._filterBlock={target:this,filterPasses:b}}this._filters=a}}),Object.defineProperty(b.DisplayObject.prototype,"cacheAsBitmap",{get:function(){return this._cacheAsBitmap},set:function(a){this._cacheAsBitmap!==a&&(a?this._generateCachedSprite():this._destroyCachedSprite(),this._cacheAsBitmap=a)}}),b.DisplayObject.prototype.updateTransform=function(){this.rotation!==this.rotationCache&&(this.rotationCache=this.rotation,this._sr=Math.sin(this.rotation),this._cr=Math.cos(this.rotation));var a=this.parent.worldTransform,b=this.worldTransform,c=this.pivot.x,d=this.pivot.y,e=this._cr*this.scale.x,f=-this._sr*this.scale.y,g=this._sr*this.scale.x,h=this._cr*this.scale.y,i=this.position.x-e*c-d*f,j=this.position.y-h*d-c*g,k=a.a,l=a.b,m=a.c,n=a.d;b.a=k*e+l*g,b.b=k*f+l*h,b.tx=k*i+l*j+a.tx,b.c=m*e+n*g,b.d=m*f+n*h,b.ty=m*i+n*j+a.ty,this.worldAlpha=this.alpha*this.parent.worldAlpha},b.DisplayObject.prototype.getBounds=function(a){return a=a,b.EmptyRectangle},b.DisplayObject.prototype.getLocalBounds=function(){return this.getBounds(b.identityMatrix)},b.DisplayObject.prototype.setStageReference=function(a){this.stage=a,this._interactive&&(this.stage.dirty=!0)},b.DisplayObject.prototype.generateTexture=function(a){var c=this.getLocalBounds(),d=new b.RenderTexture(0|c.width,0|c.height,a);return d.render(this),d},b.DisplayObject.prototype.updateCache=function(){this._generateCachedSprite()},b.DisplayObject.prototype._renderCachedSprite=function(a){a.gl?b.Sprite.prototype._renderWebGL.call(this._cachedSprite,a):b.Sprite.prototype._renderCanvas.call(this._cachedSprite,a)},b.DisplayObject.prototype._generateCachedSprite=function(){this._cacheAsBitmap=!1;var a=this.getLocalBounds();if(this._cachedSprite)this._cachedSprite.texture.resize(0|a.width,0|a.height);else{var c=new b.RenderTexture(0|a.width,0|a.height);this._cachedSprite=new b.Sprite(c),this._cachedSprite.worldTransform=this.worldTransform}var d=this._filters;this._filters=null,this._cachedSprite.filters=d,this._cachedSprite.texture.render(this),this._filters=d,this._cacheAsBitmap=!0},b.DisplayObject.prototype._destroyCachedSprite=function(){this._cachedSprite&&(this._cachedSprite.texture.destroy(!0),this._cachedSprite=null)},b.DisplayObject.prototype._renderWebGL=function(a){a=a},b.DisplayObject.prototype._renderCanvas=function(a){a=a},Object.defineProperty(b.DisplayObject.prototype,"x",{get:function(){return this.position.x},set:function(a){this.position.x=a}}),Object.defineProperty(b.DisplayObject.prototype,"y",{get:function(){return this.position.y},set:function(a){this.position.y=a}}),b.DisplayObjectContainer=function(){b.DisplayObject.call(this),this.children=[]},b.DisplayObjectContainer.prototype=Object.create(b.DisplayObject.prototype),b.DisplayObjectContainer.prototype.constructor=b.DisplayObjectContainer,b.DisplayObjectContainer.prototype.addChild=function(a){this.addChildAt(a,this.children.length)},b.DisplayObjectContainer.prototype.addChildAt=function(a,b){if(!(b>=0&&b<=this.children.length))throw new Error(a+" The index "+b+" supplied is out of bounds "+this.children.length);a.parent&&a.parent.removeChild(a),a.parent=this,this.children.splice(b,0,a),this.stage&&a.setStageReference(this.stage)},b.DisplayObjectContainer.prototype.swapChildren=function(a,b){if(a!==b){var c=this.children.indexOf(a),d=this.children.indexOf(b);if(0>c||0>d)throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");this.children[c]=b,this.children[d]=a}},b.DisplayObjectContainer.prototype.getChildAt=function(a){if(a>=0&&a<this.children.length)return this.children[a];throw new Error("The supplied DisplayObjects must be a child of the caller "+this)},b.DisplayObjectContainer.prototype.removeChild=function(a){var b=this.children.indexOf(a);if(-1===b)throw new Error(a+" The supplied DisplayObject must be a child of the caller "+this);this.stage&&a.removeStageReference(),a.parent=void 0,this.children.splice(b,1)},b.DisplayObjectContainer.prototype.updateTransform=function(){if(this.visible&&(b.DisplayObject.prototype.updateTransform.call(this),!this._cacheAsBitmap))for(var a=0,c=this.children.length;c>a;a++)this.children[a].updateTransform()},b.DisplayObjectContainer.prototype.getBounds=function(a){if(0===this.children.length)return b.EmptyRectangle;if(a){var c=this.worldTransform;this.worldTransform=a,this.updateTransform(),this.worldTransform=c}for(var d,e,f,g=1/0,h=1/0,i=-1/0,j=-1/0,k=!1,l=0,m=this.children.length;m>l;l++){var n=this.children[l];n.visible&&(k=!0,d=this.children[l].getBounds(a),g=g<d.x?g:d.x,h=h<d.y?h:d.y,e=d.width+d.x,f=d.height+d.y,i=i>e?i:e,j=j>f?j:f)}if(!k)return b.EmptyRectangle;var o=this._bounds;return o.x=g,o.y=h,o.width=i-g,o.height=j-h,o},b.DisplayObjectContainer.prototype.getLocalBounds=function(){var a=this.worldTransform;this.worldTransform=b.identityMatrix;for(var c=0,d=this.children.length;d>c;c++)this.children[c].updateTransform();var e=this.getBounds();return this.worldTransform=a,e},b.DisplayObjectContainer.prototype.setStageReference=function(a){this.stage=a,this._interactive&&(this.stage.dirty=!0);for(var b=0,c=this.children.length;c>b;b++){var d=this.children[b];d.setStageReference(a)}},b.DisplayObjectContainer.prototype.removeStageReference=function(){for(var a=0,b=this.children.length;b>a;a++){var c=this.children[a];c.removeStageReference()}this._interactive&&(this.stage.dirty=!0),this.stage=null},b.DisplayObjectContainer.prototype._renderWebGL=function(a){if(this.visible&&!(this.alpha<=0)){if(this._cacheAsBitmap)return void this._renderCachedSprite(a);var b,c;if(this._mask||this._filters){for(this._mask&&(a.spriteBatch.stop(),a.maskManager.pushMask(this.mask,a),a.spriteBatch.start()),this._filters&&(a.spriteBatch.flush(),a.filterManager.pushFilter(this._filterBlock)),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a);a.spriteBatch.stop(),this._filters&&a.filterManager.popFilter(),this._mask&&a.maskManager.popMask(a),a.spriteBatch.start()}else for(b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a)}},b.DisplayObjectContainer.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha){if(this._cacheAsBitmap)return void this._renderCachedSprite(a);this._mask&&a.maskManager.pushMask(this._mask,a.context);for(var b=0,c=this.children.length;c>b;b++){var d=this.children[b];d._renderCanvas(a)}this._mask&&a.maskManager.popMask(a.context)}},b.Sprite=function(a){b.DisplayObjectContainer.call(this),this.anchor=new b.Point,this.texture=a,this._width=0,this._height=0,this.tint=16777215,this.blendMode=b.blendModes.NORMAL,a.baseTexture.hasLoaded?this.onTextureUpdate():(this.onTextureUpdateBind=this.onTextureUpdate.bind(this),this.texture.addEventListener("update",this.onTextureUpdateBind)),this.renderable=!0},b.Sprite.prototype=Object.create(b.DisplayObjectContainer.prototype),b.Sprite.prototype.constructor=b.Sprite,Object.defineProperty(b.Sprite.prototype,"width",{get:function(){return this.scale.x*this.texture.frame.width},set:function(a){this.scale.x=a/this.texture.frame.width,this._width=a}}),Object.defineProperty(b.Sprite.prototype,"height",{get:function(){return this.scale.y*this.texture.frame.height},set:function(a){this.scale.y=a/this.texture.frame.height,this._height=a}}),b.Sprite.prototype.setTexture=function(a){this.texture.baseTexture!==a.baseTexture?(this.textureChange=!0,this.texture=a):this.texture=a,this.cachedTint=16777215,this.updateFrame=!0},b.Sprite.prototype.onTextureUpdate=function(){this._width&&(this.scale.x=this._width/this.texture.frame.width),this._height&&(this.scale.y=this._height/this.texture.frame.height),this.updateFrame=!0},b.Sprite.prototype.getBounds=function(a){var b=this.texture.frame.width,c=this.texture.frame.height,d=b*(1-this.anchor.x),e=b*-this.anchor.x,f=c*(1-this.anchor.y),g=c*-this.anchor.y,h=a||this.worldTransform,i=h.a,j=h.c,k=h.b,l=h.d,m=h.tx,n=h.ty,o=i*e+k*g+m,p=l*g+j*e+n,q=i*d+k*g+m,r=l*g+j*d+n,s=i*d+k*f+m,t=l*f+j*d+n,u=i*e+k*f+m,v=l*f+j*e+n,w=-1/0,x=-1/0,y=1/0,z=1/0;y=y>o?o:y,y=y>q?q:y,y=y>s?s:y,y=y>u?u:y,z=z>p?p:z,z=z>r?r:z,z=z>t?t:z,z=z>v?v:z,w=o>w?o:w,w=q>w?q:w,w=s>w?s:w,w=u>w?u:w,x=p>x?p:x,x=r>x?r:x,x=t>x?t:x,x=v>x?v:x;var A=this._bounds;return A.x=y,A.width=w-y,A.y=z,A.height=x-z,this._currentBounds=A,A},b.Sprite.prototype._renderWebGL=function(a){if(this.visible&&!(this.alpha<=0)){var b,c;if(this._mask||this._filters){var d=a.spriteBatch;for(this._mask&&(d.stop(),a.maskManager.pushMask(this.mask,a),d.start()),this._filters&&(d.flush(),a.filterManager.pushFilter(this._filterBlock)),d.render(this),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a);d.stop(),this._filters&&a.filterManager.popFilter(),this._mask&&a.maskManager.popMask(a),d.start()}else for(a.spriteBatch.render(this),b=0,c=this.children.length;c>b;b++)this.children[b]._renderWebGL(a)}},b.Sprite.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha){var c=this.texture.frame,d=a.context,e=this.texture;if(this.blendMode!==a.currentBlendMode&&(a.currentBlendMode=this.blendMode,d.globalCompositeOperation=b.blendModesCanvas[a.currentBlendMode]),this._mask&&a.maskManager.pushMask(this._mask,a.context),c&&c.width&&c.height&&e.baseTexture.source){d.globalAlpha=this.worldAlpha;var f=this.worldTransform;if(a.roundPixels?d.setTransform(f.a,f.c,f.b,f.d,0|f.tx,0|f.ty):d.setTransform(f.a,f.c,f.b,f.d,f.tx,f.ty),a.smoothProperty&&a.scaleMode!==this.texture.baseTexture.scaleMode&&(a.scaleMode=this.texture.baseTexture.scaleMode,d[a.smoothProperty]=a.scaleMode===b.scaleModes.LINEAR),16777215!==this.tint){if(this.cachedTint!==this.tint){if(!e.baseTexture.hasLoaded)return;this.cachedTint=this.tint,this.tintedTexture=b.CanvasTinter.getTintedTexture(this,this.tint)}d.drawImage(this.tintedTexture,0,0,c.width,c.height,this.anchor.x*-c.width,this.anchor.y*-c.height,c.width,c.height)}else if(e.trim){var g=e.trim;d.drawImage(this.texture.baseTexture.source,c.x,c.y,c.width,c.height,g.x-this.anchor.x*g.width,g.y-this.anchor.y*g.height,c.width,c.height)}else d.drawImage(this.texture.baseTexture.source,c.x,c.y,c.width,c.height,this.anchor.x*-c.width,this.anchor.y*-c.height,c.width,c.height)}for(var h=0,i=this.children.length;i>h;h++){var j=this.children[h];j._renderCanvas(a)}this._mask&&a.maskManager.popMask(a.context)}},b.Sprite.fromFrame=function(a){var c=b.TextureCache[a];if(!c)throw new Error('The frameId "'+a+'" does not exist in the texture cache'+this);return new b.Sprite(c)},b.Sprite.fromImage=function(a,c,d){var e=b.Texture.fromImage(a,c,d);return new b.Sprite(e)},b.SpriteBatch=function(a){b.DisplayObjectContainer.call(this),this.textureThing=a,this.ready=!1},b.SpriteBatch.prototype=Object.create(b.DisplayObjectContainer.prototype),b.SpriteBatch.constructor=b.SpriteBatch,b.SpriteBatch.prototype.initWebGL=function(a){this.fastSpriteBatch=new b.WebGLFastSpriteBatch(a),this.ready=!0},b.SpriteBatch.prototype.updateTransform=function(){b.DisplayObject.prototype.updateTransform.call(this)},b.SpriteBatch.prototype._renderWebGL=function(a){!this.visible||this.alpha<=0||!this.children.length||(this.ready||this.initWebGL(a.gl),a.spriteBatch.stop(),a.shaderManager.activateShader(a.shaderManager.fastShader),this.fastSpriteBatch.begin(this,a),this.fastSpriteBatch.render(this),a.shaderManager.activateShader(a.shaderManager.defaultShader),a.spriteBatch.start())},b.SpriteBatch.prototype._renderCanvas=function(a){var c=a.context;c.globalAlpha=this.worldAlpha,b.DisplayObject.prototype.updateTransform.call(this);for(var d=this.worldTransform,e=!0,f=0;f<this.children.length;f++){var g=this.children[f];if(g.visible){var h=g.texture,i=h.frame;if(c.globalAlpha=this.worldAlpha*g.alpha,g.rotation%(2*Math.PI)===0)e&&(c.setTransform(d.a,d.c,d.b,d.d,d.tx,d.ty),e=!1),c.drawImage(h.baseTexture.source,i.x,i.y,i.width,i.height,g.anchor.x*-i.width*g.scale.x+g.position.x+.5|0,g.anchor.y*-i.height*g.scale.y+g.position.y+.5|0,i.width*g.scale.x,i.height*g.scale.y);else{e||(e=!0),b.DisplayObject.prototype.updateTransform.call(g);var j=g.worldTransform;a.roundPixels?c.setTransform(j.a,j.c,j.b,j.d,0|j.tx,0|j.ty):c.setTransform(j.a,j.c,j.b,j.d,j.tx,j.ty),c.drawImage(h.baseTexture.source,i.x,i.y,i.width,i.height,g.anchor.x*-i.width+.5|0,g.anchor.y*-i.height+.5|0,i.width,i.height)}}}},b.FilterBlock=function(){this.visible=!0,this.renderable=!0},b.Text=function(a,c){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),b.Sprite.call(this,b.Texture.fromCanvas(this.canvas)),this.setText(a),this.setStyle(c),this.updateText(),this.dirty=!1},b.Text.prototype=Object.create(b.Sprite.prototype),b.Text.prototype.constructor=b.Text,b.Text.prototype.setStyle=function(a){a=a||{},a.font=a.font||"bold 20pt Arial",a.fill=a.fill||"black",a.align=a.align||"left",a.stroke=a.stroke||"black",a.strokeThickness=a.strokeThickness||0,a.wordWrap=a.wordWrap||!1,a.wordWrapWidth=a.wordWrapWidth||100,this.style=a,this.dirty=!0},b.Text.prototype.setText=function(a){this.text=a.toString()||" ",this.dirty=!0},b.Text.prototype.updateText=function(){this.context.font=this.style.font;var a=this.text;this.style.wordWrap&&(a=this.wordWrap(this.text));for(var c=a.split(/(?:\r\n|\r|\n)/),d=[],e=0,f=0;f<c.length;f++){var g=this.context.measureText(c[f]).width;d[f]=g,e=Math.max(e,g)}this.canvas.width=e+this.style.strokeThickness;var h=this.determineFontHeight("font: "+this.style.font+";")+this.style.strokeThickness;for(this.canvas.height=h*c.length,navigator.isCocoonJS&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.style.fill,this.context.font=this.style.font,this.context.strokeStyle=this.style.stroke,this.context.lineWidth=this.style.strokeThickness,this.context.textBaseline="top",f=0;f<c.length;f++){var i=new b.Point(this.style.strokeThickness/2,this.style.strokeThickness/2+f*h);"right"===this.style.align?i.x+=e-d[f]:"center"===this.style.align&&(i.x+=(e-d[f])/2),this.style.stroke&&this.style.strokeThickness&&this.context.strokeText(c[f],i.x,i.y),this.style.fill&&this.context.fillText(c[f],i.x,i.y)}this.updateTexture()},b.Text.prototype.updateTexture=function(){this.texture.baseTexture.width=this.canvas.width,this.texture.baseTexture.height=this.canvas.height,this.texture.frame.width=this.canvas.width,this.texture.frame.height=this.canvas.height,this._width=this.canvas.width,this._height=this.canvas.height,this.requiresUpdate=!0},b.Text.prototype._renderWebGL=function(a){this.requiresUpdate&&(this.requiresUpdate=!1,b.updateWebGLTexture(this.texture.baseTexture,a.gl)),b.Sprite.prototype._renderWebGL.call(this,a)},b.Text.prototype.updateTransform=function(){this.dirty&&(this.updateText(),this.dirty=!1),b.Sprite.prototype.updateTransform.call(this)},b.Text.prototype.determineFontHeight=function(a){var c=b.Text.heightCache[a];if(!c){var d=document.getElementsByTagName("body")[0],e=document.createElement("div"),f=document.createTextNode("M");e.appendChild(f),e.setAttribute("style",a+";position:absolute;top:0;left:0"),d.appendChild(e),c=e.offsetHeight,b.Text.heightCache[a]=c,d.removeChild(e)}return c},b.Text.prototype.wordWrap=function(a){for(var b="",c=a.split("\n"),d=0;d<c.length;d++){for(var e=this.style.wordWrapWidth,f=c[d].split(" "),g=0;g<f.length;g++){var h=this.context.measureText(f[g]).width,i=h+this.context.measureText(" ").width;i>e?(g>0&&(b+="\n"),b+=f[g]+" ",e=this.style.wordWrapWidth-h):(e-=i,b+=f[g]+" ")}d<c.length-1&&(b+="\n")}return b},b.Text.prototype.destroy=function(a){a&&this.texture.destroy()},b.Text.heightCache={},b.BitmapText=function(a,c){b.DisplayObjectContainer.call(this),this._pool=[],this.setText(a),this.setStyle(c),this.updateText(),this.dirty=!1},b.BitmapText.prototype=Object.create(b.DisplayObjectContainer.prototype),b.BitmapText.prototype.constructor=b.BitmapText,b.BitmapText.prototype.setText=function(a){this.text=a||" ",this.dirty=!0},b.BitmapText.prototype.setStyle=function(a){a=a||{},a.align=a.align||"left",this.style=a;var c=a.font.split(" ");this.fontName=c[c.length-1],this.fontSize=c.length>=2?parseInt(c[c.length-2],10):b.BitmapText.fonts[this.fontName].size,this.dirty=!0,this.tint=a.tint},b.BitmapText.prototype.updateText=function(){for(var a=b.BitmapText.fonts[this.fontName],c=new b.Point,d=null,e=[],f=0,g=[],h=0,i=this.fontSize/a.size,j=0;j<this.text.length;j++){var k=this.text.charCodeAt(j);if(/(?:\r\n|\r|\n)/.test(this.text.charAt(j)))g.push(c.x),f=Math.max(f,c.x),h++,c.x=0,c.y+=a.lineHeight,d=null;else{var l=a.chars[k];l&&(d&&l[d]&&(c.x+=l.kerning[d]),e.push({texture:l.texture,line:h,charCode:k,position:new b.Point(c.x+l.xOffset,c.y+l.yOffset)}),c.x+=l.xAdvance,d=k)}}g.push(c.x),f=Math.max(f,c.x);var m=[];for(j=0;h>=j;j++){var n=0;"right"===this.style.align?n=f-g[j]:"center"===this.style.align&&(n=(f-g[j])/2),m.push(n)}var o=this.children.length,p=e.length,q=this.tint||16777215;for(j=0;p>j;j++){var r=o>j?this.children[j]:this._pool.pop();r?r.setTexture(e[j].texture):r=new b.Sprite(e[j].texture),r.position.x=(e[j].position.x+m[e[j].line])*i,r.position.y=e[j].position.y*i,r.scale.x=r.scale.y=i,r.tint=q,r.parent||this.addChild(r)}for(;this.children.length>p;){var s=this.getChildAt(this.children.length-1);this._pool.push(s),this.removeChild(s)}this.textWidth=f*i,this.textHeight=(c.y+a.lineHeight)*i},b.BitmapText.prototype.updateTransform=function(){this.dirty&&(this.updateText(),this.dirty=!1),b.DisplayObjectContainer.prototype.updateTransform.call(this)},b.BitmapText.fonts={},b.Stage=function(a){b.DisplayObjectContainer.call(this),this.worldTransform=new b.Matrix,this.interactive=!0,this.interactionManager=new b.InteractionManager(this),this.dirty=!0,this.stage=this,this.stage.hitArea=new b.Rectangle(0,0,1e5,1e5),this.setBackgroundColor(a)},b.Stage.prototype=Object.create(b.DisplayObjectContainer.prototype),b.Stage.prototype.constructor=b.Stage,b.Stage.prototype.setInteractionDelegate=function(a){this.interactionManager.setTargetDomElement(a)},b.Stage.prototype.updateTransform=function(){this.worldAlpha=1;for(var a=0,b=this.children.length;b>a;a++)this.children[a].updateTransform();this.dirty&&(this.dirty=!1,this.interactionManager.dirty=!0),this.interactive&&this.interactionManager.update()},b.Stage.prototype.setBackgroundColor=function(a){this.backgroundColor=a||0,this.backgroundColorSplit=b.hex2rgb(this.backgroundColor);var c=this.backgroundColor.toString(16);c="000000".substr(0,6-c.length)+c,this.backgroundColorString="#"+c},b.Stage.prototype.getMousePosition=function(){return this.interactionManager.mouse.global};for(var c=0,d=["ms","moz","webkit","o"],e=0;e<d.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[d[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[d[e]+"CancelAnimationFrame"]||window[d[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a){var b=(new Date).getTime(),d=Math.max(0,16-(b-c)),e=window.setTimeout(function(){a(b+d)},d);return c=b+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),window.requestAnimFrame=window.requestAnimationFrame,b.hex2rgb=function(a){return[(a>>16&255)/255,(a>>8&255)/255,(255&a)/255]},b.rgb2hex=function(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]},"function"!=typeof Function.prototype.bind&&(Function.prototype.bind=function(){var a=Array.prototype.slice;return function(b){function c(){var f=e.concat(a.call(arguments));d.apply(this instanceof c?this:b,f)}var d=this,e=a.call(arguments,1);if("function"!=typeof d)throw new TypeError;return c.prototype=function f(a){return a&&(f.prototype=a),this instanceof f?void 0:new f}(d.prototype),c}}()),b.AjaxRequest=function(){var a=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Microsoft.XMLHTTP"];if(!window.ActiveXObject)return window.XMLHttpRequest?new window.XMLHttpRequest:!1;for(var b=0;b<a.length;b++)try{return new window.ActiveXObject(a[b])}catch(c){}},b.canUseNewCanvasBlendModes=function(){var a=document.createElement("canvas");a.width=1,a.height=1;var b=a.getContext("2d");return b.fillStyle="#000",b.fillRect(0,0,1,1),b.globalCompositeOperation="multiply",b.fillStyle="#fff",b.fillRect(0,0,1,1),0===b.getImageData(0,0,1,1).data[0]},b.getNextPowerOfTwo=function(a){if(a>0&&0===(a&a-1))return a;for(var b=1;a>b;)b<<=1;return b},b.EventTarget=function(){var a={};this.addEventListener=this.on=function(b,c){void 0===a[b]&&(a[b]=[]),-1===a[b].indexOf(c)&&a[b].push(c)},this.dispatchEvent=this.emit=function(b){if(a[b.type]&&a[b.type].length)for(var c=0,d=a[b.type].length;d>c;c++)a[b.type][c](b)},this.removeEventListener=this.off=function(b,c){var d=a[b].indexOf(c);-1!==d&&a[b].splice(d,1)},this.removeAllEventListeners=function(b){var c=a[b];c&&(c.length=0)}},b.PolyK={},b.PolyK.Triangulate=function(a){var c=!0,d=a.length>>1;if(3>d)return[];for(var e=[],f=[],g=0;d>g;g++)f.push(g);g=0;for(var h=d;h>3;){var i=f[(g+0)%h],j=f[(g+1)%h],k=f[(g+2)%h],l=a[2*i],m=a[2*i+1],n=a[2*j],o=a[2*j+1],p=a[2*k],q=a[2*k+1],r=!1;if(b.PolyK._convex(l,m,n,o,p,q,c)){r=!0;for(var s=0;h>s;s++){var t=f[s];if(t!==i&&t!==j&&t!==k&&b.PolyK._PointInTriangle(a[2*t],a[2*t+1],l,m,n,o,p,q)){r=!1;break}}}if(r)e.push(i,j,k),f.splice((g+1)%h,1),h--,g=0;else if(g++>3*h){if(!c)return window.console.log("PIXI Warning: shape too complex to fill"),[];for(e=[],f=[],g=0;d>g;g++)f.push(g);g=0,h=d,c=!1}}return e.push(f[0],f[1],f[2]),e},b.PolyK._PointInTriangle=function(a,b,c,d,e,f,g,h){var i=g-c,j=h-d,k=e-c,l=f-d,m=a-c,n=b-d,o=i*i+j*j,p=i*k+j*l,q=i*m+j*n,r=k*k+l*l,s=k*m+l*n,t=1/(o*r-p*p),u=(r*q-p*s)*t,v=(o*s-p*q)*t;return u>=0&&v>=0&&1>u+v},b.PolyK._convex=function(a,b,c,d,e,f,g){return(b-d)*(e-c)+(c-a)*(f-d)>=0===g},b.initDefaultShaders=function(){},b.CompileVertexShader=function(a,c){return b._CompileShader(a,c,a.VERTEX_SHADER)},b.CompileFragmentShader=function(a,c){return b._CompileShader(a,c,a.FRAGMENT_SHADER)},b._CompileShader=function(a,b,c){var d=b.join("\n"),e=a.createShader(c);return a.shaderSource(e,d),a.compileShader(e),a.getShaderParameter(e,a.COMPILE_STATUS)?e:(window.console.log(a.getShaderInfoLog(e)),null)},b.compileProgram=function(a,c,d){var e=b.CompileFragmentShader(a,d),f=b.CompileVertexShader(a,c),g=a.createProgram();return a.attachShader(g,f),a.attachShader(g,e),a.linkProgram(g),a.getProgramParameter(g,a.LINK_STATUS)||window.console.log("Could not initialise shaders"),g},b.PixiShader=function(a){this.gl=a,this.program=null,this.fragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"],this.textureCount=0,this.attributes=[],this.init()},b.PixiShader.prototype.init=function(){var a=this.gl,c=b.compileProgram(a,this.vertexSrc||b.PixiShader.defaultVertexSrc,this.fragmentSrc);a.useProgram(c),this.uSampler=a.getUniformLocation(c,"uSampler"),this.projectionVector=a.getUniformLocation(c,"projectionVector"),this.offsetVector=a.getUniformLocation(c,"offsetVector"),this.dimensions=a.getUniformLocation(c,"dimensions"),this.aVertexPosition=a.getAttribLocation(c,"aVertexPosition"),this.aTextureCoord=a.getAttribLocation(c,"aTextureCoord"),this.colorAttribute=a.getAttribLocation(c,"aColor"),-1===this.colorAttribute&&(this.colorAttribute=2),this.attributes=[this.aVertexPosition,this.aTextureCoord,this.colorAttribute];for(var d in this.uniforms)this.uniforms[d].uniformLocation=a.getUniformLocation(c,d);this.initUniforms(),this.program=c},b.PixiShader.prototype.initUniforms=function(){this.textureCount=1;var a,b=this.gl;for(var c in this.uniforms){a=this.uniforms[c];var d=a.type;"sampler2D"===d?(a._init=!1,null!==a.value&&this.initSampler2D(a)):"mat2"===d||"mat3"===d||"mat4"===d?(a.glMatrix=!0,a.glValueLength=1,"mat2"===d?a.glFunc=b.uniformMatrix2fv:"mat3"===d?a.glFunc=b.uniformMatrix3fv:"mat4"===d&&(a.glFunc=b.uniformMatrix4fv)):(a.glFunc=b["uniform"+d],a.glValueLength="2f"===d||"2i"===d?2:"3f"===d||"3i"===d?3:"4f"===d||"4i"===d?4:1)}},b.PixiShader.prototype.initSampler2D=function(a){if(a.value&&a.value.baseTexture&&a.value.baseTexture.hasLoaded){var b=this.gl;if(b.activeTexture(b["TEXTURE"+this.textureCount]),b.bindTexture(b.TEXTURE_2D,a.value.baseTexture._glTextures[b.id]),a.textureData){var c=a.textureData,d=c.magFilter?c.magFilter:b.LINEAR,e=c.minFilter?c.minFilter:b.LINEAR,f=c.wrapS?c.wrapS:b.CLAMP_TO_EDGE,g=c.wrapT?c.wrapT:b.CLAMP_TO_EDGE,h=c.luminance?b.LUMINANCE:b.RGBA;if(c.repeat&&(f=b.REPEAT,g=b.REPEAT),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,!!c.flipY),c.width){var i=c.width?c.width:512,j=c.height?c.height:2,k=c.border?c.border:0;b.texImage2D(b.TEXTURE_2D,0,h,i,j,k,h,b.UNSIGNED_BYTE,null)}else b.texImage2D(b.TEXTURE_2D,0,h,b.RGBA,b.UNSIGNED_BYTE,a.value.baseTexture.source);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,d),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,e),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,f),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,g)}b.uniform1i(a.uniformLocation,this.textureCount),a._init=!0,this.textureCount++}},b.PixiShader.prototype.syncUniforms=function(){this.textureCount=1;var a,c=this.gl;for(var d in this.uniforms)a=this.uniforms[d],1===a.glValueLength?a.glMatrix===!0?a.glFunc.call(c,a.uniformLocation,a.transpose,a.value):a.glFunc.call(c,a.uniformLocation,a.value):2===a.glValueLength?a.glFunc.call(c,a.uniformLocation,a.value.x,a.value.y):3===a.glValueLength?a.glFunc.call(c,a.uniformLocation,a.value.x,a.value.y,a.value.z):4===a.glValueLength?a.glFunc.call(c,a.uniformLocation,a.value.x,a.value.y,a.value.z,a.value.w):"sampler2D"===a.type&&(a._init?(c.activeTexture(c["TEXTURE"+this.textureCount]),c.bindTexture(c.TEXTURE_2D,a.value.baseTexture._glTextures[c.id]||b.createWebGLTexture(a.value.baseTexture,c)),c.uniform1i(a.uniformLocation,this.textureCount),this.textureCount++):this.initSampler2D(a))},b.PixiShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attributes=null},b.PixiShader.defaultVertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec2 aColor;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","varying vec2 vTextureCoord;","varying vec4 vColor;","const vec2 center = vec2(-1.0, 1.0);","void main(void) {","   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;","   vColor = vec4(color * aColor.x, aColor.x);","}"],b.PixiFastShader=function(a){this.gl=a,this.program=null,this.fragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying float vColor;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aPositionCoord;","attribute vec2 aScale;","attribute float aRotation;","attribute vec2 aTextureCoord;","attribute float aColor;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform mat3 uMatrix;","varying vec2 vTextureCoord;","varying float vColor;","const vec2 center = vec2(-1.0, 1.0);","void main(void) {","   vec2 v;","   vec2 sv = aVertexPosition * aScale;","   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);","   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);","   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;","   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor;","}"],this.textureCount=0,this.init()
},b.PixiFastShader.prototype.init=function(){var a=this.gl,c=b.compileProgram(a,this.vertexSrc,this.fragmentSrc);a.useProgram(c),this.uSampler=a.getUniformLocation(c,"uSampler"),this.projectionVector=a.getUniformLocation(c,"projectionVector"),this.offsetVector=a.getUniformLocation(c,"offsetVector"),this.dimensions=a.getUniformLocation(c,"dimensions"),this.uMatrix=a.getUniformLocation(c,"uMatrix"),this.aVertexPosition=a.getAttribLocation(c,"aVertexPosition"),this.aPositionCoord=a.getAttribLocation(c,"aPositionCoord"),this.aScale=a.getAttribLocation(c,"aScale"),this.aRotation=a.getAttribLocation(c,"aRotation"),this.aTextureCoord=a.getAttribLocation(c,"aTextureCoord"),this.colorAttribute=a.getAttribLocation(c,"aColor"),-1===this.colorAttribute&&(this.colorAttribute=2),this.attributes=[this.aVertexPosition,this.aPositionCoord,this.aScale,this.aRotation,this.aTextureCoord,this.colorAttribute],this.program=c},b.PixiFastShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attributes=null},b.StripShader=function(){this.program=null,this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying float vColor;","uniform float alpha;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));","   gl_FragColor = gl_FragColor * alpha;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute float aColor;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","varying vec2 vTextureCoord;","uniform vec2 offsetVector;","varying float vColor;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition, 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / projectionVector.y + 1.0 , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor;","}"]},b.StripShader.prototype.init=function(){var a=b.gl,c=b.compileProgram(a,this.vertexSrc,this.fragmentSrc);a.useProgram(c),this.uSampler=a.getUniformLocation(c,"uSampler"),this.projectionVector=a.getUniformLocation(c,"projectionVector"),this.offsetVector=a.getUniformLocation(c,"offsetVector"),this.colorAttribute=a.getAttribLocation(c,"aColor"),this.aVertexPosition=a.getAttribLocation(c,"aVertexPosition"),this.aTextureCoord=a.getAttribLocation(c,"aTextureCoord"),this.translationMatrix=a.getUniformLocation(c,"translationMatrix"),this.alpha=a.getUniformLocation(c,"alpha"),this.program=c},b.PrimitiveShader=function(a){this.gl=a,this.program=null,this.fragmentSrc=["precision mediump float;","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"],this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec4 aColor;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform float alpha;","uniform vec3 tint;","varying vec4 vColor;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);","   vColor = aColor * vec4(tint * alpha, alpha);","}"],this.init()},b.PrimitiveShader.prototype.init=function(){var a=this.gl,c=b.compileProgram(a,this.vertexSrc,this.fragmentSrc);a.useProgram(c),this.projectionVector=a.getUniformLocation(c,"projectionVector"),this.offsetVector=a.getUniformLocation(c,"offsetVector"),this.tintColor=a.getUniformLocation(c,"tint"),this.aVertexPosition=a.getAttribLocation(c,"aVertexPosition"),this.colorAttribute=a.getAttribLocation(c,"aColor"),this.attributes=[this.aVertexPosition,this.colorAttribute],this.translationMatrix=a.getUniformLocation(c,"translationMatrix"),this.alpha=a.getUniformLocation(c,"alpha"),this.program=c},b.PrimitiveShader.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.uniforms=null,this.gl=null,this.attribute=null},b.WebGLGraphics=function(){},b.WebGLGraphics.renderGraphics=function(a,c){var d=c.gl,e=c.projection,f=c.offset,g=c.shaderManager.primitiveShader;a._webGL[d.id]||(a._webGL[d.id]={points:[],indices:[],lastIndex:0,buffer:d.createBuffer(),indexBuffer:d.createBuffer()});var h=a._webGL[d.id];a.dirty&&(a.dirty=!1,a.clearDirty&&(a.clearDirty=!1,h.lastIndex=0,h.points=[],h.indices=[]),b.WebGLGraphics.updateGraphics(a,d)),c.shaderManager.activatePrimitiveShader(),d.blendFunc(d.ONE,d.ONE_MINUS_SRC_ALPHA),d.uniformMatrix3fv(g.translationMatrix,!1,a.worldTransform.toArray(!0)),d.uniform2f(g.projectionVector,e.x,-e.y),d.uniform2f(g.offsetVector,-f.x,-f.y),d.uniform3fv(g.tintColor,b.hex2rgb(a.tint)),d.uniform1f(g.alpha,a.worldAlpha),d.bindBuffer(d.ARRAY_BUFFER,h.buffer),d.vertexAttribPointer(g.aVertexPosition,2,d.FLOAT,!1,24,0),d.vertexAttribPointer(g.colorAttribute,4,d.FLOAT,!1,24,8),d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,h.indexBuffer),d.drawElements(d.TRIANGLE_STRIP,h.indices.length,d.UNSIGNED_SHORT,0),c.shaderManager.deactivatePrimitiveShader()},b.WebGLGraphics.updateGraphics=function(a,c){for(var d=a._webGL[c.id],e=d.lastIndex;e<a.graphicsData.length;e++){var f=a.graphicsData[e];f.type===b.Graphics.POLY?(f.fill&&f.points.length>3&&b.WebGLGraphics.buildPoly(f,d),f.lineWidth>0&&b.WebGLGraphics.buildLine(f,d)):f.type===b.Graphics.RECT?b.WebGLGraphics.buildRectangle(f,d):(f.type===b.Graphics.CIRC||f.type===b.Graphics.ELIP)&&b.WebGLGraphics.buildCircle(f,d)}d.lastIndex=a.graphicsData.length,d.glPoints=new Float32Array(d.points),c.bindBuffer(c.ARRAY_BUFFER,d.buffer),c.bufferData(c.ARRAY_BUFFER,d.glPoints,c.STATIC_DRAW),d.glIndicies=new Uint16Array(d.indices),c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,d.indexBuffer),c.bufferData(c.ELEMENT_ARRAY_BUFFER,d.glIndicies,c.STATIC_DRAW)},b.WebGLGraphics.buildRectangle=function(a,c){var d=a.points,e=d[0],f=d[1],g=d[2],h=d[3];if(a.fill){var i=b.hex2rgb(a.fillColor),j=a.fillAlpha,k=i[0]*j,l=i[1]*j,m=i[2]*j,n=c.points,o=c.indices,p=n.length/6;n.push(e,f),n.push(k,l,m,j),n.push(e+g,f),n.push(k,l,m,j),n.push(e,f+h),n.push(k,l,m,j),n.push(e+g,f+h),n.push(k,l,m,j),o.push(p,p,p+1,p+2,p+3,p+3)}if(a.lineWidth){var q=a.points;a.points=[e,f,e+g,f,e+g,f+h,e,f+h,e,f],b.WebGLGraphics.buildLine(a,c),a.points=q}},b.WebGLGraphics.buildCircle=function(a,c){var d=a.points,e=d[0],f=d[1],g=d[2],h=d[3],i=40,j=2*Math.PI/i,k=0;if(a.fill){var l=b.hex2rgb(a.fillColor),m=a.fillAlpha,n=l[0]*m,o=l[1]*m,p=l[2]*m,q=c.points,r=c.indices,s=q.length/6;for(r.push(s),k=0;i+1>k;k++)q.push(e,f,n,o,p,m),q.push(e+Math.sin(j*k)*g,f+Math.cos(j*k)*h,n,o,p,m),r.push(s++,s++);r.push(s-1)}if(a.lineWidth){var t=a.points;for(a.points=[],k=0;i+1>k;k++)a.points.push(e+Math.sin(j*k)*g,f+Math.cos(j*k)*h);b.WebGLGraphics.buildLine(a,c),a.points=t}},b.WebGLGraphics.buildLine=function(a,c){var d=0,e=a.points;if(0!==e.length){if(a.lineWidth%2)for(d=0;d<e.length;d++)e[d]+=.5;var f=new b.Point(e[0],e[1]),g=new b.Point(e[e.length-2],e[e.length-1]);if(f.x===g.x&&f.y===g.y){e.pop(),e.pop(),g=new b.Point(e[e.length-2],e[e.length-1]);var h=g.x+.5*(f.x-g.x),i=g.y+.5*(f.y-g.y);e.unshift(h,i),e.push(h,i)}var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G=c.points,H=c.indices,I=e.length/2,J=e.length,K=G.length/6,L=a.lineWidth/2,M=b.hex2rgb(a.lineColor),N=a.lineAlpha,O=M[0]*N,P=M[1]*N,Q=M[2]*N;for(l=e[0],m=e[1],n=e[2],o=e[3],r=-(m-o),s=l-n,F=Math.sqrt(r*r+s*s),r/=F,s/=F,r*=L,s*=L,G.push(l-r,m-s,O,P,Q,N),G.push(l+r,m+s,O,P,Q,N),d=1;I-1>d;d++)l=e[2*(d-1)],m=e[2*(d-1)+1],n=e[2*d],o=e[2*d+1],p=e[2*(d+1)],q=e[2*(d+1)+1],r=-(m-o),s=l-n,F=Math.sqrt(r*r+s*s),r/=F,s/=F,r*=L,s*=L,t=-(o-q),u=n-p,F=Math.sqrt(t*t+u*u),t/=F,u/=F,t*=L,u*=L,x=-s+m-(-s+o),y=-r+n-(-r+l),z=(-r+l)*(-s+o)-(-r+n)*(-s+m),A=-u+q-(-u+o),B=-t+n-(-t+p),C=(-t+p)*(-u+o)-(-t+n)*(-u+q),D=x*B-A*y,Math.abs(D)<.1?(D+=10.1,G.push(n-r,o-s,O,P,Q,N),G.push(n+r,o+s,O,P,Q,N)):(j=(y*C-B*z)/D,k=(A*z-x*C)/D,E=(j-n)*(j-n)+(k-o)+(k-o),E>19600?(v=r-t,w=s-u,F=Math.sqrt(v*v+w*w),v/=F,w/=F,v*=L,w*=L,G.push(n-v,o-w),G.push(O,P,Q,N),G.push(n+v,o+w),G.push(O,P,Q,N),G.push(n-v,o-w),G.push(O,P,Q,N),J++):(G.push(j,k),G.push(O,P,Q,N),G.push(n-(j-n),o-(k-o)),G.push(O,P,Q,N)));for(l=e[2*(I-2)],m=e[2*(I-2)+1],n=e[2*(I-1)],o=e[2*(I-1)+1],r=-(m-o),s=l-n,F=Math.sqrt(r*r+s*s),r/=F,s/=F,r*=L,s*=L,G.push(n-r,o-s),G.push(O,P,Q,N),G.push(n+r,o+s),G.push(O,P,Q,N),H.push(K),d=0;J>d;d++)H.push(K++);H.push(K-1)}},b.WebGLGraphics.buildPoly=function(a,c){var d=a.points;if(!(d.length<6)){var e=c.points,f=c.indices,g=d.length/2,h=b.hex2rgb(a.fillColor),i=a.fillAlpha,j=h[0]*i,k=h[1]*i,l=h[2]*i,m=b.PolyK.Triangulate(d),n=e.length/6,o=0;for(o=0;o<m.length;o+=3)f.push(m[o]+n),f.push(m[o]+n),f.push(m[o+1]+n),f.push(m[o+2]+n),f.push(m[o+2]+n);for(o=0;g>o;o++)e.push(d[2*o],d[2*o+1],j,k,l,i)}},b.glContexts=[],b.WebGLRenderer=function(a,c,d,e,f){b.defaultRenderer||(b.defaultRenderer=this),this.type=b.WEBGL_RENDERER,this.transparent=!!e,this.width=a||800,this.height=c||600,this.view=d||document.createElement("canvas"),this.view.width=this.width,this.view.height=this.height,this.contextLost=this.handleContextLost.bind(this),this.contextRestoredLost=this.handleContextRestored.bind(this),this.view.addEventListener("webglcontextlost",this.contextLost,!1),this.view.addEventListener("webglcontextrestored",this.contextRestoredLost,!1),this.options={alpha:this.transparent,antialias:!!f,premultipliedAlpha:!!e,stencil:!0};try{this.gl=this.view.getContext("experimental-webgl",this.options)}catch(g){try{this.gl=this.view.getContext("webgl",this.options)}catch(h){throw new Error(" This browser does not support webGL. Try using the canvas renderer"+this)}}var i=this.gl;this.glContextId=i.id=b.WebGLRenderer.glContextId++,b.glContexts[this.glContextId]=i,b.blendModesWebGL||(b.blendModesWebGL=[],b.blendModesWebGL[b.blendModes.NORMAL]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.ADD]=[i.SRC_ALPHA,i.DST_ALPHA],b.blendModesWebGL[b.blendModes.MULTIPLY]=[i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.SCREEN]=[i.SRC_ALPHA,i.ONE],b.blendModesWebGL[b.blendModes.OVERLAY]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.DARKEN]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.LIGHTEN]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.COLOR_DODGE]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.COLOR_BURN]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.HARD_LIGHT]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.SOFT_LIGHT]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.DIFFERENCE]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.EXCLUSION]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.HUE]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.SATURATION]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.COLOR]=[i.ONE,i.ONE_MINUS_SRC_ALPHA],b.blendModesWebGL[b.blendModes.LUMINOSITY]=[i.ONE,i.ONE_MINUS_SRC_ALPHA]),this.projection=new b.Point,this.projection.x=this.width/2,this.projection.y=-this.height/2,this.offset=new b.Point(0,0),this.resize(this.width,this.height),this.contextLost=!1,this.shaderManager=new b.WebGLShaderManager(i),this.spriteBatch=new b.WebGLSpriteBatch(i),this.maskManager=new b.WebGLMaskManager(i),this.filterManager=new b.WebGLFilterManager(i,this.transparent),this.renderSession={},this.renderSession.gl=this.gl,this.renderSession.drawCount=0,this.renderSession.shaderManager=this.shaderManager,this.renderSession.maskManager=this.maskManager,this.renderSession.filterManager=this.filterManager,this.renderSession.spriteBatch=this.spriteBatch,this.renderSession.renderer=this,i.useProgram(this.shaderManager.defaultShader.program),i.disable(i.DEPTH_TEST),i.disable(i.CULL_FACE),i.enable(i.BLEND),i.colorMask(!0,!0,!0,this.transparent)},b.WebGLRenderer.prototype.constructor=b.WebGLRenderer,b.WebGLRenderer.prototype.render=function(a){if(!this.contextLost){this.__stage!==a&&(a.interactive&&a.interactionManager.removeEvents(),this.__stage=a),b.WebGLRenderer.updateTextures(),a.updateTransform(),a._interactive&&(a._interactiveEventsAdded||(a._interactiveEventsAdded=!0,a.interactionManager.setTarget(this)));var c=this.gl;c.viewport(0,0,this.width,this.height),c.bindFramebuffer(c.FRAMEBUFFER,null),this.transparent?c.clearColor(0,0,0,0):c.clearColor(a.backgroundColorSplit[0],a.backgroundColorSplit[1],a.backgroundColorSplit[2],1),c.clear(c.COLOR_BUFFER_BIT),this.renderDisplayObject(a,this.projection),a.interactive?a._interactiveEventsAdded||(a._interactiveEventsAdded=!0,a.interactionManager.setTarget(this)):a._interactiveEventsAdded&&(a._interactiveEventsAdded=!1,a.interactionManager.setTarget(this))}},b.WebGLRenderer.prototype.renderDisplayObject=function(a,b,c){this.renderSession.drawCount=0,this.renderSession.currentBlendMode=9999,this.renderSession.projection=b,this.renderSession.offset=this.offset,this.spriteBatch.begin(this.renderSession),this.filterManager.begin(this.renderSession,c),a._renderWebGL(this.renderSession),this.spriteBatch.end()},b.WebGLRenderer.updateTextures=function(){var a=0;for(a=0;a<b.Texture.frameUpdates.length;a++)b.WebGLRenderer.updateTextureFrame(b.Texture.frameUpdates[a]);for(a=0;a<b.texturesToDestroy.length;a++)b.WebGLRenderer.destroyTexture(b.texturesToDestroy[a]);b.texturesToUpdate.length=0,b.texturesToDestroy.length=0,b.Texture.frameUpdates.length=0},b.WebGLRenderer.destroyTexture=function(a){for(var c=a._glTextures.length-1;c>=0;c--){var d=a._glTextures[c],e=b.glContexts[c];e&&d&&e.deleteTexture(d)}a._glTextures.length=0},b.WebGLRenderer.updateTextureFrame=function(a){a.updateFrame=!1,a._updateWebGLuvs()},b.WebGLRenderer.prototype.resize=function(a,b){this.width=a,this.height=b,this.view.width=a,this.view.height=b,this.gl.viewport(0,0,this.width,this.height),this.projection.x=this.width/2,this.projection.y=-this.height/2},b.createWebGLTexture=function(a,c){return a.hasLoaded&&(a._glTextures[c.id]=c.createTexture(),c.bindTexture(c.TEXTURE_2D,a._glTextures[c.id]),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a.source),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,a.scaleMode===b.scaleModes.LINEAR?c.LINEAR:c.NEAREST),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,a.scaleMode===b.scaleModes.LINEAR?c.LINEAR:c.NEAREST),a._powerOf2?(c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.REPEAT),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.REPEAT)):(c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE)),c.bindTexture(c.TEXTURE_2D,null)),a._glTextures[c.id]},b.updateWebGLTexture=function(a,c){a._glTextures[c.id]&&(c.bindTexture(c.TEXTURE_2D,a._glTextures[c.id]),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a.source),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,a.scaleMode===b.scaleModes.LINEAR?c.LINEAR:c.NEAREST),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,a.scaleMode===b.scaleModes.LINEAR?c.LINEAR:c.NEAREST),a._powerOf2?(c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.REPEAT),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.REPEAT)):(c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE)),c.bindTexture(c.TEXTURE_2D,null))},b.WebGLRenderer.prototype.handleContextLost=function(a){a.preventDefault(),this.contextLost=!0},b.WebGLRenderer.prototype.handleContextRestored=function(){try{this.gl=this.view.getContext("experimental-webgl",this.options)}catch(a){try{this.gl=this.view.getContext("webgl",this.options)}catch(c){throw new Error(" This browser does not support webGL. Try using the canvas renderer"+this)}}var d=this.gl;d.id=b.WebGLRenderer.glContextId++,this.shaderManager.setContext(d),this.spriteBatch.setContext(d),this.maskManager.setContext(d),this.filterManager.setContext(d),this.renderSession.gl=this.gl,d.disable(d.DEPTH_TEST),d.disable(d.CULL_FACE),d.enable(d.BLEND),d.colorMask(!0,!0,!0,this.transparent),this.gl.viewport(0,0,this.width,this.height);for(var e in b.TextureCache){var f=b.TextureCache[e].baseTexture;f._glTextures=[]}this.contextLost=!1},b.WebGLRenderer.prototype.destroy=function(){this.view.removeEventListener("webglcontextlost",this.contextLost),this.view.removeEventListener("webglcontextrestored",this.contextRestoredLost),b.glContexts[this.glContextId]=null,this.projection=null,this.offset=null,this.shaderManager.destroy(),this.spriteBatch.destroy(),this.maskManager.destroy(),this.filterManager.destroy(),this.shaderManager=null,this.spriteBatch=null,this.maskManager=null,this.filterManager=null,this.gl=null,this.renderSession=null},b.WebGLRenderer.glContextId=0,b.WebGLMaskManager=function(a){this.maskStack=[],this.maskPosition=0,this.setContext(a)},b.WebGLMaskManager.prototype.setContext=function(a){this.gl=a},b.WebGLMaskManager.prototype.pushMask=function(a,c){var d=this.gl;0===this.maskStack.length&&(d.enable(d.STENCIL_TEST),d.stencilFunc(d.ALWAYS,1,1)),this.maskStack.push(a),d.colorMask(!1,!1,!1,!0),d.stencilOp(d.KEEP,d.KEEP,d.INCR),b.WebGLGraphics.renderGraphics(a,c),d.colorMask(!0,!0,!0,!0),d.stencilFunc(d.NOTEQUAL,0,this.maskStack.length),d.stencilOp(d.KEEP,d.KEEP,d.KEEP)},b.WebGLMaskManager.prototype.popMask=function(a){var c=this.gl,d=this.maskStack.pop();d&&(c.colorMask(!1,!1,!1,!1),c.stencilOp(c.KEEP,c.KEEP,c.DECR),b.WebGLGraphics.renderGraphics(d,a),c.colorMask(!0,!0,!0,!0),c.stencilFunc(c.NOTEQUAL,0,this.maskStack.length),c.stencilOp(c.KEEP,c.KEEP,c.KEEP)),0===this.maskStack.length&&c.disable(c.STENCIL_TEST)},b.WebGLMaskManager.prototype.destroy=function(){this.maskStack=null,this.gl=null},b.WebGLShaderManager=function(a){this.maxAttibs=10,this.attribState=[],this.tempAttribState=[];for(var b=0;b<this.maxAttibs;b++)this.attribState[b]=!1;this.setContext(a)},b.WebGLShaderManager.prototype.setContext=function(a){this.gl=a,this.primitiveShader=new b.PrimitiveShader(a),this.defaultShader=new b.PixiShader(a),this.fastShader=new b.PixiFastShader(a),this.activateShader(this.defaultShader)},b.WebGLShaderManager.prototype.setAttribs=function(a){var b;for(b=0;b<this.tempAttribState.length;b++)this.tempAttribState[b]=!1;for(b=0;b<a.length;b++){var c=a[b];this.tempAttribState[c]=!0}var d=this.gl;for(b=0;b<this.attribState.length;b++)this.attribState[b]!==this.tempAttribState[b]&&(this.attribState[b]=this.tempAttribState[b],this.tempAttribState[b]?d.enableVertexAttribArray(b):d.disableVertexAttribArray(b))},b.WebGLShaderManager.prototype.activateShader=function(a){this.currentShader=a,this.gl.useProgram(a.program),this.setAttribs(a.attributes)},b.WebGLShaderManager.prototype.activatePrimitiveShader=function(){var a=this.gl;a.useProgram(this.primitiveShader.program),this.setAttribs(this.primitiveShader.attributes)},b.WebGLShaderManager.prototype.deactivatePrimitiveShader=function(){var a=this.gl;a.useProgram(this.defaultShader.program),this.setAttribs(this.defaultShader.attributes)},b.WebGLShaderManager.prototype.destroy=function(){this.attribState=null,this.tempAttribState=null,this.primitiveShader.destroy(),this.defaultShader.destroy(),this.fastShader.destroy(),this.gl=null},b.WebGLSpriteBatch=function(a){this.vertSize=6,this.size=2e3;var b=4*this.size*this.vertSize,c=6*this.size;this.vertices=new Float32Array(b),this.indices=new Uint16Array(c),this.lastIndexCount=0;for(var d=0,e=0;c>d;d+=6,e+=4)this.indices[d+0]=e+0,this.indices[d+1]=e+1,this.indices[d+2]=e+2,this.indices[d+3]=e+0,this.indices[d+4]=e+2,this.indices[d+5]=e+3;this.drawing=!1,this.currentBatchSize=0,this.currentBaseTexture=null,this.setContext(a)},b.WebGLSpriteBatch.prototype.setContext=function(a){this.gl=a,this.vertexBuffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.indices,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,this.vertices,a.DYNAMIC_DRAW),this.currentBlendMode=99999},b.WebGLSpriteBatch.prototype.begin=function(a){this.renderSession=a,this.shader=this.renderSession.shaderManager.defaultShader,this.start()},b.WebGLSpriteBatch.prototype.end=function(){this.flush()},b.WebGLSpriteBatch.prototype.render=function(a){var b=a.texture;(b.baseTexture!==this.currentBaseTexture||this.currentBatchSize>=this.size)&&(this.flush(),this.currentBaseTexture=b.baseTexture),a.blendMode!==this.currentBlendMode&&this.setBlendMode(a.blendMode);var c=a._uvs||a.texture._uvs;if(c){var d,e,f,g,h=a.worldAlpha,i=a.tint,j=this.vertices,k=a.anchor.x,l=a.anchor.y;if(a.texture.trim){var m=a.texture.trim;e=m.x-k*m.width,d=e+b.frame.width,g=m.y-l*m.height,f=g+b.frame.height}else d=b.frame.width*(1-k),e=b.frame.width*-k,f=b.frame.height*(1-l),g=b.frame.height*-l;var n=4*this.currentBatchSize*this.vertSize,o=a.worldTransform,p=o.a,q=o.c,r=o.b,s=o.d,t=o.tx,u=o.ty;j[n++]=p*e+r*g+t,j[n++]=s*g+q*e+u,j[n++]=c.x0,j[n++]=c.y0,j[n++]=h,j[n++]=i,j[n++]=p*d+r*g+t,j[n++]=s*g+q*d+u,j[n++]=c.x1,j[n++]=c.y1,j[n++]=h,j[n++]=i,j[n++]=p*d+r*f+t,j[n++]=s*f+q*d+u,j[n++]=c.x2,j[n++]=c.y2,j[n++]=h,j[n++]=i,j[n++]=p*e+r*f+t,j[n++]=s*f+q*e+u,j[n++]=c.x3,j[n++]=c.y3,j[n++]=h,j[n++]=i,this.currentBatchSize++}},b.WebGLSpriteBatch.prototype.renderTilingSprite=function(a){var c=a.tilingTexture;(c.baseTexture!==this.currentBaseTexture||this.currentBatchSize>=this.size)&&(this.flush(),this.currentBaseTexture=c.baseTexture),a.blendMode!==this.currentBlendMode&&this.setBlendMode(a.blendMode),a._uvs||(a._uvs=new b.TextureUvs);var d=a._uvs;a.tilePosition.x%=c.baseTexture.width*a.tileScaleOffset.x,a.tilePosition.y%=c.baseTexture.height*a.tileScaleOffset.y;var e=a.tilePosition.x/(c.baseTexture.width*a.tileScaleOffset.x),f=a.tilePosition.y/(c.baseTexture.height*a.tileScaleOffset.y),g=a.width/c.baseTexture.width/(a.tileScale.x*a.tileScaleOffset.x),h=a.height/c.baseTexture.height/(a.tileScale.y*a.tileScaleOffset.y);d.x0=0-e,d.y0=0-f,d.x1=1*g-e,d.y1=0-f,d.x2=1*g-e,d.y2=1*h-f,d.x3=0-e,d.y3=1*h-f;var i=a.worldAlpha,j=a.tint,k=this.vertices,l=a.width,m=a.height,n=a.anchor.x,o=a.anchor.y,p=l*(1-n),q=l*-n,r=m*(1-o),s=m*-o,t=4*this.currentBatchSize*this.vertSize,u=a.worldTransform,v=u.a,w=u.c,x=u.b,y=u.d,z=u.tx,A=u.ty;k[t++]=v*q+x*s+z,k[t++]=y*s+w*q+A,k[t++]=d.x0,k[t++]=d.y0,k[t++]=i,k[t++]=j,k[t++]=v*p+x*s+z,k[t++]=y*s+w*p+A,k[t++]=d.x1,k[t++]=d.y1,k[t++]=i,k[t++]=j,k[t++]=v*p+x*r+z,k[t++]=y*r+w*p+A,k[t++]=d.x2,k[t++]=d.y2,k[t++]=i,k[t++]=j,k[t++]=v*q+x*r+z,k[t++]=y*r+w*q+A,k[t++]=d.x3,k[t++]=d.y3,k[t++]=i,k[t++]=j,this.currentBatchSize++},b.WebGLSpriteBatch.prototype.flush=function(){if(0!==this.currentBatchSize){var a=this.gl;if(a.bindTexture(a.TEXTURE_2D,this.currentBaseTexture._glTextures[a.id]||b.createWebGLTexture(this.currentBaseTexture,a)),this.currentBatchSize>.5*this.size)a.bufferSubData(a.ARRAY_BUFFER,0,this.vertices);else{var c=this.vertices.subarray(0,4*this.currentBatchSize*this.vertSize);a.bufferSubData(a.ARRAY_BUFFER,0,c)}a.drawElements(a.TRIANGLES,6*this.currentBatchSize,a.UNSIGNED_SHORT,0),this.currentBatchSize=0,this.renderSession.drawCount++}},b.WebGLSpriteBatch.prototype.stop=function(){this.flush()},b.WebGLSpriteBatch.prototype.start=function(){var a=this.gl;a.activeTexture(a.TEXTURE0),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var c=this.renderSession.projection;a.uniform2f(this.shader.projectionVector,c.x,c.y);var d=4*this.vertSize;a.vertexAttribPointer(this.shader.aVertexPosition,2,a.FLOAT,!1,d,0),a.vertexAttribPointer(this.shader.aTextureCoord,2,a.FLOAT,!1,d,8),a.vertexAttribPointer(this.shader.colorAttribute,2,a.FLOAT,!1,d,16),this.currentBlendMode!==b.blendModes.NORMAL&&this.setBlendMode(b.blendModes.NORMAL)},b.WebGLSpriteBatch.prototype.setBlendMode=function(a){this.flush(),this.currentBlendMode=a;var c=b.blendModesWebGL[this.currentBlendMode];this.gl.blendFunc(c[0],c[1])},b.WebGLSpriteBatch.prototype.destroy=function(){this.vertices=null,this.indices=null,this.gl.deleteBuffer(this.vertexBuffer),this.gl.deleteBuffer(this.indexBuffer),this.currentBaseTexture=null,this.gl=null},b.WebGLFastSpriteBatch=function(a){this.vertSize=10,this.maxSize=6e3,this.size=this.maxSize;var b=4*this.size*this.vertSize,c=6*this.maxSize;this.vertices=new Float32Array(b),this.indices=new Uint16Array(c),this.vertexBuffer=null,this.indexBuffer=null,this.lastIndexCount=0;for(var d=0,e=0;c>d;d+=6,e+=4)this.indices[d+0]=e+0,this.indices[d+1]=e+1,this.indices[d+2]=e+2,this.indices[d+3]=e+0,this.indices[d+4]=e+2,this.indices[d+5]=e+3;this.drawing=!1,this.currentBatchSize=0,this.currentBaseTexture=null,this.currentBlendMode=0,this.renderSession=null,this.shader=null,this.matrix=null,this.setContext(a)},b.WebGLFastSpriteBatch.prototype.setContext=function(a){this.gl=a,this.vertexBuffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.indices,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,this.vertices,a.DYNAMIC_DRAW),this.currentBlendMode=99999},b.WebGLFastSpriteBatch.prototype.begin=function(a,b){this.renderSession=b,this.shader=this.renderSession.shaderManager.fastShader,this.matrix=a.worldTransform.toArray(!0),this.start()},b.WebGLFastSpriteBatch.prototype.end=function(){this.flush()},b.WebGLFastSpriteBatch.prototype.render=function(a){var b=a.children,c=b[0];if(c.texture._uvs){this.currentBaseTexture=c.texture.baseTexture,c.blendMode!==this.currentBlendMode&&this.setBlendMode(c.blendMode);for(var d=0,e=b.length;e>d;d++)this.renderSprite(b[d]);this.flush()}},b.WebGLFastSpriteBatch.prototype.renderSprite=function(a){if(a.visible&&(a.texture.baseTexture===this.currentBaseTexture||(this.flush(),this.currentBaseTexture=a.texture.baseTexture,a.texture._uvs))){var b,c,d,e,f,g,h,i,j=this.vertices;if(b=a.texture._uvs,c=a.texture.frame.width,d=a.texture.frame.height,a.texture.trim){var k=a.texture.trim;f=k.x-a.anchor.x*k.width,e=f+a.texture.frame.width,h=k.y-a.anchor.y*k.height,g=h+a.texture.frame.height}else e=a.texture.frame.width*(1-a.anchor.x),f=a.texture.frame.width*-a.anchor.x,g=a.texture.frame.height*(1-a.anchor.y),h=a.texture.frame.height*-a.anchor.y;i=4*this.currentBatchSize*this.vertSize,j[i++]=f,j[i++]=h,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b.x0,j[i++]=b.y1,j[i++]=a.alpha,j[i++]=e,j[i++]=h,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b.x1,j[i++]=b.y1,j[i++]=a.alpha,j[i++]=e,j[i++]=g,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b.x2,j[i++]=b.y2,j[i++]=a.alpha,j[i++]=f,j[i++]=g,j[i++]=a.position.x,j[i++]=a.position.y,j[i++]=a.scale.x,j[i++]=a.scale.y,j[i++]=a.rotation,j[i++]=b.x3,j[i++]=b.y3,j[i++]=a.alpha,this.currentBatchSize++,this.currentBatchSize>=this.size&&this.flush()}},b.WebGLFastSpriteBatch.prototype.flush=function(){if(0!==this.currentBatchSize){var a=this.gl;if(this.currentBaseTexture._glTextures[a.id]||b.createWebGLTexture(this.currentBaseTexture,a),a.bindTexture(a.TEXTURE_2D,this.currentBaseTexture._glTextures[a.id]),this.currentBatchSize>.5*this.size)a.bufferSubData(a.ARRAY_BUFFER,0,this.vertices);else{var c=this.vertices.subarray(0,4*this.currentBatchSize*this.vertSize);a.bufferSubData(a.ARRAY_BUFFER,0,c)}a.drawElements(a.TRIANGLES,6*this.currentBatchSize,a.UNSIGNED_SHORT,0),this.currentBatchSize=0,this.renderSession.drawCount++}},b.WebGLFastSpriteBatch.prototype.stop=function(){this.flush()},b.WebGLFastSpriteBatch.prototype.start=function(){var a=this.gl;a.activeTexture(a.TEXTURE0),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var c=this.renderSession.projection;a.uniform2f(this.shader.projectionVector,c.x,c.y),a.uniformMatrix3fv(this.shader.uMatrix,!1,this.matrix);var d=4*this.vertSize;a.vertexAttribPointer(this.shader.aVertexPosition,2,a.FLOAT,!1,d,0),a.vertexAttribPointer(this.shader.aPositionCoord,2,a.FLOAT,!1,d,8),a.vertexAttribPointer(this.shader.aScale,2,a.FLOAT,!1,d,16),a.vertexAttribPointer(this.shader.aRotation,1,a.FLOAT,!1,d,24),a.vertexAttribPointer(this.shader.aTextureCoord,2,a.FLOAT,!1,d,28),a.vertexAttribPointer(this.shader.colorAttribute,1,a.FLOAT,!1,d,36),this.currentBlendMode!==b.blendModes.NORMAL&&this.setBlendMode(b.blendModes.NORMAL)},b.WebGLFastSpriteBatch.prototype.setBlendMode=function(a){this.flush(),this.currentBlendMode=a;var c=b.blendModesWebGL[this.currentBlendMode];this.gl.blendFunc(c[0],c[1])},b.WebGLFilterManager=function(a,b){this.transparent=b,this.filterStack=[],this.offsetX=0,this.offsetY=0,this.setContext(a)},b.WebGLFilterManager.prototype.setContext=function(a){this.gl=a,this.texturePool=[],this.initShaderBuffers()},b.WebGLFilterManager.prototype.begin=function(a,b){this.renderSession=a,this.defaultShader=a.shaderManager.defaultShader;var c=this.renderSession.projection;this.width=2*c.x,this.height=2*-c.y,this.buffer=b},b.WebGLFilterManager.prototype.pushFilter=function(a){var c=this.gl,d=this.renderSession.projection,e=this.renderSession.offset;this.filterStack.push(a);var f=a.filterPasses[0];this.offsetX+=a.target.filterArea.x,this.offsetY+=a.target.filterArea.y;var g=this.texturePool.pop();g?g.resize(this.width,this.height):g=new b.FilterTexture(this.gl,this.width,this.height),c.bindTexture(c.TEXTURE_2D,g.texture),a.target.filterArea=a.target.getBounds();var h=a.target.filterArea,i=f.padding;h.x-=i,h.y-=i,h.width+=2*i,h.height+=2*i,h.x<0&&(h.x=0),h.width>this.width&&(h.width=this.width),h.y<0&&(h.y=0),h.height>this.height&&(h.height=this.height),c.bindFramebuffer(c.FRAMEBUFFER,g.frameBuffer),c.viewport(0,0,h.width,h.height),d.x=h.width/2,d.y=-h.height/2,e.x=-h.x,e.y=-h.y,c.uniform2f(this.defaultShader.projectionVector,h.width/2,-h.height/2),c.uniform2f(this.defaultShader.offsetVector,-h.x,-h.y),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.clear(c.COLOR_BUFFER_BIT),a._glFilterTexture=g},b.WebGLFilterManager.prototype.popFilter=function(){var a=this.gl,c=this.filterStack.pop(),d=c.target.filterArea,e=c._glFilterTexture,f=this.renderSession.projection,g=this.renderSession.offset;if(c.filterPasses.length>1){a.viewport(0,0,d.width,d.height),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),this.vertexArray[0]=0,this.vertexArray[1]=d.height,this.vertexArray[2]=d.width,this.vertexArray[3]=d.height,this.vertexArray[4]=0,this.vertexArray[5]=0,this.vertexArray[6]=d.width,this.vertexArray[7]=0,a.bufferSubData(a.ARRAY_BUFFER,0,this.vertexArray),a.bindBuffer(a.ARRAY_BUFFER,this.uvBuffer),this.uvArray[2]=d.width/this.width,this.uvArray[5]=d.height/this.height,this.uvArray[6]=d.width/this.width,this.uvArray[7]=d.height/this.height,a.bufferSubData(a.ARRAY_BUFFER,0,this.uvArray);var h=e,i=this.texturePool.pop();i||(i=new b.FilterTexture(this.gl,this.width,this.height)),i.resize(this.width,this.height),a.bindFramebuffer(a.FRAMEBUFFER,i.frameBuffer),a.clear(a.COLOR_BUFFER_BIT),a.disable(a.BLEND);for(var j=0;j<c.filterPasses.length-1;j++){var k=c.filterPasses[j];a.bindFramebuffer(a.FRAMEBUFFER,i.frameBuffer),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,h.texture),this.applyFilterPass(k,d,d.width,d.height);var l=h;h=i,i=l}a.enable(a.BLEND),e=h,this.texturePool.push(i)}var m=c.filterPasses[c.filterPasses.length-1];this.offsetX-=d.x,this.offsetY-=d.y;var n=this.width,o=this.height,p=0,q=0,r=this.buffer;if(0===this.filterStack.length)a.colorMask(!0,!0,!0,!0);else{var s=this.filterStack[this.filterStack.length-1];d=s.target.filterArea,n=d.width,o=d.height,p=d.x,q=d.y,r=s._glFilterTexture.frameBuffer}f.x=n/2,f.y=-o/2,g.x=p,g.y=q,d=c.target.filterArea;var t=d.x-p,u=d.y-q;a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),this.vertexArray[0]=t,this.vertexArray[1]=u+d.height,this.vertexArray[2]=t+d.width,this.vertexArray[3]=u+d.height,this.vertexArray[4]=t,this.vertexArray[5]=u,this.vertexArray[6]=t+d.width,this.vertexArray[7]=u,a.bufferSubData(a.ARRAY_BUFFER,0,this.vertexArray),a.bindBuffer(a.ARRAY_BUFFER,this.uvBuffer),this.uvArray[2]=d.width/this.width,this.uvArray[5]=d.height/this.height,this.uvArray[6]=d.width/this.width,this.uvArray[7]=d.height/this.height,a.bufferSubData(a.ARRAY_BUFFER,0,this.uvArray),a.viewport(0,0,n,o),a.bindFramebuffer(a.FRAMEBUFFER,r),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,e.texture),this.applyFilterPass(m,d,n,o),a.useProgram(this.defaultShader.program),a.uniform2f(this.defaultShader.projectionVector,n/2,-o/2),a.uniform2f(this.defaultShader.offsetVector,-p,-q),this.texturePool.push(e),c._glFilterTexture=null
},b.WebGLFilterManager.prototype.applyFilterPass=function(a,c,d,e){var f=this.gl,g=a.shaders[f.id];g||(g=new b.PixiShader(f),g.fragmentSrc=a.fragmentSrc,g.uniforms=a.uniforms,g.init(),a.shaders[f.id]=g),f.useProgram(g.program),f.uniform2f(g.projectionVector,d/2,-e/2),f.uniform2f(g.offsetVector,0,0),a.uniforms.dimensions&&(a.uniforms.dimensions.value[0]=this.width,a.uniforms.dimensions.value[1]=this.height,a.uniforms.dimensions.value[2]=this.vertexArray[0],a.uniforms.dimensions.value[3]=this.vertexArray[5]),g.syncUniforms(),f.bindBuffer(f.ARRAY_BUFFER,this.vertexBuffer),f.vertexAttribPointer(g.aVertexPosition,2,f.FLOAT,!1,0,0),f.bindBuffer(f.ARRAY_BUFFER,this.uvBuffer),f.vertexAttribPointer(g.aTextureCoord,2,f.FLOAT,!1,0,0),f.bindBuffer(f.ARRAY_BUFFER,this.colorBuffer),f.vertexAttribPointer(g.colorAttribute,2,f.FLOAT,!1,0,0),f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,this.indexBuffer),f.drawElements(f.TRIANGLES,6,f.UNSIGNED_SHORT,0),this.renderSession.drawCount++},b.WebGLFilterManager.prototype.initShaderBuffers=function(){var a=this.gl;this.vertexBuffer=a.createBuffer(),this.uvBuffer=a.createBuffer(),this.colorBuffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),this.vertexArray=new Float32Array([0,0,1,0,0,1,1,1]),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,this.vertexArray,a.STATIC_DRAW),this.uvArray=new Float32Array([0,0,1,0,0,1,1,1]),a.bindBuffer(a.ARRAY_BUFFER,this.uvBuffer),a.bufferData(a.ARRAY_BUFFER,this.uvArray,a.STATIC_DRAW),this.colorArray=new Float32Array([1,16777215,1,16777215,1,16777215,1,16777215]),a.bindBuffer(a.ARRAY_BUFFER,this.colorBuffer),a.bufferData(a.ARRAY_BUFFER,this.colorArray,a.STATIC_DRAW),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,1,3,2]),a.STATIC_DRAW)},b.WebGLFilterManager.prototype.destroy=function(){var a=this.gl;this.filterStack=null,this.offsetX=0,this.offsetY=0;for(var b=0;b<this.texturePool.length;b++)this.texturePool.destroy();this.texturePool=null,a.deleteBuffer(this.vertexBuffer),a.deleteBuffer(this.uvBuffer),a.deleteBuffer(this.colorBuffer),a.deleteBuffer(this.indexBuffer)},b.FilterTexture=function(a,b,c){this.gl=a,this.frameBuffer=a.createFramebuffer(),this.texture=a.createTexture(),a.bindTexture(a.TEXTURE_2D,this.texture),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.bindFramebuffer(a.FRAMEBUFFER,this.framebuffer),a.bindFramebuffer(a.FRAMEBUFFER,this.frameBuffer),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.texture,0),this.resize(b,c)},b.FilterTexture.prototype.clear=function(){var a=this.gl;a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT)},b.FilterTexture.prototype.resize=function(a,b){if(this.width!==a||this.height!==b){this.width=a,this.height=b;var c=this.gl;c.bindTexture(c.TEXTURE_2D,this.texture),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,a,b,0,c.RGBA,c.UNSIGNED_BYTE,null)}},b.FilterTexture.prototype.destroy=function(){var a=this.gl;a.deleteFramebuffer(this.frameBuffer),a.deleteTexture(this.texture),this.frameBuffer=null,this.texture=null},b.CanvasMaskManager=function(){},b.CanvasMaskManager.prototype.pushMask=function(a,c){c.save();var d=a.alpha,e=a.worldTransform;c.setTransform(e.a,e.c,e.b,e.d,e.tx,e.ty),b.CanvasGraphics.renderGraphicsMask(a,c),c.clip(),a.worldAlpha=d},b.CanvasMaskManager.prototype.popMask=function(a){a.restore()},b.CanvasTinter=function(){},b.CanvasTinter.getTintedTexture=function(a,c){var d=a.texture;c=b.CanvasTinter.roundColor(c);var e="#"+("00000"+(0|c).toString(16)).substr(-6);if(d.tintCache=d.tintCache||{},d.tintCache[e])return d.tintCache[e];var f=b.CanvasTinter.canvas||document.createElement("canvas");if(b.CanvasTinter.tintMethod(d,c,f),b.CanvasTinter.convertTintToImage){var g=new Image;g.src=f.toDataURL(),d.tintCache[e]=g}else d.tintCache[e]=f,b.CanvasTinter.canvas=null;return f},b.CanvasTinter.tintWithMultiply=function(a,b,c){var d=c.getContext("2d"),e=a.frame;c.width=e.width,c.height=e.height,d.fillStyle="#"+("00000"+(0|b).toString(16)).substr(-6),d.fillRect(0,0,e.width,e.height),d.globalCompositeOperation="multiply",d.drawImage(a.baseTexture.source,e.x,e.y,e.width,e.height,0,0,e.width,e.height),d.globalCompositeOperation="destination-atop",d.drawImage(a.baseTexture.source,e.x,e.y,e.width,e.height,0,0,e.width,e.height)},b.CanvasTinter.tintWithOverlay=function(a,b,c){var d=c.getContext("2d"),e=a.frame;c.width=e.width,c.height=e.height,d.globalCompositeOperation="copy",d.fillStyle="#"+("00000"+(0|b).toString(16)).substr(-6),d.fillRect(0,0,e.width,e.height),d.globalCompositeOperation="destination-atop",d.drawImage(a.baseTexture.source,e.x,e.y,e.width,e.height,0,0,e.width,e.height)},b.CanvasTinter.tintWithPerPixel=function(a,c,d){var e=d.getContext("2d"),f=a.frame;d.width=f.width,d.height=f.height,e.globalCompositeOperation="copy",e.drawImage(a.baseTexture.source,f.x,f.y,f.width,f.height,0,0,f.width,f.height);for(var g=b.hex2rgb(c),h=g[0],i=g[1],j=g[2],k=e.getImageData(0,0,f.width,f.height),l=k.data,m=0;m<l.length;m+=4)l[m+0]*=h,l[m+1]*=i,l[m+2]*=j;e.putImageData(k,0,0)},b.CanvasTinter.roundColor=function(a){var c=b.CanvasTinter.cacheStepsPerColorChannel,d=b.hex2rgb(a);return d[0]=Math.min(255,d[0]/c*c),d[1]=Math.min(255,d[1]/c*c),d[2]=Math.min(255,d[2]/c*c),b.rgb2hex(d)},b.CanvasTinter.cacheStepsPerColorChannel=8,b.CanvasTinter.convertTintToImage=!1,b.CanvasTinter.canUseMultiply=b.canUseNewCanvasBlendModes(),b.CanvasTinter.tintMethod=b.CanvasTinter.canUseMultiply?b.CanvasTinter.tintWithMultiply:b.CanvasTinter.tintWithPerPixel,b.CanvasRenderer=function(a,c,d,e){b.defaultRenderer=b.defaultRenderer||this,this.type=b.CANVAS_RENDERER,this.clearBeforeRender=!0,this.roundPixels=!1,this.transparent=!!e,b.blendModesCanvas||(b.blendModesCanvas=[],b.canUseNewCanvasBlendModes()?(b.blendModesCanvas[b.blendModes.NORMAL]="source-over",b.blendModesCanvas[b.blendModes.ADD]="lighter",b.blendModesCanvas[b.blendModes.MULTIPLY]="multiply",b.blendModesCanvas[b.blendModes.SCREEN]="screen",b.blendModesCanvas[b.blendModes.OVERLAY]="overlay",b.blendModesCanvas[b.blendModes.DARKEN]="darken",b.blendModesCanvas[b.blendModes.LIGHTEN]="lighten",b.blendModesCanvas[b.blendModes.COLOR_DODGE]="color-dodge",b.blendModesCanvas[b.blendModes.COLOR_BURN]="color-burn",b.blendModesCanvas[b.blendModes.HARD_LIGHT]="hard-light",b.blendModesCanvas[b.blendModes.SOFT_LIGHT]="soft-light",b.blendModesCanvas[b.blendModes.DIFFERENCE]="difference",b.blendModesCanvas[b.blendModes.EXCLUSION]="exclusion",b.blendModesCanvas[b.blendModes.HUE]="hue",b.blendModesCanvas[b.blendModes.SATURATION]="saturation",b.blendModesCanvas[b.blendModes.COLOR]="color",b.blendModesCanvas[b.blendModes.LUMINOSITY]="luminosity"):(b.blendModesCanvas[b.blendModes.NORMAL]="source-over",b.blendModesCanvas[b.blendModes.ADD]="lighter",b.blendModesCanvas[b.blendModes.MULTIPLY]="source-over",b.blendModesCanvas[b.blendModes.SCREEN]="source-over",b.blendModesCanvas[b.blendModes.OVERLAY]="source-over",b.blendModesCanvas[b.blendModes.DARKEN]="source-over",b.blendModesCanvas[b.blendModes.LIGHTEN]="source-over",b.blendModesCanvas[b.blendModes.COLOR_DODGE]="source-over",b.blendModesCanvas[b.blendModes.COLOR_BURN]="source-over",b.blendModesCanvas[b.blendModes.HARD_LIGHT]="source-over",b.blendModesCanvas[b.blendModes.SOFT_LIGHT]="source-over",b.blendModesCanvas[b.blendModes.DIFFERENCE]="source-over",b.blendModesCanvas[b.blendModes.EXCLUSION]="source-over",b.blendModesCanvas[b.blendModes.HUE]="source-over",b.blendModesCanvas[b.blendModes.SATURATION]="source-over",b.blendModesCanvas[b.blendModes.COLOR]="source-over",b.blendModesCanvas[b.blendModes.LUMINOSITY]="source-over")),this.width=a||800,this.height=c||600,this.view=d||document.createElement("canvas"),this.context=this.view.getContext("2d",{alpha:this.transparent}),this.refresh=!0,this.view.width=this.width,this.view.height=this.height,this.count=0,this.maskManager=new b.CanvasMaskManager,this.renderSession={context:this.context,maskManager:this.maskManager,scaleMode:null,smoothProperty:null},"imageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="imageSmoothingEnabled":"webkitImageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="webkitImageSmoothingEnabled":"mozImageSmoothingEnabled"in this.context?this.renderSession.smoothProperty="mozImageSmoothingEnabled":"oImageSmoothingEnabled"in this.context&&(this.renderSession.smoothProperty="oImageSmoothingEnabled")},b.CanvasRenderer.prototype.constructor=b.CanvasRenderer,b.CanvasRenderer.prototype.render=function(a){b.texturesToUpdate.length=0,b.texturesToDestroy.length=0,a.updateTransform(),this.context.setTransform(1,0,0,1,0,0),this.context.globalAlpha=1,!this.transparent&&this.clearBeforeRender?(this.context.fillStyle=a.backgroundColorString,this.context.fillRect(0,0,this.width,this.height)):this.transparent&&this.clearBeforeRender&&this.context.clearRect(0,0,this.width,this.height),this.renderDisplayObject(a),a.interactive&&(a._interactiveEventsAdded||(a._interactiveEventsAdded=!0,a.interactionManager.setTarget(this))),b.Texture.frameUpdates.length>0&&(b.Texture.frameUpdates.length=0)},b.CanvasRenderer.prototype.resize=function(a,b){this.width=a,this.height=b,this.view.width=a,this.view.height=b},b.CanvasRenderer.prototype.renderDisplayObject=function(a,b){this.renderSession.context=b||this.context,a._renderCanvas(this.renderSession)},b.CanvasRenderer.prototype.renderStripFlat=function(a){var b=this.context,c=a.verticies,d=c.length/2;this.count++,b.beginPath();for(var e=1;d-2>e;e++){var f=2*e,g=c[f],h=c[f+2],i=c[f+4],j=c[f+1],k=c[f+3],l=c[f+5];b.moveTo(g,j),b.lineTo(h,k),b.lineTo(i,l)}b.fillStyle="#FF0000",b.fill(),b.closePath()},b.CanvasRenderer.prototype.renderStrip=function(a){var b=this.context,c=a.verticies,d=a.uvs,e=c.length/2;this.count++;for(var f=1;e-2>f;f++){var g=2*f,h=c[g],i=c[g+2],j=c[g+4],k=c[g+1],l=c[g+3],m=c[g+5],n=d[g]*a.texture.width,o=d[g+2]*a.texture.width,p=d[g+4]*a.texture.width,q=d[g+1]*a.texture.height,r=d[g+3]*a.texture.height,s=d[g+5]*a.texture.height;b.save(),b.beginPath(),b.moveTo(h,k),b.lineTo(i,l),b.lineTo(j,m),b.closePath(),b.clip();var t=n*r+q*p+o*s-r*p-q*o-n*s,u=h*r+q*j+i*s-r*j-q*i-h*s,v=n*i+h*p+o*j-i*p-h*o-n*j,w=n*r*j+q*i*p+h*o*s-h*r*p-q*o*j-n*i*s,x=k*r+q*m+l*s-r*m-q*l-k*s,y=n*l+k*p+o*m-l*p-k*o-n*m,z=n*r*m+q*l*p+k*o*s-k*r*p-q*o*m-n*l*s;b.transform(u/t,x/t,v/t,y/t,w/t,z/t),b.drawImage(a.texture.baseTexture.source,0,0),b.restore()}},b.CanvasBuffer=function(a,b){this.width=a,this.height=b,this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=a,this.canvas.height=b},b.CanvasBuffer.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},b.CanvasBuffer.prototype.resize=function(a,b){this.width=this.canvas.width=a,this.height=this.canvas.height=b},b.CanvasGraphics=function(){},b.CanvasGraphics.renderGraphics=function(a,c){for(var d=a.worldAlpha,e="",f=0;f<a.graphicsData.length;f++){var g=a.graphicsData[f],h=g.points;if(c.strokeStyle=e="#"+("00000"+(0|g.lineColor).toString(16)).substr(-6),c.lineWidth=g.lineWidth,g.type===b.Graphics.POLY){c.beginPath(),c.moveTo(h[0],h[1]);for(var i=1;i<h.length/2;i++)c.lineTo(h[2*i],h[2*i+1]);h[0]===h[h.length-2]&&h[1]===h[h.length-1]&&c.closePath(),g.fill&&(c.globalAlpha=g.fillAlpha*d,c.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),c.fill()),g.lineWidth&&(c.globalAlpha=g.lineAlpha*d,c.stroke())}else if(g.type===b.Graphics.RECT)(g.fillColor||0===g.fillColor)&&(c.globalAlpha=g.fillAlpha*d,c.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),c.fillRect(h[0],h[1],h[2],h[3])),g.lineWidth&&(c.globalAlpha=g.lineAlpha*d,c.strokeRect(h[0],h[1],h[2],h[3]));else if(g.type===b.Graphics.CIRC)c.beginPath(),c.arc(h[0],h[1],h[2],0,2*Math.PI),c.closePath(),g.fill&&(c.globalAlpha=g.fillAlpha*d,c.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),c.fill()),g.lineWidth&&(c.globalAlpha=g.lineAlpha*d,c.stroke());else if(g.type===b.Graphics.ELIP){var j=g.points,k=2*j[2],l=2*j[3],m=j[0]-k/2,n=j[1]-l/2;c.beginPath();var o=.5522848,p=k/2*o,q=l/2*o,r=m+k,s=n+l,t=m+k/2,u=n+l/2;c.moveTo(m,u),c.bezierCurveTo(m,u-q,t-p,n,t,n),c.bezierCurveTo(t+p,n,r,u-q,r,u),c.bezierCurveTo(r,u+q,t+p,s,t,s),c.bezierCurveTo(t-p,s,m,u+q,m,u),c.closePath(),g.fill&&(c.globalAlpha=g.fillAlpha*d,c.fillStyle=e="#"+("00000"+(0|g.fillColor).toString(16)).substr(-6),c.fill()),g.lineWidth&&(c.globalAlpha=g.lineAlpha*d,c.stroke())}}},b.CanvasGraphics.renderGraphicsMask=function(a,c){var d=a.graphicsData.length;if(0!==d){d>1&&(d=1,window.console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"));for(var e=0;1>e;e++){var f=a.graphicsData[e],g=f.points;if(f.type===b.Graphics.POLY){c.beginPath(),c.moveTo(g[0],g[1]);for(var h=1;h<g.length/2;h++)c.lineTo(g[2*h],g[2*h+1]);g[0]===g[g.length-2]&&g[1]===g[g.length-1]&&c.closePath()}else if(f.type===b.Graphics.RECT)c.beginPath(),c.rect(g[0],g[1],g[2],g[3]),c.closePath();else if(f.type===b.Graphics.CIRC)c.beginPath(),c.arc(g[0],g[1],g[2],0,2*Math.PI),c.closePath();else if(f.type===b.Graphics.ELIP){var i=f.points,j=2*i[2],k=2*i[3],l=i[0]-j/2,m=i[1]-k/2;c.beginPath();var n=.5522848,o=j/2*n,p=k/2*n,q=l+j,r=m+k,s=l+j/2,t=m+k/2;c.moveTo(l,t),c.bezierCurveTo(l,t-p,s-o,m,s,m),c.bezierCurveTo(s+o,m,q,t-p,q,t),c.bezierCurveTo(q,t+p,s+o,r,s,r),c.bezierCurveTo(s-o,r,l,t+p,l,t),c.closePath()}}}},b.Graphics=function(){b.DisplayObjectContainer.call(this),this.renderable=!0,this.fillAlpha=1,this.lineWidth=0,this.lineColor="black",this.graphicsData=[],this.tint=16777215,this.blendMode=b.blendModes.NORMAL,this.currentPath={points:[]},this._webGL=[],this.isMask=!1,this.bounds=null,this.boundsPadding=10},b.Graphics.prototype=Object.create(b.DisplayObjectContainer.prototype),b.Graphics.prototype.constructor=b.Graphics,Object.defineProperty(b.Graphics.prototype,"cacheAsBitmap",{get:function(){return this._cacheAsBitmap},set:function(a){this._cacheAsBitmap=a,this._cacheAsBitmap?this._generateCachedSprite():(this.destroyCachedSprite(),this.dirty=!0)}}),b.Graphics.prototype.lineStyle=function(a,c,d){return this.currentPath.points.length||this.graphicsData.pop(),this.lineWidth=a||0,this.lineColor=c||0,this.lineAlpha=arguments.length<3?1:d,this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[],type:b.Graphics.POLY},this.graphicsData.push(this.currentPath),this},b.Graphics.prototype.moveTo=function(a,c){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath=this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[],type:b.Graphics.POLY},this.currentPath.points.push(a,c),this.graphicsData.push(this.currentPath),this},b.Graphics.prototype.lineTo=function(a,b){return this.currentPath.points.push(a,b),this.dirty=!0,this},b.Graphics.prototype.beginFill=function(a,b){return this.filling=!0,this.fillColor=a||0,this.fillAlpha=arguments.length<2?1:b,this},b.Graphics.prototype.endFill=function(){return this.filling=!1,this.fillColor=null,this.fillAlpha=1,this},b.Graphics.prototype.drawRect=function(a,c,d,e){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,c,d,e],type:b.Graphics.RECT},this.graphicsData.push(this.currentPath),this.dirty=!0,this},b.Graphics.prototype.drawCircle=function(a,c,d){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,c,d,d],type:b.Graphics.CIRC},this.graphicsData.push(this.currentPath),this.dirty=!0,this},b.Graphics.prototype.drawEllipse=function(a,c,d,e){return this.currentPath.points.length||this.graphicsData.pop(),this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[a,c,d,e],type:b.Graphics.ELIP},this.graphicsData.push(this.currentPath),this.dirty=!0,this},b.Graphics.prototype.clear=function(){return this.lineWidth=0,this.filling=!1,this.dirty=!0,this.clearDirty=!0,this.graphicsData=[],this.bounds=null,this},b.Graphics.prototype.generateTexture=function(){var a=this.getBounds(),c=new b.CanvasBuffer(a.width,a.height),d=b.Texture.fromCanvas(c.canvas);return c.context.translate(-a.x,-a.y),b.CanvasGraphics.renderGraphics(this,c.context),d},b.Graphics.prototype._renderWebGL=function(a){if(this.visible!==!1&&0!==this.alpha&&this.isMask!==!0){if(this._cacheAsBitmap)return this.dirty&&(this._generateCachedSprite(),b.updateWebGLTexture(this._cachedSprite.texture.baseTexture,a.gl),this.dirty=!1),void b.Sprite.prototype._renderWebGL.call(this._cachedSprite,a);if(a.spriteBatch.stop(),this._mask&&a.maskManager.pushMask(this.mask,a),this._filters&&a.filterManager.pushFilter(this._filterBlock),this.blendMode!==a.spriteBatch.currentBlendMode){a.spriteBatch.currentBlendMode=this.blendMode;var c=b.blendModesWebGL[a.spriteBatch.currentBlendMode];a.spriteBatch.gl.blendFunc(c[0],c[1])}if(b.WebGLGraphics.renderGraphics(this,a),this.children.length){a.spriteBatch.start();for(var d=0,e=this.children.length;e>d;d++)this.children[d]._renderWebGL(a);a.spriteBatch.stop()}this._filters&&a.filterManager.popFilter(),this._mask&&a.maskManager.popMask(a),a.drawCount++,a.spriteBatch.start()}},b.Graphics.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha&&this.isMask!==!0){var c=a.context,d=this.worldTransform;this.blendMode!==a.currentBlendMode&&(a.currentBlendMode=this.blendMode,c.globalCompositeOperation=b.blendModesCanvas[a.currentBlendMode]),c.setTransform(d.a,d.c,d.b,d.d,d.tx,d.ty),b.CanvasGraphics.renderGraphics(this,c);for(var e=0,f=this.children.length;f>e;e++)this.children[e]._renderCanvas(a)}},b.Graphics.prototype.getBounds=function(a){this.bounds||this.updateBounds();var b=this.bounds.x,c=this.bounds.width+this.bounds.x,d=this.bounds.y,e=this.bounds.height+this.bounds.y,f=a||this.worldTransform,g=f.a,h=f.c,i=f.b,j=f.d,k=f.tx,l=f.ty,m=g*c+i*e+k,n=j*e+h*c+l,o=g*b+i*e+k,p=j*e+h*b+l,q=g*b+i*d+k,r=j*d+h*b+l,s=g*c+i*d+k,t=j*d+h*c+l,u=-1/0,v=-1/0,w=1/0,x=1/0;w=w>m?m:w,w=w>o?o:w,w=w>q?q:w,w=w>s?s:w,x=x>n?n:x,x=x>p?p:x,x=x>r?r:x,x=x>t?t:x,u=m>u?m:u,u=o>u?o:u,u=q>u?q:u,u=s>u?s:u,v=n>v?n:v,v=p>v?p:v,v=r>v?r:v,v=t>v?t:v;var y=this._bounds;return y.x=w,y.width=u-w,y.y=x,y.height=v-x,y},b.Graphics.prototype.updateBounds=function(){for(var a,c,d,e,f,g=1/0,h=-1/0,i=1/0,j=-1/0,k=0;k<this.graphicsData.length;k++){var l=this.graphicsData[k],m=l.type,n=l.lineWidth;if(a=l.points,m===b.Graphics.RECT)c=a[0]-n/2,d=a[1]-n/2,e=a[2]+n,f=a[3]+n,g=g>c?c:g,h=c+e>h?c+e:h,i=i>d?c:i,j=d+f>j?d+f:j;else if(m===b.Graphics.CIRC||m===b.Graphics.ELIP)c=a[0],d=a[1],e=a[2]+n/2,f=a[3]+n/2,g=g>c-e?c-e:g,h=c+e>h?c+e:h,i=i>d-f?d-f:i,j=d+f>j?d+f:j;else for(var o=0;o<a.length;o+=2)c=a[o],d=a[o+1],g=g>c-n?c-n:g,h=c+n>h?c+n:h,i=i>d-n?d-n:i,j=d+n>j?d+n:j}var p=this.boundsPadding;this.bounds=new b.Rectangle(g-p,i-p,h-g+2*p,j-i+2*p)},b.Graphics.prototype._generateCachedSprite=function(){var a=this.getLocalBounds();if(this._cachedSprite)this._cachedSprite.buffer.resize(a.width,a.height);else{var c=new b.CanvasBuffer(a.width,a.height),d=b.Texture.fromCanvas(c.canvas);this._cachedSprite=new b.Sprite(d),this._cachedSprite.buffer=c,this._cachedSprite.worldTransform=this.worldTransform}this._cachedSprite.anchor.x=-(a.x/a.width),this._cachedSprite.anchor.y=-(a.y/a.height),this._cachedSprite.buffer.context.translate(-a.x,-a.y),b.CanvasGraphics.renderGraphics(this,this._cachedSprite.buffer.context)},b.Graphics.prototype.destroyCachedSprite=function(){this._cachedSprite.texture.destroy(!0),this._cachedSprite=null},b.Graphics.POLY=0,b.Graphics.RECT=1,b.Graphics.CIRC=2,b.Graphics.ELIP=3,b.TilingSprite=function(a,c,d){b.Sprite.call(this,a),this.width=c||100,this.height=d||100,this.tileScale=new b.Point(1,1),this.tileScaleOffset=new b.Point(1,1),this.tilePosition=new b.Point(0,0),this.renderable=!0,this.tint=16777215,this.blendMode=b.blendModes.NORMAL},b.TilingSprite.prototype=Object.create(b.Sprite.prototype),b.TilingSprite.prototype.constructor=b.TilingSprite,Object.defineProperty(b.TilingSprite.prototype,"width",{get:function(){return this._width},set:function(a){this._width=a}}),Object.defineProperty(b.TilingSprite.prototype,"height",{get:function(){return this._height},set:function(a){this._height=a}}),b.TilingSprite.prototype.onTextureUpdate=function(){this.updateFrame=!0},b.TilingSprite.prototype.setTexture=function(a){this.texture!==a&&(this.texture=a,this.refreshTexture=!0,this.cachedTint=16777215)},b.TilingSprite.prototype._renderWebGL=function(a){if(this.visible!==!1&&0!==this.alpha){var c,d;for(this.mask&&(a.spriteBatch.stop(),a.maskManager.pushMask(this.mask,a),a.spriteBatch.start()),this.filters&&(a.spriteBatch.flush(),a.filterManager.pushFilter(this._filterBlock)),!this.tilingTexture||this.refreshTexture?(this.generateTilingTexture(!0),this.tilingTexture&&this.tilingTexture.needsUpdate&&(b.updateWebGLTexture(this.tilingTexture.baseTexture,a.gl),this.tilingTexture.needsUpdate=!1)):a.spriteBatch.renderTilingSprite(this),c=0,d=this.children.length;d>c;c++)this.children[c]._renderWebGL(a);a.spriteBatch.stop(),this.filters&&a.filterManager.popFilter(),this.mask&&a.maskManager.popMask(a),a.spriteBatch.start()}},b.TilingSprite.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha){var c=a.context;this._mask&&a.maskManager.pushMask(this._mask,c),c.globalAlpha=this.worldAlpha;var d=this.worldTransform;c.setTransform(d.a,d.c,d.b,d.d,d.tx,d.ty),(!this.__tilePattern||this.refreshTexture)&&(this.generateTilingTexture(!1),this.tilingTexture&&(this.__tilePattern=c.createPattern(this.tilingTexture.baseTexture.source,"repeat"))),this.blendMode!==a.currentBlendMode&&(a.currentBlendMode=this.blendMode,c.globalCompositeOperation=b.blendModesCanvas[a.currentBlendMode]),c.beginPath();var e=this.tilePosition,f=this.tileScale;e.x%=this.tilingTexture.baseTexture.width,e.y%=this.tilingTexture.baseTexture.height,c.scale(f.x,f.y),c.translate(e.x,e.y),c.fillStyle=this.__tilePattern,c.fillRect(-e.x,-e.y,this.width/f.x,this.height/f.y),c.scale(1/f.x,1/f.y),c.translate(-e.x,-e.y),c.closePath(),this._mask&&a.maskManager.popMask(a.context)}},b.TilingSprite.prototype.getBounds=function(){var a=this._width,b=this._height,c=a*(1-this.anchor.x),d=a*-this.anchor.x,e=b*(1-this.anchor.y),f=b*-this.anchor.y,g=this.worldTransform,h=g.a,i=g.c,j=g.b,k=g.d,l=g.tx,m=g.ty,n=h*d+j*f+l,o=k*f+i*d+m,p=h*c+j*f+l,q=k*f+i*c+m,r=h*c+j*e+l,s=k*e+i*c+m,t=h*d+j*e+l,u=k*e+i*d+m,v=-1/0,w=-1/0,x=1/0,y=1/0;x=x>n?n:x,x=x>p?p:x,x=x>r?r:x,x=x>t?t:x,y=y>o?o:y,y=y>q?q:y,y=y>s?s:y,y=y>u?u:y,v=n>v?n:v,v=p>v?p:v,v=r>v?r:v,v=t>v?t:v,w=o>w?o:w,w=q>w?q:w,w=s>w?s:w,w=u>w?u:w;var z=this._bounds;return z.x=x,z.width=v-x,z.y=y,z.height=w-y,this._currentBounds=z,z},b.TilingSprite.prototype.generateTilingTexture=function(a){var c=this.texture;if(c.baseTexture.hasLoaded){var d,e,f=c.baseTexture,g=c.frame,h=g.width!==f.width||g.height!==f.height,i=!1;if(a?(d=b.getNextPowerOfTwo(g.width),e=b.getNextPowerOfTwo(g.height),g.width!==d&&g.height!==e&&(i=!0)):h&&(d=g.width,e=g.height,i=!0),i){var j;this.tilingTexture&&this.tilingTexture.isTiling?(j=this.tilingTexture.canvasBuffer,j.resize(d,e),this.tilingTexture.baseTexture.width=d,this.tilingTexture.baseTexture.height=e,this.tilingTexture.needsUpdate=!0):(j=new b.CanvasBuffer(d,e),this.tilingTexture=b.Texture.fromCanvas(j.canvas),this.tilingTexture.canvasBuffer=j,this.tilingTexture.isTiling=!0),j.context.drawImage(c.baseTexture.source,g.x,g.y,g.width,g.height,0,0,d,e),this.tileScaleOffset.x=g.width/d,this.tileScaleOffset.y=g.height/e}else this.tilingTexture&&this.tilingTexture.isTiling&&this.tilingTexture.destroy(!0),this.tileScaleOffset.x=1,this.tileScaleOffset.y=1,this.tilingTexture=c;this.refreshTexture=!1,this.tilingTexture.baseTexture._powerOf2=!0}},b.BaseTextureCache={},b.texturesToUpdate=[],b.texturesToDestroy=[],b.BaseTextureCacheIdGenerator=0,b.BaseTexture=function(a,c){if(b.EventTarget.call(this),this.width=100,this.height=100,this.scaleMode=c||b.scaleModes.DEFAULT,this.hasLoaded=!1,this.source=a,this.id=b.BaseTextureCacheIdGenerator++,this._glTextures=[],a){if(this.source.complete||this.source.getContext)this.hasLoaded=!0,this.width=this.source.width,this.height=this.source.height,b.texturesToUpdate.push(this);else{var d=this;this.source.onload=function(){d.hasLoaded=!0,d.width=d.source.width,d.height=d.source.height,b.texturesToUpdate.push(d),d.dispatchEvent({type:"loaded",content:d})}}this.imageUrl=null,this._powerOf2=!1}},b.BaseTexture.prototype.constructor=b.BaseTexture,b.BaseTexture.prototype.destroy=function(){this.imageUrl&&(delete b.BaseTextureCache[this.imageUrl],this.imageUrl=null,this.source.src=null),this.source=null,b.texturesToDestroy.push(this)},b.BaseTexture.prototype.updateSourceImage=function(a){this.hasLoaded=!1,this.source.src=null,this.source.src=a},b.BaseTexture.fromImage=function(a,c,d){var e=b.BaseTextureCache[a];if(!e){var f=new Image;c&&(f.crossOrigin=""),f.src=a,e=new b.BaseTexture(f,d),e.imageUrl=a,b.BaseTextureCache[a]=e}return e},b.BaseTexture.fromCanvas=function(a,c){a._pixiId||(a._pixiId="canvas_"+b.TextureCacheIdGenerator++);var d=b.BaseTextureCache[a._pixiId];return d||(d=new b.BaseTexture(a,c),b.BaseTextureCache[a._pixiId]=d),d},b.TextureCache={},b.FrameCache={},b.TextureCacheIdGenerator=0,b.Texture=function(a,c){if(b.EventTarget.call(this),c||(this.noFrame=!0,c=new b.Rectangle(0,0,1,1)),a instanceof b.Texture&&(a=a.baseTexture),this.baseTexture=a,this.frame=c,this.trim=null,this.scope=this,this._uvs=null,a.hasLoaded)this.noFrame&&(c=new b.Rectangle(0,0,a.width,a.height)),this.setFrame(c);else{var d=this;a.addEventListener("loaded",function(){d.onBaseTextureLoaded()})}},b.Texture.prototype.constructor=b.Texture,b.Texture.prototype.onBaseTextureLoaded=function(){var a=this.baseTexture;a.removeEventListener("loaded",this.onLoaded),this.noFrame&&(this.frame=new b.Rectangle(0,0,a.width,a.height)),this.setFrame(this.frame),this.scope.dispatchEvent({type:"update",content:this})},b.Texture.prototype.destroy=function(a){a&&this.baseTexture.destroy()},b.Texture.prototype.setFrame=function(a){if(this.frame=a,this.width=a.width,this.height=a.height,a.x+a.width>this.baseTexture.width||a.y+a.height>this.baseTexture.height)throw new Error("Texture Error: frame does not fit inside the base Texture dimensions "+this);this.updateFrame=!0,b.Texture.frameUpdates.push(this)},b.Texture.prototype._updateWebGLuvs=function(){this._uvs||(this._uvs=new b.TextureUvs);var a=this.frame,c=this.baseTexture.width,d=this.baseTexture.height;this._uvs.x0=a.x/c,this._uvs.y0=a.y/d,this._uvs.x1=(a.x+a.width)/c,this._uvs.y1=a.y/d,this._uvs.x2=(a.x+a.width)/c,this._uvs.y2=(a.y+a.height)/d,this._uvs.x3=a.x/c,this._uvs.y3=(a.y+a.height)/d},b.Texture.fromImage=function(a,c,d){var e=b.TextureCache[a];return e||(e=new b.Texture(b.BaseTexture.fromImage(a,c,d)),b.TextureCache[a]=e),e},b.Texture.fromFrame=function(a){var c=b.TextureCache[a];if(!c)throw new Error('The frameId "'+a+'" does not exist in the texture cache ');return c},b.Texture.fromCanvas=function(a,c){var d=b.BaseTexture.fromCanvas(a,c);return new b.Texture(d)},b.Texture.addTextureToCache=function(a,c){b.TextureCache[c]=a},b.Texture.removeTextureFromCache=function(a){var c=b.TextureCache[a];return delete b.TextureCache[a],delete b.BaseTextureCache[a],c},b.Texture.frameUpdates=[],b.TextureUvs=function(){this.x0=0,this.y0=0,this.x1=0,this.y1=0,this.x2=0,this.y2=0,this.x3=0,this.y4=0},b.RenderTexture=function(a,c,d){if(b.EventTarget.call(this),this.width=a||100,this.height=c||100,this.frame=new b.Rectangle(0,0,this.width,this.height),this.baseTexture=new b.BaseTexture,this.baseTexture.width=this.width,this.baseTexture.height=this.height,this.baseTexture._glTextures=[],this.baseTexture.hasLoaded=!0,this.renderer=d||b.defaultRenderer,this.renderer.type===b.WEBGL_RENDERER){var e=this.renderer.gl;this.textureBuffer=new b.FilterTexture(e,this.width,this.height),this.baseTexture._glTextures[e.id]=this.textureBuffer.texture,this.render=this.renderWebGL,this.projection=new b.Point(this.width/2,-this.height/2)}else console.log("renderer canvas"),this.render=this.renderCanvas,this.textureBuffer=new b.CanvasBuffer(this.width,this.height),this.baseTexture.source=this.textureBuffer.canvas;b.Texture.frameUpdates.push(this)},b.RenderTexture.prototype=Object.create(b.Texture.prototype),b.RenderTexture.prototype.constructor=b.RenderTexture,b.RenderTexture.prototype.resize=function(a,c){if(this.width=a,this.height=c,this.frame.width=this.width,this.frame.height=this.height,this.renderer.type===b.WEBGL_RENDERER){this.projection.x=this.width/2,this.projection.y=-this.height/2;var d=this.renderer.gl;d.bindTexture(d.TEXTURE_2D,this.baseTexture._glTextures[d.id]),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,this.width,this.height,0,d.RGBA,d.UNSIGNED_BYTE,null)}else this.textureBuffer.resize(this.width,this.height);b.Texture.frameUpdates.push(this)},b.RenderTexture.prototype.renderWebGL=function(a,c,d){var e=this.renderer.gl;e.colorMask(!0,!0,!0,!0),e.viewport(0,0,this.width,this.height),e.bindFramebuffer(e.FRAMEBUFFER,this.textureBuffer.frameBuffer),d&&this.textureBuffer.clear();var f=a.children,g=a.worldTransform;a.worldTransform=b.RenderTexture.tempMatrix,a.worldTransform.d=-1,a.worldTransform.ty=-2*this.projection.y,c&&(a.worldTransform.tx=c.x,a.worldTransform.ty-=c.y);for(var h=0,i=f.length;i>h;h++)f[h].updateTransform();b.WebGLRenderer.updateTextures(),this.renderer.renderDisplayObject(a,this.projection,this.textureBuffer.frameBuffer),a.worldTransform=g},b.RenderTexture.prototype.renderCanvas=function(a,c,d){var e=a.children,f=a.worldTransform;a.worldTransform=b.RenderTexture.tempMatrix,c&&(a.worldTransform.tx=c.x,a.worldTransform.ty=c.y);for(var g=0,h=e.length;h>g;g++)e[g].updateTransform();d&&this.textureBuffer.clear();var i=this.textureBuffer.context;this.renderer.renderDisplayObject(a,i),i.setTransform(1,0,0,1,0,0),a.worldTransform=f},b.RenderTexture.tempMatrix=new b.Matrix,"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=b),exports.PIXI=b):"undefined"!=typeof define&&define.amd?define("PIXI",function(){return a.PIXI=b}()):a.PIXI=b}).call(this),function(){var a=this,b=b||{VERSION:"<%= version %>",DEV_VERSION:"2.0.2",GAMES:[],AUTO:0,CANVAS:1,WEBGL:2,HEADLESS:3,NONE:0,LEFT:1,RIGHT:2,UP:3,DOWN:4,SPRITE:0,BUTTON:1,IMAGE:2,GRAPHICS:3,TEXT:4,TILESPRITE:5,BITMAPTEXT:6,GROUP:7,RENDERTEXTURE:8,TILEMAP:9,TILEMAPLAYER:10,EMITTER:11,POLYGON:12,BITMAPDATA:13,CANVAS_FILTER:14,WEBGL_FILTER:15,ELLIPSE:16,SPRITEBATCH:17,RETROFONT:18,blendModes:{NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16},scaleModes:{DEFAULT:0,LINEAR:0,NEAREST:1}};PIXI.InteractionManager=function(){},b.Utils={parseDimension:function(a,b){var c=0,d=0;return"string"==typeof a?"%"===a.substr(-1)?(c=parseInt(a,10)/100,d=0===b?window.innerWidth*c:window.innerHeight*c):d=parseInt(a,10):d=a,d},shuffle:function(a){for(var b=a.length-1;b>0;b--){var c=Math.floor(Math.random()*(b+1)),d=a[b];a[b]=a[c],a[c]=d}return a},pad:function(a,b,c,d){if("undefined"==typeof b)var b=0;if("undefined"==typeof c)var c=" ";if("undefined"==typeof d)var d=3;var e=0;if(b+1>=a.length)switch(d){case 1:a=new Array(b+1-a.length).join(c)+a;break;case 3:var f=Math.ceil((e=b-a.length)/2),g=e-f;
a=new Array(g+1).join(c)+a+new Array(f+1).join(c);break;default:a+=new Array(b+1-a.length).join(c)}return a},isPlainObject:function(a){if("object"!=typeof a||a.nodeType||a===a.window)return!1;try{if(a.constructor&&!{}.hasOwnProperty.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},extend:function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[1]||{},i=2),j===i&&(h=this,--i);j>i;i++)if(null!=(a=arguments[i]))for(c in a)d=h[c],e=a[c],h!==e&&(k&&e&&(b.Utils.isPlainObject(e)||(f=Array.isArray(e)))?(f?(f=!1,g=d&&Array.isArray(d)?d:[]):g=d&&b.Utils.isPlainObject(d)?d:{},h[c]=b.Utils.extend(k,g,e)):void 0!==e&&(h[c]=e));return h}},"function"!=typeof Function.prototype.bind&&(Function.prototype.bind=function(){var a=Array.prototype.slice;return function(b){function c(){var f=e.concat(a.call(arguments));d.apply(this instanceof c?this:b,f)}var d=this,e=a.call(arguments,1);if("function"!=typeof d)throw new TypeError;return c.prototype=function f(a){return a&&(f.prototype=a),this instanceof f?void 0:new f}(d.prototype),c}}()),Array.isArray||(Array.isArray=function(a){return"[object Array]"==Object.prototype.toString.call(a)}),b.Circle=function(a,b,c){a=a||0,b=b||0,c=c||0,this.x=a,this.y=b,this._diameter=c,this._radius=c>0?.5*c:0},b.Circle.prototype={circumference:function(){return 2*Math.PI*this._radius},setTo:function(a,b,c){return this.x=a,this.y=b,this._diameter=c,this._radius=.5*c,this},copyFrom:function(a){return this.setTo(a.x,a.y,a.diameter)},copyTo:function(a){return a.x=this.x,a.y=this.y,a.diameter=this._diameter,a},distance:function(a,c){return"undefined"==typeof c&&(c=!1),c?b.Math.distanceRound(this.x,this.y,a.x,a.y):b.Math.distance(this.x,this.y,a.x,a.y)},clone:function(a){return"undefined"==typeof a?a=new b.Circle(this.x,this.y,this.diameter):a.setTo(this.x,this.y,this.diameter),a},contains:function(a,c){return b.Circle.contains(this,a,c)},circumferencePoint:function(a,c,d){return b.Circle.circumferencePoint(this,a,c,d)},offset:function(a,b){return this.x+=a,this.y+=b,this},offsetPoint:function(a){return this.offset(a.x,a.y)},toString:function(){return"[{Phaser.Circle (x="+this.x+" y="+this.y+" diameter="+this.diameter+" radius="+this.radius+")}]"}},b.Circle.prototype.constructor=b.Circle,Object.defineProperty(b.Circle.prototype,"diameter",{get:function(){return this._diameter},set:function(a){a>0&&(this._diameter=a,this._radius=.5*a)}}),Object.defineProperty(b.Circle.prototype,"radius",{get:function(){return this._radius},set:function(a){a>0&&(this._radius=a,this._diameter=2*a)}}),Object.defineProperty(b.Circle.prototype,"left",{get:function(){return this.x-this._radius},set:function(a){a>this.x?(this._radius=0,this._diameter=0):this.radius=this.x-a}}),Object.defineProperty(b.Circle.prototype,"right",{get:function(){return this.x+this._radius},set:function(a){a<this.x?(this._radius=0,this._diameter=0):this.radius=a-this.x}}),Object.defineProperty(b.Circle.prototype,"top",{get:function(){return this.y-this._radius},set:function(a){a>this.y?(this._radius=0,this._diameter=0):this.radius=this.y-a}}),Object.defineProperty(b.Circle.prototype,"bottom",{get:function(){return this.y+this._radius},set:function(a){a<this.y?(this._radius=0,this._diameter=0):this.radius=a-this.y}}),Object.defineProperty(b.Circle.prototype,"area",{get:function(){return this._radius>0?Math.PI*this._radius*this._radius:0}}),Object.defineProperty(b.Circle.prototype,"empty",{get:function(){return 0===this._diameter},set:function(a){a===!0&&this.setTo(0,0,0)}}),b.Circle.contains=function(a,b,c){if(a.radius>0&&b>=a.left&&b<=a.right&&c>=a.top&&c<=a.bottom){var d=(a.x-b)*(a.x-b),e=(a.y-c)*(a.y-c);return d+e<=a.radius*a.radius}return!1},b.Circle.equals=function(a,b){return a.x==b.x&&a.y==b.y&&a.diameter==b.diameter},b.Circle.intersects=function(a,c){return b.Math.distance(a.x,a.y,c.x,c.y)<=a.radius+c.radius},b.Circle.circumferencePoint=function(a,c,d,e){return"undefined"==typeof d&&(d=!1),"undefined"==typeof e&&(e=new b.Point),d===!0&&(c=b.Math.degToRad(c)),e.x=a.x+a.radius*Math.cos(c),e.y=a.y+a.radius*Math.sin(c),e},b.Circle.intersectsRectangle=function(a,b){var c=Math.abs(a.x-b.x-b.halfWidth),d=b.halfWidth+a.radius;if(c>d)return!1;var e=Math.abs(a.y-b.y-b.halfHeight),f=b.halfHeight+a.radius;if(e>f)return!1;if(c<=b.halfWidth||e<=b.halfHeight)return!0;var g=c-b.halfWidth,h=e-b.halfHeight,i=g*g,j=h*h,k=a.radius*a.radius;return k>=i+j},PIXI.Circle=b.Circle,b.Point=function(a,b){a=a||0,b=b||0,this.x=a,this.y=b},b.Point.prototype={copyFrom:function(a){return this.setTo(a.x,a.y)},invert:function(){return this.setTo(this.y,this.x)},setTo:function(a,b){return this.x=a||0,this.y=b||(0!==b?this.x:0),this},set:function(a,b){return this.x=a||0,this.y=b||(0!==b?this.x:0),this},add:function(a,b){return this.x+=a,this.y+=b,this},subtract:function(a,b){return this.x-=a,this.y-=b,this},multiply:function(a,b){return this.x*=a,this.y*=b,this},divide:function(a,b){return this.x/=a,this.y/=b,this},clampX:function(a,c){return this.x=b.Math.clamp(this.x,a,c),this},clampY:function(a,c){return this.y=b.Math.clamp(this.y,a,c),this},clamp:function(a,c){return this.x=b.Math.clamp(this.x,a,c),this.y=b.Math.clamp(this.y,a,c),this},clone:function(a){return"undefined"==typeof a?a=new b.Point(this.x,this.y):a.setTo(this.x,this.y),a},copyTo:function(a){return a.x=this.x,a.y=this.y,a},distance:function(a,c){return b.Point.distance(this,a,c)},equals:function(a){return a.x==this.x&&a.y==this.y},rotate:function(a,c,d,e,f){return b.Point.rotate(this,a,c,d,e,f)},getMagnitude:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},setMagnitude:function(a){return this.normalize().multiply(a,a)},normalize:function(){if(!this.isZero()){var a=this.getMagnitude();this.x/=a,this.y/=a}return this},isZero:function(){return 0===this.x&&0===this.y},toString:function(){return"[{Point (x="+this.x+" y="+this.y+")}]"}},b.Point.prototype.constructor=b.Point,b.Point.add=function(a,c,d){return"undefined"==typeof d&&(d=new b.Point),d.x=a.x+c.x,d.y=a.y+c.y,d},b.Point.subtract=function(a,c,d){return"undefined"==typeof d&&(d=new b.Point),d.x=a.x-c.x,d.y=a.y-c.y,d},b.Point.multiply=function(a,c,d){return"undefined"==typeof d&&(d=new b.Point),d.x=a.x*c.x,d.y=a.y*c.y,d},b.Point.divide=function(a,c,d){return"undefined"==typeof d&&(d=new b.Point),d.x=a.x/c.x,d.y=a.y/c.y,d},b.Point.equals=function(a,b){return a.x==b.x&&a.y==b.y},b.Point.distance=function(a,c,d){return"undefined"==typeof d&&(d=!1),d?b.Math.distanceRound(a.x,a.y,c.x,c.y):b.Math.distance(a.x,a.y,c.x,c.y)},b.Point.rotate=function(a,c,d,e,f,g){return f=f||!1,g=g||null,f&&(e=b.Math.degToRad(e)),null===g&&(g=Math.sqrt((c-a.x)*(c-a.x)+(d-a.y)*(d-a.y))),a.setTo(c+g*Math.cos(e),d+g*Math.sin(e))},PIXI.Point=b.Point,b.Rectangle=function(a,b,c,d){a=a||0,b=b||0,c=c||0,d=d||0,this.x=a,this.y=b,this.width=c,this.height=d},b.Rectangle.prototype={offset:function(a,b){return this.x+=a,this.y+=b,this},offsetPoint:function(a){return this.offset(a.x,a.y)},setTo:function(a,b,c,d){return this.x=a,this.y=b,this.width=c,this.height=d,this},floor:function(){this.x=Math.floor(this.x),this.y=Math.floor(this.y)},floorAll:function(){this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.width=Math.floor(this.width),this.height=Math.floor(this.height)},copyFrom:function(a){return this.setTo(a.x,a.y,a.width,a.height)},copyTo:function(a){return a.x=this.x,a.y=this.y,a.width=this.width,a.height=this.height,a},inflate:function(a,c){return b.Rectangle.inflate(this,a,c)},size:function(a){return b.Rectangle.size(this,a)},clone:function(a){return b.Rectangle.clone(this,a)},contains:function(a,c){return b.Rectangle.contains(this,a,c)},containsRect:function(a){return b.Rectangle.containsRect(this,a)},equals:function(a){return b.Rectangle.equals(this,a)},intersection:function(a,c){return b.Rectangle.intersection(this,a,c)},intersects:function(a,c){return b.Rectangle.intersects(this,a,c)},intersectsRaw:function(a,c,d,e,f){return b.Rectangle.intersectsRaw(this,a,c,d,e,f)},union:function(a,c){return b.Rectangle.union(this,a,c)},toString:function(){return"[{Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+" empty="+this.empty+")}]"}},Object.defineProperty(b.Rectangle.prototype,"halfWidth",{get:function(){return Math.round(this.width/2)}}),Object.defineProperty(b.Rectangle.prototype,"halfHeight",{get:function(){return Math.round(this.height/2)}}),Object.defineProperty(b.Rectangle.prototype,"bottom",{get:function(){return this.y+this.height},set:function(a){this.height=a<=this.y?0:this.y-a}}),Object.defineProperty(b.Rectangle.prototype,"bottomRight",{get:function(){return new b.Point(this.right,this.bottom)},set:function(a){this.right=a.x,this.bottom=a.y}}),Object.defineProperty(b.Rectangle.prototype,"left",{get:function(){return this.x},set:function(a){this.width=a>=this.right?0:this.right-a,this.x=a}}),Object.defineProperty(b.Rectangle.prototype,"right",{get:function(){return this.x+this.width},set:function(a){this.width=a<=this.x?0:this.x+a}}),Object.defineProperty(b.Rectangle.prototype,"volume",{get:function(){return this.width*this.height}}),Object.defineProperty(b.Rectangle.prototype,"perimeter",{get:function(){return 2*this.width+2*this.height}}),Object.defineProperty(b.Rectangle.prototype,"centerX",{get:function(){return this.x+this.halfWidth},set:function(a){this.x=a-this.halfWidth}}),Object.defineProperty(b.Rectangle.prototype,"centerY",{get:function(){return this.y+this.halfHeight},set:function(a){this.y=a-this.halfHeight}}),Object.defineProperty(b.Rectangle.prototype,"top",{get:function(){return this.y},set:function(a){a>=this.bottom?(this.height=0,this.y=a):this.height=this.bottom-a}}),Object.defineProperty(b.Rectangle.prototype,"topLeft",{get:function(){return new b.Point(this.x,this.y)},set:function(a){this.x=a.x,this.y=a.y}}),Object.defineProperty(b.Rectangle.prototype,"empty",{get:function(){return!this.width||!this.height},set:function(a){a===!0&&this.setTo(0,0,0,0)}}),b.Rectangle.prototype.constructor=b.Rectangle,b.Rectangle.inflate=function(a,b,c){return a.x-=b,a.width+=2*b,a.y-=c,a.height+=2*c,a},b.Rectangle.inflatePoint=function(a,c){return b.Rectangle.inflate(a,c.x,c.y)},b.Rectangle.size=function(a,c){return"undefined"==typeof c?c=new b.Point(a.width,a.height):c.setTo(a.width,a.height),c},b.Rectangle.clone=function(a,c){return"undefined"==typeof c?c=new b.Rectangle(a.x,a.y,a.width,a.height):c.setTo(a.x,a.y,a.width,a.height),c},b.Rectangle.contains=function(a,b,c){return a.width<=0||a.height<=0?!1:b>=a.x&&b<=a.right&&c>=a.y&&c<=a.bottom},b.Rectangle.containsRaw=function(a,b,c,d,e,f){return e>=a&&a+c>=e&&f>=b&&b+d>=f},b.Rectangle.containsPoint=function(a,c){return b.Rectangle.contains(a,c.x,c.y)},b.Rectangle.containsRect=function(a,b){return a.volume>b.volume?!1:a.x>=b.x&&a.y>=b.y&&a.right<=b.right&&a.bottom<=b.bottom},b.Rectangle.equals=function(a,b){return a.x==b.x&&a.y==b.y&&a.width==b.width&&a.height==b.height},b.Rectangle.intersection=function(a,c,d){return"undefined"==typeof d&&(d=new b.Rectangle),b.Rectangle.intersects(a,c)&&(d.x=Math.max(a.x,c.x),d.y=Math.max(a.y,c.y),d.width=Math.min(a.right,c.right)-d.x,d.height=Math.min(a.bottom,c.bottom)-d.y),d},b.Rectangle.intersects=function(a,b){return a.width<=0||a.height<=0||b.width<=0||b.height<=0?!1:!(a.right<b.x||a.bottom<b.y||a.x>b.right||a.y>b.bottom)},b.Rectangle.intersectsRaw=function(a,b,c,d,e,f){return"undefined"==typeof f&&(f=0),!(b>a.right+f||c<a.left-f||d>a.bottom+f||e<a.top-f)},b.Rectangle.union=function(a,c,d){return"undefined"==typeof d&&(d=new b.Rectangle),d.setTo(Math.min(a.x,c.x),Math.min(a.y,c.y),Math.max(a.right,c.right)-Math.min(a.left,c.left),Math.max(a.bottom,c.bottom)-Math.min(a.top,c.top))},PIXI.Rectangle=b.Rectangle,PIXI.EmptyRectangle=new b.Rectangle(0,0,0,0),b.Line=function(a,c,d,e){a=a||0,c=c||0,d=d||0,e=e||0,this.start=new b.Point(a,c),this.end=new b.Point(d,e)},b.Line.prototype={setTo:function(a,b,c,d){return this.start.setTo(a,b),this.end.setTo(c,d),this},fromSprite:function(a,b,c){return"undefined"==typeof c&&(c=!1),c?this.setTo(a.center.x,a.center.y,b.center.x,b.center.y):this.setTo(a.x,a.y,b.x,b.y)},intersects:function(a,c,d){return b.Line.intersectsPoints(this.start,this.end,a.start,a.end,c,d)},pointOnLine:function(a,b){return(a-this.start.x)*(this.end.y-this.end.y)===(this.end.x-this.start.x)*(b-this.end.y)},pointOnSegment:function(a,b){var c=Math.min(this.start.x,this.end.x),d=Math.max(this.start.x,this.end.x),e=Math.min(this.start.y,this.end.y),f=Math.max(this.start.y,this.end.y);return this.pointOnLine(a,b)&&a>=c&&d>=a&&b>=e&&f>=b},coordinatesOnLine:function(a,b){"undefined"==typeof a&&(a=1),"undefined"==typeof b&&(b=[]);var c=Math.round(this.start.x),d=Math.round(this.start.y),e=Math.round(this.end.x),f=Math.round(this.end.y),g=Math.abs(e-c),h=Math.abs(f-d),i=e>c?1:-1,j=f>d?1:-1,k=g-h;b.push([c,d]);for(var l=1;c!=e||d!=f;){var m=k<<1;m>-h&&(k-=h,c+=i),g>m&&(k+=g,d+=j),l%a===0&&b.push([c,d]),l++}return b}},Object.defineProperty(b.Line.prototype,"length",{get:function(){return Math.sqrt((this.end.x-this.start.x)*(this.end.x-this.start.x)+(this.end.y-this.start.y)*(this.end.y-this.start.y))}}),Object.defineProperty(b.Line.prototype,"angle",{get:function(){return Math.atan2(this.end.x-this.start.x,this.end.y-this.start.y)}}),Object.defineProperty(b.Line.prototype,"slope",{get:function(){return(this.end.y-this.start.y)/(this.end.x-this.start.x)}}),Object.defineProperty(b.Line.prototype,"perpSlope",{get:function(){return-((this.end.x-this.start.x)/(this.end.y-this.start.y))}}),Object.defineProperty(b.Line.prototype,"x",{get:function(){return Math.min(this.start.x,this.end.x)}}),Object.defineProperty(b.Line.prototype,"y",{get:function(){return Math.min(this.start.y,this.end.y)}}),Object.defineProperty(b.Line.prototype,"left",{get:function(){return Math.min(this.start.x,this.end.x)}}),Object.defineProperty(b.Line.prototype,"right",{get:function(){return Math.max(this.start.x,this.end.x)}}),Object.defineProperty(b.Line.prototype,"top",{get:function(){return Math.min(this.start.y,this.end.y)}}),Object.defineProperty(b.Line.prototype,"bottom",{get:function(){return Math.max(this.start.y,this.end.y)}}),Object.defineProperty(b.Line.prototype,"width",{get:function(){return Math.abs(this.start.x-this.end.x)}}),Object.defineProperty(b.Line.prototype,"height",{get:function(){return Math.abs(this.start.y-this.end.y)}}),b.Line.intersectsPoints=function(a,c,d,e,f,g){"undefined"==typeof f&&(f=!0),"undefined"==typeof g&&(g=new b.Point);var h=c.y-a.y,i=e.y-d.y,j=a.x-c.x,k=d.x-e.x,l=c.x*a.y-a.x*c.y,m=e.x*d.y-d.x*e.y,n=h*k-i*j;if(0===n)return null;if(g.x=(j*m-k*l)/n,g.y=(i*l-h*m)/n,f){if(Math.pow(g.x-c.x+(g.y-c.y),2)>Math.pow(a.x-c.x+(a.y-c.y),2))return null;if(Math.pow(g.x-a.x+(g.y-a.y),2)>Math.pow(a.x-c.x+(a.y-c.y),2))return null;if(Math.pow(g.x-e.x+(g.y-e.y),2)>Math.pow(d.x-e.x+(d.y-e.y),2))return null;if(Math.pow(g.x-d.x+(g.y-d.y),2)>Math.pow(d.x-e.x+(d.y-e.y),2))return null}return g},b.Line.intersects=function(a,c,d,e){return b.Line.intersectsPoints(a.start,a.end,c.start,c.end,d,e)},b.Ellipse=function(a,c,d,e){this.type=b.ELLIPSE,a=a||0,c=c||0,d=d||0,e=e||0,this.x=a,this.y=c,this.width=d,this.height=e},b.Ellipse.prototype={setTo:function(a,b,c,d){return this.x=a,this.y=b,this.width=c,this.height=d,this},copyFrom:function(a){return this.setTo(a.x,a.y,a.width,a.height)},copyTo:function(a){return a.x=this.x,a.y=this.y,a.width=this.width,a.height=this.height,a},clone:function(a){return"undefined"==typeof a?a=new b.Ellipse(this.x,this.y,this.width,this.height):a.setTo(this.x,this.y,this.width,this.height),a},contains:function(a,c){return b.Ellipse.contains(this,a,c)},toString:function(){return"[{Phaser.Ellipse (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")}]"}},b.Ellipse.prototype.constructor=b.Ellipse,Object.defineProperty(b.Ellipse.prototype,"left",{get:function(){return this.x},set:function(a){this.x=a}}),Object.defineProperty(b.Ellipse.prototype,"right",{get:function(){return this.x+this.width},set:function(a){this.width=a<this.x?0:this.x+a}}),Object.defineProperty(b.Ellipse.prototype,"top",{get:function(){return this.y},set:function(a){this.y=a}}),Object.defineProperty(b.Ellipse.prototype,"bottom",{get:function(){return this.y+this.height},set:function(a){this.height=a<this.y?0:this.y+a}}),Object.defineProperty(b.Ellipse.prototype,"empty",{get:function(){return 0===this.width||0===this.height},set:function(a){a===!0&&this.setTo(0,0,0,0)}}),b.Ellipse.contains=function(a,b,c){if(a.width<=0||a.height<=0)return!1;var d=(b-a.x)/a.width-.5,e=(c-a.y)/a.height-.5;return d*=d,e*=e,.25>d+e},b.Ellipse.prototype.getBounds=function(){return new b.Rectangle(this.x,this.y,this.width,this.height)},PIXI.Ellipse=b.Ellipse,b.Polygon=function(a){if(this.type=b.POLYGON,a instanceof Array||(a=Array.prototype.slice.call(arguments)),"number"==typeof a[0]){for(var c=[],d=0,e=a.length;e>d;d+=2)c.push(new b.Point(a[d],a[d+1]));a=c}this.points=a},b.Polygon.prototype={clone:function(){for(var a=[],c=0;c<this.points.length;c++)a.push(this.points[c].clone());return new b.Polygon(a)},contains:function(a,b){for(var c=!1,d=0,e=this.points.length-1;d<this.points.length;e=d++){var f=this.points[d].x,g=this.points[d].y,h=this.points[e].x,i=this.points[e].y,j=g>b!=i>b&&(h-f)*(b-g)/(i-g)+f>a;j&&(c=!0)}return c}},b.Polygon.prototype.constructor=b.Polygon,PIXI.Polygon=b.Polygon,b.Camera=function(a,c,d,e,f,g){this.game=a,this.world=a.world,this.id=0,this.view=new b.Rectangle(d,e,f,g),this.screenView=new b.Rectangle(d,e,f,g),this.bounds=new b.Rectangle(d,e,f,g),this.deadzone=null,this.visible=!0,this.atLimit={x:!1,y:!1},this.target=null,this._edge=0,this.displayObject=null,this.scale=null},b.Camera.FOLLOW_LOCKON=0,b.Camera.FOLLOW_PLATFORMER=1,b.Camera.FOLLOW_TOPDOWN=2,b.Camera.FOLLOW_TOPDOWN_TIGHT=3,b.Camera.prototype={follow:function(a,c){"undefined"==typeof c&&(c=b.Camera.FOLLOW_LOCKON),this.target=a;var d;switch(c){case b.Camera.FOLLOW_PLATFORMER:var e=this.width/8,f=this.height/3;this.deadzone=new b.Rectangle((this.width-e)/2,(this.height-f)/2-.25*f,e,f);break;case b.Camera.FOLLOW_TOPDOWN:d=Math.max(this.width,this.height)/4,this.deadzone=new b.Rectangle((this.width-d)/2,(this.height-d)/2,d,d);break;case b.Camera.FOLLOW_TOPDOWN_TIGHT:d=Math.max(this.width,this.height)/8,this.deadzone=new b.Rectangle((this.width-d)/2,(this.height-d)/2,d,d);break;case b.Camera.FOLLOW_LOCKON:this.deadzone=null;break;default:this.deadzone=null}},focusOn:function(a){this.setPosition(Math.round(a.x-this.view.halfWidth),Math.round(a.y-this.view.halfHeight))},focusOnXY:function(a,b){this.setPosition(Math.round(a-this.view.halfWidth),Math.round(b-this.view.halfHeight))},update:function(){this.target&&this.updateTarget(),this.bounds&&this.checkBounds(),this.displayObject.position.x=-this.view.x,this.displayObject.position.y=-this.view.y},updateTarget:function(){this.deadzone?(this._edge=this.target.x-this.deadzone.x,this.view.x>this._edge&&(this.view.x=this._edge),this._edge=this.target.x+this.target.width-this.deadzone.x-this.deadzone.width,this.view.x<this._edge&&(this.view.x=this._edge),this._edge=this.target.y-this.deadzone.y,this.view.y>this._edge&&(this.view.y=this._edge),this._edge=this.target.y+this.target.height-this.deadzone.y-this.deadzone.height,this.view.y<this._edge&&(this.view.y=this._edge)):this.focusOnXY(this.target.x,this.target.y)},setBoundsToWorld:function(){this.bounds.setTo(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height)},checkBounds:function(){this.atLimit.x=!1,this.atLimit.y=!1,this.view.x<=this.bounds.x&&(this.atLimit.x=!0,this.view.x=this.bounds.x),this.view.right>=this.bounds.right&&(this.atLimit.x=!0,this.view.x=this.bounds.right-this.width),this.view.y<=this.bounds.top&&(this.atLimit.y=!0,this.view.y=this.bounds.top),this.view.bottom>=this.bounds.bottom&&(this.atLimit.y=!0,this.view.y=this.bounds.bottom-this.height),this.view.floor()},setPosition:function(a,b){this.view.x=a,this.view.y=b,this.bounds&&this.checkBounds()},setSize:function(a,b){this.view.width=a,this.view.height=b},reset:function(){this.target=null,this.view.x=0,this.view.y=0}},b.Camera.prototype.constructor=b.Camera,Object.defineProperty(b.Camera.prototype,"x",{get:function(){return this.view.x},set:function(a){this.view.x=a,this.bounds&&this.checkBounds()}}),Object.defineProperty(b.Camera.prototype,"y",{get:function(){return this.view.y},set:function(a){this.view.y=a,this.bounds&&this.checkBounds()}}),Object.defineProperty(b.Camera.prototype,"width",{get:function(){return this.view.width},set:function(a){this.view.width=a}}),Object.defineProperty(b.Camera.prototype,"height",{get:function(){return this.view.height},set:function(a){this.view.height=a}}),b.State=function(){this.game=null,this.add=null,this.make=null,this.camera=null,this.cache=null,this.input=null,this.load=null,this.math=null,this.sound=null,this.scale=null,this.stage=null,this.time=null,this.tweens=null,this.world=null,this.particles=null,this.physics=null,this.rnd=null},b.State.prototype={preload:function(){},loadUpdate:function(){},loadRender:function(){},create:function(){},update:function(){},render:function(){},paused:function(){},shutdown:function(){}},b.State.prototype.constructor=b.State,b.StateManager=function(a,b){this.game=a,this.states={},this._pendingState=null,"undefined"!=typeof b&&null!==b&&(this._pendingState=b),this._clearWorld=!1,this._clearCache=!1,this._created=!1,this._args=[],this.current="",this.onInitCallback=null,this.onPreloadCallback=null,this.onCreateCallback=null,this.onUpdateCallback=null,this.onRenderCallback=null,this.onPreRenderCallback=null,this.onLoadUpdateCallback=null,this.onLoadRenderCallback=null,this.onPausedCallback=null,this.onResumedCallback=null,this.onShutDownCallback=null},b.StateManager.prototype={boot:function(){this.game.onPause.add(this.pause,this),this.game.onResume.add(this.resume,this),this.game.load.onLoadComplete.add(this.loadComplete,this),null!==this._pendingState&&("string"==typeof this._pendingState?this.start(this._pendingState,!1,!1):this.add("default",this._pendingState,!0))},add:function(a,c,d){"undefined"==typeof d&&(d=!1);var e;return c instanceof b.State?e=c:"object"==typeof c?(e=c,e.game=this.game):"function"==typeof c&&(e=new c(this.game)),this.states[a]=e,d&&(this.game.isBooted?this.start(a):this._pendingState=a),e},remove:function(a){this.current==a&&(this.callbackContext=null,this.onInitCallback=null,this.onShutDownCallback=null,this.onPreloadCallback=null,this.onLoadRenderCallback=null,this.onLoadUpdateCallback=null,this.onCreateCallback=null,this.onUpdateCallback=null,this.onRenderCallback=null,this.onPausedCallback=null,this.onResumedCallback=null,this.onDestroyCallback=null),delete this.states[a]},start:function(a,b,c){"undefined"==typeof b&&(b=!0),"undefined"==typeof c&&(c=!1),this.checkState(a)&&(this._pendingState=a,this._clearWorld=b,this._clearCache=c,arguments.length>3&&(this._args=Array.prototype.splice.call(arguments,3)))},dummy:function(){},preUpdate:function(){this._pendingState&&this.game.isBooted&&(this.current&&(this.onShutDownCallback.call(this.callbackContext,this.game),this.game.tweens.removeAll(),this.game.camera.reset(),this.game.input.reset(!0),this.game.physics.clear(),this.game.time.removeAll(),this._clearWorld&&(this.game.world.shutdown(),this._clearCache===!0&&this.game.cache.destroy())),this.setCurrentState(this._pendingState),this.onPreloadCallback?(this.game.load.reset(),this.onPreloadCallback.call(this.callbackContext,this.game),0===this.game.load.totalQueuedFiles()?this.loadComplete():this.game.load.start()):this.loadComplete(),this.current===this._pendingState&&(this._pendingState=null))},checkState:function(a){if(this.states[a]){var b=!1;return this.states[a].preload&&(b=!0),this.states[a].create&&(b=!0),this.states[a].update&&(b=!0),this.states[a].render&&(b=!0),b===!1?(console.warn("Invalid Phaser State object given. Must contain at least a one of the required functions: preload, create, update or render"),!1):!0}return console.warn("Phaser.StateManager - No state found with the key: "+a),!1},link:function(a){this.states[a].game=this.game,this.states[a].add=this.game.add,this.states[a].make=this.game.make,this.states[a].camera=this.game.camera,this.states[a].cache=this.game.cache,this.states[a].input=this.game.input,this.states[a].load=this.game.load,this.states[a].math=this.game.math,this.states[a].sound=this.game.sound,this.states[a].scale=this.game.scale,this.states[a].state=this,this.states[a].stage=this.game.stage,this.states[a].time=this.game.time,this.states[a].tweens=this.game.tweens,this.states[a].world=this.game.world,this.states[a].particles=this.game.particles,this.states[a].rnd=this.game.rnd,this.states[a].physics=this.game.physics},setCurrentState:function(a){this.callbackContext=this.states[a],this.link(a),this.onInitCallback=this.states[a].init||this.dummy,this.onPreloadCallback=this.states[a].preload||null,this.onLoadRenderCallback=this.states[a].loadRender||null,this.onLoadUpdateCallback=this.states[a].loadUpdate||null,this.onCreateCallback=this.states[a].create||null,this.onUpdateCallback=this.states[a].update||null,this.onPreRenderCallback=this.states[a].preRender||null,this.onRenderCallback=this.states[a].render||null,this.onPausedCallback=this.states[a].paused||null,this.onResumedCallback=this.states[a].resumed||null,this.onShutDownCallback=this.states[a].shutdown||this.dummy,this.current=a,this._created=!1,this.onInitCallback.apply(this.callbackContext,this._args),this._args=[]},getCurrentState:function(){return this.states[this.current]},loadComplete:function(){this._created===!1&&this.onCreateCallback?(this._created=!0,this.onCreateCallback.call(this.callbackContext,this.game)):this._created=!0},pause:function(){this._created&&this.onPausedCallback&&this.onPausedCallback.call(this.callbackContext,this.game)},resume:function(){this._created&&this.onResumedCallback&&this.onResumedCallback.call(this.callbackContext,this.game)},update:function(){this._created&&this.onUpdateCallback?this.onUpdateCallback.call(this.callbackContext,this.game):this.onLoadUpdateCallback&&this.onLoadUpdateCallback.call(this.callbackContext,this.game)},preRender:function(){this.onPreRenderCallback&&this.onPreRenderCallback.call(this.callbackContext,this.game)},render:function(){this._created&&this.onRenderCallback?(this.game.renderType===b.CANVAS&&(this.game.context.save(),this.game.context.setTransform(1,0,0,1,0,0)),this.onRenderCallback.call(this.callbackContext,this.game),this.game.renderType===b.CANVAS&&this.game.context.restore()):this.onLoadRenderCallback&&this.onLoadRenderCallback.call(this.callbackContext,this.game)},destroy:function(){this.callbackContext=null,this.onInitCallback=null,this.onShutDownCallback=null,this.onPreloadCallback=null,this.onLoadRenderCallback=null,this.onLoadUpdateCallback=null,this.onCreateCallback=null,this.onUpdateCallback=null,this.onRenderCallback=null,this.onPausedCallback=null,this.onResumedCallback=null,this.onDestroyCallback=null,this.game=null,this.states={},this._pendingState=null}},b.StateManager.prototype.constructor=b.StateManager,b.LinkedList=function(){this.next=null,this.prev=null,this.first=null,this.last=null,this.total=0},b.LinkedList.prototype={add:function(a){return 0===this.total&&null==this.first&&null==this.last?(this.first=a,this.last=a,this.next=a,a.prev=this,this.total++,a):(this.last.next=a,a.prev=this.last,this.last=a,this.total++,a)},remove:function(a){a==this.first?this.first=this.first.next:a==this.last&&(this.last=this.last.prev),a.prev&&(a.prev.next=a.next),a.next&&(a.next.prev=a.prev),a.next=a.prev=null,null==this.first&&(this.last=null),this.total--},callAll:function(a){if(this.first&&this.last){var b=this.first;do b&&b[a]&&b[a].call(b),b=b.next;while(b!=this.last.next)}}},b.LinkedList.prototype.constructor=b.LinkedList,b.Signal=function(){this._bindings=[],this._prevParams=null;var a=this;this.dispatch=function(){b.Signal.prototype.dispatch.apply(a,arguments)}},b.Signal.prototype={memorize:!1,_shouldPropagate:!0,active:!0,validateListener:function(a,b){if("function"!=typeof a)throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}",b))},_registerListener:function(a,c,d,e){var f,g=this._indexOfListener(a,d);if(-1!==g){if(f=this._bindings[g],f.isOnce()!==c)throw new Error("You cannot add"+(c?"":"Once")+"() then add"+(c?"Once":"")+"() the same listener without removing the relationship first.")}else f=new b.SignalBinding(this,a,c,d,e),this._addBinding(f);return this.memorize&&this._prevParams&&f.execute(this._prevParams),f},_addBinding:function(a){var b=this._bindings.length;do--b;while(this._bindings[b]&&a._priority<=this._bindings[b]._priority);this._bindings.splice(b+1,0,a)},_indexOfListener:function(a,b){for(var c,d=this._bindings.length;d--;)if(c=this._bindings[d],c._listener===a&&c.context===b)return d;return-1},has:function(a,b){return-1!==this._indexOfListener(a,b)},add:function(a,b,c){return this.validateListener(a,"add"),this._registerListener(a,!1,b,c)},addOnce:function(a,b,c){return this.validateListener(a,"addOnce"),this._registerListener(a,!0,b,c)},remove:function(a,b){this.validateListener(a,"remove");var c=this._indexOfListener(a,b);return-1!==c&&(this._bindings[c]._destroy(),this._bindings.splice(c,1)),a},removeAll:function(){for(var a=this._bindings.length;a--;)this._bindings[a]._destroy();this._bindings.length=0},getNumListeners:function(){return this._bindings.length},halt:function(){this._shouldPropagate=!1},dispatch:function(){if(this.active){var a,b=Array.prototype.slice.call(arguments),c=this._bindings.length;if(this.memorize&&(this._prevParams=b),c){a=this._bindings.slice(),this._shouldPropagate=!0;do c--;while(a[c]&&this._shouldPropagate&&a[c].execute(b)!==!1)}}},forget:function(){this._prevParams=null},dispose:function(){this.removeAll(),delete this._bindings,delete this._prevParams},toString:function(){return"[Phaser.Signal active:"+this.active+" numListeners:"+this.getNumListeners()+"]"}},b.Signal.prototype.constructor=b.Signal,b.SignalBinding=function(a,b,c,d,e){this._listener=b,this._isOnce=c,this.context=d,this._signal=a,this._priority=e||0},b.SignalBinding.prototype={active:!0,params:null,execute:function(a){var b,c;return this.active&&this._listener&&(c=this.params?this.params.concat(a):a,b=this._listener.apply(this.context,c),this._isOnce&&this.detach()),b},detach:function(){return this.isBound()?this._signal.remove(this._listener,this.context):null},isBound:function(){return!!this._signal&&!!this._listener},isOnce:function(){return this._isOnce},getListener:function(){return this._listener},getSignal:function(){return this._signal},_destroy:function(){delete this._signal,delete this._listener,delete this.context},toString:function(){return"[Phaser.SignalBinding isOnce:"+this._isOnce+", isBound:"+this.isBound()+", active:"+this.active+"]"}},b.SignalBinding.prototype.constructor=b.SignalBinding,b.Filter=function(a,c,d){this.game=a,this.type=b.WEBGL_FILTER,this.passes=[this],this.shaders=[],this.dirty=!0,this.padding=0,this.uniforms={time:{type:"1f",value:0},resolution:{type:"2f",value:{x:256,y:256}},mouse:{type:"2f",value:{x:0,y:0}}},this.fragmentSrc=d||[]},b.Filter.prototype={init:function(){},setResolution:function(a,b){this.uniforms.resolution.value.x=a,this.uniforms.resolution.value.y=b},update:function(a){"undefined"!=typeof a&&(a.x>0&&(this.uniforms.mouse.x=a.x.toFixed(2)),a.y>0&&(this.uniforms.mouse.y=a.y.toFixed(2))),this.uniforms.time.value=this.game.time.totalElapsedSeconds()},destroy:function(){this.game=null}},b.Filter.prototype.constructor=b.Filter,Object.defineProperty(b.Filter.prototype,"width",{get:function(){return this.uniforms.resolution.value.x},set:function(a){this.uniforms.resolution.value.x=a}}),Object.defineProperty(b.Filter.prototype,"height",{get:function(){return this.uniforms.resolution.value.y},set:function(a){this.uniforms.resolution.value.y=a
}}),b.Plugin=function(a,b){"undefined"==typeof b&&(b=null),this.game=a,this.parent=b,this.active=!1,this.visible=!1,this.hasPreUpdate=!1,this.hasUpdate=!1,this.hasPostUpdate=!1,this.hasRender=!1,this.hasPostRender=!1},b.Plugin.prototype={preUpdate:function(){},update:function(){},render:function(){},postRender:function(){},destroy:function(){this.game=null,this.parent=null,this.active=!1,this.visible=!1}},b.Plugin.prototype.constructor=b.Plugin,b.PluginManager=function(a,b){this.game=a,this._parent=b,this.plugins=[],this._pluginsLength=0},b.PluginManager.prototype={add:function(a){var b=!1;return"function"==typeof a?a=new a(this.game,this._parent):(a.game=this.game,a.parent=this._parent),"function"==typeof a.preUpdate&&(a.hasPreUpdate=!0,b=!0),"function"==typeof a.update&&(a.hasUpdate=!0,b=!0),"function"==typeof a.postUpdate&&(a.hasPostUpdate=!0,b=!0),"function"==typeof a.render&&(a.hasRender=!0,b=!0),"function"==typeof a.postRender&&(a.hasPostRender=!0,b=!0),b?((a.hasPreUpdate||a.hasUpdate||a.hasPostUpdate)&&(a.active=!0),(a.hasRender||a.hasPostRender)&&(a.visible=!0),this._pluginsLength=this.plugins.push(a),"function"==typeof a.init&&a.init(),a):null},remove:function(a){if(0!==this._pluginsLength)for(this._p=0;this._p<this._pluginsLength;this._p++)if(this.plugins[this._p]===a)return a.destroy(),this.plugins.splice(this._p,1),void this._pluginsLength--},removeAll:function(){for(this._p=0;this._p<this._pluginsLength;this._p++)this.plugins[this._p].destroy();this.plugins.length=0,this._pluginsLength=0},preUpdate:function(){if(0!==this._pluginsLength)for(this._p=0;this._p<this._pluginsLength;this._p++)this.plugins[this._p].active&&this.plugins[this._p].hasPreUpdate&&this.plugins[this._p].preUpdate()},update:function(){if(0!==this._pluginsLength)for(this._p=0;this._p<this._pluginsLength;this._p++)this.plugins[this._p].active&&this.plugins[this._p].hasUpdate&&this.plugins[this._p].update()},postUpdate:function(){if(0!==this._pluginsLength)for(this._p=0;this._p<this._pluginsLength;this._p++)this.plugins[this._p].active&&this.plugins[this._p].hasPostUpdate&&this.plugins[this._p].postUpdate()},render:function(){if(0!==this._pluginsLength)for(this._p=0;this._p<this._pluginsLength;this._p++)this.plugins[this._p].visible&&this.plugins[this._p].hasRender&&this.plugins[this._p].render()},postRender:function(){if(0!==this._pluginsLength)for(this._p=0;this._p<this._pluginsLength;this._p++)this.plugins[this._p].visible&&this.plugins[this._p].hasPostRender&&this.plugins[this._p].postRender()},destroy:function(){this.plugins.length=0,this._pluginsLength=0,this.game=null,this._parent=null}},b.PluginManager.prototype.constructor=b.PluginManager,b.Stage=function(a,c,d){this.game=a,this.offset=new b.Point,PIXI.Stage.call(this,0,!1),this.name="_stage_root",this.interactive=!1,this.disableVisibilityChange=!1,this.checkOffsetInterval=2500,this.exists=!0,this.currentRenderOrderID=0,this._hiddenVar="hidden",this._nextOffsetCheck=0,this._backgroundColor=0,a.config?this.parseConfig(a.config):(this.game.canvas=b.Canvas.create(c,d),this.game.canvas.style["-webkit-full-screen"]="width: 100%; height: 100%")},b.Stage.prototype=Object.create(PIXI.Stage.prototype),b.Stage.prototype.constructor=b.Stage,b.Stage.prototype.preUpdate=function(){this.currentRenderOrderID=0;for(var a=this.children.length,b=0;a>b;b++)this.children[b].preUpdate()},b.Stage.prototype.update=function(){for(var a=this.children.length;a--;)this.children[a].update()},b.Stage.prototype.postUpdate=function(){if(this.game.world.camera.target){this.game.world.camera.target.postUpdate(),this.game.world.camera.update();for(var a=this.children.length;a--;)this.children[a]!==this.game.world.camera.target&&this.children[a].postUpdate()}else{this.game.world.camera.update();for(var a=this.children.length;a--;)this.children[a].postUpdate()}this.checkOffsetInterval!==!1&&this.game.time.now>this._nextOffsetCheck&&(b.Canvas.getOffset(this.game.canvas,this.offset),this._nextOffsetCheck=this.game.time.now+this.checkOffsetInterval)},b.Stage.prototype.parseConfig=function(a){this.game.canvas=a.canvasID?b.Canvas.create(this.game.width,this.game.height,a.canvasID):b.Canvas.create(this.game.width,this.game.height),a.canvasStyle?this.game.canvas.stlye=a.canvasStyle:this.game.canvas.style["-webkit-full-screen"]="width: 100%; height: 100%",a.checkOffsetInterval&&(this.checkOffsetInterval=a.checkOffsetInterval),a.disableVisibilityChange&&(this.disableVisibilityChange=a.disableVisibilityChange),a.fullScreenScaleMode&&(this.fullScreenScaleMode=a.fullScreenScaleMode),a.scaleMode&&(this.scaleMode=a.scaleMode),a.backgroundColor&&(this.backgroundColor=a.backgroundColor)},b.Stage.prototype.boot=function(){b.Canvas.getOffset(this.game.canvas,this.offset),this.bounds=new b.Rectangle(this.offset.x,this.offset.y,this.game.width,this.game.height);var a=this;this._onChange=function(b){return a.visibilityChange(b)},b.Canvas.setUserSelect(this.game.canvas,"none"),b.Canvas.setTouchAction(this.game.canvas,"none"),this.checkVisibility()},b.Stage.prototype.checkVisibility=function(){this._hiddenVar=void 0!==document.webkitHidden?"webkitvisibilitychange":void 0!==document.mozHidden?"mozvisibilitychange":void 0!==document.msHidden?"msvisibilitychange":void 0!==document.hidden?"visibilitychange":null,this._hiddenVar&&document.addEventListener(this._hiddenVar,this._onChange,!1),window.onpagehide=this._onChange,window.onpageshow=this._onChange,window.onblur=this._onChange,window.onfocus=this._onChange},b.Stage.prototype.visibilityChange=function(a){return this.disableVisibilityChange?void 0:"pagehide"===a.type||"blur"===a.type||"pageshow"===a.type||"focus"===a.type?void("pagehide"===a.type||"blur"===a.type?this.game.focusLoss(a):("pageshow"===a.type||"focus"===a.type)&&this.game.focusGain(a)):void(document.hidden||document.mozHidden||document.msHidden||document.webkitHidden?this.game.gamePaused(a):this.game.gameResumed(a))},b.Stage.prototype.setBackgroundColor=function(a){this._backgroundColor=a||0,this.backgroundColorSplit=PIXI.hex2rgb(this.backgroundColor);var b=this._backgroundColor.toString(16);b="000000".substr(0,6-b.length)+b,this.backgroundColorString="#"+b},Object.defineProperty(b.Stage.prototype,"backgroundColor",{get:function(){return this._backgroundColor},set:function(a){this._backgroundColor=a,this.game.transparent===!1&&("string"==typeof a&&(a=b.Color.hexToRGB(a)),this.setBackgroundColor(a))}}),Object.defineProperty(b.Stage.prototype,"smoothed",{get:function(){return!PIXI.scaleModes.LINEAR},set:function(a){PIXI.scaleModes.LINEAR=a?0:1}}),b.Group=function(a,c,d,e,f,g){"undefined"==typeof e&&(e=!1),"undefined"==typeof f&&(f=!1),"undefined"==typeof g&&(g=b.Physics.ARCADE),this.game=a,"undefined"==typeof c&&(c=a.world),this.name=d||"group",PIXI.DisplayObjectContainer.call(this),e?this.game.stage.addChild(this):c&&c.addChild(this),this.z=0,this.type=b.GROUP,this.alive=!0,this.exists=!0,this.scale=new b.Point(1,1),this.cursor=null,this.cameraOffset=new b.Point,this.enableBody=f,this.enableBodyDebug=!1,this.physicsBodyType=g,this._sortProperty="z",this._cache=[0,0,0,0,1,0,1,0,0,0]},b.Group.prototype=Object.create(PIXI.DisplayObjectContainer.prototype),b.Group.prototype.constructor=b.Group,b.Group.RETURN_NONE=0,b.Group.RETURN_TOTAL=1,b.Group.RETURN_CHILD=2,b.Group.SORT_ASCENDING=-1,b.Group.SORT_DESCENDING=1,b.Group.prototype.add=function(a){return a.parent!==this&&(this.enableBody&&this.game.physics.enable(a,this.physicsBodyType),this.addChild(a),a.z=this.children.length,a.events&&a.events.onAddedToGroup.dispatch(a,this),null===this.cursor&&(this.cursor=a)),a},b.Group.prototype.addAt=function(a,b){return a.parent!==this&&(this.enableBody&&this.game.physics.enable(a,this.physicsBodyType),this.addChildAt(a,b),this.updateZ(),a.events&&a.events.onAddedToGroup.dispatch(a,this),null===this.cursor&&(this.cursor=a)),a},b.Group.prototype.getAt=function(a){return 0>a||a>=this.children.length?-1:this.getChildAt(a)},b.Group.prototype.create=function(a,c,d,e,f){"undefined"==typeof f&&(f=!0);var g=new b.Sprite(this.game,a,c,d,e);return this.enableBody&&this.game.physics.enable(g,this.physicsBodyType),g.exists=f,g.visible=f,g.alive=f,this.addChild(g),g.z=this.children.length,g.events&&g.events.onAddedToGroup.dispatch(g,this),null===this.cursor&&(this.cursor=g),g},b.Group.prototype.createMultiple=function(a,b,c,d){"undefined"==typeof d&&(d=!1);for(var e=0;a>e;e++)this.create(0,0,b,c,d)},b.Group.prototype.updateZ=function(){for(var a=this.children.length;a--;)this.children[a].z=a},b.Group.prototype.next=function(){this.cursor&&(this._cache[8]===this.children.length?this._cache[8]=0:this._cache[8]++,this.cursor=this.children[this._cache[8]])},b.Group.prototype.previous=function(){this.cursor&&(0===this._cache[8]?this._cache[8]=this.children.length-1:this._cache[8]--,this.cursor=this.children[this._cache[8]])},b.Group.prototype.swap=function(a,b){var c=this.swapChildren(a,b);return c&&this.updateZ(),c},b.Group.prototype.bringToTop=function(a){return a.parent===this&&this.getIndex(a)<this.children.length&&(this.remove(a),this.add(a)),a},b.Group.prototype.sendToBack=function(a){return a.parent===this&&this.getIndex(a)>0&&(this.remove(a),this.addAt(a,0)),a},b.Group.prototype.moveUp=function(a){if(a.parent===this&&this.getIndex(a)<this.children.length-1){var b=this.getIndex(a),c=this.getAt(b+1);c&&this.swap(b,c)}return a},b.Group.prototype.moveDown=function(a){if(a.parent===this&&this.getIndex(a)>0){var b=this.getIndex(a),c=this.getAt(b-1);c&&this.swap(b,c)}return a},b.Group.prototype.xy=function(a,b,c){return 0>a||a>this.children.length?-1:(this.getChildAt(a).x=b,void(this.getChildAt(a).y=c))},b.Group.prototype.reverse=function(){this.children.reverse(),this.updateZ()},b.Group.prototype.getIndex=function(a){return this.children.indexOf(a)},b.Group.prototype.replace=function(a,c){var d=this.getIndex(a);if(-1!==d){void 0!==c.parent&&(c.events.onRemovedFromGroup.dispatch(c,this),c.parent.removeChild(c),c.parent instanceof b.Group&&c.parent.updateZ());var e=a;return this.remove(e),this.addAt(c,d),e}},b.Group.prototype.setProperty=function(a,b,c,d){d=d||0;var e=b.length;1==e?0===d?a[b[0]]=c:1==d?a[b[0]]+=c:2==d?a[b[0]]-=c:3==d?a[b[0]]*=c:4==d&&(a[b[0]]/=c):2==e?0===d?a[b[0]][b[1]]=c:1==d?a[b[0]][b[1]]+=c:2==d?a[b[0]][b[1]]-=c:3==d?a[b[0]][b[1]]*=c:4==d&&(a[b[0]][b[1]]/=c):3==e?0===d?a[b[0]][b[1]][b[2]]=c:1==d?a[b[0]][b[1]][b[2]]+=c:2==d?a[b[0]][b[1]][b[2]]-=c:3==d?a[b[0]][b[1]][b[2]]*=c:4==d&&(a[b[0]][b[1]][b[2]]/=c):4==e&&(0===d?a[b[0]][b[1]][b[2]][b[3]]=c:1==d?a[b[0]][b[1]][b[2]][b[3]]+=c:2==d?a[b[0]][b[1]][b[2]][b[3]]-=c:3==d?a[b[0]][b[1]][b[2]][b[3]]*=c:4==d&&(a[b[0]][b[1]][b[2]][b[3]]/=c))},b.Group.prototype.set=function(a,b,c,d,e,f){b=b.split("."),"undefined"==typeof d&&(d=!1),"undefined"==typeof e&&(e=!1),(d===!1||d&&a.alive)&&(e===!1||e&&a.visible)&&this.setProperty(a,b,c,f)},b.Group.prototype.setAll=function(a,b,c,d,e){a=a.split("."),"undefined"==typeof c&&(c=!1),"undefined"==typeof d&&(d=!1),e=e||0;for(var f=0,g=this.children.length;g>f;f++)(!c||c&&this.children[f].alive)&&(!d||d&&this.children[f].visible)&&this.setProperty(this.children[f],a,b,e)},b.Group.prototype.setAllChildren=function(a,c,d,e,f){"undefined"==typeof d&&(d=!1),"undefined"==typeof e&&(e=!1),f=f||0;for(var g=0,h=this.children.length;h>g;g++)(!d||d&&this.children[g].alive)&&(!e||e&&this.children[g].visible)&&(this.children[g]instanceof b.Group?this.children[g].setAllChildren(a,c,d,e,f):this.setProperty(this.children[g],a.split("."),c,f))},b.Group.prototype.addAll=function(a,b,c,d){this.setAll(a,b,c,d,1)},b.Group.prototype.subAll=function(a,b,c,d){this.setAll(a,b,c,d,2)},b.Group.prototype.multiplyAll=function(a,b,c,d){this.setAll(a,b,c,d,3)},b.Group.prototype.divideAll=function(a,b,c,d){this.setAll(a,b,c,d,4)},b.Group.prototype.callAllExists=function(a,b){for(var c=Array.prototype.splice.call(arguments,2),d=0,e=this.children.length;e>d;d++)this.children[d].exists===b&&this.children[d][a]&&this.children[d][a].apply(this.children[d],c)},b.Group.prototype.callbackFromArray=function(a,b,c){if(1==c){if(a[b[0]])return a[b[0]]}else if(2==c){if(a[b[0]][b[1]])return a[b[0]][b[1]]}else if(3==c){if(a[b[0]][b[1]][b[2]])return a[b[0]][b[1]][b[2]]}else if(4==c){if(a[b[0]][b[1]][b[2]][b[3]])return a[b[0]][b[1]][b[2]][b[3]]}else if(a[b])return a[b];return!1},b.Group.prototype.callAll=function(a,b){if("undefined"!=typeof a){a=a.split(".");var c=a.length;if("undefined"==typeof b||null===b||""===b)b=null;else if("string"==typeof b){b=b.split(".");var d=b.length}for(var e=Array.prototype.splice.call(arguments,2),f=null,g=null,h=0,i=this.children.length;i>h;h++)f=this.callbackFromArray(this.children[h],a,c),b&&f?(g=this.callbackFromArray(this.children[h],b,d),f&&f.apply(g,e)):f&&f.apply(this.children[h],e)}},b.Group.prototype.preUpdate=function(){if(!this.exists||!this.parent.exists)return this.renderOrderID=-1,!1;for(var a=this.children.length;a--;)this.children[a].preUpdate();return!0},b.Group.prototype.update=function(){for(var a=this.children.length;a--;)this.children[a].update()},b.Group.prototype.postUpdate=function(){1===this._cache[7]&&(this.x=this.game.camera.view.x+this.cameraOffset.x,this.y=this.game.camera.view.y+this.cameraOffset.y);for(var a=this.children.length;a--;)this.children[a].postUpdate()},b.Group.prototype.forEach=function(a,b,c){"undefined"==typeof c&&(c=!1);var d=Array.prototype.splice.call(arguments,3);d.unshift(null);for(var e=0,f=this.children.length;f>e;e++)(!c||c&&this.children[e].exists)&&(d[0]=this.children[e],a.apply(b,d))},b.Group.prototype.forEachExists=function(a,c){var d=Array.prototype.splice.call(arguments,2);d.unshift(null),this.iterate("exists",!0,b.Group.RETURN_TOTAL,a,c,d)},b.Group.prototype.forEachAlive=function(a,c){var d=Array.prototype.splice.call(arguments,2);d.unshift(null),this.iterate("alive",!0,b.Group.RETURN_TOTAL,a,c,d)},b.Group.prototype.forEachDead=function(a,c){var d=Array.prototype.splice.call(arguments,2);d.unshift(null),this.iterate("alive",!1,b.Group.RETURN_TOTAL,a,c,d)},b.Group.prototype.sort=function(a,c){this.children.length<2||("undefined"==typeof a&&(a="z"),"undefined"==typeof c&&(c=b.Group.SORT_ASCENDING),this._sortProperty=a,this.children.sort(c===b.Group.SORT_ASCENDING?this.ascendingSortHandler.bind(this):this.descendingSortHandler.bind(this)),this.updateZ())},b.Group.prototype.ascendingSortHandler=function(a,b){return a[this._sortProperty]<b[this._sortProperty]?-1:a[this._sortProperty]>b[this._sortProperty]?1:a.z<b.z?-1:1},b.Group.prototype.descendingSortHandler=function(a,b){return a[this._sortProperty]<b[this._sortProperty]?1:a[this._sortProperty]>b[this._sortProperty]?-1:0},b.Group.prototype.iterate=function(a,c,d,e,f,g){if(d===b.Group.RETURN_TOTAL&&0===this.children.length)return 0;"undefined"==typeof e&&(e=!1);for(var h=0,i=0,j=this.children.length;j>i;i++)if(this.children[i][a]===c&&(h++,e&&(g[0]=this.children[i],e.apply(f,g)),d===b.Group.RETURN_CHILD))return this.children[i];return d===b.Group.RETURN_TOTAL?h:d===b.Group.RETURN_CHILD?null:void 0},b.Group.prototype.getFirstExists=function(a){return"boolean"!=typeof a&&(a=!0),this.iterate("exists",a,b.Group.RETURN_CHILD)},b.Group.prototype.getFirstAlive=function(){return this.iterate("alive",!0,b.Group.RETURN_CHILD)},b.Group.prototype.getFirstDead=function(){return this.iterate("alive",!1,b.Group.RETURN_CHILD)},b.Group.prototype.getTop=function(){return this.children.length>0?this.children[this.children.length-1]:void 0},b.Group.prototype.getBottom=function(){return this.children.length>0?this.children[0]:void 0},b.Group.prototype.countLiving=function(){return this.iterate("alive",!0,b.Group.RETURN_TOTAL)},b.Group.prototype.countDead=function(){return this.iterate("alive",!1,b.Group.RETURN_TOTAL)},b.Group.prototype.getRandom=function(a,b){return 0===this.children.length?null:(a=a||0,b=b||this.children.length,this.game.math.getRandom(this.children,a,b))},b.Group.prototype.remove=function(a){return 0!==this.children.length?(a.events&&a.events.onRemovedFromGroup.dispatch(a,this),this.removeChild(a),this.updateZ(),this.cursor===a&&this.next(),!0):void 0},b.Group.prototype.removeAll=function(){if(0!==this.children.length){do this.children[0].events&&this.children[0].events.onRemovedFromGroup.dispatch(this.children[0],this),this.removeChild(this.children[0]);while(this.children.length>0);this.cursor=null}},b.Group.prototype.removeBetween=function(a,b){if(0!==this.children.length){if(a>b||0>a||b>this.children.length)return!1;for(var c=a;b>c;c++)this.children[c].events&&this.children[c].events.onRemovedFromGroup.dispatch(this.children[c],this),this.removeChild(this.children[c]),this.cursor===this.children[c]&&(this.cursor=null);this.updateZ()}},b.Group.prototype.destroy=function(a,b){if(null!==this.game){if("undefined"==typeof a&&(a=!0),"undefined"==typeof b&&(b=!1),a){if(this.children.length>0)do this.children[0].parent&&this.children[0].destroy(a);while(this.children.length>0)}else this.removeAll();this.cursor=null,b||(this.parent.removeChild(this),this.game=null,this.exists=!1)}},Object.defineProperty(b.Group.prototype,"total",{get:function(){return this.iterate("exists",!0,b.Group.RETURN_TOTAL)}}),Object.defineProperty(b.Group.prototype,"length",{get:function(){return this.children.length}}),Object.defineProperty(b.Group.prototype,"angle",{get:function(){return b.Math.radToDeg(this.rotation)},set:function(a){this.rotation=b.Math.degToRad(a)}}),Object.defineProperty(b.Group.prototype,"fixedToCamera",{get:function(){return!!this._cache[7]},set:function(a){a?(this._cache[7]=1,this.cameraOffset.set(this.x,this.y)):this._cache[7]=0}}),b.World=function(a){b.Group.call(this,a,null,"__world",!1),this.bounds=new b.Rectangle(0,0,a.width,a.height),this.camera=null},b.World.prototype=Object.create(b.Group.prototype),b.World.prototype.constructor=b.World,b.World.prototype.boot=function(){this.camera=new b.Camera(this.game,0,0,0,this.game.width,this.game.height),this.camera.displayObject=this,this.camera.scale=this.scale,this.game.camera=this.camera,this.game.stage.addChild(this)},b.World.prototype.setBounds=function(a,b,c,d){c<this.game.width&&(c=this.game.width),d<this.game.height&&(d=this.game.height),this.bounds.setTo(a,b,c,d),this.camera.bounds&&this.camera.bounds.setTo(a,b,c,d),this.game.physics.setBoundsToWorld()},b.World.prototype.shutdown=function(){this.destroy(!0,!0)},Object.defineProperty(b.World.prototype,"width",{get:function(){return this.bounds.width},set:function(a){this.bounds.width=a}}),Object.defineProperty(b.World.prototype,"height",{get:function(){return this.bounds.height},set:function(a){this.bounds.height=a}}),Object.defineProperty(b.World.prototype,"centerX",{get:function(){return this.bounds.halfWidth}}),Object.defineProperty(b.World.prototype,"centerY",{get:function(){return this.bounds.halfHeight}}),Object.defineProperty(b.World.prototype,"randomX",{get:function(){return this.bounds.x<0?this.game.rnd.integerInRange(this.bounds.x,this.bounds.width-Math.abs(this.bounds.x)):this.game.rnd.integerInRange(this.bounds.x,this.bounds.width)}}),Object.defineProperty(b.World.prototype,"randomY",{get:function(){return this.bounds.y<0?this.game.rnd.integerInRange(this.bounds.y,this.bounds.height-Math.abs(this.bounds.y)):this.game.rnd.integerInRange(this.bounds.y,this.bounds.height)}}),b.ScaleManager=function(a,c,d){this.game=a,this.width=c,this.height=d,this.minWidth=null,this.maxWidth=null,this.minHeight=null,this.maxHeight=null,this.forceLandscape=!1,this.forcePortrait=!1,this.incorrectOrientation=!1,this.pageAlignHorizontally=!1,this.pageAlignVertically=!1,this.maxIterations=5,this.orientationSprite=null,this.enterLandscape=new b.Signal,this.enterPortrait=new b.Signal,this.enterIncorrectOrientation=new b.Signal,this.leaveIncorrectOrientation=new b.Signal,this.hasResized=new b.Signal,this.fullScreenTarget=this.game.canvas,this.enterFullScreen=new b.Signal,this.leaveFullScreen=new b.Signal,this.orientation=0,window.orientation?this.orientation=window.orientation:window.outerWidth>window.outerHeight&&(this.orientation=90),this.scaleFactor=new b.Point(1,1),this.scaleFactorInversed=new b.Point(1,1),this.margin=new b.Point(0,0),this.aspectRatio=0,this.sourceAspectRatio=c/d,this.event=null,this.scaleMode=b.ScaleManager.NO_SCALE,this.fullScreenScaleMode=b.ScaleManager.NO_SCALE,this._startHeight=0,this._width=0,this._height=0;var e=this;window.addEventListener("orientationchange",function(a){return e.checkOrientation(a)},!1),window.addEventListener("resize",function(a){return e.checkResize(a)},!1),document.addEventListener("webkitfullscreenchange",function(a){return e.fullScreenChange(a)},!1),document.addEventListener("mozfullscreenchange",function(a){return e.fullScreenChange(a)},!1),document.addEventListener("fullscreenchange",function(a){return e.fullScreenChange(a)},!1)},b.ScaleManager.EXACT_FIT=0,b.ScaleManager.NO_SCALE=1,b.ScaleManager.SHOW_ALL=2,b.ScaleManager.prototype={startFullScreen:function(a){!this.isFullScreen&&this.game.device.fullscreen&&("undefined"!=typeof a&&this.game.renderType===b.CANVAS&&(this.game.stage.smoothed=a),this._width=this.width,this._height=this.height,this.game.device.fullscreenKeyboard?this.fullScreenTarget[this.game.device.requestFullscreen](Element.ALLOW_KEYBOARD_INPUT):this.fullScreenTarget[this.game.device.requestFullscreen]())},stopFullScreen:function(){this.fullScreenTarget[this.game.device.cancelFullscreen]()},fullScreenChange:function(a){this.event=a,this.isFullScreen?(this.fullScreenScaleMode===b.ScaleManager.EXACT_FIT?(this.fullScreenTarget.style.width="100%",this.fullScreenTarget.style.height="100%",this.width=window.outerWidth,this.height=window.outerHeight,this.game.input.scale.setTo(this.game.width/this.width,this.game.height/this.height),this.aspectRatio=this.width/this.height,this.scaleFactor.x=this.game.width/this.width,this.scaleFactor.y=this.game.height/this.height,this.checkResize()):this.fullScreenScaleMode===b.ScaleManager.SHOW_ALL&&(this.setShowAll(),this.refresh()),this.enterFullScreen.dispatch(this.width,this.height)):(this.fullScreenTarget.style.width=this.game.width+"px",this.fullScreenTarget.style.height=this.game.height+"px",this.width=this._width,this.height=this._height,this.game.input.scale.setTo(this.game.width/this.width,this.game.height/this.height),this.aspectRatio=this.width/this.height,this.scaleFactor.x=this.game.width/this.width,this.scaleFactor.y=this.game.height/this.height,this.leaveFullScreen.dispatch(this.width,this.height))},forceOrientation:function(a,c,d){"undefined"==typeof c&&(c=!1),this.forceLandscape=a,this.forcePortrait=c,"undefined"!=typeof d&&((null==d||this.game.cache.checkImageKey(d)===!1)&&(d="__default"),this.orientationSprite=new b.Image(this.game,this.game.width/2,this.game.height/2,PIXI.TextureCache[d]),this.orientationSprite.anchor.set(.5),this.checkOrientationState(),this.incorrectOrientation?(this.orientationSprite.visible=!0,this.game.world.visible=!1):(this.orientationSprite.visible=!1,this.game.world.visible=!0),this.game.stage.addChild(this.orientationSprite))},checkOrientationState:function(){this.incorrectOrientation?(this.forceLandscape&&window.innerWidth>window.innerHeight||this.forcePortrait&&window.innerHeight>window.innerWidth)&&(this.incorrectOrientation=!1,this.leaveIncorrectOrientation.dispatch(),this.orientationSprite&&(this.orientationSprite.visible=!1,this.game.world.visible=!0),this.scaleMode!==b.ScaleManager.NO_SCALE&&this.refresh()):(this.forceLandscape&&window.innerWidth<window.innerHeight||this.forcePortrait&&window.innerHeight<window.innerWidth)&&(this.incorrectOrientation=!0,this.enterIncorrectOrientation.dispatch(),this.orientationSprite&&this.orientationSprite.visible===!1&&(this.orientationSprite.visible=!0,this.game.world.visible=!1),this.scaleMode!==b.ScaleManager.NO_SCALE&&this.refresh())},checkOrientation:function(a){this.event=a,this.orientation=window.orientation,this.isLandscape?this.enterLandscape.dispatch(this.orientation,!0,!1):this.enterPortrait.dispatch(this.orientation,!1,!0),this.scaleMode!==b.ScaleManager.NO_SCALE&&this.refresh()},checkResize:function(a){this.event=a,this.orientation=window.outerWidth>window.outerHeight?90:0,this.isLandscape?this.enterLandscape.dispatch(this.orientation,!0,!1):this.enterPortrait.dispatch(this.orientation,!1,!0),this.scaleMode!==b.ScaleManager.NO_SCALE&&this.refresh(),this.checkOrientationState()},refresh:function(){if(this.game.device.iPad===!1&&this.game.device.webApp===!1&&this.game.device.desktop===!1&&(this.game.device.android&&this.game.device.chrome===!1?window.scrollTo(0,1):window.scrollTo(0,0)),null==this._check&&this.maxIterations>0){this._iterations=this.maxIterations;var a=this;this._check=window.setInterval(function(){return a.setScreenSize()},10),this.setScreenSize()}},setScreenSize:function(a){"undefined"==typeof a&&(a=!1),this.game.device.iPad===!1&&this.game.device.webApp===!1&&this.game.device.desktop===!1&&(this.game.device.android&&this.game.device.chrome===!1?window.scrollTo(0,1):window.scrollTo(0,0)),this._iterations--,(a||window.innerHeight>this._startHeight||this._iterations<0)&&(document.documentElement.style.minHeight=window.innerHeight+"px",this.incorrectOrientation===!0?this.setMaximum():this.isFullScreen?this.fullScreenScaleMode==b.ScaleManager.EXACT_FIT?this.setExactFit():this.fullScreenScaleMode==b.ScaleManager.SHOW_ALL&&this.setShowAll():this.scaleMode==b.ScaleManager.EXACT_FIT?this.setExactFit():this.scaleMode==b.ScaleManager.SHOW_ALL&&this.setShowAll(),this.setSize(),clearInterval(this._check),this._check=null)},setSize:function(){this.incorrectOrientation===!1&&(this.maxWidth&&this.width>this.maxWidth&&(this.width=this.maxWidth),this.maxHeight&&this.height>this.maxHeight&&(this.height=this.maxHeight),this.minWidth&&this.width<this.minWidth&&(this.width=this.minWidth),this.minHeight&&this.height<this.minHeight&&(this.height=this.minHeight)),this.game.canvas.style.width=this.width+"px",this.game.canvas.style.height=this.height+"px",this.game.input.scale.setTo(this.game.width/this.width,this.game.height/this.height),this.pageAlignHorizontally&&(this.width<window.innerWidth&&this.incorrectOrientation===!1?(this.margin.x=Math.round((window.innerWidth-this.width)/2),this.game.canvas.style.marginLeft=this.margin.x+"px"):(this.margin.x=0,this.game.canvas.style.marginLeft="0px")),this.pageAlignVertically&&(this.height<window.innerHeight&&this.incorrectOrientation===!1?(this.margin.y=Math.round((window.innerHeight-this.height)/2),this.game.canvas.style.marginTop=this.margin.y+"px"):(this.margin.y=0,this.game.canvas.style.marginTop="0px")),b.Canvas.getOffset(this.game.canvas,this.game.stage.offset),this.aspectRatio=this.width/this.height,this.scaleFactor.x=this.game.width/this.width,this.scaleFactor.y=this.game.height/this.height,this.scaleFactorInversed.x=this.width/this.game.width,this.scaleFactorInversed.y=this.height/this.game.height,this.hasResized.dispatch(this.width,this.height),this.checkOrientationState()},setMaximum:function(){this.width=window.innerWidth,this.height=window.innerHeight},setShowAll:function(){var a=Math.min(window.innerHeight/this.game.height,window.innerWidth/this.game.width);this.width=Math.round(this.game.width*a),this.height=Math.round(this.game.height*a)},setExactFit:function(){var a=window.innerWidth,b=window.innerHeight;this.width=this.maxWidth&&a>this.maxWidth?this.maxWidth:a,this.height=this.maxHeight&&b>this.maxHeight?this.maxHeight:b}},b.ScaleManager.prototype.constructor=b.ScaleManager,Object.defineProperty(b.ScaleManager.prototype,"isFullScreen",{get:function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement}}),Object.defineProperty(b.ScaleManager.prototype,"isPortrait",{get:function(){return 0===this.orientation||180==this.orientation}}),Object.defineProperty(b.ScaleManager.prototype,"isLandscape",{get:function(){return 90===this.orientation||-90===this.orientation}}),b.Game=function(a,c,d,e,f,g,h,i){this.id=b.GAMES.push(this)-1,this.config=null,this.physicsConfig=i,this.parent="",this.width=800,this.height=600,this.transparent=!1,this.antialias=!0,this.renderer=b.AUTO,this.renderType=b.AUTO,this.state=null,this.isBooted=!1,this.isRunning=!1,this.raf=null,this.add=null,this.make=null,this.cache=null,this.input=null,this.load=null,this.math=null,this.net=null,this.scale=null,this.sound=null,this.stage=null,this.time=null,this.tweens=null,this.world=null,this.physics=null,this.rnd=null,this.device=null,this.camera=null,this.canvas=null,this.context=null,this.debug=null,this.particles=null,this.stepping=!1,this.pendingStep=!1,this.stepCount=0,this.onPause=null,this.onResume=null,this.onBlur=null,this.onFocus=null,this._paused=!1,this._codePaused=!1,1===arguments.length&&"object"==typeof arguments[0]?this.parseConfig(arguments[0]):("undefined"!=typeof a&&(this.width=a),"undefined"!=typeof c&&(this.height=c),"undefined"!=typeof d&&(this.renderer=d,this.renderType=d),"undefined"!=typeof e&&(this.parent=e),"undefined"!=typeof g&&(this.transparent=g),"undefined"!=typeof h&&(this.antialias=h),this.rnd=new b.RandomDataGenerator([(Date.now()*Math.random()).toString()]),this.state=new b.StateManager(this,f));var j=this;return this._onBoot=function(){return j.boot()},"complete"===document.readyState||"interactive"===document.readyState?window.setTimeout(this._onBoot,0):(document.addEventListener("DOMContentLoaded",this._onBoot,!1),window.addEventListener("load",this._onBoot,!1)),this},b.Game.prototype={parseConfig:function(a){this.config=a,a.width&&(this.width=b.Utils.parseDimension(a.width,0)),a.height&&(this.height=b.Utils.parseDimension(a.height,1)),a.renderer&&(this.renderer=a.renderer,this.renderType=a.renderer),a.parent&&(this.parent=a.parent),a.transparent&&(this.transparent=a.transparent),a.antialias&&(this.antialias=a.antialias),a.physicsConfig&&(this.physicsConfig=a.physicsConfig);var c=[(Date.now()*Math.random()).toString()];a.seed&&(c=a.seed),this.rnd=new b.RandomDataGenerator(c);var d=null;a.state&&(d=a.state),this.state=new b.StateManager(this,d)},boot:function(){this.isBooted||(document.body?(document.removeEventListener("DOMContentLoaded",this._onBoot),window.removeEventListener("load",this._onBoot),this.onPause=new b.Signal,this.onResume=new b.Signal,this.onBlur=new b.Signal,this.onFocus=new b.Signal,this.isBooted=!0,this.device=new b.Device(this),this.math=b.Math,this.stage=new b.Stage(this,this.width,this.height),this.scale=new b.ScaleManager(this,this.width,this.height),this.setUpRenderer(),this.device.checkFullScreenSupport(),this.world=new b.World(this),this.add=new b.GameObjectFactory(this),this.make=new b.GameObjectCreator(this),this.cache=new b.Cache(this),this.load=new b.Loader(this),this.time=new b.Time(this),this.tweens=new b.TweenManager(this),this.input=new b.Input(this),this.sound=new b.SoundManager(this),this.physics=new b.Physics(this,this.physicsConfig),this.particles=new b.Particles(this),this.plugins=new b.PluginManager(this,this),this.net=new b.Net(this),this.debug=new b.Utils.Debug(this),this.time.boot(),this.stage.boot(),this.world.boot(),this.input.boot(),this.sound.boot(),this.state.boot(),this.debug.boot(),this.showDebugHeader(),this.isRunning=!0,this.raf=this.config&&this.config.forceSetTimeOut?new b.RequestAnimationFrame(this,this.config.forceSetTimeOut):new b.RequestAnimationFrame(this,!1),this.raf.start()):window.setTimeout(this._onBoot,20))},showDebugHeader:function(){var a=b.DEV_VERSION,c="Canvas",d="HTML Audio",e=1;if(this.renderType===b.WEBGL?(c="WebGL",e++):this.renderType==b.HEADLESS&&(c="Headless"),this.device.webAudio&&(d="WebAudio",e++),this.device.chrome){for(var f=["%c %c %c Phaser v"+a+" - "+c+" - "+d+"  %c %c  http://phaser.io  %c %c ♥%c♥%c♥ ","background: #0cf300","background: #00bc17","color: #ffffff; background: #00711f;","background: #00bc17","background: #0cf300","background: #00bc17"],g=0;3>g;g++)f.push(e>g?"color: #ff2424; background: #fff":"color: #959595; background: #fff");console.log.apply(console,f)}else console.log("Phaser v"+a+" - Renderer: "+c+" - Audio: "+d+" - http://phaser.io")
},setUpRenderer:function(){if(this.device.trident&&(this.renderType=b.CANVAS),this.renderType===b.HEADLESS||this.renderType===b.CANVAS||this.renderType===b.AUTO&&this.device.webGL===!1){if(!this.device.canvas)throw new Error("Phaser.Game - cannot create Canvas or WebGL context, aborting.");this.renderType===b.AUTO&&(this.renderType=b.CANVAS),this.renderer=new PIXI.CanvasRenderer(this.width,this.height,this.canvas,this.transparent),this.context=this.renderer.context}else this.renderType=b.WEBGL,this.renderer=new PIXI.WebGLRenderer(this.width,this.height,this.canvas,this.transparent,this.antialias),this.context=null;this.renderType!==b.HEADLESS&&(this.stage.smoothed=this.antialias,b.Canvas.addToDOM(this.canvas,this.parent,!0),b.Canvas.setTouchAction(this.canvas))},update:function(a){this.time.update(a),this._paused||this.pendingStep?this.debug.preUpdate():(this.stepping&&(this.pendingStep=!0),this.debug.preUpdate(),this.physics.preUpdate(),this.state.preUpdate(),this.plugins.preUpdate(),this.stage.preUpdate(),this.stage.update(),this.tweens.update(),this.sound.update(),this.input.update(),this.state.update(),this.physics.update(),this.particles.update(),this.plugins.update(),this.stage.postUpdate(),this.plugins.postUpdate()),this.renderType!=b.HEADLESS&&(this.renderer.render(this.stage),this.plugins.render(),this.state.render(),this.plugins.postRender())},enableStep:function(){this.stepping=!0,this.pendingStep=!1,this.stepCount=0},disableStep:function(){this.stepping=!1,this.pendingStep=!1},step:function(){this.pendingStep=!1,this.stepCount++},destroy:function(){this.raf.stop(),this.input.destroy(),this.state.destroy(),this.physics.destroy(),this.state=null,this.cache=null,this.input=null,this.load=null,this.sound=null,this.stage=null,this.time=null,this.world=null,this.isBooted=!1},gamePaused:function(a){this._paused||(this._paused=!0,this.time.gamePaused(),this.sound.setMute(),this.onPause.dispatch(a))},gameResumed:function(a){this._paused&&!this._codePaused&&(this._paused=!1,this.time.gameResumed(),this.input.reset(),this.sound.unsetMute(),this.onResume.dispatch(a))},focusLoss:function(a){this.onBlur.dispatch(a),this.gamePaused(a)},focusGain:function(a){this.onFocus.dispatch(a),this.gameResumed(a)}},b.Game.prototype.constructor=b.Game,Object.defineProperty(b.Game.prototype,"paused",{get:function(){return this._paused},set:function(a){a===!0?this._paused===!1&&(this._paused=!0,this._codePaused=!0,this.sound.mute=!0,this.time.gamePaused(),this.onPause.dispatch(this)):this._paused&&(this._paused=!1,this._codePaused=!1,this.input.reset(),this.sound.mute=!1,this.time.gameResumed(),this.onResume.dispatch(this))}}),b.Input=function(a){this.game=a,this.hitCanvas=null,this.hitContext=null,this.moveCallback=null,this.moveCallbackContext=this,this.pollRate=0,this.disabled=!1,this.multiInputOverride=b.Input.MOUSE_TOUCH_COMBINE,this.position=null,this.speed=null,this.circle=null,this.scale=null,this.maxPointers=10,this.currentPointers=0,this.tapRate=200,this.doubleTapRate=300,this.holdRate=2e3,this.justPressedRate=200,this.justReleasedRate=200,this.recordPointerHistory=!1,this.recordRate=100,this.recordLimit=100,this.pointer1=null,this.pointer2=null,this.pointer3=null,this.pointer4=null,this.pointer5=null,this.pointer6=null,this.pointer7=null,this.pointer8=null,this.pointer9=null,this.pointer10=null,this.activePointer=null,this.mousePointer=null,this.mouse=null,this.keyboard=null,this.touch=null,this.mspointer=null,this.gamepad=null,this.onDown=null,this.onUp=null,this.onTap=null,this.onHold=null,this.interactiveItems=new b.LinkedList,this._localPoint=new b.Point,this._pollCounter=0,this._oldPosition=null,this._x=0,this._y=0},b.Input.MOUSE_OVERRIDES_TOUCH=0,b.Input.TOUCH_OVERRIDES_MOUSE=1,b.Input.MOUSE_TOUCH_COMBINE=2,b.Input.prototype={boot:function(){this.mousePointer=new b.Pointer(this.game,0),this.pointer1=new b.Pointer(this.game,1),this.pointer2=new b.Pointer(this.game,2),this.mouse=new b.Mouse(this.game),this.keyboard=new b.Keyboard(this.game),this.touch=new b.Touch(this.game),this.mspointer=new b.MSPointer(this.game),this.gamepad=new b.Gamepad(this.game),this.onDown=new b.Signal,this.onUp=new b.Signal,this.onTap=new b.Signal,this.onHold=new b.Signal,this.scale=new b.Point(1,1),this.speed=new b.Point,this.position=new b.Point,this._oldPosition=new b.Point,this.circle=new b.Circle(0,0,44),this.activePointer=this.mousePointer,this.currentPointers=0,this.hitCanvas=document.createElement("canvas"),this.hitCanvas.width=1,this.hitCanvas.height=1,this.hitContext=this.hitCanvas.getContext("2d"),this.mouse.start(),this.keyboard.start(),this.touch.start(),this.mspointer.start(),this.mousePointer.active=!0},destroy:function(){this.mouse.stop(),this.keyboard.stop(),this.touch.stop(),this.mspointer.stop(),this.gamepad.stop(),this.moveCallback=null},setMoveCallback:function(a,b){this.moveCallback=a,this.moveCallbackContext=b},addPointer:function(){for(var a=0,c=10;c>0;c--)null===this["pointer"+c]&&(a=c);return 0===a?(console.warn("You can only have 10 Pointer objects"),null):(this["pointer"+a]=new b.Pointer(this.game,a),this["pointer"+a])},update:function(){return this.keyboard.update(),this.pollRate>0&&this._pollCounter<this.pollRate?void this._pollCounter++:(this.speed.x=this.position.x-this._oldPosition.x,this.speed.y=this.position.y-this._oldPosition.y,this._oldPosition.copyFrom(this.position),this.mousePointer.update(),this.gamepad.active&&this.gamepad.update(),this.pointer1.update(),this.pointer2.update(),this.pointer3&&this.pointer3.update(),this.pointer4&&this.pointer4.update(),this.pointer5&&this.pointer5.update(),this.pointer6&&this.pointer6.update(),this.pointer7&&this.pointer7.update(),this.pointer8&&this.pointer8.update(),this.pointer9&&this.pointer9.update(),this.pointer10&&this.pointer10.update(),void(this._pollCounter=0))},reset:function(a){if(this.game.isBooted!==!1){"undefined"==typeof a&&(a=!1),this.keyboard.reset(),this.mousePointer.reset(),this.gamepad.reset();for(var c=1;10>=c;c++)this["pointer"+c]&&this["pointer"+c].reset();this.currentPointers=0,"none"!==this.game.canvas.style.cursor&&(this.game.canvas.style.cursor="inherit"),a===!0&&(this.onDown.dispose(),this.onUp.dispose(),this.onTap.dispose(),this.onHold.dispose(),this.onDown=new b.Signal,this.onUp=new b.Signal,this.onTap=new b.Signal,this.onHold=new b.Signal,this.interactiveItems.callAll("reset")),this._pollCounter=0}},resetSpeed:function(a,b){this._oldPosition.setTo(a,b),this.speed.setTo(0,0)},startPointer:function(a){if(this.maxPointers<10&&this.totalActivePointers==this.maxPointers)return null;if(this.pointer1.active===!1)return this.pointer1.start(a);if(this.pointer2.active===!1)return this.pointer2.start(a);for(var b=3;10>=b;b++)if(this["pointer"+b]&&this["pointer"+b].active===!1)return this["pointer"+b].start(a);return null},updatePointer:function(a){if(this.pointer1.active&&this.pointer1.identifier==a.identifier)return this.pointer1.move(a);if(this.pointer2.active&&this.pointer2.identifier==a.identifier)return this.pointer2.move(a);for(var b=3;10>=b;b++)if(this["pointer"+b]&&this["pointer"+b].active&&this["pointer"+b].identifier==a.identifier)return this["pointer"+b].move(a);return null},stopPointer:function(a){if(this.pointer1.active&&this.pointer1.identifier==a.identifier)return this.pointer1.stop(a);if(this.pointer2.active&&this.pointer2.identifier==a.identifier)return this.pointer2.stop(a);for(var b=3;10>=b;b++)if(this["pointer"+b]&&this["pointer"+b].active&&this["pointer"+b].identifier==a.identifier)return this["pointer"+b].stop(a);return null},getPointer:function(a){if(a=a||!1,this.pointer1.active==a)return this.pointer1;if(this.pointer2.active==a)return this.pointer2;for(var b=3;10>=b;b++)if(this["pointer"+b]&&this["pointer"+b].active==a)return this["pointer"+b];return null},getPointerFromIdentifier:function(a){if(this.pointer1.identifier==a)return this.pointer1;if(this.pointer2.identifier==a)return this.pointer2;for(var b=3;10>=b;b++)if(this["pointer"+b]&&this["pointer"+b].identifier==a)return this["pointer"+b];return null},getLocalPosition:function(a,c,d){"undefined"==typeof d&&(d=new b.Point);var e=a.worldTransform,f=1/(e.a*e.d+e.b*-e.c);return d.setTo(e.d*f*c.x+-e.b*f*c.y+(e.ty*e.b-e.tx*e.d)*f,e.a*f*c.y+-e.c*f*c.x+(-e.ty*e.a+e.tx*e.c)*f)},hitTest:function(a,c,d){if(!a.worldVisible)return!1;if(this.getLocalPosition(a,c,this._localPoint),d.copyFrom(this._localPoint),a.hitArea&&a.hitArea.contains)return a.hitArea.contains(this._localPoint.x,this._localPoint.y)?!0:!1;if(a instanceof b.TileSprite){var e=a.width,f=a.height,g=-e*a.anchor.x;if(this._localPoint.x>g&&this._localPoint.x<g+e){var h=-f*a.anchor.y;if(this._localPoint.y>h&&this._localPoint.y<h+f)return!0}}else if(a instanceof PIXI.Sprite){var e=a.texture.frame.width,f=a.texture.frame.height,g=-e*a.anchor.x;if(this._localPoint.x>g&&this._localPoint.x<g+e){var h=-f*a.anchor.y;if(this._localPoint.y>h&&this._localPoint.y<h+f)return!0}}for(var i=0,j=a.children.length;j>i;i++)if(this.hitTest(a.children[i],c,d))return!0;return!1}},b.Input.prototype.constructor=b.Input,Object.defineProperty(b.Input.prototype,"x",{get:function(){return this._x},set:function(a){this._x=Math.floor(a)}}),Object.defineProperty(b.Input.prototype,"y",{get:function(){return this._y},set:function(a){this._y=Math.floor(a)}}),Object.defineProperty(b.Input.prototype,"pollLocked",{get:function(){return this.pollRate>0&&this._pollCounter<this.pollRate}}),Object.defineProperty(b.Input.prototype,"totalInactivePointers",{get:function(){return 10-this.currentPointers}}),Object.defineProperty(b.Input.prototype,"totalActivePointers",{get:function(){this.currentPointers=0;for(var a=1;10>=a;a++)this["pointer"+a]&&this["pointer"+a].active&&this.currentPointers++;return this.currentPointers}}),Object.defineProperty(b.Input.prototype,"worldX",{get:function(){return this.game.camera.view.x+this.x}}),Object.defineProperty(b.Input.prototype,"worldY",{get:function(){return this.game.camera.view.y+this.y}}),b.Key=function(a,c){this.game=a,this.event=null,this.isDown=!1,this.isUp=!0,this.altKey=!1,this.ctrlKey=!1,this.shiftKey=!1,this.timeDown=0,this.duration=0,this.timeUp=-2500,this.repeats=0,this.keyCode=c,this.onDown=new b.Signal,this.onHoldCallback=null,this.onHoldContext=null,this.onUp=new b.Signal},b.Key.prototype={update:function(){this.isDown&&(this.duration=this.game.time.now-this.timeDown,this.repeats++,this.onHoldCallback&&this.onHoldCallback.call(this.onHoldContext,this))},processKeyDown:function(a){this.event=a,this.isDown||(this.altKey=a.altKey,this.ctrlKey=a.ctrlKey,this.shiftKey=a.shiftKey,this.isDown=!0,this.isUp=!1,this.timeDown=this.game.time.now,this.duration=0,this.repeats=0,this.onDown.dispatch(this))},processKeyUp:function(a){this.event=a,this.isUp||(this.isDown=!1,this.isUp=!0,this.timeUp=this.game.time.now,this.duration=this.game.time.now-this.timeDown,this.onUp.dispatch(this))},reset:function(){this.isDown=!1,this.isUp=!0,this.timeUp=this.game.time.now,this.duration=this.game.time.now-this.timeDown},justPressed:function(a){return"undefined"==typeof a&&(a=2500),this.isDown&&this.duration<a},justReleased:function(a){return"undefined"==typeof a&&(a=2500),!this.isDown&&this.game.time.now-this.timeUp<a}},b.Key.prototype.constructor=b.Key,b.Keyboard=function(a){this.game=a,this.disabled=!1,this.event=null,this.callbackContext=this,this.onDownCallback=null,this.onUpCallback=null,this._keys=[],this._capture=[],this._onKeyDown=null,this._onKeyUp=null,this._i=0},b.Keyboard.prototype={addCallbacks:function(a,b,c){this.callbackContext=a,this.onDownCallback=b,"undefined"!=typeof c&&(this.onUpCallback=c)},addKey:function(a){return this._keys[a]||(this._keys[a]=new b.Key(this.game,a),this.addKeyCapture(a)),this._keys[a]},removeKey:function(a){this._keys[a]&&(this._keys[a]=null,this.removeKeyCapture(a))},createCursorKeys:function(){return{up:this.addKey(b.Keyboard.UP),down:this.addKey(b.Keyboard.DOWN),left:this.addKey(b.Keyboard.LEFT),right:this.addKey(b.Keyboard.RIGHT)}},start:function(){if(null===this._onKeyDown){var a=this;this._onKeyDown=function(b){return a.processKeyDown(b)},this._onKeyUp=function(b){return a.processKeyUp(b)},window.addEventListener("keydown",this._onKeyDown,!1),window.addEventListener("keyup",this._onKeyUp,!1)}},stop:function(){this._onKeyDown=null,this._onKeyUp=null,window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp)},destroy:function(){this.stop(),this.clearCaptures(),this._keys.length=0,this._i=0},addKeyCapture:function(a){if("object"==typeof a)for(var b in a)this._capture[a[b]]=!0;else this._capture[a]=!0},removeKeyCapture:function(a){delete this._capture[a]},clearCaptures:function(){this._capture={}},update:function(){for(this._i=this._keys.length;this._i--;)this._keys[this._i]&&this._keys[this._i].update()},processKeyDown:function(a){this.event=a,this.game.input.disabled||this.disabled||(this._capture[a.keyCode]&&a.preventDefault(),this.onDownCallback&&this.onDownCallback.call(this.callbackContext,a),this._keys[a.keyCode]||(this._keys[a.keyCode]=new b.Key(this.game,a.keyCode)),this._keys[a.keyCode].processKeyDown(a))},processKeyUp:function(a){this.event=a,this.game.input.disabled||this.disabled||(this._capture[a.keyCode]&&a.preventDefault(),this.onUpCallback&&this.onUpCallback.call(this.callbackContext,a),this._keys[a.keyCode]||(this._keys[a.keyCode]=new b.Key(this.game,a.keyCode)),this._keys[a.keyCode].processKeyUp(a))},reset:function(){this.event=null;for(var a=this._keys.length;a--;)this._keys[a]&&this._keys[a].reset()},justPressed:function(a,b){return this._keys[a]?this._keys[a].justPressed(b):!1},justReleased:function(a,b){return this._keys[a]?this._keys[a].justReleased(b):!1},isDown:function(a){return this._keys[a]?this._keys[a].isDown:!1}},b.Keyboard.prototype.constructor=b.Keyboard,b.Keyboard.A="A".charCodeAt(0),b.Keyboard.B="B".charCodeAt(0),b.Keyboard.C="C".charCodeAt(0),b.Keyboard.D="D".charCodeAt(0),b.Keyboard.E="E".charCodeAt(0),b.Keyboard.F="F".charCodeAt(0),b.Keyboard.G="G".charCodeAt(0),b.Keyboard.H="H".charCodeAt(0),b.Keyboard.I="I".charCodeAt(0),b.Keyboard.J="J".charCodeAt(0),b.Keyboard.K="K".charCodeAt(0),b.Keyboard.L="L".charCodeAt(0),b.Keyboard.M="M".charCodeAt(0),b.Keyboard.N="N".charCodeAt(0),b.Keyboard.O="O".charCodeAt(0),b.Keyboard.P="P".charCodeAt(0),b.Keyboard.Q="Q".charCodeAt(0),b.Keyboard.R="R".charCodeAt(0),b.Keyboard.S="S".charCodeAt(0),b.Keyboard.T="T".charCodeAt(0),b.Keyboard.U="U".charCodeAt(0),b.Keyboard.V="V".charCodeAt(0),b.Keyboard.W="W".charCodeAt(0),b.Keyboard.X="X".charCodeAt(0),b.Keyboard.Y="Y".charCodeAt(0),b.Keyboard.Z="Z".charCodeAt(0),b.Keyboard.ZERO="0".charCodeAt(0),b.Keyboard.ONE="1".charCodeAt(0),b.Keyboard.TWO="2".charCodeAt(0),b.Keyboard.THREE="3".charCodeAt(0),b.Keyboard.FOUR="4".charCodeAt(0),b.Keyboard.FIVE="5".charCodeAt(0),b.Keyboard.SIX="6".charCodeAt(0),b.Keyboard.SEVEN="7".charCodeAt(0),b.Keyboard.EIGHT="8".charCodeAt(0),b.Keyboard.NINE="9".charCodeAt(0),b.Keyboard.NUMPAD_0=96,b.Keyboard.NUMPAD_1=97,b.Keyboard.NUMPAD_2=98,b.Keyboard.NUMPAD_3=99,b.Keyboard.NUMPAD_4=100,b.Keyboard.NUMPAD_5=101,b.Keyboard.NUMPAD_6=102,b.Keyboard.NUMPAD_7=103,b.Keyboard.NUMPAD_8=104,b.Keyboard.NUMPAD_9=105,b.Keyboard.NUMPAD_MULTIPLY=106,b.Keyboard.NUMPAD_ADD=107,b.Keyboard.NUMPAD_ENTER=108,b.Keyboard.NUMPAD_SUBTRACT=109,b.Keyboard.NUMPAD_DECIMAL=110,b.Keyboard.NUMPAD_DIVIDE=111,b.Keyboard.F1=112,b.Keyboard.F2=113,b.Keyboard.F3=114,b.Keyboard.F4=115,b.Keyboard.F5=116,b.Keyboard.F6=117,b.Keyboard.F7=118,b.Keyboard.F8=119,b.Keyboard.F9=120,b.Keyboard.F10=121,b.Keyboard.F11=122,b.Keyboard.F12=123,b.Keyboard.F13=124,b.Keyboard.F14=125,b.Keyboard.F15=126,b.Keyboard.COLON=186,b.Keyboard.EQUALS=187,b.Keyboard.UNDERSCORE=189,b.Keyboard.QUESTION_MARK=191,b.Keyboard.TILDE=192,b.Keyboard.OPEN_BRACKET=219,b.Keyboard.BACKWARD_SLASH=220,b.Keyboard.CLOSED_BRACKET=221,b.Keyboard.QUOTES=222,b.Keyboard.BACKSPACE=8,b.Keyboard.TAB=9,b.Keyboard.CLEAR=12,b.Keyboard.ENTER=13,b.Keyboard.SHIFT=16,b.Keyboard.CONTROL=17,b.Keyboard.ALT=18,b.Keyboard.CAPS_LOCK=20,b.Keyboard.ESC=27,b.Keyboard.SPACEBAR=32,b.Keyboard.PAGE_UP=33,b.Keyboard.PAGE_DOWN=34,b.Keyboard.END=35,b.Keyboard.HOME=36,b.Keyboard.LEFT=37,b.Keyboard.UP=38,b.Keyboard.RIGHT=39,b.Keyboard.DOWN=40,b.Keyboard.INSERT=45,b.Keyboard.DELETE=46,b.Keyboard.HELP=47,b.Keyboard.NUM_LOCK=144,b.Mouse=function(a){this.game=a,this.callbackContext=this.game,this.mouseDownCallback=null,this.mouseMoveCallback=null,this.mouseUpCallback=null,this.capture=!1,this.button=-1,this.disabled=!1,this.locked=!1,this.pointerLock=new b.Signal,this.event=null,this._onMouseDown=null,this._onMouseMove=null,this._onMouseUp=null},b.Mouse.NO_BUTTON=-1,b.Mouse.LEFT_BUTTON=0,b.Mouse.MIDDLE_BUTTON=1,b.Mouse.RIGHT_BUTTON=2,b.Mouse.prototype={start:function(){if((!this.game.device.android||this.game.device.chrome!==!1)&&null===this._onMouseDown){var a=this;this._onMouseDown=function(b){return a.onMouseDown(b)},this._onMouseMove=function(b){return a.onMouseMove(b)},this._onMouseUp=function(b){return a.onMouseUp(b)},this.game.canvas.addEventListener("mousedown",this._onMouseDown,!0),this.game.canvas.addEventListener("mousemove",this._onMouseMove,!0),this.game.canvas.addEventListener("mouseup",this._onMouseUp,!0)}},onMouseDown:function(a){this.event=a,this.capture&&a.preventDefault(),this.button=a.button,this.mouseDownCallback&&this.mouseDownCallback.call(this.callbackContext,a),this.game.input.disabled||this.disabled||(a.identifier=0,this.game.input.mousePointer.start(a))},onMouseMove:function(a){this.event=a,this.capture&&a.preventDefault(),this.mouseMoveCallback&&this.mouseMoveCallback.call(this.callbackContext,a),this.game.input.disabled||this.disabled||(a.identifier=0,this.game.input.mousePointer.move(a))},onMouseUp:function(a){this.event=a,this.capture&&a.preventDefault(),this.button=b.Mouse.NO_BUTTON,this.mouseUpCallback&&this.mouseUpCallback.call(this.callbackContext,a),this.game.input.disabled||this.disabled||(a.identifier=0,this.game.input.mousePointer.stop(a))},requestPointerLock:function(){if(this.game.device.pointerLock){var a=this.game.canvas;a.requestPointerLock=a.requestPointerLock||a.mozRequestPointerLock||a.webkitRequestPointerLock,a.requestPointerLock();var b=this;this._pointerLockChange=function(a){return b.pointerLockChange(a)},document.addEventListener("pointerlockchange",this._pointerLockChange,!0),document.addEventListener("mozpointerlockchange",this._pointerLockChange,!0),document.addEventListener("webkitpointerlockchange",this._pointerLockChange,!0)}},pointerLockChange:function(a){var b=this.game.canvas;document.pointerLockElement===b||document.mozPointerLockElement===b||document.webkitPointerLockElement===b?(this.locked=!0,this.pointerLock.dispatch(!0,a)):(this.locked=!1,this.pointerLock.dispatch(!1,a))},releasePointerLock:function(){document.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock,document.exitPointerLock(),document.removeEventListener("pointerlockchange",this._pointerLockChange,!0),document.removeEventListener("mozpointerlockchange",this._pointerLockChange,!0),document.removeEventListener("webkitpointerlockchange",this._pointerLockChange,!0)},stop:function(){this.game.canvas.removeEventListener("mousedown",this._onMouseDown,!0),this.game.canvas.removeEventListener("mousemove",this._onMouseMove,!0),this.game.canvas.removeEventListener("mouseup",this._onMouseUp,!0)}},b.Mouse.prototype.constructor=b.Mouse,b.MSPointer=function(a){this.game=a,this.callbackContext=this.game,this.disabled=!1,this._onMSPointerDown=null,this._onMSPointerMove=null,this._onMSPointerUp=null},b.MSPointer.prototype={start:function(){if(null===this._onMSPointerDown){var a=this;this.game.device.mspointer===!0&&(this._onMSPointerDown=function(b){return a.onPointerDown(b)},this._onMSPointerMove=function(b){return a.onPointerMove(b)},this._onMSPointerUp=function(b){return a.onPointerUp(b)},this.game.renderer.view.addEventListener("MSPointerDown",this._onMSPointerDown,!1),this.game.renderer.view.addEventListener("MSPointerMove",this._onMSPointerMove,!1),this.game.renderer.view.addEventListener("MSPointerUp",this._onMSPointerUp,!1),this.game.renderer.view.addEventListener("pointerDown",this._onMSPointerDown,!1),this.game.renderer.view.addEventListener("pointerMove",this._onMSPointerMove,!1),this.game.renderer.view.addEventListener("pointerUp",this._onMSPointerUp,!1),this.game.renderer.view.style["-ms-content-zooming"]="none",this.game.renderer.view.style["-ms-touch-action"]="none")}},onPointerDown:function(a){this.game.input.disabled||this.disabled||(a.preventDefault(),a.identifier=a.pointerId,this.game.input.startPointer(a))},onPointerMove:function(a){this.game.input.disabled||this.disabled||(a.preventDefault(),a.identifier=a.pointerId,this.game.input.updatePointer(a))},onPointerUp:function(a){this.game.input.disabled||this.disabled||(a.preventDefault(),a.identifier=a.pointerId,this.game.input.stopPointer(a))},stop:function(){this.game.canvas.removeEventListener("MSPointerDown",this._onMSPointerDown),this.game.canvas.removeEventListener("MSPointerMove",this._onMSPointerMove),this.game.canvas.removeEventListener("MSPointerUp",this._onMSPointerUp),this.game.canvas.removeEventListener("pointerDown",this._onMSPointerDown),this.game.canvas.removeEventListener("pointerMove",this._onMSPointerMove),this.game.canvas.removeEventListener("pointerUp",this._onMSPointerUp)}},b.MSPointer.prototype.constructor=b.MSPointer,b.Pointer=function(a,c){this.game=a,this.id=c,this._holdSent=!1,this._history=[],this._nextDrop=0,this._stateReset=!1,this.withinGame=!1,this.clientX=-1,this.clientY=-1,this.pageX=-1,this.pageY=-1,this.screenX=-1,this.screenY=-1,this.x=-1,this.y=-1,this.isMouse=!1,this.isDown=!1,this.isUp=!0,this.timeDown=0,this.timeUp=0,this.previousTapTime=0,this.totalTouches=0,this.msSinceLastClick=Number.MAX_VALUE,this.targetObject=null,this.active=!1,this.position=new b.Point,this.positionDown=new b.Point,this.circle=new b.Circle(0,0,44),0===c&&(this.isMouse=!0)},b.Pointer.prototype={start:function(a){return this.identifier=a.identifier,this.target=a.target,"undefined"!=typeof a.button&&(this.button=a.button),this._history.length=0,this.active=!0,this.withinGame=!0,this.isDown=!0,this.isUp=!1,this.msSinceLastClick=this.game.time.now-this.timeDown,this.timeDown=this.game.time.now,this._holdSent=!1,this.move(a,!0),this.positionDown.setTo(this.x,this.y),(this.game.input.multiInputOverride===b.Input.MOUSE_OVERRIDES_TOUCH||this.game.input.multiInputOverride===b.Input.MOUSE_TOUCH_COMBINE||this.game.input.multiInputOverride===b.Input.TOUCH_OVERRIDES_MOUSE&&0===this.game.input.currentPointers)&&(this.game.input.x=this.x,this.game.input.y=this.y,this.game.input.position.setTo(this.x,this.y),this.game.input.onDown.dispatch(this,a),this.game.input.resetSpeed(this.x,this.y)),this._stateReset=!1,this.totalTouches++,this.isMouse||this.game.input.currentPointers++,null!==this.targetObject&&this.targetObject._touchedHandler(this),this},update:function(){this.active&&(this._holdSent===!1&&this.duration>=this.game.input.holdRate&&((this.game.input.multiInputOverride==b.Input.MOUSE_OVERRIDES_TOUCH||this.game.input.multiInputOverride==b.Input.MOUSE_TOUCH_COMBINE||this.game.input.multiInputOverride==b.Input.TOUCH_OVERRIDES_MOUSE&&0===this.game.input.currentPointers)&&this.game.input.onHold.dispatch(this),this._holdSent=!0),this.game.input.recordPointerHistory&&this.game.time.now>=this._nextDrop&&(this._nextDrop=this.game.time.now+this.game.input.recordRate,this._history.push({x:this.position.x,y:this.position.y}),this._history.length>this.game.input.recordLimit&&this._history.shift()))},move:function(a,c){if(!this.game.input.pollLocked){if("undefined"==typeof c&&(c=!1),"undefined"!=typeof a.button&&(this.button=a.button),this.clientX=a.clientX,this.clientY=a.clientY,this.pageX=a.pageX,this.pageY=a.pageY,this.screenX=a.screenX,this.screenY=a.screenY,this.x=(this.pageX-this.game.stage.offset.x)*this.game.input.scale.x,this.y=(this.pageY-this.game.stage.offset.y)*this.game.input.scale.y,this.position.setTo(this.x,this.y),this.circle.x=this.x,this.circle.y=this.y,(this.game.input.multiInputOverride==b.Input.MOUSE_OVERRIDES_TOUCH||this.game.input.multiInputOverride==b.Input.MOUSE_TOUCH_COMBINE||this.game.input.multiInputOverride==b.Input.TOUCH_OVERRIDES_MOUSE&&0===this.game.input.currentPointers)&&(this.game.input.activePointer=this,this.game.input.x=this.x,this.game.input.y=this.y,this.game.input.position.setTo(this.game.input.x,this.game.input.y),this.game.input.circle.x=this.game.input.x,this.game.input.circle.y=this.game.input.y),this.game.paused)return this;if(this.game.input.moveCallback&&this.game.input.moveCallback.call(this.game.input.moveCallbackContext,this,this.x,this.y),null!==this.targetObject&&this.targetObject.isDragged===!0)return this.targetObject.update(this)===!1&&(this.targetObject=null),this;if(this._highestRenderOrderID=Number.MAX_SAFE_INTEGER,this._highestRenderObject=null,this._highestInputPriorityID=-1,this.game.input.interactiveItems.total>0){var d=this.game.input.interactiveItems.next;do d.validForInput(this._highestInputPriorityID,this._highestRenderOrderID)&&(!c&&d.checkPointerOver(this)||c&&d.checkPointerDown(this))&&(this._highestRenderOrderID=d.sprite._cache[3],this._highestInputPriorityID=d.priorityID,this._highestRenderObject=d),d=d.next;while(null!=d)}return null===this._highestRenderObject?this.targetObject&&(this.targetObject._pointerOutHandler(this),this.targetObject=null):null===this.targetObject?(this.targetObject=this._highestRenderObject,this._highestRenderObject._pointerOverHandler(this)):this.targetObject===this._highestRenderObject?this._highestRenderObject.update(this)===!1&&(this.targetObject=null):(this.targetObject._pointerOutHandler(this),this.targetObject=this._highestRenderObject,this.targetObject._pointerOverHandler(this)),this}},leave:function(a){this.withinGame=!1,this.move(a,!1)},stop:function(a){if(this._stateReset)return void a.preventDefault();if(this.timeUp=this.game.time.now,(this.game.input.multiInputOverride==b.Input.MOUSE_OVERRIDES_TOUCH||this.game.input.multiInputOverride==b.Input.MOUSE_TOUCH_COMBINE||this.game.input.multiInputOverride==b.Input.TOUCH_OVERRIDES_MOUSE&&0===this.game.input.currentPointers)&&(this.game.input.onUp.dispatch(this,a),this.duration>=0&&this.duration<=this.game.input.tapRate&&(this.timeUp-this.previousTapTime<this.game.input.doubleTapRate?this.game.input.onTap.dispatch(this,!0):this.game.input.onTap.dispatch(this,!1),this.previousTapTime=this.timeUp)),this.id>0&&(this.active=!1),this.withinGame=!1,this.isDown=!1,this.isUp=!0,this.isMouse===!1&&this.game.input.currentPointers--,this.game.input.interactiveItems.total>0){var c=this.game.input.interactiveItems.next;do c&&c._releasedHandler(this),c=c.next;while(null!=c)}return this.targetObject&&this.targetObject._releasedHandler(this),this.targetObject=null,this},justPressed:function(a){return a=a||this.game.input.justPressedRate,this.isDown===!0&&this.timeDown+a>this.game.time.now},justReleased:function(a){return a=a||this.game.input.justReleasedRate,this.isUp===!0&&this.timeUp+a>this.game.time.now},reset:function(){this.isMouse===!1&&(this.active=!1),this.identifier=null,this.isDown=!1,this.isUp=!0,this.totalTouches=0,this._holdSent=!1,this._history.length=0,this._stateReset=!0,this.targetObject&&this.targetObject._releasedHandler(this),this.targetObject=null}},b.Pointer.prototype.constructor=b.Pointer,Object.defineProperty(b.Pointer.prototype,"duration",{get:function(){return this.isUp?-1:this.game.time.now-this.timeDown}}),Object.defineProperty(b.Pointer.prototype,"worldX",{get:function(){return this.game.world.camera.x+this.x}}),Object.defineProperty(b.Pointer.prototype,"worldY",{get:function(){return this.game.world.camera.y+this.y}}),b.Touch=function(a){this.game=a,this.disabled=!1,this.callbackContext=this.game,this.touchStartCallback=null,this.touchMoveCallback=null,this.touchEndCallback=null,this.touchEnterCallback=null,this.touchLeaveCallback=null,this.touchCancelCallback=null,this.preventDefault=!0,this.event=null,this._onTouchStart=null,this._onTouchMove=null,this._onTouchEnd=null,this._onTouchEnter=null,this._onTouchLeave=null,this._onTouchCancel=null,this._onTouchMove=null},b.Touch.prototype={start:function(){if(null===this._onTouchStart){var a=this;this.game.device.touch&&(this._onTouchStart=function(b){return a.onTouchStart(b)},this._onTouchMove=function(b){return a.onTouchMove(b)},this._onTouchEnd=function(b){return a.onTouchEnd(b)},this._onTouchEnter=function(b){return a.onTouchEnter(b)},this._onTouchLeave=function(b){return a.onTouchLeave(b)},this._onTouchCancel=function(b){return a.onTouchCancel(b)},this.game.canvas.addEventListener("touchstart",this._onTouchStart,!1),this.game.canvas.addEventListener("touchmove",this._onTouchMove,!1),this.game.canvas.addEventListener("touchend",this._onTouchEnd,!1),this.game.canvas.addEventListener("touchenter",this._onTouchEnter,!1),this.game.canvas.addEventListener("touchleave",this._onTouchLeave,!1),this.game.canvas.addEventListener("touchcancel",this._onTouchCancel,!1))}},consumeDocumentTouches:function(){this._documentTouchMove=function(a){a.preventDefault()},document.addEventListener("touchmove",this._documentTouchMove,!1)},onTouchStart:function(a){if(this.event=a,this.touchStartCallback&&this.touchStartCallback.call(this.callbackContext,a),!this.game.input.disabled&&!this.disabled){this.preventDefault&&a.preventDefault();for(var b=0;b<a.changedTouches.length;b++)this.game.input.startPointer(a.changedTouches[b])}},onTouchCancel:function(a){if(this.event=a,this.touchCancelCallback&&this.touchCancelCallback.call(this.callbackContext,a),!this.game.input.disabled&&!this.disabled){this.preventDefault&&a.preventDefault();for(var b=0;b<a.changedTouches.length;b++)this.game.input.stopPointer(a.changedTouches[b])}},onTouchEnter:function(a){this.event=a,this.touchEnterCallback&&this.touchEnterCallback.call(this.callbackContext,a),this.game.input.disabled||this.disabled||this.preventDefault&&a.preventDefault()},onTouchLeave:function(a){this.event=a,this.touchLeaveCallback&&this.touchLeaveCallback.call(this.callbackContext,a),this.preventDefault&&a.preventDefault()},onTouchMove:function(a){this.event=a,this.touchMoveCallback&&this.touchMoveCallback.call(this.callbackContext,a),this.preventDefault&&a.preventDefault();for(var b=0;b<a.changedTouches.length;b++)this.game.input.updatePointer(a.changedTouches[b])},onTouchEnd:function(a){this.event=a,this.touchEndCallback&&this.touchEndCallback.call(this.callbackContext,a),this.preventDefault&&a.preventDefault();for(var b=0;b<a.changedTouches.length;b++)this.game.input.stopPointer(a.changedTouches[b])},stop:function(){this.game.device.touch&&(this.game.canvas.removeEventListener("touchstart",this._onTouchStart),this.game.canvas.removeEventListener("touchmove",this._onTouchMove),this.game.canvas.removeEventListener("touchend",this._onTouchEnd),this.game.canvas.removeEventListener("touchenter",this._onTouchEnter),this.game.canvas.removeEventListener("touchleave",this._onTouchLeave),this.game.canvas.removeEventListener("touchcancel",this._onTouchCancel))}},b.Touch.prototype.constructor=b.Touch,b.Gamepad=function(a){this.game=a,this._gamepads=[new b.SinglePad(a,this),new b.SinglePad(a,this),new b.SinglePad(a,this),new b.SinglePad(a,this)],this._gamepadIndexMap={},this._rawPads=[],this._active=!1,this.disabled=!1,this._gamepadSupportAvailable=!!navigator.webkitGetGamepads||!!navigator.webkitGamepads||-1!=navigator.userAgent.indexOf("Firefox/")||!!navigator.getGamepads,this._prevRawGamepadTypes=[],this._prevTimestamps=[],this.callbackContext=this,this.onConnectCallback=null,this.onDisconnectCallback=null,this.onDownCallback=null,this.onUpCallback=null,this.onAxisCallback=null,this.onFloatCallback=null,this._ongamepadconnected=null,this._gamepaddisconnected=null},b.Gamepad.prototype={addCallbacks:function(a,b){"undefined"!=typeof b&&(this.onConnectCallback="function"==typeof b.onConnect?b.onConnect:this.onConnectCallback,this.onDisconnectCallback="function"==typeof b.onDisconnect?b.onDisconnect:this.onDisconnectCallback,this.onDownCallback="function"==typeof b.onDown?b.onDown:this.onDownCallback,this.onUpCallback="function"==typeof b.onUp?b.onUp:this.onUpCallback,this.onAxisCallback="function"==typeof b.onAxis?b.onAxis:this.onAxisCallback,this.onFloatCallback="function"==typeof b.onFloat?b.onFloat:this.onFloatCallback)
},start:function(){if(!this._active){this._active=!0;var a=this;this._ongamepadconnected=function(b){var c=b.gamepad;a._rawPads.push(c),a._gamepads[c.index].connect(c)},window.addEventListener("gamepadconnected",this._ongamepadconnected,!1),this._ongamepaddisconnected=function(b){var c=b.gamepad;for(var d in a._rawPads)a._rawPads[d].index===c.index&&a._rawPads.splice(d,1);a._gamepads[c.index].disconnect()},window.addEventListener("gamepaddisconnected",this._ongamepaddisconnected,!1)}},update:function(){this._pollGamepads();for(var a=0;a<this._gamepads.length;a++)this._gamepads[a]._connected&&this._gamepads[a].pollStatus()},_pollGamepads:function(){var a=navigator.getGamepads||navigator.webkitGetGamepads&&navigator.webkitGetGamepads()||navigator.webkitGamepads;if(a){this._rawPads=[];for(var b=!1,c=0;c<a.length&&(typeof a[c]!==this._prevRawGamepadTypes[c]&&(b=!0,this._prevRawGamepadTypes[c]=typeof a[c]),a[c]&&this._rawPads.push(a[c]),3!==c);c++);if(b){for(var d,e={rawIndices:{},padIndices:{}},f=0;f<this._gamepads.length;f++)if(d=this._gamepads[f],d.connected)for(var g=0;g<this._rawPads.length;g++)this._rawPads[g].index===d.index&&(e.rawIndices[d.index]=!0,e.padIndices[f]=!0);for(var h=0;h<this._gamepads.length;h++)if(d=this._gamepads[h],!e.padIndices[h]){this._rawPads.length<1&&d.disconnect();for(var i=0;i<this._rawPads.length&&!e.padIndices[h];i++){var j=this._rawPads[i];if(j){if(e.rawIndices[j.index]){d.disconnect();continue}d.connect(j),e.rawIndices[j.index]=!0,e.padIndices[h]=!0}else d.disconnect()}}}}},setDeadZones:function(a){for(var b=0;b<this._gamepads.length;b++)this._gamepads[b].deadZone=a},stop:function(){this._active=!1,window.removeEventListener("gamepadconnected",this._ongamepadconnected),window.removeEventListener("gamepaddisconnected",this._ongamepaddisconnected)},reset:function(){this.update();for(var a=0;a<this._gamepads.length;a++)this._gamepads[a].reset()},justPressed:function(a,b){for(var c=0;c<this._gamepads.length;c++)if(this._gamepads[c].justPressed(a,b)===!0)return!0;return!1},justReleased:function(a,b){for(var c=0;c<this._gamepads.length;c++)if(this._gamepads[c].justReleased(a,b)===!0)return!0;return!1},isDown:function(a){for(var b=0;b<this._gamepads.length;b++)if(this._gamepads[b].isDown(a)===!0)return!0;return!1}},b.Gamepad.prototype.constructor=b.Gamepad,Object.defineProperty(b.Gamepad.prototype,"active",{get:function(){return this._active}}),Object.defineProperty(b.Gamepad.prototype,"supported",{get:function(){return this._gamepadSupportAvailable}}),Object.defineProperty(b.Gamepad.prototype,"padsConnected",{get:function(){return this._rawPads.length}}),Object.defineProperty(b.Gamepad.prototype,"pad1",{get:function(){return this._gamepads[0]}}),Object.defineProperty(b.Gamepad.prototype,"pad2",{get:function(){return this._gamepads[1]}}),Object.defineProperty(b.Gamepad.prototype,"pad3",{get:function(){return this._gamepads[2]}}),Object.defineProperty(b.Gamepad.prototype,"pad4",{get:function(){return this._gamepads[3]}}),b.Gamepad.BUTTON_0=0,b.Gamepad.BUTTON_1=1,b.Gamepad.BUTTON_2=2,b.Gamepad.BUTTON_3=3,b.Gamepad.BUTTON_4=4,b.Gamepad.BUTTON_5=5,b.Gamepad.BUTTON_6=6,b.Gamepad.BUTTON_7=7,b.Gamepad.BUTTON_8=8,b.Gamepad.BUTTON_9=9,b.Gamepad.BUTTON_10=10,b.Gamepad.BUTTON_11=11,b.Gamepad.BUTTON_12=12,b.Gamepad.BUTTON_13=13,b.Gamepad.BUTTON_14=14,b.Gamepad.BUTTON_15=15,b.Gamepad.AXIS_0=0,b.Gamepad.AXIS_1=1,b.Gamepad.AXIS_2=2,b.Gamepad.AXIS_3=3,b.Gamepad.AXIS_4=4,b.Gamepad.AXIS_5=5,b.Gamepad.AXIS_6=6,b.Gamepad.AXIS_7=7,b.Gamepad.AXIS_8=8,b.Gamepad.AXIS_9=9,b.Gamepad.XBOX360_A=0,b.Gamepad.XBOX360_B=1,b.Gamepad.XBOX360_X=2,b.Gamepad.XBOX360_Y=3,b.Gamepad.XBOX360_LEFT_BUMPER=4,b.Gamepad.XBOX360_RIGHT_BUMPER=5,b.Gamepad.XBOX360_LEFT_TRIGGER=6,b.Gamepad.XBOX360_RIGHT_TRIGGER=7,b.Gamepad.XBOX360_BACK=8,b.Gamepad.XBOX360_START=9,b.Gamepad.XBOX360_STICK_LEFT_BUTTON=10,b.Gamepad.XBOX360_STICK_RIGHT_BUTTON=11,b.Gamepad.XBOX360_DPAD_LEFT=14,b.Gamepad.XBOX360_DPAD_RIGHT=15,b.Gamepad.XBOX360_DPAD_UP=12,b.Gamepad.XBOX360_DPAD_DOWN=13,b.Gamepad.XBOX360_STICK_LEFT_X=0,b.Gamepad.XBOX360_STICK_LEFT_Y=1,b.Gamepad.XBOX360_STICK_RIGHT_X=2,b.Gamepad.XBOX360_STICK_RIGHT_Y=3,b.SinglePad=function(a,b){this.game=a,this._padParent=b,this._index=null,this._rawPad=null,this._connected=!1,this._prevTimestamp=null,this._rawButtons=[],this._buttons=[],this._axes=[],this._hotkeys=[],this.callbackContext=this,this.onConnectCallback=null,this.onDisconnectCallback=null,this.onDownCallback=null,this.onUpCallback=null,this.onAxisCallback=null,this.onFloatCallback=null,this.deadZone=.26},b.SinglePad.prototype={addCallbacks:function(a,b){"undefined"!=typeof b&&(this.onConnectCallback="function"==typeof b.onConnect?b.onConnect:this.onConnectCallback,this.onDisconnectCallback="function"==typeof b.onDisconnect?b.onDisconnect:this.onDisconnectCallback,this.onDownCallback="function"==typeof b.onDown?b.onDown:this.onDownCallback,this.onUpCallback="function"==typeof b.onUp?b.onUp:this.onUpCallback,this.onAxisCallback="function"==typeof b.onAxis?b.onAxis:this.onAxisCallback,this.onFloatCallback="function"==typeof b.onFloat?b.onFloat:this.onFloatCallback)},addButton:function(a){return this._hotkeys[a]=new b.GamepadButton(this.game,a),this._hotkeys[a]},pollStatus:function(){if(!this._rawPad.timestamp||this._rawPad.timestamp!=this._prevTimestamp){for(var a=0;a<this._rawPad.buttons.length;a+=1){var b=this._rawPad.buttons[a];this._rawButtons[a]!==b&&(1===b?this.processButtonDown(a,b):0===b?this.processButtonUp(a,b):this.processButtonFloat(a,b),this._rawButtons[a]=b)}for(var c=this._rawPad.axes,d=0;d<c.length;d+=1){var e=c[d];this.processAxisChange(e>0&&e>this.deadZone||0>e&&e<-this.deadZone?{axis:d,value:e}:{axis:d,value:0})}this._prevTimestamp=this._rawPad.timestamp}},connect:function(a){var b=!this._connected;this._index=a.index,this._connected=!0,this._rawPad=a,this._rawButtons=a.buttons,this._axes=a.axes,b&&this._padParent.onConnectCallback&&this._padParent.onConnectCallback.call(this._padParent.callbackContext,this._index),b&&this.onConnectCallback&&this.onConnectCallback.call(this.callbackContext)},disconnect:function(){var a=this._connected;this._connected=!1,this._rawPad=void 0,this._rawButtons=[],this._buttons=[];var b=this._index;this._index=null,a&&this._padParent.onDisconnectCallback&&this._padParent.onDisconnectCallback.call(this._padParent.callbackContext,b),a&&this.onDisconnectCallback&&this.onDisconnectCallback.call(this.callbackContext)},processAxisChange:function(a){this.game.input.disabled||this.game.input.gamepad.disabled||this._axes[a.axis]!==a.value&&(this._axes[a.axis]=a.value,this._padParent.onAxisCallback&&this._padParent.onAxisCallback.call(this._padParent.callbackContext,a,this._index),this.onAxisCallback&&this.onAxisCallback.call(this.callbackContext,a))},processButtonDown:function(a,b){this.game.input.disabled||this.game.input.gamepad.disabled||(this._padParent.onDownCallback&&this._padParent.onDownCallback.call(this._padParent.callbackContext,a,b,this._index),this.onDownCallback&&this.onDownCallback.call(this.callbackContext,a,b),this._buttons[a]&&this._buttons[a].isDown?this._buttons[a].duration=this.game.time.now-this._buttons[a].timeDown:this._buttons[a]?(this._buttons[a].isDown=!0,this._buttons[a].timeDown=this.game.time.now,this._buttons[a].duration=0,this._buttons[a].value=b):this._buttons[a]={isDown:!0,timeDown:this.game.time.now,timeUp:0,duration:0,value:b},this._hotkeys[a]&&this._hotkeys[a].processButtonDown(b))},processButtonUp:function(a,b){this.game.input.disabled||this.game.input.gamepad.disabled||(this._padParent.onUpCallback&&this._padParent.onUpCallback.call(this._padParent.callbackContext,a,b,this._index),this.onUpCallback&&this.onUpCallback.call(this.callbackContext,a,b),this._hotkeys[a]&&this._hotkeys[a].processButtonUp(b),this._buttons[a]?(this._buttons[a].isDown=!1,this._buttons[a].timeUp=this.game.time.now,this._buttons[a].value=b):this._buttons[a]={isDown:!1,timeDown:this.game.time.now,timeUp:this.game.time.now,duration:0,value:b})},processButtonFloat:function(a,b){this.game.input.disabled||this.game.input.gamepad.disabled||(this._padParent.onFloatCallback&&this._padParent.onFloatCallback.call(this._padParent.callbackContext,a,b,this._index),this.onFloatCallback&&this.onFloatCallback.call(this.callbackContext,a,b),this._buttons[a]?this._buttons[a].value=b:this._buttons[a]={value:b},this._hotkeys[a]&&this._hotkeys[a].processButtonFloat(b))},axis:function(a){return this._axes[a]?this._axes[a]:!1},isDown:function(a){return this._buttons[a]?this._buttons[a].isDown:!1},justReleased:function(a,b){return"undefined"==typeof b&&(b=250),this._buttons[a]&&this._buttons[a].isDown===!1&&this.game.time.now-this._buttons[a].timeUp<b},justPressed:function(a,b){return"undefined"==typeof b&&(b=250),this._buttons[a]&&this._buttons[a].isDown&&this._buttons[a].duration<b},buttonValue:function(a){return this._buttons[a]?this._buttons[a].value:!1},reset:function(){for(var a=0;a<this._buttons.length;a++)this._buttons[a]=0;for(var b=0;b<this._axes.length;b++)this._axes[b]=0}},b.SinglePad.prototype.constructor=b.SinglePad,Object.defineProperty(b.SinglePad.prototype,"connected",{get:function(){return this._connected}}),Object.defineProperty(b.SinglePad.prototype,"index",{get:function(){return this._index}}),b.GamepadButton=function(a,c){this.game=a,this.isDown=!1,this.isUp=!0,this.timeDown=0,this.duration=0,this.timeUp=0,this.repeats=0,this.value=0,this.buttonCode=c,this.onDown=new b.Signal,this.onUp=new b.Signal,this.onFloat=new b.Signal},b.GamepadButton.prototype={processButtonDown:function(a){this.isDown?(this.duration=this.game.time.now-this.timeDown,this.repeats++):(this.isDown=!0,this.isUp=!1,this.timeDown=this.game.time.now,this.duration=0,this.repeats=0,this.value=a,this.onDown.dispatch(this,a))},processButtonUp:function(a){this.isDown=!1,this.isUp=!0,this.timeUp=this.game.time.now,this.value=a,this.onUp.dispatch(this,a)},processButtonFloat:function(a){this.value=a,this.onFloat.dispatch(this,a)},justPressed:function(a){return"undefined"==typeof a&&(a=250),this.isDown&&this.duration<a},justReleased:function(a){return"undefined"==typeof a&&(a=250),this.isDown===!1&&this.game.time.now-this.timeUp<a}},b.GamepadButton.prototype.constructor=b.GamepadButton,b.InputHandler=function(a){this.sprite=a,this.game=a.game,this.enabled=!1,this.priorityID=0,this.useHandCursor=!1,this._setHandCursor=!1,this.isDragged=!1,this.allowHorizontalDrag=!0,this.allowVerticalDrag=!0,this.bringToTop=!1,this.snapOffset=null,this.snapOnDrag=!1,this.snapOnRelease=!1,this.snapX=0,this.snapY=0,this.snapOffsetX=0,this.snapOffsetY=0,this.pixelPerfectOver=!1,this.pixelPerfectClick=!1,this.pixelPerfectAlpha=255,this.draggable=!1,this.boundsRect=null,this.boundsSprite=null,this.consumePointerEvent=!1,this._tempPoint=new b.Point,this._pointerData=[],this._pointerData.push({id:0,x:0,y:0,isDown:!1,isUp:!1,isOver:!1,isOut:!1,timeOver:0,timeOut:0,timeDown:0,timeUp:0,downDuration:0,isDragged:!1})},b.InputHandler.prototype={start:function(a,c){if(a=a||0,"undefined"==typeof c&&(c=!1),this.enabled===!1){this.game.input.interactiveItems.add(this),this.useHandCursor=c,this.priorityID=a;for(var d=0;10>d;d++)this._pointerData[d]={id:d,x:0,y:0,isDown:!1,isUp:!1,isOver:!1,isOut:!1,timeOver:0,timeOut:0,timeDown:0,timeUp:0,downDuration:0,isDragged:!1};this.snapOffset=new b.Point,this.enabled=!0,this.sprite.events&&null===this.sprite.events.onInputOver&&(this.sprite.events.onInputOver=new b.Signal,this.sprite.events.onInputOut=new b.Signal,this.sprite.events.onInputDown=new b.Signal,this.sprite.events.onInputUp=new b.Signal,this.sprite.events.onDragStart=new b.Signal,this.sprite.events.onDragStop=new b.Signal)}return this.sprite},reset:function(){this.enabled=!1;for(var a=0;10>a;a++)this._pointerData[a]={id:a,x:0,y:0,isDown:!1,isUp:!1,isOver:!1,isOut:!1,timeOver:0,timeOut:0,timeDown:0,timeUp:0,downDuration:0,isDragged:!1}},stop:function(){this.enabled!==!1&&(this.enabled=!1,this.game.input.interactiveItems.remove(this))},destroy:function(){this.enabled&&(this._setHandCursor&&(this.game.canvas.style.cursor="default",this._setHandCursor=!1),this.enabled=!1,this.game.input.interactiveItems.remove(this),this._pointerData.length=0,this.boundsRect=null,this.boundsSprite=null,this.sprite=null)},validForInput:function(a,b){return 0===this.sprite.scale.x||0===this.sprite.scale.y?!1:this.pixelPerfectClick||this.pixelPerfectOver?!0:this.priorityID>a||this.priorityID===a&&this.sprite._cache[3]<b?!0:!1},pointerX:function(a){return a=a||0,this._pointerData[a].x},pointerY:function(a){return a=a||0,this._pointerData[a].y},pointerDown:function(a){return a=a||0,this._pointerData[a].isDown},pointerUp:function(a){return a=a||0,this._pointerData[a].isUp},pointerTimeDown:function(a){return a=a||0,this._pointerData[a].timeDown},pointerTimeUp:function(a){return a=a||0,this._pointerData[a].timeUp},pointerOver:function(a){if(this.enabled){if("undefined"!=typeof a)return this._pointerData[a].isOver;for(var b=0;10>b;b++)if(this._pointerData[b].isOver)return!0}return!1},pointerOut:function(a){if(this.enabled){if("undefined"!=typeof a)return this._pointerData[a].isOut;for(var b=0;10>b;b++)if(this._pointerData[b].isOut)return!0}return!1},pointerTimeOver:function(a){return a=a||0,this._pointerData[a].timeOver},pointerTimeOut:function(a){return a=a||0,this._pointerData[a].timeOut},pointerDragged:function(a){return a=a||0,this._pointerData[a].isDragged},checkPointerDown:function(a){return this.enabled===!1||this.sprite.visible===!1||this.sprite.parent.visible===!1?!1:this.game.input.hitTest(this.sprite,a,this._tempPoint)?this.pixelPerfectClick?this.checkPixel(this._tempPoint.x,this._tempPoint.y):!0:!1},checkPointerOver:function(a){return this.enabled===!1||this.sprite.visible===!1||this.sprite.parent.visible===!1?!1:this.game.input.hitTest(this.sprite,a,this._tempPoint)?this.pixelPerfectOver?this.checkPixel(this._tempPoint.x,this._tempPoint.y):!0:!1},checkPixel:function(a,b,c){if(this.sprite.texture.baseTexture.source){if(this.game.input.hitContext.clearRect(0,0,1,1),null===a&&null===b){this.game.input.getLocalPosition(this.sprite,c,this._tempPoint);var a=this._tempPoint.x,b=this._tempPoint.y}0!==this.sprite.anchor.x&&(a-=-this.sprite.texture.frame.width*this.sprite.anchor.x),0!==this.sprite.anchor.y&&(b-=-this.sprite.texture.frame.height*this.sprite.anchor.y),a+=this.sprite.texture.frame.x,b+=this.sprite.texture.frame.y,this.game.input.hitContext.drawImage(this.sprite.texture.baseTexture.source,a,b,1,1,0,0,1,1);var d=this.game.input.hitContext.getImageData(0,0,1,1);if(d.data[3]>=this.pixelPerfectAlpha)return!0}return!1},update:function(a){return null!==this.sprite?this.enabled&&this.sprite.visible&&this.sprite.parent.visible?this.draggable&&this._draggedPointerID==a.id?this.updateDrag(a):this._pointerData[a.id].isOver===!0?this.checkPointerOver(a)?(this._pointerData[a.id].x=a.x-this.sprite.x,this._pointerData[a.id].y=a.y-this.sprite.y,!0):(this._pointerOutHandler(a),!1):void 0:(this._pointerOutHandler(a),!1):void 0},_pointerOverHandler:function(a){null!==this.sprite&&this._pointerData[a.id].isOver===!1&&(this._pointerData[a.id].isOver=!0,this._pointerData[a.id].isOut=!1,this._pointerData[a.id].timeOver=this.game.time.now,this._pointerData[a.id].x=a.x-this.sprite.x,this._pointerData[a.id].y=a.y-this.sprite.y,this.useHandCursor&&this._pointerData[a.id].isDragged===!1&&(this.game.canvas.style.cursor="pointer",this._setHandCursor=!1),this.sprite.events.onInputOver.dispatch(this.sprite,a))},_pointerOutHandler:function(a){null!==this.sprite&&(this._pointerData[a.id].isOver=!1,this._pointerData[a.id].isOut=!0,this._pointerData[a.id].timeOut=this.game.time.now,this.useHandCursor&&this._pointerData[a.id].isDragged===!1&&(this.game.canvas.style.cursor="default",this._setHandCursor=!1),this.sprite&&this.sprite.events&&this.sprite.events.onInputOut.dispatch(this.sprite,a))},_touchedHandler:function(a){if(null!==this.sprite){if(this._pointerData[a.id].isDown===!1&&this._pointerData[a.id].isOver===!0){if(this.pixelPerfectClick&&!this.checkPixel(null,null,a))return;this._pointerData[a.id].isDown=!0,this._pointerData[a.id].isUp=!1,this._pointerData[a.id].timeDown=this.game.time.now,this.sprite.events.onInputDown.dispatch(this.sprite,a),this.draggable&&this.isDragged===!1&&this.startDrag(a),this.bringToTop&&this.sprite.bringToTop()}return this.consumePointerEvent}},_releasedHandler:function(a){null!==this.sprite&&this._pointerData[a.id].isDown&&a.isUp&&(this._pointerData[a.id].isDown=!1,this._pointerData[a.id].isUp=!0,this._pointerData[a.id].timeUp=this.game.time.now,this._pointerData[a.id].downDuration=this._pointerData[a.id].timeUp-this._pointerData[a.id].timeDown,this.checkPointerOver(a)?this.sprite.events.onInputUp.dispatch(this.sprite,a,!0):(this.sprite.events.onInputUp.dispatch(this.sprite,a,!1),this.useHandCursor&&(this.game.canvas.style.cursor="default",this._setHandCursor=!1)),this.draggable&&this.isDragged&&this._draggedPointerID==a.id&&this.stopDrag(a))},updateDrag:function(a){return a.isUp?(this.stopDrag(a),!1):(this.sprite.fixedToCamera?(this.allowHorizontalDrag&&(this.sprite.cameraOffset.x=a.x+this._dragPoint.x+this.dragOffset.x),this.allowVerticalDrag&&(this.sprite.cameraOffset.y=a.y+this._dragPoint.y+this.dragOffset.y),this.boundsRect&&this.checkBoundsRect(),this.boundsSprite&&this.checkBoundsSprite(),this.snapOnDrag&&(this.sprite.cameraOffset.x=Math.round((this.sprite.cameraOffset.x-this.snapOffsetX%this.snapX)/this.snapX)*this.snapX+this.snapOffsetX%this.snapX,this.sprite.cameraOffset.y=Math.round((this.sprite.cameraOffset.y-this.snapOffsetY%this.snapY)/this.snapY)*this.snapY+this.snapOffsetY%this.snapY)):(this.allowHorizontalDrag&&(this.sprite.x=a.x+this._dragPoint.x+this.dragOffset.x),this.allowVerticalDrag&&(this.sprite.y=a.y+this._dragPoint.y+this.dragOffset.y),this.boundsRect&&this.checkBoundsRect(),this.boundsSprite&&this.checkBoundsSprite(),this.snapOnDrag&&(this.sprite.x=Math.round((this.sprite.x-this.snapOffsetX%this.snapX)/this.snapX)*this.snapX+this.snapOffsetX%this.snapX,this.sprite.y=Math.round((this.sprite.y-this.snapOffsetY%this.snapY)/this.snapY)*this.snapY+this.snapOffsetY%this.snapY)),!0)},justOver:function(a,b){return a=a||0,b=b||500,this._pointerData[a].isOver&&this.overDuration(a)<b},justOut:function(a,b){return a=a||0,b=b||500,this._pointerData[a].isOut&&this.game.time.now-this._pointerData[a].timeOut<b},justPressed:function(a,b){return a=a||0,b=b||500,this._pointerData[a].isDown&&this.downDuration(a)<b},justReleased:function(a,b){return a=a||0,b=b||500,this._pointerData[a].isUp&&this.game.time.now-this._pointerData[a].timeUp<b},overDuration:function(a){return a=a||0,this._pointerData[a].isOver?this.game.time.now-this._pointerData[a].timeOver:-1},downDuration:function(a){return a=a||0,this._pointerData[a].isDown?this.game.time.now-this._pointerData[a].timeDown:-1},enableDrag:function(a,c,d,e,f,g){"undefined"==typeof a&&(a=!1),"undefined"==typeof c&&(c=!1),"undefined"==typeof d&&(d=!1),"undefined"==typeof e&&(e=255),"undefined"==typeof f&&(f=null),"undefined"==typeof g&&(g=null),this._dragPoint=new b.Point,this.draggable=!0,this.bringToTop=c,this.dragOffset=new b.Point,this.dragFromCenter=a,this.pixelPerfect=d,this.pixelPerfectAlpha=e,f&&(this.boundsRect=f),g&&(this.boundsSprite=g)},disableDrag:function(){if(this._pointerData)for(var a=0;10>a;a++)this._pointerData[a].isDragged=!1;this.draggable=!1,this.isDragged=!1,this._draggedPointerID=-1},startDrag:function(a){if(this.isDragged=!0,this._draggedPointerID=a.id,this._pointerData[a.id].isDragged=!0,this.sprite.fixedToCamera)this.dragFromCenter?(this.sprite.centerOn(a.x,a.y),this._dragPoint.setTo(this.sprite.cameraOffset.x-a.x,this.sprite.cameraOffset.y-a.y)):this._dragPoint.setTo(this.sprite.cameraOffset.x-a.x,this.sprite.cameraOffset.y-a.y);else if(this.dragFromCenter){var b=this.sprite.getBounds();this.sprite.x=a.x+(this.sprite.x-b.centerX),this.sprite.y=a.y+(this.sprite.y-b.centerY),this._dragPoint.setTo(this.sprite.x-a.x,this.sprite.y-a.y)}else this._dragPoint.setTo(this.sprite.x-a.x,this.sprite.y-a.y);this.updateDrag(a),this.bringToTop&&this.sprite.bringToTop(),this.sprite.events.onDragStart.dispatch(this.sprite,a)},stopDrag:function(a){this.isDragged=!1,this._draggedPointerID=-1,this._pointerData[a.id].isDragged=!1,this.snapOnRelease&&(this.sprite.fixedToCamera?(this.sprite.cameraOffset.x=Math.round((this.sprite.cameraOffset.x-this.snapOffsetX%this.snapX)/this.snapX)*this.snapX+this.snapOffsetX%this.snapX,this.sprite.cameraOffset.y=Math.round((this.sprite.cameraOffset.y-this.snapOffsetY%this.snapY)/this.snapY)*this.snapY+this.snapOffsetY%this.snapY):(this.sprite.x=Math.round((this.sprite.x-this.snapOffsetX%this.snapX)/this.snapX)*this.snapX+this.snapOffsetX%this.snapX,this.sprite.y=Math.round((this.sprite.y-this.snapOffsetY%this.snapY)/this.snapY)*this.snapY+this.snapOffsetY%this.snapY)),this.sprite.events.onDragStop.dispatch(this.sprite,a),this.checkPointerOver(a)===!1&&this._pointerOutHandler(a)},setDragLock:function(a,b){"undefined"==typeof a&&(a=!0),"undefined"==typeof b&&(b=!0),this.allowHorizontalDrag=a,this.allowVerticalDrag=b},enableSnap:function(a,b,c,d,e,f){"undefined"==typeof c&&(c=!0),"undefined"==typeof d&&(d=!1),"undefined"==typeof e&&(e=0),"undefined"==typeof f&&(f=0),this.snapX=a,this.snapY=b,this.snapOffsetX=e,this.snapOffsetY=f,this.snapOnDrag=c,this.snapOnRelease=d},disableSnap:function(){this.snapOnDrag=!1,this.snapOnRelease=!1},checkBoundsRect:function(){this.sprite.fixedToCamera?(this.sprite.cameraOffset.x<this.boundsRect.left?this.sprite.cameraOffset.x=this.boundsRect.cameraOffset.x:this.sprite.cameraOffset.x+this.sprite.width>this.boundsRect.right&&(this.sprite.cameraOffset.x=this.boundsRect.right-this.sprite.width),this.sprite.cameraOffset.y<this.boundsRect.top?this.sprite.cameraOffset.y=this.boundsRect.top:this.sprite.cameraOffset.y+this.sprite.height>this.boundsRect.bottom&&(this.sprite.cameraOffset.y=this.boundsRect.bottom-this.sprite.height)):(this.sprite.x<this.boundsRect.left?this.sprite.x=this.boundsRect.x:this.sprite.x+this.sprite.width>this.boundsRect.right&&(this.sprite.x=this.boundsRect.right-this.sprite.width),this.sprite.y<this.boundsRect.top?this.sprite.y=this.boundsRect.top:this.sprite.y+this.sprite.height>this.boundsRect.bottom&&(this.sprite.y=this.boundsRect.bottom-this.sprite.height))},checkBoundsSprite:function(){this.sprite.fixedToCamera&&this.boundsSprite.fixedToCamera?(this.sprite.cameraOffset.x<this.boundsSprite.camerOffset.x?this.sprite.cameraOffset.x=this.boundsSprite.camerOffset.x:this.sprite.cameraOffset.x+this.sprite.width>this.boundsSprite.camerOffset.x+this.boundsSprite.width&&(this.sprite.cameraOffset.x=this.boundsSprite.camerOffset.x+this.boundsSprite.width-this.sprite.width),this.sprite.cameraOffset.y<this.boundsSprite.camerOffset.y?this.sprite.cameraOffset.y=this.boundsSprite.camerOffset.y:this.sprite.cameraOffset.y+this.sprite.height>this.boundsSprite.camerOffset.y+this.boundsSprite.height&&(this.sprite.cameraOffset.y=this.boundsSprite.camerOffset.y+this.boundsSprite.height-this.sprite.height)):(this.sprite.x<this.boundsSprite.x?this.sprite.x=this.boundsSprite.x:this.sprite.x+this.sprite.width>this.boundsSprite.x+this.boundsSprite.width&&(this.sprite.x=this.boundsSprite.x+this.boundsSprite.width-this.sprite.width),this.sprite.y<this.boundsSprite.y?this.sprite.y=this.boundsSprite.y:this.sprite.y+this.sprite.height>this.boundsSprite.y+this.boundsSprite.height&&(this.sprite.y=this.boundsSprite.y+this.boundsSprite.height-this.sprite.height))}},b.InputHandler.prototype.constructor=b.InputHandler,b.Events=function(a){this.parent=a,this.onAddedToGroup=new b.Signal,this.onRemovedFromGroup=new b.Signal,this.onKilled=new b.Signal,this.onRevived=new b.Signal,this.onOutOfBounds=new b.Signal,this.onEnterBounds=new b.Signal,this.onInputOver=null,this.onInputOut=null,this.onInputDown=null,this.onInputUp=null,this.onDragStart=null,this.onDragStop=null,this.onAnimationStart=null,this.onAnimationComplete=null,this.onAnimationLoop=null},b.Events.prototype={destroy:function(){this.parent=null,this.onAddedToGroup.dispose(),this.onRemovedFromGroup.dispose(),this.onKilled.dispose(),this.onRevived.dispose(),this.onOutOfBounds.dispose(),this.onInputOver&&(this.onInputOver.dispose(),this.onInputOut.dispose(),this.onInputDown.dispose(),this.onInputUp.dispose(),this.onDragStart.dispose(),this.onDragStop.dispose()),this.onAnimationStart&&(this.onAnimationStart.dispose(),this.onAnimationComplete.dispose(),this.onAnimationLoop.dispose())}},b.Events.prototype.constructor=b.Events,b.GameObjectFactory=function(a){this.game=a,this.world=this.game.world},b.GameObjectFactory.prototype={existing:function(a){return this.world.add(a)},image:function(a,c,d,e,f){return"undefined"==typeof f&&(f=this.world),f.add(new b.Image(this.game,a,c,d,e))},sprite:function(a,b,c,d,e){return"undefined"==typeof e&&(e=this.world),e.create(a,b,c,d)},tween:function(a){return this.game.tweens.create(a)},group:function(a,c,d,e,f){return new b.Group(this.game,a,c,d,e,f)},physicsGroup:function(a,c,d,e){return new b.Group(this.game,c,d,e,!0,a)},spriteBatch:function(a,c,d){return"undefined"==typeof c&&(c="group"),"undefined"==typeof d&&(d=!1),new b.SpriteBatch(this.game,a,c,d)},audio:function(a,b,c,d){return this.game.sound.add(a,b,c,d)},sound:function(a,b,c,d){return this.game.sound.add(a,b,c,d)},tileSprite:function(a,c,d,e,f,g,h){return"undefined"==typeof h&&(h=this.world),h.add(new b.TileSprite(this.game,a,c,d,e,f,g))},text:function(a,c,d,e,f){return"undefined"==typeof f&&(f=this.world),f.add(new b.Text(this.game,a,c,d,e))},button:function(a,c,d,e,f,g,h,i,j,k){return"undefined"==typeof k&&(k=this.world),k.add(new b.Button(this.game,a,c,d,e,f,g,h,i,j))},graphics:function(a,c,d){return"undefined"==typeof d&&(d=this.world),d.add(new b.Graphics(this.game,a,c))},emitter:function(a,c,d){return this.game.particles.add(new b.Particles.Arcade.Emitter(this.game,a,c,d))},retroFont:function(a,c,d,e,f,g,h,i,j){return new b.RetroFont(this.game,a,c,d,e,f,g,h,i,j)},bitmapText:function(a,c,d,e,f,g){return"undefined"==typeof g&&(g=this.world),g.add(new b.BitmapText(this.game,a,c,d,e,f))},tilemap:function(a,c,d,e,f){return new b.Tilemap(this.game,a,c,d,e,f)},renderTexture:function(a,c,d,e){("undefined"==typeof d||""===d)&&(d=this.game.rnd.uuid()),"undefined"==typeof e&&(e=!1);var f=new b.RenderTexture(this.game,a,c,d);return e&&this.game.cache.addRenderTexture(d,f),f},bitmapData:function(a,c,d,e){"undefined"==typeof e&&(e=!1),("undefined"==typeof d||""===d)&&(d=this.game.rnd.uuid());var f=new b.BitmapData(this.game,d,a,c);return e&&this.game.cache.addBitmapData(d,f),f},filter:function(a){var c=Array.prototype.splice.call(arguments,1),a=new b.Filter[a](this.game);return a.init.apply(a,c),a}},b.GameObjectFactory.prototype.constructor=b.GameObjectFactory,b.GameObjectCreator=function(a){this.game=a,this.world=this.game.world},b.GameObjectCreator.prototype={image:function(a,c,d,e){return new b.Image(this.game,a,c,d,e)},sprite:function(a,c,d,e){return new b.Sprite(this.game,a,c,d,e)},tween:function(a){return new b.Tween(a,this.game)},group:function(a,c,d,e,f){return new b.Group(this.game,null,c,d,e,f)},spriteBatch:function(a,c,d){return"undefined"==typeof c&&(c="group"),"undefined"==typeof d&&(d=!1),new b.SpriteBatch(this.game,a,c,d)},audio:function(a,b,c,d){return this.game.sound.add(a,b,c,d)},sound:function(a,b,c,d){return this.game.sound.add(a,b,c,d)},tileSprite:function(a,c,d,e,f,g){return new b.TileSprite(this.game,a,c,d,e,f,g)},text:function(a,c,d,e){return new b.Text(this.game,a,c,d,e)},button:function(a,c,d,e,f,g,h,i,j){return new b.Button(this.game,a,c,d,e,f,g,h,i,j)},graphics:function(a,c){return new b.Graphics(this.game,a,c)},emitter:function(a,c,d){return new b.Particles.Arcade.Emitter(this.game,a,c,d)},retroFont:function(a,c,d,e,f,g,h,i,j){return new b.RetroFont(this.game,a,c,d,e,f,g,h,i,j)},bitmapText:function(a,c,d,e,f){return new b.BitmapText(this.game,a,c,d,e,f)},tilemap:function(a,c,d,e,f){return new b.Tilemap(this.game,a,c,d,e,f)},renderTexture:function(a,c,d,e){("undefined"==typeof d||""===d)&&(d=this.game.rnd.uuid()),"undefined"==typeof e&&(e=!1);var f=new b.RenderTexture(this.game,a,c,d);return e&&this.game.cache.addRenderTexture(d,f),f},bitmapData:function(a,c,d,e){"undefined"==typeof e&&(e=!1),("undefined"==typeof d||""===d)&&(d=this.game.rnd.uuid());var f=new b.BitmapData(this.game,d,a,c);return e&&this.game.cache.addBitmapData(d,f),f},filter:function(a){var c=Array.prototype.splice.call(arguments,1),a=new b.Filter[a](this.game);return a.init.apply(a,c),a}},b.GameObjectCreator.prototype.constructor=b.GameObjectCreator,b.BitmapData=function(a,c,d,e){"undefined"==typeof d&&(d=100),"undefined"==typeof e&&(e=100),this.game=a,this.key=c,this.width=d,this.height=e,this.canvas=b.Canvas.create(d,e,"",!0),this.context=this.canvas.getContext("2d"),this.ctx=this.context,this.imageData=this.context.getImageData(0,0,d,e),this.pixels=this.imageData.data.buffer?this.imageData.data.buffer:this.imageData.data,this.baseTexture=new PIXI.BaseTexture(this.canvas),this.texture=new PIXI.Texture(this.baseTexture),this.textureFrame=new b.Frame(0,0,0,d,e,"bitmapData",a.rnd.uuid()),this.type=b.BITMAPDATA,this.dirty=!1},b.BitmapData.prototype={add:function(a){if(Array.isArray(a))for(var b=0;b<a.length;b++)a[b].loadTexture&&a[b].loadTexture(this);else a.loadTexture(this)},clear:function(){this.context.clearRect(0,0,this.width,this.height),this.dirty=!0},resize:function(a,b){(a!==this.width||b!==this.height)&&(this.width=a,this.height=b,this.canvas.width=a,this.canvas.height=b,this.textureFrame.width=a,this.textureFrame.height=b,this.imageData=this.context.getImageData(0,0,a,b)),this.dirty=!0},refreshBuffer:function(){this.imageData=this.context.getImageData(0,0,this.width,this.height),this.pixels=new Int32Array(this.imageData.data.buffer)},setPixel32:function(a,b,c,d,e,f){a>=0&&a<=this.width&&b>=0&&b<=this.height&&(this.pixels[b*this.width+a]=f<<24|e<<16|d<<8|c,this.context.putImageData(this.imageData,0,0),this.dirty=!0)},setPixel:function(a,b,c,d,e){this.setPixel32(a,b,c,d,e,255)},getPixel:function(a,b){return a>=0&&a<=this.width&&b>=0&&b<=this.height?this.data32[b*this.width+a]:void 0},getPixel32:function(a,b){return a>=0&&a<=this.width&&b>=0&&b<=this.height?this.data32[b*this.width+a]:void 0},getPixels:function(a){return this.context.getImageData(a.x,a.y,a.width,a.height)},copyPixels:function(a,b,c,d){"string"==typeof a&&(a=this.game.cache.getImage(a)),a&&this.context.drawImage(a,b.x,b.y,b.width,b.height,c,d,b.width,b.height)},draw:function(a,b,c){"string"==typeof a&&(a=this.game.cache.getImage(a)),a&&this.context.drawImage(a,0,0,a.width,a.height,b,c,a.width,a.height)},alphaMask:function(a,b){var c=this.context.globalCompositeOperation;"string"==typeof b&&(b=this.game.cache.getImage(b)),b&&this.context.drawImage(b,0,0),this.context.globalCompositeOperation="source-atop","string"==typeof a&&(a=this.game.cache.getImage(a)),a&&this.context.drawImage(a,0,0),this.context.globalCompositeOperation=c},render:function(){this.game.renderType===b.WEBGL&&this.dirty&&(PIXI.updateWebGLTexture(this.baseTexture,this.game.renderer.gl),this.dirty=!1)}},b.BitmapData.prototype.constructor=b.BitmapData,b.Sprite=function(a,c,d,e,f){c=c||0,d=d||0,e=e||null,f=f||null,this.game=a,this.name="",this.type=b.SPRITE,this.z=0,this.events=new b.Events(this),this.animations=new b.AnimationManager(this),this.key=e,this._frame=0,this._frameName="",PIXI.Sprite.call(this,PIXI.TextureCache.__default),this.loadTexture(e,f),this.position.set(c,d),this.world=new b.Point(c,d),this.autoCull=!1,this.input=null,this.body=null,this.health=1,this.lifespan=0,this.checkWorldBounds=!1,this.outOfBoundsKill=!1,this.debug=!1,this.cameraOffset=new b.Point,this._cache=[0,0,0,0,1,0,1,0],this._bounds=new b.Rectangle},b.Sprite.prototype=Object.create(PIXI.Sprite.prototype),b.Sprite.prototype.constructor=b.Sprite,b.Sprite.prototype.preUpdate=function(){if(1===this._cache[4]&&this.exists)return this.world.setTo(this.parent.position.x+this.position.x,this.parent.position.y+this.position.y),this.worldTransform.tx=this.world.x,this.worldTransform.ty=this.world.y,this._cache[0]=this.world.x,this._cache[1]=this.world.y,this._cache[2]=this.rotation,this.body&&this.body.preUpdate(),this._cache[4]=0,!1;
if(this._cache[0]=this.world.x,this._cache[1]=this.world.y,this._cache[2]=this.rotation,!this.exists||!this.parent.exists)return this._cache[3]=-1,!1;if(this.lifespan>0&&(this.lifespan-=this.game.time.elapsed,this.lifespan<=0))return this.kill(),!1;if((this.autoCull||this.checkWorldBounds)&&this._bounds.copyFrom(this.getBounds()),this.autoCull&&(this.renderable=this.game.world.camera.screenView.intersects(this._bounds)),this.checkWorldBounds)if(1===this._cache[5]&&this.game.world.bounds.intersects(this._bounds))this._cache[5]=0,this.events.onEnterBounds.dispatch(this);else if(0===this._cache[5]&&!this.game.world.bounds.intersects(this._bounds)&&(this._cache[5]=1,this.events.onOutOfBounds.dispatch(this),this.outOfBoundsKill))return this.kill(),!1;this.world.setTo(this.game.camera.x+this.worldTransform.tx,this.game.camera.y+this.worldTransform.ty),this.visible&&(this._cache[3]=this.game.stage.currentRenderOrderID++),this.animations.update(),this.body&&this.body.preUpdate();for(var a=0,b=this.children.length;b>a;a++)this.children[a].preUpdate();return!0},b.Sprite.prototype.update=function(){},b.Sprite.prototype.postUpdate=function(){this.key instanceof b.BitmapData&&this.key.render(),this.exists&&this.body&&this.body.postUpdate(),1===this._cache[7]&&(this.position.x=(this.game.camera.view.x+this.cameraOffset.x)/this.game.camera.scale.x,this.position.y=(this.game.camera.view.y+this.cameraOffset.y)/this.game.camera.scale.y);for(var a=0,c=this.children.length;c>a;a++)this.children[a].postUpdate()},b.Sprite.prototype.loadTexture=function(a,c){return c=c||0,a instanceof b.RenderTexture?(this.key=a.key,void this.setTexture(a)):a instanceof b.BitmapData?(this.key=a,void this.setTexture(a.texture)):a instanceof PIXI.Texture?(this.key=a,void this.setTexture(a)):null===a||"undefined"==typeof a?(this.key="__default",void this.setTexture(PIXI.TextureCache[this.key])):"string"!=typeof a||this.game.cache.checkImageKey(a)?this.game.cache.isSpriteSheet(a)?(this.key=a,this.animations.loadFrameData(this.game.cache.getFrameData(a)),"string"==typeof c?this.frameName=c:this.frame=c,void 0):(this.key=a,void this.setTexture(PIXI.TextureCache[a])):(this.key="__missing",void this.setTexture(PIXI.TextureCache[this.key]))},b.Sprite.prototype.crop=function(a){if("undefined"==typeof a||null===a)this.texture.hasOwnProperty("sourceWidth")&&this.texture.setFrame(new b.Rectangle(0,0,this.texture.sourceWidth,this.texture.sourceHeight));else if(this.texture instanceof PIXI.Texture){var c={};b.Utils.extend(!0,c,this.texture),c.sourceWidth=c.width,c.sourceHeight=c.height,c.frame=a,c.width=a.width,c.height=a.height,this.texture=c,this.texture.updateFrame=!0,PIXI.Texture.frameUpdates.push(this.texture)}else this.texture.setFrame(a)},b.Sprite.prototype.revive=function(a){return"undefined"==typeof a&&(a=1),this.alive=!0,this.exists=!0,this.visible=!0,this.health=a,this.events&&this.events.onRevived.dispatch(this),this},b.Sprite.prototype.kill=function(){return this.alive=!1,this.exists=!1,this.visible=!1,this.events&&this.events.onKilled.dispatch(this),this},b.Sprite.prototype.destroy=function(a){if(null!==this.game){"undefined"==typeof a&&(a=!0),this.parent&&(this.parent instanceof b.Group?this.parent.remove(this):this.parent.removeChild(this)),this.input&&this.input.destroy(),this.animations&&this.animations.destroy(),this.body&&this.body.destroy(),this.events&&this.events.destroy();var c=this.children.length;if(a)for(;c--;)this.children[c].destroy(a);else for(;c--;)this.removeChild(this.children[c]);this.alive=!1,this.exists=!1,this.visible=!1,this.filters=null,this.mask=null,this.game=null}},b.Sprite.prototype.damage=function(a){return this.alive&&(this.health-=a,this.health<=0&&this.kill()),this},b.Sprite.prototype.reset=function(a,b,c){return"undefined"==typeof c&&(c=1),this.world.setTo(a,b),this.position.x=a,this.position.y=b,this.alive=!0,this.exists=!0,this.visible=!0,this.renderable=!0,this._outOfBoundsFired=!1,this.health=c,this.body&&this.body.reset(a,b,!1,!1),this._cache[4]=1,this},b.Sprite.prototype.bringToTop=function(){return this.parent&&this.parent.bringToTop(this),this},b.Sprite.prototype.play=function(a,b,c,d){return this.animations?this.animations.play(a,b,c,d):void 0},b.Sprite.prototype.overlap=function(a){return b.Rectangle.intersects(this.getBounds(),a.getBounds())},Object.defineProperty(b.Sprite.prototype,"angle",{get:function(){return b.Math.wrapAngle(b.Math.radToDeg(this.rotation))},set:function(a){this.rotation=b.Math.degToRad(b.Math.wrapAngle(a))}}),Object.defineProperty(b.Sprite.prototype,"deltaX",{get:function(){return this.world.x-this._cache[0]}}),Object.defineProperty(b.Sprite.prototype,"deltaY",{get:function(){return this.world.y-this._cache[1]}}),Object.defineProperty(b.Sprite.prototype,"deltaZ",{get:function(){return this.rotation-this._cache[2]}}),Object.defineProperty(b.Sprite.prototype,"inWorld",{get:function(){return this.game.world.bounds.intersects(this.getBounds())}}),Object.defineProperty(b.Sprite.prototype,"inCamera",{get:function(){return this.game.world.camera.screenView.intersects(this.getBounds())}}),Object.defineProperty(b.Sprite.prototype,"frame",{get:function(){return this.animations.frame},set:function(a){this.animations.frame=a}}),Object.defineProperty(b.Sprite.prototype,"frameName",{get:function(){return this.animations.frameName},set:function(a){this.animations.frameName=a}}),Object.defineProperty(b.Sprite.prototype,"renderOrderID",{get:function(){return this._cache[3]}}),Object.defineProperty(b.Sprite.prototype,"inputEnabled",{get:function(){return this.input&&this.input.enabled},set:function(a){a?null===this.input&&(this.input=new b.InputHandler(this),this.input.start()):this.input&&this.input.enabled&&this.input.stop()}}),Object.defineProperty(b.Sprite.prototype,"exists",{get:function(){return!!this._cache[6]},set:function(a){a?(this._cache[6]=1,this.body&&this.body.type===b.Physics.P2JS&&this.body.addToWorld(),this.visible=!0):(this._cache[6]=0,this.body&&this.body.type===b.Physics.P2JS&&this.body.removeFromWorld(),this.visible=!1)}}),Object.defineProperty(b.Sprite.prototype,"fixedToCamera",{get:function(){return!!this._cache[7]},set:function(a){a?(this._cache[7]=1,this.cameraOffset.set(this.x,this.y)):this._cache[7]=0}}),Object.defineProperty(b.Sprite.prototype,"smoothed",{get:function(){return!this.texture.baseTexture.scaleMode},set:function(a){a?this.texture&&(this.texture.baseTexture.scaleMode=0):this.texture&&(this.texture.baseTexture.scaleMode=1)}}),Object.defineProperty(b.Sprite.prototype,"x",{get:function(){return this.position.x},set:function(a){this.position.x=a,this.body&&this.body.type===b.Physics.ARCADE&&2===this.body.phase&&(this.body._reset=1)}}),Object.defineProperty(b.Sprite.prototype,"y",{get:function(){return this.position.y},set:function(a){this.position.y=a,this.body&&this.body.type===b.Physics.ARCADE&&2===this.body.phase&&(this.body._reset=1)}}),b.Image=function(a,c,d,e,f){c=c||0,d=d||0,e=e||null,f=f||null,this.game=a,this.exists=!0,this.name="",this.type=b.IMAGE,this.z=0,this.events=new b.Events(this),this.key=e,this._frame=0,this._frameName="",PIXI.Sprite.call(this,PIXI.TextureCache.__default),this.loadTexture(e,f),this.position.set(c,d),this.world=new b.Point(c,d),this.autoCull=!1,this.input=null,this.cameraOffset=new b.Point,this._cache=[0,0,0,0,1,0,1,0]},b.Image.prototype=Object.create(PIXI.Sprite.prototype),b.Image.prototype.constructor=b.Image,b.Image.prototype.preUpdate=function(){if(this._cache[0]=this.world.x,this._cache[1]=this.world.y,this._cache[2]=this.rotation,!this.exists||!this.parent.exists)return this._cache[3]=-1,!1;this.autoCull&&(this.renderable=this.game.world.camera.screenView.intersects(this.getBounds())),this.world.setTo(this.game.camera.x+this.worldTransform[2],this.game.camera.y+this.worldTransform[5]),this.visible&&(this._cache[3]=this.game.stage.currentRenderOrderID++);for(var a=0,b=this.children.length;b>a;a++)this.children[a].preUpdate();return!0},b.Image.prototype.update=function(){},b.Image.prototype.postUpdate=function(){this.key instanceof b.BitmapData&&this.key.render(),1===this._cache[7]&&(this.position.x=(this.game.camera.view.x+this.cameraOffset.x)/this.game.camera.scale.x,this.position.y=(this.game.camera.view.y+this.cameraOffset.y)/this.game.camera.scale.y);for(var a=0,c=this.children.length;c>a;a++)this.children[a].postUpdate()},b.Image.prototype.loadTexture=function(a,c){if(c=c||0,a instanceof b.RenderTexture)return this.key=a.key,void this.setTexture(a);if(a instanceof b.BitmapData)return this.key=a,void this.setTexture(a.texture);if(a instanceof PIXI.Texture)return this.key=a,void this.setTexture(a);if(null===a||"undefined"==typeof a)return this.key="__default",void this.setTexture(PIXI.TextureCache[this.key]);if("string"==typeof a&&!this.game.cache.checkImageKey(a))return this.key="__missing",void this.setTexture(PIXI.TextureCache[this.key]);if(this.game.cache.isSpriteSheet(a)){this.key=a;var d=this.game.cache.getFrameData(a);return"string"==typeof c?(this._frame=0,this._frameName=c,void this.setTexture(PIXI.TextureCache[d.getFrameByName(c).uuid])):(this._frame=c,this._frameName="",void this.setTexture(PIXI.TextureCache[d.getFrame(c).uuid]))}return this.key=a,void this.setTexture(PIXI.TextureCache[a])},b.Image.prototype.crop=function(a){if("undefined"==typeof a||null===a)this.texture.hasOwnProperty("sourceWidth")&&this.texture.setFrame(new b.Rectangle(0,0,this.texture.sourceWidth,this.texture.sourceHeight));else if(this.texture instanceof PIXI.Texture){var c={};b.Utils.extend(!0,c,this.texture),c.sourceWidth=c.width,c.sourceHeight=c.height,c.frame=a,c.width=a.width,c.height=a.height,this.texture=c,this.texture.updateFrame=!0,PIXI.Texture.frameUpdates.push(this.texture)}else this.texture.setFrame(a)},b.Image.prototype.revive=function(){return this.alive=!0,this.exists=!0,this.visible=!0,this.events&&this.events.onRevived.dispatch(this),this},b.Image.prototype.kill=function(){return this.alive=!1,this.exists=!1,this.visible=!1,this.events&&this.events.onKilled.dispatch(this),this},b.Image.prototype.destroy=function(a){if(null!==this.game){"undefined"==typeof a&&(a=!0),this.parent&&(this.parent instanceof b.Group?this.parent.remove(this):this.parent.removeChild(this)),this.events&&this.events.destroy(),this.input&&this.input.destroy();var c=this.children.length;if(a)for(;c--;)this.children[c].destroy(a);else for(;c--;)this.removeChild(this.children[c]);this.alive=!1,this.exists=!1,this.visible=!1,this.filters=null,this.mask=null,this.game=null}},b.Image.prototype.reset=function(a,b){return this.world.setTo(a,b),this.position.x=a,this.position.y=b,this.alive=!0,this.exists=!0,this.visible=!0,this.renderable=!0,this},b.Image.prototype.bringToTop=function(){return this.parent&&this.parent.bringToTop(this),this},Object.defineProperty(b.Image.prototype,"angle",{get:function(){return b.Math.wrapAngle(b.Math.radToDeg(this.rotation))},set:function(a){this.rotation=b.Math.degToRad(b.Math.wrapAngle(a))}}),Object.defineProperty(b.Image.prototype,"deltaX",{get:function(){return this.world.x-this._cache[0]}}),Object.defineProperty(b.Image.prototype,"deltaY",{get:function(){return this.world.y-this._cache[1]}}),Object.defineProperty(b.Image.prototype,"deltaZ",{get:function(){return this.rotation-this._cache[2]}}),Object.defineProperty(b.Image.prototype,"inWorld",{get:function(){return this.game.world.bounds.intersects(this.getBounds())}}),Object.defineProperty(b.Image.prototype,"inCamera",{get:function(){return this.game.world.camera.screenView.intersects(this.getBounds())}}),Object.defineProperty(b.Image.prototype,"frame",{get:function(){return this._frame},set:function(a){if(a!==this.frame&&this.game.cache.isSpriteSheet(this.key)){var b=this.game.cache.getFrameData(this.key);b&&a<b.total&&b.getFrame(a)&&(this.setTexture(PIXI.TextureCache[b.getFrame(a).uuid]),this._frame=a)}}}),Object.defineProperty(b.Image.prototype,"frameName",{get:function(){return this._frameName},set:function(a){if(a!==this.frameName&&this.game.cache.isSpriteSheet(this.key)){var b=this.game.cache.getFrameData(this.key);b&&b.getFrameByName(a)&&(this.setTexture(PIXI.TextureCache[b.getFrameByName(a).uuid]),this._frameName=a)}}}),Object.defineProperty(b.Image.prototype,"renderOrderID",{get:function(){return this._cache[3]}}),Object.defineProperty(b.Image.prototype,"inputEnabled",{get:function(){return this.input&&this.input.enabled},set:function(a){a?null===this.input&&(this.input=new b.InputHandler(this),this.input.start()):this.input&&this.input.enabled&&this.input.stop()}}),Object.defineProperty(b.Image.prototype,"fixedToCamera",{get:function(){return!!this._cache[7]},set:function(a){a?(this._cache[7]=1,this.cameraOffset.set(this.x,this.y)):this._cache[7]=0}}),Object.defineProperty(b.Image.prototype,"smoothed",{get:function(){return!this.texture.baseTexture.scaleMode},set:function(a){a?this.texture&&(this.texture.baseTexture.scaleMode=0):this.texture&&(this.texture.baseTexture.scaleMode=1)}}),b.TileSprite=function(a,c,d,e,f,g,h){c=c||0,d=d||0,e=e||256,f=f||256,g=g||null,h=h||null,this.game=a,this.name="",this.type=b.TILESPRITE,this.z=0,this.events=new b.Events(this),this.animations=new b.AnimationManager(this),this.key=g,this._frame=0,this._frameName="",this._scroll=new b.Point,PIXI.TilingSprite.call(this,PIXI.TextureCache.__default,e,f),this.loadTexture(g,h),this.position.set(c,d),this.input=null,this.world=new b.Point(c,d),this.autoCull=!1,this.checkWorldBounds=!1,this.cameraOffset=new b.Point,this.body=null,this._cache=[0,0,0,0,1,0,1,0]},b.TileSprite.prototype=Object.create(PIXI.TilingSprite.prototype),b.TileSprite.prototype.constructor=b.TileSprite,b.TileSprite.prototype.preUpdate=function(){if(1===this._cache[4]&&this.exists)return this.world.setTo(this.parent.position.x+this.position.x,this.parent.position.y+this.position.y),this.worldTransform.tx=this.world.x,this.worldTransform.ty=this.world.y,this._cache[0]=this.world.x,this._cache[1]=this.world.y,this._cache[2]=this.rotation,this.body&&this.body.preUpdate(),this._cache[4]=0,!1;if(this._cache[0]=this.world.x,this._cache[1]=this.world.y,this._cache[2]=this.rotation,!this.exists||!this.parent.exists)return this._cache[3]=-1,!1;(this.autoCull||this.checkWorldBounds)&&this._bounds.copyFrom(this.getBounds()),this.autoCull&&(this.renderable=this.game.world.camera.screenView.intersects(this._bounds)),this.checkWorldBounds&&(1===this._cache[5]&&this.game.world.bounds.intersects(this._bounds)?(this._cache[5]=0,this.events.onEnterBounds.dispatch(this)):0!==this._cache[5]||this.game.world.bounds.intersects(this._bounds)||(this._cache[5]=1,this.events.onOutOfBounds.dispatch(this))),this.world.setTo(this.game.camera.x+this.worldTransform.tx,this.game.camera.y+this.worldTransform.ty),this.visible&&(this._cache[3]=this.game.stage.currentRenderOrderID++),this.animations.update(),0!==this._scroll.x&&(this.tilePosition.x+=this._scroll.x*this.game.time.physicsElapsed),0!==this._scroll.y&&(this.tilePosition.y+=this._scroll.y*this.game.time.physicsElapsed),this.body&&this.body.preUpdate();for(var a=0,b=this.children.length;b>a;a++)this.children[a].preUpdate();return!0},b.TileSprite.prototype.update=function(){},b.TileSprite.prototype.postUpdate=function(){this.exists&&this.body&&this.body.postUpdate(),1===this._cache[7]&&(this.position.x=this.game.camera.view.x+this.cameraOffset.x,this.position.y=this.game.camera.view.y+this.cameraOffset.y);for(var a=0,b=this.children.length;b>a;a++)this.children[a].postUpdate()},b.TileSprite.prototype.autoScroll=function(a,b){this._scroll.set(a,b)},b.TileSprite.prototype.stopScroll=function(){this._scroll.set(0,0)},b.TileSprite.prototype.loadTexture=function(a,c){return c=c||0,a instanceof b.RenderTexture?(this.key=a.key,void this.setTexture(a)):a instanceof b.BitmapData?(this.key=a,void this.setTexture(a.texture)):a instanceof PIXI.Texture?(this.key=a,void this.setTexture(a)):null===a||"undefined"==typeof a?(this.key="__default",void this.setTexture(PIXI.TextureCache[this.key])):"string"!=typeof a||this.game.cache.checkImageKey(a)?this.game.cache.isSpriteSheet(a)?(this.key=a,this.animations.loadFrameData(this.game.cache.getFrameData(a)),"string"==typeof c?this.frameName=c:this.frame=c,void 0):(this.key=a,void this.setTexture(PIXI.TextureCache[a])):(this.key="__missing",void this.setTexture(PIXI.TextureCache[this.key]))},b.TileSprite.prototype.destroy=function(a){if(null!==this.game){"undefined"==typeof a&&(a=!0),this.filters&&(this.filters=null),this.parent&&(this.parent instanceof b.Group?this.parent.remove(this):this.parent.removeChild(this)),this.animations.destroy(),this.events.destroy();var c=this.children.length;if(a)for(;c--;)this.children[c].destroy(a);else for(;c--;)this.removeChild(this.children[c]);this.exists=!1,this.visible=!1,this.filters=null,this.mask=null,this.game=null}},b.TileSprite.prototype.play=function(a,b,c,d){return this.animations.play(a,b,c,d)},b.TileSprite.prototype.reset=function(a,b){return this.world.setTo(a,b),this.position.x=a,this.position.y=b,this.alive=!0,this.exists=!0,this.visible=!0,this.renderable=!0,this._outOfBoundsFired=!1,this.tilePosition.x=0,this.tilePosition.y=0,this.body&&this.body.reset(a,b,!1,!1),this._cache[4]=1,this},Object.defineProperty(b.TileSprite.prototype,"angle",{get:function(){return b.Math.wrapAngle(b.Math.radToDeg(this.rotation))},set:function(a){this.rotation=b.Math.degToRad(b.Math.wrapAngle(a))}}),Object.defineProperty(b.TileSprite.prototype,"frame",{get:function(){return this.animations.frame},set:function(a){a!==this.animations.frame&&(this.animations.frame=a)}}),Object.defineProperty(b.TileSprite.prototype,"frameName",{get:function(){return this.animations.frameName},set:function(a){a!==this.animations.frameName&&(this.animations.frameName=a)}}),Object.defineProperty(b.TileSprite.prototype,"fixedToCamera",{get:function(){return!!this._cache[7]},set:function(a){a?(this._cache[7]=1,this.cameraOffset.set(this.x,this.y)):this._cache[7]=0}}),Object.defineProperty(b.TileSprite.prototype,"exists",{get:function(){return!!this._cache[6]},set:function(a){a?(this._cache[6]=1,this.body&&this.body.type===b.Physics.P2JS&&this.body.addToWorld(),this.visible=!0):(this._cache[6]=0,this.body&&this.body.type===b.Physics.P2JS&&(this.body.safeRemove=!0),this.visible=!1)}}),Object.defineProperty(b.TileSprite.prototype,"inputEnabled",{get:function(){return this.input&&this.input.enabled},set:function(a){a?null===this.input&&(this.input=new b.InputHandler(this),this.input.start()):this.input&&this.input.enabled&&this.input.stop()}}),Object.defineProperty(b.TileSprite.prototype,"x",{get:function(){return this.position.x},set:function(a){this.position.x=a,this.body&&this.body.type===b.Physics.ARCADE&&2===this.body.phase&&(this.body._reset=1)}}),Object.defineProperty(b.TileSprite.prototype,"y",{get:function(){return this.position.y},set:function(a){this.position.y=a,this.body&&this.body.type===b.Physics.ARCADE&&2===this.body.phase&&(this.body._reset=1)}}),b.Text=function(a,c,d,e,f){c=c||0,d=d||0,e=e||" ",f=f||{},e=0===e.length?" ":e.toString(),this.game=a,this.exists=!0,this.name="",this.type=b.TEXT,this.z=0,this.world=new b.Point(c,d),this._text=e,this._font="",this._fontSize=32,this._fontWeight="normal",this._lineSpacing=0,this.events=new b.Events(this),this.input=null,this.cameraOffset=new b.Point,this.setStyle(f),PIXI.Text.call(this,e,this.style),this.position.set(c,d),this._cache=[0,0,0,0,1,0,1,0]},b.Text.prototype=Object.create(PIXI.Text.prototype),b.Text.prototype.constructor=b.Text,b.Text.prototype.preUpdate=function(){if(this._cache[0]=this.world.x,this._cache[1]=this.world.y,this._cache[2]=this.rotation,!this.exists||!this.parent.exists)return this.renderOrderID=-1,!1;this.autoCull&&(this.renderable=this.game.world.camera.screenView.intersects(this.getBounds())),this.world.setTo(this.game.camera.x+this.worldTransform[2],this.game.camera.y+this.worldTransform[5]),this.visible&&(this._cache[3]=this.game.stage.currentRenderOrderID++);for(var a=0,b=this.children.length;b>a;a++)this.children[a].preUpdate();return!0},b.Text.prototype.update=function(){},b.Text.prototype.postUpdate=function(){1===this._cache[7]&&(this.position.x=(this.game.camera.view.x+this.cameraOffset.x)/this.game.camera.scale.x,this.position.y=(this.game.camera.view.y+this.cameraOffset.y)/this.game.camera.scale.y);for(var a=0,b=this.children.length;b>a;a++)this.children[a].postUpdate()},b.Text.prototype.destroy=function(a){if(null!==this.game){"undefined"==typeof a&&(a=!0),this.parent&&(this.parent instanceof b.Group?this.parent.remove(this):this.parent.removeChild(this)),this.texture.destroy(),this.canvas.parentNode?this.canvas.parentNode.removeChild(this.canvas):(this.canvas=null,this.context=null);var c=this.children.length;if(a)for(;c--;)this.children[c].destroy(a);else for(;c--;)this.removeChild(this.children[c]);this.exists=!1,this.visible=!1,this.filters=null,this.mask=null,this.game=null}},b.Text.prototype.setShadow=function(a,b,c,d){this.style.shadowOffsetX=a||0,this.style.shadowOffsetY=b||0,this.style.shadowColor=c||"rgba(0,0,0,0)",this.style.shadowBlur=d||0,this.dirty=!0},b.Text.prototype.setStyle=function(a){a=a||{},a.font=a.font||"bold 20pt Arial",a.fill=a.fill||"black",a.align=a.align||"left",a.stroke=a.stroke||"black",a.strokeThickness=a.strokeThickness||0,a.wordWrap=a.wordWrap||!1,a.wordWrapWidth=a.wordWrapWidth||100,a.shadowOffsetX=a.shadowOffsetX||0,a.shadowOffsetY=a.shadowOffsetY||0,a.shadowColor=a.shadowColor||"rgba(0,0,0,0)",a.shadowBlur=a.shadowBlur||0,this.style=a,this.dirty=!0},b.Text.prototype.updateText=function(){this.context.font=this.style.font;var a=this.text;this.style.wordWrap&&(a=this.runWordWrap(this.text));for(var b=a.split(/(?:\r\n|\r|\n)/),c=[],d=0,e=0;e<b.length;e++){var f=this.context.measureText(b[e]).width;c[e]=f,d=Math.max(d,f)}this.canvas.width=d+this.style.strokeThickness;var g=this.determineFontHeight("font: "+this.style.font+";")+this.style.strokeThickness+this._lineSpacing+this.style.shadowOffsetY;for(this.canvas.height=g*b.length,navigator.isCocoonJS&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.style.fill,this.context.font=this.style.font,this.context.strokeStyle=this.style.stroke,this.context.lineWidth=this.style.strokeThickness,this.context.shadowOffsetX=this.style.shadowOffsetX,this.context.shadowOffsetY=this.style.shadowOffsetY,this.context.shadowColor=this.style.shadowColor,this.context.shadowBlur=this.style.shadowBlur,this.context.textBaseline="top",e=0;e<b.length;e++){var h=new PIXI.Point(this.style.strokeThickness/2,this.style.strokeThickness/2+e*g);"right"===this.style.align?h.x+=d-c[e]:"center"===this.style.align&&(h.x+=(d-c[e])/2),h.y+=this._lineSpacing,this.style.stroke&&this.style.strokeThickness&&this.context.strokeText(b[e],h.x,h.y),this.style.fill&&this.context.fillText(b[e],h.x,h.y)}this.updateTexture()},b.Text.prototype.runWordWrap=function(a){for(var b="",c=a.split("\n"),d=0;d<c.length;d++){for(var e=this.style.wordWrapWidth,f=c[d].split(" "),g=0;g<f.length;g++){var h=this.context.measureText(f[g]).width,i=h+this.context.measureText(" ").width;i>e?(g>0&&(b+="\n"),b+=f[g]+" ",e=this.style.wordWrapWidth-h):(e-=i,b+=f[g]+" ")}d<c.length-1&&(b+="\n")}return b},Object.defineProperty(b.Text.prototype,"angle",{get:function(){return b.Math.radToDeg(this.rotation)},set:function(a){this.rotation=b.Math.degToRad(a)}}),Object.defineProperty(b.Text.prototype,"text",{get:function(){return this._text},set:function(a){a!==this._text&&(this._text=a.toString()||" ",this.dirty=!0,this.updateTransform())}}),Object.defineProperty(b.Text.prototype,"font",{get:function(){return this._font},set:function(a){a!==this._font&&(this._font=a.trim(),this.style.font=this._fontWeight+" "+this._fontSize+"px '"+this._font+"'",this.dirty=!0,this.updateTransform())}}),Object.defineProperty(b.Text.prototype,"fontSize",{get:function(){return this._fontSize},set:function(a){a=parseInt(a,10),a!==this._fontSize&&(this._fontSize=a,this.style.font=this._fontWeight+" "+this._fontSize+"px '"+this._font+"'",this.dirty=!0,this.updateTransform())}}),Object.defineProperty(b.Text.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(a){a!==this._fontWeight&&(this._fontWeight=a,this.style.font=this._fontWeight+" "+this._fontSize+"px '"+this._font+"'",this.dirty=!0,this.updateTransform())}}),Object.defineProperty(b.Text.prototype,"fill",{get:function(){return this.style.fill},set:function(a){a!==this.style.fill&&(this.style.fill=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"align",{get:function(){return this.style.align},set:function(a){a!==this.style.align&&(this.style.align=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"stroke",{get:function(){return this.style.stroke},set:function(a){a!==this.style.stroke&&(this.style.stroke=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"strokeThickness",{get:function(){return this.style.strokeThickness},set:function(a){a!==this.style.strokeThickness&&(this.style.strokeThickness=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"wordWrap",{get:function(){return this.style.wordWrap},set:function(a){a!==this.style.wordWrap&&(this.style.wordWrap=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"wordWrapWidth",{get:function(){return this.style.wordWrapWidth},set:function(a){a!==this.style.wordWrapWidth&&(this.style.wordWrapWidth=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"lineSpacing",{get:function(){return this._lineSpacing},set:function(a){a!==this._lineSpacing&&(this._lineSpacing=parseFloat(a),this.dirty=!0,this.updateTransform())}}),Object.defineProperty(b.Text.prototype,"shadowOffsetX",{get:function(){return this.style.shadowOffsetX},set:function(a){a!==this.style.shadowOffsetX&&(this.style.shadowOffsetX=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"shadowOffsetY",{get:function(){return this.style.shadowOffsetY},set:function(a){a!==this.style.shadowOffsetY&&(this.style.shadowOffsetY=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"shadowColor",{get:function(){return this.style.shadowColor},set:function(a){a!==this.style.shadowColor&&(this.style.shadowColor=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"shadowBlur",{get:function(){return this.style.shadowBlur},set:function(a){a!==this.style.shadowBlur&&(this.style.shadowBlur=a,this.dirty=!0)}}),Object.defineProperty(b.Text.prototype,"inputEnabled",{get:function(){return this.input&&this.input.enabled},set:function(a){a?null===this.input&&(this.input=new b.InputHandler(this),this.input.start()):this.input&&this.input.enabled&&this.input.stop()}}),Object.defineProperty(b.Text.prototype,"fixedToCamera",{get:function(){return!!this._cache[7]},set:function(a){a?(this._cache[7]=1,this.cameraOffset.set(this.x,this.y)):this._cache[7]=0}}),b.BitmapText=function(a,c,d,e,f,g){c=c||0,d=d||0,e=e||"",f=f||"",g=g||32,this.game=a,this.exists=!0,this.name="",this.type=b.BITMAPTEXT,this.z=0,this.world=new b.Point(c,d),this._text=f,this._font=e,this._fontSize=g,this._align="left",this._tint=16777215,this.events=new b.Events(this),this.input=null,this.cameraOffset=new b.Point,PIXI.BitmapText.call(this,f),this.position.set(c,d),this._cache=[0,0,0,0,1,0,1,0]},b.BitmapText.prototype=Object.create(PIXI.BitmapText.prototype),b.BitmapText.prototype.constructor=b.BitmapText,b.BitmapText.prototype.setStyle=function(){this.style={align:this._align},this.fontName=this._font,this.fontSize=this._fontSize,this.dirty=!0},b.BitmapText.prototype.preUpdate=function(){return this._cache[0]=this.world.x,this._cache[1]=this.world.y,this._cache[2]=this.rotation,this.exists&&this.parent.exists?(this.autoCull&&(this.renderable=this.game.world.camera.screenView.intersects(this.getBounds())),this.world.setTo(this.game.camera.x+this.worldTransform[2],this.game.camera.y+this.worldTransform[5]),this.visible&&(this._cache[3]=this.game.stage.currentRenderOrderID++),!0):(this.renderOrderID=-1,!1)},b.BitmapText.prototype.update=function(){},b.BitmapText.prototype.postUpdate=function(){1===this._cache[7]&&(this.position.x=(this.game.camera.view.x+this.cameraOffset.x)/this.game.camera.scale.x,this.position.y=(this.game.camera.view.y+this.cameraOffset.y)/this.game.camera.scale.y)},b.BitmapText.prototype.destroy=function(a){if(null!==this.game){"undefined"==typeof a&&(a=!0),this.parent&&(this.parent instanceof b.Group?this.parent.remove(this):this.parent.removeChild(this));var c=this.children.length;if(a)for(;c--;)this.children[c].destroy?this.children[c].destroy(a):this.removeChild(this.children[c]);else for(;c--;)this.removeChild(this.children[c]);this.exists=!1,this.visible=!1,this.filters=null,this.mask=null,this.game=null}},Object.defineProperty(b.BitmapText.prototype,"align",{get:function(){return this._align},set:function(a){a!==this._align&&(this._align=a,this.setStyle())}}),Object.defineProperty(b.BitmapText.prototype,"tint",{get:function(){return this._tint},set:function(a){a!==this._tint&&(this._tint=a,this.dirty=!0)}}),Object.defineProperty(b.BitmapText.prototype,"angle",{get:function(){return b.Math.radToDeg(this.rotation)},set:function(a){this.rotation=b.Math.degToRad(a)}}),Object.defineProperty(b.BitmapText.prototype,"font",{get:function(){return this._font},set:function(a){a!==this._font&&(this._font=a.trim(),this.style.font=this._fontSize+"px '"+this._font+"'",this.dirty=!0)}}),Object.defineProperty(b.BitmapText.prototype,"fontSize",{get:function(){return this._fontSize},set:function(a){a=parseInt(a,10),a!==this._fontSize&&(this._fontSize=a,this.style.font=this._fontSize+"px '"+this._font+"'",this.dirty=!0)}}),Object.defineProperty(b.BitmapText.prototype,"text",{get:function(){return this._text},set:function(a){a!==this._text&&(this._text=a.toString()||" ",this.dirty=!0)}}),Object.defineProperty(b.BitmapText.prototype,"inputEnabled",{get:function(){return this.input&&this.input.enabled},set:function(a){a?null===this.input&&(this.input=new b.InputHandler(this),this.input.start()):this.input&&this.input.enabled&&this.input.stop()}}),Object.defineProperty(b.BitmapText.prototype,"fixedToCamera",{get:function(){return!!this._cache[7]},set:function(a){a?(this._cache[7]=1,this.cameraOffset.set(this.x,this.y)):this._cache[7]=0}}),b.Button=function(a,c,d,e,f,g,h,i,j,k){c=c||0,d=d||0,e=e||null,f=f||null,g=g||this,b.Image.call(this,a,c,d,e,i),this.type=b.BUTTON,this._onOverFrameName=null,this._onOutFrameName=null,this._onDownFrameName=null,this._onUpFrameName=null,this._onOverFrameID=null,this._onOutFrameID=null,this._onDownFrameID=null,this._onUpFrameID=null,this.onOverSound=null,this.onOutSound=null,this.onDownSound=null,this.onUpSound=null,this.onOverSoundMarker="",this.onOutSoundMarker="",this.onDownSoundMarker="",this.onUpSoundMarker="",this.onInputOver=new b.Signal,this.onInputOut=new b.Signal,this.onInputDown=new b.Signal,this.onInputUp=new b.Signal,this.freezeFrames=!1,this.forceOut=!1,this.inputEnabled=!0,this.input.start(0,!0),this.setFrames(h,i,j,k),null!==f&&this.onInputUp.add(f,g),this.events.onInputOver.add(this.onInputOverHandler,this),this.events.onInputOut.add(this.onInputOutHandler,this),this.events.onInputDown.add(this.onInputDownHandler,this),this.events.onInputUp.add(this.onInputUpHandler,this)},b.Button.prototype=Object.create(b.Image.prototype),b.Button.prototype.constructor=b.Button,b.Button.prototype.clearFrames=function(){this._onOverFrameName=null,this._onOverFrameID=null,this._onOutFrameName=null,this._onOutFrameID=null,this._onDownFrameName=null,this._onDownFrameID=null,this._onUpFrameName=null,this._onUpFrameID=null},b.Button.prototype.setFrames=function(a,b,c,d){this.clearFrames(),null!==a&&("string"==typeof a?(this._onOverFrameName=a,this.input.pointerOver()&&(this.frameName=a)):(this._onOverFrameID=a,this.input.pointerOver()&&(this.frame=a))),null!==b&&("string"==typeof b?(this._onOutFrameName=b,this.input.pointerOver()===!1&&(this.frameName=b)):(this._onOutFrameID=b,this.input.pointerOver()===!1&&(this.frame=b))),null!==c&&("string"==typeof c?(this._onDownFrameName=c,this.input.pointerDown()&&(this.frameName=c)):(this._onDownFrameID=c,this.input.pointerDown()&&(this.frame=c))),null!==d&&("string"==typeof d?(this._onUpFrameName=d,this.input.pointerUp()&&(this.frameName=d)):(this._onUpFrameID=d,this.input.pointerUp()&&(this.frame=d)))
},b.Button.prototype.setSounds=function(a,b,c,d,e,f,g,h){this.setOverSound(a,b),this.setOutSound(e,f),this.setDownSound(c,d),this.setUpSound(g,h)},b.Button.prototype.setOverSound=function(a,c){this.onOverSound=null,this.onOverSoundMarker="",a instanceof b.Sound&&(this.onOverSound=a),"string"==typeof c&&(this.onOverSoundMarker=c)},b.Button.prototype.setOutSound=function(a,c){this.onOutSound=null,this.onOutSoundMarker="",a instanceof b.Sound&&(this.onOutSound=a),"string"==typeof c&&(this.onOutSoundMarker=c)},b.Button.prototype.setDownSound=function(a,c){this.onDownSound=null,this.onDownSoundMarker="",a instanceof b.Sound&&(this.onDownSound=a),"string"==typeof c&&(this.onDownSoundMarker=c)},b.Button.prototype.setUpSound=function(a,c){this.onUpSound=null,this.onUpSoundMarker="",a instanceof b.Sound&&(this.onUpSound=a),"string"==typeof c&&(this.onUpSoundMarker=c)},b.Button.prototype.onInputOverHandler=function(a,b){this.freezeFrames===!1&&this.setState(1),this.onOverSound&&this.onOverSound.play(this.onOverSoundMarker),this.onInputOver&&this.onInputOver.dispatch(this,b)},b.Button.prototype.onInputOutHandler=function(a,b){this.freezeFrames===!1&&this.setState(2),this.onOutSound&&this.onOutSound.play(this.onOutSoundMarker),this.onInputOut&&this.onInputOut.dispatch(this,b)},b.Button.prototype.onInputDownHandler=function(a,b){this.freezeFrames===!1&&this.setState(3),this.onDownSound&&this.onDownSound.play(this.onDownSoundMarker),this.onInputDown&&this.onInputDown.dispatch(this,b)},b.Button.prototype.onInputUpHandler=function(a,b,c){this.onUpSound&&this.onUpSound.play(this.onUpSoundMarker),this.onInputUp&&this.onInputUp.dispatch(this,b,c),this.freezeFrames||this.setState(this.forceOut?2:null!==this._onUpFrameName||null!==this._onUpFrameID?4:c?1:2)},b.Button.prototype.setState=function(a){1===a?null!=this._onOverFrameName?this.frameName=this._onOverFrameName:null!=this._onOverFrameID&&(this.frame=this._onOverFrameID):2===a?null!=this._onOutFrameName?this.frameName=this._onOutFrameName:null!=this._onOutFrameID&&(this.frame=this._onOutFrameID):3===a?null!=this._onDownFrameName?this.frameName=this._onDownFrameName:null!=this._onDownFrameID&&(this.frame=this._onDownFrameID):4===a&&(null!=this._onUpFrameName?this.frameName=this._onUpFrameName:null!=this._onUpFrameID&&(this.frame=this._onUpFrameID))},b.Graphics=function(a,c,d){c=c||0,d=d||0,this.game=a,this.exists=!0,this.name="",this.type=b.GRAPHICS,this.z=0,this.world=new b.Point(c,d),this.cameraOffset=new b.Point,PIXI.Graphics.call(this),this.position.set(c,d),this._cache=[0,0,0,0,1,0,1,0]},b.Graphics.prototype=Object.create(PIXI.Graphics.prototype),b.Graphics.prototype.constructor=b.Graphics,b.Graphics.prototype.preUpdate=function(){return this._cache[0]=this.world.x,this._cache[1]=this.world.y,this._cache[2]=this.rotation,this.exists&&this.parent.exists?(this.autoCull&&(this.renderable=this.game.world.camera.screenView.intersects(this.getBounds())),this.world.setTo(this.game.camera.x+this.worldTransform[2],this.game.camera.y+this.worldTransform[5]),this.visible&&(this._cache[3]=this.game.stage.currentRenderOrderID++),!0):(this.renderOrderID=-1,!1)},b.Graphics.prototype.update=function(){},b.Graphics.prototype.postUpdate=function(){1===this._cache[7]&&(this.position.x=(this.game.camera.view.x+this.cameraOffset.x)/this.game.camera.scale.x,this.position.y=(this.game.camera.view.y+this.cameraOffset.y)/this.game.camera.scale.y)},b.Graphics.prototype.destroy=function(a){"undefined"==typeof a&&(a=!0),this.clear(),this.parent&&(this.parent instanceof b.Group?this.parent.remove(this):this.parent.removeChild(this));var c=this.children.length;if(a)for(;c--;)this.children[c].destroy(a);else for(;c--;)this.removeChild(this.children[c]);this.exists=!1,this.visible=!1,this.game=null},b.Graphics.prototype.drawPolygon=function(a){this.moveTo(a.points[0].x,a.points[0].y);for(var b=1;b<a.points.length;b+=1)this.lineTo(a.points[b].x,a.points[b].y);this.lineTo(a.points[0].x,a.points[0].y)},Object.defineProperty(b.Graphics.prototype,"angle",{get:function(){return b.Math.radToDeg(this.rotation)},set:function(a){this.rotation=b.Math.degToRad(a)}}),Object.defineProperty(b.Graphics.prototype,"fixedToCamera",{get:function(){return!!this._cache[7]},set:function(a){a?(this._cache[7]=1,this.cameraOffset.set(this.x,this.y)):this._cache[7]=0}}),b.RenderTexture=function(a,c,d,e){this.game=a,this.key=e,this.type=b.RENDERTEXTURE,this._temp=new b.Point,PIXI.RenderTexture.call(this,c,d)},b.RenderTexture.prototype=Object.create(PIXI.RenderTexture.prototype),b.RenderTexture.prototype.constructor=b.RenderTexture,b.RenderTexture.prototype.renderXY=function(a,b,c,d){this._temp.set(b,c),this.render(a,this._temp,d)},b.SpriteBatch=function(a,c,d,e){PIXI.SpriteBatch.call(this),b.Group.call(this,a,c,d,e),this.type=b.SPRITEBATCH},b.SpriteBatch.prototype=b.Utils.extend(!0,b.SpriteBatch.prototype,b.Group.prototype,PIXI.SpriteBatch.prototype),b.SpriteBatch.prototype.constructor=b.SpriteBatch,b.RetroFont=function(a,c,d,e,f,g,h,i,j,k){this.characterWidth=d,this.characterHeight=e,this.characterSpacingX=h||0,this.characterSpacingY=i||0,this.characterPerRow=g,this.offsetX=j||0,this.offsetY=k||0,this.align="left",this.multiLine=!1,this.autoUpperCase=!0,this.customSpacingX=0,this.customSpacingY=0,this.fixedWidth=0,this.fontSet=a.cache.getImage(c),this._text="",this.grabData=[];for(var l=this.offsetX,m=this.offsetY,n=0,o=new b.FrameData,p=0;p<f.length;p++){var q=a.rnd.uuid(),r=o.addFrame(new b.Frame(p,l,m,this.characterWidth,this.characterHeight,"",q));this.grabData[f.charCodeAt(p)]=r.index,PIXI.TextureCache[q]=new PIXI.Texture(PIXI.BaseTextureCache[c],{x:l,y:m,width:this.characterWidth,height:this.characterHeight}),n++,n==this.characterPerRow?(n=0,l=this.offsetX,m+=this.characterHeight+this.characterSpacingY):l+=this.characterWidth+this.characterSpacingX}a.cache.updateFrameData(c,o),this.stamp=new b.Image(a,0,0,c,0),b.RenderTexture.call(this,a),this.type=b.RETROFONT},b.RetroFont.prototype=Object.create(b.RenderTexture.prototype),b.RetroFont.prototype.constructor=b.RetroFont,b.RetroFont.ALIGN_LEFT="left",b.RetroFont.ALIGN_RIGHT="right",b.RetroFont.ALIGN_CENTER="center",b.RetroFont.TEXT_SET1=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",b.RetroFont.TEXT_SET2=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ",b.RetroFont.TEXT_SET3="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ",b.RetroFont.TEXT_SET4="ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789",b.RetroFont.TEXT_SET5="ABCDEFGHIJKLMNOPQRSTUVWXYZ.,/() '!?-*:0123456789",b.RetroFont.TEXT_SET6="ABCDEFGHIJKLMNOPQRSTUVWXYZ!?:;0123456789\"(),-.' ",b.RetroFont.TEXT_SET7="AGMSY+:4BHNTZ!;5CIOU.?06DJPV,(17EKQW\")28FLRX-'39",b.RetroFont.TEXT_SET8="0123456789 .ABCDEFGHIJKLMNOPQRSTUVWXYZ",b.RetroFont.TEXT_SET9="ABCDEFGHIJKLMNOPQRSTUVWXYZ()-0123456789.:,'\"?!",b.RetroFont.TEXT_SET10="ABCDEFGHIJKLMNOPQRSTUVWXYZ",b.RetroFont.TEXT_SET11="ABCDEFGHIJKLMNOPQRSTUVWXYZ.,\"-+!?()':;0123456789",b.RetroFont.prototype.setFixedWidth=function(a,b){"undefined"==typeof b&&(b="left"),this.fixedWidth=a,this.align=b},b.RetroFont.prototype.setText=function(a,b,c,d,e,f){this.multiLine=b||!1,this.customSpacingX=c||0,this.customSpacingY=d||0,this.align=e||"left",this.autoUpperCase=f?!1:!0,a.length>0&&(this.text=a)},b.RetroFont.prototype.resize=function(a,b){if(this.width=a,this.height=b,this.frame.width=this.width,this.frame.height=this.height,this.baseTexture.width=this.width,this.baseTexture.height=this.height,this.renderer.type===PIXI.WEBGL_RENDERER){this.projection.x=this.width/2,this.projection.y=-this.height/2;var c=this.renderer.gl;c.bindTexture(c.TEXTURE_2D,this.baseTexture._glTextures[c.id]),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,this.width,this.height,0,c.RGBA,c.UNSIGNED_BYTE,null)}else this.textureBuffer.resize(this.width,this.height);PIXI.Texture.frameUpdates.push(this)},b.RetroFont.prototype.buildRetroFontText=function(){var a=0,c=0;if(this.multiLine){var d=this._text.split("\n");this.fixedWidth>0?this.resize(this.fixedWidth,d.length*(this.characterHeight+this.customSpacingY)-this.customSpacingY):this.resize(this.getLongestLine()*(this.characterWidth+this.customSpacingX),d.length*(this.characterHeight+this.customSpacingY)-this.customSpacingY),this.textureBuffer.clear();for(var e=0;e<d.length;e++){switch(this.align){case b.RetroFont.ALIGN_LEFT:a=0;break;case b.RetroFont.ALIGN_RIGHT:a=this.width-d[e].length*(this.characterWidth+this.customSpacingX);break;case b.RetroFont.ALIGN_CENTER:a=this.width/2-d[e].length*(this.characterWidth+this.customSpacingX)/2,a+=this.customSpacingX/2}0>a&&(a=0),this.pasteLine(d[e],a,c,this.customSpacingX),c+=this.characterHeight+this.customSpacingY}}else{switch(this.fixedWidth>0?this.resize(this.fixedWidth,this.characterHeight):this.resize(this._text.length*(this.characterWidth+this.customSpacingX),this.characterHeight),this.textureBuffer.clear(),this.align){case b.RetroFont.ALIGN_LEFT:a=0;break;case b.RetroFont.ALIGN_RIGHT:a=this.width-this._text.length*(this.characterWidth+this.customSpacingX);break;case b.RetroFont.ALIGN_CENTER:a=this.width/2-this._text.length*(this.characterWidth+this.customSpacingX)/2,a+=this.customSpacingX/2}this.pasteLine(this._text,a,0,this.customSpacingX)}},b.RetroFont.prototype.pasteLine=function(a,c,d,e){for(var f=new b.Point,g=0;g<a.length;g++)if(" "==a.charAt(g))c+=this.characterWidth+e;else if(this.grabData[a.charCodeAt(g)]>=0&&(this.stamp.frame=this.grabData[a.charCodeAt(g)],f.set(c,d),this.render(this.stamp,f,!1),c+=this.characterWidth+e,c>this.width))break},b.RetroFont.prototype.getLongestLine=function(){var a=0;if(this._text.length>0)for(var b=this._text.split("\n"),c=0;c<b.length;c++)b[c].length>a&&(a=b[c].length);return a},b.RetroFont.prototype.removeUnsupportedCharacters=function(a){for(var b="",c=0;c<this._text.length;c++){var d=this._text[c],e=d.charCodeAt(0);(this.grabData[e]>=0||!a&&"\n"===d)&&(b=b.concat(d))}return b},Object.defineProperty(b.RetroFont.prototype,"text",{get:function(){return this._text},set:function(a){var b;b=this.autoUpperCase?a.toUpperCase():a,b!==this._text&&(this._text=b,this.removeUnsupportedCharacters(this.multiLine),this.buildRetroFontText())}}),b.Canvas={create:function(a,b,c,d){if("undefined"==typeof d&&(d=!1),a=a||256,b=b||256,d)var e=document.createElement("canvas");else var e=document.createElement(navigator.isCocoonJS?"screencanvas":"canvas");return"string"==typeof c&&""!==c&&(e.id=c),e.width=a,e.height=b,e.style.display="block",e},getOffset:function(a,c){c=c||new b.Point;var d=a.getBoundingClientRect(),e=a.clientTop||document.body.clientTop||0,f=a.clientLeft||document.body.clientLeft||0,g=0,h=0;return"CSS1Compat"===document.compatMode?(g=window.pageYOffset||document.documentElement.scrollTop||a.scrollTop||0,h=window.pageXOffset||document.documentElement.scrollLeft||a.scrollLeft||0):(g=window.pageYOffset||document.body.scrollTop||a.scrollTop||0,h=window.pageXOffset||document.body.scrollLeft||a.scrollLeft||0),c.x=d.left+h-f,c.y=d.top+g-e,c},getAspectRatio:function(a){return a.width/a.height},setBackgroundColor:function(a,b){return b=b||"rgb(0,0,0)",a.style.backgroundColor=b,a},setTouchAction:function(a,b){return b=b||"none",a.style.msTouchAction=b,a.style["ms-touch-action"]=b,a.style["touch-action"]=b,a},setUserSelect:function(a,b){return b=b||"none",a.style["-webkit-touch-callout"]=b,a.style["-webkit-user-select"]=b,a.style["-khtml-user-select"]=b,a.style["-moz-user-select"]=b,a.style["-ms-user-select"]=b,a.style["user-select"]=b,a.style["-webkit-tap-highlight-color"]="rgba(0, 0, 0, 0)",a},addToDOM:function(a,b,c){var d;return"undefined"==typeof c&&(c=!0),b&&("string"==typeof b?d=document.getElementById(b):"object"==typeof b&&1===b.nodeType&&(d=b)),d||(d=document.body),c&&d.style&&(d.style.overflow="hidden"),d.appendChild(a),a},setTransform:function(a,b,c,d,e,f,g){return a.setTransform(d,f,g,e,b,c),a},setSmoothingEnabled:function(a,b){return a.imageSmoothingEnabled=b,a.mozImageSmoothingEnabled=b,a.oImageSmoothingEnabled=b,a.webkitImageSmoothingEnabled=b,a.msImageSmoothingEnabled=b,a},setImageRenderingCrisp:function(a){return a.style["image-rendering"]="optimizeSpeed",a.style["image-rendering"]="crisp-edges",a.style["image-rendering"]="-moz-crisp-edges",a.style["image-rendering"]="-webkit-optimize-contrast",a.style["image-rendering"]="optimize-contrast",a.style.msInterpolationMode="nearest-neighbor",a},setImageRenderingBicubic:function(a){return a.style["image-rendering"]="auto",a.style.msInterpolationMode="bicubic",a}},b.Device=function(a){this.game=a,this.desktop=!1,this.iOS=!1,this.cocoonJS=!1,this.ejecta=!1,this.android=!1,this.chromeOS=!1,this.linux=!1,this.macOS=!1,this.windows=!1,this.windowsPhone=!1,this.canvas=!1,this.file=!1,this.fileSystem=!1,this.localStorage=!1,this.webGL=!1,this.worker=!1,this.touch=!1,this.mspointer=!1,this.css3D=!1,this.pointerLock=!1,this.typedArray=!1,this.vibration=!1,this.getUserMedia=!1,this.quirksMode=!1,this.arora=!1,this.chrome=!1,this.epiphany=!1,this.firefox=!1,this.ie=!1,this.ieVersion=0,this.trident=!1,this.tridentVersion=0,this.mobileSafari=!1,this.midori=!1,this.opera=!1,this.safari=!1,this.webApp=!1,this.silk=!1,this.audioData=!1,this.webAudio=!1,this.ogg=!1,this.opus=!1,this.mp3=!1,this.wav=!1,this.m4a=!1,this.webm=!1,this.iPhone=!1,this.iPhone4=!1,this.iPad=!1,this.pixelRatio=0,this.littleEndian=!1,this.fullscreen=!1,this.requestFullscreen="",this.cancelFullscreen="",this.fullscreenKeyboard=!1,this._checkAudio(),this._checkBrowser(),this._checkCSS3D(),this._checkDevice(),this._checkFeatures(),this._checkOS()},b.Device.prototype={_checkOS:function(){var a=navigator.userAgent;/Android/.test(a)?this.android=!0:/CrOS/.test(a)?this.chromeOS=!0:/iP[ao]d|iPhone/i.test(a)?this.iOS=!0:/Linux/.test(a)?this.linux=!0:/Mac OS/.test(a)?this.macOS=!0:/Windows/.test(a)&&(this.windows=!0,/Windows Phone/i.test(a)&&(this.windowsPhone=!0)),(this.windows||this.macOS||this.linux&&this.silk===!1)&&(this.desktop=!0),(this.windowsPhone||/Windows NT/i.test(a)&&/Touch/i.test(a))&&(this.desktop=!1)},_checkFeatures:function(){this.canvas=!!window.CanvasRenderingContext2D||this.cocoonJS;try{this.localStorage=!!localStorage.getItem}catch(a){this.localStorage=!1}this.file=!!(window.File&&window.FileReader&&window.FileList&&window.Blob),this.fileSystem=!!window.requestFileSystem,this.webGL=function(){try{var a=document.createElement("canvas");return!!window.WebGLRenderingContext&&(a.getContext("webgl")||a.getContext("experimental-webgl"))}catch(b){return!1}}(),this.webGL=null===this.webGL||this.webGL===!1?!1:!0,this.worker=!!window.Worker,("ontouchstart"in document.documentElement||window.navigator.maxTouchPoints&&window.navigator.maxTouchPoints>1)&&(this.touch=!0),(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&(this.mspointer=!0),this.pointerLock="pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document,this.quirksMode="CSS1Compat"===document.compatMode?!1:!0,this.getUserMedia=!!(navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia)},checkFullScreenSupport:function(){for(var a=["requestFullscreen","requestFullScreen","webkitRequestFullscreen","webkitRequestFullScreen","msRequestFullscreen","msRequestFullScreen","mozRequestFullScreen","mozRequestFullscreen"],b=0;b<a.length;b++)this.game.canvas[a[b]]&&(this.fullscreen=!0,this.requestFullscreen=a[b]);var c=["cancelFullScreen","exitFullscreen","webkitCancelFullScreen","webkitExitFullscreen","msCancelFullScreen","msExitFullscreen","mozCancelFullScreen","mozExitFullscreen"];if(this.fullscreen)for(var b=0;b<c.length;b++)this.game.canvas[c[b]]&&(this.cancelFullscreen=c[b]);window.Element&&Element.ALLOW_KEYBOARD_INPUT&&(this.fullscreenKeyboard=!0)},_checkBrowser:function(){var a=navigator.userAgent;/Arora/.test(a)?this.arora=!0:/Chrome/.test(a)?this.chrome=!0:/Epiphany/.test(a)?this.epiphany=!0:/Firefox/.test(a)?this.firefox=!0:/Mobile Safari/.test(a)?this.mobileSafari=!0:/MSIE (\d+\.\d+);/.test(a)?(this.ie=!0,this.ieVersion=parseInt(RegExp.$1,10)):/Midori/.test(a)?this.midori=!0:/Opera/.test(a)?this.opera=!0:/Safari/.test(a)?this.safari=!0:/Silk/.test(a)?this.silk=!0:/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(a)&&(this.ie=!0,this.trident=!0,this.tridentVersion=parseInt(RegExp.$1,10),this.ieVersion=parseInt(RegExp.$3,10)),navigator.standalone&&(this.webApp=!0),navigator.isCocoonJS&&(this.cocoonJS=!0),"undefined"!=typeof window.ejecta&&(this.ejecta=!0)},_checkAudio:function(){this.audioData=!!window.Audio,this.webAudio=!(!window.webkitAudioContext&&!window.AudioContext);var a=document.createElement("audio"),b=!1;try{(b=!!a.canPlayType)&&(a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"")&&(this.ogg=!0),a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,"")&&(this.opus=!0),a.canPlayType("audio/mpeg;").replace(/^no$/,"")&&(this.mp3=!0),a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"")&&(this.wav=!0),(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;").replace(/^no$/,""))&&(this.m4a=!0),a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")&&(this.webm=!0))}catch(c){}},_checkDevice:function(){this.pixelRatio=window.devicePixelRatio||1,this.iPhone=-1!=navigator.userAgent.toLowerCase().indexOf("iphone"),this.iPhone4=2==this.pixelRatio&&this.iPhone,this.iPad=-1!=navigator.userAgent.toLowerCase().indexOf("ipad"),"undefined"!=typeof Int8Array?(this.littleEndian=new Int8Array(new Int16Array([1]).buffer)[0]>0,this.typedArray=!0):(this.littleEndian=!1,this.typedArray=!1),navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&(this.vibration=!0)},_checkCSS3D:function(){var a,b=document.createElement("p"),c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(b,null);for(var d in c)void 0!==b.style[d]&&(b.style[d]="translate3d(1px,1px,1px)",a=window.getComputedStyle(b).getPropertyValue(c[d]));document.body.removeChild(b),this.css3D=void 0!==a&&a.length>0&&"none"!==a},canPlayAudio:function(a){return"mp3"==a&&this.mp3?!0:"ogg"==a&&(this.ogg||this.opus)?!0:"m4a"==a&&this.m4a?!0:"wav"==a&&this.wav?!0:"webm"==a&&this.webm?!0:!1},isConsoleOpen:function(){return window.console&&window.console.firebug?!0:window.console&&(console.profile(),console.profileEnd(),console.clear&&console.clear(),console.profiles)?console.profiles.length>0:!1}},b.Device.prototype.constructor=b.Device,b.RequestAnimationFrame=function(a,b){"undefined"==typeof b&&(b=!1),this.game=a,this.isRunning=!1,this.forceSetTimeOut=b;for(var c=["ms","moz","webkit","o"],d=0;d<c.length&&!window.requestAnimationFrame;d++)window.requestAnimationFrame=window[c[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[d]+"CancelAnimationFrame"];this._isSetTimeOut=!1,this._onLoop=null,this._timeOutID=null},b.RequestAnimationFrame.prototype={start:function(){this.isRunning=!0;var a=this;!window.requestAnimationFrame||this.forceSetTimeOut?(this._isSetTimeOut=!0,this._onLoop=function(){return a.updateSetTimeout()},this._timeOutID=window.setTimeout(this._onLoop,0)):(this._isSetTimeOut=!1,this._onLoop=function(b){return a.updateRAF(b)},this._timeOutID=window.requestAnimationFrame(this._onLoop))},updateRAF:function(){this.game.update(Date.now()),this._timeOutID=window.requestAnimationFrame(this._onLoop)},updateSetTimeout:function(){this.game.update(Date.now()),this._timeOutID=window.setTimeout(this._onLoop,this.game.time.timeToCall)},stop:function(){this._isSetTimeOut?clearTimeout(this._timeOutID):window.cancelAnimationFrame(this._timeOutID),this.isRunning=!1},isSetTimeOut:function(){return this._isSetTimeOut},isRAF:function(){return this._isSetTimeOut===!1}},b.RequestAnimationFrame.prototype.constructor=b.RequestAnimationFrame,b.Math={PI2:2*Math.PI,fuzzyEqual:function(a,b,c){return"undefined"==typeof c&&(c=1e-4),Math.abs(a-b)<c},fuzzyLessThan:function(a,b,c){return"undefined"==typeof c&&(c=1e-4),b+c>a},fuzzyGreaterThan:function(a,b,c){return"undefined"==typeof c&&(c=1e-4),a>b-c},fuzzyCeil:function(a,b){return"undefined"==typeof b&&(b=1e-4),Math.ceil(a-b)},fuzzyFloor:function(a,b){return"undefined"==typeof b&&(b=1e-4),Math.floor(a+b)},average:function(){for(var a=[],b=0;b<arguments.length-0;b++)a[b]=arguments[b+0];for(var c=0,d=0;d<a.length;d++)c+=a[d];return c/a.length},truncate:function(a){return a>0?Math.floor(a):Math.ceil(a)},shear:function(a){return a%1},snapTo:function(a,b,c){return"undefined"==typeof c&&(c=0),0===b?a:(a-=c,a=b*Math.round(a/b),c+a)},snapToFloor:function(a,b,c){return"undefined"==typeof c&&(c=0),0===b?a:(a-=c,a=b*Math.floor(a/b),c+a)},snapToCeil:function(a,b,c){return"undefined"==typeof c&&(c=0),0===b?a:(a-=c,a=b*Math.ceil(a/b),c+a)},snapToInArray:function(a,b,c){if("undefined"==typeof c&&(c=!0),c&&b.sort(),a<b[0])return b[0];for(var d=1;b[d]<a;)d++;var e=b[d-1],f=d<b.length?b[d]:Number.POSITIVE_INFINITY;return a-e>=f-a?f:e},roundTo:function(a,b,c){"undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=10);var d=Math.pow(c,-b);return Math.round(a*d)/d},floorTo:function(a,b,c){"undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=10);var d=Math.pow(c,-b);return Math.floor(a*d)/d},ceilTo:function(a,b,c){"undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=10);var d=Math.pow(c,-b);return Math.ceil(a*d)/d},interpolateFloat:function(a,b,c){return(b-a)*c+a},angleBetween:function(a,b,c,d){return Math.atan2(c-a,d-b)},angleBetweenPoints:function(a,b){return Math.atan2(b.x-a.x,b.y-a.y)},reverseAngle:function(a){return this.normalizeAngle(a+Math.PI,!0)},normalizeAngle:function(a){return a%=2*Math.PI,a>=0?a:a+2*Math.PI},normalizeLatitude:function(a){return Math.max(-90,Math.min(90,a))},normalizeLongitude:function(a){return a%360==180?180:(a%=360,-180>a?a+360:a>180?a-360:a)},nearestAngleBetween:function(a,b,c){"undefined"==typeof c&&(c=!0);var d=c?Math.PI:180;return a=this.normalizeAngle(a,c),b=this.normalizeAngle(b,c),-d/2>a&&b>d/2&&(a+=2*d),-d/2>b&&a>d/2&&(b+=2*d),b-a},interpolateAngles:function(a,b,c,d,e){return"undefined"==typeof d&&(d=!0),"undefined"==typeof e&&(e=null),a=this.normalizeAngle(a,d),b=this.normalizeAngleToAnother(b,a,d),"function"==typeof e?e(c,a,b-a,1):this.interpolateFloat(a,b,c)},chanceRoll:function(a){return"undefined"==typeof a&&(a=50),0>=a?!1:a>=100?!0:100*Math.random()>=a?!1:!0},numberArray:function(a,b){for(var c=[],d=a;b>=d;d++)c.push(d);return c},maxAdd:function(a,b,c){return a+=b,a>c&&(a=c),a},minSub:function(a,b,c){return a-=b,c>a&&(a=c),a},wrap:function(a,b,c){var d=c-b;if(0>=d)return 0;var e=(a-b)%d;return 0>e&&(e+=d),e+b},wrapValue:function(a,b,c){var d;return a=Math.abs(a),b=Math.abs(b),c=Math.abs(c),d=(a+b)%c},randomSign:function(){return Math.random()>.5?1:-1},isOdd:function(a){return 1&a},isEven:function(a){return 1&a?!1:!0},min:function(){if(1===arguments.length&&"object"==typeof arguments[0])var a=arguments[0];else var a=arguments;for(var b=1,c=0,d=a.length;d>b;b++)a[b]<a[c]&&(c=b);return a[c]},max:function(){if(1===arguments.length&&"object"==typeof arguments[0])var a=arguments[0];else var a=arguments;for(var b=1,c=0,d=a.length;d>b;b++)a[b]>a[c]&&(c=b);return a[c]},minProperty:function(a){if(2===arguments.length&&"object"==typeof arguments[1])var b=arguments[1];else var b=arguments.slice(1);for(var c=1,d=0,e=b.length;e>c;c++)b[c][a]<b[d][a]&&(d=c);return b[d][a]},maxProperty:function(a){if(2===arguments.length&&"object"==typeof arguments[1])var b=arguments[1];else var b=arguments.slice(1);for(var c=1,d=0,e=b.length;e>c;c++)b[c][a]>b[d][a]&&(d=c);return b[d][a]},wrapAngle:function(a,b){var c=b?Math.PI/180:1;return this.wrap(a,-180*c,180*c)},angleLimit:function(a,b,c){var d=a;return a>c?d=c:b>a&&(d=b),d},linearInterpolation:function(a,b){var c=a.length-1,d=c*b,e=Math.floor(d);return 0>b?this.linear(a[0],a[1],d):b>1?this.linear(a[c],a[c-1],c-d):this.linear(a[e],a[e+1>c?c:e+1],d-e)},bezierInterpolation:function(a,b){for(var c=0,d=a.length-1,e=0;d>=e;e++)c+=Math.pow(1-b,d-e)*Math.pow(b,e)*a[e]*this.bernstein(d,e);return c},catmullRomInterpolation:function(a,b){var c=a.length-1,d=c*b,e=Math.floor(d);return a[0]===a[c]?(0>b&&(e=Math.floor(d=c*(1+b))),this.catmullRom(a[(e-1+c)%c],a[e],a[(e+1)%c],a[(e+2)%c],d-e)):0>b?a[0]-(this.catmullRom(a[0],a[0],a[1],a[1],-d)-a[0]):b>1?a[c]-(this.catmullRom(a[c],a[c],a[c-1],a[c-1],d-c)-a[c]):this.catmullRom(a[e?e-1:0],a[e],a[e+1>c?c:e+1],a[e+2>c?c:e+2],d-e)},linear:function(a,b,c){return(b-a)*c+a},bernstein:function(a,b){return this.factorial(a)/this.factorial(b)/this.factorial(a-b)},catmullRom:function(a,b,c,d,e){var f=.5*(c-a),g=.5*(d-b),h=e*e,i=e*h;return(2*b-2*c+f+g)*i+(-3*b+3*c-2*f-g)*h+f*e+b},difference:function(a,b){return Math.abs(a-b)},getRandom:function(a,b,c){if("undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=0),null!=a){var d=c;if((0===d||d>a.length-b)&&(d=a.length-b),d>0)return a[b+Math.floor(Math.random()*d)]}return null},removeRandom:function(a,b,c){if("undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=0),null!=a){var d=c;if((0===d||d>a.length-b)&&(d=a.length-b),d>0){var e=b+Math.floor(Math.random()*d),f=a.splice(e,1);return f[0]}}return null},floor:function(a){var b=0|a;return a>0?b:b!=a?b-1:b},ceil:function(a){var b=0|a;return a>0?b!=a?b+1:b:b},sinCosGenerator:function(a,b,c,d){"undefined"==typeof b&&(b=1),"undefined"==typeof c&&(c=1),"undefined"==typeof d&&(d=1);for(var e=b,f=c,g=d*Math.PI/a,h=[],i=[],j=0;a>j;j++)f-=e*g,e+=f*g,h[j]=f,i[j]=e;return{sin:i,cos:h,length:a}},shift:function(a){var b=a.shift();return a.push(b),b},shuffleArray:function(a){for(var b=a.length-1;b>0;b--){var c=Math.floor(Math.random()*(b+1)),d=a[b];a[b]=a[c],a[c]=d}return a},distance:function(a,b,c,d){var e=a-c,f=b-d;return Math.sqrt(e*e+f*f)},distancePow:function(a,b,c,d,e){return"undefined"==typeof e&&(e=2),Math.sqrt(Math.pow(c-a,e)+Math.pow(d-b,e))},distanceRounded:function(a,c,d,e){return Math.round(b.Math.distance(a,c,d,e))},clamp:function(a,b,c){return b>a?b:a>c?c:a},clampBottom:function(a,b){return b>a?b:a},within:function(a,b,c){return Math.abs(a-b)<=c},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},smoothstep:function(a,b,c){return b>=a?0:a>=c?1:(a=(a-b)/(c-b),a*a*(3-2*a))},smootherstep:function(a,b,c){return b>=a?0:a>=c?1:(a=(a-b)/(c-b),a*a*a*(a*(6*a-15)+10))},sign:function(a){return 0>a?-1:a>0?1:0},degToRad:function(){var a=Math.PI/180;return function(b){return b*a}}(),radToDeg:function(){var a=180/Math.PI;return function(b){return b*a}}()},b.RandomDataGenerator=function(a){"undefined"==typeof a&&(a=[]),this.c=1,this.s0=0,this.s1=0,this.s2=0,this.sow(a)},b.RandomDataGenerator.prototype={rnd:function(){var a=2091639*this.s0+2.3283064365386963e-10*this.c;return this.c=0|a,this.s0=this.s1,this.s1=this.s2,this.s2=a-this.c,this.s2},sow:function(a){"undefined"==typeof a&&(a=[]),this.s0=this.hash(" "),this.s1=this.hash(this.s0),this.s2=this.hash(this.s1),this.c=1;for(var b,c=0;b=a[c++];)this.s0-=this.hash(b),this.s0+=~~(this.s0<0),this.s1-=this.hash(b),this.s1+=~~(this.s1<0),this.s2-=this.hash(b),this.s2+=~~(this.s2<0)},hash:function(a){var b,c,d;for(d=4022871197,a=a.toString(),c=0;c<a.length;c++)d+=a.charCodeAt(c),b=.02519603282416938*d,d=b>>>0,b-=d,b*=d,d=b>>>0,b-=d,d+=4294967296*b;return 2.3283064365386963e-10*(d>>>0)},integer:function(){return 4294967296*this.rnd.apply(this)},frac:function(){return this.rnd.apply(this)+1.1102230246251565e-16*(2097152*this.rnd.apply(this)|0)},real:function(){return this.integer()+this.frac()},integerInRange:function(a,b){return Math.round(this.realInRange(a,b))},realInRange:function(a,b){return this.frac()*(b-a)+a},normal:function(){return 1-2*this.frac()},uuid:function(){var a="",b="";for(b=a="";a++<36;b+=~a%5|3*a&4?(15^a?8^this.frac()*(20^a?16:4):4).toString(16):"-");return b},pick:function(a){return a[this.integerInRange(0,a.length-1)]},weightedPick:function(a){return a[~~(Math.pow(this.frac(),2)*(a.length-1))]},timestamp:function(a,b){return this.realInRange(a||9466848e5,b||1577862e6)},angle:function(){return this.integerInRange(-180,180)}},b.RandomDataGenerator.prototype.constructor=b.RandomDataGenerator,b.QuadTree=function(a,b,c,d,e,f,g){this.maxObjects=10,this.maxLevels=4,this.level=0,this.bounds={},this.objects=[],this.nodes=[],this.reset(a,b,c,d,e,f,g)},b.QuadTree.prototype={reset:function(a,b,c,d,e,f,g){this.maxObjects=e||10,this.maxLevels=f||4,this.level=g||0,this.bounds={x:Math.round(a),y:Math.round(b),width:c,height:d,subWidth:Math.floor(c/2),subHeight:Math.floor(d/2),right:Math.round(a)+Math.floor(c/2),bottom:Math.round(b)+Math.floor(d/2)},this.objects.length=0,this.nodes.length=0},populate:function(a){a.forEach(this.populateHandler,this,!0)},populateHandler:function(a){a.body&&a.exists&&this.insert(a.body)},split:function(){this.level++,this.nodes[0]=new b.QuadTree(this.bounds.right,this.bounds.y,this.bounds.subWidth,this.bounds.subHeight,this.maxObjects,this.maxLevels,this.level),this.nodes[1]=new b.QuadTree(this.bounds.x,this.bounds.y,this.bounds.subWidth,this.bounds.subHeight,this.maxObjects,this.maxLevels,this.level),this.nodes[2]=new b.QuadTree(this.bounds.x,this.bounds.bottom,this.bounds.subWidth,this.bounds.subHeight,this.maxObjects,this.maxLevels,this.level),this.nodes[3]=new b.QuadTree(this.bounds.right,this.bounds.bottom,this.bounds.subWidth,this.bounds.subHeight,this.maxObjects,this.maxLevels,this.level)},insert:function(a){var b,c=0;if(null!=this.nodes[0]&&(b=this.getIndex(a),-1!==b))return void this.nodes[b].insert(a);if(this.objects.push(a),this.objects.length>this.maxObjects&&this.level<this.maxLevels)for(null==this.nodes[0]&&this.split();c<this.objects.length;)b=this.getIndex(this.objects[c]),-1!==b?this.nodes[b].insert(this.objects.splice(c,1)[0]):c++},getIndex:function(a){var b=-1;return a.x<this.bounds.right&&a.right<this.bounds.right?a.y<this.bounds.bottom&&a.bottom<this.bounds.bottom?b=1:a.y>this.bounds.bottom&&(b=2):a.x>this.bounds.right&&(a.y<this.bounds.bottom&&a.bottom<this.bounds.bottom?b=0:a.y>this.bounds.bottom&&(b=3)),b},retrieve:function(a){var b=this.objects,c=this.getIndex(a.body);return this.nodes[0]&&(-1!==c?b=b.concat(this.nodes[c].retrieve(a)):(b=b.concat(this.nodes[0].retrieve(a)),b=b.concat(this.nodes[1].retrieve(a)),b=b.concat(this.nodes[2].retrieve(a)),b=b.concat(this.nodes[3].retrieve(a)))),b},clear:function(){this.objects.length=0;for(var a=this.nodes.length;a--;)this.nodes[a].clear(),this.nodes.splice(a,1);this.nodes.length=0}},b.QuadTree.prototype.constructor=b.QuadTree,b.Net=function(a){this.game=a},b.Net.prototype={getHostName:function(){return window.location&&window.location.hostname?window.location.hostname:null},checkDomainName:function(a){return-1!==window.location.hostname.indexOf(a)},updateQueryString:function(a,b,c,d){"undefined"==typeof c&&(c=!1),("undefined"==typeof d||""===d)&&(d=window.location.href);var e="",f=new RegExp("([?|&])"+a+"=.*?(&|#|$)(.*)","gi");if(f.test(d))e="undefined"!=typeof b&&null!==b?d.replace(f,"$1"+a+"="+b+"$2$3"):d.replace(f,"$1$3").replace(/(&|\?)$/,"");else if("undefined"!=typeof b&&null!==b){var g=-1!==d.indexOf("?")?"&":"?",h=d.split("#");d=h[0]+g+a+"="+b,h[1]&&(d+="#"+h[1]),e=d}else e=d;return c?void(window.location.href=e):e},getQueryString:function(a){"undefined"==typeof a&&(a="");var b={},c=location.search.substring(1).split("&");for(var d in c){var e=c[d].split("=");if(e.length>1){if(a&&a==this.decodeURI(e[0]))return this.decodeURI(e[1]);b[this.decodeURI(e[0])]=this.decodeURI(e[1])}}return b},decodeURI:function(a){return decodeURIComponent(a.replace(/\+/g," "))}},b.Net.prototype.constructor=b.Net,b.TweenManager=function(a){this.game=a,this._tweens=[],this._add=[],this.game.onPause.add(this._pauseAll,this),this.game.onResume.add(this._resumeAll,this)},b.TweenManager.prototype={getAll:function(){return this._tweens},removeAll:function(){for(var a=0;a<this._tweens.length;a++)this._tweens[a].pendingDelete=!0;this._add=[]},add:function(a){a._manager=this,this._add.push(a)
},create:function(a){return new b.Tween(a,this.game,this)},remove:function(a){var b=this._tweens.indexOf(a);-1!==b&&(this._tweens[b].pendingDelete=!0)},update:function(){if(0===this._tweens.length&&0===this._add.length)return!1;for(var a=0,b=this._tweens.length;b>a;)this._tweens[a].update(this.game.time.now)?a++:(this._tweens.splice(a,1),b--);return this._add.length>0&&(this._tweens=this._tweens.concat(this._add),this._add.length=0),!0},isTweening:function(a){return this._tweens.some(function(b){return b._object===a})},_pauseAll:function(){for(var a=this._tweens.length-1;a>=0;a--)this._tweens[a]._pause()},_resumeAll:function(){for(var a=this._tweens.length-1;a>=0;a--)this._tweens[a]._resume()},pauseAll:function(){for(var a=this._tweens.length-1;a>=0;a--)this._tweens[a].pause()},resumeAll:function(){for(var a=this._tweens.length-1;a>=0;a--)this._tweens[a].resume(!0)}},b.TweenManager.prototype.constructor=b.TweenManager,b.Tween=function(a,c,d){this._object=a,this.game=c,this._manager=d,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._yoyo=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=b.Easing.Linear.None,this._interpolationFunction=b.Math.linearInterpolation,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onUpdateCallbackContext=null,this._paused=!1,this._pausedTime=0,this._codePaused=!1,this.pendingDelete=!1,this.onStart=new b.Signal,this.onLoop=new b.Signal,this.onComplete=new b.Signal,this.isRunning=!1},b.Tween.prototype={to:function(a,b,c,d,e,f,g){b=b||1e3,c=c||null,d=d||!1,e=e||0,f=f||0,g=g||!1;var h;return this._parent?(h=this._manager.create(this._object),this._lastChild.chain(h),this._lastChild=h):(h=this,this._parent=this,this._lastChild=this),h._repeat=f,h._duration=b,h._valuesEnd=a,null!==c&&(h._easingFunction=c),e>0&&(h._delayTime=e),h._yoyo=g,d?this.start():this},start:function(){if(null!==this.game&&null!==this._object){this._manager.add(this),this.isRunning=!0,this._onStartCallbackFired=!1,this._startTime=this.game.time.now+this._delayTime;for(var a in this._valuesEnd){if(Array.isArray(this._valuesEnd[a])){if(0===this._valuesEnd[a].length)continue;this._valuesEnd[a]=[this._object[a]].concat(this._valuesEnd[a])}this._valuesStart[a]=this._object[a],Array.isArray(this._valuesStart[a])||(this._valuesStart[a]*=1),this._valuesStartRepeat[a]=this._valuesStart[a]||0}return this}},generateData:function(a,b){if(null===this.game||null===this._object)return null;this._startTime=0;for(var c in this._valuesEnd){if(Array.isArray(this._valuesEnd[c])){if(0===this._valuesEnd[c].length)continue;this._valuesEnd[c]=[this._object[c]].concat(this._valuesEnd[c])}this._valuesStart[c]=this._object[c],Array.isArray(this._valuesStart[c])||(this._valuesStart[c]*=1),this._valuesStartRepeat[c]=this._valuesStart[c]||0}for(var d=0,e=Math.floor(a*(this._duration/1e3)),f=this._duration/e,g=[];e--;){var c,h=(d-this._startTime)/this._duration;h=h>1?1:h;var i=this._easingFunction(h),j={};for(c in this._valuesEnd){var k=this._valuesStart[c]||0,l=this._valuesEnd[c];l instanceof Array?j[c]=this._interpolationFunction(l,i):("string"==typeof l&&(l=k+parseFloat(l,10)),"number"==typeof l&&(j[c]=k+(l-k)*i))}g.push(j),d+=f}if(this._yoyo){var m=g.slice();m.reverse(),g=g.concat(m)}return"undefined"!=typeof b?b=b.concat(g):g},stop:function(){return this.isRunning=!1,this._onUpdateCallback=null,this._manager.remove(this),this},delay:function(a){return this._delayTime=a,this},repeat:function(a){return this._repeat=a,this},yoyo:function(a){return this._yoyo=a,this},easing:function(a){return this._easingFunction=a,this},interpolation:function(a){return this._interpolationFunction=a,this},chain:function(){return this._chainedTweens=arguments,this},loop:function(){return this._lastChild.chain(this),this},onUpdateCallback:function(a,b){return this._onUpdateCallback=a,this._onUpdateCallbackContext=b,this},pause:function(){this._codePaused=!0,this._paused=!0,this._pausedTime=this.game.time.now},_pause:function(){this._codePaused||(this._paused=!0,this._pausedTime=this.game.time.now)},resume:function(){this._paused&&(this._paused=!1,this._codePaused=!1,this._startTime+=this.game.time.now-this._pausedTime)},_resume:function(){this._codePaused||(this._startTime+=this.game.time.pauseDuration,this._paused=!1)},update:function(a){if(this.pendingDelete)return!1;if(this._paused||a<this._startTime)return!0;var b;if(a<this._startTime)return!0;this._onStartCallbackFired===!1&&(this.onStart.dispatch(this._object),this._onStartCallbackFired=!0);var c=(a-this._startTime)/this._duration;c=c>1?1:c;var d=this._easingFunction(c);for(b in this._valuesEnd){var e=this._valuesStart[b]||0,f=this._valuesEnd[b];f instanceof Array?this._object[b]=this._interpolationFunction(f,d):("string"==typeof f&&(f=e+parseFloat(f,10)),"number"==typeof f&&(this._object[b]=e+(f-e)*d))}if(null!==this._onUpdateCallback&&this._onUpdateCallback.call(this._onUpdateCallbackContext,this,d),1==c){if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(b in this._valuesStartRepeat){if("string"==typeof this._valuesEnd[b]&&(this._valuesStartRepeat[b]=this._valuesStartRepeat[b]+parseFloat(this._valuesEnd[b],10)),this._yoyo){var g=this._valuesStartRepeat[b];this._valuesStartRepeat[b]=this._valuesEnd[b],this._valuesEnd[b]=g,this._reversed=!this._reversed}this._valuesStart[b]=this._valuesStartRepeat[b]}return this._startTime=a+this._delayTime,this.onLoop.dispatch(this._object),!0}this.isRunning=!1,this.onComplete.dispatch(this._object);for(var h=0,i=this._chainedTweens.length;i>h;h++)this._chainedTweens[h].start(a);return!1}return!0}},b.Tween.prototype.constructor=b.Tween,b.Easing={Linear:{None:function(a){return a}},Quadratic:{In:function(a){return a*a},Out:function(a){return a*(2-a)},InOut:function(a){return(a*=2)<1?.5*a*a:-.5*(--a*(a-2)-1)}},Cubic:{In:function(a){return a*a*a},Out:function(a){return--a*a*a+1},InOut:function(a){return(a*=2)<1?.5*a*a*a:.5*((a-=2)*a*a+2)}},Quartic:{In:function(a){return a*a*a*a},Out:function(a){return 1- --a*a*a*a},InOut:function(a){return(a*=2)<1?.5*a*a*a*a:-.5*((a-=2)*a*a*a-2)}},Quintic:{In:function(a){return a*a*a*a*a},Out:function(a){return--a*a*a*a*a+1},InOut:function(a){return(a*=2)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2)}},Sinusoidal:{In:function(a){return 1-Math.cos(a*Math.PI/2)},Out:function(a){return Math.sin(a*Math.PI/2)},InOut:function(a){return.5*(1-Math.cos(Math.PI*a))}},Exponential:{In:function(a){return 0===a?0:Math.pow(1024,a-1)},Out:function(a){return 1===a?1:1-Math.pow(2,-10*a)},InOut:function(a){return 0===a?0:1===a?1:(a*=2)<1?.5*Math.pow(1024,a-1):.5*(-Math.pow(2,-10*(a-1))+2)}},Circular:{In:function(a){return 1-Math.sqrt(1-a*a)},Out:function(a){return Math.sqrt(1- --a*a)},InOut:function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)}},Elastic:{In:function(a){var b,c=.1,d=.4;return 0===a?0:1===a?1:(!c||1>c?(c=1,b=d/4):b=d*Math.asin(1/c)/(2*Math.PI),-(c*Math.pow(2,10*(a-=1))*Math.sin(2*(a-b)*Math.PI/d)))},Out:function(a){var b,c=.1,d=.4;return 0===a?0:1===a?1:(!c||1>c?(c=1,b=d/4):b=d*Math.asin(1/c)/(2*Math.PI),c*Math.pow(2,-10*a)*Math.sin(2*(a-b)*Math.PI/d)+1)},InOut:function(a){var b,c=.1,d=.4;return 0===a?0:1===a?1:(!c||1>c?(c=1,b=d/4):b=d*Math.asin(1/c)/(2*Math.PI),(a*=2)<1?-.5*c*Math.pow(2,10*(a-=1))*Math.sin(2*(a-b)*Math.PI/d):c*Math.pow(2,-10*(a-=1))*Math.sin(2*(a-b)*Math.PI/d)*.5+1)}},Back:{In:function(a){var b=1.70158;return a*a*((b+1)*a-b)},Out:function(a){var b=1.70158;return--a*a*((b+1)*a+b)+1},InOut:function(a){var b=2.5949095;return(a*=2)<1?.5*a*a*((b+1)*a-b):.5*((a-=2)*a*((b+1)*a+b)+2)}},Bounce:{In:function(a){return 1-b.Easing.Bounce.Out(1-a)},Out:function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},InOut:function(a){return.5>a?.5*b.Easing.Bounce.In(2*a):.5*b.Easing.Bounce.Out(2*a-1)+.5}}},b.Time=function(a){this.game=a,this.time=0,this.now=0,this.elapsed=0,this.pausedTime=0,this.advancedTiming=!1,this.fps=0,this.fpsMin=1e3,this.fpsMax=0,this.msMin=1e3,this.msMax=0,this.physicsElapsed=0,this.deltaCap=0,this.frames=0,this.pauseDuration=0,this.timeToCall=0,this.lastTime=0,this.events=new b.Timer(this.game,!1),this._started=0,this._timeLastSecond=0,this._pauseStarted=0,this._justResumed=!1,this._timers=[],this._len=0,this._i=0},b.Time.prototype={boot:function(){this._started=Date.now(),this.events.start()},create:function(a){"undefined"==typeof a&&(a=!0);var c=new b.Timer(this.game,a);return this._timers.push(c),c},removeAll:function(){for(var a=0;a<this._timers.length;a++)this._timers[a].destroy();this._timers=[],this.events.removeAll()},update:function(a){if(this.now=a,this._justResumed){this.time=this.now,this._justResumed=!1,this.events.resume();for(var b=0;b<this._timers.length;b++)this._timers[b]._resume()}if(this.timeToCall=this.game.math.max(0,16-(a-this.lastTime)),this.elapsed=this.now-this.time,this.physicsElapsed=this.elapsed/1e3,this.deltaCap>0&&this.physicsElapsed>this.deltaCap&&(this.physicsElapsed=this.deltaCap),this.advancedTiming&&(this.msMin=this.game.math.min(this.msMin,this.elapsed),this.msMax=this.game.math.max(this.msMax,this.elapsed),this.frames++,this.now>this._timeLastSecond+1e3&&(this.fps=Math.round(1e3*this.frames/(this.now-this._timeLastSecond)),this.fpsMin=this.game.math.min(this.fpsMin,this.fps),this.fpsMax=this.game.math.max(this.fpsMax,this.fps),this._timeLastSecond=this.now,this.frames=0)),this.time=this.now,this.lastTime=a+this.timeToCall,!this.game.paused)for(this.events.update(this.now),this._i=0,this._len=this._timers.length;this._i<this._len;)this._timers[this._i].update(this.now)?this._i++:(this._timers.splice(this._i,1),this._len--)},gamePaused:function(){this._pauseStarted=this.now,this.events.pause();for(var a=this._timers.length;a--;)this._timers[a]._pause()},gameResumed:function(){this.pauseDuration=Date.now()-this._pauseStarted,this.time=Date.now(),this._justResumed=!0},totalElapsedSeconds:function(){return.001*(this.now-this._started)},elapsedSince:function(a){return this.now-a},elapsedSecondsSince:function(a){return.001*(this.now-a)},reset:function(){this._started=this.now,this.removeAll()}},b.Time.prototype.constructor=b.Time,b.Timer=function(a,c){"undefined"==typeof c&&(c=!0),this.game=a,this.running=!1,this.autoDestroy=c,this.expired=!1,this.events=[],this.onComplete=new b.Signal,this.nextTick=0,this.paused=!1,this._codePaused=!1,this._started=0,this._pauseStarted=0,this._pauseTotal=0,this._now=0,this._len=0,this._i=0},b.Timer.MINUTE=6e4,b.Timer.SECOND=1e3,b.Timer.HALF=500,b.Timer.QUARTER=250,b.Timer.prototype={create:function(a,c,d,e,f,g){var h=a;h+=0===this._now?this.game.time.now:this._now;var i=new b.TimerEvent(this,a,h,d,c,e,f,g);return this.events.push(i),this.order(),this.expired=!1,i},add:function(a,b,c){return this.create(a,!1,0,b,c,Array.prototype.splice.call(arguments,3))},repeat:function(a,b,c,d){return this.create(a,!1,b,c,d,Array.prototype.splice.call(arguments,4))},loop:function(a,b,c){return this.create(a,!0,0,b,c,Array.prototype.splice.call(arguments,3))},start:function(){if(!this.running){this._started=this.game.time.now,this.running=!0;for(var a=0;a<this.events.length;a++)this.events[a].tick=this.events[a].delay+this._started}},stop:function(a){this.running=!1,"undefined"==typeof a&&(a=!0),a&&(this.events.length=0)},remove:function(a){for(var b=0;b<this.events.length;b++)if(this.events[b]===a)return this.events[b].pendingDelete=!0,!0;return!1},order:function(){this.events.length>0&&(this.events.sort(this.sortHandler),this.nextTick=this.events[0].tick)},sortHandler:function(a,b){return a.tick<b.tick?-1:a.tick>b.tick?1:0},update:function(a){if(this.paused)return!0;for(this._now=a,this._len=this.events.length,this._i=0;this._i<this._len;)this.events[this._i].pendingDelete&&(this.events.splice(this._i,1),this._len--),this._i++;if(this._len=this.events.length,this.running&&this._now>=this.nextTick&&this._len>0){for(this._i=0;this._i<this._len&&this.running&&this._now>=this.events[this._i].tick;){var b=this._now-this.events[this._i].tick,c=this._now+this.events[this._i].delay-b;0>c&&(c=this._now+this.events[this._i].delay),this.events[this._i].loop===!0?(this.events[this._i].tick=c,this.events[this._i].callback.apply(this.events[this._i].callbackContext,this.events[this._i].args)):this.events[this._i].repeatCount>0?(this.events[this._i].repeatCount--,this.events[this._i].tick=c,this.events[this._i].callback.apply(this.events[this._i].callbackContext,this.events[this._i].args)):(this.events[this._i].callback.apply(this.events[this._i].callbackContext,this.events[this._i].args),this.events.splice(this._i,1),this._len--),this._i++}this.events.length>0?this.order():(this.expired=!0,this.onComplete.dispatch(this))}return this.expired&&this.autoDestroy?!1:!0},pause:function(){this.running&&!this.expired&&(this._pauseStarted=this.game.time.now,this.paused=!0,this._codePaused=!0)},_pause:function(){this.running&&!this.expired&&(this._pauseStarted=this.game.time.now,this.paused=!0)},resume:function(){if(this.running&&!this.expired){var a=this.game.time.now-this._pauseStarted;this._pauseTotal+=a;for(var b=0;b<this.events.length;b++)this.events[b].tick+=a;this.nextTick+=a,this.paused=!1,this._codePaused=!1}},_resume:function(){this._codePaused||this.resume()},removeAll:function(){this.onComplete.removeAll(),this.events.length=0,this._len=0,this._i=0},destroy:function(){this.onComplete.removeAll(),this.running=!1,this.events=[],this._len=0,this._i=0}},Object.defineProperty(b.Timer.prototype,"next",{get:function(){return this.nextTick}}),Object.defineProperty(b.Timer.prototype,"duration",{get:function(){return this.running&&this.nextTick>this._now?this.nextTick-this._now:0}}),Object.defineProperty(b.Timer.prototype,"length",{get:function(){return this.events.length}}),Object.defineProperty(b.Timer.prototype,"ms",{get:function(){return this._now-this._started-this._pauseTotal}}),Object.defineProperty(b.Timer.prototype,"seconds",{get:function(){return.001*this.ms}}),b.Timer.prototype.constructor=b.Timer,b.TimerEvent=function(a,b,c,d,e,f,g,h){this.timer=a,this.delay=b,this.tick=c,this.repeatCount=d-1,this.loop=e,this.callback=f,this.callbackContext=g,this.args=h,this.pendingDelete=!1},b.TimerEvent.prototype.constructor=b.TimerEvent,b.AnimationManager=function(a){this.sprite=a,this.game=a.game,this.currentFrame=null,this.updateIfVisible=!0,this.isLoaded=!1,this._frameData=null,this._anims={},this._outputFrames=[]},b.AnimationManager.prototype={loadFrameData:function(a){this._frameData=a,this.frame=0,this.isLoaded=!0},add:function(a,c,d,e,f){return null==this._frameData?void console.warn("No FrameData available for Phaser.Animation "+a):(c=c||[],d=d||60,"undefined"==typeof e&&(e=!1),"undefined"==typeof f&&(f=c&&"number"==typeof c[0]?!0:!1),null==this.sprite.events.onAnimationStart&&(this.sprite.events.onAnimationStart=new b.Signal,this.sprite.events.onAnimationComplete=new b.Signal,this.sprite.events.onAnimationLoop=new b.Signal),this._outputFrames.length=0,this._frameData.getFrameIndexes(c,f,this._outputFrames),this._anims[a]=new b.Animation(this.game,this.sprite,a,this._frameData,this._outputFrames,d,e),this.currentAnim=this._anims[a],this.currentFrame=this.currentAnim.currentFrame,this.sprite.setTexture(PIXI.TextureCache[this.currentFrame.uuid]),this.sprite.__tilePattern&&(this.__tilePattern=!1,this.tilingTexture=!1),this._anims[a])},validateFrames:function(a,b){"undefined"==typeof b&&(b=!0);for(var c=0;c<a.length;c++)if(b===!0){if(a[c]>this._frameData.total)return!1}else if(this._frameData.checkFrameName(a[c])===!1)return!1;return!0},play:function(a,b,c,d){if(this._anims[a]){if(this.currentAnim!=this._anims[a])return this.currentAnim=this._anims[a],this.currentAnim.paused=!1,this.currentAnim.play(b,c,d);if(this.currentAnim.isPlaying===!1)return this.currentAnim.paused=!1,this.currentAnim.play(b,c,d)}},stop:function(a,b){"undefined"==typeof b&&(b=!1),"string"==typeof a?this._anims[a]&&(this.currentAnim=this._anims[a],this.currentAnim.stop(b)):this.currentAnim&&this.currentAnim.stop(b)},update:function(){return this.updateIfVisible&&!this.sprite.visible?!1:this.currentAnim&&this.currentAnim.update()===!0?(this.currentFrame=this.currentAnim.currentFrame,!0):!1},getAnimation:function(a){return"string"==typeof a&&this._anims[a]?this._anims[a]:null},refreshFrame:function(){this.sprite.setTexture(PIXI.TextureCache[this.currentFrame.uuid]),this.sprite.__tilePattern&&(this.__tilePattern=!1,this.tilingTexture=!1)},destroy:function(){this._anims={},this._frameData=null,this._frameIndex=0,this.currentAnim=null,this.currentFrame=null}},b.AnimationManager.prototype.constructor=b.AnimationManager,Object.defineProperty(b.AnimationManager.prototype,"frameData",{get:function(){return this._frameData}}),Object.defineProperty(b.AnimationManager.prototype,"frameTotal",{get:function(){return this._frameData?this._frameData.total:-1}}),Object.defineProperty(b.AnimationManager.prototype,"paused",{get:function(){return this.currentAnim.isPaused},set:function(a){this.currentAnim.paused=a}}),Object.defineProperty(b.AnimationManager.prototype,"frame",{get:function(){return this.currentFrame?this._frameIndex:void 0},set:function(a){"number"==typeof a&&this._frameData&&null!==this._frameData.getFrame(a)&&(this.currentFrame=this._frameData.getFrame(a),this.currentFrame&&(this._frameIndex=a,this.sprite.setTexture(PIXI.TextureCache[this.currentFrame.uuid]),this.sprite.__tilePattern&&(this.__tilePattern=!1,this.tilingTexture=!1)))}}),Object.defineProperty(b.AnimationManager.prototype,"frameName",{get:function(){return this.currentFrame?this.currentFrame.name:void 0},set:function(a){"string"==typeof a&&this._frameData&&null!==this._frameData.getFrameByName(a)?(this.currentFrame=this._frameData.getFrameByName(a),this.currentFrame&&(this._frameIndex=this.currentFrame.index,this.sprite.setTexture(PIXI.TextureCache[this.currentFrame.uuid]),this.sprite.__tilePattern&&(this.__tilePattern=!1,this.tilingTexture=!1))):console.warn("Cannot set frameName: "+a)}}),b.Animation=function(a,c,d,e,f,g,h){this.game=a,this._parent=c,this._frameData=e,this.name=d,this._frames=[],this._frames=this._frames.concat(f),this.delay=1e3/g,this.loop=h,this.loopCount=0,this.killOnComplete=!1,this.isFinished=!1,this.isPlaying=!1,this.isPaused=!1,this._pauseStartTime=0,this._frameIndex=0,this._frameDiff=0,this._frameSkip=1,this.currentFrame=this._frameData.getFrame(this._frames[this._frameIndex]),this.onStart=new b.Signal,this.onComplete=new b.Signal,this.onLoop=new b.Signal,this.game.onPause.add(this.onPause,this),this.game.onResume.add(this.onResume,this)},b.Animation.prototype={play:function(a,b,c){return"number"==typeof a&&(this.delay=1e3/a),"boolean"==typeof b&&(this.loop=b),"undefined"!=typeof c&&(this.killOnComplete=c),this.isPlaying=!0,this.isFinished=!1,this.paused=!1,this.loopCount=0,this._timeLastFrame=this.game.time.now,this._timeNextFrame=this.game.time.now+this.delay,this._frameIndex=0,this.currentFrame=this._frameData.getFrame(this._frames[this._frameIndex]),this._parent.setTexture(PIXI.TextureCache[this.currentFrame.uuid]),this._parent.__tilePattern&&(this._parent.__tilePattern=!1,this._parent.tilingTexture=!1),this._parent.events.onAnimationStart.dispatch(this._parent,this),this.onStart.dispatch(this._parent,this),this},restart:function(){this.isPlaying=!0,this.isFinished=!1,this.paused=!1,this.loopCount=0,this._timeLastFrame=this.game.time.now,this._timeNextFrame=this.game.time.now+this.delay,this._frameIndex=0,this.currentFrame=this._frameData.getFrame(this._frames[this._frameIndex]),this.onStart.dispatch(this._parent,this)},stop:function(a,b){"undefined"==typeof a&&(a=!1),"undefined"==typeof b&&(b=!1),this.isPlaying=!1,this.isFinished=!0,this.paused=!1,a&&(this.currentFrame=this._frameData.getFrame(this._frames[0])),b&&(this._parent.events.onAnimationComplete.dispatch(this._parent,this),this.onComplete.dispatch(this._parent,this))},onPause:function(){this.isPlaying&&(this._frameDiff=this._timeNextFrame-this.game.time.now)},onResume:function(){this.isPlaying&&(this._timeNextFrame=this.game.time.now+this._frameDiff)},update:function(){return this.isPaused?!1:this.isPlaying===!0&&this.game.time.now>=this._timeNextFrame?(this._frameSkip=1,this._frameDiff=this.game.time.now-this._timeNextFrame,this._timeLastFrame=this.game.time.now,this._frameDiff>this.delay&&(this._frameSkip=Math.floor(this._frameDiff/this.delay),this._frameDiff-=this._frameSkip*this.delay),this._timeNextFrame=this.game.time.now+(this.delay-this._frameDiff),this._frameIndex+=this._frameSkip,this._frameIndex>=this._frames.length?this.loop?(this._frameIndex%=this._frames.length,this.currentFrame=this._frameData.getFrame(this._frames[this._frameIndex]),this.currentFrame&&(this._parent.setTexture(PIXI.TextureCache[this.currentFrame.uuid]),this._parent.__tilePattern&&(this._parent.__tilePattern=!1,this._parent.tilingTexture=!1)),this.loopCount++,this._parent.events.onAnimationLoop.dispatch(this._parent,this),this.onLoop.dispatch(this._parent,this)):this.complete():(this.currentFrame=this._frameData.getFrame(this._frames[this._frameIndex]),this.currentFrame&&(this._parent.setTexture(PIXI.TextureCache[this.currentFrame.uuid]),this._parent.__tilePattern&&(this._parent.__tilePattern=!1,this._parent.tilingTexture=!1))),!0):!1},destroy:function(){this.game=null,this._parent=null,this._frames=null,this._frameData=null,this.currentFrame=null,this.isPlaying=!1,this.onStart.destroy(),this.onLoop.destroy(),this.onComplete.destroy(),this.game.onPause.remove(this.onPause,this),this.game.onResume.remove(this.onResume,this)},complete:function(){this.isPlaying=!1,this.isFinished=!0,this.paused=!1,this._parent.events.onAnimationComplete.dispatch(this._parent,this),this.onComplete.dispatch(this._parent,this),this.killOnComplete&&this._parent.kill()}},b.Animation.prototype.constructor=b.Animation,Object.defineProperty(b.Animation.prototype,"paused",{get:function(){return this.isPaused},set:function(a){this.isPaused=a,a?this._pauseStartTime=this.game.time.now:this.isPlaying&&(this._timeNextFrame=this.game.time.now+this.delay)}}),Object.defineProperty(b.Animation.prototype,"frameTotal",{get:function(){return this._frames.length}}),Object.defineProperty(b.Animation.prototype,"frame",{get:function(){return null!==this.currentFrame?this.currentFrame.index:this._frameIndex},set:function(a){this.currentFrame=this._frameData.getFrame(this._frames[a]),null!==this.currentFrame&&(this._frameIndex=a,this._parent.setTexture(PIXI.TextureCache[this.currentFrame.uuid]))}}),Object.defineProperty(b.Animation.prototype,"speed",{get:function(){return Math.round(1e3/this.delay)},set:function(a){a>=1&&(this.delay=1e3/a)}}),b.Animation.generateFrameNames=function(a,c,d,e,f){"undefined"==typeof e&&(e="");var g=[],h="";if(d>c)for(var i=c;d>=i;i++)h="number"==typeof f?b.Utils.pad(i.toString(),f,"0",1):i.toString(),h=a+h+e,g.push(h);else for(var i=c;i>=d;i--)h="number"==typeof f?b.Utils.pad(i.toString(),f,"0",1):i.toString(),h=a+h+e,g.push(h);return g},b.Frame=function(a,c,d,e,f,g,h){this.index=a,this.x=c,this.y=d,this.width=e,this.height=f,this.name=g,this.uuid=h,this.centerX=Math.floor(e/2),this.centerY=Math.floor(f/2),this.distance=b.Math.distance(0,0,e,f),this.rotated=!1,this.rotationDirection="cw",this.trimmed=!1,this.sourceSizeW=e,this.sourceSizeH=f,this.spriteSourceSizeX=0,this.spriteSourceSizeY=0,this.spriteSourceSizeW=0,this.spriteSourceSizeH=0},b.Frame.prototype={setTrim:function(a,b,c,d,e,f,g){this.trimmed=a,a&&(this.width=b,this.height=c,this.sourceSizeW=b,this.sourceSizeH=c,this.centerX=Math.floor(b/2),this.centerY=Math.floor(c/2),this.spriteSourceSizeX=d,this.spriteSourceSizeY=e,this.spriteSourceSizeW=f,this.spriteSourceSizeH=g)},getRect:function(a){return"undefined"==typeof a?a=new b.Rectangle(this.x,this.y,this.width,this.height):a.setTo(this.x,this.y,this.width,this.height),a}},b.Frame.prototype.constructor=b.Frame,b.FrameData=function(){this._frames=[],this._frameNames=[]},b.FrameData.prototype={addFrame:function(a){return a.index=this._frames.length,this._frames.push(a),""!==a.name&&(this._frameNames[a.name]=a.index),a},getFrame:function(a){return a>this._frames.length&&(a=0),this._frames[a]},getFrameByName:function(a){return"number"==typeof this._frameNames[a]?this._frames[this._frameNames[a]]:null},checkFrameName:function(a){return null==this._frameNames[a]?!1:!0},getFrameRange:function(a,b,c){"undefined"==typeof c&&(c=[]);for(var d=a;b>=d;d++)c.push(this._frames[d]);return c},getFrames:function(a,b,c){if("undefined"==typeof b&&(b=!0),"undefined"==typeof c&&(c=[]),"undefined"==typeof a||0===a.length)for(var d=0;d<this._frames.length;d++)c.push(this._frames[d]);else for(var d=0,e=a.length;e>d;d++)c.push(b?this.getFrame(a[d]):this.getFrameByName(a[d]));return c},getFrameIndexes:function(a,b,c){if("undefined"==typeof b&&(b=!0),"undefined"==typeof c&&(c=[]),"undefined"==typeof a||0===a.length)for(var d=0,e=this._frames.length;e>d;d++)c.push(this._frames[d].index);else for(var d=0,e=a.length;e>d;d++)b?c.push(a[d]):this.getFrameByName(a[d])&&c.push(this.getFrameByName(a[d]).index);return c}},b.FrameData.prototype.constructor=b.FrameData,Object.defineProperty(b.FrameData.prototype,"total",{get:function(){return this._frames.length}}),b.AnimationParser={spriteSheet:function(a,c,d,e,f,g,h){var i=a.cache.getImage(c);if(null==i)return null;var j=i.width,k=i.height;0>=d&&(d=Math.floor(-j/Math.min(-1,d))),0>=e&&(e=Math.floor(-k/Math.min(-1,e)));var l=Math.floor((j-g)/(d+h)),m=Math.floor((k-g)/(e+h)),n=l*m;if(-1!==f&&(n=f),0===j||0===k||d>j||e>k||0===n)return console.warn("Phaser.AnimationParser.spriteSheet: width/height zero or width/height < given frameWidth/frameHeight"),null;for(var o=new b.FrameData,p=g,q=g,r=0;n>r;r++){var s=a.rnd.uuid();o.addFrame(new b.Frame(r,p,q,d,e,"",s)),PIXI.TextureCache[s]=new PIXI.Texture(PIXI.BaseTextureCache[c],{x:p,y:q,width:d,height:e}),p+=d+h,p+d>j&&(p=g,q+=e+h)}return o},JSONData:function(a,c,d){if(!c.frames)return console.warn("Phaser.AnimationParser.JSONData: Invalid Texture Atlas JSON given, missing 'frames' array"),void console.log(c);for(var e,f=new b.FrameData,g=c.frames,h=0;h<g.length;h++){var i=a.rnd.uuid();e=f.addFrame(new b.Frame(h,g[h].frame.x,g[h].frame.y,g[h].frame.w,g[h].frame.h,g[h].filename,i)),PIXI.TextureCache[i]=new PIXI.Texture(PIXI.BaseTextureCache[d],{x:g[h].frame.x,y:g[h].frame.y,width:g[h].frame.w,height:g[h].frame.h}),g[h].trimmed&&(e.setTrim(g[h].trimmed,g[h].sourceSize.w,g[h].sourceSize.h,g[h].spriteSourceSize.x,g[h].spriteSourceSize.y,g[h].spriteSourceSize.w,g[h].spriteSourceSize.h),PIXI.TextureCache[i].trim=new b.Rectangle(g[h].spriteSourceSize.x,g[h].spriteSourceSize.y,g[h].sourceSize.w,g[h].sourceSize.h))}return f},JSONDataHash:function(a,c,d){if(!c.frames)return console.warn("Phaser.AnimationParser.JSONDataHash: Invalid Texture Atlas JSON given, missing 'frames' object"),void console.log(c);var e,f=new b.FrameData,g=c.frames,h=0;for(var i in g){var j=a.rnd.uuid();e=f.addFrame(new b.Frame(h,g[i].frame.x,g[i].frame.y,g[i].frame.w,g[i].frame.h,i,j)),PIXI.TextureCache[j]=new PIXI.Texture(PIXI.BaseTextureCache[d],{x:g[i].frame.x,y:g[i].frame.y,width:g[i].frame.w,height:g[i].frame.h}),g[i].trimmed&&(e.setTrim(g[i].trimmed,g[i].sourceSize.w,g[i].sourceSize.h,g[i].spriteSourceSize.x,g[i].spriteSourceSize.y,g[i].spriteSourceSize.w,g[i].spriteSourceSize.h),PIXI.TextureCache[j].trim=new b.Rectangle(g[i].spriteSourceSize.x,g[i].spriteSourceSize.y,g[i].sourceSize.w,g[i].sourceSize.h)),h++}return f},XMLData:function(a,c,d){if(!c.getElementsByTagName("TextureAtlas"))return void console.warn("Phaser.AnimationParser.XMLData: Invalid Texture Atlas XML given, missing <TextureAtlas> tag");for(var e,f,g,h,i,j,k,l,m,n,o,p,q=new b.FrameData,r=c.getElementsByTagName("SubTexture"),s=0;s<r.length;s++)f=a.rnd.uuid(),h=r[s].attributes,g=h.name.nodeValue,i=parseInt(h.x.nodeValue,10),j=parseInt(h.y.nodeValue,10),k=parseInt(h.width.nodeValue,10),l=parseInt(h.height.nodeValue,10),m=null,n=null,h.frameX&&(m=Math.abs(parseInt(h.frameX.nodeValue,10)),n=Math.abs(parseInt(h.frameY.nodeValue,10)),o=parseInt(h.frameWidth.nodeValue,10),p=parseInt(h.frameHeight.nodeValue,10)),e=q.addFrame(new b.Frame(s,i,j,k,l,g,f)),PIXI.TextureCache[f]=new PIXI.Texture(PIXI.BaseTextureCache[d],{x:i,y:j,width:k,height:l}),(null!==m||null!==n)&&(e.setTrim(!0,k,l,m,n,o,p),PIXI.TextureCache[f].trim=new b.Rectangle(m,n,k,l));return q}},b.Cache=function(a){this.game=a,this._canvases={},this._images={},this._textures={},this._sounds={},this._text={},this._json={},this._physics={},this._tilemaps={},this._binary={},this._bitmapDatas={},this._bitmapFont={},this.addDefaultImage(),this.addMissingImage(),this.onSoundUnlock=new b.Signal},b.Cache.CANVAS=1,b.Cache.IMAGE=2,b.Cache.TEXTURE=3,b.Cache.SOUND=4,b.Cache.TEXT=5,b.Cache.PHYSICS=6,b.Cache.TILEMAP=7,b.Cache.BINARY=8,b.Cache.BITMAPDATA=9,b.Cache.BITMAPFONT=10,b.Cache.JSON=11,b.Cache.prototype={addCanvas:function(a,b,c){this._canvases[a]={canvas:b,context:c}},addBinary:function(a,b){this._binary[a]=b},addBitmapData:function(a,b){return this._bitmapDatas[a]=b,b},addRenderTexture:function(a,c){var d=new b.Frame(0,0,0,c.width,c.height,"","");this._textures[a]={texture:c,frame:d}},addSpriteSheet:function(a,c,d,e,f,g,h,i){this._images[a]={url:c,data:d,spriteSheet:!0,frameWidth:e,frameHeight:f,margin:h,spacing:i},PIXI.BaseTextureCache[a]=new PIXI.BaseTexture(d),PIXI.TextureCache[a]=new PIXI.Texture(PIXI.BaseTextureCache[a]),this._images[a].frameData=b.AnimationParser.spriteSheet(this.game,a,e,f,g,h,i)},addTilemap:function(a,b,c,d){this._tilemaps[a]={url:b,data:c,format:d}},addTextureAtlas:function(a,c,d,e,f){this._images[a]={url:c,data:d,spriteSheet:!0},PIXI.BaseTextureCache[a]=new PIXI.BaseTexture(d),PIXI.TextureCache[a]=new PIXI.Texture(PIXI.BaseTextureCache[a]),f==b.Loader.TEXTURE_ATLAS_JSON_ARRAY?this._images[a].frameData=b.AnimationParser.JSONData(this.game,e,a):f==b.Loader.TEXTURE_ATLAS_JSON_HASH?this._images[a].frameData=b.AnimationParser.JSONDataHash(this.game,e,a):f==b.Loader.TEXTURE_ATLAS_XML_STARLING&&(this._images[a].frameData=b.AnimationParser.XMLData(this.game,e,a))},addBitmapFont:function(a,c,d,e,f,g){this._images[a]={url:c,data:d,spriteSheet:!0},PIXI.BaseTextureCache[a]=new PIXI.BaseTexture(d),PIXI.TextureCache[a]=new PIXI.Texture(PIXI.BaseTextureCache[a]),b.LoaderParser.bitmapFont(this.game,e,a,f,g)},addPhysicsData:function(a,b,c,d){this._physics[a]={url:b,data:c,format:d}},addDefaultImage:function(){var a=new Image;a.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABVJREFUeF7NwIEAAAAAgKD9qdeocAMAoAABm3DkcAAAAABJRU5ErkJggg==",this._images.__default={url:null,data:a,spriteSheet:!1},this._images.__default.frame=new b.Frame(0,0,0,32,32,"",""),PIXI.BaseTextureCache.__default=new PIXI.BaseTexture(a),PIXI.TextureCache.__default=new PIXI.Texture(PIXI.BaseTextureCache.__default)},addMissingImage:function(){var a=new Image;a.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ9JREFUeNq01ssOwyAMRFG46v//Mt1ESmgh+DFmE2GPOBARKb2NVjo+17PXLD8a1+pl5+A+wSgFygymWYHBb0FtsKhJDdZlncG2IzJ4ayoMDv20wTmSMzClEgbWYNTAkQ0Z+OJ+A/eWnAaR9+oxCF4Os0H8htsMUp+pwcgBBiMNnAwF8GqIgL2hAzaGFFgZauDPKABmowZ4GL369/0rwACp2yA/ttmvsQAAAABJRU5ErkJggg==",this._images.__missing={url:null,data:a,spriteSheet:!1},this._images.__missing.frame=new b.Frame(0,0,0,32,32,"",""),PIXI.BaseTextureCache.__missing=new PIXI.BaseTexture(a),PIXI.TextureCache.__missing=new PIXI.Texture(PIXI.BaseTextureCache.__missing)},addText:function(a,b,c){this._text[a]={url:b,data:c}},addJSON:function(a,b,c){this._json[a]={url:b,data:c}},addImage:function(a,c,d){this._images[a]={url:c,data:d,spriteSheet:!1},this._images[a].frame=new b.Frame(0,0,0,d.width,d.height,a,this.game.rnd.uuid()),PIXI.BaseTextureCache[a]=new PIXI.BaseTexture(d),PIXI.TextureCache[a]=new PIXI.Texture(PIXI.BaseTextureCache[a])
},addSound:function(a,b,c,d,e){d=d||!0,e=e||!1;var f=!1;e&&(f=!0),this._sounds[a]={url:b,data:c,isDecoding:!1,decoded:f,webAudio:d,audioTag:e,locked:this.game.sound.touchLocked}},reloadSound:function(a){var b=this;this._sounds[a]&&(this._sounds[a].data.src=this._sounds[a].url,this._sounds[a].data.addEventListener("canplaythrough",function(){return b.reloadSoundComplete(a)},!1),this._sounds[a].data.load())},reloadSoundComplete:function(a){this._sounds[a]&&(this._sounds[a].locked=!1,this.onSoundUnlock.dispatch(a))},updateSound:function(a,b,c){this._sounds[a]&&(this._sounds[a][b]=c)},decodedSound:function(a,b){this._sounds[a].data=b,this._sounds[a].decoded=!0,this._sounds[a].isDecoding=!1},getCanvas:function(a){return this._canvases[a]?this._canvases[a].canvas:void console.warn('Phaser.Cache.getCanvas: Invalid key: "'+a+'"')},getBitmapData:function(a){return this._bitmapDatas[a]?this._bitmapDatas[a]:void console.warn('Phaser.Cache.getBitmapData: Invalid key: "'+a+'"')},getBitmapFont:function(a){return this._bitmapFont[a]?this._bitmapFont[a]:void console.warn('Phaser.Cache.getBitmapFont: Invalid key: "'+a+'"')},getPhysicsData:function(a,b){if("undefined"==typeof b||null===b){if(this._physics[a])return this._physics[a].data;console.warn('Phaser.Cache.getPhysicsData: Invalid key: "'+a+'"')}else{if(this._physics[a]&&this._physics[a].data[b])return this._physics[a].data[b];console.warn('Phaser.Cache.getPhysicsData: Invalid key/object: "'+a+" / "+b+'"')}return null},checkImageKey:function(a){return this._images[a]?!0:!1},getImage:function(a){return this._images[a]?this._images[a].data:void console.warn('Phaser.Cache.getImage: Invalid key: "'+a+'"')},getTilemapData:function(a){return this._tilemaps[a]?this._tilemaps[a]:void console.warn('Phaser.Cache.getTilemapData: Invalid key: "'+a+'"')},getFrameData:function(a){return this._images[a]&&this._images[a].frameData?this._images[a].frameData:null},updateFrameData:function(a,b){this._images[a]&&(this._images[a].spriteSheet=!0,this._images[a].frameData=b)},getFrameByIndex:function(a,b){return this._images[a]&&this._images[a].frameData?this._images[a].frameData.getFrame(b):null},getFrameByName:function(a,b){return this._images[a]&&this._images[a].frameData?this._images[a].frameData.getFrameByName(b):null},getFrame:function(a){return this._images[a]&&this._images[a].spriteSheet===!1?this._images[a].frame:null},getTextureFrame:function(a){return this._textures[a]?this._textures[a].frame:null},getTexture:function(a){return this._textures[a]?this._textures[a]:void console.warn('Phaser.Cache.getTexture: Invalid key: "'+a+'"')},getSound:function(a){return this._sounds[a]?this._sounds[a]:void console.warn('Phaser.Cache.getSound: Invalid key: "'+a+'"')},getSoundData:function(a){return this._sounds[a]?this._sounds[a].data:void console.warn('Phaser.Cache.getSoundData: Invalid key: "'+a+'"')},isSoundDecoded:function(a){return this._sounds[a]?this._sounds[a].decoded:void 0},isSoundReady:function(a){return this._sounds[a]&&this._sounds[a].decoded&&this.game.sound.touchLocked===!1},isSpriteSheet:function(a){return this._images[a]?this._images[a].spriteSheet:!1},getText:function(a){return this._text[a]?this._text[a].data:void console.warn('Phaser.Cache.getText: Invalid key: "'+a+'"')},getJSON:function(a){return this._json[a]?this._json[a].data:void console.warn('Phaser.Cache.getJSON: Invalid key: "'+a+'"')},getBinary:function(a){return this._binary[a]?this._binary[a]:void console.warn('Phaser.Cache.getBinary: Invalid key: "'+a+'"')},getKeys:function(a){var c=null;switch(a){case b.Cache.CANVAS:c=this._canvases;break;case b.Cache.IMAGE:c=this._images;break;case b.Cache.TEXTURE:c=this._textures;break;case b.Cache.SOUND:c=this._sounds;break;case b.Cache.TEXT:c=this._text;break;case b.Cache.PHYSICS:c=this._physics;break;case b.Cache.TILEMAP:c=this._tilemaps;break;case b.Cache.BINARY:c=this._binary;break;case b.Cache.BITMAPDATA:c=this._bitmapDatas;break;case b.Cache.BITMAPFONT:c=this._bitmapFont;break;case b.Cache.JSON:c=this._json}if(c){var d=[];for(var e in c)"__default"!==e&&"__missing"!==e&&d.push(e);return d}},removeCanvas:function(a){delete this._canvases[a]},removeImage:function(a){delete this._images[a]},removeSound:function(a){delete this._sounds[a]},removeText:function(a){delete this._text[a]},removeJSON:function(a){delete this._json[a]},removePhysics:function(a){delete this._physics[a]},removeTilemap:function(a){delete this._tilemaps[a]},removeBinary:function(a){delete this._binary[a]},removeBitmapData:function(a){delete this._bitmapDatas[a]},removeBitmapFont:function(a){delete this._bitmapFont[a]},destroy:function(){for(var a in this._canvases)delete this._canvases[a];for(var a in this._images)"__default"!==a&&"__missing"!==a&&delete this._images[a];for(var a in this._sounds)delete this._sounds[a];for(var a in this._text)delete this._text[a];for(var a in this._json)delete this._json[a];for(var a in this._textures)delete this._textures[a];for(var a in this._physics)delete this._physics[a];for(var a in this._tilemaps)delete this._tilemaps[a];for(var a in this._binary)delete this._binary[a];for(var a in this._bitmapDatas)delete this._bitmapDatas[a];for(var a in this._bitmapFont)delete this._bitmapFont[a]}},b.Cache.prototype.constructor=b.Cache,b.Loader=function(a){this.game=a,this._fileList=[],this._fileIndex=0,this._progressChunk=0,this._xhr=new XMLHttpRequest,this.isLoading=!1,this.hasLoaded=!1,this.progress=0,this.progressFloat=0,this.preloadSprite=null,this.crossOrigin=!1,this.baseURL="",this.onFileComplete=new b.Signal,this.onFileError=new b.Signal,this.onLoadStart=new b.Signal,this.onLoadComplete=new b.Signal},b.Loader.TEXTURE_ATLAS_JSON_ARRAY=0,b.Loader.TEXTURE_ATLAS_JSON_HASH=1,b.Loader.TEXTURE_ATLAS_XML_STARLING=2,b.Loader.PHYSICS_LIME_CORONA=3,b.Loader.prototype={setPreloadSprite:function(a,c){c=c||0,this.preloadSprite={sprite:a,direction:c,width:a.width,height:a.height,rect:null},this.preloadSprite.rect=0===c?new b.Rectangle(0,0,1,a.height):new b.Rectangle(0,0,a.width,1),a.crop(this.preloadSprite.rect),a.visible=!0},checkKeyExists:function(a,b){if(this._fileList.length>0)for(var c=0;c<this._fileList.length;c++)if(this._fileList[c].type===a&&this._fileList[c].key===b)return!0;return!1},getAssetIndex:function(a,b){if(this._fileList.length>0)for(var c=0;c<this._fileList.length;c++)if(this._fileList[c].type===a&&this._fileList[c].key===b)return c;return-1},getAsset:function(a,b){if(this._fileList.length>0)for(var c=0;c<this._fileList.length;c++)if(this._fileList[c].type===a&&this._fileList[c].key===b)return{index:c,file:this._fileList[c]};return!1},reset:function(){this.preloadSprite=null,this.isLoading=!1,this._fileList.length=0,this._fileIndex=0},addToFileList:function(a,b,c,d){var e={type:a,key:b,url:c,data:null,error:!1,loaded:!1};if("undefined"!=typeof d)for(var f in d)e[f]=d[f];this.checkKeyExists(a,b)===!1&&this._fileList.push(e)},replaceInFileList:function(a,b,c,d){var e={type:a,key:b,url:c,data:null,error:!1,loaded:!1};if("undefined"!=typeof d)for(var f in d)e[f]=d[f];var g=this.getAssetIndex(a,b);-1===g?this._fileList.push(e):this._fileList[g]=e},image:function(a,b,c){return"undefined"==typeof c&&(c=!1),c?this.replaceInFileList("image",a,b):this.addToFileList("image",a,b),this},text:function(a,b,c){return"undefined"==typeof c&&(c=!1),c?this.replaceInFileList("text",a,b):this.addToFileList("text",a,b),this},json:function(a,b,c){return"undefined"==typeof c&&(c=!1),c?this.replaceInFileList("json",a,b):this.addToFileList("json",a,b),this},script:function(a,b,c,d){return"undefined"==typeof c&&(c=!1),c!==!1&&"undefined"==typeof d&&(d=c),this.addToFileList("script",a,b,{callback:c,callbackContext:d}),this},binary:function(a,b,c,d){return"undefined"==typeof c&&(c=!1),c!==!1&&"undefined"==typeof d&&(d=c),this.addToFileList("binary",a,b,{callback:c,callbackContext:d}),this},spritesheet:function(a,b,c,d,e,f,g){return"undefined"==typeof e&&(e=-1),"undefined"==typeof f&&(f=0),"undefined"==typeof g&&(g=0),this.addToFileList("spritesheet",a,b,{frameWidth:c,frameHeight:d,frameMax:e,margin:f,spacing:g}),this},audio:function(a,b,c){return"undefined"==typeof c&&(c=!0),this.addToFileList("audio",a,b,{buffer:null,autoDecode:c}),this},tilemap:function(a,c,d,e){if("undefined"==typeof c&&(c=null),"undefined"==typeof d&&(d=null),"undefined"==typeof e&&(e=b.Tilemap.CSV),null==c&&null==d)return console.warn("Phaser.Loader.tilemap - Both mapDataURL and mapData are null. One must be set."),this;if(d){switch(e){case b.Tilemap.CSV:break;case b.Tilemap.TILED_JSON:"string"==typeof d&&(d=JSON.parse(d))}this.game.cache.addTilemap(a,null,d,e)}else this.addToFileList("tilemap",a,c,{format:e});return this},physics:function(a,c,d,e){return"undefined"==typeof c&&(c=null),"undefined"==typeof d&&(d=null),"undefined"==typeof e&&(e=b.Physics.LIME_CORONA_JSON),null==c&&null==d?(console.warn("Phaser.Loader.physics - Both dataURL and jsonData are null. One must be set."),this):(d?("string"==typeof d&&(d=JSON.parse(d)),this.game.cache.addPhysicsData(a,null,d,e)):this.addToFileList("physics",a,c,{format:e}),this)},bitmapFont:function(a,b,c,d,e,f){if("undefined"==typeof c&&(c=null),"undefined"==typeof d&&(d=null),"undefined"==typeof e&&(e=0),"undefined"==typeof f&&(f=0),c)this.addToFileList("bitmapfont",a,b,{xmlURL:c,xSpacing:e,ySpacing:f});else if("string"==typeof d){var g;try{if(window.DOMParser){var h=new DOMParser;g=h.parseFromString(d,"text/xml")}else g=new ActiveXObject("Microsoft.XMLDOM"),g.async="false",g.loadXML(d)}catch(i){g=void 0}if(!g||!g.documentElement||g.getElementsByTagName("parsererror").length)throw new Error("Phaser.Loader. Invalid Bitmap Font XML given");this.addToFileList("bitmapfont",a,b,{xmlURL:null,xmlData:g,xSpacing:e,ySpacing:f})}return this},atlasJSONArray:function(a,c,d,e){return this.atlas(a,c,d,e,b.Loader.TEXTURE_ATLAS_JSON_ARRAY)},atlasJSONHash:function(a,c,d,e){return this.atlas(a,c,d,e,b.Loader.TEXTURE_ATLAS_JSON_HASH)},atlasXML:function(a,c,d,e){return this.atlas(a,c,d,e,b.Loader.TEXTURE_ATLAS_XML_STARLING)},atlas:function(a,c,d,e,f){if("undefined"==typeof d&&(d=null),"undefined"==typeof e&&(e=null),"undefined"==typeof f&&(f=b.Loader.TEXTURE_ATLAS_JSON_ARRAY),d)this.addToFileList("textureatlas",a,c,{atlasURL:d,format:f});else{switch(f){case b.Loader.TEXTURE_ATLAS_JSON_ARRAY:"string"==typeof e&&(e=JSON.parse(e));break;case b.Loader.TEXTURE_ATLAS_XML_STARLING:if("string"==typeof e){var g;try{if(window.DOMParser){var h=new DOMParser;g=h.parseFromString(e,"text/xml")}else g=new ActiveXObject("Microsoft.XMLDOM"),g.async="false",g.loadXML(e)}catch(i){g=void 0}if(!g||!g.documentElement||g.getElementsByTagName("parsererror").length)throw new Error("Phaser.Loader. Invalid Texture Atlas XML given");e=g}}this.addToFileList("textureatlas",a,c,{atlasURL:null,atlasData:e,format:f})}return this},removeFile:function(a,b){var c=this.getAsset(a,b);c!==!1&&this._fileList.splice(c.index,1)},removeAll:function(){this._fileList.length=0},start:function(){this.isLoading||(this.progress=0,this.progressFloat=0,this.hasLoaded=!1,this.isLoading=!0,this.onLoadStart.dispatch(this._fileList.length),this._fileList.length>0?(this._fileIndex=0,this._progressChunk=100/this._fileList.length,this.loadFile()):(this.progress=100,this.progressFloat=100,this.hasLoaded=!0,this.onLoadComplete.dispatch()))},loadFile:function(){if(!this._fileList[this._fileIndex])return void console.warn("Phaser.Loader loadFile invalid index "+this._fileIndex);var a=this._fileList[this._fileIndex],c=this;switch(a.type){case"image":case"spritesheet":case"textureatlas":case"bitmapfont":a.data=new Image,a.data.name=a.key,a.data.onload=function(){return c.fileComplete(c._fileIndex)},a.data.onerror=function(){return c.fileError(c._fileIndex)},this.crossOrigin&&(a.data.crossOrigin=this.crossOrigin),a.data.src=this.baseURL+a.url;break;case"audio":a.url=this.getAudioURL(a.url),null!==a.url?this.game.sound.usingWebAudio?(this._xhr.open("GET",this.baseURL+a.url,!0),this._xhr.responseType="arraybuffer",this._xhr.onload=function(){return c.fileComplete(c._fileIndex)},this._xhr.onerror=function(){return c.fileError(c._fileIndex)},this._xhr.send()):this.game.sound.usingAudioTag&&(this.game.sound.touchLocked?(a.data=new Audio,a.data.name=a.key,a.data.preload="auto",a.data.src=this.baseURL+a.url,this.fileComplete(this._fileIndex)):(a.data=new Audio,a.data.name=a.key,a.data.onerror=function(){return c.fileError(c._fileIndex)},a.data.preload="auto",a.data.src=this.baseURL+a.url,a.data.addEventListener("canplaythrough",b.GAMES[this.game.id].load.fileComplete(this._fileIndex),!1),a.data.load())):this.fileError(this._fileIndex);break;case"json":this._xhr.open("GET",this.baseURL+a.url,!0),this._xhr.responseType="text",this._xhr.onload=function(){return c.jsonLoadComplete(c._fileIndex)},this._xhr.send();break;case"tilemap":if(this._xhr.open("GET",this.baseURL+a.url,!0),this._xhr.responseType="text",a.format===b.Tilemap.TILED_JSON)this._xhr.onload=function(){return c.jsonLoadComplete(c._fileIndex)};else{if(a.format!==b.Tilemap.CSV)throw new Error("Phaser.Loader. Invalid Tilemap format: "+a.format);this._xhr.onload=function(){return c.csvLoadComplete(c._fileIndex)}}this._xhr.onerror=function(){return c.dataLoadError(c._fileIndex)},this._xhr.send();break;case"text":case"script":case"physics":this._xhr.open("GET",this.baseURL+a.url,!0),this._xhr.responseType="text",this._xhr.onload=function(){return c.fileComplete(c._fileIndex)},this._xhr.onerror=function(){return c.fileError(c._fileIndex)},this._xhr.send();break;case"binary":this._xhr.open("GET",this.baseURL+a.url,!0),this._xhr.responseType="arraybuffer",this._xhr.onload=function(){return c.fileComplete(c._fileIndex)},this._xhr.onerror=function(){return c.fileError(c._fileIndex)},this._xhr.send()}},getAudioURL:function(a){var b;"string"==typeof a&&(a=[a]);for(var c=0;c<a.length;c++)if(b=a[c].toLowerCase(),b=b.substr((Math.max(0,b.lastIndexOf("."))||1/0)+1),this.game.device.canPlayAudio(b))return a[c];return null},fileError:function(a){this._fileList[a].loaded=!0,this._fileList[a].error=!0,this.onFileError.dispatch(this._fileList[a].key,this._fileList[a]),console.warn("Phaser.Loader error loading file: "+this._fileList[a].key+" from URL "+this._fileList[a].url),this.nextFile(a,!1)},fileComplete:function(a){if(!this._fileList[a])return void console.warn("Phaser.Loader fileComplete invalid index "+a);var c=this._fileList[a];c.loaded=!0;var d=!0,e=this;switch(c.type){case"image":this.game.cache.addImage(c.key,c.url,c.data);break;case"spritesheet":this.game.cache.addSpriteSheet(c.key,c.url,c.data,c.frameWidth,c.frameHeight,c.frameMax,c.margin,c.spacing);break;case"textureatlas":if(null==c.atlasURL)this.game.cache.addTextureAtlas(c.key,c.url,c.data,c.atlasData,c.format);else{if(d=!1,this._xhr.open("GET",this.baseURL+c.atlasURL,!0),this._xhr.responseType="text",c.format==b.Loader.TEXTURE_ATLAS_JSON_ARRAY||c.format==b.Loader.TEXTURE_ATLAS_JSON_HASH)this._xhr.onload=function(){return e.jsonLoadComplete(a)};else{if(c.format!=b.Loader.TEXTURE_ATLAS_XML_STARLING)throw new Error("Phaser.Loader. Invalid Texture Atlas format: "+c.format);this._xhr.onload=function(){return e.xmlLoadComplete(a)}}this._xhr.onerror=function(){return e.dataLoadError(a)},this._xhr.send()}break;case"bitmapfont":null==c.xmlURL?this.game.cache.addBitmapFont(c.key,c.url,c.data,c.xmlData,c.xSpacing,c.ySpacing):(d=!1,this._xhr.open("GET",this.baseURL+c.xmlURL,!0),this._xhr.responseType="text",this._xhr.onload=function(){return e.xmlLoadComplete(a)},this._xhr.onerror=function(){return e.dataLoadError(a)},this._xhr.send());break;case"audio":if(this.game.sound.usingWebAudio){if(c.data=this._xhr.response,this.game.cache.addSound(c.key,c.url,c.data,!0,!1),c.autoDecode){var f=this,g=c.key;this.game.cache.updateSound(g,"isDecoding",!0),this.game.sound.context.decodeAudioData(c.data,function(a){a&&(f.game.cache.decodedSound(g,a),f.game.sound.onSoundDecode.dispatch(g,f.game.cache.getSound(g)))})}}else c.data.removeEventListener("canplaythrough",b.GAMES[this.game.id].load.fileComplete),this.game.cache.addSound(c.key,c.url,c.data,!1,!0);break;case"text":c.data=this._xhr.responseText,this.game.cache.addText(c.key,c.url,c.data);break;case"physics":var h=JSON.parse(this._xhr.responseText);this.game.cache.addPhysicsData(c.key,c.url,h,c.format);break;case"script":c.data=document.createElement("script"),c.data.language="javascript",c.data.type="text/javascript",c.data.defer=!1,c.data.text=this._xhr.responseText,document.head.appendChild(c.data),c.callback&&(c.data=c.callback.call(c.callbackContext,c.key,this._xhr.responseText));break;case"binary":c.data=c.callback?c.callback.call(c.callbackContext,c.key,this._xhr.response):this._xhr.response,this.game.cache.addBinary(c.key,c.data)}d&&this.nextFile(a,!0)},jsonLoadComplete:function(a){if(!this._fileList[a])return void console.warn("Phaser.Loader jsonLoadComplete invalid index "+a);var b=this._fileList[a],c=JSON.parse(this._xhr.responseText);b.loaded=!0,"tilemap"===b.type?this.game.cache.addTilemap(b.key,b.url,c,b.format):"json"===b.type?this.game.cache.addJSON(b.key,b.url,c):this.game.cache.addTextureAtlas(b.key,b.url,b.data,c,b.format),this.nextFile(a,!0)},csvLoadComplete:function(a){if(!this._fileList[a])return void console.warn("Phaser.Loader csvLoadComplete invalid index "+a);var b=this._fileList[a],c=this._xhr.responseText;b.loaded=!0,this.game.cache.addTilemap(b.key,b.url,c,b.format),this.nextFile(a,!0)},dataLoadError:function(a){var b=this._fileList[a];b.loaded=!0,b.error=!0,console.warn("Phaser.Loader dataLoadError: "+b.key),this.nextFile(a,!0)},xmlLoadComplete:function(a){var b,c=this._xhr.responseText;try{if(window.DOMParser){var d=new DOMParser;b=d.parseFromString(c,"text/xml")}else b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(c)}catch(e){b=void 0}if(!b||!b.documentElement||b.getElementsByTagName("parsererror").length)throw new Error("Phaser.Loader. Invalid XML given");var f=this._fileList[a];f.loaded=!0,"bitmapfont"==f.type?this.game.cache.addBitmapFont(f.key,f.url,f.data,b,f.xSpacing,f.ySpacing):"textureatlas"==f.type&&this.game.cache.addTextureAtlas(f.key,f.url,f.data,b,f.format),this.nextFile(a,!0)},nextFile:function(a,b){this.progressFloat+=this._progressChunk,this.progress=Math.round(this.progressFloat),this.progress>100&&(this.progress=100),null!==this.preloadSprite&&(0===this.preloadSprite.direction?(this.preloadSprite.rect.width=Math.floor(this.preloadSprite.width/100*this.progress),this.preloadSprite.sprite.crop(this.preloadSprite.rect)):(this.preloadSprite.rect.height=Math.floor(this.preloadSprite.height/100*this.progress),this.preloadSprite.sprite.crop(this.preloadSprite.rect))),this.onFileComplete.dispatch(this.progress,this._fileList[a].key,b,this.totalLoadedFiles(),this._fileList.length),this.totalQueuedFiles()>0?(this._fileIndex++,this.loadFile()):(this.hasLoaded=!0,this.isLoading=!1,this.removeAll(),this.onLoadComplete.dispatch())},totalLoadedFiles:function(){for(var a=0,b=0;b<this._fileList.length;b++)this._fileList[b].loaded&&a++;return a},totalQueuedFiles:function(){for(var a=0,b=0;b<this._fileList.length;b++)this._fileList[b].loaded===!1&&a++;return a}},b.Loader.prototype.constructor=b.Loader,b.LoaderParser={bitmapFont:function(a,b,c,d,e){if(!b||/MSIE 9/i.test(navigator.userAgent))if("function"==typeof window.DOMParser){var f=new DOMParser;b=f.parseFromString(this.ajaxRequest.responseText,"text/xml")}else{var g=document.createElement("div");g.innerHTML=this.ajaxRequest.responseText,b=g}var h={},i=b.getElementsByTagName("info")[0],j=b.getElementsByTagName("common")[0];h.font=i.getAttribute("face"),h.size=parseInt(i.getAttribute("size"),10),h.lineHeight=parseInt(j.getAttribute("lineHeight"),10)+e,h.chars={};for(var k=b.getElementsByTagName("char"),l=PIXI.TextureCache[c],m=0;m<k.length;m++){var n=parseInt(k[m].getAttribute("id"),10),o=new PIXI.Rectangle(parseInt(k[m].getAttribute("x"),10),parseInt(k[m].getAttribute("y"),10),parseInt(k[m].getAttribute("width"),10),parseInt(k[m].getAttribute("height"),10));h.chars[n]={xOffset:parseInt(k[m].getAttribute("xoffset"),10),yOffset:parseInt(k[m].getAttribute("yoffset"),10),xAdvance:parseInt(k[m].getAttribute("xadvance"),10)+d,kerning:{},texture:PIXI.TextureCache[c]=new PIXI.Texture(l,o)}}var p=b.getElementsByTagName("kerning");for(m=0;m<p.length;m++){var q=parseInt(p[m].getAttribute("first"),10),r=parseInt(p[m].getAttribute("second"),10),s=parseInt(p[m].getAttribute("amount"),10);h.chars[r].kerning[q]=s}PIXI.BitmapText.fonts[c]=h}},b.Sound=function(a,c,d,e,f){"undefined"==typeof d&&(d=1),"undefined"==typeof e&&(e=!1),"undefined"==typeof f&&(f=a.sound.connectToMaster),this.game=a,this.name=c,this.key=c,this.loop=e,this._volume=d,this.markers={},this.context=null,this._buffer=null,this._muted=!1,this.autoplay=!1,this.totalDuration=0,this.startTime=0,this.currentTime=0,this.duration=0,this.stopTime=0,this.paused=!1,this.pausedPosition=0,this.pausedTime=0,this.isPlaying=!1,this.currentMarker="",this.pendingPlayback=!1,this.override=!1,this.usingWebAudio=this.game.sound.usingWebAudio,this.usingAudioTag=this.game.sound.usingAudioTag,this.externalNode=null,this.usingWebAudio?(this.context=this.game.sound.context,this.masterGainNode=this.game.sound.masterGain,this.gainNode="undefined"==typeof this.context.createGain?this.context.createGainNode():this.context.createGain(),this.gainNode.gain.value=d*this.game.sound.volume,f&&this.gainNode.connect(this.masterGainNode)):this.game.cache.getSound(c)&&this.game.cache.isSoundReady(c)?(this._sound=this.game.cache.getSoundData(c),this.totalDuration=0,this._sound.duration&&(this.totalDuration=this._sound.duration)):this.game.cache.onSoundUnlock.add(this.soundHasUnlocked,this),this.onDecoded=new b.Signal,this.onPlay=new b.Signal,this.onPause=new b.Signal,this.onResume=new b.Signal,this.onLoop=new b.Signal,this.onStop=new b.Signal,this.onMute=new b.Signal,this.onMarkerComplete=new b.Signal},b.Sound.prototype={soundHasUnlocked:function(a){a==this.key&&(this._sound=this.game.cache.getSoundData(this.key),this.totalDuration=this._sound.duration)},addMarker:function(a,b,c,d,e){"undefined"==typeof d&&(d=1),"undefined"==typeof e&&(e=!1),this.markers[a]={name:a,start:b,stop:b+c,volume:d,duration:c,durationMS:1e3*c,loop:e}},removeMarker:function(a){delete this.markers[a]},update:function(){this.pendingPlayback&&this.game.cache.isSoundReady(this.key)&&(this.pendingPlayback=!1,this.play(this._tempMarker,this._tempPosition,this._tempVolume,this._tempLoop)),this.isPlaying&&(this.currentTime=this.game.time.now-this.startTime,this.currentTime>=this.durationMS&&(this.usingWebAudio?this.loop?(this.onLoop.dispatch(this),""===this.currentMarker?(this.currentTime=0,this.startTime=this.game.time.now):(this.onMarkerComplete.dispatch(this.currentMarker,this),this.play(this.currentMarker,0,this.volume,!0,!0))):this.stop():this.loop?(this.onLoop.dispatch(this),this.play(this.currentMarker,0,this.volume,!0,!0)):this.stop()))},play:function(a,b,c,d,e){if("undefined"==typeof a&&(a=""),"undefined"==typeof e&&(e=!0),this.isPlaying!==!0||e!==!1||this.override!==!1){if(this.isPlaying&&this.override&&(this.usingWebAudio?"undefined"==typeof this._sound.stop?this._sound.noteOff(0):this._sound.stop(0):this.usingAudioTag&&(this._sound.pause(),this._sound.currentTime=0)),this.currentMarker=a,""!==a){if(!this.markers[a])return void console.warn("Phaser.Sound.play: audio marker "+a+" doesn't exist");this.position=this.markers[a].start,this.volume=this.markers[a].volume,this.loop=this.markers[a].loop,this.duration=this.markers[a].duration,this.durationMS=this.markers[a].durationMS,"undefined"!=typeof c&&(this.volume=c),"undefined"!=typeof d&&(this.loop=d),this._tempMarker=a,this._tempPosition=this.position,this._tempVolume=this.volume,this._tempLoop=this.loop}else b=b||0,"undefined"==typeof c&&(c=this._volume),"undefined"==typeof d&&(d=this.loop),this.position=b,this.volume=c,this.loop=d,this.duration=0,this.durationMS=0,this._tempMarker=a,this._tempPosition=b,this._tempVolume=c,this._tempLoop=d;this.usingWebAudio?this.game.cache.isSoundDecoded(this.key)?(null==this._buffer&&(this._buffer=this.game.cache.getSoundData(this.key)),this._sound=this.context.createBufferSource(),this._sound.buffer=this._buffer,this._sound.connect(this.externalNode?this.externalNode.input:this.gainNode),this.totalDuration=this._sound.buffer.duration,0===this.duration&&(this.duration=this.totalDuration,this.durationMS=1e3*this.totalDuration),this.loop&&""===a&&(this._sound.loop=!0),"undefined"==typeof this._sound.start?this._sound.noteGrainOn(0,this.position,this.duration):this._sound.start(0,this.position,this.duration),this.isPlaying=!0,this.startTime=this.game.time.now,this.currentTime=0,this.stopTime=this.startTime+this.durationMS,this.onPlay.dispatch(this)):(this.pendingPlayback=!0,this.game.cache.getSound(this.key)&&this.game.cache.getSound(this.key).isDecoding===!1&&this.game.sound.decode(this.key,this)):this.game.cache.getSound(this.key)&&this.game.cache.getSound(this.key).locked?(this.game.cache.reloadSound(this.key),this.pendingPlayback=!0):this._sound&&(this.game.device.cocoonJS||4===this._sound.readyState)?(this._sound.play(),this.totalDuration=this._sound.duration,0===this.duration&&(this.duration=this.totalDuration,this.durationMS=1e3*this.totalDuration),this._sound.currentTime=this.position,this._sound.muted=this._muted,this._sound.volume=this._muted?0:this._volume,this.isPlaying=!0,this.startTime=this.game.time.now,this.currentTime=0,this.stopTime=this.startTime+this.durationMS,this.onPlay.dispatch(this)):this.pendingPlayback=!0}},restart:function(a,b,c,d){a=a||"",b=b||0,c=c||1,"undefined"==typeof d&&(d=!1),this.play(a,b,c,d,!0)},pause:function(){this.isPlaying&&this._sound&&(this.stop(),this.isPlaying=!1,this.paused=!0,this.pausedPosition=this.currentTime,this.pausedTime=this.game.time.now,this.onPause.dispatch(this))},resume:function(){if(this.paused&&this._sound){if(this.usingWebAudio){var a=this.position+this.pausedPosition/1e3;this._sound=this.context.createBufferSource(),this._sound.buffer=this._buffer,this._sound.connect(this.externalNode?this.externalNode.input:this.gainNode),this.loop&&(this._sound.loop=!0),"undefined"==typeof this._sound.start?this._sound.noteGrainOn(0,a,this.duration):this._sound.start(0,a,this.duration)}else this._sound.play();this.isPlaying=!0,this.paused=!1,this.startTime+=this.game.time.now-this.pausedTime,this.onResume.dispatch(this)}},stop:function(){this.isPlaying&&this._sound&&(this.usingWebAudio?"undefined"==typeof this._sound.stop?this._sound.noteOff(0):this._sound.stop(0):this.usingAudioTag&&(this._sound.pause(),this._sound.currentTime=0)),this.isPlaying=!1;var a=this.currentMarker;""!==this.currentMarker&&this.onMarkerComplete.dispatch(this.currentMarker,this),this.currentMarker="",this.onStop.dispatch(this,a)}},b.Sound.prototype.constructor=b.Sound,Object.defineProperty(b.Sound.prototype,"isDecoding",{get:function(){return this.game.cache.getSound(this.key).isDecoding}}),Object.defineProperty(b.Sound.prototype,"isDecoded",{get:function(){return this.game.cache.isSoundDecoded(this.key)}}),Object.defineProperty(b.Sound.prototype,"mute",{get:function(){return this._muted},set:function(a){a=a||null,a?(this._muted=!0,this.usingWebAudio?(this._muteVolume=this.gainNode.gain.value,this.gainNode.gain.value=0):this.usingAudioTag&&this._sound&&(this._muteVolume=this._sound.volume,this._sound.volume=0)):(this._muted=!1,this.usingWebAudio?this.gainNode.gain.value=this._muteVolume:this.usingAudioTag&&this._sound&&(this._sound.volume=this._muteVolume)),this.onMute.dispatch(this)}}),Object.defineProperty(b.Sound.prototype,"volume",{get:function(){return this._volume},set:function(a){this.usingWebAudio?(this._volume=a,this.gainNode.gain.value=a):this.usingAudioTag&&this._sound&&a>=0&&1>=a&&(this._volume=a,this._sound.volume=a)}}),b.SoundManager=function(a){this.game=a,this.onSoundDecode=new b.Signal,this._codeMuted=!1,this._muted=!1,this._unlockSource=null,this._volume=1,this._sounds=[],this.context=null,this.usingWebAudio=!0,this.usingAudioTag=!1,this.noAudio=!1,this.connectToMaster=!0,this.touchLocked=!1,this.channels=32},b.SoundManager.prototype={boot:function(){if(this.game.device.iOS&&this.game.device.webAudio===!1&&(this.channels=1),this.game.device.iOS||window.PhaserGlobal&&window.PhaserGlobal.fakeiOSTouchLock?(this.game.input.touch.callbackContext=this,this.game.input.touch.touchStartCallback=this.unlock,this.game.input.mouse.callbackContext=this,this.game.input.mouse.mouseDownCallback=this.unlock,this.touchLocked=!0):this.touchLocked=!1,window.PhaserGlobal){if(window.PhaserGlobal.disableAudio===!0)return this.usingWebAudio=!1,void(this.noAudio=!0);if(window.PhaserGlobal.disableWebAudio===!0)return this.usingWebAudio=!1,this.usingAudioTag=!0,void(this.noAudio=!1)}window.AudioContext?this.context=new window.AudioContext:window.webkitAudioContext?this.context=new window.webkitAudioContext:window.Audio?(this.usingWebAudio=!1,this.usingAudioTag=!0):(this.usingWebAudio=!1,this.noAudio=!0),null!==this.context&&(this.masterGain="undefined"==typeof this.context.createGain?this.context.createGainNode():this.context.createGain(),this.masterGain.gain.value=1,this.masterGain.connect(this.context.destination))},unlock:function(){if(this.touchLocked!==!1)if(this.game.device.webAudio===!1||window.PhaserGlobal&&window.PhaserGlobal.disableWebAudio===!0)this.touchLocked=!1,this._unlockSource=null,this.game.input.touch.callbackContext=null,this.game.input.touch.touchStartCallback=null,this.game.input.mouse.callbackContext=null,this.game.input.mouse.mouseDownCallback=null;else{var a=this.context.createBuffer(1,1,22050);this._unlockSource=this.context.createBufferSource(),this._unlockSource.buffer=a,this._unlockSource.connect(this.context.destination),this._unlockSource.noteOn(0)}},stopAll:function(){for(var a=0;a<this._sounds.length;a++)this._sounds[a]&&this._sounds[a].stop()},pauseAll:function(){for(var a=0;a<this._sounds.length;a++)this._sounds[a]&&this._sounds[a].pause()},resumeAll:function(){for(var a=0;a<this._sounds.length;a++)this._sounds[a]&&this._sounds[a].resume()},decode:function(a,b){b=b||null;var c=this.game.cache.getSoundData(a);if(c&&this.game.cache.isSoundDecoded(a)===!1){this.game.cache.updateSound(a,"isDecoding",!0);var d=this;this.context.decodeAudioData(c,function(c){d.game.cache.decodedSound(a,c),b&&d.onSoundDecode.dispatch(a,b)})}},update:function(){this.touchLocked&&this.game.device.webAudio&&null!==this._unlockSource&&(this._unlockSource.playbackState===this._unlockSource.PLAYING_STATE||this._unlockSource.playbackState===this._unlockSource.FINISHED_STATE)&&(this.touchLocked=!1,this._unlockSource=null,this.game.input.touch.callbackContext=null,this.game.input.touch.touchStartCallback=null);for(var a=0;a<this._sounds.length;a++)this._sounds[a].update()},add:function(a,c,d,e){"undefined"==typeof c&&(c=1),"undefined"==typeof d&&(d=!1),"undefined"==typeof e&&(e=this.connectToMaster);var f=new b.Sound(this.game,a,c,d,e);return this._sounds.push(f),f},play:function(a,b,c){var d=this.add(a,b,c);return d.play(),d},setMute:function(){if(!this._muted){this._muted=!0,this.usingWebAudio&&(this._muteVolume=this.masterGain.gain.value,this.masterGain.gain.value=0);for(var a=0;a<this._sounds.length;a++)this._sounds[a].usingAudioTag&&(this._sounds[a].mute=!0)}},unsetMute:function(){if(this._muted&&!this._codeMuted){this._muted=!1,this.usingWebAudio&&(this.masterGain.gain.value=this._muteVolume);for(var a=0;a<this._sounds.length;a++)this._sounds[a].usingAudioTag&&(this._sounds[a].mute=!1)}}},b.SoundManager.prototype.constructor=b.SoundManager,Object.defineProperty(b.SoundManager.prototype,"mute",{get:function(){return this._muted},set:function(a){if(a=a||null){if(this._muted)return;this._codeMuted=!0,this.setMute()}else{if(this._muted===!1)return;this._codeMuted=!1,this.unsetMute()}}}),Object.defineProperty(b.SoundManager.prototype,"volume",{get:function(){return this.usingWebAudio?this.masterGain.gain.value:this._volume
},set:function(a){if(this._volume=a,this.usingWebAudio)this.masterGain.gain.value=a;else for(var b=0;b<this._sounds.length;b++)this._sounds[b].usingAudioTag&&(this._sounds[b].volume=this._sounds[b].volume*a)}}),b.Utils.Debug=function(a){this.game=a,this.sprite=null,this.canvas=null,this.baseTexture=null,this.texture=null,this.textureFrame=null,this.context=null,this.font="14px Courier",this.columnWidth=100,this.lineHeight=16,this.renderShadow=!0,this.currentX=0,this.currentY=0,this.currentAlpha=1,this.dirty=!1},b.Utils.Debug.prototype={boot:function(){this.game.renderType===b.CANVAS?this.context=this.game.context:(this.canvas=b.Canvas.create(this.game.width,this.game.height,"",!0),this.context=this.canvas.getContext("2d"),this.baseTexture=new PIXI.BaseTexture(this.canvas),this.texture=new PIXI.Texture(this.baseTexture),this.textureFrame=new b.Frame(0,0,0,this.game.width,this.game.height,"debug",this.game.rnd.uuid()),this.sprite=this.game.make.image(0,0,this.texture,this.textureFrame),this.game.stage.addChild(this.sprite))},preUpdate:function(){this.dirty&&this.sprite&&(this.context.clearRect(0,0,this.game.width,this.game.height),this.dirty=!1)},start:function(a,b,c,d){"number"!=typeof a&&(a=0),"number"!=typeof b&&(b=0),c=c||"rgb(255,255,255)","undefined"==typeof d&&(d=0),this.currentX=a,this.currentY=b,this.currentColor=c,this.currentAlpha=this.context.globalAlpha,this.columnWidth=d,this.sprite&&(this.dirty=!0),this.context.save(),this.context.setTransform(1,0,0,1,0,0),this.context.strokeStyle=c,this.context.fillStyle=c,this.context.font=this.font,this.context.globalAlpha=1},stop:function(){this.context.restore(),this.context.globalAlpha=this.currentAlpha,this.sprite&&PIXI.updateWebGLTexture(this.baseTexture,this.game.renderer.gl)},line:function(){for(var a=this.currentX,b=0;b<arguments.length;b++)this.renderShadow&&(this.context.fillStyle="rgb(0,0,0)",this.context.fillText(arguments[b],a+1,this.currentY+1),this.context.fillStyle=this.currentColor),this.context.fillText(arguments[b],a,this.currentY),a+=this.columnWidth;this.currentY+=this.lineHeight},soundInfo:function(a,b,c,d){this.start(b,c,d),this.line("Sound: "+a.key+" Locked: "+a.game.sound.touchLocked),this.line("Is Ready?: "+this.game.cache.isSoundReady(a.key)+" Pending Playback: "+a.pendingPlayback),this.line("Decoded: "+a.isDecoded+" Decoding: "+a.isDecoding),this.line("Total Duration: "+a.totalDuration+" Playing: "+a.isPlaying),this.line("Time: "+a.currentTime),this.line("Volume: "+a.volume+" Muted: "+a.mute),this.line("WebAudio: "+a.usingWebAudio+" Audio: "+a.usingAudioTag),""!==a.currentMarker&&(this.line("Marker: "+a.currentMarker+" Duration: "+a.duration),this.line("Start: "+a.markers[a.currentMarker].start+" Stop: "+a.markers[a.currentMarker].stop),this.line("Position: "+a.position)),this.stop()},cameraInfo:function(a,b,c,d){this.start(b,c,d),this.line("Camera ("+a.width+" x "+a.height+")"),this.line("X: "+a.x+" Y: "+a.y),this.line("Bounds x: "+a.bounds.x+" Y: "+a.bounds.y+" w: "+a.bounds.width+" h: "+a.bounds.height),this.line("View x: "+a.view.x+" Y: "+a.view.y+" w: "+a.view.width+" h: "+a.view.height),this.stop()},pointer:function(a,b,c,d,e){null!=a&&("undefined"==typeof b&&(b=!1),c=c||"rgba(0,255,0,0.5)",d=d||"rgba(255,0,0,0.5)",(b!==!0||a.isUp!==!0)&&(this.start(a.x,a.y-100,e),this.context.beginPath(),this.context.arc(a.x,a.y,a.circle.radius,0,2*Math.PI),this.context.fillStyle=a.active?c:d,this.context.fill(),this.context.closePath(),this.context.beginPath(),this.context.moveTo(a.positionDown.x,a.positionDown.y),this.context.lineTo(a.position.x,a.position.y),this.context.lineWidth=2,this.context.stroke(),this.context.closePath(),this.line("ID: "+a.id+" Active: "+a.active),this.line("World X: "+a.worldX+" World Y: "+a.worldY),this.line("Screen X: "+a.x+" Screen Y: "+a.y),this.line("Duration: "+a.duration+" ms"),this.line("is Down: "+a.isDown+" is Up: "+a.isUp),this.stop()))},spriteInputInfo:function(a,b,c,d){this.start(b,c,d),this.line("Sprite Input: ("+a.width+" x "+a.height+")"),this.line("x: "+a.input.pointerX().toFixed(1)+" y: "+a.input.pointerY().toFixed(1)),this.line("over: "+a.input.pointerOver()+" duration: "+a.input.overDuration().toFixed(0)),this.line("down: "+a.input.pointerDown()+" duration: "+a.input.downDuration().toFixed(0)),this.line("just over: "+a.input.justOver()+" just out: "+a.input.justOut()),this.stop()},key:function(a,b,c,d){this.start(b,c,d,150),this.line("Key:",a.keyCode,"isDown:",a.isDown),this.line("justPressed:",a.justPressed(),"justReleased:",a.justReleased()),this.line("Time Down:",a.timeDown.toFixed(0),"duration:",a.duration.toFixed(0)),this.stop()},inputInfo:function(a,b,c){this.start(a,b,c),this.line("Input"),this.line("X: "+this.game.input.x+" Y: "+this.game.input.y),this.line("World X: "+this.game.input.worldX+" World Y: "+this.game.input.worldY),this.line("Scale X: "+this.game.input.scale.x.toFixed(1)+" Scale Y: "+this.game.input.scale.x.toFixed(1)),this.line("Screen X: "+this.game.input.activePointer.screenX+" Screen Y: "+this.game.input.activePointer.screenY),this.stop()},spriteBounds:function(a,b,c){var d=a.getBounds();d.x+=this.game.camera.x,d.y+=this.game.camera.y,this.rectangle(d,b,c)},spriteInfo:function(a,b,c,d){this.start(b,c,d),this.line("Sprite:  ("+a.width+" x "+a.height+") anchor: "+a.anchor.x+" x "+a.anchor.y),this.line("x: "+a.x.toFixed(1)+" y: "+a.y.toFixed(1)),this.line("angle: "+a.angle.toFixed(1)+" rotation: "+a.rotation.toFixed(1)),this.line("visible: "+a.visible+" in camera: "+a.inCamera),this.stop()},spriteCoords:function(a,b,c,d){this.start(b,c,d,100),a.name&&this.line(a.name),this.line("x:",a.x.toFixed(2),"y:",a.y.toFixed(2)),this.line("pos x:",a.position.x.toFixed(2),"pos y:",a.position.y.toFixed(2)),this.line("world x:",a.world.x.toFixed(2),"world y:",a.world.y.toFixed(2)),this.stop()},lineInfo:function(a,b,c,d){this.start(b,c,d,80),this.line("start.x:",a.start.x.toFixed(2),"start.y:",a.start.y.toFixed(2)),this.line("end.x:",a.end.x.toFixed(2),"end.y:",a.end.y.toFixed(2)),this.line("length:",a.length.toFixed(2),"angle:",a.angle),this.stop()},pixel:function(a,b,c,d){d=d||2,this.start(),this.context.fillStyle=c,this.context.fillRect(a,b,d,d),this.stop()},geom:function(a,c,d,e){"undefined"==typeof d&&(d=!0),"undefined"==typeof e&&(e=0),c=c||"rgba(0,255,0,0.4)",this.start(),this.context.fillStyle=c,this.context.strokeStyle=c,a instanceof b.Rectangle||1===e?d?this.context.fillRect(a.x-this.game.camera.x,a.y-this.game.camera.y,a.width,a.height):this.context.strokeRect(a.x-this.game.camera.x,a.y-this.game.camera.y,a.width,a.height):a instanceof b.Circle||2===e?(this.context.beginPath(),this.context.arc(a.x-this.game.camera.x,a.y-this.game.camera.y,a.radius,0,2*Math.PI,!1),this.context.closePath(),d?this.context.fill():this.context.stroke()):a instanceof b.Point||3===e?this.context.fillRect(a.x-this.game.camera.x,a.y-this.game.camera.y,4,4):(a instanceof b.Line||4===e)&&(this.context.lineWidth=1,this.context.beginPath(),this.context.moveTo(a.start.x+.5-this.game.camera.x,a.start.y+.5-this.game.camera.y),this.context.lineTo(a.end.x+.5-this.game.camera.x,a.end.y+.5-this.game.camera.y),this.context.closePath(),this.context.stroke()),this.stop()},rectangle:function(a,b,c){"undefined"==typeof c&&(c=!0),b=b||"rgba(0, 255, 0, 0.4)",this.start(),c?(this.context.fillStyle=b,this.context.fillRect(a.x-this.game.camera.x,a.y-this.game.camera.y,a.width,a.height)):(this.context.strokeStyle=b,this.context.strokeRect(a.x-this.game.camera.x,a.y-this.game.camera.y,a.width,a.height)),this.stop()},text:function(a,b,c,d,e){d=d||"rgb(255,255,255)",e=e||"16px Courier",this.start(),this.context.font=e,this.renderShadow&&(this.context.fillStyle="rgb(0,0,0)",this.context.fillText(a,b+1,c+1)),this.context.fillStyle=d,this.context.fillText(a,b,c),this.stop()},quadTree:function(a,b){b=b||"rgba(255,0,0,0.3)",this.start();var c=a.bounds;if(0===a.nodes.length){this.context.strokeStyle=b,this.context.strokeRect(c.x,c.y,c.width,c.height),this.text("size: "+a.objects.length,c.x+4,c.y+16,"rgb(0,200,0)","12px Courier"),this.context.strokeStyle="rgb(0,255,0)";for(var d=0;d<a.objects.length;d++)this.context.strokeRect(a.objects[d].x,a.objects[d].y,a.objects[d].width,a.objects[d].height)}else for(var d=0;d<a.nodes.length;d++)this.quadTree(a.nodes[d]);this.stop()},body:function(a,c,d){a.body&&a.body.type===b.Physics.ARCADE&&(this.start(),b.Physics.Arcade.Body.render(this.context,a.body,c,d),this.stop())},bodyInfo:function(a,c,d,e){a.body&&a.body.type===b.Physics.ARCADE&&(this.start(c,d,e,210),b.Physics.Arcade.Body.renderBodyInfo(this,a.body),this.stop())}},b.Utils.Debug.prototype.constructor=b.Utils.Debug,b.Color={getColor32:function(a,b,c,d){return a<<24|b<<16|c<<8|d},getColor:function(a,b,c){return a<<16|b<<8|c},hexToRGB:function(a){var b="#"==a.charAt(0)?a.substring(1,7):a;3==b.length&&(b=b.charAt(0)+b.charAt(0)+b.charAt(1)+b.charAt(1)+b.charAt(2)+b.charAt(2));var c=parseInt(b.substring(0,2),16),d=parseInt(b.substring(2,4),16),e=parseInt(b.substring(4,6),16);return c<<16|d<<8|e},getColorInfo:function(a){var c=b.Color.getRGB(a),d=b.Color.RGBtoHSV(a),e=b.Color.RGBtoHexstring(a)+"\n";return e=e.concat("Alpha: "+c.alpha+" Red: "+c.red+" Green: "+c.green+" Blue: "+c.blue)+"\n",e=e.concat("Hue: "+d.hue+" Saturation: "+d.saturation+" Lightnes: "+d.lightness)},RGBtoHexstring:function(a){var c=b.Color.getRGB(a);return"0x"+b.Color.colorToHexstring(c.alpha)+b.Color.colorToHexstring(c.red)+b.Color.colorToHexstring(c.green)+b.Color.colorToHexstring(c.blue)},RGBtoWebstring:function(a){var c=b.Color.getRGB(a);return"#"+b.Color.colorToHexstring(c.red)+b.Color.colorToHexstring(c.green)+b.Color.colorToHexstring(c.blue)},colorToHexstring:function(a){var b="0123456789ABCDEF",c=a%16,d=(a-c)/16,e=b.charAt(d)+b.charAt(c);return e},interpolateColor:function(a,c,d,e,f){"undefined"==typeof f&&(f=255);var g=b.Color.getRGB(a),h=b.Color.getRGB(c),i=(h.red-g.red)*e/d+g.red,j=(h.green-g.green)*e/d+g.green,k=(h.blue-g.blue)*e/d+g.blue;return b.Color.getColor32(f,i,j,k)},interpolateColorWithRGB:function(a,c,d,e,f,g){var h=b.Color.getRGB(a),i=(c-h.red)*g/f+h.red,j=(d-h.green)*g/f+h.green,k=(e-h.blue)*g/f+h.blue;return b.Color.getColor(i,j,k)},interpolateRGB:function(a,c,d,e,f,g,h,i){var j=(e-a)*i/h+a,k=(f-c)*i/h+c,l=(g-d)*i/h+d;return b.Color.getColor(j,k,l)},getRandomColor:function(a,c,d){if("undefined"==typeof a&&(a=0),"undefined"==typeof c&&(c=255),"undefined"==typeof d&&(d=255),c>255)return b.Color.getColor(255,255,255);if(a>c)return b.Color.getColor(255,255,255);var e=a+Math.round(Math.random()*(c-a)),f=a+Math.round(Math.random()*(c-a)),g=a+Math.round(Math.random()*(c-a));return b.Color.getColor32(d,e,f,g)},getRGB:function(a){return{alpha:a>>>24,red:a>>16&255,green:a>>8&255,blue:255&a}},getWebRGB:function(a){var b=(a>>>24)/255,c=a>>16&255,d=a>>8&255,e=255&a;return"rgba("+c.toString()+","+d.toString()+","+e.toString()+","+b.toString()+")"},getAlpha:function(a){return a>>>24},getAlphaFloat:function(a){return(a>>>24)/255},getRed:function(a){return a>>16&255},getGreen:function(a){return a>>8&255},getBlue:function(a){return 255&a}},b.Physics=function(a,b){b=b||{},this.game=a,this.config=b,this.arcade=null,this.p2=null,this.ninja=null,this.box2d=null,this.chipmunk=null,this.parseConfig()},b.Physics.ARCADE=0,b.Physics.P2JS=1,b.Physics.NINJA=2,b.Physics.BOX2D=3,b.Physics.CHIPMUNK=5,b.Physics.prototype={parseConfig:function(){this.config.hasOwnProperty("arcade")&&this.config.arcade!==!0||!b.Physics.hasOwnProperty("Arcade")||(this.arcade=new b.Physics.Arcade(this.game),this.game.time.deltaCap=.2),this.config.hasOwnProperty("ninja")&&this.config.ninja===!0&&b.Physics.hasOwnProperty("Ninja")&&(this.ninja=new b.Physics.Ninja(this.game)),this.config.hasOwnProperty("p2")&&this.config.p2===!0&&b.Physics.hasOwnProperty("P2")&&(this.p2=new b.Physics.P2(this.game,this.config))},startSystem:function(a){if(a===b.Physics.ARCADE?this.arcade=new b.Physics.Arcade(this.game):a===b.Physics.P2JS&&(this.p2=new b.Physics.P2(this.game,this.config)),a===b.Physics.NINJA)this.ninja=new b.Physics.Ninja(this.game);else{if(a===b.Physics.BOX2D&&null===this.box2d)throw new Error("The Box2D physics system has not been implemented yet.");if(a===b.Physics.CHIPMUNK&&null===this.chipmunk)throw new Error("The Chipmunk physics system has not been implemented yet.")}},enable:function(a,c,d){"undefined"==typeof c&&(c=b.Physics.ARCADE),"undefined"==typeof d&&(d=!1),c===b.Physics.ARCADE?this.arcade.enable(a):c===b.Physics.P2JS&&this.p2?this.p2.enable(a,d):c===b.Physics.NINJA&&this.ninja&&this.ninja.enableAABB(a)},preUpdate:function(){this.p2&&this.p2.preUpdate()},update:function(){this.p2&&this.p2.update()},setBoundsToWorld:function(){this.arcade&&this.arcade.setBoundsToWorld(),this.ninja&&this.ninja.setBoundsToWorld(),this.p2&&this.p2.setBoundsToWorld()},clear:function(){this.p2&&this.p2.clear()},destroy:function(){this.p2&&this.p2.destroy(),this.arcade=null,this.ninja=null,this.p2=null}},b.Physics.prototype.constructor=b.Physics,b.Physics.Arcade=function(a){this.game=a,this.gravity=new b.Point,this.bounds=new b.Rectangle(0,0,a.world.width,a.world.height),this.checkCollision={up:!0,down:!0,left:!0,right:!0},this.maxObjects=10,this.maxLevels=4,this.OVERLAP_BIAS=4,this.TILE_BIAS=16,this.forceX=!1,this.quadTree=new b.QuadTree(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height,this.maxObjects,this.maxLevels),this._overlap=0,this._maxOverlap=0,this._velocity1=0,this._velocity2=0,this._newVelocity1=0,this._newVelocity2=0,this._average=0,this._mapData=[],this._result=!1,this._total=0,this._angle=0,this._dx=0,this._dy=0},b.Physics.Arcade.prototype.constructor=b.Physics.Arcade,b.Physics.Arcade.prototype={setBounds:function(a,b,c,d){this.bounds.setTo(a,b,c,d)},setBoundsToWorld:function(){this.bounds.setTo(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height)},enable:function(a,c){"undefined"==typeof c&&(c=!0);var d=1;if(Array.isArray(a))for(d=a.length;d--;)a[d]instanceof b.Group?this.enable(a[d].children,c):(this.enableBody(a[d]),c&&a[d].hasOwnProperty("children")&&a[d].children.length>0&&this.enable(a[d],!0));else a instanceof b.Group?this.enable(a.children,c):(this.enableBody(a),c&&a.hasOwnProperty("children")&&a.children.length>0&&this.enable(a.children,!0))},enableBody:function(a){a.hasOwnProperty("body")&&null===a.body&&(a.body=new b.Physics.Arcade.Body(a))},updateMotion:function(a){this._velocityDelta=this.computeVelocity(0,a,a.angularVelocity,a.angularAcceleration,a.angularDrag,a.maxAngular)-a.angularVelocity,a.angularVelocity+=this._velocityDelta,a.rotation+=a.angularVelocity*this.game.time.physicsElapsed,a.velocity.x=this.computeVelocity(1,a,a.velocity.x,a.acceleration.x,a.drag.x,a.maxVelocity.x),a.velocity.y=this.computeVelocity(2,a,a.velocity.y,a.acceleration.y,a.drag.y,a.maxVelocity.y)},computeVelocity:function(a,b,c,d,e,f){return f=f||1e4,1==a&&b.allowGravity?c+=(this.gravity.x+b.gravity.x)*this.game.time.physicsElapsed:2==a&&b.allowGravity&&(c+=(this.gravity.y+b.gravity.y)*this.game.time.physicsElapsed),d?c+=d*this.game.time.physicsElapsed:e&&(this._drag=e*this.game.time.physicsElapsed,c-this._drag>0?c-=this._drag:c+this._drag<0?c+=this._drag:c=0),c>f?c=f:-f>c&&(c=-f),c},overlap:function(a,b,c,d,e){if(c=c||null,d=d||null,e=e||c,this._result=!1,this._total=0,Array.isArray(b))for(var f=0,g=b.length;g>f;f++)this.collideHandler(a,b[f],c,d,e,!0);else this.collideHandler(a,b,c,d,e,!0);return this._total>0},collide:function(a,b,c,d,e){if(c=c||null,d=d||null,e=e||c,this._result=!1,this._total=0,Array.isArray(b))for(var f=0,g=b.length;g>f;f++)this.collideHandler(a,b[f],c,d,e,!1);else this.collideHandler(a,b,c,d,e,!1);return this._total>0},collideHandler:function(a,c,d,e,f,g){return"undefined"!=typeof c||a.type!==b.GROUP&&a.type!==b.EMITTER?void(a&&c&&a.exists&&c.exists&&(a.type==b.SPRITE||a.type==b.TILESPRITE?c.type==b.SPRITE||c.type==b.TILESPRITE?this.collideSpriteVsSprite(a,c,d,e,f,g):c.type==b.GROUP||c.type==b.EMITTER?this.collideSpriteVsGroup(a,c,d,e,f,g):c.type==b.TILEMAPLAYER&&this.collideSpriteVsTilemapLayer(a,c,d,e,f):a.type==b.GROUP?c.type==b.SPRITE||c.type==b.TILESPRITE?this.collideSpriteVsGroup(c,a,d,e,f,g):c.type==b.GROUP||c.type==b.EMITTER?this.collideGroupVsGroup(a,c,d,e,f,g):c.type==b.TILEMAPLAYER&&this.collideGroupVsTilemapLayer(a,c,d,e,f):a.type==b.TILEMAPLAYER?c.type==b.SPRITE||c.type==b.TILESPRITE?this.collideSpriteVsTilemapLayer(c,a,d,e,f):(c.type==b.GROUP||c.type==b.EMITTER)&&this.collideGroupVsTilemapLayer(c,a,d,e,f):a.type==b.EMITTER&&(c.type==b.SPRITE||c.type==b.TILESPRITE?this.collideSpriteVsGroup(c,a,d,e,f,g):c.type==b.GROUP||c.type==b.EMITTER?this.collideGroupVsGroup(a,c,d,e,f,g):c.type==b.TILEMAPLAYER&&this.collideGroupVsTilemapLayer(a,c,d,e,f)))):void this.collideGroupVsSelf(a,d,e,f,g)},collideSpriteVsSprite:function(a,b,c,d,e,f){return a.body&&b.body?(this.separate(a.body,b.body,d,e,f)&&(c&&c.call(e,a,b),this._total++),!0):!1},collideSpriteVsGroup:function(a,b,c,d,e,f){if(0!==b.length){this.quadTree.clear(),this.quadTree.reset(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height,this.maxObjects,this.maxLevels),this.quadTree.populate(b),this._potentials=this.quadTree.retrieve(a);for(var g=0,h=this._potentials.length;h>g;g++)this.separate(a.body,this._potentials[g],d,e,f)&&(c&&c.call(e,a,this._potentials[g].sprite),this._total++)}},collideGroupVsSelf:function(a,b,c,d,e){if(0!==a.length)for(var f=a.children.length,g=0;f>g;g++)for(var h=g+1;f>=h;h++)a.children[g]&&a.children[h]&&a.children[g].exists&&a.children[h].exists&&this.collideSpriteVsSprite(a.children[g],a.children[h],b,c,d,e)},collideGroupVsGroup:function(a,b,c,d,e,f){if(0!==a.length&&0!==b.length)for(var g=0,h=a.children.length;h>g;g++)a.children[g].exists&&this.collideSpriteVsGroup(a.children[g],b,c,d,e,f)},collideSpriteVsTilemapLayer:function(a,b,c,d,e){if(this._mapData=b.getTiles(a.body.position.x-a.body.tilePadding.x,a.body.position.y-a.body.tilePadding.y,a.body.width+a.body.tilePadding.x,a.body.height+a.body.tilePadding.y,!1,!1),0!==this._mapData.length)for(var f=0;f<this._mapData.length;f++)this.separateTile(f,a.body,this._mapData[f])&&(d?d.call(e,a,this._mapData[f])&&(this._total++,c&&c.call(e,a,this._mapData[f])):(this._total++,c&&c.call(e,a,this._mapData[f])))},collideGroupVsTilemapLayer:function(a,b,c,d,e){if(0!==a.length)for(var f=0,g=a.children.length;g>f;f++)a.children[f].exists&&this.collideSpriteVsTilemapLayer(a.children[f],b,c,d,e)},separate:function(a,b,c,d,e){return this.intersects(a,b)?c&&c.call(d,a.sprite,b.sprite)===!1?!1:e?!0:(this._result=this.forceX||Math.abs(this.gravity.y+a.gravity.y)<Math.abs(this.gravity.x+a.gravity.x)?this.separateX(a,b,e)||this.separateY(a,b,e):this.separateY(a,b,e)||this.separateX(a,b,e),this._result):!1},intersects:function(a,b){return a.right<=b.position.x?!1:a.bottom<=b.position.y?!1:a.position.x>=b.right?!1:a.position.y>=b.bottom?!1:!0},separateX:function(a,b,c){return a.immovable&&b.immovable?!1:(this._overlap=0,this.intersects(a,b)&&(this._maxOverlap=a.deltaAbsX()+b.deltaAbsX()+this.OVERLAP_BIAS,0===a.deltaX()&&0===b.deltaX()?(a.embedded=!0,b.embedded=!0):a.deltaX()>b.deltaX()?(this._overlap=a.right-b.x,this._overlap>this._maxOverlap||a.checkCollision.right===!1||b.checkCollision.left===!1?this._overlap=0:(a.touching.none=!1,a.touching.right=!0,b.touching.none=!1,b.touching.left=!0)):a.deltaX()<b.deltaX()&&(this._overlap=a.x-b.width-b.x,-this._overlap>this._maxOverlap||a.checkCollision.left===!1||b.checkCollision.right===!1?this._overlap=0:(a.touching.none=!1,a.touching.left=!0,b.touching.none=!1,b.touching.right=!0)),0!==this._overlap)?(a.overlapX=this._overlap,b.overlapX=this._overlap,c||a.customSeparateX||b.customSeparateX?!0:(this._velocity1=a.velocity.x,this._velocity2=b.velocity.x,a.immovable||b.immovable?a.immovable?b.immovable||(b.x+=this._overlap,b.velocity.x=this._velocity1-this._velocity2*b.bounce.x):(a.x=a.x-this._overlap,a.velocity.x=this._velocity2-this._velocity1*a.bounce.x):(this._overlap*=.5,a.x=a.x-this._overlap,b.x+=this._overlap,this._newVelocity1=Math.sqrt(this._velocity2*this._velocity2*b.mass/a.mass)*(this._velocity2>0?1:-1),this._newVelocity2=Math.sqrt(this._velocity1*this._velocity1*a.mass/b.mass)*(this._velocity1>0?1:-1),this._average=.5*(this._newVelocity1+this._newVelocity2),this._newVelocity1-=this._average,this._newVelocity2-=this._average,a.velocity.x=this._average+this._newVelocity1*a.bounce.x,b.velocity.x=this._average+this._newVelocity2*b.bounce.x),!0)):!1)},separateY:function(a,b,c){return a.immovable&&b.immovable?!1:(this._overlap=0,this.intersects(a,b)&&(this._maxOverlap=a.deltaAbsY()+b.deltaAbsY()+this.OVERLAP_BIAS,0===a.deltaY()&&0===b.deltaY()?(a.embedded=!0,b.embedded=!0):a.deltaY()>b.deltaY()?(this._overlap=a.bottom-b.y,this._overlap>this._maxOverlap||a.checkCollision.down===!1||b.checkCollision.up===!1?this._overlap=0:(a.touching.none=!1,a.touching.down=!0,b.touching.none=!1,b.touching.up=!0)):a.deltaY()<b.deltaY()&&(this._overlap=a.y-b.bottom,-this._overlap>this._maxOverlap||a.checkCollision.up===!1||b.checkCollision.down===!1?this._overlap=0:(a.touching.none=!1,a.touching.up=!0,b.touching.none=!1,b.touching.down=!0)),0!==this._overlap)?(a.overlapY=this._overlap,b.overlapY=this._overlap,c||a.customSeparateY||b.customSeparateY?!0:(this._velocity1=a.velocity.y,this._velocity2=b.velocity.y,a.immovable||b.immovable?a.immovable?b.immovable||(b.y+=this._overlap,b.velocity.y=this._velocity1-this._velocity2*b.bounce.y,a.moves&&(b.x+=a.x-a.prev.x)):(a.y=a.y-this._overlap,a.velocity.y=this._velocity2-this._velocity1*a.bounce.y,b.moves&&(a.x+=b.x-b.prev.x)):(this._overlap*=.5,a.y=a.y-this._overlap,b.y+=this._overlap,this._newVelocity1=Math.sqrt(this._velocity2*this._velocity2*b.mass/a.mass)*(this._velocity2>0?1:-1),this._newVelocity2=Math.sqrt(this._velocity1*this._velocity1*a.mass/b.mass)*(this._velocity1>0?1:-1),this._average=.5*(this._newVelocity1+this._newVelocity2),this._newVelocity1-=this._average,this._newVelocity2-=this._average,a.velocity.y=this._average+this._newVelocity1*a.bounce.y,b.velocity.y=this._average+this._newVelocity2*b.bounce.y),!0)):!1)},separateTile:function(a,b,c){if(!c.intersects(b.position.x,b.position.y,b.right,b.bottom))return!1;if(c.collisionCallback&&!c.collisionCallback.call(c.collisionCallbackContext,b.sprite,c))return!1;if(c.layer.callbacks[c.index]&&!c.layer.callbacks[c.index].callback.call(c.layer.callbacks[c.index].callbackContext,b.sprite,c))return!1;if(!(c.faceLeft||c.faceRight||c.faceTop||c.faceBottom))return!1;var d=0,e=0,f=0,g=1;if(b.deltaAbsX()>b.deltaAbsY()?f=-1:b.deltaAbsX()<b.deltaAbsY()&&(g=-1),0!==b.deltaX()&&0!==b.deltaY()&&(c.faceLeft||c.faceRight)&&(c.faceTop||c.faceBottom)&&(f=Math.min(Math.abs(b.position.x-c.right),Math.abs(b.right-c.left)),g=Math.min(Math.abs(b.position.y-c.bottom),Math.abs(b.bottom-c.top))),g>f){if((c.faceLeft||c.faceRight)&&(d=this.tileCheckX(b,c),0!==d&&!c.intersects(b.position.x,b.position.y,b.right,b.bottom)))return!0;(c.faceTop||c.faceBottom)&&(e=this.tileCheckY(b,c))}else{if((c.faceTop||c.faceBottom)&&(e=this.tileCheckY(b,c),0!==e&&!c.intersects(b.position.x,b.position.y,b.right,b.bottom)))return!0;(c.faceLeft||c.faceRight)&&(d=this.tileCheckX(b,c))}return 0!==d||0!==e},tileCheckX:function(a,b){var c=0;return a.deltaX()<0&&!a.blocked.left&&b.collideRight&&a.checkCollision.left?b.faceRight&&a.x<b.right&&(c=a.x-b.right,c<-this.TILE_BIAS&&(c=0)):a.deltaX()>0&&!a.blocked.right&&b.collideLeft&&a.checkCollision.right&&b.faceLeft&&a.right>b.left&&(c=a.right-b.left,c>this.TILE_BIAS&&(c=0)),0!==c&&this.processTileSeparationX(a,c),c},tileCheckY:function(a,b){var c=0;return a.deltaY()<0&&!a.blocked.up&&b.collideDown&&a.checkCollision.up?b.faceBottom&&a.y<b.bottom&&(c=a.y-b.bottom,c<-this.TILE_BIAS&&(c=0)):a.deltaY()>0&&!a.blocked.down&&b.collideUp&&a.checkCollision.down&&b.faceTop&&a.bottom>b.top&&(c=a.bottom-b.top,c>this.TILE_BIAS&&(c=0)),0!==c&&this.processTileSeparationY(a,c),c},processTileSeparationX:function(a,b){0>b?a.blocked.left=!0:b>0&&(a.blocked.right=!0),a.position.x-=b,a.velocity.x=0===a.bounce.x?0:-a.velocity.x*a.bounce.x},processTileSeparationY:function(a,b){0>b?a.blocked.up=!0:b>0&&(a.blocked.down=!0),a.position.y-=b,a.velocity.y=0===a.bounce.y?0:-a.velocity.y*a.bounce.y},moveToObject:function(a,b,c,d){return"undefined"==typeof c&&(c=60),"undefined"==typeof d&&(d=0),this._angle=Math.atan2(b.y-a.y,b.x-a.x),d>0&&(c=this.distanceBetween(a,b)/(d/1e3)),a.body.velocity.x=Math.cos(this._angle)*c,a.body.velocity.y=Math.sin(this._angle)*c,this._angle},moveToPointer:function(a,b,c,d){return"undefined"==typeof b&&(b=60),c=c||this.game.input.activePointer,"undefined"==typeof d&&(d=0),this._angle=this.angleToPointer(a,c),d>0&&(b=this.distanceToPointer(a,c)/(d/1e3)),a.body.velocity.x=Math.cos(this._angle)*b,a.body.velocity.y=Math.sin(this._angle)*b,this._angle},moveToXY:function(a,b,c,d,e){return"undefined"==typeof d&&(d=60),"undefined"==typeof e&&(e=0),this._angle=Math.atan2(c-a.y,b-a.x),e>0&&(d=this.distanceToXY(a,b,c)/(e/1e3)),a.body.velocity.x=Math.cos(this._angle)*d,a.body.velocity.y=Math.sin(this._angle)*d,this._angle},velocityFromAngle:function(a,c,d){return"undefined"==typeof c&&(c=60),d=d||new b.Point,d.setTo(Math.cos(this.game.math.degToRad(a))*c,Math.sin(this.game.math.degToRad(a))*c)},velocityFromRotation:function(a,c,d){return"undefined"==typeof c&&(c=60),d=d||new b.Point,d.setTo(Math.cos(a)*c,Math.sin(a)*c)},accelerationFromRotation:function(a,c,d){return"undefined"==typeof c&&(c=60),d=d||new b.Point,d.setTo(Math.cos(a)*c,Math.sin(a)*c)},accelerateToObject:function(a,b,c,d,e){return"undefined"==typeof c&&(c=60),"undefined"==typeof d&&(d=1e3),"undefined"==typeof e&&(e=1e3),this._angle=this.angleBetween(a,b),a.body.acceleration.setTo(Math.cos(this._angle)*c,Math.sin(this._angle)*c),a.body.maxVelocity.setTo(d,e),this._angle},accelerateToPointer:function(a,b,c,d,e){return"undefined"==typeof c&&(c=60),"undefined"==typeof b&&(b=this.game.input.activePointer),"undefined"==typeof d&&(d=1e3),"undefined"==typeof e&&(e=1e3),this._angle=this.angleToPointer(a,b),a.body.acceleration.setTo(Math.cos(this._angle)*c,Math.sin(this._angle)*c),a.body.maxVelocity.setTo(d,e),this._angle},accelerateToXY:function(a,b,c,d,e,f){return"undefined"==typeof d&&(d=60),"undefined"==typeof e&&(e=1e3),"undefined"==typeof f&&(f=1e3),this._angle=this.angleToXY(a,b,c),a.body.acceleration.setTo(Math.cos(this._angle)*d,Math.sin(this._angle)*d),a.body.maxVelocity.setTo(e,f),this._angle},distanceBetween:function(a,b){return this._dx=a.x-b.x,this._dy=a.y-b.y,Math.sqrt(this._dx*this._dx+this._dy*this._dy)},distanceToXY:function(a,b,c){return this._dx=a.x-b,this._dy=a.y-c,Math.sqrt(this._dx*this._dx+this._dy*this._dy)},distanceToPointer:function(a,b){return b=b||this.game.input.activePointer,this._dx=a.x-b.x,this._dy=a.y-b.y,Math.sqrt(this._dx*this._dx+this._dy*this._dy)},angleBetween:function(a,b){return this._dx=b.x-a.x,this._dy=b.y-a.y,Math.atan2(this._dy,this._dx)},angleToXY:function(a,b,c){return this._dx=b-a.x,this._dy=c-a.y,Math.atan2(this._dy,this._dx)},angleToPointer:function(a,b){return b=b||this.game.input.activePointer,this._dx=b.worldX-a.x,this._dy=b.worldY-a.y,Math.atan2(this._dy,this._dx)}},b.Physics.Arcade.Body=function(a){this.sprite=a,this.game=a.game,this.type=b.Physics.ARCADE,this.offset=new b.Point,this.position=new b.Point(a.x,a.y),this.prev=new b.Point(this.position.x,this.position.y),this.allowRotation=!0,this.rotation=a.rotation,this.preRotation=a.rotation,this.sourceWidth=a.texture.frame.width,this.sourceHeight=a.texture.frame.height,this.width=a.width,this.height=a.height,this.halfWidth=Math.abs(a.width/2),this.halfHeight=Math.abs(a.height/2),this.center=new b.Point(a.x+this.halfWidth,a.y+this.halfHeight),this.velocity=new b.Point,this.newVelocity=new b.Point(0,0),this.deltaMax=new b.Point(0,0),this.acceleration=new b.Point,this.drag=new b.Point,this.allowGravity=!0,this.gravity=new b.Point(0,0),this.bounce=new b.Point,this.maxVelocity=new b.Point(1e4,1e4),this.angularVelocity=0,this.angularAcceleration=0,this.angularDrag=0,this.maxAngular=1e3,this.mass=1,this.angle=0,this.speed=0,this.facing=b.NONE,this.immovable=!1,this.moves=!0,this.customSeparateX=!1,this.customSeparateY=!1,this.overlapX=0,this.overlapY=0,this.embedded=!1,this.collideWorldBounds=!1,this.checkCollision={none:!1,any:!0,up:!0,down:!0,left:!0,right:!0},this.touching={none:!0,up:!1,down:!1,left:!1,right:!1},this.wasTouching={none:!0,up:!1,down:!1,left:!1,right:!1},this.blocked={up:!1,down:!1,left:!1,right:!1},this.tilePadding=new b.Point,this.phase=0,this._reset=!0,this._sx=a.scale.x,this._sy=a.scale.y,this._dx=0,this._dy=0},b.Physics.Arcade.Body.prototype={updateBounds:function(){var a=Math.abs(this.sprite.scale.x),b=Math.abs(this.sprite.scale.y);(a!==this._sx||b!==this._sy)&&(this.width=this.sourceWidth*a,this.height=this.sourceHeight*b,this.halfWidth=Math.floor(this.width/2),this.halfHeight=Math.floor(this.height/2),this._sx=a,this._sy=b,this.center.setTo(this.position.x+this.halfWidth,this.position.y+this.halfHeight),this._reset=!0)},preUpdate:function(){this.phase=1,this.wasTouching.none=this.touching.none,this.wasTouching.up=this.touching.up,this.wasTouching.down=this.touching.down,this.wasTouching.left=this.touching.left,this.wasTouching.right=this.touching.right,this.touching.none=!0,this.touching.up=!1,this.touching.down=!1,this.touching.left=!1,this.touching.right=!1,this.blocked.up=!1,this.blocked.down=!1,this.blocked.left=!1,this.blocked.right=!1,this.embedded=!1,this.updateBounds(),this.position.x=this.sprite.world.x-this.sprite.anchor.x*this.width+this.offset.x,this.position.y=this.sprite.world.y-this.sprite.anchor.y*this.height+this.offset.y,this.rotation=this.sprite.angle,this.preRotation=this.rotation,(this._reset||1===this.sprite._cache[4])&&(this.prev.x=this.position.x,this.prev.y=this.position.y),this.moves&&(this.game.physics.arcade.updateMotion(this),this.newVelocity.set(this.velocity.x*this.game.time.physicsElapsed,this.velocity.y*this.game.time.physicsElapsed),this.position.x+=this.newVelocity.x,this.position.y+=this.newVelocity.y,(this.position.x!==this.prev.x||this.position.y!==this.prev.y)&&(this.speed=Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y),this.angle=Math.atan2(this.velocity.y,this.velocity.x)),this.collideWorldBounds&&this.checkWorldBounds()),this._dx=this.deltaX(),this._dy=this.deltaY(),this._reset=!1},postUpdate:function(){this.phase=2,this.deltaX()<0?this.facing=b.LEFT:this.deltaX()>0&&(this.facing=b.RIGHT),this.deltaY()<0?this.facing=b.UP:this.deltaY()>0&&(this.facing=b.DOWN),this.moves&&(this._dx=this.deltaX(),this._dy=this.deltaY(),0!==this.deltaMax.x&&0!==this._dx&&(this._dx<0&&this._dx<-this.deltaMax.x?this._dx=-this.deltaMax.x:this._dx>0&&this._dx>this.deltaMax.x&&(this._dx=this.deltaMax.x)),0!==this.deltaMax.y&&0!==this._dy&&(this._dy<0&&this._dy<-this.deltaMax.y?this._dy=-this.deltaMax.y:this._dy>0&&this._dy>this.deltaMax.y&&(this._dy=this.deltaMax.y)),this.sprite.x+=this._dx,this.sprite.y+=this._dy),this.center.setTo(this.position.x+this.halfWidth,this.position.y+this.halfHeight),this.allowRotation&&(this.sprite.angle+=this.deltaZ()),this.prev.x=this.position.x,this.prev.y=this.position.y},destroy:function(){this.sprite=null},checkWorldBounds:function(){this.position.x<this.game.physics.arcade.bounds.x&&this.game.physics.arcade.checkCollision.left?(this.position.x=this.game.physics.arcade.bounds.x,this.velocity.x*=-this.bounce.x,this.blocked.left=!0):this.right>this.game.physics.arcade.bounds.right&&this.game.physics.arcade.checkCollision.right&&(this.position.x=this.game.physics.arcade.bounds.right-this.width,this.velocity.x*=-this.bounce.x,this.blocked.right=!0),this.position.y<this.game.physics.arcade.bounds.y&&this.game.physics.arcade.checkCollision.up?(this.position.y=this.game.physics.arcade.bounds.y,this.velocity.y*=-this.bounce.y,this.blocked.up=!0):this.bottom>this.game.physics.arcade.bounds.bottom&&this.game.physics.arcade.checkCollision.down&&(this.position.y=this.game.physics.arcade.bounds.bottom-this.height,this.velocity.y*=-this.bounce.y,this.blocked.down=!0)
},setSize:function(a,b,c,d){c=c||this.offset.x,d=d||this.offset.y,this.sourceWidth=a,this.sourceHeight=b,this.width=this.sourceWidth*this._sx,this.height=this.sourceHeight*this._sy,this.halfWidth=Math.floor(this.width/2),this.halfHeight=Math.floor(this.height/2),this.offset.setTo(c,d),this.center.setTo(this.position.x+this.halfWidth,this.position.y+this.halfHeight)},reset:function(a,b){this.velocity.set(0),this.acceleration.set(0),this.angularVelocity=0,this.angularAcceleration=0,this.position.x=a-this.sprite.anchor.x*this.width+this.offset.x,this.position.y=b-this.sprite.anchor.y*this.height+this.offset.y,this.prev.x=this.position.x,this.prev.y=this.position.y,this.rotation=this.sprite.angle,this.preRotation=this.rotation,this._sx=this.sprite.scale.x,this._sy=this.sprite.scale.y,this.center.setTo(this.position.x+this.halfWidth,this.position.y+this.halfHeight)},onFloor:function(){return this.blocked.down},onWall:function(){return this.blocked.left||this.blocked.right},deltaAbsX:function(){return this.deltaX()>0?this.deltaX():-this.deltaX()},deltaAbsY:function(){return this.deltaY()>0?this.deltaY():-this.deltaY()},deltaX:function(){return this.position.x-this.prev.x},deltaY:function(){return this.position.y-this.prev.y},deltaZ:function(){return this.rotation-this.preRotation}},Object.defineProperty(b.Physics.Arcade.Body.prototype,"bottom",{get:function(){return this.position.y+this.height}}),Object.defineProperty(b.Physics.Arcade.Body.prototype,"right",{get:function(){return this.position.x+this.width}}),Object.defineProperty(b.Physics.Arcade.Body.prototype,"x",{get:function(){return this.position.x},set:function(a){this.position.x=a}}),Object.defineProperty(b.Physics.Arcade.Body.prototype,"y",{get:function(){return this.position.y},set:function(a){this.position.y=a}}),b.Physics.Arcade.Body.render=function(a,b,c,d){"undefined"==typeof c&&(c=!0),d=d||"rgba(0,255,0,0.4)",c?(a.fillStyle=d,a.fillRect(b.position.x-b.game.camera.x,b.position.y-b.game.camera.y,b.width,b.height)):(a.strokeStyle=d,a.strokeRect(b.position.x-b.game.camera.x,b.position.y-b.game.camera.y,b.width,b.height))},b.Physics.Arcade.Body.renderBodyInfo=function(a,b){a.line("x: "+b.x.toFixed(2),"y: "+b.y.toFixed(2),"width: "+b.width,"height: "+b.height),a.line("velocity x: "+b.velocity.x.toFixed(2),"y: "+b.velocity.y.toFixed(2),"deltaX: "+b._dx.toFixed(2),"deltaY: "+b._dy.toFixed(2)),a.line("acceleration x: "+b.acceleration.x.toFixed(2),"y: "+b.acceleration.y.toFixed(2),"speed: "+b.speed.toFixed(2),"angle: "+b.angle.toFixed(2)),a.line("gravity x: "+b.gravity.x,"y: "+b.gravity.y,"bounce x: "+b.bounce.x.toFixed(2),"y: "+b.bounce.y.toFixed(2)),a.line("touching left: "+b.touching.left,"right: "+b.touching.right,"up: "+b.touching.up,"down: "+b.touching.down),a.line("blocked left: "+b.blocked.left,"right: "+b.blocked.right,"up: "+b.blocked.up,"down: "+b.blocked.down)},b.Physics.Arcade.Body.prototype.constructor=b.Physics.Arcade.Body,b.Particles=function(a){this.game=a,this.emitters={},this.ID=0},b.Particles.prototype={add:function(a){return this.emitters[a.name]=a,a},remove:function(a){delete this.emitters[a.name]},update:function(){for(var a in this.emitters)this.emitters[a].exists&&this.emitters[a].update()}},b.Particles.prototype.constructor=b.Particles,b.Particles.Arcade={},b.Particles.Arcade.Emitter=function(a,c,d,e){this.maxParticles=e||50,b.Group.call(this,a),this.name="emitter"+this.game.particles.ID++,this.type=b.EMITTER,this.x=0,this.y=0,this.width=1,this.height=1,this.minParticleSpeed=new b.Point(-100,-100),this.maxParticleSpeed=new b.Point(100,100),this.minParticleScale=1,this.maxParticleScale=1,this.minRotation=-360,this.maxRotation=360,this.gravity=100,this.particleClass=b.Sprite,this.particleDrag=new b.Point,this.angularDrag=0,this.frequency=100,this.lifespan=2e3,this.bounce=new b.Point,this._quantity=0,this._timer=0,this._counter=0,this._explode=!0,this._frames=null,this.on=!1,this.exists=!0,this.emitX=c,this.emitY=d},b.Particles.Arcade.Emitter.prototype=Object.create(b.Group.prototype),b.Particles.Arcade.Emitter.prototype.constructor=b.Particles.Arcade.Emitter,b.Particles.Arcade.Emitter.prototype.update=function(){if(this.on)if(this._explode){this._counter=0;do this.emitParticle(),this._counter++;while(this._counter<this._quantity);this.on=!1}else this.game.time.now>=this._timer&&(this.emitParticle(),this._counter++,this._quantity>0&&this._counter>=this._quantity&&(this.on=!1),this._timer=this.game.time.now+this.frequency)},b.Particles.Arcade.Emitter.prototype.makeParticles=function(a,b,c,d,e){"undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=this.maxParticles),"undefined"==typeof d&&(d=!1),"undefined"==typeof e&&(e=!1);var f,g=0,h=a,i=b;for(this._frames=b;c>g;)"object"==typeof a&&(h=this.game.rnd.pick(a)),"object"==typeof b&&(i=this.game.rnd.pick(b)),f=new this.particleClass(this.game,0,0,h,i),this.game.physics.arcade.enable(f,!1),d?(f.body.checkCollision.any=!0,f.body.checkCollision.none=!1):f.body.checkCollision.none=!0,f.body.collideWorldBounds=e,f.exists=!1,f.visible=!1,f.anchor.set(.5),this.add(f),g++;return this},b.Particles.Arcade.Emitter.prototype.kill=function(){this.on=!1,this.alive=!1,this.exists=!1},b.Particles.Arcade.Emitter.prototype.revive=function(){this.alive=!0,this.exists=!0},b.Particles.Arcade.Emitter.prototype.start=function(a,b,c,d){"undefined"==typeof a&&(a=!0),"undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=250),"undefined"==typeof d&&(d=0),this.revive(),this.visible=!0,this.on=!0,this._explode=a,this.lifespan=b,this.frequency=c,a?this._quantity=d:this._quantity+=d,this._counter=0,this._timer=this.game.time.now+c},b.Particles.Arcade.Emitter.prototype.emitParticle=function(){var a=this.getFirstExists(!1);null!=a&&(a.angle=0,a.bringToTop(),(1!==this.minParticleScale||1!==this.maxParticleScale)&&a.scale.set(this.game.rnd.realInRange(this.minParticleScale,this.maxParticleScale)),this.width>1||this.height>1?a.reset(this.game.rnd.integerInRange(this.left,this.right),this.game.rnd.integerInRange(this.top,this.bottom)):a.reset(this.emitX,this.emitY),a.lifespan=this.lifespan,a.body.bounce.setTo(this.bounce.x,this.bounce.y),a.body.velocity.x=this.minParticleSpeed.x!==this.maxParticleSpeed.x?this.game.rnd.integerInRange(this.minParticleSpeed.x,this.maxParticleSpeed.x):this.minParticleSpeed.x,a.body.velocity.y=this.minParticleSpeed.y!==this.maxParticleSpeed.y?this.game.rnd.integerInRange(this.minParticleSpeed.y,this.maxParticleSpeed.y):this.minParticleSpeed.y,this.minRotation!==this.maxRotation?a.body.angularVelocity=this.game.rnd.integerInRange(this.minRotation,this.maxRotation):0!==this.minRotation&&(a.body.angularVelocity=this.minRotation),a.frame="object"==typeof this._frames?this.game.rnd.pick(this._frames):this._frames,a.body.gravity.y=this.gravity,a.body.drag.x=this.particleDrag.x,a.body.drag.y=this.particleDrag.y,a.body.angularDrag=this.angularDrag)},b.Particles.Arcade.Emitter.prototype.setSize=function(a,b){this.width=a,this.height=b},b.Particles.Arcade.Emitter.prototype.setXSpeed=function(a,b){a=a||0,b=b||0,this.minParticleSpeed.x=a,this.maxParticleSpeed.x=b},b.Particles.Arcade.Emitter.prototype.setYSpeed=function(a,b){a=a||0,b=b||0,this.minParticleSpeed.y=a,this.maxParticleSpeed.y=b},b.Particles.Arcade.Emitter.prototype.setRotation=function(a,b){a=a||0,b=b||0,this.minRotation=a,this.maxRotation=b},b.Particles.Arcade.Emitter.prototype.at=function(a){a.center&&(this.emitX=a.center.x,this.emitY=a.center.y)},Object.defineProperty(b.Particles.Arcade.Emitter.prototype,"x",{get:function(){return this.emitX},set:function(a){this.emitX=a}}),Object.defineProperty(b.Particles.Arcade.Emitter.prototype,"y",{get:function(){return this.emitY},set:function(a){this.emitY=a}}),Object.defineProperty(b.Particles.Arcade.Emitter.prototype,"left",{get:function(){return Math.floor(this.x-this.width/2)}}),Object.defineProperty(b.Particles.Arcade.Emitter.prototype,"right",{get:function(){return Math.floor(this.x+this.width/2)}}),Object.defineProperty(b.Particles.Arcade.Emitter.prototype,"top",{get:function(){return Math.floor(this.y-this.height/2)}}),Object.defineProperty(b.Particles.Arcade.Emitter.prototype,"bottom",{get:function(){return Math.floor(this.y+this.height/2)}}),b.Tile=function(a,b,c,d,e,f){this.layer=a,this.index=b,this.x=c,this.y=d,this.worldX=c*e,this.worldY=d*f,this.width=e,this.height=f,this.centerX=Math.abs(e/2),this.centerY=Math.abs(f/2),this.alpha=1,this.properties={},this.scanned=!1,this.faceTop=!1,this.faceBottom=!1,this.faceLeft=!1,this.faceRight=!1,this.collideLeft=!1,this.collideRight=!1,this.collideUp=!1,this.collideDown=!1,this.collisionCallback=null,this.collisionCallbackContext=this},b.Tile.prototype={containsPoint:function(a,b){return!(a<this.worldX||b<this.worldY||a>this.right||b>this.bottom)},intersects:function(a,b,c,d){return c<=this.worldX?!1:d<=this.worldY?!1:a>=this.worldX+this.width?!1:b>=this.worldY+this.height?!1:!0},setCollisionCallback:function(a,b){this.collisionCallback=a,this.collisionCallbackContext=b},destroy:function(){this.collisionCallback=null,this.collisionCallbackContext=null,this.properties=null},setCollision:function(a,b,c,d){this.collideLeft=a,this.collideRight=b,this.collideUp=c,this.collideDown=d},resetCollision:function(){this.collideLeft=!1,this.collideRight=!1,this.collideUp=!1,this.collideDown=!1,this.faceTop=!1,this.faceBottom=!1,this.faceLeft=!1,this.faceRight=!1},isInteresting:function(a,b){return a&&b?this.collideLeft||this.collideRight||this.collideUp||this.collideDown||this.faceTop||this.faceBottom||this.faceLeft||this.faceRight||this.collisionCallback:a?this.collideLeft||this.collideRight||this.collideUp||this.collideDown:b?this.faceTop||this.faceBottom||this.faceLeft||this.faceRight:!1},copy:function(a){this.index=a.index,this.alpha=a.alpha,this.properties=a.properties,this.collideUp=a.collideUp,this.collideDown=a.collideDown,this.collideLeft=a.collideLeft,this.collideRight=a.collideRight,this.collisionCallback=a.collisionCallback,this.collisionCallbackContext=a.collisionCallbackContext}},b.Tile.prototype.constructor=b.Tile,Object.defineProperty(b.Tile.prototype,"collides",{get:function(){return this.collideLeft||this.collideRight||this.collideUp||this.collideDown}}),Object.defineProperty(b.Tile.prototype,"canCollide",{get:function(){return this.collideLeft||this.collideRight||this.collideUp||this.collideDown||this.collisionCallback}}),Object.defineProperty(b.Tile.prototype,"left",{get:function(){return this.worldX}}),Object.defineProperty(b.Tile.prototype,"right",{get:function(){return this.worldX+this.width}}),Object.defineProperty(b.Tile.prototype,"top",{get:function(){return this.worldY}}),Object.defineProperty(b.Tile.prototype,"bottom",{get:function(){return this.worldY+this.height}}),b.Tilemap=function(a,c,d,e,f,g){this.game=a,this.key=c;var h=b.TilemapParser.parse(this.game,c,d,e,f,g);null!==h&&(this.width=h.width,this.height=h.height,this.tileWidth=h.tileWidth,this.tileHeight=h.tileHeight,this.orientation=h.orientation,this.version=h.version,this.properties=h.properties,this.widthInPixels=h.widthInPixels,this.heightInPixels=h.heightInPixels,this.layers=h.layers,this.tilesets=h.tilesets,this.tiles=h.tiles,this.objects=h.objects,this.collideIndexes=[],this.collision=h.collision,this.images=h.images,this.currentLayer=0,this.debugMap=[],this._results=[],this._tempA=0,this._tempB=0)},b.Tilemap.CSV=0,b.Tilemap.TILED_JSON=1,b.Tilemap.prototype={create:function(a,b,c,d,e,f){return"undefined"==typeof f&&(f=this.game.world),this.width=b,this.height=c,this.setTileSize(d,e),this.layers.length=0,this.createBlankLayer(a,b,c,d,e,f)},setTileSize:function(a,b){this.tileWidth=a,this.tileHeight=b,this.widthInPixels=this.width*a,this.heightInPixels=this.height*b},addTilesetImage:function(a,c,d,e,f,g,h){if("undefined"==typeof d&&(d=this.tileWidth),"undefined"==typeof e&&(e=this.tileHeight),"undefined"==typeof f&&(f=0),"undefined"==typeof g&&(g=0),"undefined"==typeof h&&(h=0),0===d&&(d=32),0===e&&(e=32),"undefined"==typeof c){if("string"!=typeof a)return null;c=a}if("string"==typeof a&&(a=this.getTilesetIndex(a)),this.tilesets[a])return this.tilesets[a].setImage(this.game.cache.getImage(c)),this.tilesets[a];var i=new b.Tileset(c,h,d,e,f,g,{});i.setImage(this.game.cache.getImage(c)),this.tilesets.push(i);for(var j=this.tilesets.length-1,k=f,l=f,m=0,n=0,o=0,p=h;p<h+i.total&&(this.tiles[p]=[k,l,j],k+=d+g,m++,m!==i.total)&&(n++,n!==i.columns||(k=f,l+=e+g,n=0,o++,o!==i.rows));p++);return i},createFromObjects:function(a,c,d,e,f,g,h,i,j){if("undefined"==typeof f&&(f=!0),"undefined"==typeof g&&(g=!1),"undefined"==typeof h&&(h=this.game.world),"undefined"==typeof i&&(i=b.Sprite),"undefined"==typeof j&&(j=!0),!this.objects[a])return void console.warn("Tilemap.createFromObjects: Invalid objectgroup name given: "+a);for(var k,l=0,m=this.objects[a].length;m>l;l++)if(this.objects[a][l].gid===c){k=new i(this.game,this.objects[a][l].x,this.objects[a][l].y,d,e),k.name=this.objects[a][l].name,k.visible=this.objects[a][l].visible,k.autoCull=g,k.exists=f,j&&(k.y-=k.height),h.add(k);for(var n in this.objects[a][l].properties)h.set(k,n,this.objects[a][l].properties[n],!1,!1,0)}},createLayer:function(a,c,d,e){"undefined"==typeof c&&(c=this.game.width),"undefined"==typeof d&&(d=this.game.height),"undefined"==typeof e&&(e=this.game.world);var f=a;return"string"==typeof a&&(f=this.getLayerIndex(a)),null===f||f>this.layers.length?void console.warn("Tilemap.createLayer: Invalid layer ID given: "+f):e.add(new b.TilemapLayer(this.game,this,f,c,d))},createBlankLayer:function(a,c,d,e,f,g){if("undefined"==typeof g&&(g=this.game.world),null!==this.getLayerIndex(a))return void console.warn("Tilemap.createBlankLayer: Layer with matching name already exists");for(var h,i=[],j=0;d>j;j++){h=[];for(var k=0;c>k;k++)h.push(null);i.push(h)}var l={name:a,x:0,y:0,width:c,height:d,widthInPixels:c*e,heightInPixels:d*f,alpha:1,visible:!0,properties:{},indexes:[],callbacks:[],bodies:[],data:i};this.layers.push(l),this.currentLayer=this.layers.length-1;var m=l.widthInPixels,n=l.heightInPixels;m>this.game.width&&(m=this.game.width),n>this.game.height&&(n=this.game.height);var i=new b.TilemapLayer(this.game,this,this.layers.length-1,m,n);return i.name=a,g.add(i)},getIndex:function(a,b){for(var c=0;c<a.length;c++)if(a[c].name===b)return c;return null},getLayerIndex:function(a){return this.getIndex(this.layers,a)},getTilesetIndex:function(a){return this.getIndex(this.tilesets,a)},getImageIndex:function(a){return this.getIndex(this.images,a)},getObjectIndex:function(a){return this.getIndex(this.objects,a)},setTileIndexCallback:function(a,b,c,d){if(d=this.getLayer(d),"number"==typeof a)this.layers[d].callbacks[a]={callback:b,callbackContext:c};else for(var e=0,f=a.length;f>e;e++)this.layers[d].callbacks[a[e]]={callback:b,callbackContext:c}},setTileLocationCallback:function(a,b,c,d,e,f,g){if(g=this.getLayer(g),this.copy(a,b,c,d,g),!(this._results.length<2))for(var h=1;h<this._results.length;h++)this._results[h].setCollisionCallback(e,f)},setCollision:function(a,b,c){if("undefined"==typeof b&&(b=!0),c=this.getLayer(c),"number"==typeof a)return this.setCollisionByIndex(a,b,c,!0);for(var d=0,e=a.length;e>d;d++)this.setCollisionByIndex(a[d],b,c,!1);this.calculateFaces(c)},setCollisionBetween:function(a,b,c,d){if("undefined"==typeof c&&(c=!0),d=this.getLayer(d),!(a>b)){for(var e=a;b>=e;e++)this.setCollisionByIndex(e,c,d,!1);this.calculateFaces(d)}},setCollisionByExclusion:function(a,b,c){"undefined"==typeof b&&(b=!0),c=this.getLayer(c);for(var d=0,e=this.tiles.length;e>d;d++)-1===a.indexOf(d)&&this.setCollisionByIndex(d,b,c,!1);this.calculateFaces(c)},setCollisionByIndex:function(a,b,c,d){if("undefined"==typeof b&&(b=!0),"undefined"==typeof c&&(c=this.currentLayer),"undefined"==typeof d&&(d=!0),b)this.collideIndexes.push(a);else{var e=this.collideIndexes.indexOf(a);e>-1&&this.collideIndexes.splice(e,1)}for(var f=0;f<this.layers[c].height;f++)for(var g=0;g<this.layers[c].width;g++){var h=this.layers[c].data[f][g];h&&h.index===a&&(b?h.setCollision(!0,!0,!0,!0):h.resetCollision(),h.faceTop=b,h.faceBottom=b,h.faceLeft=b,h.faceRight=b)}return d&&this.calculateFaces(c),c},getLayer:function(a){return"undefined"==typeof a?a=this.currentLayer:"string"==typeof a?a=this.getLayerIndex(a):a instanceof b.TilemapLayer&&(a=a.index),a},calculateFaces:function(a){for(var b=null,c=null,d=null,e=null,f=0,g=this.layers[a].height;g>f;f++)for(var h=0,i=this.layers[a].width;i>h;h++){var j=this.layers[a].data[f][h];j&&(b=this.getTileAbove(a,h,f),c=this.getTileBelow(a,h,f),d=this.getTileLeft(a,h,f),e=this.getTileRight(a,h,f),j.collides&&(j.faceTop=!0,j.faceBottom=!0,j.faceLeft=!0,j.faceRight=!0),b&&b.collides&&(j.faceTop=!1),c&&c.collides&&(j.faceBottom=!1),d&&d.collides&&(j.faceLeft=!1),e&&e.collides&&(j.faceRight=!1))}},getTileAbove:function(a,b,c){return c>0?this.layers[a].data[c-1][b]:null},getTileBelow:function(a,b,c){return c<this.layers[a].height-1?this.layers[a].data[c+1][b]:null},getTileLeft:function(a,b,c){return b>0?this.layers[a].data[c][b-1]:null},getTileRight:function(a,b,c){return b<this.layers[a].width-1?this.layers[a].data[c][b+1]:null},setLayer:function(a){a=this.getLayer(a),this.layers[a]&&(this.currentLayer=a)},hasTile:function(a,b,c){return null!==this.layers[c].data[b]&&null!==this.layers[c].data[b][a]},putTile:function(a,c,d,e){if(e=this.getLayer(e),c>=0&&c<this.layers[e].width&&d>=0&&d<this.layers[e].height){var f;return a instanceof b.Tile?(f=a.index,this.hasTile(c,d,e)?this.layers[e].data[d][c].copy(a):this.layers[e].data[d][c]=new b.Tile(e,f,c,d,a.width,a.height)):(f=a,this.hasTile(c,d,e)?this.layers[e].data[d][c].index=f:this.layers[e].data[d][c]=new b.Tile(this.layers[e],f,c,d,this.tileWidth,this.tileHeight)),this.collideIndexes.indexOf(f)>-1?this.layers[e].data[d][c].setCollision(!0,!0,!0,!0):this.layers[e].data[d][c].resetCollision(),this.layers[e].dirty=!0,this.calculateFaces(e),this.layers[e].data[d][c]}return null},putTileWorldXY:function(a,b,c,d,e,f){f=this.getLayer(f),b=this.game.math.snapToFloor(b,d)/d,c=this.game.math.snapToFloor(c,e)/e,this.putTile(a,b,c,f)},getTile:function(a,b,c){return c=this.getLayer(c),a>=0&&a<this.layers[c].width&&b>=0&&b<this.layers[c].height?this.layers[c].data[b][a]:void 0},getTileWorldXY:function(a,b,c,d,e){return"undefined"==typeof c&&(c=this.tileWidth),"undefined"==typeof d&&(d=this.tileHeight),e=this.getLayer(e),a=this.game.math.snapToFloor(a,c)/c,b=this.game.math.snapToFloor(b,d)/d,this.getTile(a,b,e)},copy:function(a,b,c,d,e){if(e=this.getLayer(e),!this.layers[e])return void(this._results.length=0);"undefined"==typeof a&&(a=0),"undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=this.layers[e].width),"undefined"==typeof d&&(d=this.layers[e].height),0>a&&(a=0),0>b&&(b=0),c>this.layers[e].width&&(c=this.layers[e].width),d>this.layers[e].height&&(d=this.layers[e].height),this._results.length=0,this._results.push({x:a,y:b,width:c,height:d,layer:e});for(var f=b;b+d>f;f++)for(var g=a;a+c>g;g++)this._results.push(this.layers[e].data[f][g]);return this._results},paste:function(a,b,c,d){if("undefined"==typeof a&&(a=0),"undefined"==typeof b&&(b=0),d=this.getLayer(d),c&&!(c.length<2)){for(var e=c[1].x-a,f=c[1].y-b,g=1;g<c.length;g++)this.layers[d].data[f+c[g].y][e+c[g].x].copy(c[g]);this.layers[d].dirty=!0,this.calculateFaces(d)}},swap:function(a,b,c,d,e,f,g){g=this.getLayer(g),this.copy(c,d,e,f,g),this._results.length<2||(this._tempA=a,this._tempB=b,this._results.forEach(this.swapHandler,this),this.paste(c,d,this._results,g))},swapHandler:function(a,b){a.index===this._tempA&&(this._results[b].index=this._tempB),a.index===this._tempB&&(this._results[b].index=this._tempA)},forEach:function(a,b,c,d,e,f,g){g=this.getLayer(g),this.copy(c,d,e,f,g),this._results.length<2||(this._results.forEach(a,b),this.paste(c,d,this._results,g))},replace:function(a,b,c,d,e,f,g){if(g=this.getLayer(g),this.copy(c,d,e,f,g),!(this._results.length<2)){for(var h=1;h<this._results.length;h++)this._results[h].index===a&&(this._results[h].index=b);this.paste(c,d,this._results,g)}},random:function(a,b,c,d,e){if(e=this.getLayer(e),this.copy(a,b,c,d,e),!(this._results.length<2)){for(var f=[],g=1;g<this._results.length;g++)if(this._results[g].index){var h=this._results[g].index;-1===f.indexOf(h)&&f.push(h)}for(var i=1;i<this._results.length;i++)this._results[i].index=this.game.rnd.pick(f);this.paste(a,b,this._results,e)}},shuffle:function(a,c,d,e,f){if(f=this.getLayer(f),this.copy(a,c,d,e,f),!(this._results.length<2)){for(var g=[],h=1;h<this._results.length;h++)this._results[h].index&&g.push(this._results[h].index);b.Utils.shuffle(g);for(var i=1;i<this._results.length;i++)this._results[i].index=g[i-1];this.paste(a,c,this._results,f)}},fill:function(a,b,c,d,e,f){if(f=this.getLayer(f),this.copy(b,c,d,e,f),!(this._results.length<2)){for(var g=1;g<this._results.length;g++)this._results[g].index=a;this.paste(b,c,this._results,f)}},removeAllLayers:function(){this.layers.length=0,this.currentLayer=0},dump:function(){for(var a="",b=[""],c=0;c<this.layers[this.currentLayer].height;c++){for(var d=0;d<this.layers[this.currentLayer].width;d++)a+="%c  ",b.push(this.layers[this.currentLayer].data[c][d]>1?this.debugMap[this.layers[this.currentLayer].data[c][d]]?"background: "+this.debugMap[this.layers[this.currentLayer].data[c][d]]:"background: #ffffff":"background: rgb(0, 0, 0)");a+="\n"}b[0]=a,console.log.apply(console,b)},destroy:function(){this.removeAllLayers(),this.data=[],this.game=null}},b.Tilemap.prototype.constructor=b.Tilemap,b.TilemapLayer=function(a,c,d,e,f){this.game=a,this.map=c,this.index=d,this.layer=c.layers[d],this.canvas=b.Canvas.create(e,f,"",!0),this.context=this.canvas.getContext("2d"),this.baseTexture=new PIXI.BaseTexture(this.canvas),this.texture=new PIXI.Texture(this.baseTexture),this.textureFrame=new b.Frame(0,0,0,e,f,"tilemapLayer",a.rnd.uuid()),b.Image.call(this,this.game,0,0,this.texture,this.textureFrame),this.name="",this.type=b.TILEMAPLAYER,this.fixedToCamera=!0,this.cameraOffset=new b.Point(0,0),this.tileColor="rgb(255, 255, 255)",this.debug=!1,this.debugAlpha=.5,this.debugColor="rgba(0, 255, 0, 1)",this.debugFill=!1,this.debugFillColor="rgba(0, 255, 0, 0.2)",this.debugCallbackColor="rgba(255, 0, 0, 1)",this.scrollFactorX=1,this.scrollFactorY=1,this.dirty=!0,this.rayStepRate=4,this._mc={cw:c.tileWidth,ch:c.tileHeight,ga:1,dx:0,dy:0,dw:0,dh:0,tx:0,ty:0,tw:0,th:0,tl:0,maxX:0,maxY:0,startX:0,startY:0,x:0,y:0,prevX:0,prevY:0},this._results=[],this.updateMax()},b.TilemapLayer.prototype=Object.create(b.Image.prototype),b.TilemapLayer.prototype.constructor=b.TilemapLayer,b.TilemapLayer.prototype.postUpdate=function(){b.Image.prototype.postUpdate.call(this),this.scrollX=this.game.camera.x*this.scrollFactorX,this.scrollY=this.game.camera.y*this.scrollFactorY,this.render(),1===this._cache[7]&&(this.position.x=(this.game.camera.view.x+this.cameraOffset.x)/this.game.camera.scale.x,this.position.y=(this.game.camera.view.y+this.cameraOffset.y)/this.game.camera.scale.y)},b.TilemapLayer.prototype.resizeWorld=function(){this.game.world.setBounds(0,0,this.layer.widthInPixels,this.layer.heightInPixels)},b.TilemapLayer.prototype._fixX=function(a){return 0>a&&(a=0),1===this.scrollFactorX?a:this._mc.x+(a-this._mc.x/this.scrollFactorX)},b.TilemapLayer.prototype._unfixX=function(a){return 1===this.scrollFactorX?a:this._mc.x/this.scrollFactorX+(a-this._mc.x)},b.TilemapLayer.prototype._fixY=function(a){return 0>a&&(a=0),1===this.scrollFactorY?a:this._mc.y+(a-this._mc.y/this.scrollFactorY)},b.TilemapLayer.prototype._unfixY=function(a){return 1===this.scrollFactorY?a:this._mc.y/this.scrollFactorY+(a-this._mc.y)},b.TilemapLayer.prototype.getTileX=function(a){return this.game.math.snapToFloor(this._fixX(a),this.map.tileWidth)/this.map.tileWidth},b.TilemapLayer.prototype.getTileY=function(a){return this.game.math.snapToFloor(this._fixY(a),this.map.tileHeight)/this.map.tileHeight},b.TilemapLayer.prototype.getTileXY=function(a,b,c){return c.x=this.getTileX(a),c.y=this.getTileY(b),c},b.TilemapLayer.prototype.getRayCastTiles=function(a,b,c,d){("undefined"==typeof b||null===b)&&(b=this.rayStepRate),"undefined"==typeof c&&(c=!1),"undefined"==typeof d&&(d=!1);var e=this.getTiles(a.x,a.y,a.width,a.height,c,d);if(0===e.length)return[];for(var f=a.coordinatesOnLine(b),g=f.length,h=[],i=0;i<e.length;i++)for(var j=0;g>j;j++)if(e[i].containsPoint(f[j][0],f[j][1])){h.push(e[i]);break}return h},b.TilemapLayer.prototype.getTiles=function(a,b,c,d,e,f){"undefined"==typeof e&&(e=!1),"undefined"==typeof f&&(f=!1),a=this._fixX(a),b=this._fixY(b),c>this.layer.widthInPixels&&(c=this.layer.widthInPixels),d>this.layer.heightInPixels&&(d=this.layer.heightInPixels),this._mc.tx=this.game.math.snapToFloor(a,this._mc.cw)/this._mc.cw,this._mc.ty=this.game.math.snapToFloor(b,this._mc.ch)/this._mc.ch,this._mc.tw=(this.game.math.snapToCeil(c,this._mc.cw)+this._mc.cw)/this._mc.cw,this._mc.th=(this.game.math.snapToCeil(d,this._mc.ch)+this._mc.ch)/this._mc.ch,this._results.length=0;for(var g=this._mc.ty;g<this._mc.ty+this._mc.th;g++)for(var h=this._mc.tx;h<this._mc.tx+this._mc.tw;h++)this.layer.data[g]&&this.layer.data[g][h]&&(!e&&!f||this.layer.data[g][h].isInteresting(e,f))&&this._results.push(this.layer.data[g][h]);return this._results},b.TilemapLayer.prototype.updateMax=function(){this._mc.maxX=this.game.math.ceil(this.canvas.width/this.map.tileWidth)+1,this._mc.maxY=this.game.math.ceil(this.canvas.height/this.map.tileHeight)+1,this.layer&&(this._mc.maxX>this.layer.width&&(this._mc.maxX=this.layer.width),this._mc.maxY>this.layer.height&&(this._mc.maxY=this.layer.height)),this.dirty=!0},b.TilemapLayer.prototype.render=function(){if(this.layer.dirty&&(this.dirty=!0),this.dirty&&this.visible){this._mc.prevX=this._mc.dx,this._mc.prevY=this._mc.dy,this._mc.dx=-(this._mc.x-this._mc.startX*this.map.tileWidth),this._mc.dy=-(this._mc.y-this._mc.startY*this.map.tileHeight),this._mc.tx=this._mc.dx,this._mc.ty=this._mc.dy,this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.tileColor;var a,c;this.debug&&(this.context.globalAlpha=this.debugAlpha);for(var d=this._mc.startY,e=this._mc.startY+this._mc.maxY;e>d;d++){this._column=this.layer.data[d];for(var f=this._mc.startX,g=this._mc.startX+this._mc.maxX;g>f;f++)this._column[f]&&(a=this._column[f],c=this.map.tilesets[this.map.tiles[a.index][2]],this.debug===!1&&a.alpha!==this.context.globalAlpha&&(this.context.globalAlpha=a.alpha),c.draw(this.context,Math.floor(this._mc.tx),Math.floor(this._mc.ty),a.index),a.debug&&(this.context.fillStyle="rgba(0, 255, 0, 0.4)",this.context.fillRect(Math.floor(this._mc.tx),Math.floor(this._mc.ty),this.map.tileWidth,this.map.tileHeight))),this._mc.tx+=this.map.tileWidth;this._mc.tx=this._mc.dx,this._mc.ty+=this.map.tileHeight}return this.debug&&(this.context.globalAlpha=1,this.renderDebug()),this.game.renderType===b.WEBGL&&PIXI.updateWebGLTexture(this.baseTexture,this.game.renderer.gl),this.dirty=!1,this.layer.dirty=!1,!0}},b.TilemapLayer.prototype.renderDebug=function(){this._mc.tx=this._mc.dx,this._mc.ty=this._mc.dy,this.context.strokeStyle=this.debugColor,this.context.fillStyle=this.debugFillColor;for(var a=this._mc.startY,b=this._mc.startY+this._mc.maxY;b>a;a++){this._column=this.layer.data[a];for(var c=this._mc.startX,d=this._mc.startX+this._mc.maxX;d>c;c++){var e=this._column[c];e&&(e.faceTop||e.faceBottom||e.faceLeft||e.faceRight)&&(this._mc.tx=Math.floor(this._mc.tx),this.debugFill&&this.context.fillRect(this._mc.tx,this._mc.ty,this._mc.cw,this._mc.ch),this.context.beginPath(),e.faceTop&&(this.context.moveTo(this._mc.tx,this._mc.ty),this.context.lineTo(this._mc.tx+this._mc.cw,this._mc.ty)),e.faceBottom&&(this.context.moveTo(this._mc.tx,this._mc.ty+this._mc.ch),this.context.lineTo(this._mc.tx+this._mc.cw,this._mc.ty+this._mc.ch)),e.faceLeft&&(this.context.moveTo(this._mc.tx,this._mc.ty),this.context.lineTo(this._mc.tx,this._mc.ty+this._mc.ch)),e.faceRight&&(this.context.moveTo(this._mc.tx+this._mc.cw,this._mc.ty),this.context.lineTo(this._mc.tx+this._mc.cw,this._mc.ty+this._mc.ch)),this.context.stroke()),this._mc.tx+=this.map.tileWidth}this._mc.tx=this._mc.dx,this._mc.ty+=this.map.tileHeight}},Object.defineProperty(b.TilemapLayer.prototype,"scrollX",{get:function(){return this._mc.x},set:function(a){a!==this._mc.x&&a>=0&&this.layer.widthInPixels>this.width&&(this._mc.x=a,this._mc.x>this.layer.widthInPixels-this.width&&(this._mc.x=this.layer.widthInPixels-this.width),this._mc.startX=this.game.math.floor(this._mc.x/this.map.tileWidth),this._mc.startX<0&&(this._mc.startX=0),this._mc.startX+this._mc.maxX>this.layer.width&&(this._mc.startX=this.layer.width-this._mc.maxX),this.dirty=!0)}}),Object.defineProperty(b.TilemapLayer.prototype,"scrollY",{get:function(){return this._mc.y},set:function(a){a!==this._mc.y&&a>=0&&this.layer.heightInPixels>this.height&&(this._mc.y=a,this._mc.y>this.layer.heightInPixels-this.height&&(this._mc.y=this.layer.heightInPixels-this.height),this._mc.startY=this.game.math.floor(this._mc.y/this.map.tileHeight),this._mc.startY<0&&(this._mc.startY=0),this._mc.startY+this._mc.maxY>this.layer.height&&(this._mc.startY=this.layer.height-this._mc.maxY),this.dirty=!0)}}),Object.defineProperty(b.TilemapLayer.prototype,"collisionWidth",{get:function(){return this._mc.cw},set:function(a){this._mc.cw=a,this.dirty=!0}}),Object.defineProperty(b.TilemapLayer.prototype,"collisionHeight",{get:function(){return this._mc.ch},set:function(a){this._mc.ch=a,this.dirty=!0}}),b.TilemapParser={parse:function(a,c,d,e,f,g){if("undefined"==typeof d&&(d=32),"undefined"==typeof e&&(e=32),"undefined"==typeof f&&(f=10),"undefined"==typeof g&&(g=10),"undefined"==typeof c)return this.getEmptyData();if(null===c)return this.getEmptyData(d,e,f,g);var h=a.cache.getTilemapData(c);if(h){if(h.format===b.Tilemap.CSV)return this.parseCSV(c,h.data,d,e);if(!h.format||h.format===b.Tilemap.TILED_JSON)return this.parseTiledJSON(h.data)}else console.warn("Phaser.TilemapParser.parse - No map data found for key "+c)},parseCSV:function(a,c,d,e){var f=this.getEmptyData();c=c.trim();for(var g=[],h=c.split("\n"),i=h.length,j=0,k=0;k<h.length;k++){g[k]=[];for(var l=h[k].split(","),m=0;m<l.length;m++)g[k][m]=new b.Tile(0,parseInt(l[m],10),m,k,d,e);0===j&&(j=l.length)}return f.name=a,f.width=j,f.height=i,f.tileWidth=d,f.tileHeight=e,f.widthInPixels=j*d,f.heightInPixels=i*e,f.layers[0].width=j,f.layers[0].height=i,f.layers[0].widthInPixels=f.widthInPixels,f.layers[0].heightInPixels=f.heightInPixels,f.layers[0].data=g,f},getEmptyData:function(a,b,c,d){var e={};e.width=0,e.height=0,e.tileWidth=0,e.tileHeight=0,"undefined"!=typeof a&&null!==a&&(e.tileWidth=a),"undefined"!=typeof b&&null!==b&&(e.tileHeight=b),"undefined"!=typeof c&&null!==c&&(e.width=c),"undefined"!=typeof d&&null!==d&&(e.height=d),e.orientation="orthogonal",e.version="1",e.properties={},e.widthInPixels=0,e.heightInPixels=0;var f=[],g={name:"layer",x:0,y:0,width:0,height:0,widthInPixels:0,heightInPixels:0,alpha:1,visible:!0,properties:{},indexes:[],callbacks:[],data:[]};return f.push(g),e.layers=f,e.images=[],e.objects={},e.collision={},e.tilesets=[],e.tiles=[],e},parseTiledJSON:function(a){if("orthogonal"!==a.orientation)return console.warn("TilemapParser.parseTiledJSON: Only orthogonal map types are supported in this version of Phaser"),null;var c={};c.width=a.width,c.height=a.height,c.tileWidth=a.tilewidth,c.tileHeight=a.tileheight,c.orientation=a.orientation,c.version=a.version,c.properties=a.properties,c.widthInPixels=c.width*c.tileWidth,c.heightInPixels=c.height*c.tileHeight;for(var d=[],e=0;e<a.layers.length;e++)if("tilelayer"===a.layers[e].type){var f={name:a.layers[e].name,x:a.layers[e].x,y:a.layers[e].y,width:a.layers[e].width,height:a.layers[e].height,widthInPixels:a.layers[e].width*a.tilewidth,heightInPixels:a.layers[e].height*a.tileheight,alpha:a.layers[e].opacity,visible:a.layers[e].visible,properties:{},indexes:[],callbacks:[],bodies:[]};a.layers[e].properties&&(f.properties=a.layers[e].properties);
for(var g=0,h=[],i=[],j=0,k=a.layers[e].data.length;k>j;j++)h.push(a.layers[e].data[j]>0?new b.Tile(f,a.layers[e].data[j],g,i.length,a.tilewidth,a.tileheight):null),g++,g===a.layers[e].width&&(i.push(h),g=0,h=[]);f.data=i,d.push(f)}c.layers=d;for(var l=[],e=0;e<a.layers.length;e++)if("imagelayer"===a.layers[e].type){var m={name:a.layers[e].name,image:a.layers[e].image,x:a.layers[e].x,y:a.layers[e].y,alpha:a.layers[e].opacity,visible:a.layers[e].visible,properties:{}};a.layers[e].properties&&(m.properties=a.layers[e].properties),l.push(m)}c.images=l;for(var n=[],e=0;e<a.tilesets.length;e++){var o=a.tilesets[e],p=new b.Tileset(o.name,o.firstgid,o.tilewidth,o.tileheight,o.margin,o.spacing,o.properties);o.tileproperties&&(p.tileProperties=o.tileproperties),p.rows=Math.round((o.imageheight-o.margin)/(o.tileheight+o.spacing)),p.columns=Math.round((o.imagewidth-o.margin)/(o.tilewidth+o.spacing)),p.total=p.rows*p.columns,p.rows%1!==0||p.columns%1!==0?console.warn("TileSet image dimensions do not match expected dimensions. Tileset width/height must be evenly divisible by Tilemap tile width/height."):n.push(p)}c.tilesets=n;for(var q={},r={},e=0;e<a.layers.length;e++)if("objectgroup"===a.layers[e].type){q[a.layers[e].name]=[],r[a.layers[e].name]=[];for(var s=0,k=a.layers[e].objects.length;k>s;s++)if(a.layers[e].objects[s].gid){var t={gid:a.layers[e].objects[s].gid,name:a.layers[e].objects[s].name,x:a.layers[e].objects[s].x,y:a.layers[e].objects[s].y,visible:a.layers[e].objects[s].visible,properties:a.layers[e].objects[s].properties};q[a.layers[e].name].push(t)}else if(a.layers[e].objects[s].polyline){var t={name:a.layers[e].objects[s].name,x:a.layers[e].objects[s].x,y:a.layers[e].objects[s].y,width:a.layers[e].objects[s].width,height:a.layers[e].objects[s].height,visible:a.layers[e].objects[s].visible,properties:a.layers[e].objects[s].properties};t.polyline=[];for(var u=0;u<a.layers[e].objects[s].polyline.length;u++)t.polyline.push([a.layers[e].objects[s].polyline[u].x,a.layers[e].objects[s].polyline[u].y]);r[a.layers[e].name].push(t)}}c.objects=q,c.collision=r,c.tiles=[];for(var e=0;e<c.tilesets.length;e++)for(var o=c.tilesets[e],g=o.tileMargin,v=o.tileMargin,w=0,x=0,y=0,j=o.firstgid;j<o.firstgid+o.total&&(c.tiles[j]=[g,v,e],g+=o.tileWidth+o.tileSpacing,w++,w!==o.total)&&(x++,x!==o.columns||(g=o.tileMargin,v+=o.tileHeight+o.tileSpacing,x=0,y++,y!==o.rows));j++);return c}},b.Tileset=function(a,b,c,d,e,f,g){("undefined"==typeof c||0>=c)&&(c=32),("undefined"==typeof d||0>=d)&&(d=32),"undefined"==typeof e&&(e=0),"undefined"==typeof f&&(f=0),this.name=a,this.firstgid=b,this.tileWidth=c,this.tileHeight=d,this.tileMargin=e,this.tileSpacing=f,this.properties=g,this.image=null,this.rows=0,this.columns=0,this.total=0,this.drawCoords=[]},b.Tileset.prototype={draw:function(a,b,c,d){this.image&&this.drawCoords[d]&&a.drawImage(this.image,this.drawCoords[d][0],this.drawCoords[d][1],this.tileWidth,this.tileHeight,b,c,this.tileWidth,this.tileHeight)},setImage:function(a){this.image=a,this.rows=Math.round((a.height-this.tileMargin)/(this.tileHeight+this.tileSpacing)),this.columns=Math.round((a.width-this.tileMargin)/(this.tileWidth+this.tileSpacing)),this.total=this.rows*this.columns,this.drawCoords.length=0;for(var b=this.tileMargin,c=this.tileMargin,d=this.firstgid,e=0;e<this.rows;e++){for(var f=0;f<this.columns;f++)this.drawCoords[d]=[b,c],b+=this.tileWidth+this.tileSpacing,d++;b=this.tileMargin,c+=this.tileHeight+this.tileSpacing}},setSpacing:function(a,b){this.tileMargin=a,this.tileSpacing=b,this.setImage(this.image)}},b.Tileset.prototype.constructor=b.Tileset,"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=b),exports.Phaser=b):"undefined"!=typeof define&&define.amd?define("Phaser",function(){return a.Phaser=b}()):a.Phaser=b}.call(this),Phaser.Physics.Ninja=function(a){this.game=a,this.time=this.game.time,this.gravity=.2,this.bounds=new Phaser.Rectangle(0,0,a.world.width,a.world.height),this.maxObjects=10,this.maxLevels=4,this.quadTree=new Phaser.QuadTree(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height,this.maxObjects,this.maxLevels)},Phaser.Physics.Ninja.prototype.constructor=Phaser.Physics.Ninja,Phaser.Physics.Ninja.prototype={enableAABB:function(a,b){this.enable(a,1,0,0,b)},enableCircle:function(a,b,c){this.enable(a,2,0,b,c)},enableTile:function(a,b,c){this.enable(a,3,b,0,c)},enable:function(a,b,c,d,e){if("undefined"==typeof b&&(b=1),"undefined"==typeof c&&(c=1),"undefined"==typeof d&&(d=0),"undefined"==typeof e&&(e=!0),Array.isArray(a))for(var f=a.length;f--;)a[f]instanceof Phaser.Group?this.enable(a[f].children,b,c,d,e):(this.enableBody(a[f],b,c,d),e&&a[f].hasOwnProperty("children")&&a[f].children.length>0&&this.enable(a[f],b,c,d,!0));else a instanceof Phaser.Group?this.enable(a.children,b,c,d,e):(this.enableBody(a,b,c,d),e&&a.hasOwnProperty("children")&&a.children.length>0&&this.enable(a.children,b,c,d,!0))},enableBody:function(a,b,c,d){a.hasOwnProperty("body")&&null===a.body&&(a.body=new Phaser.Physics.Ninja.Body(this,a,b,c,d),a.anchor.set(.5))},setBounds:function(a,b,c,d){this.bounds.setTo(a,b,c,d)},setBoundsToWorld:function(){this.bounds.setTo(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height)},clearTilemapLayerBodies:function(a,b){b=a.getLayer(b);for(var c=a.layers[b].bodies.length;c--;)a.layers[b].bodies[c].destroy();a.layers[b].bodies.length=[]},convertTilemap:function(a,b,c){b=a.getLayer(b),this.clearTilemapLayerBodies(a,b);for(var d=0,e=a.layers[b].height;e>d;d++)for(var f=0,g=a.layers[b].width;g>f;f++){var h=a.layers[b].data[d][f];if(h&&c.hasOwnProperty(h.index)){var i=new Phaser.Physics.Ninja.Body(this,null,3,c[h.index],0,h.worldX+h.centerX,h.worldY+h.centerY,h.width,h.height);a.layers[b].bodies.push(i)}}return a.layers[b].bodies},overlap:function(a,b,c,d,e){if(c=c||null,d=d||null,e=e||c,this._result=!1,this._total=0,Array.isArray(b))for(var f=0,g=b.length;g>f;f++)this.collideHandler(a,b[f],c,d,e,!0);else this.collideHandler(a,b,c,d,e,!0);return this._total>0},collide:function(a,b,c,d,e){if(c=c||null,d=d||null,e=e||c,this._result=!1,this._total=0,Array.isArray(b))for(var f=0,g=b.length;g>f;f++)this.collideHandler(a,b[f],c,d,e,!1);else this.collideHandler(a,b,c,d,e,!1);return this._total>0},collideHandler:function(a,b,c,d,e,f){return"undefined"!=typeof b||a.type!==Phaser.GROUP&&a.type!==Phaser.EMITTER?void(a&&b&&a.exists&&b.exists&&(a.type==Phaser.SPRITE||a.type==Phaser.TILESPRITE?b.type==Phaser.SPRITE||b.type==Phaser.TILESPRITE?this.collideSpriteVsSprite(a,b,c,d,e,f):b.type==Phaser.GROUP||b.type==Phaser.EMITTER?this.collideSpriteVsGroup(a,b,c,d,e,f):b.type==Phaser.TILEMAPLAYER&&this.collideSpriteVsTilemapLayer(a,b,c,d,e):a.type==Phaser.GROUP?b.type==Phaser.SPRITE||b.type==Phaser.TILESPRITE?this.collideSpriteVsGroup(b,a,c,d,e,f):b.type==Phaser.GROUP||b.type==Phaser.EMITTER?this.collideGroupVsGroup(a,b,c,d,e,f):b.type==Phaser.TILEMAPLAYER&&this.collideGroupVsTilemapLayer(a,b,c,d,e):a.type==Phaser.TILEMAPLAYER?b.type==Phaser.SPRITE||b.type==Phaser.TILESPRITE?this.collideSpriteVsTilemapLayer(b,a,c,d,e):(b.type==Phaser.GROUP||b.type==Phaser.EMITTER)&&this.collideGroupVsTilemapLayer(b,a,c,d,e):a.type==Phaser.EMITTER&&(b.type==Phaser.SPRITE||b.type==Phaser.TILESPRITE?this.collideSpriteVsGroup(b,a,c,d,e,f):b.type==Phaser.GROUP||b.type==Phaser.EMITTER?this.collideGroupVsGroup(a,b,c,d,e,f):b.type==Phaser.TILEMAPLAYER&&this.collideGroupVsTilemapLayer(a,b,c,d,e)))):void this.collideGroupVsSelf(a,c,d,e,f)},collideSpriteVsSprite:function(a,b,c,d,e,f){this.separate(a.body,b.body,d,e,f)&&(c&&c.call(e,a,b),this._total++)},collideSpriteVsGroup:function(a,b,c,d,e,f){if(0!==b.length)for(var g=0,h=b.children.length;h>g;g++)b.children[g].exists&&b.children[g].body&&this.separate(a.body,b.children[g].body,d,e,f)&&(c&&c.call(e,a,b.children[g]),this._total++)},collideGroupVsSelf:function(a,b,c,d,e){if(0!==a.length)for(var f=a.children.length,g=0;f>g;g++)for(var h=g+1;f>=h;h++)a.children[g]&&a.children[h]&&a.children[g].exists&&a.children[h].exists&&this.collideSpriteVsSprite(a.children[g],a.children[h],b,c,d,e)},collideGroupVsGroup:function(a,b,c,d,e,f){if(0!==a.length&&0!==b.length)for(var g=0,h=a.children.length;h>g;g++)a.children[g].exists&&this.collideSpriteVsGroup(a.children[g],b,c,d,e,f)},separate:function(a,b){return a.type!==Phaser.Physics.NINJA||b.type!==Phaser.Physics.NINJA?!1:a.aabb&&b.aabb?a.aabb.collideAABBVsAABB(b.aabb):a.aabb&&b.tile?a.aabb.collideAABBVsTile(b.tile):a.tile&&b.aabb?b.aabb.collideAABBVsTile(a.tile):a.circle&&b.tile?a.circle.collideCircleVsTile(b.tile):a.tile&&b.circle?b.circle.collideCircleVsTile(a.tile):void 0}},Phaser.Physics.Ninja.Body=function(a,b,c,d,e,f,g,h,i){b=b||null,"undefined"==typeof c&&(c=1),"undefined"==typeof d&&(d=1),"undefined"==typeof e&&(e=16),this.sprite=b,this.game=a.game,this.type=Phaser.Physics.NINJA,this.system=a,this.aabb=null,this.tile=null,this.circle=null,this.shape=null,this.drag=1,this.friction=.05,this.gravityScale=1,this.bounce=.3,this.velocity=new Phaser.Point,this.facing=Phaser.NONE,this.immovable=!1,this.collideWorldBounds=!0,this.checkCollision={none:!1,any:!0,up:!0,down:!0,left:!0,right:!0},this.touching={none:!0,up:!1,down:!1,left:!1,right:!1},this.wasTouching={none:!0,up:!1,down:!1,left:!1,right:!1},this.maxSpeed=8,b&&(f=b.x,g=b.y,h=b.width,i=b.height,0===b.anchor.x&&(f+=.5*b.width),0===b.anchor.y&&(g+=.5*b.height)),1===c?(this.aabb=new Phaser.Physics.Ninja.AABB(this,f,g,h,i),this.shape=this.aabb):2===c?(this.circle=new Phaser.Physics.Ninja.Circle(this,f,g,e),this.shape=this.circle):3===c&&(this.tile=new Phaser.Physics.Ninja.Tile(this,f,g,h,i,d),this.shape=this.tile)},Phaser.Physics.Ninja.Body.prototype={preUpdate:function(){this.wasTouching.none=this.touching.none,this.wasTouching.up=this.touching.up,this.wasTouching.down=this.touching.down,this.wasTouching.left=this.touching.left,this.wasTouching.right=this.touching.right,this.touching.none=!0,this.touching.up=!1,this.touching.down=!1,this.touching.left=!1,this.touching.right=!1,this.shape.integrate(),this.collideWorldBounds&&this.shape.collideWorldBounds()},postUpdate:function(){this.sprite&&(this.sprite.type===Phaser.TILESPRITE?(this.sprite.x=this.shape.pos.x-this.shape.xw,this.sprite.y=this.shape.pos.y-this.shape.yw):(this.sprite.x=this.shape.pos.x,this.sprite.y=this.shape.pos.y)),this.velocity.x<0?this.facing=Phaser.LEFT:this.velocity.x>0&&(this.facing=Phaser.RIGHT),this.velocity.y<0?this.facing=Phaser.UP:this.velocity.y>0&&(this.facing=Phaser.DOWN)},setZeroVelocity:function(){this.shape.oldpos.x=this.shape.pos.x,this.shape.oldpos.y=this.shape.pos.y},moveTo:function(a,b){var c=a*this.game.time.physicsElapsed,b=this.game.math.degToRad(b);this.shape.pos.x=this.shape.oldpos.x+c*Math.cos(b),this.shape.pos.y=this.shape.oldpos.y+c*Math.sin(b)},moveFrom:function(a,b){var c=-a*this.game.time.physicsElapsed,b=this.game.math.degToRad(b);this.shape.pos.x=this.shape.oldpos.x+c*Math.cos(b),this.shape.pos.y=this.shape.oldpos.y+c*Math.sin(b)},moveLeft:function(a){var b=-a*this.game.time.physicsElapsed;this.shape.pos.x=this.shape.oldpos.x+Math.min(this.maxSpeed,Math.max(-this.maxSpeed,this.shape.pos.x-this.shape.oldpos.x+b))},moveRight:function(a){var b=a*this.game.time.physicsElapsed;this.shape.pos.x=this.shape.oldpos.x+Math.min(this.maxSpeed,Math.max(-this.maxSpeed,this.shape.pos.x-this.shape.oldpos.x+b))},moveUp:function(a){var b=-a*this.game.time.physicsElapsed;this.shape.pos.y=this.shape.oldpos.y+Math.min(this.maxSpeed,Math.max(-this.maxSpeed,this.shape.pos.y-this.shape.oldpos.y+b))},moveDown:function(a){var b=a*this.game.time.physicsElapsed;this.shape.pos.y=this.shape.oldpos.y+Math.min(this.maxSpeed,Math.max(-this.maxSpeed,this.shape.pos.y-this.shape.oldpos.y+b))},reset:function(){this.velocity.set(0),this.shape.pos.x=this.sprite.x,this.shape.pos.y=this.sprite.y,this.shape.oldpos.copyFrom(this.shape.pos)},deltaAbsX:function(){return this.deltaX()>0?this.deltaX():-this.deltaX()},deltaAbsY:function(){return this.deltaY()>0?this.deltaY():-this.deltaY()},deltaX:function(){return this.shape.pos.x-this.shape.oldpos.x},deltaY:function(){return this.shape.pos.y-this.shape.oldpos.y},destroy:function(){this.sprite=null,this.system=null,this.aabb=null,this.tile=null,this.circle=null,this.shape.destroy(),this.shape=null}},Object.defineProperty(Phaser.Physics.Ninja.Body.prototype,"x",{get:function(){return this.shape.pos.x},set:function(a){this.shape.pos.x=a}}),Object.defineProperty(Phaser.Physics.Ninja.Body.prototype,"y",{get:function(){return this.shape.pos.y},set:function(a){this.shape.pos.y=a}}),Object.defineProperty(Phaser.Physics.Ninja.Body.prototype,"width",{get:function(){return this.shape.width}}),Object.defineProperty(Phaser.Physics.Ninja.Body.prototype,"height",{get:function(){return this.shape.height}}),Object.defineProperty(Phaser.Physics.Ninja.Body.prototype,"bottom",{get:function(){return this.shape.pos.y+this.shape.yw}}),Object.defineProperty(Phaser.Physics.Ninja.Body.prototype,"right",{get:function(){return this.shape.pos.x+this.shape.xw}}),Object.defineProperty(Phaser.Physics.Ninja.Body.prototype,"speed",{get:function(){return Math.sqrt(this.shape.velocity.x*this.shape.velocity.x+this.shape.velocity.y*this.shape.velocity.y)}}),Object.defineProperty(Phaser.Physics.Ninja.Body.prototype,"angle",{get:function(){return Math.atan2(this.shape.velocity.y,this.shape.velocity.x)}}),Phaser.Physics.Ninja.AABB=function(a,b,c,d,e){this.body=a,this.system=a.system,this.pos=new Phaser.Point(b,c),this.oldpos=new Phaser.Point(b,c),this.xw=Math.abs(d/2),this.yw=Math.abs(e/2),this.width=d,this.height=e,this.oH=0,this.oV=0,this.velocity=new Phaser.Point,this.aabbTileProjections={},this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_FULL]=this.projAABB_Full,this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_45DEG]=this.projAABB_45Deg,this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_CONCAVE]=this.projAABB_Concave,this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_CONVEX]=this.projAABB_Convex,this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_22DEGs]=this.projAABB_22DegS,this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_22DEGb]=this.projAABB_22DegB,this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_67DEGs]=this.projAABB_67DegS,this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_67DEGb]=this.projAABB_67DegB,this.aabbTileProjections[Phaser.Physics.Ninja.Tile.TYPE_HALF]=this.projAABB_Half},Phaser.Physics.Ninja.AABB.prototype.constructor=Phaser.Physics.Ninja.AABB,Phaser.Physics.Ninja.AABB.COL_NONE=0,Phaser.Physics.Ninja.AABB.COL_AXIS=1,Phaser.Physics.Ninja.AABB.COL_OTHER=2,Phaser.Physics.Ninja.AABB.prototype={integrate:function(){var a=this.pos.x,b=this.pos.y;this.pos.x+=this.body.drag*this.pos.x-this.body.drag*this.oldpos.x,this.pos.y+=this.body.drag*this.pos.y-this.body.drag*this.oldpos.y+this.system.gravity*this.body.gravityScale,this.velocity.set(this.pos.x-a,this.pos.y-b),this.oldpos.set(a,b)},reportCollisionVsWorld:function(a,b,c,d){var e,f,g,h,i,j=this.pos,k=this.oldpos,l=j.x-k.x,m=j.y-k.y,n=l*c+m*d,o=n*c,p=n*d,q=l-o,r=m-p;0>n?(h=q*this.body.friction,i=r*this.body.friction,e=1+this.body.bounce,f=o*e,g=p*e,1===c?this.body.touching.left=!0:-1===c&&(this.body.touching.right=!0),1===d?this.body.touching.up=!0:-1===d&&(this.body.touching.down=!0)):f=g=h=i=0,j.x+=a,j.y+=b,k.x+=a+f+h,k.y+=b+g+i},reverse:function(){var a=this.pos.x-this.oldpos.x,b=this.pos.y-this.oldpos.y;this.oldpos.x<this.pos.x?this.oldpos.x=this.pos.x+a:this.oldpos.x>this.pos.x&&(this.oldpos.x=this.pos.x-a),this.oldpos.y<this.pos.y?this.oldpos.y=this.pos.y+b:this.oldpos.y>this.pos.y&&(this.oldpos.y=this.pos.y-b)},reportCollisionVsBody:function(a,b,c,d,e){var f=this.pos.x-this.oldpos.x,g=this.pos.y-this.oldpos.y,h=f*c+g*d;return this.body.immovable&&e.body.immovable?(a*=.5,b*=.5,this.pos.add(a,b),this.oldpos.set(this.pos.x,this.pos.y),e.pos.subtract(a,b),void e.oldpos.set(e.pos.x,e.pos.y)):void(this.body.immovable||e.body.immovable?this.body.immovable?e.body.immovable||(e.pos.subtract(a,b),0>h&&e.reverse()):(this.pos.subtract(a,b),0>h&&this.reverse()):(a*=.5,b*=.5,this.pos.add(a,b),e.pos.subtract(a,b),0>h&&(this.reverse(),e.reverse())))},collideWorldBounds:function(){var a=this.system.bounds.x-(this.pos.x-this.xw);a>0?this.reportCollisionVsWorld(a,0,1,0,null):(a=this.pos.x+this.xw-this.system.bounds.right,a>0&&this.reportCollisionVsWorld(-a,0,-1,0,null));var b=this.system.bounds.y-(this.pos.y-this.yw);b>0?this.reportCollisionVsWorld(0,b,0,1,null):(b=this.pos.y+this.yw-this.system.bounds.bottom,b>0&&this.reportCollisionVsWorld(0,-b,0,-1,null))},collideAABBVsAABB:function(a){var b=this.pos,c=a,d=c.pos.x,e=c.pos.y,f=c.xw,g=c.yw,h=b.x-d,i=f+this.xw-Math.abs(h);if(i>0){var j=b.y-e,k=g+this.yw-Math.abs(j);if(k>0){k>i?0>h?(i*=-1,k=0):k=0:0>j?(i=0,k*=-1):i=0;var l=Math.sqrt(i*i+k*k);return this.reportCollisionVsBody(i,k,i/l,k/l,c),Phaser.Physics.Ninja.AABB.COL_AXIS}}return!1},collideAABBVsTile:function(a){var b=this.pos.x-a.pos.x,c=a.xw+this.xw-Math.abs(b);if(c>0){var d=this.pos.y-a.pos.y,e=a.yw+this.yw-Math.abs(d);if(e>0)return e>c?0>b?(c*=-1,e=0):e=0:0>d?(c=0,e*=-1):c=0,this.resolveTile(c,e,this,a)}return!1},resolveTile:function(a,b,c,d){return 0<d.id?this.aabbTileProjections[d.type](a,b,c,d):!1},projAABB_Full:function(a,b,c,d){var e=Math.sqrt(a*a+b*b);return c.reportCollisionVsWorld(a,b,a/e,b/e,d),Phaser.Physics.Ninja.AABB.COL_AXIS},projAABB_Half:function(a,b,c,d){var e=d.signx,f=d.signy,g=c.pos.x-e*c.xw-d.pos.x,h=c.pos.y-f*c.yw-d.pos.y,i=g*e+h*f;if(0>i){e*=-i,f*=-i;var j=Math.sqrt(e*e+f*f),k=Math.sqrt(a*a+b*b);return j>k?(c.reportCollisionVsWorld(a,b,a/k,b/k,d),Phaser.Physics.Ninja.AABB.COL_AXIS):(c.reportCollisionVsWorld(e,f,d.signx,d.signy,d),Phaser.Physics.Ninja.AABB.COL_OTHER)}return Phaser.Physics.Ninja.AABB.COL_NONE},projAABB_45Deg:function(a,b,c,d){var e=d.signx,f=d.signy,g=c.pos.x-e*c.xw-d.pos.x,h=c.pos.y-f*c.yw-d.pos.y,i=d.sx,j=d.sy,k=g*i+h*j;if(0>k){i*=-k,j*=-k;var l=Math.sqrt(i*i+j*j),m=Math.sqrt(a*a+b*b);return l>m?(c.reportCollisionVsWorld(a,b,a/m,b/m,d),Phaser.Physics.Ninja.AABB.COL_AXIS):(c.reportCollisionVsWorld(i,j,d.sx,d.sy),Phaser.Physics.Ninja.AABB.COL_OTHER)}return Phaser.Physics.Ninja.AABB.COL_NONE},projAABB_22DegS:function(a,b,c,d){var e=d.signx,f=d.signy,g=c.pos.y-f*c.yw,h=d.pos.y-g;if(h*f>0){var i=c.pos.x-e*c.xw-(d.pos.x+e*d.xw),j=c.pos.y-f*c.yw-(d.pos.y-f*d.yw),k=d.sx,l=d.sy,m=i*k+j*l;if(0>m){k*=-m,l*=-m;var n=Math.sqrt(k*k+l*l),o=Math.sqrt(a*a+b*b),p=Math.abs(h);return n>o?o>p?(c.reportCollisionVsWorld(0,h,0,h/p,d),Phaser.Physics.Ninja.AABB.COL_OTHER):(c.reportCollisionVsWorld(a,b,a/o,b/o,d),Phaser.Physics.Ninja.AABB.COL_AXIS):n>p?(c.reportCollisionVsWorld(0,h,0,h/p,d),Phaser.Physics.Ninja.AABB.COL_OTHER):(c.reportCollisionVsWorld(k,l,d.sx,d.sy,d),Phaser.Physics.Ninja.AABB.COL_OTHER)}}return Phaser.Physics.Ninja.AABB.COL_NONE},projAABB_22DegB:function(a,b,c,d){var e=d.signx,f=d.signy,g=c.pos.x-e*c.xw-(d.pos.x-e*d.xw),h=c.pos.y-f*c.yw-(d.pos.y+f*d.yw),i=d.sx,j=d.sy,k=g*i+h*j;if(0>k){i*=-k,j*=-k;var l=Math.sqrt(i*i+j*j),m=Math.sqrt(a*a+b*b);return l>m?(c.reportCollisionVsWorld(a,b,a/m,b/m,d),Phaser.Physics.Ninja.AABB.COL_AXIS):(c.reportCollisionVsWorld(i,j,d.sx,d.sy,d),Phaser.Physics.Ninja.AABB.COL_OTHER)}return Phaser.Physics.Ninja.AABB.COL_NONE},projAABB_67DegS:function(a,b,c,d){var e=d.signx,f=d.signy,g=c.pos.x-e*c.xw,h=d.pos.x-g;if(h*e>0){var i=c.pos.x-e*c.xw-(d.pos.x-e*d.xw),j=c.pos.y-f*c.yw-(d.pos.y+f*d.yw),k=d.sx,l=d.sy,m=i*k+j*l;if(0>m){k*=-m,l*=-m;var n=Math.sqrt(k*k+l*l),o=Math.sqrt(a*a+b*b),p=Math.abs(h);return n>o?o>p?(c.reportCollisionVsWorld(h,0,h/p,0,d),Phaser.Physics.Ninja.AABB.COL_OTHER):(c.reportCollisionVsWorld(a,b,a/o,b/o,d),Phaser.Physics.Ninja.AABB.COL_AXIS):n>p?(c.reportCollisionVsWorld(h,0,h/p,0,d),Phaser.Physics.Ninja.AABB.COL_OTHER):(c.reportCollisionVsWorld(k,l,d.sx,d.sy,d),Phaser.Physics.Ninja.AABB.COL_OTHER)}}return Phaser.Physics.Ninja.AABB.COL_NONE},projAABB_67DegB:function(a,b,c,d){var e=d.signx,f=d.signy,g=c.pos.x-e*c.xw-(d.pos.x+e*d.xw),h=c.pos.y-f*c.yw-(d.pos.y-f*d.yw),i=d.sx,j=d.sy,k=g*i+h*j;if(0>k){i*=-k,j*=-k;var l=Math.sqrt(i*i+j*j),m=Math.sqrt(a*a+b*b);return l>m?(c.reportCollisionVsWorld(a,b,a/m,b/m,d),Phaser.Physics.Ninja.AABB.COL_AXIS):(c.reportCollisionVsWorld(i,j,d.sx,d.sy,d),Phaser.Physics.Ninja.AABB.COL_OTHER)}return Phaser.Physics.Ninja.AABB.COL_NONE},projAABB_Convex:function(a,b,c,d){var e=d.signx,f=d.signy,g=c.pos.x-e*c.xw-(d.pos.x-e*d.xw),h=c.pos.y-f*c.yw-(d.pos.y-f*d.yw),i=Math.sqrt(g*g+h*h),j=2*d.xw,k=Math.sqrt(j*j+0),l=k-i;if(0>e*g||0>f*h){var m=Math.sqrt(a*a+b*b);return c.reportCollisionVsWorld(a,b,a/m,b/m,d),Phaser.Physics.Ninja.AABB.COL_AXIS}return l>0?(g/=i,h/=i,c.reportCollisionVsWorld(g*l,h*l,g,h,d),Phaser.Physics.Ninja.AABB.COL_OTHER):Phaser.Physics.Ninja.AABB.COL_NONE},projAABB_Concave:function(a,b,c,d){var e=d.signx,f=d.signy,g=d.pos.x+e*d.xw-(c.pos.x-e*c.xw),h=d.pos.y+f*d.yw-(c.pos.y-f*c.yw),i=2*d.xw,j=Math.sqrt(i*i+0),k=Math.sqrt(g*g+h*h),l=k-j;if(l>0){var m=Math.sqrt(a*a+b*b);return l>m?(c.reportCollisionVsWorld(a,b,a/m,b/m,d),Phaser.Physics.Ninja.AABB.COL_AXIS):(g/=k,h/=k,c.reportCollisionVsWorld(g*l,h*l,g,h,d),Phaser.Physics.Ninja.AABB.COL_OTHER)}return Phaser.Physics.Ninja.AABB.COL_NONE},destroy:function(){this.body=null,this.system=null}},Phaser.Physics.Ninja.Tile=function(a,b,c,d,e,f){"undefined"==typeof f&&(f=Phaser.Physics.Ninja.Tile.EMPTY),this.body=a,this.system=a.system,this.id=f,this.type=Phaser.Physics.Ninja.Tile.TYPE_EMPTY,this.pos=new Phaser.Point(b,c),this.oldpos=new Phaser.Point(b,c),this.id>1&&this.id<30&&(e=d),this.xw=Math.abs(d/2),this.yw=Math.abs(e/2),this.width=d,this.height=e,this.velocity=new Phaser.Point,this.signx=0,this.signy=0,this.sx=0,this.sy=0,this.body.gravityScale=0,this.body.collideWorldBounds=!1,this.id>0&&this.setType(this.id)},Phaser.Physics.Ninja.Tile.prototype.constructor=Phaser.Physics.Ninja.Tile,Phaser.Physics.Ninja.Tile.prototype={integrate:function(){var a=this.pos.x,b=this.pos.y;this.pos.x+=this.body.drag*this.pos.x-this.body.drag*this.oldpos.x,this.pos.y+=this.body.drag*this.pos.y-this.body.drag*this.oldpos.y+this.system.gravity*this.body.gravityScale,this.velocity.set(this.pos.x-a,this.pos.y-b),this.oldpos.set(a,b)},collideWorldBounds:function(){var a=this.system.bounds.x-(this.pos.x-this.xw);a>0?this.reportCollisionVsWorld(a,0,1,0,null):(a=this.pos.x+this.xw-this.system.bounds.right,a>0&&this.reportCollisionVsWorld(-a,0,-1,0,null));var b=this.system.bounds.y-(this.pos.y-this.yw);b>0?this.reportCollisionVsWorld(0,b,0,1,null):(b=this.pos.y+this.yw-this.system.bounds.bottom,b>0&&this.reportCollisionVsWorld(0,-b,0,-1,null))},reportCollisionVsWorld:function(a,b,c,d){var e,f,g,h,i,j=this.pos,k=this.oldpos,l=j.x-k.x,m=j.y-k.y,n=l*c+m*d,o=n*c,p=n*d,q=l-o,r=m-p;0>n?(h=q*this.body.friction,i=r*this.body.friction,e=1+this.body.bounce,f=o*e,g=p*e,1===c?this.body.touching.left=!0:-1===c&&(this.body.touching.right=!0),1===d?this.body.touching.up=!0:-1===d&&(this.body.touching.down=!0)):f=g=h=i=0,j.x+=a,j.y+=b,k.x+=a+f+h,k.y+=b+g+i},setType:function(a){return a===Phaser.Physics.Ninja.Tile.EMPTY?this.clear():(this.id=a,this.updateType()),this},clear:function(){this.id=Phaser.Physics.Ninja.Tile.EMPTY,this.updateType()},destroy:function(){this.body=null,this.system=null},updateType:function(){if(0===this.id)return this.type=Phaser.Physics.Ninja.Tile.TYPE_EMPTY,this.signx=0,this.signy=0,this.sx=0,this.sy=0,!0;if(this.id<Phaser.Physics.Ninja.Tile.TYPE_45DEG)this.type=Phaser.Physics.Ninja.Tile.TYPE_FULL,this.signx=0,this.signy=0,this.sx=0,this.sy=0;else if(this.id<Phaser.Physics.Ninja.Tile.TYPE_CONCAVE)if(this.type=Phaser.Physics.Ninja.Tile.TYPE_45DEG,this.id==Phaser.Physics.Ninja.Tile.SLOPE_45DEGpn)this.signx=1,this.signy=-1,this.sx=this.signx/Math.SQRT2,this.sy=this.signy/Math.SQRT2;else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_45DEGnn)this.signx=-1,this.signy=-1,this.sx=this.signx/Math.SQRT2,this.sy=this.signy/Math.SQRT2;else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_45DEGnp)this.signx=-1,this.signy=1,this.sx=this.signx/Math.SQRT2,this.sy=this.signy/Math.SQRT2;else{if(this.id!=Phaser.Physics.Ninja.Tile.SLOPE_45DEGpp)return!1;this.signx=1,this.signy=1,this.sx=this.signx/Math.SQRT2,this.sy=this.signy/Math.SQRT2}else if(this.id<Phaser.Physics.Ninja.Tile.TYPE_CONVEX)if(this.type=Phaser.Physics.Ninja.Tile.TYPE_CONCAVE,this.id==Phaser.Physics.Ninja.Tile.CONCAVEpn)this.signx=1,this.signy=-1,this.sx=0,this.sy=0;else if(this.id==Phaser.Physics.Ninja.Tile.CONCAVEnn)this.signx=-1,this.signy=-1,this.sx=0,this.sy=0;else if(this.id==Phaser.Physics.Ninja.Tile.CONCAVEnp)this.signx=-1,this.signy=1,this.sx=0,this.sy=0;else{if(this.id!=Phaser.Physics.Ninja.Tile.CONCAVEpp)return!1;this.signx=1,this.signy=1,this.sx=0,this.sy=0}else if(this.id<Phaser.Physics.Ninja.Tile.TYPE_22DEGs)if(this.type=Phaser.Physics.Ninja.Tile.TYPE_CONVEX,this.id==Phaser.Physics.Ninja.Tile.CONVEXpn)this.signx=1,this.signy=-1,this.sx=0,this.sy=0;else if(this.id==Phaser.Physics.Ninja.Tile.CONVEXnn)this.signx=-1,this.signy=-1,this.sx=0,this.sy=0;else if(this.id==Phaser.Physics.Ninja.Tile.CONVEXnp)this.signx=-1,this.signy=1,this.sx=0,this.sy=0;else{if(this.id!=Phaser.Physics.Ninja.Tile.CONVEXpp)return!1;this.signx=1,this.signy=1,this.sx=0,this.sy=0}else if(this.id<Phaser.Physics.Ninja.Tile.TYPE_22DEGb)if(this.type=Phaser.Physics.Ninja.Tile.TYPE_22DEGs,this.id==Phaser.Physics.Ninja.Tile.SLOPE_22DEGpnS){this.signx=1,this.signy=-1;var a=Math.sqrt(5);this.sx=1*this.signx/a,this.sy=2*this.signy/a}else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_22DEGnnS){this.signx=-1,this.signy=-1;var a=Math.sqrt(5);this.sx=1*this.signx/a,this.sy=2*this.signy/a}else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_22DEGnpS){this.signx=-1,this.signy=1;var a=Math.sqrt(5);this.sx=1*this.signx/a,this.sy=2*this.signy/a}else{if(this.id!=Phaser.Physics.Ninja.Tile.SLOPE_22DEGppS)return!1;this.signx=1,this.signy=1;var a=Math.sqrt(5);this.sx=1*this.signx/a,this.sy=2*this.signy/a}else if(this.id<Phaser.Physics.Ninja.Tile.TYPE_67DEGs)if(this.type=Phaser.Physics.Ninja.Tile.TYPE_22DEGb,this.id==Phaser.Physics.Ninja.Tile.SLOPE_22DEGpnB){this.signx=1,this.signy=-1;var a=Math.sqrt(5);this.sx=1*this.signx/a,this.sy=2*this.signy/a}else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_22DEGnnB){this.signx=-1,this.signy=-1;var a=Math.sqrt(5);this.sx=1*this.signx/a,this.sy=2*this.signy/a}else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_22DEGnpB){this.signx=-1,this.signy=1;var a=Math.sqrt(5);this.sx=1*this.signx/a,this.sy=2*this.signy/a}else{if(this.id!=Phaser.Physics.Ninja.Tile.SLOPE_22DEGppB)return!1;this.signx=1,this.signy=1;var a=Math.sqrt(5);this.sx=1*this.signx/a,this.sy=2*this.signy/a}else if(this.id<Phaser.Physics.Ninja.Tile.TYPE_67DEGb)if(this.type=Phaser.Physics.Ninja.Tile.TYPE_67DEGs,this.id==Phaser.Physics.Ninja.Tile.SLOPE_67DEGpnS){this.signx=1,this.signy=-1;var a=Math.sqrt(5);this.sx=2*this.signx/a,this.sy=1*this.signy/a}else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_67DEGnnS){this.signx=-1,this.signy=-1;var a=Math.sqrt(5);this.sx=2*this.signx/a,this.sy=1*this.signy/a}else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_67DEGnpS){this.signx=-1,this.signy=1;var a=Math.sqrt(5);this.sx=2*this.signx/a,this.sy=1*this.signy/a}else{if(this.id!=Phaser.Physics.Ninja.Tile.SLOPE_67DEGppS)return!1;this.signx=1,this.signy=1;var a=Math.sqrt(5);this.sx=2*this.signx/a,this.sy=1*this.signy/a}else if(this.id<Phaser.Physics.Ninja.Tile.TYPE_HALF)if(this.type=Phaser.Physics.Ninja.Tile.TYPE_67DEGb,this.id==Phaser.Physics.Ninja.Tile.SLOPE_67DEGpnB){this.signx=1,this.signy=-1;var a=Math.sqrt(5);this.sx=2*this.signx/a,this.sy=1*this.signy/a}else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_67DEGnnB){this.signx=-1,this.signy=-1;var a=Math.sqrt(5);this.sx=2*this.signx/a,this.sy=1*this.signy/a}else if(this.id==Phaser.Physics.Ninja.Tile.SLOPE_67DEGnpB){this.signx=-1,this.signy=1;var a=Math.sqrt(5);this.sx=2*this.signx/a,this.sy=1*this.signy/a}else{if(this.id!=Phaser.Physics.Ninja.Tile.SLOPE_67DEGppB)return!1;this.signx=1,this.signy=1;var a=Math.sqrt(5);this.sx=2*this.signx/a,this.sy=1*this.signy/a}else if(this.type=Phaser.Physics.Ninja.Tile.TYPE_HALF,this.id==Phaser.Physics.Ninja.Tile.HALFd)this.signx=0,this.signy=-1,this.sx=this.signx,this.sy=this.signy;else if(this.id==Phaser.Physics.Ninja.Tile.HALFu)this.signx=0,this.signy=1,this.sx=this.signx,this.sy=this.signy;else if(this.id==Phaser.Physics.Ninja.Tile.HALFl)this.signx=1,this.signy=0,this.sx=this.signx,this.sy=this.signy;else{if(this.id!=Phaser.Physics.Ninja.Tile.HALFr)return!1;this.signx=-1,this.signy=0,this.sx=this.signx,this.sy=this.signy}}},Object.defineProperty(Phaser.Physics.Ninja.Tile.prototype,"x",{get:function(){return this.pos.x-this.xw},set:function(a){this.pos.x=a}}),Object.defineProperty(Phaser.Physics.Ninja.Tile.prototype,"y",{get:function(){return this.pos.y-this.yw},set:function(a){this.pos.y=a}}),Object.defineProperty(Phaser.Physics.Ninja.Tile.prototype,"bottom",{get:function(){return this.pos.y+this.yw}}),Object.defineProperty(Phaser.Physics.Ninja.Tile.prototype,"right",{get:function(){return this.pos.x+this.xw}}),Phaser.Physics.Ninja.Tile.EMPTY=0,Phaser.Physics.Ninja.Tile.FULL=1,Phaser.Physics.Ninja.Tile.SLOPE_45DEGpn=2,Phaser.Physics.Ninja.Tile.SLOPE_45DEGnn=3,Phaser.Physics.Ninja.Tile.SLOPE_45DEGnp=4,Phaser.Physics.Ninja.Tile.SLOPE_45DEGpp=5,Phaser.Physics.Ninja.Tile.CONCAVEpn=6,Phaser.Physics.Ninja.Tile.CONCAVEnn=7,Phaser.Physics.Ninja.Tile.CONCAVEnp=8,Phaser.Physics.Ninja.Tile.CONCAVEpp=9,Phaser.Physics.Ninja.Tile.CONVEXpn=10,Phaser.Physics.Ninja.Tile.CONVEXnn=11,Phaser.Physics.Ninja.Tile.CONVEXnp=12,Phaser.Physics.Ninja.Tile.CONVEXpp=13,Phaser.Physics.Ninja.Tile.SLOPE_22DEGpnS=14,Phaser.Physics.Ninja.Tile.SLOPE_22DEGnnS=15,Phaser.Physics.Ninja.Tile.SLOPE_22DEGnpS=16,Phaser.Physics.Ninja.Tile.SLOPE_22DEGppS=17,Phaser.Physics.Ninja.Tile.SLOPE_22DEGpnB=18,Phaser.Physics.Ninja.Tile.SLOPE_22DEGnnB=19,Phaser.Physics.Ninja.Tile.SLOPE_22DEGnpB=20,Phaser.Physics.Ninja.Tile.SLOPE_22DEGppB=21,Phaser.Physics.Ninja.Tile.SLOPE_67DEGpnS=22,Phaser.Physics.Ninja.Tile.SLOPE_67DEGnnS=23,Phaser.Physics.Ninja.Tile.SLOPE_67DEGnpS=24,Phaser.Physics.Ninja.Tile.SLOPE_67DEGppS=25,Phaser.Physics.Ninja.Tile.SLOPE_67DEGpnB=26,Phaser.Physics.Ninja.Tile.SLOPE_67DEGnnB=27,Phaser.Physics.Ninja.Tile.SLOPE_67DEGnpB=28,Phaser.Physics.Ninja.Tile.SLOPE_67DEGppB=29,Phaser.Physics.Ninja.Tile.HALFd=30,Phaser.Physics.Ninja.Tile.HALFr=31,Phaser.Physics.Ninja.Tile.HALFu=32,Phaser.Physics.Ninja.Tile.HALFl=33,Phaser.Physics.Ninja.Tile.TYPE_EMPTY=0,Phaser.Physics.Ninja.Tile.TYPE_FULL=1,Phaser.Physics.Ninja.Tile.TYPE_45DEG=2,Phaser.Physics.Ninja.Tile.TYPE_CONCAVE=6,Phaser.Physics.Ninja.Tile.TYPE_CONVEX=10,Phaser.Physics.Ninja.Tile.TYPE_22DEGs=14,Phaser.Physics.Ninja.Tile.TYPE_22DEGb=18,Phaser.Physics.Ninja.Tile.TYPE_67DEGs=22,Phaser.Physics.Ninja.Tile.TYPE_67DEGb=26,Phaser.Physics.Ninja.Tile.TYPE_HALF=30,Phaser.Physics.Ninja.Circle=function(a,b,c,d){this.body=a,this.system=a.system,this.pos=new Phaser.Point(b,c),this.oldpos=new Phaser.Point(b,c),this.radius=d,this.xw=d,this.yw=d,this.width=2*d,this.height=2*d,this.oH=0,this.oV=0,this.velocity=new Phaser.Point,this.circleTileProjections={},this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_FULL]=this.projCircle_Full,this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_45DEG]=this.projCircle_45Deg,this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_CONCAVE]=this.projCircle_Concave,this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_CONVEX]=this.projCircle_Convex,this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_22DEGs]=this.projCircle_22DegS,this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_22DEGb]=this.projCircle_22DegB,this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_67DEGs]=this.projCircle_67DegS,this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_67DEGb]=this.projCircle_67DegB,this.circleTileProjections[Phaser.Physics.Ninja.Tile.TYPE_HALF]=this.projCircle_Half
},Phaser.Physics.Ninja.Circle.prototype.constructor=Phaser.Physics.Ninja.Circle,Phaser.Physics.Ninja.Circle.COL_NONE=0,Phaser.Physics.Ninja.Circle.COL_AXIS=1,Phaser.Physics.Ninja.Circle.COL_OTHER=2,Phaser.Physics.Ninja.Circle.prototype={integrate:function(){var a=this.pos.x,b=this.pos.y;this.pos.x+=this.body.drag*this.pos.x-this.body.drag*this.oldpos.x,this.pos.y+=this.body.drag*this.pos.y-this.body.drag*this.oldpos.y+this.system.gravity*this.body.gravityScale,this.velocity.set(this.pos.x-a,this.pos.y-b),this.oldpos.set(a,b)},reportCollisionVsWorld:function(a,b,c,d){var e,f,g,h,i,j=this.pos,k=this.oldpos,l=j.x-k.x,m=j.y-k.y,n=l*c+m*d,o=n*c,p=n*d,q=l-o,r=m-p;0>n?(h=q*this.body.friction,i=r*this.body.friction,e=1+this.body.bounce,f=o*e,g=p*e,1===c?this.body.touching.left=!0:-1===c&&(this.body.touching.right=!0),1===d?this.body.touching.up=!0:-1===d&&(this.body.touching.down=!0)):f=g=h=i=0,j.x+=a,j.y+=b,k.x+=a+f+h,k.y+=b+g+i},collideWorldBounds:function(){var a=this.system.bounds.x-(this.pos.x-this.radius);a>0?this.reportCollisionVsWorld(a,0,1,0,null):(a=this.pos.x+this.radius-this.system.bounds.right,a>0&&this.reportCollisionVsWorld(-a,0,-1,0,null));var b=this.system.bounds.y-(this.pos.y-this.radius);b>0?this.reportCollisionVsWorld(0,b,0,1,null):(b=this.pos.y+this.radius-this.system.bounds.bottom,b>0&&this.reportCollisionVsWorld(0,-b,0,-1,null))},collideCircleVsTile:function(a){var b=this.pos,c=this.radius,d=a,e=d.pos.x,f=d.pos.y,g=d.xw,h=d.yw,i=b.x-e,j=g+c-Math.abs(i);if(j>0){var k=b.y-f,l=h+c-Math.abs(k);if(l>0)return this.oH=0,this.oV=0,-g>i?this.oH=-1:i>g&&(this.oH=1),-h>k?this.oV=-1:k>h&&(this.oV=1),this.resolveCircleTile(j,l,this.oH,this.oV,this,d)}},resolveCircleTile:function(a,b,c,d,e,f){return 0<f.id?this.circleTileProjections[f.type](a,b,c,d,e,f):!1},projCircle_Full:function(a,b,c,d,e,f){if(0===c){if(0===d){if(b>a){var g=e.pos.x-f.pos.x;return 0>g?(e.reportCollisionVsWorld(-a,0,-1,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(e.reportCollisionVsWorld(a,0,1,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS)}var h=e.pos.y-f.pos.y;return 0>h?(e.reportCollisionVsWorld(0,-b,0,-1,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(e.reportCollisionVsWorld(0,b,0,1,f),Phaser.Physics.Ninja.Circle.COL_AXIS)}return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS}if(0===d)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var i=f.pos.x+c*f.xw,j=f.pos.y+d*f.yw,g=e.pos.x-i,h=e.pos.y-j,k=Math.sqrt(g*g+h*h),l=e.radius-k;return l>0?(0===k?(g=c/Math.SQRT2,h=d/Math.SQRT2):(g/=k,h/=k),e.reportCollisionVsWorld(g*l,h*l,g,h,f),Phaser.Physics.Ninja.Circle.COL_OTHER):Phaser.Physics.Ninja.Circle.COL_NONE},projCircle_45Deg:function(a,b,c,d,e,f){var g,h=f.signx,i=f.signy;if(0===c)if(0===d){var j=f.sx,k=f.sy,l=e.pos.x-j*e.radius-f.pos.x,m=e.pos.y-k*e.radius-f.pos.y,n=l*j+m*k;if(0>n){j*=-n,k*=-n,b>a?(g=a,b=0,e.pos.x-f.pos.x<0&&(a*=-1)):(g=b,a=0,e.pos.y-f.pos.y<0&&(b*=-1));var o=Math.sqrt(j*j+k*k);return o>g?(e.reportCollisionVsWorld(a,b,a/g,b/g,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(e.reportCollisionVsWorld(j,k,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER)}}else{if(0>i*d)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var j=f.sx,k=f.sy,l=e.pos.x-(f.pos.x-h*f.xw),m=e.pos.y-(f.pos.y+d*f.yw),p=l*-k+m*j;if(p*h*i>0){var q=Math.sqrt(l*l+m*m),r=e.radius-q;if(r>0)return l/=q,m/=q,e.reportCollisionVsWorld(l*r,m*r,l,m,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var n=l*j+m*k,r=e.radius-Math.abs(n);if(r>0)return e.reportCollisionVsWorld(j*r,k*r,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER}}else if(0===d){if(0>h*c)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var j=f.sx,k=f.sy,l=e.pos.x-(f.pos.x+c*f.xw),m=e.pos.y-(f.pos.y-i*f.yw),p=l*-k+m*j;if(0>p*h*i){var q=Math.sqrt(l*l+m*m),r=e.radius-q;if(r>0)return l/=q,m/=q,e.reportCollisionVsWorld(l*r,m*r,l,m,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var n=l*j+m*k,r=e.radius-Math.abs(n);if(r>0)return e.reportCollisionVsWorld(j*r,k*r,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER}}else{if(h*c+i*d>0)return Phaser.Physics.Ninja.Circle.COL_NONE;var s=f.pos.x+c*f.xw,t=f.pos.y+d*f.yw,u=e.pos.x-s,v=e.pos.y-t,q=Math.sqrt(u*u+v*v),r=e.radius-q;if(r>0)return 0===q?(u=c/Math.SQRT2,v=d/Math.SQRT2):(u/=q,v/=q),e.reportCollisionVsWorld(u*r,v*r,u,v,f),Phaser.Physics.Ninja.Circle.COL_OTHER}return Phaser.Physics.Ninja.Circle.COL_NONE},projCircle_Concave:function(a,b,c,d,e,f){var g,h=f.signx,i=f.signy;if(0===c){if(0===d){var j=f.pos.x+h*f.xw-e.pos.x,k=f.pos.y+i*f.yw-e.pos.y,l=2*f.xw,m=Math.sqrt(l*l+0),n=Math.sqrt(j*j+k*k),o=n+e.radius-m;return o>0?(b>a?(g=a,b=0,e.pos.x-f.pos.x<0&&(a*=-1)):(g=b,a=0,e.pos.y-f.pos.y<0&&(b*=-1)),o>g?(e.reportCollisionVsWorld(a,b,a/g,b/g,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(j/=n,k/=n,e.reportCollisionVsWorld(j*o,k*o,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER)):Phaser.Physics.Ninja.Circle.COL_NONE}if(0>i*d)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var p=f.pos.x-h*f.xw,q=f.pos.y+d*f.yw,r=e.pos.x-p,s=e.pos.y-q,n=Math.sqrt(r*r+s*s),o=e.radius-n;if(o>0)return 0===n?(r=0,s=d):(r/=n,s/=n),e.reportCollisionVsWorld(r*o,s*o,r,s,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else if(0===d){if(0>h*c)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var p=f.pos.x+c*f.xw,q=f.pos.y-i*f.yw,r=e.pos.x-p,s=e.pos.y-q,n=Math.sqrt(r*r+s*s),o=e.radius-n;if(o>0)return 0===n?(r=c,s=0):(r/=n,s/=n),e.reportCollisionVsWorld(r*o,s*o,r,s,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{if(h*c+i*d>0)return Phaser.Physics.Ninja.Circle.COL_NONE;var p=f.pos.x+c*f.xw,q=f.pos.y+d*f.yw,r=e.pos.x-p,s=e.pos.y-q,n=Math.sqrt(r*r+s*s),o=e.radius-n;if(o>0)return 0===n?(r=c/Math.SQRT2,s=d/Math.SQRT2):(r/=n,s/=n),e.reportCollisionVsWorld(r*o,s*o,r,s,f),Phaser.Physics.Ninja.Circle.COL_OTHER}return Phaser.Physics.Ninja.Circle.COL_NONE},projCircle_Convex:function(a,b,c,d,e,f){var g,h=f.signx,i=f.signy;if(0===c)if(0===d){var j=e.pos.x-(f.pos.x-h*f.xw),k=e.pos.y-(f.pos.y-i*f.yw),l=2*f.xw,m=Math.sqrt(l*l+0),n=Math.sqrt(j*j+k*k),o=m+e.radius-n;if(o>0)return b>a?(g=a,b=0,e.pos.x-f.pos.x<0&&(a*=-1)):(g=b,a=0,e.pos.y-f.pos.y<0&&(b*=-1)),o>g?(e.reportCollisionVsWorld(a,b,a/g,b/g,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(j/=n,k/=n,e.reportCollisionVsWorld(j*o,k*o,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER)}else{if(0>i*d)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var j=e.pos.x-(f.pos.x-h*f.xw),k=e.pos.y-(f.pos.y-i*f.yw),l=2*f.xw,m=Math.sqrt(l*l+0),n=Math.sqrt(j*j+k*k),o=m+e.radius-n;if(o>0)return j/=n,k/=n,e.reportCollisionVsWorld(j*o,k*o,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else if(0===d){if(0>h*c)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var j=e.pos.x-(f.pos.x-h*f.xw),k=e.pos.y-(f.pos.y-i*f.yw),l=2*f.xw,m=Math.sqrt(l*l+0),n=Math.sqrt(j*j+k*k),o=m+e.radius-n;if(o>0)return j/=n,k/=n,e.reportCollisionVsWorld(j*o,k*o,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else if(h*c+i*d>0){var j=e.pos.x-(f.pos.x-h*f.xw),k=e.pos.y-(f.pos.y-i*f.yw),l=2*f.xw,m=Math.sqrt(l*l+0),n=Math.sqrt(j*j+k*k),o=m+e.radius-n;if(o>0)return j/=n,k/=n,e.reportCollisionVsWorld(j*o,k*o,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var p=f.pos.x+c*f.xw,q=f.pos.y+d*f.yw,r=e.pos.x-p,s=e.pos.y-q,n=Math.sqrt(r*r+s*s),o=e.radius-n;if(o>0)return 0===n?(r=c/Math.SQRT2,s=d/Math.SQRT2):(r/=n,s/=n),e.reportCollisionVsWorld(r*o,s*o,r,s,f),Phaser.Physics.Ninja.Circle.COL_OTHER}return Phaser.Physics.Ninja.Circle.COL_NONE},projCircle_Half:function(a,b,c,d,e,f){var g=f.signx,h=f.signy,i=c*g+d*h;if(i>0)return Phaser.Physics.Ninja.Circle.COL_NONE;if(0===c)if(0===d){var j=e.radius,k=e.pos.x-g*j-f.pos.x,l=e.pos.y-h*j-f.pos.y,m=g,n=h,o=k*m+l*n;if(0>o){m*=-o,n*=-o;var p=Math.sqrt(m*m+n*n),q=Math.sqrt(a*a+b*b);return p>q?(e.reportCollisionVsWorld(a,b,a/q,b/q,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(e.reportCollisionVsWorld(m,n,f.signx,f.signy),Phaser.Physics.Ninja.Circle.COL_OTHER)}}else{if(0!==i)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var r=e.pos.x-f.pos.x;if(0>r*g)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var s=e.pos.y-(f.pos.y+d*f.yw),t=Math.sqrt(r*r+s*s),u=e.radius-t;if(u>0)return 0===t?(r=g/Math.SQRT2,s=d/Math.SQRT2):(r/=t,s/=t),e.reportCollisionVsWorld(r*u,s*u,r,s,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else if(0===d){if(0!==i)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var s=e.pos.y-f.pos.y;if(0>s*h)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var r=e.pos.x-(f.pos.x+c*f.xw),t=Math.sqrt(r*r+s*s),u=e.radius-t;if(u>0)return 0===t?(r=g/Math.SQRT2,s=d/Math.SQRT2):(r/=t,s/=t),e.reportCollisionVsWorld(r*u,s*u,r,s,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var v=f.pos.x+c*f.xw,w=f.pos.y+d*f.yw,r=e.pos.x-v,s=e.pos.y-w,t=Math.sqrt(r*r+s*s),u=e.radius-t;if(u>0)return 0===t?(r=c/Math.SQRT2,s=d/Math.SQRT2):(r/=t,s/=t),e.reportCollisionVsWorld(r*u,s*u,r,s,f),Phaser.Physics.Ninja.Circle.COL_OTHER}return Phaser.Physics.Ninja.Circle.COL_NONE},projCircle_22DegS:function(a,b,c,d,e,f){var g,h=f.signx,i=f.signy;if(i*d>0)return Phaser.Physics.Ninja.Circle.COL_NONE;if(0===c){if(0!==d)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var j=f.sx,k=f.sy,l=e.radius,m=e.pos.x-(f.pos.x-h*f.xw),n=e.pos.y-f.pos.y,o=m*-k+n*j;if(o*h*i>0){var p=Math.sqrt(m*m+n*n),q=l-p;if(q>0)return m/=p,n/=p,e.reportCollisionVsWorld(m*q,n*q,m,n,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{m-=l*j,n-=l*k;var r=m*j+n*k;if(0>r){j*=-r,k*=-r;var s=Math.sqrt(j*j+k*k);return b>a?(g=a,b=0,e.pos.x-f.pos.x<0&&(a*=-1)):(g=b,a=0,e.pos.y-f.pos.y<0&&(b*=-1)),s>g?(e.reportCollisionVsWorld(a,b,a/g,b/g,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(e.reportCollisionVsWorld(j,k,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER)}}}else if(0===d)if(0>h*c){var t=f.pos.x-h*f.xw,u=f.pos.y,v=e.pos.x-t,w=e.pos.y-u;if(0>w*i)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var p=Math.sqrt(v*v+w*w),q=e.radius-p;if(q>0)return 0===p?(v=c/Math.SQRT2,w=d/Math.SQRT2):(v/=p,w/=p),e.reportCollisionVsWorld(v*q,w*q,v,w,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var j=f.sx,k=f.sy,m=e.pos.x-(f.pos.x+c*f.xw),n=e.pos.y-(f.pos.y-i*f.yw),o=m*-k+n*j;if(0>o*h*i){var p=Math.sqrt(m*m+n*n),q=e.radius-p;if(q>0)return m/=p,n/=p,e.reportCollisionVsWorld(m*q,n*q,m,n,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var r=m*j+n*k,q=e.radius-Math.abs(r);if(q>0)return e.reportCollisionVsWorld(j*q,k*q,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER}}else{var t=f.pos.x+c*f.xw,u=f.pos.y+d*f.yw,v=e.pos.x-t,w=e.pos.y-u,p=Math.sqrt(v*v+w*w),q=e.radius-p;if(q>0)return 0===p?(v=c/Math.SQRT2,w=d/Math.SQRT2):(v/=p,w/=p),e.reportCollisionVsWorld(v*q,w*q,v,w,f),Phaser.Physics.Ninja.Circle.COL_OTHER}return Phaser.Physics.Ninja.Circle.COL_NONE},projCircle_22DegB:function(a,b,c,d,e,f){var g,h=f.signx,i=f.signy;if(0===c)if(0===d){var j=f.sx,k=f.sy,l=e.radius,m=e.pos.x-j*l-(f.pos.x-h*f.xw),n=e.pos.y-k*l-(f.pos.y+i*f.yw),o=m*j+n*k;if(0>o){j*=-o,k*=-o;var p=Math.sqrt(j*j+k*k);return b>a?(g=a,b=0,e.pos.x-f.pos.x<0&&(a*=-1)):(g=b,a=0,e.pos.y-f.pos.y<0&&(b*=-1)),p>g?(e.reportCollisionVsWorld(a,b,a/g,b/g,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(e.reportCollisionVsWorld(j,k,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER)}}else{if(0>i*d)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var j=f.sx,k=f.sy,m=e.pos.x-(f.pos.x-h*f.xw),n=e.pos.y-(f.pos.y+i*f.yw),q=m*-k+n*j;if(q*h*i>0){var r=Math.sqrt(m*m+n*n),s=e.radius-r;if(s>0)return m/=r,n/=r,e.reportCollisionVsWorld(m*s,n*s,m,n,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var o=m*j+n*k,s=e.radius-Math.abs(o);if(s>0)return e.reportCollisionVsWorld(j*s,k*s,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER}}else if(0===d){if(0>h*c)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var m=e.pos.x-(f.pos.x+h*f.xw),n=e.pos.y-f.pos.y;if(0>n*i)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var j=f.sx,k=f.sy,q=m*-k+n*j;if(0>q*h*i){var r=Math.sqrt(m*m+n*n),s=e.radius-r;if(s>0)return m/=r,n/=r,e.reportCollisionVsWorld(m*s,n*s,m,n,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var o=m*j+n*k,s=e.radius-Math.abs(o);if(s>0)return e.reportCollisionVsWorld(j*s,k*s,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER}}else{if(h*c+i*d>0){var t=Math.sqrt(5),j=1*h/t,k=2*i/t,l=e.radius,m=e.pos.x-j*l-(f.pos.x-h*f.xw),n=e.pos.y-k*l-(f.pos.y+i*f.yw),o=m*j+n*k;return 0>o?(e.reportCollisionVsWorld(-j*o,-k*o,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER):Phaser.Physics.Ninja.Circle.COL_NONE}var u=f.pos.x+c*f.xw,v=f.pos.y+d*f.yw,w=e.pos.x-u,x=e.pos.y-v,r=Math.sqrt(w*w+x*x),s=e.radius-r;if(s>0)return 0===r?(w=c/Math.SQRT2,x=d/Math.SQRT2):(w/=r,x/=r),e.reportCollisionVsWorld(w*s,x*s,w,x,f),Phaser.Physics.Ninja.Circle.COL_OTHER}return Phaser.Physics.Ninja.Circle.COL_NONE},projCircle_67DegS:function(a,b,c,d,e,f){var g=f.signx,h=f.signy;if(g*c>0)return Phaser.Physics.Ninja.Circle.COL_NONE;if(0===c)if(0===d){var i,j=f.sx,k=f.sy,l=e.radius,m=e.pos.x-f.pos.x,n=e.pos.y-(f.pos.y-h*f.yw),o=m*-k+n*j;if(0>o*g*h){var p=Math.sqrt(m*m+n*n),q=l-p;if(q>0)return m/=p,n/=p,e.reportCollisionVsWorld(m*q,n*q,m,n,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{m-=l*j,n-=l*k;var r=m*j+n*k;if(0>r){j*=-r,k*=-r;var s=Math.sqrt(j*j+k*k);return b>a?(i=a,b=0,e.pos.x-f.pos.x<0&&(a*=-1)):(i=b,a=0,e.pos.y-f.pos.y<0&&(b*=-1)),s>i?(e.reportCollisionVsWorld(a,b,a/i,b/i,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(e.reportCollisionVsWorld(j,k,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER)}}}else if(0>h*d){var t=f.pos.x,u=f.pos.y-h*f.yw,v=e.pos.x-t,w=e.pos.y-u;if(0>v*g)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var p=Math.sqrt(v*v+w*w),q=e.radius-p;if(q>0)return 0===p?(v=c/Math.SQRT2,w=d/Math.SQRT2):(v/=p,w/=p),e.reportCollisionVsWorld(v*q,w*q,v,w,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var j=f.sx,k=f.sy,m=e.pos.x-(f.pos.x-g*f.xw),n=e.pos.y-(f.pos.y+d*f.yw),o=m*-k+n*j;if(o*g*h>0){var p=Math.sqrt(m*m+n*n),q=e.radius-p;if(q>0)return m/=p,n/=p,e.reportCollisionVsWorld(m*q,n*q,m,n,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var r=m*j+n*k,q=e.radius-Math.abs(r);if(q>0)return e.reportCollisionVsWorld(j*q,k*q,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER}}else{if(0===d)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var t=f.pos.x+c*f.xw,u=f.pos.y+d*f.yw,v=e.pos.x-t,w=e.pos.y-u,p=Math.sqrt(v*v+w*w),q=e.radius-p;if(q>0)return 0===p?(v=c/Math.SQRT2,w=d/Math.SQRT2):(v/=p,w/=p),e.reportCollisionVsWorld(v*q,w*q,v,w,f),Phaser.Physics.Ninja.Circle.COL_OTHER}return Phaser.Physics.Ninja.Circle.COL_NONE},projCircle_67DegB:function(a,b,c,d,e,f){var g=f.signx,h=f.signy;if(0===c)if(0===d){var i,j=f.sx,k=f.sy,l=e.radius,m=e.pos.x-j*l-(f.pos.x+g*f.xw),n=e.pos.y-k*l-(f.pos.y-h*f.yw),o=m*j+n*k;if(0>o){j*=-o,k*=-o;var p=Math.sqrt(j*j+k*k);return b>a?(i=a,b=0,e.pos.x-f.pos.x<0&&(a*=-1)):(i=b,a=0,e.pos.y-f.pos.y<0&&(b*=-1)),p>i?(e.reportCollisionVsWorld(a,b,a/i,b/i,f),Phaser.Physics.Ninja.Circle.COL_AXIS):(e.reportCollisionVsWorld(j,k,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER)}}else{if(0>h*d)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var m=e.pos.x-f.pos.x,n=e.pos.y-(f.pos.y+h*f.yw);if(0>m*g)return e.reportCollisionVsWorld(0,b*d,0,d,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var j=f.sx,k=f.sy,q=m*-k+n*j;if(q*g*h>0){var r=Math.sqrt(m*m+n*n),s=e.radius-r;if(s>0)return m/=r,n/=r,e.reportCollisionVsWorld(m*s,n*s,m,n,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var o=m*j+n*k,s=e.radius-Math.abs(o);if(s>0)return e.reportCollisionVsWorld(j*s,k*s,j,k,f),Phaser.Physics.Ninja.Circle.COL_OTHER}}else if(0===d){if(0>g*c)return e.reportCollisionVsWorld(a*c,0,c,0,f),Phaser.Physics.Ninja.Circle.COL_AXIS;var t=Math.sqrt(5),j=2*g/t,k=1*h/t,m=e.pos.x-(f.pos.x+g*f.xw),n=e.pos.y-(f.pos.y-h*f.yw),q=m*-k+n*j;if(0>q*g*h){var r=Math.sqrt(m*m+n*n),s=e.radius-r;if(s>0)return m/=r,n/=r,e.reportCollisionVsWorld(m*s,n*s,m,n,f),Phaser.Physics.Ninja.Circle.COL_OTHER}else{var o=m*j+n*k,s=e.radius-Math.abs(o);if(s>0)return e.reportCollisionVsWorld(j*s,k*s,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER}}else{if(g*c+h*d>0){var j=f.sx,k=f.sy,l=e.radius,m=e.pos.x-j*l-(f.pos.x+g*f.xw),n=e.pos.y-k*l-(f.pos.y-h*f.yw),o=m*j+n*k;return 0>o?(e.reportCollisionVsWorld(-j*o,-k*o,f.sx,f.sy,f),Phaser.Physics.Ninja.Circle.COL_OTHER):Phaser.Physics.Ninja.Circle.COL_NONE}var u=f.pos.x+c*f.xw,v=f.pos.y+d*f.yw,w=e.pos.x-u,x=e.pos.y-v,r=Math.sqrt(w*w+x*x),s=e.radius-r;if(s>0)return 0===r?(w=c/Math.SQRT2,x=d/Math.SQRT2):(w/=r,x/=r),e.reportCollisionVsWorld(w*s,x*s,w,x,f),Phaser.Physics.Ninja.Circle.COL_OTHER}return Phaser.Physics.Ninja.Circle.COL_NONE},destroy:function(){this.body=null,this.system=null}},!function(a){"object"==typeof exports?module.exports=a():"function"==typeof define&&define.amd?define("p2",function(){return this.p2=a()}()):"undefined"!=typeof window?window.p2=a():"undefined"!=typeof global?self.p2=a():"undefined"!=typeof self&&(self.p2=a())}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){var d={},e=new Float32Array([1,0,0,1]);if(!f)var f=1e-6;d.create=function(){return new Float32Array(e)},d.clone=function(a){var b=new Float32Array(4);return b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b},d.copy=function(a,b){return a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a},d.identity=function(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=1,a},d.transpose=function(a,b){if(a===b){var c=b[1];a[1]=b[2],a[2]=c}else a[0]=b[0],a[1]=b[2],a[2]=b[1],a[3]=b[3];return a},d.invert=function(a,b){var c=b[0],d=b[1],e=b[2],f=b[3],g=c*f-e*d;return g?(g=1/g,a[0]=f*g,a[1]=-d*g,a[2]=-e*g,a[3]=c*g,a):null},d.adjoint=function(a,b){var c=b[0];return a[0]=b[3],a[1]=-b[1],a[2]=-b[2],a[3]=c,a},d.determinant=function(a){return a[0]*a[3]-a[2]*a[1]},d.multiply=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=c[0],i=c[1],j=c[2],k=c[3];return a[0]=d*h+e*j,a[1]=d*i+e*k,a[2]=f*h+g*j,a[3]=f*i+g*k,a},d.mul=d.multiply,d.rotate=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=Math.sin(c),i=Math.cos(c);return a[0]=d*i+e*h,a[1]=d*-h+e*i,a[2]=f*i+g*h,a[3]=f*-h+g*i,a},d.scale=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=c[0],i=c[1];return a[0]=d*h,a[1]=e*i,a[2]=f*h,a[3]=g*i,a},d.str=function(a){return"mat2("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"},"undefined"!=typeof c&&(c.mat2=d)},{}],2:[function(a,b,c){var d={};if(!e)var e=1e-6;d.create=function(){return new Float32Array(2)},d.clone=function(a){var b=new Float32Array(2);return b[0]=a[0],b[1]=a[1],b},d.fromValues=function(a,b){var c=new Float32Array(2);return c[0]=a,c[1]=b,c},d.copy=function(a,b){return a[0]=b[0],a[1]=b[1],a},d.set=function(a,b,c){return a[0]=b,a[1]=c,a},d.add=function(a,b,c){return a[0]=b[0]+c[0],a[1]=b[1]+c[1],a},d.subtract=function(a,b,c){return a[0]=b[0]-c[0],a[1]=b[1]-c[1],a},d.sub=d.subtract,d.multiply=function(a,b,c){return a[0]=b[0]*c[0],a[1]=b[1]*c[1],a},d.mul=d.multiply,d.divide=function(a,b,c){return a[0]=b[0]/c[0],a[1]=b[1]/c[1],a},d.div=d.divide,d.min=function(a,b,c){return a[0]=Math.min(b[0],c[0]),a[1]=Math.min(b[1],c[1]),a},d.max=function(a,b,c){return a[0]=Math.max(b[0],c[0]),a[1]=Math.max(b[1],c[1]),a},d.scale=function(a,b,c){return a[0]=b[0]*c,a[1]=b[1]*c,a},d.distance=function(a,b){var c=b[0]-a[0],d=b[1]-a[1];return Math.sqrt(c*c+d*d)},d.dist=d.distance,d.squaredDistance=function(a,b){var c=b[0]-a[0],d=b[1]-a[1];return c*c+d*d},d.sqrDist=d.squaredDistance,d.length=function(a){var b=a[0],c=a[1];return Math.sqrt(b*b+c*c)},d.len=d.length,d.squaredLength=function(a){var b=a[0],c=a[1];return b*b+c*c},d.sqrLen=d.squaredLength,d.negate=function(a,b){return a[0]=-b[0],a[1]=-b[1],a},d.normalize=function(a,b){var c=b[0],d=b[1],e=c*c+d*d;return e>0&&(e=1/Math.sqrt(e),a[0]=b[0]*e,a[1]=b[1]*e),a},d.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]},d.cross=function(a,b,c){var d=b[0]*c[1]-b[1]*c[0];return a[0]=a[1]=0,a[2]=d,a},d.lerp=function(a,b,c,d){var e=b[0],f=b[1];return a[0]=e+d*(c[0]-e),a[1]=f+d*(c[1]-f),a},d.transformMat2=function(a,b,c){var d=b[0],e=b[1];return a[0]=d*c[0]+e*c[1],a[1]=d*c[2]+e*c[3],a},d.forEach=function(){var a=new Float32Array(2);return function(b,c,d,e,f,g){var h,i;for(c||(c=2),d||(d=0),i=e?Math.min(e*c+d,b.length):b.length,h=d;i>h;h+=c)a[0]=b[h],a[1]=b[h+1],f(a,a,g),b[h]=a[0],b[h+1]=a[1];return b}}(),d.str=function(a){return"vec2("+a[0]+", "+a[1]+")"},"undefined"!=typeof c&&(c.vec2=d)},{}],3:[function(a,b){function c(){}var d=a("./Scalar");b.exports=c,c.lineInt=function(a,b,c){c=c||0;var e,f,g,h,i,j,k,l=[0,0];return e=a[1][1]-a[0][1],f=a[0][0]-a[1][0],g=e*a[0][0]+f*a[0][1],h=b[1][1]-b[0][1],i=b[0][0]-b[1][0],j=h*b[0][0]+i*b[0][1],k=e*i-h*f,d.eq(k,0,c)||(l[0]=(i*g-f*j)/k,l[1]=(e*j-h*g)/k),l},c.segmentsIntersect=function(a,b,c,d){var e=b[0]-a[0],f=b[1]-a[1],g=d[0]-c[0],h=d[1]-c[1];if(g*f-h*e==0)return!1;var i=(e*(c[1]-a[1])+f*(a[0]-c[0]))/(g*f-h*e),j=(g*(a[1]-c[1])+h*(c[0]-a[0]))/(h*e-g*f);return i>=0&&1>=i&&j>=0&&1>=j}},{"./Scalar":6}],4:[function(a,b){function c(){}b.exports=c,c.area=function(a,b,c){return(b[0]-a[0])*(c[1]-a[1])-(c[0]-a[0])*(b[1]-a[1])},c.left=function(a,b,d){return c.area(a,b,d)>0},c.leftOn=function(a,b,d){return c.area(a,b,d)>=0},c.right=function(a,b,d){return c.area(a,b,d)<0},c.rightOn=function(a,b,d){return c.area(a,b,d)<=0};var d=[],e=[];c.collinear=function(a,b,f,g){if(g){var h=d,i=e;h[0]=b[0]-a[0],h[1]=b[1]-a[1],i[0]=f[0]-b[0],i[1]=f[1]-b[1];var j=h[0]*i[0]+h[1]*i[1],k=Math.sqrt(h[0]*h[0]+h[1]*h[1]),l=Math.sqrt(i[0]*i[0]+i[1]*i[1]),m=Math.acos(j/(k*l));return g>m}return 0==c.area(a,b,f)},c.sqdist=function(a,b){var c=b[0]-a[0],d=b[1]-a[1];return c*c+d*d}},{}],5:[function(a,b){function c(){this.vertices=[]}function d(a,b,c,d,e){e=e||0;var f=b[1]-a[1],h=a[0]-b[0],i=f*a[0]+h*a[1],j=d[1]-c[1],k=c[0]-d[0],l=j*c[0]+k*c[1],m=f*k-j*h;return g.eq(m,0,e)?[0,0]:[(k*i-h*l)/m,(f*l-j*i)/m]}var e=a("./Line"),f=a("./Point"),g=a("./Scalar");b.exports=c,c.prototype.at=function(a){var b=this.vertices,c=b.length;return b[0>a?a%c+c:a%c]},c.prototype.first=function(){return this.vertices[0]},c.prototype.last=function(){return this.vertices[this.vertices.length-1]},c.prototype.clear=function(){this.vertices.length=0},c.prototype.append=function(a,b,c){if("undefined"==typeof b)throw new Error("From is not given!");if("undefined"==typeof c)throw new Error("To is not given!");if(b>c-1)throw new Error("lol1");if(c>a.vertices.length)throw new Error("lol2");if(0>b)throw new Error("lol3");for(var d=b;c>d;d++)this.vertices.push(a.vertices[d])},c.prototype.makeCCW=function(){for(var a=0,b=this.vertices,c=1;c<this.vertices.length;++c)(b[c][1]<b[a][1]||b[c][1]==b[a][1]&&b[c][0]>b[a][0])&&(a=c);f.left(this.at(a-1),this.at(a),this.at(a+1))||this.reverse()},c.prototype.reverse=function(){for(var a=[],b=0,c=this.vertices.length;b!==c;b++)a.push(this.vertices.pop());this.vertices=a},c.prototype.isReflex=function(a){return f.right(this.at(a-1),this.at(a),this.at(a+1))};var h=[],i=[];c.prototype.canSee=function(a,b){var c,d,g=h,j=i;if(f.leftOn(this.at(a+1),this.at(a),this.at(b))&&f.rightOn(this.at(a-1),this.at(a),this.at(b)))return!1;d=f.sqdist(this.at(a),this.at(b));for(var k=0;k!==this.vertices.length;++k)if((k+1)%this.vertices.length!==a&&k!==a&&f.leftOn(this.at(a),this.at(b),this.at(k+1))&&f.rightOn(this.at(a),this.at(b),this.at(k))&&(g[0]=this.at(a),g[1]=this.at(b),j[0]=this.at(k),j[1]=this.at(k+1),c=e.lineInt(g,j),f.sqdist(this.at(a),c)<d))return!1;return!0},c.prototype.copy=function(a,b,d){var e=d||new c;if(e.clear(),b>a)for(var f=a;b>=f;f++)e.vertices.push(this.vertices[f]);else{for(var f=0;b>=f;f++)e.vertices.push(this.vertices[f]);for(var f=a;f<this.vertices.length;f++)e.vertices.push(this.vertices[f])}return e},c.prototype.getCutEdges=function(){for(var a=[],b=[],d=[],e=new c,f=Number.MAX_VALUE,g=0;g<this.vertices.length;++g)if(this.isReflex(g))for(var h=0;h<this.vertices.length;++h)if(this.canSee(g,h)){b=this.copy(g,h,e).getCutEdges(),d=this.copy(h,g,e).getCutEdges();for(var i=0;i<d.length;i++)b.push(d[i]);b.length<f&&(a=b,f=b.length,a.push([this.at(g),this.at(h)]))}return a},c.prototype.decomp=function(){var a=this.getCutEdges();return a.length>0?this.slice(a):[this]},c.prototype.slice=function(a){if(0==a.length)return[this];if(a instanceof Array&&a.length&&a[0]instanceof Array&&2==a[0].length&&a[0][0]instanceof Array){for(var b=[this],c=0;c<a.length;c++)for(var d=a[c],e=0;e<b.length;e++){var f=b[e],g=f.slice(d);if(g){b.splice(e,1),b.push(g[0],g[1]);break}}return b}var d=a,c=this.vertices.indexOf(d[0]),e=this.vertices.indexOf(d[1]);return-1!=c&&-1!=e?[this.copy(c,e),this.copy(e,c)]:!1},c.prototype.isSimple=function(){for(var a=this.vertices,b=0;b<a.length-1;b++)for(var c=0;b-1>c;c++)if(e.segmentsIntersect(a[b],a[b+1],a[c],a[c+1]))return!1;for(var b=1;b<a.length-2;b++)if(e.segmentsIntersect(a[0],a[a.length-1],a[b],a[b+1]))return!1;return!0},c.prototype.quickDecomp=function(a,b,e,g,h,i){h=h||100,i=i||0,g=g||25,a="undefined"!=typeof a?a:[],b=b||[],e=e||[];var j=[0,0],k=[0,0],l=[0,0],m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=new c,u=new c,v=this,w=this.vertices;if(w.length<3)return a;if(i++,i>h)return console.warn("quickDecomp: max level ("+h+") reached."),a;for(var x=0;x<this.vertices.length;++x)if(v.isReflex(x)){b.push(v.vertices[x]),m=n=Number.MAX_VALUE;for(var y=0;y<this.vertices.length;++y)f.left(v.at(x-1),v.at(x),v.at(y))&&f.rightOn(v.at(x-1),v.at(x),v.at(y-1))&&(l=d(v.at(x-1),v.at(x),v.at(y),v.at(y-1)),f.right(v.at(x+1),v.at(x),l)&&(o=f.sqdist(v.vertices[x],l),n>o&&(n=o,k=l,r=y))),f.left(v.at(x+1),v.at(x),v.at(y+1))&&f.rightOn(v.at(x+1),v.at(x),v.at(y))&&(l=d(v.at(x+1),v.at(x),v.at(y),v.at(y+1)),f.left(v.at(x-1),v.at(x),l)&&(o=f.sqdist(v.vertices[x],l),m>o&&(m=o,j=l,q=y)));if(r==(q+1)%this.vertices.length)l[0]=(k[0]+j[0])/2,l[1]=(k[1]+j[1])/2,e.push(l),q>x?(t.append(v,x,q+1),t.vertices.push(l),u.vertices.push(l),0!=r&&u.append(v,r,v.vertices.length),u.append(v,0,x+1)):(0!=x&&t.append(v,x,v.vertices.length),t.append(v,0,q+1),t.vertices.push(l),u.vertices.push(l),u.append(v,r,x+1));else{if(r>q&&(q+=this.vertices.length),p=Number.MAX_VALUE,r>q)return a;for(var y=r;q>=y;++y)f.leftOn(v.at(x-1),v.at(x),v.at(y))&&f.rightOn(v.at(x+1),v.at(x),v.at(y))&&(o=f.sqdist(v.at(x),v.at(y)),p>o&&(p=o,s=y%this.vertices.length));s>x?(t.append(v,x,s+1),0!=s&&u.append(v,s,w.length),u.append(v,0,x+1)):(0!=x&&t.append(v,x,w.length),t.append(v,0,s+1),u.append(v,s,x+1))}return t.vertices.length<u.vertices.length?(t.quickDecomp(a,b,e,g,h,i),u.quickDecomp(a,b,e,g,h,i)):(u.quickDecomp(a,b,e,g,h,i),t.quickDecomp(a,b,e,g,h,i)),a}return a.push(this),a},c.prototype.removeCollinearPoints=function(a){for(var b=0,c=this.vertices.length-1;this.vertices.length>3&&c>=0;--c)f.collinear(this.at(c-1),this.at(c),this.at(c+1),a)&&(this.vertices.splice(c%this.vertices.length,1),c--,b++);return b}},{"./Line":3,"./Point":4,"./Scalar":6}],6:[function(a,b){function c(){}b.exports=c,c.eq=function(a,b,c){return c=c||0,Math.abs(a-b)<c}},{}],7:[function(a,b){b.exports={Polygon:a("./Polygon"),Point:a("./Point")}},{"./Point":4,"./Polygon":5}],8:[function(a,b){b.exports={name:"p2",version:"0.4.0",description:"A JavaScript 2D physics engine.",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["p2.js","p2","physics","engine","2d"],main:"./src/p2.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/p2.js.git"},bugs:{url:"https://github.com/schteppe/p2.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest",nodeunit:"latest",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"~0.1.2","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"*","grunt-browserify":"*",browserify:"*"},dependencies:{underscore:"*","poly-decomp":"git://github.com/schteppe/poly-decomp.js","gl-matrix":"2.0.0",jsonschema:"*"}}},{}],9:[function(a,b){function c(a){this.lowerBound=d.create(),a&&a.lowerBound&&d.copy(this.lowerBound,a.lowerBound),this.upperBound=d.create(),a&&a.upperBound&&d.copy(this.upperBound,a.upperBound)}{var d=a("../math/vec2");a("../utils/Utils")}b.exports=c;var e=d.create();c.prototype.setFromPoints=function(a,b,c){var f=this.lowerBound,g=this.upperBound;d.set(f,Number.MAX_VALUE,Number.MAX_VALUE),d.set(g,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var h=0;h<a.length;h++){var i=a[h];"number"==typeof c&&(d.rotate(e,i,c),i=e);for(var j=0;2>j;j++)i[j]>g[j]&&(g[j]=i[j]),i[j]<f[j]&&(f[j]=i[j])}b&&(d.add(this.lowerBound,this.lowerBound,b),d.add(this.upperBound,this.upperBound,b))},c.prototype.copy=function(a){d.copy(this.lowerBound,a.lowerBound),d.copy(this.upperBound,a.upperBound)},c.prototype.extend=function(a){for(var b=0;2>b;b++)a.lowerBound[b]<this.lowerBound[b]&&(this.lowerBound[b]=a.lowerBound[b]),a.upperBound[b]>this.upperBound[b]&&(this.upperBound[b]=a.upperBound[b])},c.prototype.overlaps=function(a){var b=this.lowerBound,c=this.upperBound,d=a.lowerBound,e=a.upperBound;return(d[0]<=c[0]&&c[0]<=e[0]||b[0]<=e[0]&&e[0]<=c[0])&&(d[1]<=c[1]&&c[1]<=e[1]||b[1]<=e[1]&&e[1]<=c[1])}},{"../math/vec2":33,"../utils/Utils":50}],10:[function(a,b){function c(a){this.type=a,this.result=[],this.world=null}var d=a("../math/vec2"),e=a("../objects/Body");b.exports=c,c.prototype.setWorld=function(a){this.world=a},c.prototype.getCollisionPairs=function(){throw new Error("getCollisionPairs must be implemented in a subclass!")};var f=d.create();c.boundingRadiusCheck=function(a,b){d.sub(f,a.position,b.position);var c=d.squaredLength(f),e=a.boundingRadius+b.boundingRadius;return e*e>=c},c.aabbCheck=function(a,b){return a.aabbNeedsUpdate&&a.updateAABB(),b.aabbNeedsUpdate&&b.updateAABB(),a.aabb.overlaps(b.aabb)},c.canCollide=function(a,b){return a.motionState==e.STATIC&&b.motionState==e.STATIC?!1:a.motionState==e.KINEMATIC&&b.motionState==e.STATIC||a.motionState==e.STATIC&&b.motionState==e.KINEMATIC?!1:a.motionState==e.KINEMATIC&&b.motionState==e.KINEMATIC?!1:a.sleepState==e.SLEEPING&&b.sleepState==e.SLEEPING?!1:!0},c.NAIVE=1,c.SAP=2},{"../math/vec2":33,"../objects/Body":34}],11:[function(a,b){function d(a,b,c,d,e,f){h.apply(this),e=e||10,f=f||10,this.binsizeX=(b-a)/e,this.binsizeY=(d-c)/f,this.nx=e,this.ny=f,this.xmin=a,this.ymin=c,this.xmax=b,this.ymax=d}{var e=a("../shapes/Circle"),f=a("../shapes/Plane"),g=a("../shapes/Particle"),h=a("../collision/Broadphase");a("../math/vec2")}b.exports=d,d.prototype=new h,d.prototype.getBinIndex=function(a,b){var c=this.nx,d=this.ny,e=this.xmin,f=this.ymin,g=this.xmax,h=this.ymax,i=Math.floor(c*(a-e)/(g-e)),j=Math.floor(d*(b-f)/(h-f));return i*d+j},d.prototype.getCollisionPairs=function(a){for(var b=[],d=a.bodies,i=i=d.length,j=this.binsizeX,k=this.binsizeY,l=[],m=nx*ny,n=0;m>n;n++)l.push([]);for(var o=nx/(xmax-xmin),p=ny/(ymax-ymin),n=0;n!==i;n++){var q=d[n],r=q.shape;if(void 0!==r)if(r instanceof e)for(var s=q.position[0],t=q.position[1],u=r.radius,v=Math.floor(o*(s-u-xmin)),w=Math.floor(p*(t-u-ymin)),x=Math.floor(o*(s+u-xmin)),y=Math.floor(p*(t+u-ymin)),z=v;x>=z;z++)for(var A=w;y>=A;A++){var B=z,C=A;B*(ny-1)+C>=0&&m>B*(ny-1)+C&&l[B*(ny-1)+C].push(q)}else{if(!(r instanceof f))throw new Error("Shape not supported in GridBroadphase!");if(0==q.angle)for(var t=q.position[1],z=0;z!==m&&t>ymin+k*(z-1);z++)for(var A=0;nx>A;A++){var B=A,C=Math.floor(p*(k*z-ymin));l[B*(ny-1)+C].push(q)}else if(q.angle==.5*Math.PI)for(var s=q.position[0],z=0;z!==m&&s>xmin+j*(z-1);z++)for(var A=0;ny>A;A++){var C=A,B=Math.floor(o*(j*z-xmin));l[B*(ny-1)+C].push(q)}else for(var z=0;z!==m;z++)l[z].push(q)}}for(var n=0;n!==m;n++)for(var D=l[n],z=0,E=D.length;z!==E;z++)for(var q=D[z],r=q.shape,A=0;A!==z;A++){var F=D[A],G=F.shape;
r instanceof e?G instanceof e?c=h.circleCircle(q,F):G instanceof g?c=h.circleParticle(q,F):G instanceof f&&(c=h.circlePlane(q,F)):r instanceof g?G instanceof e&&(c=h.circleParticle(F,q)):r instanceof f&&G instanceof e&&(c=h.circlePlane(F,q))}return b}},{"../collision/Broadphase":10,"../math/vec2":33,"../shapes/Circle":38,"../shapes/Particle":42,"../shapes/Plane":43}],12:[function(a,b){function c(){d.call(this,d.NAIVE),this.useBoundingBoxes=!1}{var d=(a("../shapes/Circle"),a("../shapes/Plane"),a("../shapes/Shape"),a("../shapes/Particle"),a("../collision/Broadphase"));a("../math/vec2")}b.exports=c,c.prototype=new d,c.prototype.getCollisionPairs=function(a){var b,c,e,f,g=a.bodies,h=this.result,i=this.useBoundingBoxes?d.aabbCheck:d.boundingRadiusCheck;for(h.length=0,b=0,Ncolliding=g.length;b!==Ncolliding;b++)for(e=g[b],c=0;b>c;c++)f=g[c],d.canCollide(e,f)&&i(e,f)&&h.push(e,f);return h}},{"../collision/Broadphase":10,"../math/vec2":33,"../shapes/Circle":38,"../shapes/Particle":42,"../shapes/Plane":43,"../shapes/Shape":45}],13:[function(a,b){function c(){this.contactEquations=[],this.frictionEquations=[],this.enableFriction=!0,this.slipForce=10,this.frictionCoefficient=.3,this.surfaceVelocity=0,this.reuseObjects=!0,this.reusableContactEquations=[],this.reusableFrictionEquations=[],this.restitution=0,this.stiffness=1e7,this.relaxation=3,this.frictionStiffness=1e7,this.frictionRelaxation=3,this.collidingBodiesLastStep={keys:[]}}function d(a){for(var b=0,c=a.keys.length;c>b;b++)delete a[a.keys[b]];a.keys.length=0}function e(a,b){g.set(a.vertices[0],.5*-b.length,-b.radius),g.set(a.vertices[1],.5*b.length,-b.radius),g.set(a.vertices[2],.5*b.length,b.radius),g.set(a.vertices[3],.5*-b.length,b.radius)}function f(a,b,c,d){for(var e=Q,f=R,j=S,k=T,l=a,m=b.vertices,n=null,o=0;o!==m.length+1;o++){var p=m[o%m.length],q=m[(o+1)%m.length];g.rotate(e,p,d),g.rotate(f,q,d),i(e,e,c),i(f,f,c),h(j,e,l),h(k,f,l);var r=g.crossLength(j,k);if(null===n&&(n=r),0>=r*n)return!1;n=r}return!0}var g=a("../math/vec2"),h=g.sub,i=g.add,j=g.dot,k=a("../utils/Utils"),l=a("../equations/ContactEquation"),m=a("../equations/FrictionEquation"),n=a("../shapes/Circle"),o=a("../shapes/Shape"),p=a("../objects/Body"),q=a("../shapes/Rectangle");b.exports=c;var r=g.fromValues(0,1),s=g.fromValues(0,0),t=g.fromValues(0,0),u=g.fromValues(0,0),v=g.fromValues(0,0),w=g.fromValues(0,0),x=g.fromValues(0,0),y=g.fromValues(0,0),z=g.fromValues(0,0),A=g.fromValues(0,0),B=g.fromValues(0,0),C=g.fromValues(0,0),D=g.fromValues(0,0),E=g.fromValues(0,0),F=g.fromValues(0,0),G=g.fromValues(0,0),H=g.fromValues(0,0),I=g.fromValues(0,0),J=g.fromValues(0,0),K=[];c.prototype.collidedLastStep=function(a,b){var c=a.id,d=b.id;if(c>d){var e=c;c=d,d=e}return!!this.collidingBodiesLastStep[c+" "+d]},c.prototype.reset=function(){d(this.collidingBodiesLastStep);for(var a=0;a!==this.contactEquations.length;a++){var b=this.contactEquations[a],c=b.bi.id,e=b.bj.id;if(c>e){var f=c;c=e,e=f}var g=c+" "+e;this.collidingBodiesLastStep[g]||(this.collidingBodiesLastStep[g]=!0,this.collidingBodiesLastStep.keys.push(g))}if(this.reuseObjects){var h=this.contactEquations,i=this.frictionEquations,j=this.reusableFrictionEquations,l=this.reusableContactEquations;k.appendArray(l,h),k.appendArray(j,i)}this.contactEquations.length=this.frictionEquations.length=0},c.prototype.createContactEquation=function(a,b,c,d){var e=this.reusableContactEquations.length?this.reusableContactEquations.pop():new l(a,b);return e.bi=a,e.bj=b,e.shapeA=c,e.shapeB=d,e.restitution=this.restitution,e.firstImpact=!this.collidedLastStep(a,b),e.stiffness=this.stiffness,e.relaxation=this.relaxation,e.enabled=!0,a.allowSleep&&a.motionState==p.DYNAMIC&&b.motionState!=p.STATIC&&b.sleepState!==p.SLEEPY&&a.wakeUp(),b.allowSleep&&b.motionState==p.DYNAMIC&&a.motionState!=p.STATIC&&a.sleepState!==p.SLEEPY&&b.wakeUp(),e},c.prototype.createFrictionEquation=function(a,b,c,d){var e=this.reusableFrictionEquations.length?this.reusableFrictionEquations.pop():new m(a,b);return e.bi=a,e.bj=b,e.shapeA=c,e.shapeB=d,e.setSlipForce(this.slipForce),e.frictionCoefficient=this.frictionCoefficient,e.relativeVelocity=this.surfaceVelocity,e.enabled=!0,e.frictionStiffness=this.frictionStiffness,e.frictionRelaxation=this.frictionRelaxation,e},c.prototype.createFrictionFromContact=function(a){var b=this.createFrictionEquation(a.bi,a.bj,a.shapeA,a.shapeB);return g.copy(b.ri,a.ri),g.copy(b.rj,a.rj),g.rotate(b.t,a.ni,-Math.PI/2),b.contactEquation=a,b},c.prototype[o.LINE|o.CONVEX]=c.prototype.convexLine=function(a,b,c,d,e,f,g,h,i){return i?!1:0},c.prototype[o.LINE|o.RECTANGLE]=c.prototype.lineRectangle=function(a,b,c,d,e,f,g,h,i){return i?!1:0};var L=new q(1,1),M=g.create();c.prototype[o.CAPSULE|o.CONVEX]=c.prototype[o.CAPSULE|o.RECTANGLE]=c.prototype.convexCapsule=function(a,b,c,d,f,h,i,j,k){var l=M;g.set(l,h.length/2,0),g.rotate(l,l,j),g.add(l,l,i);var m=this.circleConvex(f,h,l,j,a,b,c,d,k,h.radius);g.set(l,-h.length/2,0),g.rotate(l,l,j),g.add(l,l,i);var n=this.circleConvex(f,h,l,j,a,b,c,d,k,h.radius);if(k&&(m||n))return!0;var o=L;e(o,h);var p=this.convexConvex(a,b,c,d,f,o,i,j,k);return p+m+n},c.prototype[o.CAPSULE|o.LINE]=c.prototype.lineCapsule=function(a,b,c,d,e,f,g,h,i){return i?!1:0};var N=g.create(),O=g.create(),P=new q(1,1);c.prototype[o.CAPSULE|o.CAPSULE]=c.prototype.capsuleCapsule=function(a,b,c,d,f,h,i,j,k){for(var l=N,m=O,n=0,o=0;2>o;o++){g.set(l,(0==o?-1:1)*b.length/2,0),g.rotate(l,l,d),g.add(l,l,c);for(var p=0;2>p;p++){g.set(m,(0==p?-1:1)*h.length/2,0),g.rotate(m,m,j),g.add(m,m,i);var q=this.circleCircle(a,b,l,d,f,h,m,j,k,b.radius,h.radius);if(k&&q)return!0;n+=q}}var r=P;e(r,b);var s=this.convexCapsule(a,r,c,d,f,h,i,j,k);if(k&&s)return!0;n+=s,e(r,h);var t=this.convexCapsule(f,r,i,j,a,b,c,d,k);return k&&t?!0:n+=t},c.prototype[o.LINE|o.LINE]=c.prototype.lineLine=function(a,b,c,d,e,f,g,h,i){return i?!1:0},c.prototype[o.PLANE|o.LINE]=c.prototype.planeLine=function(a,b,c,d,e,f,k,l,m){var n=s,o=t,p=u,q=v,B=w,C=x,D=y,E=z,F=A,G=K;numContacts=0,g.set(n,-f.length/2,0),g.set(o,f.length/2,0),g.rotate(p,n,l),g.rotate(q,o,l),i(p,p,k),i(q,q,k),g.copy(n,p),g.copy(o,q),h(B,o,n),g.normalize(C,B),g.rotate(F,C,-Math.PI/2),g.rotate(E,r,d),G[0]=n,G[1]=o;for(var H=0;H<G.length;H++){var I=G[H];h(D,I,c);var J=j(D,E);if(0>J){if(m)return!0;var L=this.createContactEquation(a,e,b,f);numContacts++,g.copy(L.ni,E),g.normalize(L.ni,L.ni),g.scale(D,E,J),h(L.ri,I,D),h(L.ri,L.ri,a.position),h(L.rj,I,k),i(L.rj,L.rj,k),h(L.rj,L.rj,e.position),this.contactEquations.push(L),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(L))}}return numContacts},c.prototype[o.PARTICLE|o.CAPSULE]=c.prototype.particleCapsule=function(a,b,c,d,e,f,g,h,i){return this.circleLine(a,b,c,d,e,f,g,h,i,f.radius,0)},c.prototype[o.CIRCLE|o.LINE]=c.prototype.circleLine=function(a,b,c,d,e,f,k,l,m,n,o){var p=f,q=l,r=e,G=k,H=c,I=a,J=b,n=n||0,o="undefined"!=typeof o?o:J.radius,L=s,M=t,N=u,O=v,P=w,Q=x,R=y,S=z,T=A,U=B,V=C,W=D,X=E,Y=F,Z=K;g.set(S,-p.length/2,0),g.set(T,p.length/2,0),g.rotate(U,S,q),g.rotate(V,T,q),i(U,U,G),i(V,V,G),g.copy(S,U),g.copy(T,V),h(Q,T,S),g.normalize(R,Q),g.rotate(P,R,-Math.PI/2),h(W,H,S);var $=j(W,P);if(h(O,S,G),h(X,H,G),Math.abs($)<o+n){g.scale(L,P,$),h(N,H,L),g.scale(M,P,j(P,X)),g.normalize(M,M),g.scale(M,M,n),i(N,N,M);var _=j(R,N),ab=j(R,S),bb=j(R,T);if(_>ab&&bb>_){if(m)return!0;var cb=this.createContactEquation(I,r,b,f);return g.scale(cb.ni,L,-1),g.normalize(cb.ni,cb.ni),g.scale(cb.ri,cb.ni,o),i(cb.ri,cb.ri,H),h(cb.ri,cb.ri,I.position),h(cb.rj,N,G),i(cb.rj,cb.rj,G),h(cb.rj,cb.rj,r.position),this.contactEquations.push(cb),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(cb)),1}}Z[0]=S,Z[1]=T;for(var db=0;db<Z.length;db++){var eb=Z[db];if(h(W,eb,H),g.squaredLength(W)<(o+n)*(o+n)){if(m)return!0;var cb=this.createContactEquation(I,r,b,f);return g.copy(cb.ni,W),g.normalize(cb.ni,cb.ni),g.scale(cb.ri,cb.ni,o),i(cb.ri,cb.ri,H),h(cb.ri,cb.ri,I.position),h(cb.rj,eb,G),g.scale(Y,cb.ni,-n),i(cb.rj,cb.rj,Y),i(cb.rj,cb.rj,G),h(cb.rj,cb.rj,r.position),this.contactEquations.push(cb),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(cb)),1}}return 0},c.prototype[o.CIRCLE|o.CAPSULE]=c.prototype.circleCapsule=function(a,b,c,d,e,f,g,h,i){return this.circleLine(a,b,c,d,e,f,g,h,i,f.radius)},c.prototype[o.CIRCLE|o.CONVEX]=c.prototype[o.CIRCLE|o.RECTANGLE]=c.prototype.circleConvex=function(a,b,c,d,e,j,k,l,m,n){var o=j,p=l,q=e,r=k,x=c,y=a,z=b,n="number"==typeof n?n:z.radius,A=s,D=t,I=u,J=v,K=w,L=B,M=C,N=E,O=F,P=G,Q=H,R=!1,S=Number.MAX_VALUE;verts=o.vertices;for(var T=0;T!==verts.length+1;T++){var U=verts[T%verts.length],V=verts[(T+1)%verts.length];if(g.rotate(A,U,p),g.rotate(D,V,p),i(A,A,r),i(D,D,r),h(I,D,A),g.normalize(J,I),g.rotate(K,J,-Math.PI/2),g.scale(O,K,-z.radius),i(O,O,x),f(O,o,r,p)){g.sub(P,A,O);var W=Math.abs(g.dot(P,K));S>W&&(g.copy(Q,O),S=W,g.scale(N,K,W),g.add(N,N,O),R=!0)}}if(R){if(m)return!0;var X=this.createContactEquation(y,q,b,j);return g.sub(X.ni,Q,x),g.normalize(X.ni,X.ni),g.scale(X.ri,X.ni,n),i(X.ri,X.ri,x),h(X.ri,X.ri,y.position),h(X.rj,N,r),i(X.rj,X.rj,r),h(X.rj,X.rj,q.position),this.contactEquations.push(X),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(X)),1}if(n>0)for(var T=0;T<verts.length;T++){var Y=verts[T];if(g.rotate(M,Y,p),i(M,M,r),h(L,M,x),g.squaredLength(L)<n*n){if(m)return!0;var X=this.createContactEquation(y,q,b,j);return g.copy(X.ni,L),g.normalize(X.ni,X.ni),g.scale(X.ri,X.ni,n),i(X.ri,X.ri,x),h(X.ri,X.ri,y.position),h(X.rj,M,r),i(X.rj,X.rj,r),h(X.rj,X.rj,q.position),this.contactEquations.push(X),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(X)),1}}return 0};var Q=g.create(),R=g.create(),S=g.create(),T=g.create();c.prototype[o.PARTICLE|o.CONVEX]=c.prototype[o.PARTICLE|o.RECTANGLE]=c.prototype.particleConvex=function(a,b,c,d,e,k,l,m,n){var o=k,p=m,q=e,r=l,z=c,A=a,C=s,D=t,F=u,G=v,H=w,K=x,L=y,M=B,N=E,O=I,P=J,Q=Number.MAX_VALUE,R=!1,S=o.vertices;if(!f(z,o,r,p))return 0;if(n)return!0;for(var T=0;T!==S.length+1;T++){var U=S[T%S.length],V=S[(T+1)%S.length];g.rotate(C,U,p),g.rotate(D,V,p),i(C,C,r),i(D,D,r),h(F,D,C),g.normalize(G,F),g.rotate(H,G,-Math.PI/2),h(M,z,C);{j(M,H)}h(K,C,r),h(L,z,r),g.sub(O,C,z);var W=Math.abs(g.dot(O,H));Q>W&&(Q=W,g.scale(N,H,W),g.add(N,N,z),g.copy(P,H),R=!0)}if(R){var X=this.createContactEquation(A,q,b,k);return g.scale(X.ni,P,-1),g.normalize(X.ni,X.ni),g.set(X.ri,0,0),i(X.ri,X.ri,z),h(X.ri,X.ri,A.position),h(X.rj,N,r),i(X.rj,X.rj,r),h(X.rj,X.rj,q.position),this.contactEquations.push(X),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(X)),1}return 0},c.prototype[o.CIRCLE]=c.prototype.circleCircle=function(a,b,c,d,e,f,j,k,l,m,n){var o=a,p=b,q=c,r=e,t=f,u=j,v=s,m=m||p.radius,n=n||t.radius;h(v,c,j);var w=m+n;if(g.squaredLength(v)>w*w)return 0;if(l)return!0;var x=this.createContactEquation(o,r,b,f);return h(x.ni,u,q),g.normalize(x.ni,x.ni),g.scale(x.ri,x.ni,m),g.scale(x.rj,x.ni,-n),i(x.ri,x.ri,q),h(x.ri,x.ri,o.position),i(x.rj,x.rj,u),h(x.rj,x.rj,r.position),this.contactEquations.push(x),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(x)),1},c.prototype[o.PLANE|o.CONVEX]=c.prototype[o.PLANE|o.RECTANGLE]=c.prototype.planeConvex=function(a,b,c,d,e,f,k,l,m){var n=e,o=k,p=f,q=l,v=a,w=b,x=c,y=d,z=s,A=t,B=u,C=0;g.rotate(A,r,y);for(var D=0;D<p.vertices.length;D++){var E=p.vertices[D];if(g.rotate(z,E,q),i(z,z,o),h(B,z,x),j(B,A)<0){if(m)return!0;C++;var F=this.createContactEquation(v,n,w,p);h(B,z,x),g.copy(F.ni,A);var G=j(B,F.ni);if(g.scale(B,F.ni,G),h(F.rj,z,n.position),h(F.ri,z,B),h(F.ri,F.ri,v.position),this.contactEquations.push(F),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(F)),C>=2)break}}return C},c.prototype.convexPlane=function(a,b,c,d,e,f,g,h,i){return console.warn("Narrowphase.prototype.convexPlane is deprecated. Use planeConvex instead!"),this.planeConvex(e,f,g,h,a,b,c,d,i)},c.prototype[o.PARTICLE|o.PLANE]=c.prototype.particlePlane=function(a,b,c,d,e,f,i,k,l){var m=a,n=c,o=e,p=i,q=k,u=s,v=t;q=q||0,h(u,n,p),g.rotate(v,r,q);var w=j(u,v);if(w>0)return 0;if(l)return!0;var x=this.createContactEquation(o,m,f,b);return g.copy(x.ni,v),g.scale(u,x.ni,w),h(x.ri,n,u),h(x.ri,x.ri,o.position),h(x.rj,n,m.position),this.contactEquations.push(x),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(x)),1},c.prototype[o.CIRCLE|o.PARTICLE]=c.prototype.circleParticle=function(a,b,c,d,e,f,j,k,l){var m=a,n=b,o=c,p=e,q=j,r=s;if(h(r,q,o),g.squaredLength(r)>n.radius*n.radius)return 0;if(l)return!0;var t=this.createContactEquation(m,p,b,f);return g.copy(t.ni,r),g.normalize(t.ni,t.ni),g.scale(t.ri,t.ni,n.radius),i(t.ri,t.ri,o),h(t.ri,t.ri,m.position),h(t.rj,q,p.position),this.contactEquations.push(t),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(t)),1};{var U=new n(1),V=g.create(),W=g.create();g.create()}c.prototype[o.PLANE|o.CAPSULE]=c.prototype.planeCapsule=function(a,b,c,d,e,f,h,j,k){var l=V,m=W,n=U;g.set(l,-f.length/2,0),g.rotate(l,l,j),i(l,l,h),g.set(m,f.length/2,0),g.rotate(m,m,j),i(m,m,h),n.radius=f.radius;var o=this.circlePlane(e,n,l,0,a,b,c,d,k),p=this.circlePlane(e,n,m,0,a,b,c,d,k);return k?o||p:o+p},c.prototype.capsulePlane=function(a,b,c,d,e,f,g,h,i){return console.warn("Narrowphase.prototype.capsulePlane() is deprecated. Use .planeCapsule() instead!"),this.planeCapsule(e,f,g,h,a,b,c,d,i)},c.prototype[o.CIRCLE|o.PLANE]=c.prototype.circlePlane=function(a,b,c,d,e,f,k,l,m){var n=a,o=b,p=c,q=e,v=k,w=l;w=w||0;var x=s,y=t,z=u;h(x,p,v),g.rotate(y,r,w);var A=j(y,x);if(A>o.radius)return 0;if(m)return!0;var B=this.createContactEquation(q,n,f,b);return g.copy(B.ni,y),g.scale(B.rj,B.ni,-o.radius),i(B.rj,B.rj,p),h(B.rj,B.rj,n.position),g.scale(z,B.ni,A),h(B.ri,x,z),i(B.ri,B.ri,v),h(B.ri,B.ri,q.position),this.contactEquations.push(B),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(B)),1},c.convexPrecision=1e-10,c.prototype[o.CONVEX]=c.prototype[o.CONVEX|o.RECTANGLE]=c.prototype[o.RECTANGLE]=c.prototype.convexConvex=function(a,b,d,e,f,k,l,m,n,o){var p=s,q=t,r=u,x=v,B=w,C=y,D=z,E=A,F=0,o=o||c.convexPrecision,G=c.findSeparatingAxis(b,d,e,k,l,m,p);if(!G)return 0;h(D,l,d),j(p,D)>0&&g.scale(p,p,-1);var H=c.getClosestEdge(b,e,p,!0),I=c.getClosestEdge(k,m,p);if(-1==H||-1==I)return 0;for(var J=0;2>J;J++){var K=H,L=I,M=b,N=k,O=d,P=l,Q=e,R=m,S=a,T=f;if(0==J){var U;U=K,K=L,L=U,U=M,M=N,N=U,U=O,O=P,P=U,U=Q,Q=R,R=U,U=S,S=T,T=U}for(var V=L;L+2>V;V++){var W=N.vertices[(V+N.vertices.length)%N.vertices.length];g.rotate(q,W,R),i(q,q,P);for(var X=0,Y=K-1;K+2>Y;Y++){var Z=M.vertices[(Y+M.vertices.length)%M.vertices.length],$=M.vertices[(Y+1+M.vertices.length)%M.vertices.length];g.rotate(r,Z,Q),g.rotate(x,$,Q),i(r,r,O),i(x,x,O),h(B,x,r),g.rotate(E,B,-Math.PI/2),g.normalize(E,E),h(D,q,r);var _=j(E,D);o>=_&&X++}if(3==X){if(n)return!0;var ab=this.createContactEquation(S,T,M,N);F++;var Z=M.vertices[K%M.vertices.length],$=M.vertices[(K+1)%M.vertices.length];g.rotate(r,Z,Q),g.rotate(x,$,Q),i(r,r,O),i(x,x,O),h(B,x,r),g.rotate(ab.ni,B,-Math.PI/2),g.normalize(ab.ni,ab.ni),h(D,q,r);var _=j(ab.ni,D);g.scale(C,ab.ni,_),h(ab.ri,q,O),h(ab.ri,ab.ri,C),i(ab.ri,ab.ri,O),h(ab.ri,ab.ri,S.position),h(ab.rj,q,P),i(ab.rj,ab.rj,P),h(ab.rj,ab.rj,T.position),this.contactEquations.push(ab),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(ab))}}}return F};var X=g.fromValues(0,0);c.projectConvexOntoAxis=function(a,b,c,d,e){var f,h,i=null,k=null,l=X;g.rotate(l,d,-c);for(var m=0;m<a.vertices.length;m++)f=a.vertices[m],h=j(f,l),(null===i||h>i)&&(i=h),(null===k||k>h)&&(k=h);if(k>i){var n=k;k=i,i=n}var o=j(b,d);g.set(e,k+o,i+o)};var Y=g.fromValues(0,0),Z=g.fromValues(0,0),$=g.fromValues(0,0),_=g.fromValues(0,0),ab=g.fromValues(0,0),bb=g.fromValues(0,0);c.findSeparatingAxis=function(a,b,d,e,f,i,j){for(var k=null,l=!1,m=!1,n=Y,o=Z,p=$,q=_,r=ab,s=bb,t=0;2!==t;t++){var u=a,v=d;1===t&&(u=e,v=i);for(var w=0;w!==u.vertices.length;w++){g.rotate(o,u.vertices[w],v),g.rotate(p,u.vertices[(w+1)%u.vertices.length],v),h(n,p,o),g.rotate(q,n,-Math.PI/2),g.normalize(q,q),c.projectConvexOntoAxis(a,b,d,q,r),c.projectConvexOntoAxis(e,f,i,q,s);var x=r,y=s,z=!1;r[0]>s[0]&&(y=r,x=s,z=!0);var A=y[0]-x[1];l=0>A,(null===k||A>k)&&(g.copy(j,q),k=A,m=l)}}return m};var cb=g.fromValues(0,0),db=g.fromValues(0,0),eb=g.fromValues(0,0);c.getClosestEdge=function(a,b,c,d){var e=cb,f=db,i=eb;g.rotate(e,c,-b),d&&g.scale(e,e,-1);for(var k=-1,l=a.vertices.length,m=Math.PI/2,n=0;n!==l;n++){h(f,a.vertices[(n+1)%l],a.vertices[n%l]),g.rotate(i,f,-m),g.normalize(i,i);var o=j(i,e);(-1==k||o>maxDot)&&(k=n%l,maxDot=o)}return k};var fb=g.create(),gb=g.create(),hb=g.create(),ib=g.create(),jb=g.create(),kb=g.create(),lb=g.create();c.prototype[o.CIRCLE|o.HEIGHTFIELD]=c.prototype.circleHeightfield=function(a,b,c,d,e,f,j,k,l,m){var n=f.data,m=m||b.radius,o=f.elementWidth,p=gb,q=fb,r=jb,s=lb,t=kb,u=hb,v=ib,w=Math.floor((c[0]-m-j[0])/o),x=Math.ceil((c[0]+m-j[0])/o);0>w&&(w=0),x>=n.length&&(x=n.length-1);for(var y=n[w],z=n[x],A=w;x>A;A++)n[A]<z&&(z=n[A]),n[A]>y&&(y=n[A]);if(c[1]-m>y)return l?!1:0;c[1]+m<z;for(var B=!1,C=!1,A=w;x>A;A++){g.set(u,A*o,n[A]),g.set(v,(A+1)*o,n[A+1]),g.add(u,u,j),g.add(v,v,j),g.sub(t,v,u),g.rotate(t,t,Math.PI/2),g.normalize(t,t),g.scale(q,t,-m),g.add(q,q,c),g.sub(p,q,u);var D=g.dot(p,t);if(q[0]>=u[0]&&q[0]<v[0]&&0>=D&&(C===!1||Math.abs(D)<C)&&(g.scale(p,t,-D),g.add(r,q,p),g.copy(s,t),B=!0,C=Math.abs(D),l))return!0}if(B){var E=this.createContactEquation(e,a,f,b);return g.copy(E.ni,s),g.scale(E.rj,E.ni,-m),i(E.rj,E.rj,c),h(E.rj,E.rj,a.position),g.copy(E.ri,r),g.sub(E.ri,E.ri,e.position),this.contactEquations.push(E),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(E)),1}if(m>0)for(var A=w;x>=A;A++)if(g.set(u,A*o,n[A]),g.add(u,u,j),g.sub(p,c,u),g.squaredLength(p)<m*m){if(l)return!0;var E=this.createContactEquation(e,a,f,b);return g.copy(E.ni,p),g.normalize(E.ni,E.ni),g.scale(E.rj,E.ni,-m),i(E.rj,E.rj,c),h(E.rj,E.rj,a.position),h(E.ri,u,j),i(E.ri,E.ri,j),h(E.ri,E.ri,e.position),this.contactEquations.push(E),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(E)),1}return 0}},{"../equations/ContactEquation":23,"../equations/FrictionEquation":25,"../math/vec2":33,"../objects/Body":34,"../shapes/Circle":38,"../shapes/Rectangle":44,"../shapes/Shape":45,"../utils/Utils":50}],14:[function(a,b){function c(a,b,c,f){var g;g=b?new d(a,0,c,f):new e(a,0,c,f),this.root=g}function d(a,b,c,d){this.bounds=a,this.children=[],this.nodes=[],d&&(this.maxChildren=d),c&&(this.maxDepth=c),b&&(this.depth=b)}function e(a,b,c,e){d.call(this,a,b,c,e),this.stuckChildren=[]}var f=a("../shapes/Plane"),g=a("../collision/Broadphase");b.exports={QuadTree:c,Node:d,BoundsNode:e},c.prototype.insert=function(a){if(a instanceof Array)for(var b=a.length,c=0;b>c;c++)this.root.insert(a[c]);else this.root.insert(a)},c.prototype.clear=function(){this.root.clear()},c.prototype.retrieve=function(a){var b=this.root.retrieve(a).slice(0);return b},c.prototype.getCollisionPairs=function(a){var b=[];this.insert(a.bodies);for(var c=0;c!==a.bodies.length;c++)for(var d=a.bodies[c],e=this.retrieve(d),f=0,h=e.length;f!==h;f++){var i=e[f];if(d!==i){for(var j=!1,k=0,l=b.length;l>k;k+=2){var m=b[k],n=b[k+1];if(m==i&&n==d||n==i&&m==d){j=!0;break}}!j&&g.boundingRadiusCheck(d,i)&&b.push(d,i)}}return this.clear(),b},d.prototype.classConstructor=d,d.prototype.children=null,d.prototype.depth=0,d.prototype.maxChildren=4,d.prototype.maxDepth=4,d.TOP_LEFT=0,d.TOP_RIGHT=1,d.BOTTOM_LEFT=2,d.BOTTOM_RIGHT=3,d.prototype.insert=function(a){if(this.nodes.length){var b=this.findIndex(a);return void this.nodes[b].insert(a)}this.children.push(a);var c=this.children.length;if(!(this.depth>=this.maxDepth)&&c>this.maxChildren){this.subdivide();for(var d=0;c>d;d++)this.insert(this.children[d]);this.children.length=0}},d.prototype.retrieve=function(a){if(this.nodes.length){var b=this.findIndex(a);return this.nodes[b].retrieve(a)}return this.children},d.prototype.findIndex=function(a){var b=this.bounds,c=a.position[0]-a.boundingRadius>b.x+b.width/2?!1:!0,e=a.position[1]-a.boundingRadius>b.y+b.height/2?!1:!0;a instanceof f&&(c=e=!1);var g=d.TOP_LEFT;return c?e||(g=d.BOTTOM_LEFT):g=e?d.TOP_RIGHT:d.BOTTOM_RIGHT,g},d.prototype.subdivide=function(){var a=this.depth+1,b=this.bounds.x,c=this.bounds.y,e=this.bounds.width/2,f=this.bounds.height/2,g=b+e,h=c+f;this.nodes[d.TOP_LEFT]=new this.classConstructor({x:b,y:c,width:e,height:f},a),this.nodes[d.TOP_RIGHT]=new this.classConstructor({x:g,y:c,width:e,height:f},a),this.nodes[d.BOTTOM_LEFT]=new this.classConstructor({x:b,y:h,width:e,height:f},a),this.nodes[d.BOTTOM_RIGHT]=new this.classConstructor({x:g,y:h,width:e,height:f},a)},d.prototype.clear=function(){this.children.length=0;for(var a=this.nodes.length,b=0;a>b;b++)this.nodes[b].clear();this.nodes.length=0},e.prototype=new d,e.prototype.classConstructor=e,e.prototype.stuckChildren=null,e.prototype.out=[],e.prototype.insert=function(a){if(this.nodes.length){var b=this.findIndex(a),c=this.nodes[b];return void(!(a instanceof f)&&a.position[0]-a.boundingRadius>=c.bounds.x&&a.position[0]+a.boundingRadius<=c.bounds.x+c.bounds.width&&a.position[1]-a.boundingRadius>=c.bounds.y&&a.position[1]+a.boundingRadius<=c.bounds.y+c.bounds.height?this.nodes[b].insert(a):this.stuckChildren.push(a))}this.children.push(a);var d=this.children.length;if(this.depth<this.maxDepth&&d>this.maxChildren){this.subdivide();for(var e=0;d>e;e++)this.insert(this.children[e]);this.children.length=0}},e.prototype.getChildren=function(){return this.children.concat(this.stuckChildren)},e.prototype.retrieve=function(a){var b=this.out;if(b.length=0,this.nodes.length){var c=this.findIndex(a);b.push.apply(b,this.nodes[c].retrieve(a))}return b.push.apply(b,this.stuckChildren),b.push.apply(b,this.children),b},e.prototype.clear=function(){this.stuckChildren.length=0,this.children.length=0;var a=this.nodes.length;if(a){for(var b=0;a>b;b++)this.nodes[b].clear();this.nodes.length=0}}},{"../collision/Broadphase":10,"../shapes/Plane":43}],15:[function(a,b){function c(){e.call(this,e.SAP),this.axisListX=[],this.axisListY=[],this.world=null;var a=this.axisListX,b=this.axisListY;this._addBodyHandler=function(c){a.push(c.body),b.push(c.body)},this._removeBodyHandler=function(c){var d=a.indexOf(c.body);-1!==d&&a.splice(d,1),d=b.indexOf(c.body),-1!==d&&b.splice(d,1)}}{var d=(a("../shapes/Circle"),a("../shapes/Plane"),a("../shapes/Shape"),a("../shapes/Particle"),a("../utils/Utils")),e=a("../collision/Broadphase");a("../math/vec2")}b.exports=c,c.prototype=new e,c.prototype.setWorld=function(a){this.axisListX.length=this.axisListY.length=0,d.appendArray(this.axisListX,a.bodies),d.appendArray(this.axisListY,a.bodies),a.off("addBody",this._addBodyHandler).off("removeBody",this._removeBodyHandler),a.on("addBody",this._addBodyHandler).on("removeBody",this._removeBodyHandler),this.world=a},c.sortAxisListX=function(a){for(var b=1,c=a.length;c>b;b++){for(var d=a[b],e=b-1;e>=0&&!(a[e].aabb.lowerBound[0]<=d.aabb.lowerBound[0]);e--)a[e+1]=a[e];a[e+1]=d}return a},c.sortAxisListY=function(a){for(var b=1,c=a.length;c>b;b++){for(var d=a[b],e=b-1;e>=0&&!(a[e].aabb.lowerBound[1]<=d.aabb.lowerBound[1]);e--)a[e+1]=a[e];a[e+1]=d}return a};var f={keys:[]};c.prototype.getCollisionPairs=function(){{var a,b,d=this.axisListX,g=this.axisListY,h=this.result;this.axisIndex}for(h.length=0,a=0;a!==d.length;a++){var i=d[a];i.aabbNeedsUpdate&&i.updateAABB()}for(c.sortAxisListX(d),c.sortAxisListY(g),a=0,N=d.length;a!==N;a++){var j=d[a];for(b=a+1;N>b;b++){var k=d[b];if(!c.checkBounds(j,k,0))break;if(e.canCollide(j,k)){var l=j.id<k.id?j.id+" "+k.id:k.id+" "+j.id;f[l]=!0,f.keys.push(l)}}}for(a=0,N=g.length;a!==N;a++){var j=g[a];for(b=a+1;N>b;b++){var k=g[b];if(!c.checkBounds(j,k,1))break;if(e.canCollide(j,k)){var l=j.id<k.id?j.id+" "+k.id:k.id+" "+j.id;f[l]&&e.boundingRadiusCheck(j,k)&&h.push(j,k)}}}var m=f.keys;for(a=0,N=m.length;a!==N;a++)delete f[m[a]];return m.length=0,h},c.checkBounds=function(a,b,c){return b.aabb.lowerBound[c]<a.aabb.upperBound[c]}},{"../collision/Broadphase":10,"../math/vec2":33,"../shapes/Circle":38,"../shapes/Particle":42,"../shapes/Plane":43,"../shapes/Shape":45,"../utils/Utils":50}],16:[function(a,b){function c(a,b,c){this.type=c,this.equations=[],this.bodyA=a,this.bodyB=b,a&&a.wakeUp(),b&&b.wakeUp()}b.exports=c,c.DISTANCE=1,c.GEAR=2,c.LOCK=3,c.PRISMATIC=4,c.REVOLUTE=5},{}],17:[function(a,b){function c(a,b,c,g){d.call(this,a,b,d.DISTANCE),this.distance=c,"undefined"==typeof g&&(g=Number.MAX_VALUE);var h=new e(a,b,-g,g);this.equations=[h];var i=f.create();h.computeGq=function(){return f.sub(i,b.position,a.position),f.length(i)-c},this.setMaxForce(g)}var d=a("./Constraint"),e=a("../equations/Equation"),f=a("../math/vec2");b.exports=c,c.prototype=new d;var g=f.create();c.prototype.update=function(){var a=this.equations[0],b=this.bodyA,c=this.bodyB,d=(this.distance,a.G);f.sub(g,c.position,b.position),f.normalize(g,g),d[0]=-g[0],d[1]=-g[1],d[3]=g[0],d[4]=g[1]},c.prototype.setMaxForce=function(a){var b=this.equations[0];b.minForce=-a,b.maxForce=a},c.prototype.getMaxForce=function(){var a=this.equations[0];return a.maxForce}},{"../equations/Equation":24,"../math/vec2":33,"./Constraint":16}],18:[function(a,b){function c(a,b,c){d.call(this,a,b,d.GEAR);this.equations=[new e(a,b,c)];this.angle="number"==typeof c.angle?c.angle:0,this.ratio="number"==typeof c.ratio?c.ratio:1}{var d=a("./Constraint"),e=(a("../equations/Equation"),a("../equations/AngleLockEquation"));a("../math/vec2")}b.exports=c,c.prototype=new d,c.prototype.update=function(){var a=this.equations[0];a.ratio!=this.ratio&&a.setRatio(this.ratio),a.angle=this.angle}},{"../equations/AngleLockEquation":22,"../equations/Equation":24,"../math/vec2":33,"./Constraint":16}],19:[function(a,b){function c(a,b,c){d.call(this,a,b,d.LOCK);var g="undefined"==typeof c.maxForce?Number.MAX_VALUE:c.maxForce,h=c.localOffsetB||e.fromValues(0,0);h=e.fromValues(h[0],h[1]);var i=c.localAngleB||0,j=new f(a,b,-g,g),k=new f(a,b,-g,g),l=new f(a,b,-g,g),m=e.create(),n=e.create();j.computeGq=function(){return e.rotate(m,h,a.angle),e.sub(n,b.position,a.position),e.sub(n,n,m),n[0]},k.computeGq=function(){return e.rotate(m,h,a.angle),e.sub(n,b.position,a.position),e.sub(n,n,m),n[1]};var o=e.create(),p=e.create();l.computeGq=function(){return e.rotate(o,h,b.angle-i),e.scale(o,o,-1),e.sub(n,a.position,b.position),e.add(n,n,o),e.rotate(p,o,-Math.PI/2),e.normalize(p,p),e.dot(n,p)},this.localOffsetB=h,this.localAngleB=i,this.maxForce=g;this.equations=[j,k,l]}var d=a("./Constraint"),e=a("../math/vec2"),f=a("../equations/Equation");b.exports=c,c.prototype=new d;var g=e.create(),h=e.create(),i=e.create(),j=e.fromValues(1,0),k=e.fromValues(0,1);c.prototype.update=function(){var a=this.equations[0],b=this.equations[1],c=this.equations[2],d=this.bodyA,f=this.bodyB;e.rotate(g,this.localOffsetB,d.angle),e.rotate(h,this.localOffsetB,f.angle-this.localAngleB),e.scale(h,h,-1),e.rotate(i,h,Math.PI/2),e.normalize(i,i),a.G[0]=-1,a.G[1]=0,a.G[2]=-e.crossLength(g,j),a.G[3]=1,b.G[0]=0,b.G[1]=-1,b.G[2]=-e.crossLength(g,k),b.G[4]=1,c.G[0]=-i[0],c.G[1]=-i[1],c.G[3]=i[0],c.G[4]=i[1],c.G[5]=e.crossLength(h,i)}},{"../equations/Equation":24,"../math/vec2":33,"./Constraint":16}],20:[function(a,b){function c(a,b,c){c=c||{},d.call(this,a,b,d.PRISMATIC);var i=g.fromValues(0,0),j=g.fromValues(1,0),k=g.fromValues(0,0);c.localAnchorA&&g.copy(i,c.localAnchorA),c.localAxisA&&g.copy(j,c.localAxisA),c.localAnchorB&&g.copy(k,c.localAnchorB),this.localAnchorA=i,this.localAnchorB=k,this.localAxisA=j;var l=this.maxForce="undefined"!=typeof c.maxForce?c.maxForce:Number.MAX_VALUE,m=new f(a,b,-l,l),n=new g.create,o=new g.create,p=new g.create,q=new g.create;if(m.computeGq=function(){return g.dot(p,q)},m.update=function(){var c=this.G,d=a.position,e=b.position;g.rotate(n,i,a.angle),g.rotate(o,k,b.angle),g.add(p,e,o),g.sub(p,p,d),g.sub(p,p,n),g.rotate(q,j,a.angle+Math.PI/2),c[0]=-q[0],c[1]=-q[1],c[2]=-g.crossLength(n,q)+g.crossLength(q,p),c[3]=q[0],c[4]=q[1],c[5]=g.crossLength(o,q)},this.equations.push(m),!c.disableRotationalLock){var r=new h(a,b,-l,l);this.equations.push(r)}this.position=0,this.velocity=0,this.lowerLimitEnabled=!1,this.upperLimitEnabled=!1,this.lowerLimit=0,this.upperLimit=1,this.upperLimitEquation=new e(a,b),this.lowerLimitEquation=new e(a,b),this.upperLimitEquation.minForce=this.lowerLimitEquation.minForce=0,this.upperLimitEquation.maxForce=this.lowerLimitEquation.maxForce=l,this.motorEquation=new f(a,b),this.motorEnabled=!1,this.motorSpeed=0;{var s=this,t=this.motorEquation;t.computeGW}t.computeGq=function(){return 0},t.computeGW=function(){var a=this.G,b=this.bi,c=this.bj,d=b.velocity,e=c.velocity,f=b.angularVelocity,g=c.angularVelocity;return this.transformedGmult(a,d,f,e,g)+s.motorSpeed}}var d=a("./Constraint"),e=a("../equations/ContactEquation"),f=a("../equations/Equation"),g=a("../math/vec2"),h=a("../equations/RotationalLockEquation");b.exports=c,c.prototype=new d;var i=g.create(),j=g.create(),k=g.create(),l=g.create(),m=g.create(),n=g.create();c.prototype.update=function(){var a=this.equations,b=a[0],c=this.upperLimit,d=this.lowerLimit,e=this.upperLimitEquation,f=this.lowerLimitEquation,h=this.bodyA,o=this.bodyB,p=this.localAxisA,q=this.localAnchorA,r=this.localAnchorB;b.update(),g.rotate(i,p,h.angle),g.rotate(l,q,h.angle),g.add(j,l,h.position),g.rotate(m,r,o.angle),g.add(k,m,o.position);var s=this.position=g.dot(k,i)-g.dot(j,i);if(this.motorEnabled){var t=this.motorEquation.G;t[0]=i[0],t[1]=i[1],t[2]=g.crossLength(i,m),t[3]=-i[0],t[4]=-i[1],t[5]=-g.crossLength(i,l)}if(this.upperLimitEnabled&&s>c)g.scale(e.ni,i,-1),g.sub(e.ri,j,h.position),g.sub(e.rj,k,o.position),g.scale(n,i,c),g.add(e.ri,e.ri,n),-1==a.indexOf(e)&&a.push(e);else{var u=a.indexOf(e);-1!=u&&a.splice(u,1)}if(this.lowerLimitEnabled&&d>s)g.scale(f.ni,i,1),g.sub(f.ri,j,h.position),g.sub(f.rj,k,o.position),g.scale(n,i,d),g.sub(f.rj,f.rj,n),-1==a.indexOf(f)&&a.push(f);else{var u=a.indexOf(f);-1!=u&&a.splice(u,1)}},c.prototype.enableMotor=function(){this.motorEnabled||(this.equations.push(this.motorEquation),this.motorEnabled=!0)},c.prototype.disableMotor=function(){if(this.motorEnabled){var a=this.equations.indexOf(this.motorEquation);this.equations.splice(a,1),this.motorEnabled=!1}}},{"../equations/ContactEquation":23,"../equations/Equation":24,"../equations/RotationalLockEquation":26,"../math/vec2":33,"./Constraint":16}],21:[function(a,b){function c(a,b,c,n,o){d.call(this,a,c,d.REVOLUTE),o=this.maxForce="undefined"!=typeof o?o:Number.MAX_VALUE,this.pivotA=b,this.pivotB=n;var p=this.equations=[new e(a,c,-o,o),new e(a,c,-o,o)],q=p[0],r=p[1];q.computeGq=function(){return h.rotate(i,b,a.angle),h.rotate(j,n,c.angle),h.add(m,c.position,j),h.sub(m,m,a.position),h.sub(m,m,i),h.dot(m,k)},r.computeGq=function(){return h.rotate(i,b,a.angle),h.rotate(j,n,c.angle),h.add(m,c.position,j),h.sub(m,m,a.position),h.sub(m,m,i),h.dot(m,l)},r.minForce=q.minForce=-o,r.maxForce=q.maxForce=o,this.motorEquation=new f(a,c),this.motorEnabled=!1,this.angle=0,this.lowerLimitEnabled=!1,this.upperLimitEnabled=!1,this.lowerLimit=0,this.upperLimit=0,this.upperLimitEquation=new g(a,c),this.lowerLimitEquation=new g(a,c),this.upperLimitEquation.minForce=0,this.lowerLimitEquation.maxForce=0}var d=a("./Constraint"),e=a("../equations/Equation"),f=a("../equations/RotationalVelocityEquation"),g=a("../equations/RotationalLockEquation"),h=a("../math/vec2");b.exports=c;var i=h.create(),j=h.create(),k=h.fromValues(1,0),l=h.fromValues(0,1),m=h.create();c.prototype=new d,c.prototype.update=function(){var a=this.bodyA,b=this.bodyB,c=this.pivotA,d=this.pivotB,e=this.equations,f=(e[0],e[1],e[0]),g=e[1],m=this.upperLimit,n=this.lowerLimit,o=this.upperLimitEquation,p=this.lowerLimitEquation,q=this.angle=b.angle-a.angle;if(this.upperLimitEnabled&&q>m)o.angle=m,-1==e.indexOf(o)&&e.push(o);
else{var r=e.indexOf(o);-1!=r&&e.splice(r,1)}if(this.lowerLimitEnabled&&n>q)p.angle=n,-1==e.indexOf(p)&&e.push(p);else{var r=e.indexOf(p);-1!=r&&e.splice(r,1)}h.rotate(i,c,a.angle),h.rotate(j,d,b.angle),f.G[0]=-1,f.G[1]=0,f.G[2]=-h.crossLength(i,k),f.G[3]=1,f.G[4]=0,f.G[5]=h.crossLength(j,k),g.G[0]=0,g.G[1]=-1,g.G[2]=-h.crossLength(i,l),g.G[3]=0,g.G[4]=1,g.G[5]=h.crossLength(j,l)},c.prototype.enableMotor=function(){this.motorEnabled||(this.equations.push(this.motorEquation),this.motorEnabled=!0)},c.prototype.disableMotor=function(){if(this.motorEnabled){var a=this.equations.indexOf(this.motorEquation);this.equations.splice(a,1),this.motorEnabled=!1}},c.prototype.motorIsEnabled=function(){return!!this.motorEnabled},c.prototype.setMotorSpeed=function(a){if(this.motorEnabled){var b=this.equations.indexOf(this.motorEquation);this.equations[b].relativeVelocity=a}},c.prototype.getMotorSpeed=function(){return this.motorEnabled?this.motorEquation.relativeVelocity:!1}},{"../equations/Equation":24,"../equations/RotationalLockEquation":26,"../equations/RotationalVelocityEquation":27,"../math/vec2":33,"./Constraint":16}],22:[function(a,b){function c(a,b,c){c=c||{},d.call(this,a,b,-Number.MAX_VALUE,Number.MAX_VALUE),this.angle=c.angle||0,this.ratio="number"==typeof c.ratio?c.ratio:1,this.setRatio(this.ratio)}{var d=a("./Equation");a("../math/vec2")}b.exports=c,c.prototype=new d,c.prototype.constructor=c,c.prototype.computeGq=function(){return this.ratio*this.bi.angle-this.bj.angle+this.angle},c.prototype.setRatio=function(a){var b=this.G;b[2]=a,b[5]=-1,this.ratio=a}},{"../math/vec2":33,"./Equation":24}],23:[function(a,b){function c(a,b){d.call(this,a,b,0,Number.MAX_VALUE),this.ri=e.create(),this.penetrationVec=e.create(),this.rj=e.create(),this.ni=e.create(),this.restitution=0,this.firstImpact=!1,this.shapeA=null,this.shapeB=null}{var d=a("./Equation"),e=a("../math/vec2");a("../math/mat2")}b.exports=c,c.prototype=new d,c.prototype.constructor=c,c.prototype.computeB=function(a,b,c){var d=this.bi,f=this.bj,g=this.ri,h=this.rj,i=d.position,j=f.position,k=this.penetrationVec,l=this.ni,m=this.G,n=e.crossLength(g,l),o=e.crossLength(h,l);m[0]=-l[0],m[1]=-l[1],m[2]=-n,m[3]=l[0],m[4]=l[1],m[5]=o,e.add(k,j,h),e.sub(k,k,i),e.sub(k,k,g);var p,q;this.firstImpact&&0!==this.restitution?(q=0,p=1/b*(1+this.restitution)*this.computeGW()):(q=e.dot(l,k),p=this.computeGW());var r=this.computeGiMf(),s=-q*a-p*b-c*r;return s}},{"../math/mat2":31,"../math/vec2":33,"./Equation":24}],24:[function(a,b){function c(a,b,c,d){this.minForce="undefined"==typeof c?-1e6:c,this.maxForce="undefined"==typeof d?1e6:d,this.bi=a,this.bj=b,this.stiffness=1e6,this.relaxation=4,this.G=new g.ARRAY_TYPE(6);for(var e=0;6>e;e++)this.G[e]=0;this.offset=0,this.a=0,this.b=0,this.eps=0,this.h=0,this.updateSpookParams(1/60),this.multiplier=0,this.relativeVelocity=0,this.enabled=!0}function d(a,b,c,d,e){return a[0]*b[0]+a[1]*b[1]+a[2]*c+a[3]*d[0]+a[4]*d[1]+a[5]*e}b.exports=c;var e=a("../math/vec2"),f=a("../math/mat2"),g=a("../utils/Utils");c.prototype.constructor=c,c.prototype.updateSpookParams=function(a){var b=this.stiffness,c=this.relaxation,d=a;this.a=4/(d*(1+4*c)),this.b=4*c/(1+4*c),this.eps=4/(d*d*b*(1+4*c)),this.h=a},c.prototype.computeB=function(a,b,c){var d=this.computeGW(),e=this.computeGq(),f=this.computeGiMf();return-e*a-d*b-f*c};var h=e.create(),i=e.create();c.prototype.computeGq=function(){var a=this.G,b=this.bi,c=this.bj,e=(b.position,c.position,b.angle),f=c.angle;return d(a,h,e,i,f)+this.offset};e.create(),e.create();c.prototype.transformedGmult=function(a,b,c,e,f){return d(a,b,c,e,f)},c.prototype.computeGW=function(){var a=this.G,b=this.bi,c=this.bj,d=b.velocity,e=c.velocity,f=b.angularVelocity,g=c.angularVelocity;return this.transformedGmult(a,d,f,e,g)+this.relativeVelocity},c.prototype.computeGWlambda=function(){var a=this.G,b=this.bi,c=this.bj,e=b.vlambda,f=c.vlambda,g=b.wlambda,h=c.wlambda;return d(a,e,g,f,h)};var j=e.create(),k=e.create();c.prototype.computeGiMf=function(){var a=this.bi,b=this.bj,c=a.force,d=a.angularForce,f=b.force,g=b.angularForce,h=a.invMass,i=b.invMass,l=a.invInertia,m=b.invInertia,n=this.G;return e.scale(j,c,h),e.scale(k,f,i),this.transformedGmult(n,j,d*l,k,g*m)},c.prototype.computeGiMGt=function(){var a=this.bi,b=this.bj,c=a.invMass,d=b.invMass,e=a.invInertia,f=b.invInertia,g=this.G;return g[0]*g[0]*c+g[1]*g[1]*c+g[2]*g[2]*e+g[3]*g[3]*d+g[4]*g[4]*d+g[5]*g[5]*f};{var l=e.create(),m=e.create(),n=e.create();e.create(),e.create(),e.create(),f.create(),f.create()}c.prototype.addToWlambda=function(a){var b=this.bi,c=this.bj,d=l,f=m,g=n,h=this.G;f[0]=h[0],f[1]=h[1],g[0]=h[3],g[1]=h[4],e.scale(d,f,b.invMass*a),e.add(b.vlambda,b.vlambda,d),e.scale(d,g,c.invMass*a),e.add(c.vlambda,c.vlambda,d),b.wlambda+=b.invInertia*h[2]*a,c.wlambda+=c.invInertia*h[5]*a},c.prototype.computeInvC=function(a){return 1/(this.computeGiMGt()+a)}},{"../math/mat2":31,"../math/vec2":33,"../utils/Utils":50}],25:[function(a,b){function c(a,b,c){e.call(this,a,b,-c,c),this.ri=d.create(),this.rj=d.create(),this.t=d.create(),this.contactEquation=null,this.shapeA=null,this.shapeB=null,this.frictionCoefficient=.3}{var d=(a("../math/mat2"),a("../math/vec2")),e=a("./Equation");a("../utils/Utils")}b.exports=c,c.prototype=new e,c.prototype.constructor=c,c.prototype.setSlipForce=function(a){this.maxForce=a,this.minForce=-a},c.prototype.computeB=function(a,b,c){var e=(this.bi,this.bj,this.ri),f=this.rj,g=this.t,h=this.G;h[0]=-g[0],h[1]=-g[1],h[2]=-d.crossLength(e,g),h[3]=g[0],h[4]=g[1],h[5]=d.crossLength(f,g);var i=this.computeGW(),j=this.computeGiMf(),k=-i*b-c*j;return k}},{"../math/mat2":31,"../math/vec2":33,"../utils/Utils":50,"./Equation":24}],26:[function(a,b){function c(a,b,c){c=c||{},d.call(this,a,b,-Number.MAX_VALUE,Number.MAX_VALUE),this.angle=c.angle||0;var e=this.G;e[2]=1,e[5]=-1}var d=a("./Equation"),e=a("../math/vec2");b.exports=c,c.prototype=new d,c.prototype.constructor=c;var f=e.create(),g=e.create(),h=e.fromValues(1,0),i=e.fromValues(0,1);c.prototype.computeGq=function(){return e.rotate(f,h,this.bi.angle+this.angle),e.rotate(g,i,this.bj.angle),e.dot(f,g)}},{"../math/vec2":33,"./Equation":24}],27:[function(a,b){function c(a,b){d.call(this,a,b,-Number.MAX_VALUE,Number.MAX_VALUE),this.relativeVelocity=1,this.ratio=1}{var d=a("./Equation");a("../math/vec2")}b.exports=c,c.prototype=new d,c.prototype.constructor=c,c.prototype.computeB=function(a,b,c){var d=this.G;d[2]=-1,d[5]=this.ratio;var e=this.computeGiMf(),f=this.computeGW(),g=-f*b-c*e;return g}},{"../math/vec2":33,"./Equation":24}],28:[function(a,b){var c=function(){};b.exports=c,c.prototype={constructor:c,on:function(a,b,c){b.context=c||this,void 0===this._listeners&&(this._listeners={});var d=this._listeners;return void 0===d[a]&&(d[a]=[]),-1===d[a].indexOf(b)&&d[a].push(b),this},has:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},off:function(a,b){if(void 0===this._listeners)return this;var c=this._listeners,d=c[a].indexOf(b);return-1!==d&&c[a].splice(d,1),this},emit:function(a){if(void 0===this._listeners)return this;var b=this._listeners,c=b[a.type];if(void 0!==c){a.target=this;for(var d=0,e=c.length;e>d;d++){var f=c[d];f.call(f.context,a)}}return this}}},{}],29:[function(a,b){function c(a,b,e){if(e=e||{},!(a instanceof d&&b instanceof d))throw new Error("First two arguments must be Material instances.");this.id=c.idCounter++,this.materialA=a,this.materialB=b,this.friction="undefined"!=typeof e.friction?Number(e.friction):.3,this.restitution="undefined"!=typeof e.restitution?Number(e.restitution):0,this.stiffness="undefined"!=typeof e.stiffness?Number(e.stiffness):1e7,this.relaxation="undefined"!=typeof e.relaxation?Number(e.relaxation):3,this.frictionStiffness="undefined"!=typeof e.frictionStiffness?Number(e.frictionStiffness):1e7,this.frictionRelaxation="undefined"!=typeof e.frictionRelaxation?Number(e.frictionRelaxation):3,this.surfaceVelocity="undefined"!=typeof e.surfaceVelocity?Number(e.surfaceVelocity):0}var d=a("./Material");b.exports=c,c.idCounter=0},{"./Material":30}],30:[function(a,b){function c(){this.id=c.idCounter++}b.exports=c,c.idCounter=0},{}],31:[function(a,b){var c=a("../../node_modules/gl-matrix/src/gl-matrix/mat2").mat2;b.exports=c},{"../../node_modules/gl-matrix/src/gl-matrix/mat2":1}],32:[function(a,b){var c={};c.GetArea=function(a){if(a.length<6)return 0;for(var b=a.length-2,c=0,d=0;b>d;d+=2)c+=(a[d+2]-a[d])*(a[d+1]+a[d+3]);return c+=(a[0]-a[b])*(a[b+1]+a[1]),.5*-c},c.Triangulate=function(a){var b=a.length>>1;if(3>b)return[];for(var d=[],e=[],f=0;b>f;f++)e.push(f);for(var f=0,g=b;g>3;){var h=e[(f+0)%g],i=e[(f+1)%g],j=e[(f+2)%g],k=a[2*h],l=a[2*h+1],m=a[2*i],n=a[2*i+1],o=a[2*j],p=a[2*j+1],q=!1;if(c._convex(k,l,m,n,o,p)){q=!0;for(var r=0;g>r;r++){var s=e[r];if(s!=h&&s!=i&&s!=j&&c._PointInTriangle(a[2*s],a[2*s+1],k,l,m,n,o,p)){q=!1;break}}}if(q)d.push(h,i,j),e.splice((f+1)%g,1),g--,f=0;else if(f++>3*g)break}return d.push(e[0],e[1],e[2]),d},c._PointInTriangle=function(a,b,c,d,e,f,g,h){var i=g-c,j=h-d,k=e-c,l=f-d,m=a-c,n=b-d,o=i*i+j*j,p=i*k+j*l,q=i*m+j*n,r=k*k+l*l,s=k*m+l*n,t=1/(o*r-p*p),u=(r*q-p*s)*t,v=(o*s-p*q)*t;return u>=0&&v>=0&&1>u+v},c._convex=function(a,b,c,d,e,f){return(b-d)*(e-c)+(c-a)*(f-d)>=0},b.exports=c},{}],33:[function(a,b){var c=a("../../node_modules/gl-matrix/src/gl-matrix/vec2").vec2;c.getX=function(a){return a[0]},c.getY=function(a){return a[1]},c.crossLength=function(a,b){return a[0]*b[1]-a[1]*b[0]},c.crossVZ=function(a,b,d){return c.rotate(a,b,-Math.PI/2),c.scale(a,a,d),a},c.crossZV=function(a,b,d){return c.rotate(a,d,Math.PI/2),c.scale(a,a,b),a},c.rotate=function(a,b,c){var d=Math.cos(c),e=Math.sin(c),f=b[0],g=b[1];a[0]=d*f-e*g,a[1]=e*f+d*g},c.toLocalFrame=function(a,b,d,e){c.copy(a,b),c.sub(a,a,d),c.rotate(a,a,-e)},c.toGlobalFrame=function(a,b,d,e){c.copy(a,b),c.rotate(a,a,e),c.add(a,a,d)},c.centroid=function(a,b,d,e){return c.add(a,b,d),c.add(a,a,e),c.scale(a,a,1/3),a},b.exports=c},{"../../node_modules/gl-matrix/src/gl-matrix/vec2":2}],34:[function(a,b){function c(a){a=a||{},h.call(this),this.id=++c._idCounter,this.world=null,this.shapes=[],this.shapeOffsets=[],this.shapeAngles=[],this.mass=a.mass||0,this.invMass=0,this.inertia=0,this.invInertia=0,this.fixedRotation=!!a.fixedRotation||!1,this.position=d.fromValues(0,0),a.position&&d.copy(this.position,a.position),this.interpolatedPosition=d.fromValues(0,0),this.velocity=d.fromValues(0,0),a.velocity&&d.copy(this.velocity,a.velocity),this.vlambda=d.fromValues(0,0),this.wlambda=0,this.angle=a.angle||0,this.angularVelocity=a.angularVelocity||0,this.force=d.create(),a.force&&d.copy(this.force,a.force),this.angularForce=a.angularForce||0,this.damping="number"==typeof a.damping?a.damping:.1,this.angularDamping="number"==typeof a.angularDamping?a.angularDamping:.1,this.motionState=0==this.mass?c.STATIC:c.DYNAMIC,this.boundingRadius=0,this.aabb=new g,this.aabbNeedsUpdate=!0,this.allowSleep=!1,this.sleepState=c.AWAKE,this.sleepSpeedLimit=.1,this.sleepTimeLimit=1,this.gravityScale=1,this.timeLastSleepy=0,this.concavePath=null,this.lastDampingScale=1,this.lastAngularDampingScale=1,this.lastDampingTimeStep=-1,this.updateMassProperties()}var d=a("../math/vec2"),e=a("poly-decomp"),f=a("../shapes/Convex"),g=a("../collision/AABB"),h=a("../events/EventEmitter");b.exports=c,c.prototype=new h,c._idCounter=0,c.prototype.setDensity=function(a){var b=this.getArea();this.mass=b*a,this.updateMassProperties()},c.prototype.getArea=function(){for(var a=0,b=0;b<this.shapes.length;b++)a+=this.shapes[b].area;return a};var i=new g,j=d.create();c.prototype.updateAABB=function(){for(var a=this.shapes,b=this.shapeOffsets,c=this.shapeAngles,e=a.length,f=0;f!==e;f++){var g=a[f],h=j,k=c[f]+this.angle;d.rotate(h,b[f],this.angle),d.add(h,h,this.position),g.computeAABB(i,h,k),0===f?this.aabb.copy(i):this.aabb.extend(i)}this.aabbNeedsUpdate=!1},c.prototype.updateBoundingRadius=function(){for(var a=this.shapes,b=this.shapeOffsets,c=a.length,e=0,f=0;f!==c;f++){var g=a[f],h=d.length(b[f]),i=g.boundingRadius;h+i>e&&(e=h+i)}this.boundingRadius=e},c.prototype.addShape=function(a,b,c){c=c||0,b=b?d.fromValues(b[0],b[1]):d.fromValues(0,0),this.shapes.push(a),this.shapeOffsets.push(b),this.shapeAngles.push(c),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0},c.prototype.removeShape=function(a){var b=this.shapes.indexOf(a);return-1!=b?(this.shapes.splice(b,1),this.shapeOffsets.splice(b,1),this.shapeAngles.splice(b,1),this.aabbNeedsUpdate=!0,!0):!1},c.prototype.updateMassProperties=function(){if(this.motionState==c.STATIC||this.motionState==c.KINEMATIC)this.mass=Number.MAX_VALUE,this.invMass=0,this.inertia=Number.MAX_VALUE,this.invInertia=0;else{var a=this.shapes,b=a.length,e=this.mass/b,f=0;if(this.fixedRotation)this.inertia=Number.MAX_VALUE,this.invInertia=0;else{for(var g=0;b>g;g++){var h=a[g],i=d.squaredLength(this.shapeOffsets[g]),j=h.computeMomentOfInertia(e);f+=j+e*i}this.inertia=f,this.invInertia=f>0?1/f:0}this.invMass=1/this.mass}};var k=d.create();c.prototype.applyForce=function(a,b){var c=k;d.sub(c,b,this.position),d.add(this.force,this.force,a);var e=d.crossLength(c,a);this.angularForce+=e},c.prototype.toLocalFrame=function(a,b){d.toLocalFrame(a,b,this.position,this.angle)},c.prototype.toWorldFrame=function(a,b){d.toGlobalFrame(a,b,this.position,this.angle)},c.prototype.fromPolygon=function(a,b){b=b||{};for(var c=this.shapes.length;c>=0;--c)this.removeShape(this.shapes[c]);var g=new e.Polygon;if(g.vertices=a,g.makeCCW(),"number"==typeof b.removeCollinearPoints&&g.removeCollinearPoints(b.removeCollinearPoints),"undefined"==typeof b.skipSimpleCheck&&!g.isSimple())return!1;this.concavePath=g.vertices.slice(0);for(var c=0;c<this.concavePath.length;c++){var h=[0,0];d.copy(h,this.concavePath[c]),this.concavePath[c]=h}var i;i=b.optimalDecomp?g.decomp():g.quickDecomp();for(var j=d.create(),c=0;c!==i.length;c++){for(var k=new f(i[c].vertices),l=0;l!==k.vertices.length;l++){var h=k.vertices[l];d.sub(h,h,k.centerOfMass)}d.scale(j,k.centerOfMass,1),k.updateTriangles(),k.updateCenterOfMass(),k.updateBoundingRadius(),this.addShape(k,j)}return this.adjustCenterOfMass(),this.aabbNeedsUpdate=!0,!0};var l=(d.fromValues(0,0),d.fromValues(0,0)),m=d.fromValues(0,0),n=d.fromValues(0,0);c.prototype.adjustCenterOfMass=function(){var a=l,b=m,c=n,e=0;d.set(b,0,0);for(var f=0;f!==this.shapes.length;f++){var g=this.shapes[f],h=this.shapeOffsets[f];d.scale(a,h,g.area),d.add(b,b,a),e+=g.area}d.scale(c,b,1/e);for(var f=0;f!==this.shapes.length;f++){var g=this.shapes[f],h=this.shapeOffsets[f];h||(h=this.shapeOffsets[f]=d.create()),d.sub(h,h,c)}d.add(this.position,this.position,c);for(var f=0;this.concavePath&&f<this.concavePath.length;f++)d.sub(this.concavePath[f],this.concavePath[f],c);this.updateMassProperties(),this.updateBoundingRadius()},c.prototype.setZeroForce=function(){d.set(this.force,0,0),this.angularForce=0},c.prototype.resetConstraintVelocity=function(){var a=this,b=a.vlambda;d.set(b,0,0),a.wlambda=0},c.prototype.addConstraintVelocity=function(){var a=this,b=a.velocity;d.add(b,b,a.vlambda),a.angularVelocity+=a.wlambda},c.prototype.applyDamping=function(a){if(this.motionState==c.DYNAMIC){a!=this.lastDampingTimeStep&&(this.lastDampingScale=Math.pow(1-this.damping,a),this.lastAngularDampingScale=Math.pow(1-this.angularDamping,a),this.lastDampingTimeStep=a);var b=this.velocity;d.scale(b,b,this.lastDampingScale),this.angularVelocity*=this.lastAngularDampingScale}},c.prototype.wakeUp=function(){var a=this.sleepState;this.sleepState=c.AWAKE,a!==c.AWAKE&&this.emit(c.wakeUpEvent)},c.prototype.sleep=function(){this.sleepState=c.SLEEPING,this.emit(c.sleepEvent)},c.prototype.sleepTick=function(a){if(this.allowSleep){var b=this.sleepState,e=d.squaredLength(this.velocity)+Math.pow(this.angularVelocity,2),f=Math.pow(this.sleepSpeedLimit,2);b===c.AWAKE&&f>e?(this.sleepState=c.SLEEPY,this.timeLastSleepy=a,this.emit(c.sleepyEvent)):b===c.SLEEPY&&e>f?this.wakeUp():b===c.SLEEPY&&a-this.timeLastSleepy>this.sleepTimeLimit&&this.sleep()}},c.sleepyEvent={type:"sleepy"},c.sleepEvent={type:"sleep"},c.wakeUpEvent={type:"wakeup"},c.DYNAMIC=1,c.STATIC=2,c.KINEMATIC=4,c.AWAKE=0,c.SLEEPY=1,c.SLEEPING=2},{"../collision/AABB":9,"../events/EventEmitter":28,"../math/vec2":33,"../shapes/Convex":39,"poly-decomp":7}],35:[function(a,b){function c(a,b,c){c=c||{},this.restLength="number"==typeof c.restLength?c.restLength:1,this.stiffness=c.stiffness||100,this.damping=c.damping||1,this.bodyA=a,this.bodyB=b,this.localAnchorA=d.fromValues(0,0),this.localAnchorB=d.fromValues(0,0),c.localAnchorA&&d.copy(this.localAnchorA,c.localAnchorA),c.localAnchorB&&d.copy(this.localAnchorB,c.localAnchorB),c.worldAnchorA&&this.setWorldAnchorA(c.worldAnchorA),c.worldAnchorB&&this.setWorldAnchorB(c.worldAnchorB)}var d=a("../math/vec2");b.exports=c,c.prototype.setWorldAnchorA=function(a){this.bodyA.toLocalFrame(this.localAnchorA,a)},c.prototype.setWorldAnchorB=function(a){this.bodyB.toLocalFrame(this.localAnchorB,a)},c.prototype.getWorldAnchorA=function(a){this.bodyA.toWorldFrame(a,this.localAnchorA)},c.prototype.getWorldAnchorB=function(a){this.bodyB.toWorldFrame(a,this.localAnchorB)};var e=d.create(),f=d.create(),g=d.create(),h=d.create(),i=d.create(),j=d.create(),k=d.create(),l=d.create(),m=d.create();c.prototype.applyForce=function(){var a=this.stiffness,b=this.damping,c=this.restLength,n=this.bodyA,o=this.bodyB,p=e,q=f,r=g,s=h,t=m,u=i,v=j,w=k,x=l;this.getWorldAnchorA(u),this.getWorldAnchorB(v),d.sub(w,u,n.position),d.sub(x,v,o.position),d.sub(p,v,u);var y=d.len(p);d.normalize(q,p),d.sub(r,o.velocity,n.velocity),d.crossZV(t,o.angularVelocity,x),d.add(r,r,t),d.crossZV(t,n.angularVelocity,w),d.sub(r,r,t),d.scale(s,q,-a*(y-c)-b*d.dot(r,q)),d.sub(n.force,n.force,s),d.add(o.force,o.force,s);var z=d.crossLength(w,s),A=d.crossLength(x,s);n.angularForce-=z,o.angularForce+=A}},{"../math/vec2":33}],36:[function(a,b){b.exports={AABB:a("./collision/AABB"),AngleLockEquation:a("./equations/AngleLockEquation"),Body:a("./objects/Body"),Broadphase:a("./collision/Broadphase"),Capsule:a("./shapes/Capsule"),Circle:a("./shapes/Circle"),Constraint:a("./constraints/Constraint"),ContactEquation:a("./equations/ContactEquation"),ContactMaterial:a("./material/ContactMaterial"),Convex:a("./shapes/Convex"),DistanceConstraint:a("./constraints/DistanceConstraint"),Equation:a("./equations/Equation"),EventEmitter:a("./events/EventEmitter"),FrictionEquation:a("./equations/FrictionEquation"),GearConstraint:a("./constraints/GearConstraint"),GridBroadphase:a("./collision/GridBroadphase"),GSSolver:a("./solver/GSSolver"),Heightfield:a("./shapes/Heightfield"),Island:a("./solver/IslandSolver"),IslandSolver:a("./solver/IslandSolver"),Line:a("./shapes/Line"),LockConstraint:a("./constraints/LockConstraint"),Material:a("./material/Material"),Narrowphase:a("./collision/Narrowphase"),NaiveBroadphase:a("./collision/NaiveBroadphase"),Particle:a("./shapes/Particle"),Plane:a("./shapes/Plane"),RevoluteConstraint:a("./constraints/RevoluteConstraint"),PrismaticConstraint:a("./constraints/PrismaticConstraint"),Rectangle:a("./shapes/Rectangle"),RotationalVelocityEquation:a("./equations/RotationalVelocityEquation"),SAPBroadphase:a("./collision/SAPBroadphase"),Shape:a("./shapes/Shape"),Solver:a("./solver/Solver"),Spring:a("./objects/Spring"),Utils:a("./utils/Utils"),World:a("./world/World"),QuadTree:a("./collision/QuadTree").QuadTree,vec2:a("./math/vec2"),version:a("../package.json").version}},{"../package.json":8,"./collision/AABB":9,"./collision/Broadphase":10,"./collision/GridBroadphase":11,"./collision/NaiveBroadphase":12,"./collision/Narrowphase":13,"./collision/QuadTree":14,"./collision/SAPBroadphase":15,"./constraints/Constraint":16,"./constraints/DistanceConstraint":17,"./constraints/GearConstraint":18,"./constraints/LockConstraint":19,"./constraints/PrismaticConstraint":20,"./constraints/RevoluteConstraint":21,"./equations/AngleLockEquation":22,"./equations/ContactEquation":23,"./equations/Equation":24,"./equations/FrictionEquation":25,"./equations/RotationalVelocityEquation":27,"./events/EventEmitter":28,"./material/ContactMaterial":29,"./material/Material":30,"./math/vec2":33,"./objects/Body":34,"./objects/Spring":35,"./shapes/Capsule":37,"./shapes/Circle":38,"./shapes/Convex":39,"./shapes/Heightfield":40,"./shapes/Line":41,"./shapes/Particle":42,"./shapes/Plane":43,"./shapes/Rectangle":44,"./shapes/Shape":45,"./solver/GSSolver":46,"./solver/IslandSolver":48,"./solver/Solver":49,"./utils/Utils":50,"./world/World":51}],37:[function(a,b){function c(a,b){this.length=a||1,this.radius=b||1,d.call(this,d.CAPSULE)}var d=a("./Shape"),e=a("../math/vec2");b.exports=c,c.prototype=new d,c.prototype.computeMomentOfInertia=function(a){var b=this.radius,c=this.length+b,d=2*b;return a*(d*d+c*c)/12},c.prototype.updateBoundingRadius=function(){this.boundingRadius=this.radius+this.length/2},c.prototype.updateArea=function(){this.area=Math.PI*this.radius*this.radius+2*this.radius*this.length};var f=e.create();c.prototype.computeAABB=function(a,b,c){var d=this.radius;e.set(f,this.length,0),e.rotate(f,f,c),e.set(a.upperBound,Math.max(f[0]+d,-f[0]+d),Math.max(f[1]+d,-f[1]+d)),e.set(a.lowerBound,Math.min(f[0]-d,-f[0]-d),Math.min(f[1]-d,-f[1]-d)),e.add(a.lowerBound,a.lowerBound,b),e.add(a.upperBound,a.upperBound,b)}},{"../math/vec2":33,"./Shape":45}],38:[function(a,b){function c(a){this.radius=a||1,d.call(this,d.CIRCLE)}var d=a("./Shape"),e=a("../math/vec2");b.exports=c,c.prototype=new d,c.prototype.computeMomentOfInertia=function(a){var b=this.radius;return a*b*b/2},c.prototype.updateBoundingRadius=function(){this.boundingRadius=this.radius},c.prototype.updateArea=function(){this.area=Math.PI*this.radius*this.radius},c.prototype.computeAABB=function(a,b){var c=this.radius;e.set(a.upperBound,c,c),e.set(a.lowerBound,-c,-c),b&&(e.add(a.lowerBound,a.lowerBound,b),e.add(a.upperBound,a.upperBound,b))}},{"../math/vec2":33,"./Shape":45}],39:[function(a,b){function c(a){this.vertices=[];for(var b=0;b<a.length;b++){var c=e.create();e.copy(c,a[b]),this.vertices.push(c)}if(this.centerOfMass=e.fromValues(0,0),this.triangles=[],this.vertices.length&&(this.updateTriangles(),this.updateCenterOfMass()),this.boundingRadius=0,d.call(this,d.CONVEX),this.updateBoundingRadius(),this.updateArea(),this.area<0)throw new Error("Convex vertices must be given in conter-clockwise winding.")}{var d=a("./Shape"),e=a("../math/vec2"),f=a("../math/polyk");a("poly-decomp")}b.exports=c,c.prototype=new d,c.prototype.updateTriangles=function(){this.triangles.length=0;for(var a=[],b=0;b<this.vertices.length;b++){var c=this.vertices[b];a.push(c[0],c[1])}for(var d=f.Triangulate(a),b=0;b<d.length;b+=3){var e=d[b],g=d[b+1],h=d[b+2];this.triangles.push([e,g,h])}};{var g=e.create(),h=e.create(),i=e.create(),j=e.create(),k=e.create();e.create(),e.create(),e.create(),e.create()}c.prototype.updateCenterOfMass=function(){var a=this.triangles,b=this.vertices,d=this.centerOfMass,f=g,l=i,m=j,n=k,o=h;e.set(d,0,0);for(var p=0,q=0;q!==a.length;q++){var r=a[q],l=b[r[0]],m=b[r[1]],n=b[r[2]];e.centroid(f,l,m,n);var s=c.triangleArea(l,m,n);p+=s,e.scale(o,f,s),e.add(d,d,o)}e.scale(d,d,1/p)},c.prototype.computeMomentOfInertia=function(a){for(var b=0,c=0,d=this.vertices.length,f=d-1,g=0;d>g;f=g,g++){var h=this.vertices[f],i=this.vertices[g],j=Math.abs(e.crossLength(h,i)),k=e.dot(i,i)+e.dot(i,h)+e.dot(h,h);b+=j*k,c+=j}return a/6*(b/c)},c.prototype.updateBoundingRadius=function(){for(var a=this.vertices,b=0,c=0;c!==a.length;c++){var d=e.squaredLength(a[c]);d>b&&(b=d)}this.boundingRadius=Math.sqrt(b)},c.triangleArea=function(a,b,c){return.5*((b[0]-a[0])*(c[1]-a[1])-(c[0]-a[0])*(b[1]-a[1]))},c.prototype.updateArea=function(){this.updateTriangles(),this.area=0;for(var a=this.triangles,b=this.vertices,d=0;d!==a.length;d++){var e=a[d],f=b[e[0]],g=b[e[1]],h=b[e[2]],i=c.triangleArea(f,g,h);this.area+=i}},c.prototype.computeAABB=function(a,b,c){a.setFromPoints(this.vertices,b,c)}},{"../math/polyk":32,"../math/vec2":33,"./Shape":45,"poly-decomp":7}],40:[function(a,b){function c(a,b,c){this.data=a,this.maxValue=b,this.elementWidth=c,d.call(this,d.HEIGHTFIELD)}{var d=a("./Shape");a("../math/vec2")}b.exports=c,c.prototype=new d,c.prototype.computeMomentOfInertia=function(){return Number.MAX_VALUE},c.prototype.updateBoundingRadius=function(){this.boundingRadius=Number.MAX_VALUE},c.prototype.updateArea=function(){for(var a=this.data,b=0,c=0;c<a.length-1;c++)b+=(a[c]+a[c+1])/2*this.elementWidth;this.area=b},c.prototype.computeAABB=function(a,b){a.upperBound[0]=this.elementWidth*this.data.length+b[0],a.upperBound[1]=this.maxValue+b[1],a.lowerBound[0]=b[0],a.lowerBound[1]=b[1]}},{"../math/vec2":33,"./Shape":45}],41:[function(a,b){function c(a){this.length=a,d.call(this,d.LINE)}var d=a("./Shape"),e=a("../math/vec2");b.exports=c,c.prototype=new d,c.prototype.computeMomentOfInertia=function(a){return a*Math.pow(this.length,2)/12},c.prototype.updateBoundingRadius=function(){this.boundingRadius=this.length/2};var f=[e.create(),e.create()];c.prototype.computeAABB=function(a,b,c){var d=this.length;e.set(f[0],-d/2,0),e.set(f[1],d/2,0),a.setFromPoints(f,b,c)}},{"../math/vec2":33,"./Shape":45}],42:[function(a,b){function c(){d.call(this,d.PARTICLE)}var d=a("./Shape"),e=a("../math/vec2");b.exports=c,c.prototype=new d,c.prototype.computeMomentOfInertia=function(){return 0},c.prototype.updateBoundingRadius=function(){this.boundingRadius=0},c.prototype.computeAABB=function(a,b){this.length;e.copy(a.lowerBound,b),e.copy(a.upperBound,b)}},{"../math/vec2":33,"./Shape":45}],43:[function(a,b){function c(){d.call(this,d.PLANE)}{var d=a("./Shape"),e=a("../math/vec2");a("../utils/Utils")}b.exports=c,c.prototype=new d,c.prototype.computeMomentOfInertia=function(){return 0},c.prototype.updateBoundingRadius=function(){this.boundingRadius=Number.MAX_VALUE},c.prototype.computeAABB=function(a,b,c){var d=0,f=e.set;"number"==typeof c&&(d=c%(2*Math.PI)),0==d?(f(a.lowerBound,-Number.MAX_VALUE,-Number.MAX_VALUE),f(a.upperBound,Number.MAX_VALUE,0)):d==Math.PI/2?(f(a.lowerBound,0,-Number.MAX_VALUE),f(a.upperBound,Number.MAX_VALUE,Number.MAX_VALUE)):d==Math.PI?(f(a.lowerBound,-Number.MAX_VALUE,0),f(a.upperBound,Number.MAX_VALUE,Number.MAX_VALUE)):d==3*Math.PI/2?(f(a.lowerBound,-Number.MAX_VALUE,-Number.MAX_VALUE),f(a.upperBound,0,Number.MAX_VALUE)):(f(a.lowerBound,-Number.MAX_VALUE,-Number.MAX_VALUE),f(a.upperBound,Number.MAX_VALUE,Number.MAX_VALUE)),e.add(a.lowerBound,a.lowerBound,b),e.add(a.upperBound,a.upperBound,b)},c.prototype.updateArea=function(){this.area=Number.MAX_VALUE}},{"../math/vec2":33,"../utils/Utils":50,"./Shape":45}],44:[function(a,b){function c(a,b){var c=[d.fromValues(-a/2,-b/2),d.fromValues(a/2,-b/2),d.fromValues(a/2,b/2),d.fromValues(-a/2,b/2)];this.width=a,this.height=b,f.call(this,c),this.type=e.RECTANGLE}var d=a("../math/vec2"),e=a("./Shape"),f=a("./Convex");b.exports=c,c.prototype=new f([]),c.prototype.computeMomentOfInertia=function(a){var b=this.width,c=this.height;return a*(c*c+b*b)/12},c.prototype.updateBoundingRadius=function(){var a=this.width,b=this.height;this.boundingRadius=Math.sqrt(a*a+b*b)/2};d.create(),d.create(),d.create(),d.create();c.prototype.computeAABB=function(a,b,c){a.setFromPoints(this.vertices,b,c)},c.prototype.updateArea=function(){this.area=this.width*this.height}},{"../math/vec2":33,"./Convex":39,"./Shape":45}],45:[function(a,b){function c(a){this.type=a,this.id=c.idCounter++,this.boundingRadius=0,this.collisionGroup=1,this.collisionMask=1,a&&this.updateBoundingRadius(),this.material=null,this.area=0,this.sensor=!1,this.updateArea()}b.exports=c,c.idCounter=0,c.CIRCLE=1,c.PARTICLE=2,c.PLANE=4,c.CONVEX=8,c.LINE=16,c.RECTANGLE=32,c.CAPSULE=64,c.HEIGHTFIELD=128,c.prototype.computeMomentOfInertia=function(){throw new Error("Shape.computeMomentOfInertia is not implemented in this Shape...")},c.prototype.updateBoundingRadius=function(){throw new Error("Shape.updateBoundingRadius is not implemented in this Shape...")},c.prototype.updateArea=function(){},c.prototype.computeAABB=function(){}},{}],46:[function(a,b){function c(a){f.call(this,a,f.GS),a=a||{},this.iterations=a.iterations||10,this.tolerance=a.tolerance||0,this.debug=a.debug||!1,this.arrayStep=30,this.lambda=new g.ARRAY_TYPE(this.arrayStep),this.Bs=new g.ARRAY_TYPE(this.arrayStep),this.invCs=new g.ARRAY_TYPE(this.arrayStep),this.useGlobalEquationParameters=!0,this.stiffness=1e6,this.relaxation=4,this.useZeroRHS=!1,this.useNormalForceForFriction=!1,this.skipFrictionIterations=0}function d(a){for(var b=0;b!==a.length;b++)a[b]=0}var e=a("../math/vec2"),f=a("./Solver"),g=a("../utils/Utils"),h=a("../equations/FrictionEquation");b.exports=c,c.prototype=new f,c.prototype.solve=function(a,b){this.sortEquations();var f=0,i=this.iterations,j=this.skipFrictionIterations,k=this.tolerance*this.tolerance,l=this.equations,m=l.length,n=b.bodies,o=b.bodies.length,p=this.relaxation,q=this.stiffness,r=4/(a*a*q*(1+4*p)),s=4/(a*(1+4*p)),t=4*p/(1+4*p),u=this.useGlobalEquationParameters,v=(e.add,e.set,this.useZeroRHS),w=this.lambda;w.length<m&&(w=this.lambda=new g.ARRAY_TYPE(m+this.arrayStep),this.Bs=new g.ARRAY_TYPE(m+this.arrayStep),this.invCs=new g.ARRAY_TYPE(m+this.arrayStep)),d(w);var x=this.invCs,y=this.Bs,w=this.lambda;if(u)for(var z,A=0;z=l[A];A++)y[A]=z.computeB(s,t,a),x[A]=z.computeInvC(r);else for(var z,A=0;z=l[A];A++)z.updateSpookParams(a),y[A]=z.computeB(z.a,z.b,a),x[A]=z.computeInvC(z.eps);var z,B,A,C;if(0!==m){for(A=0;A!==o;A++)n[A].resetConstraintVelocity();for(f=0;f!==i;f++){for(B=0,C=0;C!==m;C++)if(z=l[C],!(z instanceof h&&j>f)){var D=u?r:z.eps,E=c.iterateEquation(C,z,D,y,x,w,v,a,f,j,this.useNormalForceForFriction);B+=Math.abs(E)}if(k>=B*B)break}for(A=0;A!==o;A++)n[A].addConstraintVelocity()}},c.iterateEquation=function(a,b,c,d,e,f,g,i,j,k,l){var m=d[a],n=e[a],o=f[a],p=b.computeGWlambda();l&&b instanceof h&&j==k&&(b.maxForce=b.contactEquation.multiplier*b.frictionCoefficient*i,b.minForce=-b.contactEquation.multiplier*b.frictionCoefficient*i);var q=b.maxForce,r=b.minForce;g&&(m=0);var s=n*(m-p-c*o),t=o+s;return r*i>t?s=r*i-o:t>q*i&&(s=q*i-o),f[a]+=s,b.multiplier=f[a]/i,b.addToWlambda(s),s}},{"../equations/FrictionEquation":25,"../math/vec2":33,"../utils/Utils":50,"./Solver":49}],47:[function(a,b){function c(){this.equations=[],this.bodies=[]}b.exports=c,c.prototype.reset=function(){this.equations.length=this.bodies.length=0},c.prototype.getBodies=function(){for(var a=[],b=[],c=this.equations,d=0;d!==c.length;d++){var e=c[d];-1===b.indexOf(e.bi.id)&&(a.push(e.bi),b.push(e.bi.id)),-1===b.indexOf(e.bj.id)&&(a.push(e.bj),b.push(e.bj.id))}return a},c.prototype.solve=function(a,b){var c=[];b.removeAllEquations();for(var d=this.equations.length,e=0;e!==d;e++)b.addEquation(this.equations[e]);for(var f=this.getBodies(),g=f.length,e=0;e!==g;e++)c.push(f[e]);b.solve(a,{bodies:c})}},{}],48:[function(a,b){function c(a,b){g.call(this,b,g.ISLAND);this.subsolver=a,this.numIslands=0,this._nodePool=[],this._islandPool=[],this.beforeSolveIslandEvent={type:"beforeSolveIsland",island:null}}function d(a){for(var b=a.length,c=0;c!==b;c++){var d=a[c];if(!d.visited&&d.body.motionState!=j)return d}return!1}function e(a,b,c){b.push(a.body);for(var d=a.eqs.length,e=0;e!==d;e++){var f=a.eqs[e];-1===c.indexOf(f)&&c.push(f)}}function f(a,b,c,e){for(k.length=0,k.push(a),a.visited=!0,b(a,c,e);k.length;)for(var f,g=k.pop();f=d(g.children);)f.visited=!0,b(f,c,e),k.push(f)}var g=a("./Solver"),h=(a("../math/vec2"),a("../solver/Island")),i=a("../objects/Body"),j=i.STATIC;b.exports=c,c.prototype=new g;var k=[],l=[],m=[],n=[],o=[];c.prototype.solve=function(a,b){var c=l,g=b.bodies,i=this.equations,j=i.length,k=g.length,p=(this.subsolver,this._workers,this._workerData,this._workerIslandGroups,this._islandPool);l.length=0;for(var q=0;q!==k;q++)c.push(this._nodePool.length?this._nodePool.pop():{body:g[q],children:[],eqs:[],visited:!1});for(var q=0;q!==k;q++){var r=c[q];r.body=g[q],r.children.length=0,r.eqs.length=0,r.visited=!1}for(var s=0;s!==j;s++){var t=i[s],q=g.indexOf(t.bi),u=g.indexOf(t.bj),v=c[q],w=c[u];
v.children.push(w),v.eqs.push(t),w.children.push(v),w.eqs.push(t)}var x,y=0,z=m,A=n;z.length=0,A.length=0;var B=o;for(B.length=0;x=d(c);){var C=p.length?p.pop():new h;z.length=0,A.length=0,f(x,e,A,z);for(var D=z.length,q=0;q!==D;q++){var t=z[q];C.equations.push(t)}y++,B.push(C)}this.numIslands=y;for(var E=this.beforeSolveIslandEvent,q=0;q<B.length;q++){var C=B[q];E.island=C,this.emit(E),C.solve(a,this.subsolver),C.reset(),p.push(C)}}},{"../math/vec2":33,"../objects/Body":34,"../solver/Island":47,"./Solver":49}],49:[function(a,b){function c(a,b){a=a||{},d.call(this),this.type=b,this.equations=[],this.equationSortFunction=a.equationSortFunction||!1}var d=(a("../utils/Utils"),a("../events/EventEmitter"));b.exports=c,c.prototype=new d,c.prototype.solve=function(){throw new Error("Solver.solve should be implemented by subclasses!")},c.prototype.sortEquations=function(){this.equationSortFunction&&this.equations.sort(this.equationSortFunction)},c.prototype.addEquation=function(a){a.enabled&&this.equations.push(a)},c.prototype.addEquations=function(a){for(var b=0,c=a.length;b!==c;b++){var d=a[b];d.enabled&&this.equations.push(d)}},c.prototype.removeEquation=function(a){var b=this.equations.indexOf(a);-1!=b&&this.equations.splice(b,1)},c.prototype.removeAllEquations=function(){this.equations.length=0},c.GS=1,c.ISLAND=2},{"../events/EventEmitter":28,"../utils/Utils":50}],50:[function(a,b){function c(){}b.exports=c,c.appendArray=function(a,b){if(b.length<15e4)a.push.apply(a,b);else for(var c=0,d=b.length;c!==d;++c)a.push(b[c])},c.splice=function(a,b,c){c=c||1;for(var d=b,e=a.length-c;e>d;d++)a[d]=a[d+c];a.length=e},c.ARRAY_TYPE=Float32Array||Array},{}],51:[function(a,b){function c(a){n.apply(this),a=a||{},this.springs=[],this.bodies=[],this.solver=a.solver||new d,this.narrowphase=new x(this),this.gravity=a.gravity||f.fromValues(0,-9.78),this.doProfiling=a.doProfiling||!1,this.lastStepTime=0,this.broadphase=a.broadphase||new e,this.broadphase.setWorld(this),this.constraints=[],this.defaultFriction=.3,this.defaultRestitution=0,this.defaultMaterial=new q,this.defaultContactMaterial=new r(this.defaultMaterial,this.defaultMaterial),this.lastTimeStep=1/60,this.applySpringForces=!0,this.applyDamping=!0,this.applyGravity=!0,this.solveConstraints=!0,this.contactMaterials=[],this.time=0,this.fixedStepTime=0,this.emitImpactEvent=!0,this._constraintIdCounter=0,this._bodyIdCounter=0,this.postStepEvent={type:"postStep"},this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.addSpringEvent={type:"addSpring",spring:null},this.impactEvent={type:"impact",bodyA:null,bodyB:null,shapeA:null,shapeB:null,contactEquation:null},this.postBroadphaseEvent={type:"postBroadphase",pairs:null},this.enableBodySleeping=!1,this.beginContactEvent={type:"beginContact",shapeA:null,shapeB:null,bodyA:null,bodyB:null,contactEquations:[]},this.endContactEvent={type:"endContact",shapeA:null,shapeB:null,bodyA:null,bodyB:null},this.preSolveEvent={type:"preSolve",contactEquations:null,frictionEquations:null},this.overlappingShapesLastState={keys:[]},this.overlappingShapesCurrentState={keys:[]},this.overlappingShapeLookup={keys:[]}}var d=a("../solver/GSSolver"),e=a("../collision/NaiveBroadphase"),f=a("../math/vec2"),g=a("../shapes/Circle"),h=a("../shapes/Rectangle"),i=a("../shapes/Convex"),j=a("../shapes/Line"),k=a("../shapes/Plane"),l=a("../shapes/Capsule"),m=a("../shapes/Particle"),n=a("../events/EventEmitter"),o=a("../objects/Body"),p=a("../objects/Spring"),q=a("../material/Material"),r=a("../material/ContactMaterial"),s=a("../constraints/DistanceConstraint"),t=a("../constraints/LockConstraint"),u=a("../constraints/RevoluteConstraint"),v=a("../constraints/PrismaticConstraint"),w=a("../../package.json"),x=(a("../collision/Broadphase"),a("../collision/Narrowphase")),y=a("../utils/Utils");b.exports=c;var z=w.version.split(".").slice(0,2).join(".");if("undefined"==typeof performance&&(performance={}),!performance.now){var A=Date.now();performance.timing&&performance.timing.navigationStart&&(A=performance.timing.navigationStart),performance.now=function(){return Date.now()-A}}c.prototype=new Object(n.prototype),c.prototype.addConstraint=function(a){this.constraints.push(a)},c.prototype.addContactMaterial=function(a){this.contactMaterials.push(a)},c.prototype.removeContactMaterial=function(a){var b=this.contactMaterials.indexOf(a);-1!==b&&y.splice(this.contactMaterials,b,1)},c.prototype.getContactMaterial=function(a,b){for(var c=this.contactMaterials,d=0,e=c.length;d!==e;d++){var f=c[d];if(f.materialA===a&&f.materialB===b||f.materialA===b&&f.materialB===a)return f}return!1},c.prototype.removeConstraint=function(a){var b=this.constraints.indexOf(a);-1!==b&&y.splice(this.constraints,b,1)};{var B=(f.create(),f.create(),f.create(),f.create(),f.create(),f.create(),f.create()),C=f.fromValues(0,0),D=f.fromValues(0,0);f.fromValues(0,0)}c.prototype.step=function(a,b,c){if(c=c||10,b=b||0,0==b)this.internalStep(a),this.time+=a;else{var d=Math.floor((this.time+b)/a)-Math.floor(this.time/a);d=Math.min(d,c);for(var e=0;d>e;e++)this.internalStep(a);this.time+=b,this.fixedStepTime+=d*a;for(var f=this.time-this.fixedStepTime-a,g=0;g!==this.bodies.length;g++){var h=this.bodies[g];h.interpolatedPosition[0]=h.position[0]+h.velocity[0]*f,h.interpolatedPosition[1]=h.position[1]+h.velocity[1]*f}}},c.prototype.internalStep=function(a){{var b,d,e=this,g=this.doProfiling,h=this.springs.length,i=this.springs,j=this.bodies,k=this.gravity,l=this.solver,m=this.bodies.length,n=this.broadphase,p=this.narrowphase,q=this.constraints,r=B,s=(f.scale,f.add);f.rotate}this.lastTimeStep=a,g&&(b=performance.now());var t=f.length(this.gravity);if(this.applyGravity)for(var u=0;u!==m;u++){var v=j[u],w=v.force;v.motionState==o.DYNAMIC&&(f.scale(r,k,v.mass*v.gravityScale),s(w,w,r))}if(this.applySpringForces)for(var u=0;u!==h;u++){var x=i[u];x.applyForce()}if(this.applyDamping)for(var u=0;u!==m;u++){var v=j[u];v.motionState==o.DYNAMIC&&v.applyDamping(a)}var y=n.getCollisionPairs(this);this.postBroadphaseEvent.pairs=y,this.emit(this.postBroadphaseEvent),p.reset(this);for(var u=0,z=y.length;u!==z;u+=2)for(var A=y[u],C=y[u+1],D=0,E=A.shapes.length;D!==E;D++)for(var F=A.shapes[D],G=A.shapeOffsets[D],H=A.shapeAngles[D],I=0,J=C.shapes.length;I!==J;I++){var K=C.shapes[I],L=C.shapeOffsets[I],M=C.shapeAngles[I],N=this.defaultContactMaterial;if(F.material&&K.material){var O=this.getContactMaterial(F.material,K.material);O&&(N=O)}this.runNarrowphase(p,A,F,G,H,C,K,L,M,N,t)}for(var P=this.overlappingShapesLastState,u=0;u!==P.keys.length;u++){var Q=P.keys[u];if(P[Q]===!0&&!this.overlappingShapesCurrentState[Q]){var R=this.endContactEvent;R.shapeA=P[Q+"_shapeA"],R.shapeB=P[Q+"_shapeB"],R.bodyA=P[Q+"_bodyA"],R.bodyB=P[Q+"_bodyB"],this.emit(R)}}for(var u=0;u!==P.keys.length;u++)delete P[P.keys[u]];P.keys.length=0;for(var S=this.overlappingShapesCurrentState,u=0;u!==S.keys.length;u++)P[S.keys[u]]=S[S.keys[u]],P.keys.push(S.keys[u]);for(var u=0;u!==S.keys.length;u++)delete S[S.keys[u]];S.keys.length=0;var T=this.preSolveEvent;T.contactEquations=p.contactEquations,T.frictionEquations=p.frictionEquations,this.emit(T),l.addEquations(p.contactEquations),l.addEquations(p.frictionEquations);var U=q.length;for(u=0;u!==U;u++){var V=q[u];V.update(),l.addEquations(V.equations)}this.solveConstraints&&l.solve(a,this),l.removeAllEquations();for(var u=0;u!==m;u++){var W=j[u];W.sleepState!==o.SLEEPING&&W.motionState!=o.STATIC&&c.integrateBody(W,a)}for(var u=0;u!==m;u++)j[u].setZeroForce();if(g&&(d=performance.now(),e.lastStepTime=d-b),this.emitImpactEvent)for(var X=this.impactEvent,u=0;u!==p.contactEquations.length;u++){var Y=p.contactEquations[u];Y.firstImpact&&(X.bodyA=Y.bi,X.bodyB=Y.bj,X.shapeA=Y.shapeA,X.shapeB=Y.shapeB,X.contactEquation=Y,this.emit(X))}if(this.enableBodySleeping)for(u=0;u!==m;u++)j[u].sleepTick(this.time);this.emit(this.postStepEvent)};var E=f.create(),F=f.create();c.integrateBody=function(a,b){var c=a.invMass,d=a.force,e=a.position,g=a.velocity;a.fixedRotation||(a.angularVelocity+=a.angularForce*a.invInertia*b,a.angle+=a.angularVelocity*b),f.scale(E,d,b*c),f.add(g,E,g),f.scale(F,g,b),f.add(e,e,F),a.aabbNeedsUpdate=!0},c.prototype.runNarrowphase=function(a,b,c,d,e,g,h,i,j,k,l){if(0!==(c.collisionGroup&h.collisionMask)&&0!==(h.collisionGroup&c.collisionMask)){f.rotate(C,d,b.angle),f.rotate(D,i,g.angle),f.add(C,C,b.position),f.add(D,D,g.position);var m=e+b.angle,n=j+g.angle;a.enableFriction=k.friction>0,a.frictionCoefficient=k.friction;var p;p=b.motionState==o.STATIC||b.motionState==o.KINEMATIC?g.mass:g.motionState==o.STATIC||g.motionState==o.KINEMATIC?b.mass:b.mass*g.mass/(b.mass+g.mass),a.slipForce=k.friction*l*p,a.restitution=k.restitution,a.surfaceVelocity=k.surfaceVelocity,a.frictionStiffness=k.frictionStiffness,a.frictionRelaxation=k.frictionRelaxation,a.stiffness=k.stiffness,a.relaxation=k.relaxation;var q=a[c.type|h.type],r=0;if(q){var s=c.sensor||h.sensor;if(r=c.type<h.type?q.call(a,b,c,C,m,g,h,D,n,s):q.call(a,g,h,D,n,b,c,C,m,s)){var t=c.id<h.id?c.id+" "+h.id:h.id+" "+c.id;if(!this.overlappingShapesLastState[t]){var u=this.beginContactEvent;if(u.shapeA=c,u.shapeB=h,u.bodyA=b,u.bodyB=g,"number"==typeof r){u.contactEquations.length=0;for(var v=a.contactEquations.length-r;v<a.contactEquations.length;v++)u.contactEquations.push(a.contactEquations[v])}this.emit(u)}var w=this.overlappingShapesCurrentState;w[t]||(w[t]=!0,w.keys.push(t),w[t+"_shapeA"]=c,w.keys.push(t+"_shapeA"),w[t+"_shapeB"]=h,w.keys.push(t+"_shapeB"),w[t+"_bodyA"]=b,w.keys.push(t+"_bodyA"),w[t+"_bodyB"]=g,w.keys.push(t+"_bodyB"))}}}},c.prototype.addSpring=function(a){this.springs.push(a),this.addSpringEvent.spring=a,this.emit(this.addSpringEvent)},c.prototype.removeSpring=function(a){var b=this.springs.indexOf(a);-1===b&&y.splice(this.springs,b,1)},c.prototype.addBody=function(a){if(a.world)throw new Error("This body is already added to a World.");this.bodies.push(a),a.world=this,this.addBodyEvent.body=a,this.emit(this.addBodyEvent)},c.prototype.removeBody=function(a){if(a.world!==this)throw new Error("The body was never added to this World, cannot remove it.");a.world=null;var b=this.bodies.indexOf(a);-1!==b&&(y.splice(this.bodies,b,1),this.removeBodyEvent.body=a,a.resetConstraintVelocity(),this.emit(this.removeBodyEvent))},c.prototype.getBodyById=function(a){for(var b=this.bodies,c=0;c<b.length;c++){var d=b[c];if(d.id===a)return d}return!1},c.prototype.toJSON=function(){function a(a){return a?[a[0],a[1]]:a}for(var b={p2:z,bodies:[],springs:[],solver:{},gravity:a(this.gravity),broadphase:{},constraints:[],contactMaterials:[]},c=0;c!==this.springs.length;c++){var d=this.springs[c];b.springs.push({bodyA:this.bodies.indexOf(d.bodyA),bodyB:this.bodies.indexOf(d.bodyB),stiffness:d.stiffness,damping:d.damping,restLength:d.restLength,localAnchorA:a(d.localAnchorA),localAnchorB:a(d.localAnchorB)})}for(var c=0;c<this.constraints.length;c++){var e=this.constraints[c],f={bodyA:this.bodies.indexOf(e.bodyA),bodyB:this.bodies.indexOf(e.bodyB)};if(e instanceof s)f.type="DistanceConstraint",f.distance=e.distance,f.maxForce=e.getMaxForce();else if(e instanceof u)f.type="RevoluteConstraint",f.pivotA=a(e.pivotA),f.pivotB=a(e.pivotB),f.maxForce=e.maxForce,f.motorSpeed=e.getMotorSpeed(),f.lowerLimit=e.lowerLimit,f.lowerLimitEnabled=e.lowerLimitEnabled,f.upperLimit=e.upperLimit,f.upperLimitEnabled=e.upperLimitEnabled;else if(e instanceof v)f.type="PrismaticConstraint",f.localAxisA=a(e.localAxisA),f.localAnchorA=a(e.localAnchorA),f.localAnchorB=a(e.localAnchorB),f.maxForce=e.maxForce;else{if(!(e instanceof t)){console.error("Constraint not supported yet!");continue}f.type="LockConstraint",f.localOffsetB=a(e.localOffsetB),f.localAngleB=e.localAngleB,f.maxForce=e.maxForce}b.constraints.push(f)}for(var c=0;c!==this.bodies.length;c++){for(var n=this.bodies[c],o=n.shapes,p=[],q=0;q<o.length;q++){var r,d=o[q];if(d instanceof g)r={type:"Circle",radius:d.radius};else if(d instanceof k)r={type:"Plane"};else if(d instanceof m)r={type:"Particle"};else if(d instanceof j)r={type:"Line",length:d.length};else if(d instanceof h)r={type:"Rectangle",width:d.width,height:d.height};else if(d instanceof i){for(var w=[],x=0;x<d.vertices.length;x++)w.push(a(d.vertices[x]));r={type:"Convex",verts:w}}else{if(!(d instanceof l))throw new Error("Shape type not supported yet!");r={type:"Capsule",length:d.length,radius:d.radius}}r.offset=a(n.shapeOffsets[q]),r.angle=n.shapeAngles[q],r.collisionGroup=d.collisionGroup,r.collisionMask=d.collisionMask,r.material=d.material&&{id:d.material.id},p.push(r)}b.bodies.push({id:n.id,mass:n.mass,angle:n.angle,position:a(n.position),velocity:a(n.velocity),angularVelocity:n.angularVelocity,force:a(n.force),shapes:p,concavePath:n.concavePath})}for(var c=0;c<this.contactMaterials.length;c++){var y=this.contactMaterials[c];b.contactMaterials.push({id:y.id,materialA:y.materialA.id,materialB:y.materialB.id,friction:y.friction,restitution:y.restitution,stiffness:y.stiffness,relaxation:y.relaxation,frictionStiffness:y.frictionStiffness,frictionRelaxation:y.frictionRelaxation})}return b},c.upgradeJSON=function(a){if(!a||!a.p2)return!1;switch(a=JSON.parse(JSON.stringify(a)),a.p2){case z:return a;case"0.3":for(var b=0;b<a.constraints.length;b++){var d=a.constraints[b];"PrismaticConstraint"==d.type&&(delete d.localAxisA,delete d.localAxisB,d.localAxisA=[1,0],d.localAnchorA=[0,0],d.localAnchorB=[0,0])}a.p2="0.4"}return c.upgradeJSON(a)},c.prototype.fromJSON=function(a){if(this.clear(),a=c.upgradeJSON(a),!a)return!1;if(!a.p2)return!1;f.copy(this.gravity,a.gravity);for(var b=this.bodies,d={},e=0;e!==a.bodies.length;e++){var n=a.bodies[e],w=n.shapes,x=new o({mass:n.mass,position:n.position,angle:n.angle,velocity:n.velocity,angularVelocity:n.angularVelocity,force:n.force});x.id=n.id;for(var y=0;y<w.length;y++){var z,A=w[y];switch(A.type){case"Circle":z=new g(A.radius);break;case"Plane":z=new k;break;case"Particle":z=new m;break;case"Line":z=new j(A.length);break;case"Rectangle":z=new h(A.width,A.height);break;case"Convex":z=new i(A.verts);break;case"Capsule":z=new l(A.length,A.radius);break;default:throw new Error("Shape type not supported: "+A.type)}z.collisionMask=A.collisionMask,z.collisionGroup=A.collisionGroup,z.material=A.material,z.material&&(z.material=new q,z.material.id=A.material.id,d[z.material.id+""]=z.material),x.addShape(z,A.offset,A.angle)}n.concavePath&&(x.concavePath=n.concavePath),this.addBody(x)}for(var e=0;e<a.springs.length;e++){var A=a.springs[e],B=new p(b[A.bodyA],b[A.bodyB],{stiffness:A.stiffness,damping:A.damping,restLength:A.restLength,localAnchorA:A.localAnchorA,localAnchorB:A.localAnchorB});this.addSpring(B)}for(var e=0;e<a.contactMaterials.length;e++){var C=a.contactMaterials[e],D=new r(d[C.materialA+""],d[C.materialB+""],{friction:C.friction,restitution:C.restitution,stiffness:C.stiffness,relaxation:C.relaxation,frictionStiffness:C.frictionStiffness,frictionRelaxation:C.frictionRelaxation});D.id=C.id,this.addContactMaterial(D)}for(var e=0;e<a.constraints.length;e++){var E,F=a.constraints[e];switch(F.type){case"DistanceConstraint":E=new s(b[F.bodyA],b[F.bodyB],F.distance,F.maxForce);break;case"RevoluteConstraint":E=new u(b[F.bodyA],F.pivotA,b[F.bodyB],F.pivotB,F.maxForce),F.motorSpeed&&(E.enableMotor(),E.setMotorSpeed(F.motorSpeed)),E.lowerLimit=F.lowerLimit||0,E.upperLimit=F.upperLimit||0,E.lowerLimitEnabled=F.lowerLimitEnabled||!1,E.upperLimitEnabled=F.upperLimitEnabled||!1;break;case"PrismaticConstraint":E=new v(b[F.bodyA],b[F.bodyB],{maxForce:F.maxForce,localAxisA:F.localAxisA,localAnchorA:F.localAnchorA,localAnchorB:F.localAnchorB});break;case"LockConstraint":E=new t(b[F.bodyA],b[F.bodyB],{maxForce:F.maxForce,localOffsetB:F.localOffsetB,localAngleB:F.localAngleB});break;default:throw new Error("Constraint type not recognized: "+F.type)}this.addConstraint(E)}return!0},c.prototype.clear=function(){this.time=0,this.solver&&this.solver.equations.length&&this.solver.removeAllEquations();for(var a=this.constraints,b=a.length-1;b>=0;b--)this.removeConstraint(a[b]);for(var c=this.bodies,b=c.length-1;b>=0;b--)this.removeBody(c[b]);for(var d=this.springs,b=d.length-1;b>=0;b--)this.removeSpring(d[b]);for(var e=this.contactMaterials,b=e.length-1;b>=0;b--)this.removeContactMaterial(e[b])},c.prototype.clone=function(){var a=new c;return a.fromJSON(this.toJSON()),a};var G=f.create(),H=f.fromValues(0,0),I=f.fromValues(0,0);c.prototype.hitTest=function(a,b,c){c=c||0;var d=new o({position:a}),e=new m,h=a,j=0,n=G,p=H,q=I;d.addShape(e);for(var r=this.narrowphase,s=[],t=0,u=b.length;t!==u;t++)for(var v=b[t],w=0,x=v.shapes.length;w!==x;w++){var y=v.shapes[w],z=v.shapeOffsets[w]||p,A=v.shapeAngles[w]||0;f.rotate(n,z,v.angle),f.add(n,n,v.position);var B=A+v.angle;(y instanceof g&&r.circleParticle(v,y,n,B,d,e,h,j,!0)||y instanceof i&&r.particleConvex(d,e,h,j,v,y,n,B,!0)||y instanceof k&&r.particlePlane(d,e,h,j,v,y,n,B,!0)||y instanceof l&&r.particleCapsule(d,e,h,j,v,y,n,B,!0)||y instanceof m&&f.squaredLength(f.sub(q,n,a))<c*c)&&s.push(v)}return s}},{"../../package.json":8,"../collision/Broadphase":10,"../collision/NaiveBroadphase":12,"../collision/Narrowphase":13,"../constraints/DistanceConstraint":17,"../constraints/LockConstraint":19,"../constraints/PrismaticConstraint":20,"../constraints/RevoluteConstraint":21,"../events/EventEmitter":28,"../material/ContactMaterial":29,"../material/Material":30,"../math/vec2":33,"../objects/Body":34,"../objects/Spring":35,"../shapes/Capsule":37,"../shapes/Circle":38,"../shapes/Convex":39,"../shapes/Line":41,"../shapes/Particle":42,"../shapes/Plane":43,"../shapes/Rectangle":44,"../solver/GSSolver":46,"../utils/Utils":50}]},{},[36])(36)}),p2.Body.prototype.parent=null,p2.Spring.prototype.parent=null,Phaser.Physics.P2=function(a,b){this.game=a,"undefined"!=typeof b&&b.hasOwnProperty("gravity")&&b.hasOwnProperty("broadphase")||(b={gravity:[0,0],broadphase:new p2.SAPBroadphase}),this.world=new p2.World(b),this.frameRate=1/60,this.useElapsedTime=!1,this.materials=[],this.gravity=new Phaser.Physics.P2.InversePointProxy(this,this.world.gravity),this.bounds=null,this._wallShapes=[null,null,null,null],this.onBodyAdded=new Phaser.Signal,this.onBodyRemoved=new Phaser.Signal,this.onSpringAdded=new Phaser.Signal,this.onSpringRemoved=new Phaser.Signal,this.onConstraintAdded=new Phaser.Signal,this.onConstraintRemoved=new Phaser.Signal,this.onContactMaterialAdded=new Phaser.Signal,this.onContactMaterialRemoved=new Phaser.Signal,this.postBroadphaseCallback=null,this.callbackContext=null,this.impactCallback=null,this.onBeginContact=new Phaser.Signal,this.onEndContact=new Phaser.Signal,b.hasOwnProperty("mpx")&&b.hasOwnProperty("pxm")&&b.hasOwnProperty("mpxi")&&b.hasOwnProperty("pxmi")&&(this.mpx=b.mpx,this.mpxi=b.mpxi,this.pxm=b.pxm,this.pxmi=b.pxmi),this.world.on("beginContact",this.beginContactHandler,this),this.world.on("endContact",this.endContactHandler,this),this._toRemove=[],this.collisionGroups=[],this._collisionGroupID=2,this.nothingCollisionGroup=new Phaser.Physics.P2.CollisionGroup(1),this.boundsCollisionGroup=new Phaser.Physics.P2.CollisionGroup(2),this.everythingCollisionGroup=new Phaser.Physics.P2.CollisionGroup(2147483648),this.boundsCollidesWith=[],this.setBoundsToWorld(!0,!0,!0,!0,!1)},Phaser.Physics.P2.LIME_CORONA_JSON=0,Phaser.Physics.P2.prototype={removeBodyNextStep:function(a){this._toRemove.push(a)},preUpdate:function(){for(var a=this._toRemove.length;a--;)this.removeBody(this._toRemove[a]);this._toRemove.length=0},enable:function(a,b,c){"undefined"==typeof b&&(b=!1),"undefined"==typeof c&&(c=!0);var d=1;if(Array.isArray(a))for(d=a.length;d--;)a[d]instanceof Phaser.Group?this.enable(a[d].children,b,c):(this.enableBody(a[d],b),c&&a[d].hasOwnProperty("children")&&a[d].children.length>0&&this.enable(a[d],b,!0));else a instanceof Phaser.Group?this.enable(a.children,b,c):(this.enableBody(a,b),c&&a.hasOwnProperty("children")&&a.children.length>0&&this.enable(a.children,b,!0))},enableBody:function(a,b){a.hasOwnProperty("body")&&null===a.body&&(a.body=new Phaser.Physics.P2.Body(this.game,a,a.x,a.y,1),a.body.debug=b,a.anchor.set(.5))},setImpactEvents:function(a){a?this.world.on("impact",this.impactHandler,this):this.world.off("impact",this.impactHandler,this)},setPostBroadphaseCallback:function(a,b){this.postBroadphaseCallback=a,this.callbackContext=b,null!==a?this.world.on("postBroadphase",this.postBroadphaseHandler,this):this.world.off("postBroadphase",this.postBroadphaseHandler,this)},postBroadphaseHandler:function(a){if(this.postBroadphaseCallback)for(var b=a.pairs.length;b-=2;)1===a.pairs[b].id||1===a.pairs[b+1].id||this.postBroadphaseCallback.call(this.callbackContext,a.pairs[b].parent,a.pairs[b+1].parent)||a.pairs.splice(b,2)},impactHandler:function(a){if(a.bodyA.parent&&a.bodyB.parent){var b=a.bodyA.parent,c=a.bodyB.parent;b._bodyCallbacks[a.bodyB.id]&&b._bodyCallbacks[a.bodyB.id].call(b._bodyCallbackContext[a.bodyB.id],b,c,a.shapeA,a.shapeB),c._bodyCallbacks[a.bodyA.id]&&c._bodyCallbacks[a.bodyA.id].call(c._bodyCallbackContext[a.bodyA.id],c,b,a.shapeB,a.shapeA),b._groupCallbacks[a.shapeB.collisionGroup]&&b._groupCallbacks[a.shapeB.collisionGroup].call(b._groupCallbackContext[a.shapeB.collisionGroup],b,c,a.shapeA,a.shapeB),c._groupCallbacks[a.shapeA.collisionGroup]&&c._groupCallbacks[a.shapeA.collisionGroup].call(c._groupCallbackContext[a.shapeA.collisionGroup],c,b,a.shapeB,a.shapeA)}},beginContactHandler:function(a){a.bodyA.id>1&&a.bodyB.id>1&&(this.onBeginContact.dispatch(a.bodyA,a.bodyB,a.shapeA,a.shapeB,a.contactEquations),a.bodyA.parent&&a.bodyA.parent.onBeginContact.dispatch(a.bodyB.parent,a.shapeA,a.shapeB,a.contactEquations),a.bodyB.parent&&a.bodyB.parent.onBeginContact.dispatch(a.bodyA.parent,a.shapeB,a.shapeA,a.contactEquations))},endContactHandler:function(a){a.bodyA.id>1&&a.bodyB.id>1&&(this.onEndContact.dispatch(a.bodyA,a.bodyB,a.shapeA,a.shapeB),a.bodyA.parent&&a.bodyA.parent.onEndContact.dispatch(a.bodyB.parent,a.shapeA,a.shapeB),a.bodyB.parent&&a.bodyB.parent.onEndContact.dispatch(a.bodyA.parent,a.shapeB,a.shapeA))},setBoundsToWorld:function(a,b,c,d,e){this.setBounds(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height,a,b,c,d,e)},setWorldMaterial:function(a,b,c,d,e){"undefined"==typeof b&&(b=!0),"undefined"==typeof c&&(c=!0),"undefined"==typeof d&&(d=!0),"undefined"==typeof e&&(e=!0),b&&this._wallShapes[0]&&(this._wallShapes[0].material=a),c&&this._wallShapes[1]&&(this._wallShapes[1].material=a),d&&this._wallShapes[2]&&(this._wallShapes[2].material=a),e&&this._wallShapes[3]&&(this._wallShapes[3].material=a)},updateBoundsCollisionGroup:function(a){"undefined"==typeof a&&(a=!0);for(var b=0;4>b;b++)this._wallShapes[b]&&(this._wallShapes[b].collisionGroup=a?this.boundsCollisionGroup.mask:this.everythingCollisionGroup.mask)},setBounds:function(a,b,c,d,e,f,g,h,i){"undefined"==typeof e&&(e=!0),"undefined"==typeof f&&(f=!0),"undefined"==typeof g&&(g=!0),"undefined"==typeof h&&(h=!0),"undefined"==typeof i&&(i=!0);var j=c/2,k=d/2,l=j+a,m=k+b;if(null!==this.bounds){this.bounds.world&&this.world.removeBody(this.bounds);for(var n=this.bounds.shapes.length;n--;){var o=this.bounds.shapes[n];this.bounds.removeShape(o)}this.bounds.position[0]=this.pxmi(l),this.bounds.position[1]=this.pxmi(m)}else this.bounds=new p2.Body({mass:0,position:[this.pxmi(l),this.pxmi(m)]});e&&(this._wallShapes[0]=new p2.Plane,i&&(this._wallShapes[0].collisionGroup=this.boundsCollisionGroup.mask),this.bounds.addShape(this._wallShapes[0],[this.pxmi(-j),0],1.5707963267948966)),f&&(this._wallShapes[1]=new p2.Plane,i&&(this._wallShapes[1].collisionGroup=this.boundsCollisionGroup.mask),this.bounds.addShape(this._wallShapes[1],[this.pxmi(j),0],-1.5707963267948966)),g&&(this._wallShapes[2]=new p2.Plane,i&&(this._wallShapes[2].collisionGroup=this.boundsCollisionGroup.mask),this.bounds.addShape(this._wallShapes[2],[0,this.pxmi(-k)],-3.141592653589793)),h&&(this._wallShapes[3]=new p2.Plane,i&&(this._wallShapes[3].collisionGroup=this.boundsCollisionGroup.mask),this.bounds.addShape(this._wallShapes[3],[0,this.pxmi(k)])),this.world.addBody(this.bounds)},update:function(){this.world.step(this.useElapsedTime?this.game.time.physicsElapsed:this.frameRate)},clear:function(){this.world.clear(),this.world.off("beginContact",this.beginContactHandler,this),this.world.off("endContact",this.endContactHandler,this),this.postBroadphaseCallback=null,this.callbackContext=null,this.impactCallback=null,this.collisionGroups=[],this._toRemove=[],this._collisionGroupID=2,this.boundsCollidesWith=[]},destroy:function(){this.clear(),this.game=null},addBody:function(a){return a.data.world?!1:(this.world.addBody(a.data),this.onBodyAdded.dispatch(a),!0)},removeBody:function(a){return a.data.world==this.world&&(this.world.removeBody(a.data),this.onBodyRemoved.dispatch(a)),a},addSpring:function(a){return this.world.addSpring(a),this.onSpringAdded.dispatch(a),a},removeSpring:function(a){return this.world.removeSpring(a),this.onSpringRemoved.dispatch(a),a},createDistanceConstraint:function(a,b,c,d){return a=this.getBody(a),b=this.getBody(b),a&&b?this.addConstraint(new Phaser.Physics.P2.DistanceConstraint(this,a,b,c,d)):void console.warn("Cannot create Constraint, invalid body objects given")},createGearConstraint:function(a,b,c,d){return a=this.getBody(a),b=this.getBody(b),a&&b?this.addConstraint(new Phaser.Physics.P2.GearConstraint(this,a,b,c,d)):void console.warn("Cannot create Constraint, invalid body objects given")},createRevoluteConstraint:function(a,b,c,d,e){return a=this.getBody(a),c=this.getBody(c),a&&c?this.addConstraint(new Phaser.Physics.P2.RevoluteConstraint(this,a,b,c,d,e)):void console.warn("Cannot create Constraint, invalid body objects given")},createLockConstraint:function(a,b,c,d,e){return a=this.getBody(a),b=this.getBody(b),a&&b?this.addConstraint(new Phaser.Physics.P2.LockConstraint(this,a,b,c,d,e)):void console.warn("Cannot create Constraint, invalid body objects given")},createPrismaticConstraint:function(a,b,c,d,e,f,g){return a=this.getBody(a),b=this.getBody(b),a&&b?this.addConstraint(new Phaser.Physics.P2.PrismaticConstraint(this,a,b,c,d,e,f,g)):void console.warn("Cannot create Constraint, invalid body objects given")},addConstraint:function(a){return this.world.addConstraint(a),this.onConstraintAdded.dispatch(a),a},removeConstraint:function(a){return this.world.removeConstraint(a),this.onConstraintRemoved.dispatch(a),a},addContactMaterial:function(a){return this.world.addContactMaterial(a),this.onContactMaterialAdded.dispatch(a),a},removeContactMaterial:function(a){return this.world.removeContactMaterial(a),this.onContactMaterialRemoved.dispatch(a),a},getContactMaterial:function(a,b){return this.world.getContactMaterial(a,b)},setMaterial:function(a,b){for(var c=b.length;c--;)b.setMaterial(a)},createMaterial:function(a,b){a=a||"";var c=new Phaser.Physics.P2.Material(a);return this.materials.push(c),"undefined"!=typeof b&&b.setMaterial(c),c},createContactMaterial:function(a,b,c){"undefined"==typeof a&&(a=this.createMaterial()),"undefined"==typeof b&&(b=this.createMaterial());var d=new Phaser.Physics.P2.ContactMaterial(a,b,c);return this.addContactMaterial(d)},getBodies:function(){for(var a=[],b=this.world.bodies.length;b--;)a.push(this.world.bodies[b].parent);return a},getBody:function(a){return a instanceof p2.Body?a:a instanceof Phaser.Physics.P2.Body?a.data:a.body&&a.body.type===Phaser.Physics.P2JS?a.body.data:null},getSprings:function(){for(var a=[],b=this.world.springs.length;b--;)a.push(this.world.springs[b].parent);return a},getConstraints:function(){for(var a=[],b=this.world.constraints.length;b--;)a.push(this.world.constraints[b].parent);return a},hitTest:function(a,b,c,d){"undefined"==typeof b&&(b=this.world.bodies),"undefined"==typeof c&&(c=5),"undefined"==typeof d&&(d=!1);for(var e=[this.pxmi(a.x),this.pxmi(a.y)],f=[],g=b.length;g--;)b[g]instanceof Phaser.Physics.P2.Body&&(!d||b[g].data.motionState!==p2.Body.STATIC)?f.push(b[g].data):b[g]instanceof p2.Body&&b[g].parent&&(!d||b[g].motionState!==p2.Body.STATIC)?f.push(b[g]):b[g]instanceof Phaser.Sprite&&b[g].hasOwnProperty("body")&&(!d||b[g].body.data.motionState!==p2.Body.STATIC)&&f.push(b[g].body.data);return this.world.hitTest(e,f,c)},toJSON:function(){return this.world.toJSON()},createCollisionGroup:function(a){var b=Math.pow(2,this._collisionGroupID);this._wallShapes[0]&&(this._wallShapes[0].collisionMask=this._wallShapes[0].collisionMask|b),this._wallShapes[1]&&(this._wallShapes[1].collisionMask=this._wallShapes[1].collisionMask|b),this._wallShapes[2]&&(this._wallShapes[2].collisionMask=this._wallShapes[2].collisionMask|b),this._wallShapes[3]&&(this._wallShapes[3].collisionMask=this._wallShapes[3].collisionMask|b),this._collisionGroupID++;var c=new Phaser.Physics.P2.CollisionGroup(b);return this.collisionGroups.push(c),a&&this.setCollisionGroup(a,c),c},setCollisionGroup:function(a,b){if(a instanceof Phaser.Group)for(var c=0;c<a.total;c++)a.children[c].body&&a.children[c].body.type===Phaser.Physics.P2JS&&a.children[c].body.setCollisionGroup(b);else a.body.setCollisionGroup(b)},createSpring:function(a,b,c,d,e,f,g,h,i){return a=this.getBody(a),b=this.getBody(b),a&&b?this.addSpring(new Phaser.Physics.P2.Spring(this,a,b,c,d,e,f,g,h,i)):void console.warn("Cannot create Spring, invalid body objects given")},createBody:function(a,b,c,d,e,f){"undefined"==typeof d&&(d=!1);var g=new Phaser.Physics.P2.Body(this.game,null,a,b,c);if(f){var h=g.addPolygon(e,f);if(!h)return!1}return d&&this.world.addBody(g.data),g},createParticle:function(a,b,c,d,e,f){"undefined"==typeof d&&(d=!1);var g=new Phaser.Physics.P2.Body(this.game,null,a,b,c);if(f){var h=g.addPolygon(e,f);if(!h)return!1}return d&&this.world.addBody(g.data),g},convertCollisionObjects:function(a,b,c){"undefined"==typeof c&&(c=!0);for(var d=[],e=0,f=a.collision[b].length;f>e;e++){var g=a.collision[b][e],h=this.createBody(g.x,g.y,0,c,{},g.polyline);h&&d.push(h)}return d},clearTilemapLayerBodies:function(a,b){b=a.getLayer(b);for(var c=a.layers[b].bodies.length;c--;)a.layers[b].bodies[c].destroy();a.layers[b].bodies.length=[]},convertTilemap:function(a,b,c,d){b=a.getLayer(b),"undefined"==typeof c&&(c=!0),"undefined"==typeof d&&(d=!0),this.clearTilemapLayerBodies(a,b);for(var e=0,f=0,g=0,h=0,i=a.layers[b].height;i>h;h++){e=0;for(var j=0,k=a.layers[b].width;k>j;j++){var l=a.layers[b].data[h][j];if(l)if(d){var m=a.getTileRight(b,j,h);if(0===e&&(f=l.x*l.width,g=l.y*l.height,e=l.width),m&&m.collides)e+=l.width;else{var n=this.createBody(f,g,0,!1);n.addRectangle(e,l.height,e/2,l.height/2,0),c&&this.addBody(n),a.layers[b].bodies.push(n),e=0}}else{var n=this.createBody(l.x*l.width,l.y*l.height,0,!1);n.addRectangle(l.width,l.height,l.width/2,l.height/2,0),c&&this.addBody(n),a.layers[b].bodies.push(n)}}}return a.layers[b].bodies},mpx:function(a){return a*=20},pxm:function(a){return.05*a},mpxi:function(a){return a*=-20},pxmi:function(a){return a*-.05}},Object.defineProperty(Phaser.Physics.P2.prototype,"friction",{get:function(){return this.world.defaultFriction},set:function(a){this.world.defaultFriction=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"restituion",{get:function(){return this.world.defaultRestitution},set:function(a){this.world.defaultRestitution=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"applySpringForces",{get:function(){return this.world.applySpringForces},set:function(a){this.world.applySpringForces=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"applyDamping",{get:function(){return this.world.applyDamping},set:function(a){this.world.applyDamping=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"applyGravity",{get:function(){return this.world.applyGravity},set:function(a){this.world.applyGravity=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"solveConstraints",{get:function(){return this.world.solveConstraints},set:function(a){this.world.solveConstraints=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"time",{get:function(){return this.world.time
}}),Object.defineProperty(Phaser.Physics.P2.prototype,"emitImpactEvent",{get:function(){return this.world.emitImpactEvent},set:function(a){this.world.emitImpactEvent=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"enableBodySleeping",{get:function(){return this.world.enableBodySleeping},set:function(a){this.world.enableBodySleeping=a}}),Object.defineProperty(Phaser.Physics.P2.prototype,"total",{get:function(){return this.world.bodies.length}}),Phaser.Physics.P2.PointProxy=function(a,b){this.world=a,this.destination=b},Phaser.Physics.P2.PointProxy.prototype.constructor=Phaser.Physics.P2.PointProxy,Object.defineProperty(Phaser.Physics.P2.PointProxy.prototype,"x",{get:function(){return this.destination[0]},set:function(a){this.destination[0]=this.world.pxm(a)}}),Object.defineProperty(Phaser.Physics.P2.PointProxy.prototype,"y",{get:function(){return this.destination[1]},set:function(a){this.destination[1]=this.world.pxm(a)}}),Phaser.Physics.P2.InversePointProxy=function(a,b){this.world=a,this.destination=b},Phaser.Physics.P2.InversePointProxy.prototype.constructor=Phaser.Physics.P2.InversePointProxy,Object.defineProperty(Phaser.Physics.P2.InversePointProxy.prototype,"x",{get:function(){return this.destination[0]},set:function(a){this.destination[0]=this.world.pxm(-a)}}),Object.defineProperty(Phaser.Physics.P2.InversePointProxy.prototype,"y",{get:function(){return this.destination[1]},set:function(a){this.destination[1]=this.world.pxm(-a)}}),Phaser.Physics.P2.Body=function(a,b,c,d,e){b=b||null,c=c||0,d=d||0,"undefined"==typeof e&&(e=1),this.game=a,this.world=a.physics.p2,this.sprite=b,this.type=Phaser.Physics.P2JS,this.offset=new Phaser.Point,this.data=new p2.Body({position:[this.world.pxmi(c),this.world.pxmi(d)],mass:e}),this.data.parent=this,this.velocity=new Phaser.Physics.P2.InversePointProxy(this.world,this.data.velocity),this.force=new Phaser.Physics.P2.InversePointProxy(this.world,this.data.force),this.gravity=new Phaser.Point,this.onImpact=new Phaser.Signal,this.onBeginContact=new Phaser.Signal,this.onEndContact=new Phaser.Signal,this.collidesWith=[],this.removeNextStep=!1,this._collideWorldBounds=!0,this._bodyCallbacks={},this._bodyCallbackContext={},this._groupCallbacks={},this._groupCallbackContext={},this.debugBody=null,b&&(this.setRectangleFromSprite(b),b.exists&&this.game.physics.p2.addBody(this))},Phaser.Physics.P2.Body.prototype={createBodyCallback:function(a,b,c){var d=-1;a.id?d=a.id:a.body&&(d=a.body.id),d>-1&&(null===b?(delete this._bodyCallbacks[d],delete this._bodyCallbackContext[d]):(this._bodyCallbacks[d]=b,this._bodyCallbackContext[d]=c))},createGroupCallback:function(a,b,c){null===b?(delete this._groupCallbacks[a.mask],delete this._groupCallbacksContext[a.mask]):(this._groupCallbacks[a.mask]=b,this._groupCallbackContext[a.mask]=c)},getCollisionMask:function(){var a=0;this._collideWorldBounds&&(a=this.game.physics.p2.boundsCollisionGroup.mask);for(var b=0;b<this.collidesWith.length;b++)a|=this.collidesWith[b].mask;return a},updateCollisionMask:function(a){var b=this.getCollisionMask();if("undefined"==typeof a)for(var c=this.data.shapes.length-1;c>=0;c--)this.data.shapes[c].collisionMask=b;else a.collisionMask=b},setCollisionGroup:function(a,b){var c=this.getCollisionMask();if("undefined"==typeof b)for(var d=this.data.shapes.length-1;d>=0;d--)this.data.shapes[d].collisionGroup=a.mask,this.data.shapes[d].collisionMask=c;else b.collisionGroup=a.mask,b.collisionMask=c},clearCollision:function(a,b,c){if("undefined"==typeof c)for(var d=this.data.shapes.length-1;d>=0;d--)a&&(this.data.shapes[d].collisionGroup=null),b&&(this.data.shapes[d].collisionMask=null);else a&&(c.collisionGroup=null),b&&(c.collisionMask=null);a&&(this.collidesWith.length=0)},collides:function(a,b,c,d){if(Array.isArray(a))for(var e=0;e<a.length;e++)-1===this.collidesWith.indexOf(a[e])&&(this.collidesWith.push(a[e]),b&&this.createGroupCallback(a[e],b,c));else-1===this.collidesWith.indexOf(a)&&(this.collidesWith.push(a),b&&this.createGroupCallback(a,b,c));var f=this.getCollisionMask();if("undefined"==typeof d)for(var e=this.data.shapes.length-1;e>=0;e--)this.data.shapes[e].collisionMask=f;else d.collisionMask=f},adjustCenterOfMass:function(){this.data.adjustCenterOfMass()},applyDamping:function(a){this.data.applyDamping(a)},applyForce:function(a,b,c){this.data.applyForce(a,[this.world.pxm(b),this.world.pxm(c)])},setZeroForce:function(){this.data.setZeroForce()},setZeroRotation:function(){this.data.angularVelocity=0},setZeroVelocity:function(){this.data.velocity[0]=0,this.data.velocity[1]=0},setZeroDamping:function(){this.data.damping=0,this.data.angularDamping=0},toLocalFrame:function(a,b){return this.data.toLocalFrame(a,b)},toWorldFrame:function(a,b){return this.data.toWorldFrame(a,b)},rotateLeft:function(a){this.data.angularVelocity=this.world.pxm(-a)},rotateRight:function(a){this.data.angularVelocity=this.world.pxm(a)},moveForward:function(a){var b=this.world.pxmi(-a),c=this.data.angle+Math.PI/2;this.data.velocity[0]=b*Math.cos(c),this.data.velocity[1]=b*Math.sin(c)},moveBackward:function(a){var b=this.world.pxmi(-a),c=this.data.angle+Math.PI/2;this.data.velocity[0]=-(b*Math.cos(c)),this.data.velocity[1]=-(b*Math.sin(c))},thrust:function(a){var b=this.world.pxmi(-a),c=this.data.angle+Math.PI/2;this.data.force[0]+=b*Math.cos(c),this.data.force[1]+=b*Math.sin(c)},reverse:function(a){var b=this.world.pxmi(-a),c=this.data.angle+Math.PI/2;this.data.force[0]-=b*Math.cos(c),this.data.force[1]-=b*Math.sin(c)},moveLeft:function(a){this.data.velocity[0]=this.world.pxmi(-a)},moveRight:function(a){this.data.velocity[0]=this.world.pxmi(a)},moveUp:function(a){this.data.velocity[1]=this.world.pxmi(-a)},moveDown:function(a){this.data.velocity[1]=this.world.pxmi(a)},preUpdate:function(){this.removeNextStep&&(this.removeFromWorld(),this.removeNextStep=!1)},postUpdate:function(){this.sprite.x=this.world.mpxi(this.data.position[0]),this.sprite.y=this.world.mpxi(this.data.position[1]),this.fixedRotation||(this.sprite.rotation=this.data.angle)},reset:function(a,b,c,d){"undefined"==typeof c&&(c=!1),"undefined"==typeof d&&(d=!1),this.setZeroForce(),this.setZeroVelocity(),this.setZeroRotation(),c&&this.setZeroDamping(),d&&(this.mass=1),this.x=a,this.y=b},addToWorld:function(){this.data.world!==this.game.physics.p2.world&&this.game.physics.p2.addBody(this)},removeFromWorld:function(){this.data.world===this.game.physics.p2.world&&this.game.physics.p2.removeBodyNextStep(this)},destroy:function(){this.removeFromWorld(),this.clearShapes(),this._bodyCallbacks={},this._bodyCallbackContext={},this._groupCallbacks={},this._groupCallbackContext={},this.debugBody&&this.debugBody.destroy(),this.debugBody=null,this.sprite=null},clearShapes:function(){for(var a=this.data.shapes.length;a--;)this.data.removeShape(this.data.shapes[a]);this.shapeChanged()},addShape:function(a,b,c,d){return"undefined"==typeof b&&(b=0),"undefined"==typeof c&&(c=0),"undefined"==typeof d&&(d=0),this.data.addShape(a,[this.world.pxmi(b),this.world.pxmi(c)],d),this.shapeChanged(),a},addCircle:function(a,b,c,d){var e=new p2.Circle(this.world.pxm(a));return this.addShape(e,b,c,d)},addRectangle:function(a,b,c,d,e){var f=new p2.Rectangle(this.world.pxm(a),this.world.pxm(b));return this.addShape(f,c,d,e)},addPlane:function(a,b,c){var d=new p2.Plane;return this.addShape(d,a,b,c)},addParticle:function(a,b,c){var d=new p2.Particle;return this.addShape(d,a,b,c)},addLine:function(a,b,c,d){var e=new p2.Line(this.world.pxm(a));return this.addShape(e,b,c,d)},addCapsule:function(a,b,c,d,e){var f=new p2.Capsule(this.world.pxm(a),b);return this.addShape(f,c,d,e)},addPolygon:function(a,b){a=a||{},b=Array.prototype.slice.call(arguments,1);var c=[];if(1===b.length&&Array.isArray(b[0]))c=b[0].slice(0);else if(Array.isArray(b[0]))c=b[0].slice(0);else if("number"==typeof b[0])for(var d=0,e=b.length;e>d;d+=2)c.push([b[d],b[d+1]]);var f=c.length-1;c[f][0]===c[0][0]&&c[f][1]===c[0][1]&&c.pop();for(var g=0;g<c.length;g++)c[g][0]=this.world.pxmi(c[g][0]),c[g][1]=this.world.pxmi(c[g][1]);var h=this.data.fromPolygon(c,a);return this.shapeChanged(),h},removeShape:function(a){return this.data.removeShape(a)},setCircle:function(a,b,c,d){this.clearShapes(),this.addCircle(a,b,c,d)},setRectangle:function(a,b,c,d,e){return"undefined"==typeof a&&(a=16),"undefined"==typeof b&&(b=16),this.clearShapes(),this.addRectangle(a,b,c,d,e)},setRectangleFromSprite:function(a){return"undefined"==typeof a&&(a=this.sprite),this.clearShapes(),this.addRectangle(a.width,a.height,0,0,a.rotation)},setMaterial:function(a,b){if("undefined"==typeof b)for(var c=this.data.shapes.length-1;c>=0;c--)this.data.shapes[c].material=a;else b.material=a},shapeChanged:function(){this.debugBody&&this.debugBody.draw()},addPhaserPolygon:function(a,b){for(var c=this.game.cache.getPhysicsData(a,b),d=[],e=0;e<c.length;e++){var f=c[e],g=this.addFixture(f);d[f.filter.group]=d[f.filter.group]||[],d[f.filter.group].push(g)}return this.data.aabbNeedsUpdate=!0,this.shapeChanged(),d},addFixture:function(a){var b=[];if(a.circle){var c=new p2.Circle(this.world.pxm(a.circle.radius));c.collisionGroup=a.filter.categoryBits,c.collisionMask=a.filter.maskBits,c.sensor=a.isSensor;var d=p2.vec2.create();d[0]=this.world.pxmi(a.circle.position[0]-this.sprite.width/2),d[1]=this.world.pxmi(a.circle.position[1]-this.sprite.height/2),this.data.addShape(c,d),b.push(c)}else for(var e=a.polygons,f=p2.vec2.create(),g=0;g<e.length;g++){for(var h=e[g],i=[],j=0;j<h.length;j+=2)i.push([this.world.pxmi(h[j]),this.world.pxmi(h[j+1])]);for(var c=new p2.Convex(i),k=0;k!==c.vertices.length;k++){var l=c.vertices[k];p2.vec2.sub(l,l,c.centerOfMass)}p2.vec2.scale(f,c.centerOfMass,1),f[0]-=this.world.pxmi(this.sprite.width/2),f[1]-=this.world.pxmi(this.sprite.height/2),c.updateTriangles(),c.updateCenterOfMass(),c.updateBoundingRadius(),c.collisionGroup=a.filter.categoryBits,c.collisionMask=a.filter.maskBits,c.sensor=a.isSensor,this.data.addShape(c,f),b.push(c)}return b},loadPolygon:function(a,b,c){var d=this.game.cache.getPhysicsData(a,b);if(1===d.length){for(var e=[],f=d[d.length-1],g=0,h=f.shape.length;h>g;g+=2)e.push([f.shape[g],f.shape[g+1]]);return this.addPolygon(c,e)}for(var i=p2.vec2.create(),g=0;g<d.length;g++){for(var j=[],k=0;k<d[g].shape.length;k+=2)j.push([this.world.pxmi(d[g].shape[k]),this.world.pxmi(d[g].shape[k+1])]);for(var l=new p2.Convex(j),m=0;m!==l.vertices.length;m++){var n=l.vertices[m];p2.vec2.sub(n,n,l.centerOfMass)}p2.vec2.scale(i,l.centerOfMass,1),i[0]-=this.world.pxmi(this.sprite.width/2),i[1]-=this.world.pxmi(this.sprite.height/2),l.updateTriangles(),l.updateCenterOfMass(),l.updateBoundingRadius(),this.data.addShape(l,i)}return this.data.aabbNeedsUpdate=!0,this.shapeChanged(),!0},loadData:function(a,b,c){var d=this.game.cache.getPhysicsData(a,b);d&&d.shape&&(this.mass=d.density,this.loadPolygon(a,b,c))}},Phaser.Physics.P2.Body.prototype.constructor=Phaser.Physics.P2.Body,Phaser.Physics.P2.Body.DYNAMIC=1,Phaser.Physics.P2.Body.STATIC=2,Phaser.Physics.P2.Body.KINEMATIC=4,Object.defineProperty(Phaser.Physics.P2.Body.prototype,"static",{get:function(){return this.data.motionState===Phaser.Physics.P2.Body.STATIC},set:function(a){a&&this.data.motionState!==Phaser.Physics.P2.Body.STATIC?(this.data.motionState=Phaser.Physics.P2.Body.STATIC,this.mass=0):a||this.data.motionState!==Phaser.Physics.P2.Body.STATIC||(this.data.motionState=Phaser.Physics.P2.Body.DYNAMIC,0===this.mass&&(this.mass=1))}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"dynamic",{get:function(){return this.data.motionState===Phaser.Physics.P2.Body.DYNAMIC},set:function(a){a&&this.data.motionState!==Phaser.Physics.P2.Body.DYNAMIC?(this.data.motionState=Phaser.Physics.P2.Body.DYNAMIC,0===this.mass&&(this.mass=1)):a||this.data.motionState!==Phaser.Physics.P2.Body.DYNAMIC||(this.data.motionState=Phaser.Physics.P2.Body.STATIC,this.mass=0)}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"kinematic",{get:function(){return this.data.motionState===Phaser.Physics.P2.Body.KINEMATIC},set:function(a){a&&this.data.motionState!==Phaser.Physics.P2.Body.KINEMATIC?(this.data.motionState=Phaser.Physics.P2.Body.KINEMATIC,this.mass=4):a||this.data.motionState!==Phaser.Physics.P2.Body.KINEMATIC||(this.data.motionState=Phaser.Physics.P2.Body.STATIC,this.mass=0)}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"allowSleep",{get:function(){return this.data.allowSleep},set:function(a){a!==this.data.allowSleep&&(this.data.allowSleep=a)}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"angle",{get:function(){return Phaser.Math.wrapAngle(Phaser.Math.radToDeg(this.data.angle))},set:function(a){this.data.angle=Phaser.Math.degToRad(Phaser.Math.wrapAngle(a))}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"angularDamping",{get:function(){return this.data.angularDamping},set:function(a){this.data.angularDamping=a}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"angularForce",{get:function(){return this.data.angularForce},set:function(a){this.data.angularForce=a}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"angularVelocity",{get:function(){return this.data.angularVelocity},set:function(a){this.data.angularVelocity=a}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"damping",{get:function(){return this.data.damping},set:function(a){this.data.damping=a}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"fixedRotation",{get:function(){return this.data.fixedRotation},set:function(a){a!==this.data.fixedRotation&&(this.data.fixedRotation=a)}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"inertia",{get:function(){return this.data.inertia},set:function(a){this.data.inertia=a}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"mass",{get:function(){return this.data.mass},set:function(a){a!==this.data.mass&&(this.data.mass=a,this.data.updateMassProperties())}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"motionState",{get:function(){return this.data.motionState},set:function(a){a!==this.data.motionState&&(this.data.motionState=a)}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"rotation",{get:function(){return this.data.angle},set:function(a){this.data.angle=a}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"sleepSpeedLimit",{get:function(){return this.data.sleepSpeedLimit},set:function(a){this.data.sleepSpeedLimit=a}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"x",{get:function(){return this.world.mpxi(this.data.position[0])},set:function(a){this.data.position[0]=this.world.pxmi(a)}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"y",{get:function(){return this.world.mpxi(this.data.position[1])},set:function(a){this.data.position[1]=this.world.pxmi(a)}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"id",{get:function(){return this.data.id}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"debug",{get:function(){return!this.debugBody},set:function(a){a&&!this.debugBody?this.debugBody=new Phaser.Physics.P2.BodyDebug(this.game,this.data):!a&&this.debugBody&&(this.debugBody.destroy(),this.debugBody=null)}}),Object.defineProperty(Phaser.Physics.P2.Body.prototype,"collideWorldBounds",{get:function(){return this._collideWorldBounds},set:function(a){a&&!this._collideWorldBounds?(this._collideWorldBounds=!0,this.updateCollisionMask()):!a&&this._collideWorldBounds&&(this._collideWorldBounds=!1,this.updateCollisionMask())}}),Phaser.Physics.P2.BodyDebug=function(a,b,c){Phaser.Group.call(this,a);var d={pixelsPerLengthUnit:20,debugPolygons:!1,lineWidth:1,alpha:.5};this.settings=Phaser.Utils.extend(d,c),this.ppu=this.settings.pixelsPerLengthUnit,this.ppu=-1*this.ppu,this.body=b,this.canvas=new Phaser.Graphics(a),this.canvas.alpha=this.settings.alpha,this.add(this.canvas),this.draw()},Phaser.Physics.P2.BodyDebug.prototype=Object.create(Phaser.Group.prototype),Phaser.Physics.P2.BodyDebug.prototype.constructor=Phaser.Physics.P2.BodyDebug,Phaser.Utils.extend(Phaser.Physics.P2.BodyDebug.prototype,{update:function(){this.updateSpriteTransform()},updateSpriteTransform:function(){return this.position.x=this.body.position[0]*this.ppu,this.position.y=this.body.position[1]*this.ppu,this.rotation=this.body.angle},draw:function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;if(h=this.body,j=this.canvas,j.clear(),c=parseInt(this.randomPastelHex(),16),f=16711680,g=this.lineWidth,h instanceof p2.Body&&h.shapes.length){var p=h.shapes.length;for(d=0;d!==p;){if(b=h.shapes[d],i=h.shapeOffsets[d],a=h.shapeAngles[d],i=i||0,a=a||0,b instanceof p2.Circle)this.drawCircle(j,i[0]*this.ppu,i[1]*this.ppu,a,b.radius*this.ppu,c,g);else if(b instanceof p2.Convex){for(l=[],m=p2.vec2.create(),e=n=0,o=b.vertices.length;o>=0?o>n:n>o;e=o>=0?++n:--n)k=b.vertices[e],p2.vec2.rotate(m,k,a),l.push([(m[0]+i[0])*this.ppu,-(m[1]+i[1])*this.ppu]);this.drawConvex(j,l,b.triangles,f,c,g,this.settings.debugPolygons,[i[0]*this.ppu,-i[1]*this.ppu])}else b instanceof p2.Plane?this.drawPlane(j,i[0]*this.ppu,-i[1]*this.ppu,c,f,5*g,10*g,10*g,100*this.ppu,a):b instanceof p2.Line?this.drawLine(j,b.length*this.ppu,f,g):b instanceof p2.Rectangle&&this.drawRectangle(j,i[0]*this.ppu,-i[1]*this.ppu,a,b.width*this.ppu,b.height*this.ppu,f,c,g);d++}}},drawRectangle:function(a,b,c,d,e,f,g,h,i){"undefined"==typeof i&&(i=1),"undefined"==typeof g&&(g=0),a.lineStyle(i,g,1),a.beginFill(h),a.drawRect(b-e/2,c-f/2,e,f)},drawCircle:function(a,b,c,d,e,f,g){"undefined"==typeof g&&(g=1),"undefined"==typeof f&&(f=16777215),a.lineStyle(g,0,1),a.beginFill(f,1),a.drawCircle(b,c,-e),a.endFill(),a.moveTo(b,c),a.lineTo(b+e*Math.cos(-d),c+e*Math.sin(-d))},drawLine:function(a,b,c,d){"undefined"==typeof d&&(d=1),"undefined"==typeof c&&(c=0),a.lineStyle(5*d,c,1),a.moveTo(-b/2,0),a.lineTo(b/2,0)},drawConvex:function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s;if("undefined"==typeof f&&(f=1),"undefined"==typeof d&&(d=0),g){for(i=[16711680,65280,255],j=0;j!==b.length+1;)l=b[j%b.length],m=b[(j+1)%b.length],o=l[0],r=l[1],p=m[0],s=m[1],a.lineStyle(f,i[j%i.length],1),a.moveTo(o,-r),a.lineTo(p,-s),a.drawCircle(o,-r,2*f),j++;return a.lineStyle(f,0,1),a.drawCircle(h[0],h[1],2*f)}for(a.lineStyle(f,d,1),a.beginFill(e),j=0;j!==b.length;)k=b[j],n=k[0],q=k[1],0===j?a.moveTo(n,-q):a.lineTo(n,-q),j++;return a.endFill(),b.length>2?(a.moveTo(b[b.length-1][0],-b[b.length-1][1]),a.lineTo(b[0][0],-b[0][1])):void 0},drawPath:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r;for("undefined"==typeof e&&(e=1),"undefined"==typeof c&&(c=0),a.lineStyle(e,c,1),"number"==typeof d&&a.beginFill(d),h=null,i=null,g=0;g<b.length;)p=b[g],q=p[0],r=p[1],(q!==h||r!==i)&&(0===g?a.moveTo(q,r):(j=h,k=i,l=q,m=r,n=b[(g+1)%b.length][0],o=b[(g+1)%b.length][1],f=(l-j)*(o-k)-(n-j)*(m-k),0!==f&&a.lineTo(q,r)),h=q,i=r),g++;"number"==typeof d&&a.endFill(),b.length>2&&"number"==typeof d&&(a.moveTo(b[b.length-1][0],b[b.length-1][1]),a.lineTo(b[0][0],b[0][1]))},drawPlane:function(a,b,c,d,e,f,g,h,i,j){var k,l,m;"undefined"==typeof f&&(f=1),"undefined"==typeof d&&(d=16777215),a.lineStyle(f,e,11),a.beginFill(d),k=i,a.moveTo(b,-c),l=b+Math.cos(j)*this.game.width,m=c+Math.sin(j)*this.game.height,a.lineTo(l,-m),a.moveTo(b,-c),l=b+Math.cos(j)*-this.game.width,m=c+Math.sin(j)*-this.game.height,a.lineTo(l,-m)},randomPastelHex:function(){var a,b,c,d;return c=[255,255,255],d=Math.floor(256*Math.random()),b=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),d=Math.floor((d+3*c[0])/4),b=Math.floor((b+3*c[1])/4),a=Math.floor((a+3*c[2])/4),this.rgbToHex(d,b,a)},rgbToHex:function(a,b,c){return this.componentToHex(a)+this.componentToHex(b)+this.componentToHex(c)},componentToHex:function(a){var b;return b=a.toString(16),2===b.len?b:b+"0"}}),Phaser.Physics.P2.Spring=function(a,b,c,d,e,f,g,h,i,j){this.game=a.game,this.world=a,"undefined"==typeof d&&(d=1),"undefined"==typeof e&&(e=100),"undefined"==typeof f&&(f=1),d=a.pxm(d);var k={restLength:d,stiffness:e,damping:f};"undefined"!=typeof g&&null!==g&&(k.worldAnchorA=[a.pxm(g[0]),a.pxm(g[1])]),"undefined"!=typeof h&&null!==h&&(k.worldAnchorB=[a.pxm(h[0]),a.pxm(h[1])]),"undefined"!=typeof i&&null!==i&&(k.localAnchorA=[a.pxm(i[0]),a.pxm(i[1])]),"undefined"!=typeof j&&null!==j&&(k.localAnchorB=[a.pxm(j[0]),a.pxm(j[1])]),p2.Spring.call(this,b,c,k)},Phaser.Physics.P2.Spring.prototype=Object.create(p2.Spring.prototype),Phaser.Physics.P2.Spring.prototype.constructor=Phaser.Physics.P2.Spring,Phaser.Physics.P2.Material=function(a){this.name=a,p2.Material.call(this)},Phaser.Physics.P2.Material.prototype=Object.create(p2.Material.prototype),Phaser.Physics.P2.Material.prototype.constructor=Phaser.Physics.P2.Material,Phaser.Physics.P2.ContactMaterial=function(a,b,c){p2.ContactMaterial.call(this,a,b,c)},Phaser.Physics.P2.ContactMaterial.prototype=Object.create(p2.ContactMaterial.prototype),Phaser.Physics.P2.ContactMaterial.prototype.constructor=Phaser.Physics.P2.ContactMaterial,Phaser.Physics.P2.CollisionGroup=function(a){this.mask=a},Phaser.Physics.P2.DistanceConstraint=function(a,b,c,d,e){"undefined"==typeof d&&(d=100),this.game=a.game,this.world=a,d=a.pxm(d),p2.DistanceConstraint.call(this,b,c,d,e)},Phaser.Physics.P2.DistanceConstraint.prototype=Object.create(p2.DistanceConstraint.prototype),Phaser.Physics.P2.DistanceConstraint.prototype.constructor=Phaser.Physics.P2.DistanceConstraint,Phaser.Physics.P2.GearConstraint=function(a,b,c,d,e){"undefined"==typeof d&&(d=0),"undefined"==typeof e&&(e=1),this.game=a.game,this.world=a;var f={angle:d,ratio:e};p2.GearConstraint.call(this,b,c,f)},Phaser.Physics.P2.GearConstraint.prototype=Object.create(p2.GearConstraint.prototype),Phaser.Physics.P2.GearConstraint.prototype.constructor=Phaser.Physics.P2.GearConstraint,Phaser.Physics.P2.LockConstraint=function(a,b,c,d,e,f){"undefined"==typeof d&&(d=[0,0]),"undefined"==typeof e&&(e=0),"undefined"==typeof f&&(f=Number.MAX_VALUE),this.game=a.game,this.world=a,d=[a.pxm(d[0]),a.pxm(d[1])];var g={localOffsetB:d,localAngleB:e,maxForce:f};p2.LockConstraint.call(this,b,c,g)},Phaser.Physics.P2.LockConstraint.prototype=Object.create(p2.LockConstraint.prototype),Phaser.Physics.P2.LockConstraint.prototype.constructor=Phaser.Physics.P2.LockConstraint,Phaser.Physics.P2.PrismaticConstraint=function(a,b,c,d,e,f,g,h){"undefined"==typeof d&&(d=!0),"undefined"==typeof e&&(e=[0,0]),"undefined"==typeof f&&(f=[0,0]),"undefined"==typeof g&&(g=[0,0]),"undefined"==typeof h&&(h=Number.MAX_VALUE),this.game=a.game,this.world=a,e=[a.pxmi(e[0]),a.pxmi(e[1])],f=[a.pxmi(f[0]),a.pxmi(f[1])];var i={localAnchorA:e,localAnchorB:f,localAxisA:g,maxForce:h,disableRotationalLock:!d};p2.PrismaticConstraint.call(this,b,c,i)},Phaser.Physics.P2.PrismaticConstraint.prototype=Object.create(p2.PrismaticConstraint.prototype),Phaser.Physics.P2.PrismaticConstraint.prototype.constructor=Phaser.Physics.P2.PrismaticConstraint,Phaser.Physics.P2.RevoluteConstraint=function(a,b,c,d,e,f){"undefined"==typeof f&&(f=Number.MAX_VALUE),this.game=a.game,this.world=a,c=[a.pxmi(c[0]),a.pxmi(c[1])],e=[a.pxmi(e[0]),a.pxmi(e[1])],p2.RevoluteConstraint.call(this,b,c,d,e,f)},Phaser.Physics.P2.RevoluteConstraint.prototype=Object.create(p2.RevoluteConstraint.prototype),Phaser.Physics.P2.RevoluteConstraint.prototype.constructor=Phaser.Physics.P2.RevoluteConstraint;
//# sourceMappingURL=phaser.map
!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.io=e():"undefined"!=typeof global?global.io=e():"undefined"!=typeof self&&(self.io=e())}(function(){var define,module,exports;
return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

module.exports = require('./lib/');

},{"./lib/":2}],2:[function(require,module,exports){

/**
 * Module dependencies.
 */

var url = require('./url');
var parser = require('socket.io-parser');
var Manager = require('./manager');
var debug = require('debug')('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup(uri, opts) {
  if (typeof uri == 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var href = parsed.href;
  var id = parsed.id;
  var io;

  if (opts.forceNew || false === opts.multiplex) {
    debug('ignoring socket cache for %s', href);
    io = Manager(href, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', href);
      cache[id] = Manager(href, opts);
    }
    io = cache[id];
  }

  return io.socket(parsed.path);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = require('./manager');
exports.Socket = require('./socket');

},{"./manager":3,"./socket":5,"./url":6,"debug":9,"socket.io-parser":39}],3:[function(require,module,exports){

/**
 * Module dependencies.
 */

var url = require('./url');
var eio = require('engine.io-client');
var Socket = require('./socket');
var Emitter = require('emitter');
var parser = require('socket.io-parser');
var on = require('./on');
var bind = require('bind');
var object = require('object-component');
var debug = require('debug')('socket.io-client:manager');

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager(uri, opts){
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if ('object' == typeof uri) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connected = 0;
  this.attempts = 0;
  this.encoding = false;
  this.packetBuffer = [];
  this.encoder = new parser.Encoder();
  this.decoder = new parser.Decoder();
  this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function(v){
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function(v){
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function(v){
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function(v){
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function(v){
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function() {
  if (!this.openReconnect && !this.reconnecting && this._reconnection) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.openReconnect = true;
    this.reconnect();
  }
};


/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function(fn){
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';

  // emit `open`
  var openSub = on(socket, 'open', function() {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function(data){
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emit('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    }

    self.maybeReconnectOnOpen();
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function(){
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emit('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function(){
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function(){
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function(data){
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function(packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function(err){
  debug('error', err);
  this.emit('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function(nsp){
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connect', function(){
      self.connected++;
    });
  }
  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function(socket){
  --this.connected || this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function(packet){
  debug('writing packet %j', packet);
  var self = this;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function(encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i]);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function() {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function(){
  var sub;
  while (sub = this.subs.shift()) sub.destroy();

  this.packetBuffer = [];
  this.encoding = false;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function(){
  this.skipReconnect = true;
  this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function(reason){
  debug('close');
  this.cleanup();
  this.readyState = 'closed';
  this.emit('close', reason);
  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function(){
  if (this.reconnecting) return this;

  var self = this;
  this.attempts++;

  if (this.attempts > this._reconnectionAttempts) {
    debug('reconnect failed');
    this.emit('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.attempts * this.reconnectionDelay();
    delay = Math.min(delay, this.reconnectionDelayMax());
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function(){
      debug('attempting reconnect');
      self.emit('reconnect_attempt');
      self.open(function(err){
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emit('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function(){
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function(){
  var attempt = this.attempts;
  this.attempts = 0;
  this.reconnecting = false;
  this.emit('reconnect', attempt);
};

},{"./on":4,"./socket":5,"./url":6,"bind":8,"debug":9,"emitter":10,"engine.io-client":11,"object-component":36,"socket.io-parser":39}],4:[function(require,module,exports){

/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function(){
      obj.removeListener(ev, fn);
    }
  };
}

},{}],5:[function(require,module,exports){

/**
 * Module dependencies.
 */

var parser = require('socket.io-parser');
var Emitter = require('emitter');
var toArray = require('to-array');
var on = require('./on');
var bind = require('bind');
var debug = require('debug')('socket.io-client:socket');
var hasBin = require('has-binary-data');
var indexOf = require('indexof');

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  disconnect: 1,
  error: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket(io, nsp){
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.open();
  this.buffer = [];
  this.connected = false;
  this.disconnected = true;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.open =
Socket.prototype.connect = function(){
  if (this.connected) return this;
  var io = this.io;
  io.open(); // ensure open
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'error', bind(this, 'onerror')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
  if ('open' == this.io.readyState) this.onopen();
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function(){
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function(ev){
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var parserType = parser.EVENT; // default
  if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
  var packet = { type: parserType, data: args };

  // event ack callback
  if ('function' == typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  this.packet(packet);

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function(packet){
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon `error`.
 *
 * @param {Object} data
 * @api private
 */

Socket.prototype.onerror = function(data){
  this.emit('error', data);
};

/**
 * "Opens" the socket.
 *
 * @api private
 */

Socket.prototype.onopen = function(){
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' != this.nsp) {
    this.packet({ type: parser.CONNECT });
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function(reason){
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function(packet){
  if (packet.nsp != this.nsp) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function(packet){
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.buffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function(id){
  var self = this;
  var sent = false;
  return function(){
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);
    self.packet({
      type: parser.ACK,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function(packet){
  debug('calling ack %s with %j', packet.id, packet.data);
  var fn = this.acks[packet.id];
  fn.apply(this, packet.data);
  delete this.acks[packet.id];
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function(){
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events.
 *
 * @api private
 */

Socket.prototype.emitBuffered = function(){
  for (var i = 0; i < this.buffer.length; i++) {
    emit.apply(this, this.buffer[i]);
  }
  this.buffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function(){
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function(){
  // clean subscriptions to avoid reconnections
  for (var i = 0; i < this.subs.length; i++) {
    this.subs[i].destroy();
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function(){
  if (!this.connected) return this;

  debug('performing disconnect (%s)', this.nsp);
  this.packet({ type: parser.DISCONNECT });

  // remove socket from pool
  this.destroy();

  // fire events
  this.onclose('io client disconnect');
  return this;
};

},{"./on":4,"bind":8,"debug":9,"emitter":10,"has-binary-data":31,"indexof":35,"socket.io-parser":39,"to-array":42}],6:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
/**
 * Module dependencies.
 */

var parseuri = require('parseuri');
var debug = require('debug')('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url(uri, loc){
  var obj = uri;

  // default to window.location
  var loc = loc || global.location;
  if (null == uri) uri = loc.protocol + '//' + loc.hostname;

  // relative path support
  if ('string' == typeof uri) {
    if ('/' == uri.charAt(0)) {
      if ('undefined' != typeof loc) {
        uri = loc.hostname + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' != typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if ((/(http|ws)/.test(obj.protocol) && 80 == obj.port) ||
     (/(http|ws)s/.test(obj.protocol) && 443 == obj.port)) {
    delete obj.port;
  }

  obj.path = obj.path || '/';

  // define unique id
  obj.id = obj.protocol + obj.host + (obj.port ? (':' + obj.port) : '');

  // define href
  obj.href = obj.protocol + '://' + obj.host + (obj.port ? (':' + obj.port) : '');

  return obj;
}

},{"debug":9,"parseuri":37}],7:[function(require,module,exports){
/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(chars){
  "use strict";

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.buffer.byteLength, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes.buffer[i] >> 2];
      base64 += chars[((bytes.buffer[i] & 3) << 4) | (bytes.buffer[i + 1] >> 4)];
      base64 += chars[((bytes.buffer[i + 1] & 15) << 2) | (bytes.buffer[i + 2] >> 6)];
      base64 += chars[bytes.buffer[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = chars.indexOf(base64[i]);
      encoded2 = chars.indexOf(base64[i+1]);
      encoded3 = chars.indexOf(base64[i+2]);
      encoded4 = chars.indexOf(base64[i+3]);

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
},{}],8:[function(require,module,exports){

/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = [].slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};

},{}],9:[function(require,module,exports){

/**
 * Expose `debug()` as the module.
 */

module.exports = debug;

/**
 * Create a debugger with the given `name`.
 *
 * @param {String} name
 * @return {Type}
 * @api public
 */

function debug(name) {
  if (!debug.enabled(name)) return function(){};

  return function(fmt){
    fmt = coerce(fmt);

    var curr = new Date;
    var ms = curr - (debug[name] || curr);
    debug[name] = curr;

    fmt = name
      + ' '
      + fmt
      + ' +' + debug.humanize(ms);

    // This hackery is required for IE8
    // where `console.log` doesn't have 'apply'
    window.console
      && console.log
      && Function.prototype.apply.call(console.log, console, arguments);
  }
}

/**
 * The currently active debug mode names.
 */

debug.names = [];
debug.skips = [];

/**
 * Enables a debug mode by name. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} name
 * @api public
 */

debug.enable = function(name) {
  try {
    localStorage.debug = name;
  } catch(e){}

  var split = (name || '').split(/[\s,]+/)
    , len = split.length;

  for (var i = 0; i < len; i++) {
    name = split[i].replace('*', '.*?');
    if (name[0] === '-') {
      debug.skips.push(new RegExp('^' + name.substr(1) + '$'));
    }
    else {
      debug.names.push(new RegExp('^' + name + '$'));
    }
  }
};

/**
 * Disable debug output.
 *
 * @api public
 */

debug.disable = function(){
  debug.enable('');
};

/**
 * Humanize the given `ms`.
 *
 * @param {Number} m
 * @return {String}
 * @api private
 */

debug.humanize = function(ms) {
  var sec = 1000
    , min = 60 * 1000
    , hour = 60 * min;

  if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
  if (ms >= min) return (ms / min).toFixed(1) + 'm';
  if (ms >= sec) return (ms / sec | 0) + 's';
  return ms + 'ms';
};

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

debug.enabled = function(name) {
  for (var i = 0, len = debug.skips.length; i < len; i++) {
    if (debug.skips[i].test(name)) {
      return false;
    }
  }
  for (var i = 0, len = debug.names.length; i < len; i++) {
    if (debug.names[i].test(name)) {
      return true;
    }
  }
  return false;
};

/**
 * Coerce `val`.
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

// persist

try {
  if (window.localStorage) debug.enable(localStorage.debug);
} catch(e){}

},{}],10:[function(require,module,exports){

/**
 * Module dependencies.
 */

var index = require('indexof');

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  fn._off = on;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var i = index(callbacks, fn._off || fn);
  if (~i) callbacks.splice(i, 1);
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{"indexof":35}],11:[function(require,module,exports){

module.exports =  require('./lib/');

},{"./lib/":13}],12:[function(require,module,exports){

/**
 * Module dependencies.
 */

var Emitter = require('emitter');

/**
 * Module exports.
 */

module.exports = Emitter;

/**
 * Compatibility with `WebSocket#addEventListener`.
 *
 * @api public
 */

Emitter.prototype.addEventListener = Emitter.prototype.on;

/**
 * Compatibility with `WebSocket#removeEventListener`.
 *
 * @api public
 */

Emitter.prototype.removeEventListener = Emitter.prototype.off;

/**
 * Node-compatible `EventEmitter#removeListener`
 *
 * @api public
 */

Emitter.prototype.removeListener = Emitter.prototype.off;

},{"emitter":10}],13:[function(require,module,exports){

module.exports = require('./socket');

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = require('engine.io-parser');

},{"./socket":14,"engine.io-parser":24}],14:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};/**
 * Module dependencies.
 */

var util = require('./util');
var transports = require('./transports');
var Emitter = require('./emitter');
var debug = require('debug')('engine.io-client:socket');
var index = require('indexof');
var parser = require('engine.io-parser');
var parseuri = require('parseuri');
var parsejson = require('parsejson');

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Noop function.
 *
 * @api private
 */

function noop(){}

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket(uri, opts){
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' == typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.host = uri.host;
    opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  }

  this.secure = null != opts.secure ? opts.secure :
    (global.location && 'https:' == location.protocol);

  if (opts.host) {
    var pieces = opts.host.split(':');
    opts.hostname = pieces.shift();
    if (pieces.length) opts.port = pieces.pop();
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (global.location ? location.hostname : 'localhost');
  this.port = opts.port || (global.location && location.port ?
       location.port :
       (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' == typeof this.query) this.query = util.qsParse(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.forceBase64 = !!opts.forceBase64;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.flashPath = opts.flashPath || '';
  this.transports = opts.transports || ['polling', 'websocket', 'flashsocket'];
  this.readyState = '';
  this.writeBuffer = [];
  this.callbackBuffer = [];
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.open();
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = require('./transport');
Socket.Emitter = require('./emitter');
Socket.transports = require('./transports');
Socket.util = require('./util');
Socket.parser = require('engine.io-parser');

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    agent: this.agent,
    hostname: this.hostname,
    port: this.port,
    secure: this.secure,
    path: this.path,
    query: query,
    forceJSONP: this.forceJSONP,
    forceBase64: this.forceBase64,
    timestampRequests: this.timestampRequests,
    timestampParam: this.timestampParam,
    flashPath: this.flashPath,
    policyPort: this.policyPort,
    socket: this
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
    transport = 'websocket';
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';
  var transport = this.createTransport(transport);
  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function(transport){
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function(){
    self.onDrain();
  })
  .on('packet', function(packet){
    self.onPacket(packet);
  })
  .on('error', function(e){
    self.onError(e);
  })
  .on('close', function(){
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 })
    , failed = false
    , self = this;

  Socket.priorWebsocketSuccess = false;

  transport.once('open', function () {
    if (this.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' == msg.type && 'probe' == msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        Socket.priorWebsocketSuccess = 'websocket' == transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' == self.readyState || 'closing' == self.readyState) {
            return;
          }
          debug('changing transport and sending upgrade packet');
          transport.removeListener('error', onerror);
          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  });

  transport.once('error', onerror);
  function onerror(err) {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    transport.close();
    transport = null;

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  transport.open();

  this.once('close', function () {
    if (transport) {
      debug('socket closed prematurely - aborting probe');
      failed = true;
      transport.close();
      transport = null;
    }
  });

  this.once('upgrading', function (to) {
    if (transport && to.name != transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      transport.close();
      transport = null;
    }
  });
};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
  this.emit('open');
  this.onopen && this.onopen.call(this);
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' == this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(parsejson(packet.data));
        break;

      case 'pong':
        this.setPing();
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.emit('error', err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        var event = { data: packet.data };
        event.toString = function () {
          return packet.data;
        };

        this.onmessage && this.onmessage.call(this, event);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' == self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api public
*/

Socket.prototype.ping = function () {
  this.sendPacket('ping');
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function() {
  for (var i = 0; i < this.prevBufferLen; i++) {
    if (this.callbackBuffer[i]) {
      this.callbackBuffer[i]();
    }
  }

  this.writeBuffer.splice(0, this.prevBufferLen);
  this.callbackBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (this.writeBuffer.length == 0) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' != this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, fn) {
  this.sendPacket('message', msg, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, fn) {
  var packet = { type: type, data: data };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  this.callbackBuffer.push(fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    this.onClose('forced close');
    debug('socket closing - telling transport to close');
    this.transport.close();
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onerror && this.onerror.call(this, err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // clean buffers in next tick, so developers can still
    // grab the buffers on `close` event
    setTimeout(function() {
      self.writeBuffer = [];
      self.callbackBuffer = [];
      self.prevBufferLen = 0;
    }, 0);

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);
    this.onclose && this.onclose.call(this);
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i<j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};

},{"./emitter":12,"./transport":15,"./transports":17,"./util":22,"debug":9,"engine.io-parser":24,"indexof":35,"parsejson":29,"parseuri":37}],15:[function(require,module,exports){
/**
 * Module dependencies.
 */

var util = require('./util');
var parser = require('engine.io-parser');
var Emitter = require('./emitter');

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' == this.readyState || '' == this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function(packets){
  if ('open' == this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function (data) {
  this.onPacket(parser.decodePacket(data, this.socket.binaryType));
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

},{"./emitter":12,"./util":22,"engine.io-parser":24}],16:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
/**
 * Module dependencies.
 */

var WS = require('./websocket');
var util = require('../util');
var debug = require('debug')('engine.io-client:flashsocket');

/**
 * Module exports.
 */

module.exports = FlashWS;

/**
 * Obfuscated key for Blue Coat.
 */

var xobject = global[['Active'].concat('Object').join('X')];

/**
 * FlashWS constructor.
 *
 * @api public
 */

function FlashWS(options){
  WS.call(this, options);
  this.flashPath = options.flashPath;
  this.policyPort = options.policyPort;
}

/**
 * Inherits from WebSocket.
 */

util.inherits(FlashWS, WS);

/**
 * Transport name.
 *
 * @api public
 */

FlashWS.prototype.name = 'flashsocket';

/*
 * FlashSockets only support binary as base64 encoded strings
 */

FlashWS.prototype.supportsBinary = false;

/**
 * Opens the transport.
 *
 * @api public
 */

FlashWS.prototype.doOpen = function(){
  if (!this.check()) {
    // let the probe timeout
    return;
  }

  // instrument websocketjs logging
  function log(type){
    return function(){
      var str = Array.prototype.join.call(arguments, ' ');
      debug('[websocketjs %s] %s', type, str);
    };
  }

  global.WEB_SOCKET_LOGGER = { log: log('debug'), error: log('error') };
  global.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR = true;
  global.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true;

  if (!global.WEB_SOCKET_SWF_LOCATION) {
    global.WEB_SOCKET_SWF_LOCATION = this.flashPath + 'WebSocketMainInsecure.swf';
  }

  // dependencies
  var deps = [this.flashPath + 'web_socket.js'];

  if (!global.swfobject) {
    deps.unshift(this.flashPath + 'swfobject.js');
  }

  var self = this;

  load(deps, function(){
    self.ready(function(){
      WebSocket.__addTask(function () {
        self.ws = new WebSocket(self.uri());
        self.addEventListeners();
      });
    });
  });
};

/**
 * Override to prevent closing uninitialized flashsocket.
 *
 * @api private
 */

FlashWS.prototype.doClose = function(){
  if (!this.ws) return;
  var self = this;
  WebSocket.__addTask(function(){
    WS.prototype.doClose.call(self);
  });
};

/**
 * Writes to the Flash socket.
 *
 * @api private
 */

FlashWS.prototype.write = function(){
  var self = this, args = arguments;
  WebSocket.__addTask(function(){
    WS.prototype.write.apply(self, args);
  });
};

/**
 * Called upon dependencies are loaded.
 *
 * @api private
 */

FlashWS.prototype.ready = function(fn){
  if (typeof WebSocket == 'undefined' ||
    !('__initialize' in WebSocket) || !global.swfobject) {
    return;
  }

  if (global.swfobject.getFlashPlayerVersion().major < 10) {
    return;
  }

  function init () {
    // only start downloading the swf file when
    // we checked that this browser actually supports it
    if (!FlashWS.loaded) {
      if (843 != self.policyPort) {
        var policy = 'xmlsocket://' + self.hostname + ':' + self.policyPort;
        WebSocket.loadFlashPolicyFile(policy);
      }

      WebSocket.__initialize();
      FlashWS.loaded = true;
    }

    fn.call(self);
  }

  var self = this;
  if (document.body) {
    return init();
  }

  util.load(init);
};

/**
 * Feature detection for flashsocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

FlashWS.prototype.check = function(){
  if ('undefined' == typeof window) {
    return false;
  }

  if (typeof WebSocket != 'undefined' && !('__initialize' in WebSocket)) {
    return false;
  }

  if (xobject) {
    var control = null;
    try {
      control = new xobject('ShockwaveFlash.ShockwaveFlash');
    } catch (e) { }
    if (control) {
      return true;
    }
  } else {
    for (var i = 0, l = navigator.plugins.length; i < l; i++) {
      for (var j = 0, m = navigator.plugins[i].length; j < m; j++) {
        if (navigator.plugins[i][j].description == 'Shockwave Flash') {
          return true;
        }
      }
    }
  }

  return false;
};

/**
 * Lazy loading of scripts.
 * Based on $script by Dustin Diaz - MIT
 */

var scripts = {};

/**
 * Injects a script. Keeps tracked of injected ones.
 *
 * @param {String} path
 * @param {Function} callback
 * @api private
 */

function create(path, fn){
  if (scripts[path]) return fn();

  var el = document.createElement('script');
  var loaded = false;

  debug('loading "%s"', path);
  el.onload = el.onreadystatechange = function(){
    if (loaded || scripts[path]) return;
    var rs = el.readyState;
    if (!rs || 'loaded' == rs || 'complete' == rs) {
      debug('loaded "%s"', path);
      el.onload = el.onreadystatechange = null;
      loaded = true;
      scripts[path] = true;
      fn();
    }
  };

  el.async = 1;
  el.src = path;

  var head = document.getElementsByTagName('head')[0];
  head.insertBefore(el, head.firstChild);
}

/**
 * Loads scripts and fires a callback.
 *
 * @param {Array} paths
 * @param {Function} callback
 */

function load(arr, fn){
  function process(i){
    if (!arr[i]) return fn();
    create(arr[i], function () {
      process(++i);
    });
  }

  process(0);
}

},{"../util":22,"./websocket":21,"debug":9}],17:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
/**
 * Module dependencies
 */

var XMLHttpRequest = require('xmlhttprequest')
  , XHR = require('./polling-xhr')
  , JSONP = require('./polling-jsonp')
  , websocket = require('./websocket')
  , flashsocket = require('./flashsocket')

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;
exports.flashsocket = flashsocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling (opts) {
  var xhr
    , xd = false;

  if (global.location) {
    var isSSL = 'https:' == location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname != location.hostname || port != opts.port;
  }

  opts.xdomain = xd;
  xhr = new XMLHttpRequest(opts);

  if (xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    return new JSONP(opts);
  }
};

},{"./flashsocket":16,"./polling-jsonp":18,"./polling-xhr":19,"./websocket":21,"xmlhttprequest":23}],18:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
/**
 * Module requirements.
 */

var Polling = require('./polling');
var util = require('../util');

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Callbacks count.
 */

var index = 0;

/**
 * Noop.
 */

function empty () { }

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    if (!global.___eio) global.___eio = [];
    callbacks = global.___eio;
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;
}

/**
 * Inherits from Polling.
 */

util.inherits(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
	var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function(e){
    self.onError('jsonp poll error',e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  insertAt.parentNode.insertBefore(script, insertAt);
  this.script = script;


  if (util.ua.gecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="'+ self.iframeId +'">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch(e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function(){
      if (self.iframe.readyState == 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

},{"../util":22,"./polling":20}],19:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};/**
 * Module requirements.
 */

var XMLHttpRequest = require('xmlhttprequest');
var Polling = require('./polling');
var util = require('../util');
var Emitter = require('../emitter');
var debug = require('debug')('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Obfuscated key for Blue Coat.
 */

var hasAttachEvent = global.document && global.document.attachEvent;

/**
 * Empty function
 */

function empty(){}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR(opts){
  Polling.call(this, opts);

  if (global.location) {
    var isSSL = 'https:' == location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = opts.hostname != global.location.hostname ||
      port != opts.port;
  }
}

/**
 * Inherits from Polling.
 */

util.inherits(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function(opts){
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function(data, fn){
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function(err){
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function(){
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function(data){
    self.onData(data);
  });
  req.on('error', function(err){
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request(opts){
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.async = false !== opts.async;
  this.data = undefined != opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.create(opts.isBinary, opts.supportsBinary);
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function(isBinary, supportsBinary){
  var xhr = this.xhr = new XMLHttpRequest({ agent: this.agent, xdomain: this.xd });
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    if (supportsBinary) {
      // This has to be done after open because Firefox is stupid
      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
      xhr.responseType = 'arraybuffer';
    }

    if ('POST' == this.method) {
      try {
        if (isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    xhr.onreadystatechange = function(){
      var data;

      try {
        if (4 != xhr.readyState) return;
        if (200 == xhr.status || 1223 == xhr.status) {
          var contentType = xhr.getResponseHeader('Content-Type');
          if (contentType === 'application/octet-stream') {
            data = xhr.response;
          } else {
            if (!supportsBinary) {
              data = xhr.responseText;
            } else {
              data = 'ok';
            }
          }
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function(){
            self.onError(xhr.status);
          }, 0);
        }
      } catch (e) {
        self.onError(e);
      }

      if (null != data) {
        self.onData(data);
      }
    };

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function() {
      self.onError(e);
    }, 0);
    return;
  }

  if (hasAttachEvent) {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function(){
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function(data){
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function(err){
  this.emit('error', err);
  this.cleanup();
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function(){
  if ('undefined' == typeof this.xhr ) {
    return;
  }
  // xmlhttprequest
  this.xhr.onreadystatechange = empty;

  try {
    this.xhr.abort();
  } catch(e) {}

  if (hasAttachEvent) {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function(){
  this.cleanup();
};

/**
 * Cleanup is needed for old versions of IE
 * that leak memory unless we abort request before unload.
 */

if (hasAttachEvent) {
  Request.requestsCount = 0;
  Request.requests = {};

  function unloadHandler() {
    for (var i in Request.requests) {
      if (Request.requests.hasOwnProperty(i)) {
        Request.requests[i].abort();
      }
    }
  }

  global.attachEvent('onunload', unloadHandler);
}

},{"../emitter":12,"../util":22,"./polling":20,"debug":9,"xmlhttprequest":23}],20:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};/**
 * Module dependencies.
 */

var Transport = require('../transport');
var util = require('../util');
var parser = require('engine.io-parser');
var debug = require('debug')('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function() {
  var XMLHttpRequest = require('xmlhttprequest');
  var xhr = new XMLHttpRequest({ agent: this.agent, xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling(opts){
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

util.inherits(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function(){
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function(onPause){
  var pending = 0;
  var self = this;

  this.readyState = 'pausing';

  function pause(){
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function(){
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function(){
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function(){
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function(data){
  var self = this;
  debug('polling got data %s', data);
  var callback = function(packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' == self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' == packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' != this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' == this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function(){
  var self = this;

  function close(){
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' == this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function(packets){
  var self = this;
  this.writable = false;
  var callbackfn = function() {
    self.writable = true;
    self.emit('drain');
  };

  var self = this;
  parser.encodePayload(packets, this.supportsBinary, function(data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function(){
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced for IE / android / iOS6 ಠ_ಠ
  if ('ActiveXObject' in global
    || util.ua.chromeframe
    || util.ua.android
    || util.ua.ios6
    || this.timestampRequests) {
    if (false !== this.timestampRequests) {
      query[this.timestampParam] = +new Date;
    }
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = util.qs(query);

  // avoid port if default for schema
  if (this.port && (('https' == schema && this.port != 443) ||
     ('http' == schema && this.port != 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  return schema + '://' + this.hostname + port + this.path + query;
};

},{"../transport":15,"../util":22,"debug":9,"engine.io-parser":24,"xmlhttprequest":23}],21:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Transport = require('../transport');
var parser = require('engine.io-parser');
var util = require('../util');
var debug = require('debug')('engine.io-client:websocket');

/**
 * `ws` exposes a WebSocket-compatible interface in
 * Node, or the `WebSocket` or `MozWebSocket` globals
 * in the browser.
 */

var WebSocket = require('ws');

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS(opts){
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

util.inherits(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function(){
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var self = this;
  var uri = this.uri();
  var protocols = void(0);
  var opts = { agent: this.agent };

  this.ws = new WebSocket(uri, protocols, opts);

  if (this.ws.binaryType !== undefined) {
    this.supportsBinary = false;
  }

  this.ws.binaryType = 'arraybuffer';
  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function(){
  var self = this;

  this.ws.onopen = function(){
    self.onOpen();
  };
  this.ws.onclose = function(){
    self.onClose();
  };
  this.ws.onmessage = function(ev){
    self.onData(ev.data);
  };
  this.ws.onerror = function(e){
    self.onError('websocket error', e);
  };
};

/**
 * Override `onData` to use a timer on iOS.
 * See: https://gist.github.com/mloughran/2052006
 *
 * @api private
 */

if ('undefined' != typeof navigator
  && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
  WS.prototype.onData = function(data){
    var self = this;
    setTimeout(function(){
      Transport.prototype.onData.call(self, data);
    }, 0);
  };
}

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function(packets){
  var self = this;
  this.writable = false;
  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  for (var i = 0, l = packets.length; i < l; i++) {
    parser.encodePacket(packets[i], this.supportsBinary, function(data) {
      self.ws.send(data);
    });
  }

  function ondrain() {
    self.writable = true;
    self.emit('drain');
  }
  // fake drain
  // defer to next tick to allow Socket to clear writeBuffer
  setTimeout(ondrain, 0);
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function(){
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function(){
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function(){
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' == schema && this.port != 443)
    || ('ws' == schema && this.port != 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = +new Date;
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = util.qs(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  return schema + '://' + this.hostname + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function(){
  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
};

},{"../transport":15,"../util":22,"debug":9,"engine.io-parser":24,"ws":30}],22:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
/**
 * Status of page load.
 */

var pageLoaded = false;

/**
 * Inheritance.
 *
 * @param {Function} ctor a
 * @param {Function} ctor b
 * @api private
 */

exports.inherits = function inherits (a, b) {
  function c () { }
  c.prototype = b.prototype;
  a.prototype = new c;
};

/**
 * Object.keys
 */

exports.keys = Object.keys || function (obj) {
  var ret = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      ret.push(i);
    }
  }

  return ret;
};

/**
 * Adds an event.
 *
 * @api private
 */

exports.on = function (element, event, fn, capture) {
  if (element.attachEvent) {
    element.attachEvent('on' + event, fn);
  } else if (element.addEventListener) {
    element.addEventListener(event, fn, capture);
  }
};

/**
 * Load utility.
 *
 * @api private
 */

exports.load = function (fn) {
  if (global.document && document.readyState === 'complete' || pageLoaded) {
    return fn();
  }

  exports.on(global, 'load', fn, false);
};

/**
 * Change the internal pageLoaded value.
 */

if ('undefined' != typeof window) {
  exports.load(function () {
    pageLoaded = true;
  });
}

/**
 * UA / engines detection namespace.
 *
 * @namespace
 */

exports.ua = {};

/**
 * Detect webkit.
 *
 * @api private
 */

exports.ua.webkit = 'undefined' != typeof navigator &&
  /webkit/i.test(navigator.userAgent);

/**
 * Detect gecko.
 *
 * @api private
 */

exports.ua.gecko = 'undefined' != typeof navigator &&
  /gecko/i.test(navigator.userAgent);

/**
 * Detect android;
 */

exports.ua.android = 'undefined' != typeof navigator &&
  /android/i.test(navigator.userAgent);

/**
 * Detect iOS.
 */

exports.ua.ios = 'undefined' != typeof navigator &&
  /^(iPad|iPhone|iPod)$/.test(navigator.platform);
exports.ua.ios6 = exports.ua.ios && /OS 6_/.test(navigator.userAgent);

/**
 * Detect Chrome Frame.
 */

exports.ua.chromeframe = Boolean(global.externalHost);

/**
 * Compiles a querystring
 *
 * @param {Object}
 * @api private
 */

exports.qs = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring.
 *
 * @param {String} qs
 * @api private
 */

exports.qsParse = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};

},{}],23:[function(require,module,exports){
// browser shim for xmlhttprequest module
var hasCORS = require('has-cors');

module.exports = function(opts) {
  var xdomain = opts.xdomain;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch(e) { }
  }
}

},{"has-cors":33}],24:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};/**
 * Module dependencies.
 */

var keys = require('./keys');
var sliceBuffer = require('arraybuffer.slice');
var base64encoder = require('base64-arraybuffer');
var after = require('after');

/**
 * Current protocol version.
 */

exports.protocol = 2;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = require('blob');

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, callback) {
  if (typeof supportsBinary == 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (Blob && data instanceof Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += String(packet.data);
  }

  return callback('' + encoded);

};

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    packet.data = fr.result;
    exports.encodePacket(packet, supportsBinary, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (Blob && packet.data instanceof Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += global.btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType) {
  // String data
  if (typeof data == 'string' || data === undefined) {
    if (data.charAt(0) == 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!global.ArrayBuffer) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary == 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  if (supportsBinary) {
    if (Blob) {
      return exports.encodePayloadAsBlob(packets, callback);
    }
    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, supportsBinary, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data != 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data == '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = ''
    , n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (':' != chr) {
      length += chr;
    } else {
      if ('' == length || (length != (n = Number(length)))) {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

      msg = data.substr(i + 1, n);

      if (length != msg.length) {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

      if (msg.length) {
        packet = exports.decodePacket(msg, binaryType);

        if (err.type == packet.type && err.data == packet.data) {
          // parser error in individual packet - ignoring payload
          return callback(err, 0, 1);
        }

        var ret = callback(packet, i + n, l);
        if (false === ret) return;
      }

      // advance cursor
      i += n;
      length = '';
    }
  }

  if (length != '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';
    for (var i = 1; ; i++) {
      if (tailArray[i] == 255) break;
      msgLength += tailArray[i];
    }
    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        var basic = new Array(typed.length);
        for (var i = 0; i < typed.length; i++) {
          basic[i] = typed[i];
        }
        msg = String.fromCharCode.apply(null, basic);
      }
    }
    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType), i, total);
  });
};

},{"./keys":25,"after":26,"arraybuffer.slice":27,"base64-arraybuffer":7,"blob":28}],25:[function(require,module,exports){

/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};

},{}],26:[function(require,module,exports){
module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}

},{}],27:[function(require,module,exports){
/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};

},{}],28:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = global.BlobBuilder
  || global.WebKitBlobBuilder
  || global.MSBlobBuilder
  || global.MozBlobBuilder;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var b = new Blob(['hi']);
    return b.size == 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  for (var i = 0; i < ary.length; i++) {
    bb.append(ary[i]);
  }
  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

module.exports = (function() {
  if (blobSupported) {
    return global.Blob;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();

},{}],29:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};/**
 * JSON parse.
 *
 * @see Based on jQuery#parseJSON (MIT) and JSON2
 * @api private
 */

var rvalidchars = /^[\],:{}\s]*$/;
var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
var rtrimLeft = /^\s+/;
var rtrimRight = /\s+$/;

module.exports = function parsejson(data) {
  if ('string' != typeof data || !data) {
    return null;
  }

  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

  // Attempt to parse using the native JSON parser first
  if (global.JSON && JSON.parse) {
    return JSON.parse(data);
  }

  if (rvalidchars.test(data.replace(rvalidescape, '@')
      .replace(rvalidtokens, ']')
      .replace(rvalidbraces, ''))) {
    return (new Function('return ' + data))();
  }
};
},{}],30:[function(require,module,exports){

/**
 * Module dependencies.
 */

var global = (function() { return this; })();

/**
 * WebSocket constructor.
 */

var WebSocket = global.WebSocket || global.MozWebSocket;

/**
 * Module exports.
 */

module.exports = WebSocket ? ws : null;

/**
 * WebSocket constructor.
 *
 * The third `opts` options object gets ignored in web browsers, since it's
 * non-standard, and throws a TypeError if passed to the constructor.
 * See: https://github.com/einaros/ws/issues/227
 *
 * @param {String} uri
 * @param {Array} protocols (optional)
 * @param {Object) opts (optional)
 * @api public
 */

function ws(uri, protocols, opts) {
  var instance;
  if (protocols) {
    instance = new WebSocket(uri, protocols);
  } else {
    instance = new WebSocket(uri);
  }
  return instance;
}

if (WebSocket) ws.prototype = WebSocket.prototype;

},{}],31:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};/*
 * Module requirements.
 */

var isArray = require('isarray');

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Right now only Buffer and ArrayBuffer are supported..
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(data) {

  function recursiveCheckForBinary(obj) { 
    if (!obj) return false;

    if ( (global.Buffer && Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
         (global.Blob && obj instanceof Blob) ||
         (global.File && obj instanceof File)
        ) {
      return true;
    }

    if (isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
          if (recursiveCheckForBinary(obj[i])) {
              return true;
          }
      }
    } else if (obj && 'object' == typeof obj) {
      for (var key in obj) {
        if (recursiveCheckForBinary(obj[key])) {
          return true;
        }
      }
    }

    return false;
  }

  return recursiveCheckForBinary(data);
}

},{"isarray":32}],32:[function(require,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],33:[function(require,module,exports){

/**
 * Module dependencies.
 */

var global = require('global');

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = 'XMLHttpRequest' in global &&
    'withCredentials' in new global.XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

},{"global":34}],34:[function(require,module,exports){

/**
 * Returns `this`. Execute this without a "context" (i.e. without it being
 * attached to an object of the left-hand side), and `this` points to the
 * "global" scope of the current JS execution.
 */

module.exports = (function () { return this; })();

},{}],35:[function(require,module,exports){

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],36:[function(require,module,exports){

/**
 * HOP ref.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Return own keys in `obj`.
 *
 * @param {Object} obj
 * @return {Array}
 * @api public
 */

exports.keys = Object.keys || function(obj){
  var keys = [];
  for (var key in obj) {
    if (has.call(obj, key)) {
      keys.push(key);
    }
  }
  return keys;
};

/**
 * Return own values in `obj`.
 *
 * @param {Object} obj
 * @return {Array}
 * @api public
 */

exports.values = function(obj){
  var vals = [];
  for (var key in obj) {
    if (has.call(obj, key)) {
      vals.push(obj[key]);
    }
  }
  return vals;
};

/**
 * Merge `b` into `a`.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api public
 */

exports.merge = function(a, b){
  for (var key in b) {
    if (has.call(b, key)) {
      a[key] = b[key];
    }
  }
  return a;
};

/**
 * Return length of `obj`.
 *
 * @param {Object} obj
 * @return {Number}
 * @api public
 */

exports.length = function(obj){
  return exports.keys(obj).length;
};

/**
 * Check if `obj` is empty.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api public
 */

exports.isEmpty = function(obj){
  return 0 == exports.length(obj);
};
},{}],37:[function(require,module,exports){
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host'
  , 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
  var m = re.exec(str || '')
    , uri = {}
    , i = 14;

  while (i--) {
    uri[parts[i]] = m[i] || '';
  }

  return uri;
};

},{}],38:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};/**
 * Modle requirements
 */

var isArray = require('isarray');

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet) {
    var buffers = [];
    var packetData = packet.data;

    function deconstructBinPackRecursive(data) {
        if (!data) return data;

        if ((global.Buffer && Buffer.isBuffer(data)) ||
            (global.ArrayBuffer && data instanceof ArrayBuffer)) { // replace binary
            var placeholder = {_placeholder: true, num: buffers.length};
            buffers.push(data);
            return placeholder;
        } else if (isArray(data)) {
            var newData = new Array(data.length);
            for (var i = 0; i < data.length; i++) {
                newData[i] = deconstructBinPackRecursive(data[i]);
            }
            return newData;
        } else if ('object' == typeof data) {
            var newData = {};
            for (var key in data) {
                newData[key] = deconstructBinPackRecursive(data[key]);
            }
            return newData;
        }
        return data;
    }

    var pack = packet;
    pack.data = deconstructBinPackRecursive(packetData);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return {packet: pack, buffers: buffers};
}

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

 exports.reconstructPacket = function(packet, buffers) {
    var curPlaceHolder = 0;

    function reconstructBinPackRecursive(data) {
        if (data._placeholder) {
            var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
            return buf;
        } else if (isArray(data)) {
            for (var i = 0; i < data.length; i++) {
                data[i] = reconstructBinPackRecursive(data[i]);
            }
            return data;
        } else if ('object' == typeof data) {
            for (var key in data) {
                data[key] = reconstructBinPackRecursive(data[key]);
            }
            return data;
        }
        return data;
    }

    packet.data = reconstructBinPackRecursive(packet.data);
    packet.attachments = undefined; // no longer useful
    return packet;
 }

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {

  function removeBlobsRecursive(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((global.Blob && obj instanceof Blob) ||
        (global.File && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    }

    if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        removeBlobsRecursive(obj[i], i, obj);
      }
    } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
      for (var key in obj) {
        removeBlobsRecursive(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  removeBlobsRecursive(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
}

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */
function isBuf(obj) {
  return (global.Buffer && Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer);
}

},{"isarray":40}],39:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
/**
 * Module dependencies.
 */

var debug = require('debug')('socket.io-parser');
var json = require('json3');
var isArray = require('isarray');
var Emitter = require('emitter');
var binary = require('./binary');

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 1;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'BINARY_EVENT',
  'ACK',
  'ERROR'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

exports.Encoder = Encoder

/**
 * A socket.io Encoder instance
 *
 * @api public
 */
function Encoder() {};

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  debug('encoding packet %j', obj);

  if (obj.type == exports.BINARY_EVENT) {
    encodeAsBinary(obj, callback);
  }
  else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {
  var str = '';
  var nsp = false;

  // first is type
  str += obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT == obj.type) {
    str += obj.attachments;
    str += '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' != obj.nsp) {
    nsp = true;
    str += obj.nsp;
  }

  // immediately followed by the id
  if (null != obj.id) {
    if (nsp) {
      str += ',';
      nsp = false;
    }
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    if (nsp) str += ',';
    str += json.stringify(obj.data);
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

exports.Decoder = Decoder

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if ('string' == typeof obj) {
    packet = decodeString(obj);
    if (packet.type == exports.BINARY_EVENT) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  }
  else if ((global.Buffer && Buffer.isBuffer(obj)) ||
            (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
            obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  }
  else {
    throw new Error('Unknown type: ' + obj);
  }
}

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var p = {};
  var i = 0;

  // look up type
  p.type = Number(str.charAt(0));
  if (null == exports.types[p.type]) return error();

  // look up attachments if type binary
  if (exports.BINARY_EVENT == p.type) {
    p.attachments = '';
    while (str.charAt(++i) != '-') {
      p.attachments += str.charAt(i);
    }
    p.attachments = Number(p.attachments);
  }

  // look up namespace (if any)
  if ('/' == str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' == c) break;
      p.nsp += c;
      if (i + 1 == str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' != next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i + 1 == str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    try {
      p.data = json.parse(str.substr(i));
    } catch(e){
      return error();
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
};

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
}

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
}

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
}

function error(data){
  return {
    type: exports.ERROR,
    data: 'parser error'
  };
}

},{"./binary":38,"debug":9,"emitter":10,"isarray":40,"json3":41}],40:[function(require,module,exports){
module.exports=require(32)
},{}],41:[function(require,module,exports){
/*! JSON v3.2.6 | http://bestiejs.github.io/json3 | Copyright 2012-2013, Kit Cambridge | http://kit.mit-license.org */
;(function (window) {
  // Convenience aliases.
  var getClass = {}.toString, isProperty, forEach, undef;

  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader = typeof define === "function" && define.amd;

  // Detect native implementations.
  var nativeJSON = typeof JSON == "object" && JSON;

  // Set up the JSON 3 namespace, preferring the CommonJS `exports` object if
  // available.
  var JSON3 = typeof exports == "object" && exports && !exports.nodeType && exports;

  if (JSON3 && nativeJSON) {
    // Explicitly delegate to the native `stringify` and `parse`
    // implementations in CommonJS environments.
    JSON3.stringify = nativeJSON.stringify;
    JSON3.parse = nativeJSON.parse;
  } else {
    // Export for web browsers, JavaScript engines, and asynchronous module
    // loaders, using the global `JSON` object if available.
    JSON3 = window.JSON = nativeJSON || {};
  }

  // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
  var isExtended = new Date(-3509827334573292);
  try {
    // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
    // results for certain dates in Opera >= 10.53.
    isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
      // Safari < 2.0.2 stores the internal millisecond time value correctly,
      // but clips the values returned by the date methods to the range of
      // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
      isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
  } catch (exception) {}

  // Internal: Determines whether the native `JSON.stringify` and `parse`
  // implementations are spec-compliant. Based on work by Ken Snyder.
  function has(name) {
    if (has[name] !== undef) {
      // Return cached feature test result.
      return has[name];
    }

    var isSupported;
    if (name == "bug-string-char-index") {
      // IE <= 7 doesn't support accessing string characters using square
      // bracket notation. IE 8 only supports this for primitives.
      isSupported = "a"[0] != "a";
    } else if (name == "json") {
      // Indicates whether both `JSON.stringify` and `JSON.parse` are
      // supported.
      isSupported = has("json-stringify") && has("json-parse");
    } else {
      var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
      // Test `JSON.stringify`.
      if (name == "json-stringify") {
        var stringify = JSON3.stringify, stringifySupported = typeof stringify == "function" && isExtended;
        if (stringifySupported) {
          // A test function object with a custom `toJSON` method.
          (value = function () {
            return 1;
          }).toJSON = value;
          try {
            stringifySupported =
              // Firefox 3.1b1 and b2 serialize string, number, and boolean
              // primitives as object literals.
              stringify(0) === "0" &&
              // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
              // literals.
              stringify(new Number()) === "0" &&
              stringify(new String()) == '""' &&
              // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
              // does not define a canonical JSON representation (this applies to
              // objects with `toJSON` properties as well, *unless* they are nested
              // within an object or array).
              stringify(getClass) === undef &&
              // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
              // FF 3.1b3 pass this test.
              stringify(undef) === undef &&
              // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
              // respectively, if the value is omitted entirely.
              stringify() === undef &&
              // FF 3.1b1, 2 throw an error if the given value is not a number,
              // string, array, object, Boolean, or `null` literal. This applies to
              // objects with custom `toJSON` methods as well, unless they are nested
              // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
              // methods entirely.
              stringify(value) === "1" &&
              stringify([value]) == "[1]" &&
              // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
              // `"[null]"`.
              stringify([undef]) == "[null]" &&
              // YUI 3.0.0b1 fails to serialize `null` literals.
              stringify(null) == "null" &&
              // FF 3.1b1, 2 halts serialization if an array contains a function:
              // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
              // elides non-JSON values from objects and arrays, unless they
              // define custom `toJSON` methods.
              stringify([undef, getClass, null]) == "[null,null,null]" &&
              // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
              // where character escape codes are expected (e.g., `\b` => `\u0008`).
              stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
              // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
              stringify(null, value) === "1" &&
              stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
              // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
              // serialize extended years.
              stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
              // The milliseconds are optional in ES 5, but required in 5.1.
              stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
              // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
              // four-digit years instead of six-digit years. Credits: @Yaffle.
              stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
              // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
              // values less than 1000. Credits: @Yaffle.
              stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
          } catch (exception) {
            stringifySupported = false;
          }
        }
        isSupported = stringifySupported;
      }
      // Test `JSON.parse`.
      if (name == "json-parse") {
        var parse = JSON3.parse;
        if (typeof parse == "function") {
          try {
            // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
            // Conforming implementations should also coerce the initial argument to
            // a string prior to parsing.
            if (parse("0") === 0 && !parse(false)) {
              // Simple parsing test.
              value = parse(serialized);
              var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
              if (parseSupported) {
                try {
                  // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                  parseSupported = !parse('"\t"');
                } catch (exception) {}
                if (parseSupported) {
                  try {
                    // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                    // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                    // certain octal literals.
                    parseSupported = parse("01") !== 1;
                  } catch (exception) {}
                }
                if (parseSupported) {
                  try {
                    // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                    // points. These environments, along with FF 3.1b1 and 2,
                    // also allow trailing commas in JSON objects and arrays.
                    parseSupported = parse("1.") !== 1;
                  } catch (exception) {}
                }
              }
            }
          } catch (exception) {
            parseSupported = false;
          }
        }
        isSupported = parseSupported;
      }
    }
    return has[name] = !!isSupported;
  }

  if (!has("json")) {
    // Common `[[Class]]` name aliases.
    var functionClass = "[object Function]";
    var dateClass = "[object Date]";
    var numberClass = "[object Number]";
    var stringClass = "[object String]";
    var arrayClass = "[object Array]";
    var booleanClass = "[object Boolean]";

    // Detect incomplete support for accessing string characters by index.
    var charIndexBuggy = has("bug-string-char-index");

    // Define additional utility methods if the `Date` methods are buggy.
    if (!isExtended) {
      var floor = Math.floor;
      // A mapping between the months of the year and the number of days between
      // January 1st and the first of the respective month.
      var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      // Internal: Calculates the number of days between the Unix epoch and the
      // first day of the given month.
      var getDay = function (year, month) {
        return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
      };
    }

    // Internal: Determines if a property is a direct property of the given
    // object. Delegates to the native `Object#hasOwnProperty` method.
    if (!(isProperty = {}.hasOwnProperty)) {
      isProperty = function (property) {
        var members = {}, constructor;
        if ((members.__proto__ = null, members.__proto__ = {
          // The *proto* property cannot be set multiple times in recent
          // versions of Firefox and SeaMonkey.
          "toString": 1
        }, members).toString != getClass) {
          // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
          // supports the mutable *proto* property.
          isProperty = function (property) {
            // Capture and break the object's prototype chain (see section 8.6.2
            // of the ES 5.1 spec). The parenthesized expression prevents an
            // unsafe transformation by the Closure Compiler.
            var original = this.__proto__, result = property in (this.__proto__ = null, this);
            // Restore the original prototype chain.
            this.__proto__ = original;
            return result;
          };
        } else {
          // Capture a reference to the top-level `Object` constructor.
          constructor = members.constructor;
          // Use the `constructor` property to simulate `Object#hasOwnProperty` in
          // other environments.
          isProperty = function (property) {
            var parent = (this.constructor || constructor).prototype;
            return property in this && !(property in parent && this[property] === parent[property]);
          };
        }
        members = null;
        return isProperty.call(this, property);
      };
    }

    // Internal: A set of primitive types used by `isHostType`.
    var PrimitiveTypes = {
      'boolean': 1,
      'number': 1,
      'string': 1,
      'undefined': 1
    };

    // Internal: Determines if the given object `property` value is a
    // non-primitive.
    var isHostType = function (object, property) {
      var type = typeof object[property];
      return type == 'object' ? !!object[property] : !PrimitiveTypes[type];
    };

    // Internal: Normalizes the `for...in` iteration algorithm across
    // environments. Each enumerated key is yielded to a `callback` function.
    forEach = function (object, callback) {
      var size = 0, Properties, members, property;

      // Tests for bugs in the current environment's `for...in` algorithm. The
      // `valueOf` property inherits the non-enumerable flag from
      // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
      (Properties = function () {
        this.valueOf = 0;
      }).prototype.valueOf = 0;

      // Iterate over a new instance of the `Properties` class.
      members = new Properties();
      for (property in members) {
        // Ignore all properties inherited from `Object.prototype`.
        if (isProperty.call(members, property)) {
          size++;
        }
      }
      Properties = members = null;

      // Normalize the iteration algorithm.
      if (!size) {
        // A list of non-enumerable properties inherited from `Object.prototype`.
        members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
        // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
        // properties.
        forEach = function (object, callback) {
          var isFunction = getClass.call(object) == functionClass, property, length;
          var hasProperty = !isFunction && typeof object.constructor != 'function' && isHostType(object, 'hasOwnProperty') ? object.hasOwnProperty : isProperty;
          for (property in object) {
            // Gecko <= 1.0 enumerates the `prototype` property of functions under
            // certain conditions; IE does not.
            if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
              callback(property);
            }
          }
          // Manually invoke the callback for each non-enumerable property.
          for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
        };
      } else if (size == 2) {
        // Safari <= 2.0.4 enumerates shadowed properties twice.
        forEach = function (object, callback) {
          // Create a set of iterated properties.
          var members = {}, isFunction = getClass.call(object) == functionClass, property;
          for (property in object) {
            // Store each property name to prevent double enumeration. The
            // `prototype` property of functions is not enumerated due to cross-
            // environment inconsistencies.
            if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
              callback(property);
            }
          }
        };
      } else {
        // No bugs detected; use the standard `for...in` algorithm.
        forEach = function (object, callback) {
          var isFunction = getClass.call(object) == functionClass, property, isConstructor;
          for (property in object) {
            if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
              callback(property);
            }
          }
          // Manually invoke the callback for the `constructor` property due to
          // cross-environment inconsistencies.
          if (isConstructor || isProperty.call(object, (property = "constructor"))) {
            callback(property);
          }
        };
      }
      return forEach(object, callback);
    };

    // Public: Serializes a JavaScript `value` as a JSON string. The optional
    // `filter` argument may specify either a function that alters how object and
    // array members are serialized, or an array of strings and numbers that
    // indicates which properties should be serialized. The optional `width`
    // argument may be either a string or number that specifies the indentation
    // level of the output.
    if (!has("json-stringify")) {
      // Internal: A map of control characters and their escaped equivalents.
      var Escapes = {
        92: "\\\\",
        34: '\\"',
        8: "\\b",
        12: "\\f",
        10: "\\n",
        13: "\\r",
        9: "\\t"
      };

      // Internal: Converts `value` into a zero-padded string such that its
      // length is at least equal to `width`. The `width` must be <= 6.
      var leadingZeroes = "000000";
      var toPaddedString = function (width, value) {
        // The `|| 0` expression is necessary to work around a bug in
        // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
        return (leadingZeroes + (value || 0)).slice(-width);
      };

      // Internal: Double-quotes a string `value`, replacing all ASCII control
      // characters (characters with code unit values between 0 and 31) with
      // their escaped equivalents. This is an implementation of the
      // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
      var unicodePrefix = "\\u00";
      var quote = function (value) {
        var result = '"', index = 0, length = value.length, isLarge = length > 10 && charIndexBuggy, symbols;
        if (isLarge) {
          symbols = value.split("");
        }
        for (; index < length; index++) {
          var charCode = value.charCodeAt(index);
          // If the character is a control character, append its Unicode or
          // shorthand escape sequence; otherwise, append the character as-is.
          switch (charCode) {
            case 8: case 9: case 10: case 12: case 13: case 34: case 92:
              result += Escapes[charCode];
              break;
            default:
              if (charCode < 32) {
                result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                break;
              }
              result += isLarge ? symbols[index] : charIndexBuggy ? value.charAt(index) : value[index];
          }
        }
        return result + '"';
      };

      // Internal: Recursively serializes an object. Implements the
      // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
      var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
        var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
        try {
          // Necessary for host object support.
          value = object[property];
        } catch (exception) {}
        if (typeof value == "object" && value) {
          className = getClass.call(value);
          if (className == dateClass && !isProperty.call(value, "toJSON")) {
            if (value > -1 / 0 && value < 1 / 0) {
              // Dates are serialized according to the `Date#toJSON` method
              // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
              // for the ISO 8601 date time string format.
              if (getDay) {
                // Manually compute the year, month, date, hours, minutes,
                // seconds, and milliseconds if the `getUTC*` methods are
                // buggy. Adapted from @Yaffle's `date-shim` project.
                date = floor(value / 864e5);
                for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                date = 1 + date - getDay(year, month);
                // The `time` value specifies the time within the day (see ES
                // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                // to compute `A modulo B`, as the `%` operator does not
                // correspond to the `modulo` operation for negative numbers.
                time = (value % 864e5 + 864e5) % 864e5;
                // The hours, minutes, seconds, and milliseconds are obtained by
                // decomposing the time within the day. See section 15.9.1.10.
                hours = floor(time / 36e5) % 24;
                minutes = floor(time / 6e4) % 60;
                seconds = floor(time / 1e3) % 60;
                milliseconds = time % 1e3;
              } else {
                year = value.getUTCFullYear();
                month = value.getUTCMonth();
                date = value.getUTCDate();
                hours = value.getUTCHours();
                minutes = value.getUTCMinutes();
                seconds = value.getUTCSeconds();
                milliseconds = value.getUTCMilliseconds();
              }
              // Serialize extended years correctly.
              value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
                "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                // Months, dates, hours, minutes, and seconds should have two
                // digits; milliseconds should have three.
                "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                // Milliseconds are optional in ES 5.0, but required in 5.1.
                "." + toPaddedString(3, milliseconds) + "Z";
            } else {
              value = null;
            }
          } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
            // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
            // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
            // ignores all `toJSON` methods on these objects unless they are
            // defined directly on an instance.
            value = value.toJSON(property);
          }
        }
        if (callback) {
          // If a replacement function was provided, call it to obtain the value
          // for serialization.
          value = callback.call(object, property, value);
        }
        if (value === null) {
          return "null";
        }
        className = getClass.call(value);
        if (className == booleanClass) {
          // Booleans are represented literally.
          return "" + value;
        } else if (className == numberClass) {
          // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
          // `"null"`.
          return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
        } else if (className == stringClass) {
          // Strings are double-quoted and escaped.
          return quote("" + value);
        }
        // Recursively serialize objects and arrays.
        if (typeof value == "object") {
          // Check for cyclic structures. This is a linear search; performance
          // is inversely proportional to the number of unique nested objects.
          for (length = stack.length; length--;) {
            if (stack[length] === value) {
              // Cyclic structures cannot be serialized by `JSON.stringify`.
              throw TypeError();
            }
          }
          // Add the object to the stack of traversed objects.
          stack.push(value);
          results = [];
          // Save the current indentation level and indent one additional level.
          prefix = indentation;
          indentation += whitespace;
          if (className == arrayClass) {
            // Recursively serialize array elements.
            for (index = 0, length = value.length; index < length; index++) {
              element = serialize(index, value, callback, properties, whitespace, indentation, stack);
              results.push(element === undef ? "null" : element);
            }
            result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
          } else {
            // Recursively serialize object members. Members are selected from
            // either a user-specified list of property names, or the object
            // itself.
            forEach(properties || value, function (property) {
              var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
              if (element !== undef) {
                // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                // is not the empty string, let `member` {quote(property) + ":"}
                // be the concatenation of `member` and the `space` character."
                // The "`space` character" refers to the literal space
                // character, not the `space` {width} argument provided to
                // `JSON.stringify`.
                results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
              }
            });
            result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
          }
          // Remove the object from the traversed object stack.
          stack.pop();
          return result;
        }
      };

      // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
      JSON3.stringify = function (source, filter, width) {
        var whitespace, callback, properties, className;
        if (typeof filter == "function" || typeof filter == "object" && filter) {
          if ((className = getClass.call(filter)) == functionClass) {
            callback = filter;
          } else if (className == arrayClass) {
            // Convert the property names array into a makeshift set.
            properties = {};
            for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
          }
        }
        if (width) {
          if ((className = getClass.call(width)) == numberClass) {
            // Convert the `width` to an integer and create a string containing
            // `width` number of space characters.
            if ((width -= width % 1) > 0) {
              for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
            }
          } else if (className == stringClass) {
            whitespace = width.length <= 10 ? width : width.slice(0, 10);
          }
        }
        // Opera <= 7.54u2 discards the values associated with empty string keys
        // (`""`) only if they are used directly within an object member list
        // (e.g., `!("" in { "": 1})`).
        return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
      };
    }

    // Public: Parses a JSON source string.
    if (!has("json-parse")) {
      var fromCharCode = String.fromCharCode;

      // Internal: A map of escaped control characters and their unescaped
      // equivalents.
      var Unescapes = {
        92: "\\",
        34: '"',
        47: "/",
        98: "\b",
        116: "\t",
        110: "\n",
        102: "\f",
        114: "\r"
      };

      // Internal: Stores the parser state.
      var Index, Source;

      // Internal: Resets the parser state and throws a `SyntaxError`.
      var abort = function() {
        Index = Source = null;
        throw SyntaxError();
      };

      // Internal: Returns the next token, or `"$"` if the parser has reached
      // the end of the source string. A token may be a string, number, `null`
      // literal, or Boolean literal.
      var lex = function () {
        var source = Source, length = source.length, value, begin, position, isSigned, charCode;
        while (Index < length) {
          charCode = source.charCodeAt(Index);
          switch (charCode) {
            case 9: case 10: case 13: case 32:
              // Skip whitespace tokens, including tabs, carriage returns, line
              // feeds, and space characters.
              Index++;
              break;
            case 123: case 125: case 91: case 93: case 58: case 44:
              // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
              // the current position.
              value = charIndexBuggy ? source.charAt(Index) : source[Index];
              Index++;
              return value;
            case 34:
              // `"` delimits a JSON string; advance to the next character and
              // begin parsing the string. String tokens are prefixed with the
              // sentinel `@` character to distinguish them from punctuators and
              // end-of-string tokens.
              for (value = "@", Index++; Index < length;) {
                charCode = source.charCodeAt(Index);
                if (charCode < 32) {
                  // Unescaped ASCII control characters (those with a code unit
                  // less than the space character) are not permitted.
                  abort();
                } else if (charCode == 92) {
                  // A reverse solidus (`\`) marks the beginning of an escaped
                  // control character (including `"`, `\`, and `/`) or Unicode
                  // escape sequence.
                  charCode = source.charCodeAt(++Index);
                  switch (charCode) {
                    case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                      // Revive escaped control characters.
                      value += Unescapes[charCode];
                      Index++;
                      break;
                    case 117:
                      // `\u` marks the beginning of a Unicode escape sequence.
                      // Advance to the first character and validate the
                      // four-digit code point.
                      begin = ++Index;
                      for (position = Index + 4; Index < position; Index++) {
                        charCode = source.charCodeAt(Index);
                        // A valid sequence comprises four hexdigits (case-
                        // insensitive) that form a single hexadecimal value.
                        if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                          // Invalid Unicode escape sequence.
                          abort();
                        }
                      }
                      // Revive the escaped character.
                      value += fromCharCode("0x" + source.slice(begin, Index));
                      break;
                    default:
                      // Invalid escape sequence.
                      abort();
                  }
                } else {
                  if (charCode == 34) {
                    // An unescaped double-quote character marks the end of the
                    // string.
                    break;
                  }
                  charCode = source.charCodeAt(Index);
                  begin = Index;
                  // Optimize for the common case where a string is valid.
                  while (charCode >= 32 && charCode != 92 && charCode != 34) {
                    charCode = source.charCodeAt(++Index);
                  }
                  // Append the string as-is.
                  value += source.slice(begin, Index);
                }
              }
              if (source.charCodeAt(Index) == 34) {
                // Advance to the next character and return the revived string.
                Index++;
                return value;
              }
              // Unterminated string.
              abort();
            default:
              // Parse numbers and literals.
              begin = Index;
              // Advance past the negative sign, if one is specified.
              if (charCode == 45) {
                isSigned = true;
                charCode = source.charCodeAt(++Index);
              }
              // Parse an integer or floating-point value.
              if (charCode >= 48 && charCode <= 57) {
                // Leading zeroes are interpreted as octal literals.
                if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                  // Illegal octal literal.
                  abort();
                }
                isSigned = false;
                // Parse the integer component.
                for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                // Floats cannot contain a leading decimal point; however, this
                // case is already accounted for by the parser.
                if (source.charCodeAt(Index) == 46) {
                  position = ++Index;
                  // Parse the decimal component.
                  for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                  if (position == Index) {
                    // Illegal trailing decimal.
                    abort();
                  }
                  Index = position;
                }
                // Parse exponents. The `e` denoting the exponent is
                // case-insensitive.
                charCode = source.charCodeAt(Index);
                if (charCode == 101 || charCode == 69) {
                  charCode = source.charCodeAt(++Index);
                  // Skip past the sign following the exponent, if one is
                  // specified.
                  if (charCode == 43 || charCode == 45) {
                    Index++;
                  }
                  // Parse the exponential component.
                  for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                  if (position == Index) {
                    // Illegal empty exponent.
                    abort();
                  }
                  Index = position;
                }
                // Coerce the parsed value to a JavaScript number.
                return +source.slice(begin, Index);
              }
              // A negative sign may only precede numbers.
              if (isSigned) {
                abort();
              }
              // `true`, `false`, and `null` literals.
              if (source.slice(Index, Index + 4) == "true") {
                Index += 4;
                return true;
              } else if (source.slice(Index, Index + 5) == "false") {
                Index += 5;
                return false;
              } else if (source.slice(Index, Index + 4) == "null") {
                Index += 4;
                return null;
              }
              // Unrecognized token.
              abort();
          }
        }
        // Return the sentinel `$` character if the parser has reached the end
        // of the source string.
        return "$";
      };

      // Internal: Parses a JSON `value` token.
      var get = function (value) {
        var results, hasMembers;
        if (value == "$") {
          // Unexpected end of input.
          abort();
        }
        if (typeof value == "string") {
          if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
            // Remove the sentinel `@` character.
            return value.slice(1);
          }
          // Parse object and array literals.
          if (value == "[") {
            // Parses a JSON array, returning a new JavaScript array.
            results = [];
            for (;; hasMembers || (hasMembers = true)) {
              value = lex();
              // A closing square bracket marks the end of the array literal.
              if (value == "]") {
                break;
              }
              // If the array literal contains elements, the current token
              // should be a comma separating the previous element from the
              // next.
              if (hasMembers) {
                if (value == ",") {
                  value = lex();
                  if (value == "]") {
                    // Unexpected trailing `,` in array literal.
                    abort();
                  }
                } else {
                  // A `,` must separate each array element.
                  abort();
                }
              }
              // Elisions and leading commas are not permitted.
              if (value == ",") {
                abort();
              }
              results.push(get(value));
            }
            return results;
          } else if (value == "{") {
            // Parses a JSON object, returning a new JavaScript object.
            results = {};
            for (;; hasMembers || (hasMembers = true)) {
              value = lex();
              // A closing curly brace marks the end of the object literal.
              if (value == "}") {
                break;
              }
              // If the object literal contains members, the current token
              // should be a comma separator.
              if (hasMembers) {
                if (value == ",") {
                  value = lex();
                  if (value == "}") {
                    // Unexpected trailing `,` in object literal.
                    abort();
                  }
                } else {
                  // A `,` must separate each object member.
                  abort();
                }
              }
              // Leading commas are not permitted, object property names must be
              // double-quoted strings, and a `:` must separate each property
              // name and value.
              if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                abort();
              }
              results[value.slice(1)] = get(lex());
            }
            return results;
          }
          // Unexpected token encountered.
          abort();
        }
        return value;
      };

      // Internal: Updates a traversed object member.
      var update = function(source, property, callback) {
        var element = walk(source, property, callback);
        if (element === undef) {
          delete source[property];
        } else {
          source[property] = element;
        }
      };

      // Internal: Recursively traverses a parsed JSON object, invoking the
      // `callback` function for each value. This is an implementation of the
      // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
      var walk = function (source, property, callback) {
        var value = source[property], length;
        if (typeof value == "object" && value) {
          // `forEach` can't be used to traverse an array in Opera <= 8.54
          // because its `Object#hasOwnProperty` implementation returns `false`
          // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
          if (getClass.call(value) == arrayClass) {
            for (length = value.length; length--;) {
              update(value, length, callback);
            }
          } else {
            forEach(value, function (property) {
              update(value, property, callback);
            });
          }
        }
        return callback.call(source, property, value);
      };

      // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
      JSON3.parse = function (source, callback) {
        var result, value;
        Index = 0;
        Source = "" + source;
        result = get(lex());
        // If a JSON string contains multiple tokens, it is invalid.
        if (lex() != "$") {
          abort();
        }
        // Reset the parser state.
        Index = Source = null;
        return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
      };
    }
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    define(function () {
      return JSON3;
    });
  }
}(this));

},{}],42:[function(require,module,exports){
module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}

},{}]},{},[1])
(1)
});
;
