$(function(){ParallaxScroll.init()});
var ParallaxScroll={showLogs:!1,round:1E3,init:function(){this._log("init");this._inited?(this._log("Already Inited"),this._inited=!0):(this._requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(h,w){window.setTimeout(h,1E3/60)}}(),this._onScroll(!0))},_inited:!1,_properties:"x y z rotateX rotateY rotateZ scaleX scaleY scaleZ scale".split(" "),_requestAnimationFrame:null,
_log:function(h){this.showLogs&&console.log("Parallax Scroll / "+h)},_onScroll:function(h){var w=$(document).scrollTop(),y=$(window).height();this._log("onScroll "+w);$("[data-parallax]").each($.proxy(function(C,z){var c=$(z),a=[],A=!1,u=c.data("style");void 0==u&&(u=c.attr("style")||"",c.data("style",u));var d=[c.data("parallax")],b;for(b=2;;b++)if(c.data("parallax"+b))d.push(c.data("parallax-"+b));else break;var B=d.length;for(b=0;b<B;b++){var g=d[b],n=g["from-scroll"];void 0==n&&(n=Math.max(0,
$(z).offset().top-y));n|=0;var e=g.distance,p=g["to-scroll"];void 0==e&&void 0==p&&(e=y);e=Math.max(e|0,1);var k=g.easing,v=g["easing-return"];void 0!=k&&$.easing&&$.easing[k]||(k=null);void 0!=v&&$.easing&&$.easing[v]||(v=k);if(k){var l=g.duration;void 0==l&&(l=e);l=Math.max(l|0,1);var x=g["duration-return"];void 0==x&&(x=l);e=1;var f=c.data("current-time");void 0==f&&(f=0)}void 0==p&&(p=n+e);p|=0;var q=g.smoothness;void 0==q&&(q=30);q|=0;if(h||0==q)q=1;q|=0;var r=w;r=Math.max(r,n);r=Math.min(r,
p);k&&(void 0==c.data("sens")&&c.data("sens","back"),r>n&&("back"==c.data("sens")?(f=1,c.data("sens","go")):f++),r<p&&("go"==c.data("sens")?(f=1,c.data("sens","back")):f++),h&&(f=l),c.data("current-time",f));this._properties.map($.proxy(function(b){var d=0,m=g[b];if(void 0!=m){"scale"==b||"scaleX"==b||"scaleY"==b||"scaleZ"==b?d=1:m|=0;var e=c.data("_"+b);void 0==e&&(e=d);var h=(r-n)/(p-n)*(m-d)+d,t=e+(h-e)/q;k&&0<f&&f<=l&&("back"==c.data("sens")&&(d=m,m=-m,k=v,l=x),t=$.easing[k](null,f,d,m,l));t=
Math.ceil(t*this.round)/this.round;t==e&&h==m&&(t=m);a[b]||(a[b]=0);a[b]+=t;e!=a[b]&&(c.data("_"+b,a[b]),A=!0)}},this))}A&&(void 0!=a.z&&(d=g.perspective,void 0==d&&(d=800),b=c.parent(),b.data("style")||b.data("style",b.attr("style")||""),b.attr("style","perspective:"+d+"px; -webkit-perspective:"+d+"px; "+b.data("style"))),void 0==a.scaleX&&(a.scaleX=1),void 0==a.scaleY&&(a.scaleY=1),void 0==a.scaleZ&&(a.scaleZ=1),void 0!=a.scale&&(a.scaleX*=a.scale,a.scaleY*=a.scale,a.scaleZ*=a.scale),d="translate3d("+
(a.x?a.x:0)+"px, "+(a.y?a.y:0)+"px, "+(a.z?a.z:0)+"px) "+("rotateX("+(a.rotateX?a.rotateX:0)+"deg) rotateY("+(a.rotateY?a.rotateY:0)+"deg) rotateZ("+(a.rotateZ?a.rotateZ:0)+"deg)")+" "+("scaleX("+a.scaleX+") scaleY("+a.scaleY+") scaleZ("+a.scaleZ+")")+";",this._log(d),c.attr("style","transform:"+d+" -webkit-transform:"+d+" "+u))},this));window.requestAnimationFrame?window.requestAnimationFrame($.proxy(this._onScroll,this,!1)):this._requestAnimationFrame($.proxy(this._onScroll,this,!1))}};