!function(i){var n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=i,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,i){var n,o;void 0===(o="function"==typeof(n=function(e){"use strict";var t=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),o=null!==k||void 0!==document.createTouch||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,s=document.getElementsByTagName("html")[0],n=function(){var e=void 0,t=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}(),l=function(){var e=void 0,t=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}(),r=Date.now(),E=[],C={},a={selector:"glightbox",skin:"clean",closeButton:!0,startAt:0,autoplayVideos:!0,descPosition:"bottom",width:900,height:506,videosWidth:960,videosHeight:540,beforeSlideChange:null,afterSlideChange:null,beforeSlideLoad:null,afterSlideLoad:null,onOpen:null,onClose:null,loopAtEnd:!1,touchNavigation:!0,keyboardNavigation:!0,closeOnOutsideClick:!0,jwplayer:{api:null,licenseKey:null,params:{width:"100%",aspectratio:"16:9",stretching:"uniform"}},vimeo:{api:"https://player.vimeo.com/api/player.js",params:{api:1,title:0,byline:0,portrait:0}},youtube:{api:"https://www.youtube.com/iframe_api",params:{enablejsapi:1,showinfo:0}},openEffect:"zoomIn",closeEffect:"zoomOut",slideEffect:"slide",moreText:"See more",moreLength:60,lightboxHtml:"",cssEfects:{fade:{in:"fadeIn",out:"fadeOut"},zoom:{in:"zoomIn",out:"zoomOut"},slide:{in:"slideInRight",out:"slideOutLeft"},slide_back:{in:"slideInLeft",out:"slideOutRight"}}};function q(){var i={},n=!1,e=0,t=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],e++);for(var o=function(e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n&&"[object Object]"===Object.prototype.toString.call(e[t])?i[t]=q(!0,i[t],e[t]):i[t]=e[t])};e<t;e++)o(arguments[e]);return i}a.slideHtml='<div class="gslide">         <div class="gslide-inner-content">            <div class="ginner-container">               <div class="gslide-media">               </div>               <div class="gslide-description">                    <div class="gdesc-inner">                        <h4 class="gslide-title"></h4>                        <div class="gslide-desc"></div>                    </div>               </div>            </div>         </div>       </div>',a.lightboxHtml='<div id="glightbox-body" class="glightbox-container">            <div class="gloader visible"></div>            <div class="goverlay"></div>            <div class="gcontainer">               <div id="glightbox-slider" class="gslider"></div>               <a class="gnext"></a>               <a class="gprev"></a>               <a class="gclose"></a>            </div>   </div>';var T={isFunction:function(e){return"function"==typeof e},isString:function(e){return"string"==typeof e},isNode:function(e){return!(!e||!e.nodeType||1!=e.nodeType)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e&&e.length&&isFinite(e.length)},isObject:function(e){return"object"===(void 0===e?"undefined":i(e))&&null!=e&&!T.isFunction(e)&&!T.isArray(e)},isNil:function(e){return null==e},has:function(e,t){return null!==e&&hasOwnProperty.call(e,t)},size:function(e){if(T.isObject(e)){if(e.keys)return e.keys().length;var t=0;for(var i in e)T.has(e,i)&&t++;return t}return e.length},isNumber:function(e){return!isNaN(parseFloat(e))&&isFinite(e)}};function v(e,t){if((T.isNode(e)||e===window||e===document)&&(e=[e]),T.isArrayLike(e)||T.isObject(e)||(e=[e]),0!=T.size(e))if(T.isArrayLike(e)&&!T.isObject(e))for(var i=e.length,n=0;n<i&&!1!==t.call(e[n],e[n],n,e);n++);else if(T.isObject(e))for(var o in e)if(T.has(e,o)&&!1===t.call(e[o],e[o],o,e))break}function f(e){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,t=e[r]=e[r]||[],o={all:t,evt:null,found:null};return i&&n&&0<T.size(t)&&v(t,function(e,t){if(e.eventName==i&&e.fn.toString()==n.toString())return o.found=!0,o.evt=t,!1}),o}function F(i){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=e.onElement,n=e.withCallback,o=e.avoidDuplicate,s=void 0===o||o,l=e.once,r=void 0!==l&&l,a=e.useCapture,c=void 0!==a&&a,d=arguments[2],u=t||[];function h(e){T.isFunction(n)&&n.call(d,e,this),r&&h.destroy()}return T.isString(u)&&(u=document.querySelectorAll(u)),h.destroy=function(){v(u,function(e){var t=f(e,i,h);t.found&&t.all.splice(t.evt,1),e.removeEventListener&&e.removeEventListener(i,h,c)})},v(u,function(e){var t=f(e,i,h);(e.addEventListener&&s&&!t.found||!s)&&(e.addEventListener(i,h,c),t.all.push({eventName:i,fn:h}))}),h}function L(e,t){j(e,t)||(e.classList?e.classList.add(t):e.className+=" "+t)}function O(t,e){var i=e.split(" ");1<i.length?v(i,function(e){O(t,e)}):t.classList?t.classList.remove(e):t.className=t.className.replace(e,"")}function j(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}function c(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",i=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(!t||""===e)return!1;if("none"==e)return T.isFunction(i)&&i(),!1;var n=e.split(" ");v(n,function(e){L(t,"g"+e)}),F(l,{onElement:t,avoidDuplicate:!1,once:!0,withCallback:function(e,t){v(n,function(e){O(t,"g"+e)}),T.isFunction(i)&&i()}})}function N(e){var t=document.createDocumentFragment(),i=document.createElement("div");for(i.innerHTML=e;i.firstChild;)t.appendChild(i.firstChild);return t}function p(e,t){for(;e!==document.body;)if("function"==typeof(e=e.parentElement).matches?e.matches(t):e.msMatchesSelector(t))return e}function d(e){e.style.display="block"}function u(e){e.style.display="none"}var h=function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,o=arguments[1],l={href:"",title:"",type:"",description:"",descPosition:"bottom",effect:"",node:n};if(T.isObject(n)&&!T.isNode(n))return q(l,n);var e="",r=n.getAttribute("data-glightbox"),t=n.nodeName.toLowerCase();if("a"===t&&(e=n.href),"img"===t&&(e=n.src),l.href=e,v(l,function(e,t){T.has(o,t)&&(l[t]=o[t]);var i=n.dataset[t];T.isNil(i)||(l[t]=i)}),l.type||(l.type=y(e)),T.isNil(r)){if("a"==t){var i=n.title;T.isNil(i)||""===i||(l.title=i)}if("img"==t){var s=n.alt;T.isNil(s)||""===s||(l.title=s)}var a=n.getAttribute("data-description");T.isNil(a)||""===a||(l.description=a)}else{var c=[];v(l,function(e,t){c.push(";\\s?"+t)}),c=c.join("\\s?:|"),""!==r.trim()&&v(l,function(e,t){var i=r,n=new RegExp("s?"+t+"s?:s?(.*?)("+c+"s?:|$)"),o=i.match(n);if(o&&o.length&&o[1]){var s=o[1].trim().replace(/;\s*$/,"");l[t]=s}})}var d=n.querySelector(".glightbox-desc");d&&(l.description=d.innerHTML);var u="video"==l.type?o.videosWidth:o.width,h="video"==l.type?o.videosHeight:o.height;return l.width=T.has(l,"width")?l.width:u,l.height=T.has(l,"height")?l.height:h,l},g=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=this,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(j(e,"loaded"))return!1;T.isFunction(this.settings.beforeSlideLoad)&&this.settings.beforeSlideLoad(e,i);var o=i.type,s=i.descPosition,l=e.querySelector(".gslide-media"),r=e.querySelector(".gslide-title"),a=e.querySelector(".gslide-desc"),c=e.querySelector(".gdesc-inner"),d=n;if(T.isFunction(this.settings.afterSlideLoad)&&(d=function(){T.isFunction(n)&&n(),t.settings.afterSlideLoad(e,i)}),""==i.title&&""==i.description?c&&c.parentNode.removeChild(c):(r&&""!==i.title?r.innerHTML=i.title:r.parentNode.removeChild(r),a&&""!==i.description?k&&0<this.settings.moreLength?(i.smallDescription=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:50,i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=i;if((e=e.trim()).length<=t)return e;var o=e.substr(0,t-1);return n?o+'... <a href="#" class="desc-more">'+i+"</a>":o}(i.description,this.settings.moreLength,this.settings.moreText),a.innerHTML=i.smallDescription,function o(e,s){var t=e.querySelector(".desc-more");if(!t)return!1;F("click",{onElement:t,withCallback:function(e,t){e.preventDefault();var i=p(t,".gslide-desc");if(!i)return!1;i.innerHTML=s.description,L(body,"gdesc-open");var n=F("click",{onElement:[body,p(i,".gslide-description")],withCallback:function(e,t){"a"!==e.target.nodeName.toLowerCase()&&(O(body,"gdesc-open"),L(body,"gdesc-closed"),i.innerHTML=s.smallDescription,o(i,s),setTimeout(function(){O(body,"gdesc-closed")},400),n.destroy())}})}})}.apply(this,[a,i])):a.innerHTML=i.description:a.parentNode.removeChild(a),L(l.parentNode,"desc-"+s),L(c.parentNode,"description-"+s)),L(l,"gslide-"+o),L(e,"loaded"),"video"===o)return l.innerHTML='<div class="gvideo-wrapper"></div>',void function(e,i,n){var t,o=this,s="gvideo"+i.index,l=e.querySelector(".gvideo-wrapper"),r=i.href,a=location.protocol.replace(":","");if("file"==a&&(a="http"),r.match(/vimeo\.com\/([0-9]*)/)){var c=/vimeo.*\/(\d+)/i.exec(r),d=B(this.settings.vimeo.params),u=a+"://player.vimeo.com/video/"+c[1]+"?"+d;M(this.settings.vimeo.api),l.parentNode.style.maxWidth=i.width+"px",l.style.width=i.width+"px",l.style.maxHeight=i.height+"px";var h=I({url:u,callback:function(){z(function(){return"undefined"!=typeof Vimeo},function(){var e=new Vimeo.Player(h);C[s]=e,T.isFunction(n)&&n()})},allow:"autoplay; fullscreen",appendTo:l});h.id=s,h.className="vimeo-video gvideo",this.settings.autoplayVideos&&!k&&(h.className+=" wait-autoplay")}if(r.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||r.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)){var v=B(q(this.settings.youtube.params,{playerapiid:s})),f=a+"://www.youtube.com/embed/"+(void 0!==(t=(t=r).replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]?t[2].split(/[^0-9a-z_\-]/i)[0]:t)+"?"+v;M(this.settings.youtube.api),l.parentNode.style.maxWidth=i.width+"px",l.style.width=i.width+"px",l.style.maxHeight=i.height+"px";var p=I({url:f,callback:function(){if(!T.isNil(YT)&&YT.loaded){var e=new YT.Player(p);C[s]=e}else E.push(p);T.isFunction(n)&&n()},allow:"autoplay; fullscreen",appendTo:l});p.id=s,p.className="youtube-video gvideo",this.settings.autoplayVideos&&!k&&(p.className+=" wait-autoplay")}if(null!==r.match(/\.(mp4|ogg|webm)$/)){var g='<video id="'+s+'" ';g+='style="background:#000; width: '+i.width+"px; height: "+i.height+'px;" ',g+='preload="metadata" ',g+='x-webkit-airplay="allow" ',g+='webkit-playsinline="" ',g+="controls ",g+='class="gvideo">';var m=r.toLowerCase().split(".").pop(),y={mp4:"",ogg:"",webm:""};for(var w in y[m]=r,y)if(y.hasOwnProperty(w)){var b=y[w];i.hasOwnProperty(w)&&(b=i[w]),""!==b&&(g+='<source src="'+b+'" type="video/'+w+'">')}var S=N(g+="</video>");l.appendChild(S);var x=document.getElementById(s);if(null!==this.settings.jwplayer&&null!==this.settings.jwplayer.api){this.settings.jwplayer;var A=this.settings.jwplayer.api;if(!A)return console.warn("Missing jwplayer api file"),T.isFunction(n)&&n(),!1;M(A,function(){var e=q(o.settings.jwplayer.params,{width:i.width+"px",height:i.height+"px",file:r});jwplayer.key=o.settings.jwplayer.licenseKey;var t=jwplayer(s);t.setup(e),(C[s]=t).on("ready",function(){L(x=l.querySelector(".jw-video"),"gvideo"),x.id=s,T.isFunction(n)&&n()})})}else L(x,"html5-video"),C[s]=x,T.isFunction(n)&&n()}}.apply(this,[e,i,d]);if("external"!==o)if("inline"!==o){if("image"===o){var u=new Image;return u.addEventListener("load",function(){T.isFunction(d)&&d()},!1),u.src=i.href,void l.appendChild(u)}T.isFunction(d)&&d()}else(function(e,t,i){var n=e.querySelector(".gslide-media"),o=t.href.split("#").pop().trim(),s=document.getElementById(o);if(!s)return!1;var l=s.cloneNode(!0);l.style.height=t.height+"px",l.style.maxWidth=t.width+"px",L(l,"ginlined-content"),n.appendChild(l),T.isFunction(i)&&i()}).apply(this,[e,i,d]);else{var h=I({url:i.href,width:i.width,height:i.height,callback:d});l.appendChild(h)}};function I(e){var t=e.url,i=e.width,n=e.height,o=e.allow,s=e.callback,l=e.appendTo,r=document.createElement("iframe"),a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return r.className="vimeo-video gvideo",r.src=t,n&&(r.style.height=k&&a<767?"":n+"px"),i&&(r.style.width=i+"px"),o&&r.setAttribute("allow",o),r.onload=function(){L(r,"iframe-ready"),T.isFunction(s)&&s()},l&&l.appendChild(r),r}function M(e,t){if(T.isNil(e))console.error("Inject videos api error");else{var i=document.querySelectorAll('script[src="'+e+'"]');if(T.isNil(i)||0==i.length){var n=document.createElement("script");return n.type="text/javascript",n.src=e,n.onload=function(){T.isFunction(t)&&t()},document.body.appendChild(n),!1}T.isFunction(t)&&t()}}function m(){for(var e=0;e<E.length;e++){var t=E[e],i=new YT.Player(t);C[t.id]=i}}function z(e,t,i,n){if(e())t();else{i||(i=100);var o=void 0,s=setInterval(function(){e()&&(clearInterval(s),o&&clearTimeout(o),t())},i);n&&(o=setTimeout(function(){clearInterval(s)},n))}}function B(e){var i="",n=0;return v(e,function(e,t){0<n&&(i+="&amp;"),i+=t+"="+e,n+=1}),i}void 0!==window.onYouTubeIframeAPIReady?window.onYouTubeIframeAPIReady=function(){window.onYouTubeIframeAPIReady(),m()}:window.onYouTubeIframeAPIReady=m;var y=function(e){var t=e;return null!==(e=e.toLowerCase()).match(/\.(jpeg|jpg|gif|png|apn|webp|svg)$/)?"image":e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)?"video":e.match(/vimeo\.com\/([0-9]*)/)?"video":null!==e.match(/\.(mp4|ogg|webm)$/)?"video":-1<e.indexOf("#")&&""!==t.split("#").pop().trim()?"inline":e.includes("gajax=true")?"ajax":"external"};function P(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";if(""==t)return e.style.webkitTransform="",e.style.MozTransform="",e.style.msTransform="",e.style.OTransform="",e.style.transform="",!1;e.style.webkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t,e.style.transform=t}function H(e){var i=e.querySelector(".gslide-media"),t=e.querySelector(".gslide-description");L(i,"greset"),P(i,"translate3d(0, 0, 0)"),F(n,{onElement:i,once:!0,withCallback:function(e,t){O(i,"greset")}}),i.style.opacity="",t&&(t.style.opacity="")}var w=function(){function i(e){!function(e,t){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this),this.settings=q(a,e||{}),this.effectsClasses=this.getAnimationClasses()}return t(i,[{key:"init",value:function(){var i=this;this.baseEvents=F("click",{onElement:"."+this.settings.selector,withCallback:function(e,t){e.preventDefault(),i.open(t)}})}},{key:"open",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;if(this.elements=this.getElements(e),0==this.elements.length)return!1;this.activeSlide=null,this.prevActiveSlideIndex=null,this.prevActiveSlide=null;var t=this.settings.startAt;e&&(t=this.elements.indexOf(e))<0&&(t=0),this.build(),c(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.in);var i=document.body;if(i.style.width=i.offsetWidth+"px",L(i,"glightbox-open"),L(s,"glightbox-open"),k&&(L(s,"glightbox-mobile"),this.settings.slideEffect="slide"),this.showSlide(t,!0),1==this.elements.length?(u(this.prevButton),u(this.nextButton)):(d(this.prevButton),d(this.nextButton)),this.lightboxOpen=!0,T.isFunction(this.settings.onOpen)&&this.settings.onOpen(),k&&o&&this.settings.touchNavigation)return function(){var d=this;if(this.events.hasOwnProperty("touchStart"))return!1;var u=void 0,h=void 0,v=void 0,f=!1,p=!1,g=!1,m=!1,y={},w={},b=(this.slidesContainer,null),S=0,x=0,i=null,A=null,k=null,E=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,this.events.doctouchmove=F("touchmove",{onElement:document,withCallback:function(e,t){if(j(body,"gdesc-open"))return e.preventDefault(),!1}}),this.events.touchStart=F("touchstart",{onElement:body,withCallback:function(e,t){j(body,"gdesc-open")||(L(body,"touching"),b=d.getActiveSlide(),i=b.querySelector(".gslide-image"),A=b.querySelector(".gslide-media"),k=b.querySelector(".gslide-description"),d.index,w=e.targetTouches[0],y.pageX=e.targetTouches[0].pageX,y.pageY=e.targetTouches[0].pageY,S=e.targetTouches[0].clientX,x=e.targetTouches[0].clientY)}}),this.events.gestureStart=F("gesturestart",{onElement:body,withCallback:function(e,t){i&&(e.preventDefault(),g=!0)}}),this.events.gestureChange=F("gesturechange",{onElement:body,withCallback:function(e,t){e.preventDefault(),P(i,"scale("+e.scale+")")}}),this.events.gesturEend=F("gestureend",{onElement:body,withCallback:function(e,t){g=!1,e.scale<1?(m=!1,P(i,"scale(1)")):m=!0}}),this.events.touchMove=F("touchmove",{onElement:body,withCallback:function(e,t){if(j(body,"touching")&&!(j(body,"gdesc-open")||g||m)){e.preventDefault(),w=e.targetTouches[0];var i=b.querySelector(".gslide-inner-content").offsetHeight,n=b.querySelector(".gslide-inner-content").offsetWidth,o=e.targetTouches[0].clientX,s=e.targetTouches[0].clientY,l=S-o,r=x-s;if(Math.abs(l)>Math.abs(r)?p=!(f=!1):f=!(p=!1),f){if(h=w.pageY-y.pageY,0<=Math.abs(h)||f){var a=.75-Math.abs(h)/i;A.style.opacity=a,k&&(k.style.opacity=a),P(A,"translate3d(0, "+h+"px, 0)")}}else if(u=w.pageX-y.pageX,v=100*u/E,p){if(d.index+1==d.elements.length&&u<-60)return H(b),!1;if(d.index-1<0&&60<u)return H(b),!1;var c=.75-Math.abs(u)/n;A.style.opacity=c,k&&(k.style.opacity=c),P(A,"translate3d("+v+"%, 0, 0)")}}}}),this.events.touchEnd=F("touchend",{onElement:body,withCallback:function(e,t){h=w.pageY-y.pageY,u=w.pageX-y.pageX,v=100*u/E,O(body,"touching");var i=b.querySelector(".gslide-inner-content").offsetHeight,n=b.querySelector(".gslide-inner-content").offsetWidth;if(f){var o=i/2;return f=!1,Math.abs(h)>=o?void d.close():void H(b)}if(p){var s="prev",l=!(p=!1);if(u<0&&(s="next",u=Math.abs(u)),"prev"==s&&d.index-1<0&&(l=!1),"next"==s&&d.index+1>=d.elements.length&&(l=!1),l&&n/2-90<=u)return void("next"==s?d.nextSlide():d.prevSlide());H(b)}}})}.apply(this),!1;this.settings.keyboardNavigation&&function(){var n=this;if(this.events.hasOwnProperty("keyboard"))return!1;this.events.keyboard=F("keydown",{onElement:window,withCallback:function(e,t){var i=(e=e||window.event).keyCode;39==i&&n.nextSlide(),37==i&&n.prevSlide(),27==i&&n.close()}})}.apply(this)}},{key:"showSlide",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,i=1<arguments.length&&void 0!==arguments[1]&&arguments[1];d(this.loader),this.index=t;var n=this.slidesContainer.querySelector(".current");n&&O(n,"current"),this.slideAnimateOut();var o=this.slidesContainer.querySelectorAll(".gslide")[t];if(d(this.slidesContainer),j(o,"loaded"))this.slideAnimateIn(o,i),u(this.loader);else{d(this.loader);var s=h(this.elements[t],this.settings);s.index=t,g.apply(this,[o,s,function(){u(e.loader),e.slideAnimateIn(o,i)}])}this.preloadSlide(t+1),this.preloadSlide(t-1),O(this.nextButton,"disabled"),O(this.prevButton,"disabled"),0===t?L(this.prevButton,"disabled"):t===this.elements.length-1&&!0!==this.settings.loopAtEnd&&L(this.nextButton,"disabled"),this.activeSlide=o}},{key:"preloadSlide",value:function(e){var t=this;if(e<0||e>this.elements.length)return!1;if(T.isNil(this.elements[e]))return!1;var i=this.slidesContainer.querySelectorAll(".gslide")[e];if(j(i,"loaded"))return!1;var n=h(this.elements[e],this.settings);n.index=e;var o=n.sourcetype;"video"==o||"external"==o?setTimeout(function(){g.apply(t,[i,n])},200):g.apply(this,[i,n])}},{key:"prevSlide",value:function(){var e=this.index-1;if(e<0)return!1;this.goToSlide(e)}},{key:"nextSlide",value:function(){var e=this.index+1;if(e>this.elements.length)return!1;this.goToSlide(e)}},{key:"goToSlide",value:function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];-1<e&&(this.prevActiveSlide=this.activeSlide,this.prevActiveSlideIndex=this.index,e<this.elements.length?this.showSlide(e):!0===this.settings.loopAtEnd&&(e=0,this.showSlide(e)))}},{key:"slideAnimateIn",value:function(e,t){var i=this,n=e.querySelector(".gslide-media"),o=e.querySelector(".gslide-description"),s={index:this.prevActiveSlideIndex,slide:this.prevActiveSlide},l={index:this.index,slide:this.activeSlide};if(0<n.offsetWidth&&o&&(u(o),e.querySelector(".ginner-container").style.maxWidth=n.offsetWidth+"px",o.style.display=""),O(e,this.effectsClasses),t)c(e,this.settings.openEffect,function(){!k&&i.settings.autoplayVideos&&i.playSlideVideo(e),T.isFunction(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[s,l])});else{var r=this.settings.slideEffect,a="none"!==r?this.settings.cssEfects[r].in:r;this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(a=this.settings.cssEfects.slide_back.in),c(e,a,function(){!k&&i.settings.autoplayVideos&&i.playSlideVideo(e),T.isFunction(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[s,l])})}L(e,"current")}},{key:"slideAnimateOut",value:function(){if(!this.prevActiveSlide)return!1;var i=this.prevActiveSlide;O(i,this.effectsClasses),L(i,"prev");var e=this.settings.slideEffect,t="none"!==e?this.settings.cssEfects[e].out:e;this.stopSlideVideo(i),T.isFunction(this.settings.beforeSlideChange)&&this.settings.beforeSlideChange.apply(this,[{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide},{index:this.index,slide:this.activeSlide}]),this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(t=this.settings.cssEfects.slide_back.out),c(i,t,function(){var e=i.querySelector(".gslide-media"),t=i.querySelector(".gslide-description");e.style.transform="",O(e,"greset"),e.style.opacity="",t&&(t.style.opacity=""),O(i,"prev")})}},{key:"stopSlideVideo",value:function(e){T.isNumber(e)&&(e=this.slidesContainer.querySelectorAll(".gslide")[e]);var t=e?e.querySelector(".gvideo"):null;if(!t)return!1;var i=t.id;if(C&&C.hasOwnProperty(i)){var n=C[i];j(t,"vimeo-video")&&n.pause(),j(t,"youtube-video")&&n.pauseVideo(),j(t,"jw-video")&&n.pause(!0),j(t,"html5-video")&&n.pause()}}},{key:"playSlideVideo",value:function(e){T.isNumber(e)&&(e=this.slidesContainer.querySelectorAll(".gslide")[e]);var t=e.querySelector(".gvideo");if(!t)return!1;var i=t.id;return C&&(T.has(C,i)||j(t,"wait-autoplay"))?(z(function(){return j(t,"iframe-ready")&&T.has(C,i)},function(){var e=C[i];j(t,"vimeo-video")&&z(function(){return e.play},function(){e.play()}),j(t,"youtube-video")&&z(function(){return e.playVideo},function(){e.playVideo()}),j(t,"jw-video")&&z(function(){return e.play},function(){e.play()}),j(t,"html5-video")&&e.play(),setTimeout(function(){O(t,"wait-autoplay")},300)},50,4e3),!1):void 0}},{key:"setElements",value:function(e){this.settings.elements=e}},{key:"getElements",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;if(this.elements=[],!T.isNil(this.settings.elements)&&T.isArray(this.settings.elements))return this.settings.elements;var t=!1;if(null!==e){var i=e.getAttribute("data-gallery");i&&""!==i&&(t=document.querySelectorAll('[data-gallery="'+i+'"]'))}return 0==t&&(t=document.querySelectorAll("."+this.settings.selector)),Array.prototype.slice.call(t)}},{key:"getActiveSlide",value:function(){return this.slidesContainer.querySelectorAll(".gslide")[this.index]}},{key:"getActiveSlideIndex",value:function(){return this.index}},{key:"getAnimationClasses",value:function(){var e=[];for(var t in this.settings.cssEfects)if(this.settings.cssEfects.hasOwnProperty(t)){var i=this.settings.cssEfects[t];e.push("g"+i.in),e.push("g"+i.out)}return e.join(" ")}},{key:"build",value:function(){var i=this;if(this.built)return!1;var e=N(this.settings.lightboxHtml);document.body.appendChild(e);var t=document.getElementById("glightbox-body"),n=(this.modal=t).querySelector(".gclose");this.prevButton=t.querySelector(".gprev"),this.nextButton=t.querySelector(".gnext"),this.overlay=t.querySelector(".goverlay"),this.loader=t.querySelector(".gloader"),this.slidesContainer=document.getElementById("glightbox-slider"),this.events={},L(this.modal,"glightbox-"+this.settings.skin),this.settings.closeButton&&n&&(this.events.close=F("click",{onElement:n,withCallback:function(e,t){e.preventDefault(),i.close()}})),n&&!this.settings.closeButton&&n.parentNode.removeChild(n),this.nextButton&&(this.events.next=F("click",{onElement:this.nextButton,withCallback:function(e,t){e.preventDefault(),i.nextSlide()}})),this.prevButton&&(this.events.prev=F("click",{onElement:this.prevButton,withCallback:function(e,t){e.preventDefault(),i.prevSlide()}})),this.settings.closeOnOutsideClick&&(this.events.outClose=F("click",{onElement:t,withCallback:function(e,t){p(e.target,".ginner-container")||j(e.target,"gnext")||j(e.target,"gprev")||i.close()}})),v(this.elements,function(){var e=N(i.settings.slideHtml);i.slidesContainer.appendChild(e)}),o&&L(s,"glightbox-touch"),this.built=!0}},{key:"reload",value:function(){this.init()}},{key:"close",value:function(){var i=this;if(this.closing)return!1;this.closing=!0,this.stopSlideVideo(this.activeSlide),L(this.modal,"glightbox-closing"),c(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.out),c(this.activeSlide,this.settings.closeEffect,function(){if(i.activeSlide=null,i.prevActiveSlideIndex=null,i.prevActiveSlide=null,i.built=!1,i.events)for(var e in i.events)i.events.hasOwnProperty(e)&&i.events[e].destroy();var t=document.body;O(t,"glightbox-open"),O(s,"glightbox-open"),O(t,"touching"),O(t,"gdesc-open"),t.style.width="",i.modal.parentNode.removeChild(i.modal),T.isFunction(i.settings.onClose)&&i.settings.onClose(),i.closing=null})}},{key:"destroy",value:function(){this.close(),this.baseEvents.destroy()}}]),i}();e.exports=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=new w(e);return t.init(),t}})?n.apply(t,[e]):n)||(e.exports=o)},function(e,t,i){"use strict";i.r(t);var n,o,s=i(0),l=i.n(s);n=document,window,o=n.querySelectorAll(".inputfile"),Array.prototype.forEach.call(o,function(e){var i=e.nextElementSibling,n=i.innerHTML;e.addEventListener("change",function(e){var t;(t=this.files&&1<this.files.length?(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):e.target.value.split("\\").pop())?i.querySelector("span").innerHTML=t:i.innerHTML=n}),e.addEventListener("focus",function(){e.classList.add("has-focus")}),e.addEventListener("blur",function(){e.classList.remove("has-focus")})}),l()(),l()({selector:"glightbox2"}),l()({selector:"glightbox3",jwplayer:{api:"https://content.jwplatform.com/libraries/QzXs2BlW.js",licenseKey:"imB2/QF0crMqHks7/tAxcTRRjnqA9ZwxWQ2N1A=="}}),l()({selector:"glightbox4"});var r=document.querySelector(".setting-nav__drawer"),a=document.querySelector(".user-nav__drawer");document.addEventListener("click",function(e){var t=e.target.closest(".setting-nav__drawer-toggle"),i=e.target.closest(".user-nav__drawer-toggle");t&&(r.classList.toggle("drawer-is-open"),a.classList.remove("drawer-is-open")),i&&(a.classList.toggle("drawer-is-open"),r.classList.remove("drawer-is-open"))});var c,d,u,h,v,f,p,g,m,y,w,b=(document,c=jQuery,u=c(".slider--teams"),h=c("#list"),v=c("#list li"),f=v.length,g=!(p=0),m=function(e,t){var i=t;e.find("figure").addClass("active"),v.not(e).find("figure").removeClass("active"),h.velocity({translateX:~~(-100/f*i)+"%",translateZ:0},{duration:1e3,easing:[400,26],queue:!1})},y=function(e){p=g?~~((p+1)%f):e,console.log(p),m(v.eq(p),p)},w=function(e){clearRequestInterval(d),g=!1,y(e)},{init:function(){h.css({"margin-left":"33%",width:~~(f/3*100)+"%"}),v.css("width",100/f+"%"),u.velocity({opacity:1},{display:"block"},{delay:1e3}),window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)},window.requestInterval=function(t,i){if(!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame))return window.setInterval(t,i);var n=(new Date).getTime(),o=new Object;return o.value=requestAnimFrame(function e(){(new Date).getTime()-n>=i&&(t.call(),n=(new Date).getTime()),o.value=requestAnimFrame(e)}),o},window.clearRequestInterval=function(e){window.cancelAnimationFrame?window.cancelAnimationFrame(e.value):window.webkitCancelRequestAnimationFrame?window.webkitCancelRequestAnimationFrame(e.value):window.mozCancelRequestAnimationFrame?window.mozCancelRequestAnimationFrame(e.value):window.oCancelRequestAnimationFrame?window.oCancelRequestAnimationFrame(e.value):window.msCancelRequestAnimationFrame?msCancelRequestAnimationFrame(e.value):clearInterval(e)},c.each(v,function(t){var i=c(this);i.on("touchstart click",function(e){e.preventDefault(),w(t),m(i,t)})}),d=requestInterval(y,2500)}});$(window).load(function(){b.init()}),new Dropzone("#demo-upload",{previewTemplate:document.querySelector("#preview-template").innerHTML,parallelUploads:2,thumbnailHeight:120,thumbnailWidth:120,maxFilesize:3,filesizeBase:1e3,thumbnail:function(e,t){if(e.previewElement){e.previewElement.classList.remove("dz-file-preview");for(var i=e.previewElement.querySelectorAll("[data-dz-thumbnail]"),n=0;n<i.length;n++){var o=i[n];o.alt=e.name,o.src=t}setTimeout(function(){e.previewElement.classList.add("dz-image-preview")},1)}}}).uploadFiles=function(e){for(var n=this,t=0;t<e.length;t++){var i=e[t];totalSteps=Math.round(Math.min(60,Math.max(6,i.size/1e5)));for(var o=0;o<totalSteps;o++){var s=100*(o+1);setTimeout(function(e,t,i){return function(){e.upload={progress:100*(i+1)/t,total:e.size,bytesSent:(i+1)*e.size/t},n.emit("uploadprogress",e,e.upload.progress,e.upload.bytesSent),100==e.upload.progress&&(e.status=Dropzone.SUCCESS,n.emit("success",e,"success",null),n.emit("complete",e),n.processQueue())}}(i,totalSteps,o),s)}}}}]);