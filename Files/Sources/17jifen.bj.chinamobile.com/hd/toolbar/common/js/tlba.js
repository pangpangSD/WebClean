$(function(){var b=navigator.userAgent;if(/huawei/i.test(b)&&/android/i.test(b)&&!/U8850/i.test(b)){$(".touchable").css({"-webkit-backface-visibility":"hidden","-moz-backface-visibility":"hidden","-ms-backface-visibility":"hidden","backface-visibility":"hidden","-webkit-perspective":"1000","-moz-perspective":"1000","-ms-perspective":"1000",perspective:"1000"})}var c=0;var a=function(){var e=document.documentElement.clientWidth;var h=/\btlba\b=(\d+)/.exec(window.location.href);if(e==0||Math.abs(e-c)<5){return}c=e;var g=document.documentElement.clientHeight,i=$(document.body).attr("w")||300,f=$(document.body).attr("f")||20,d=e/i;$(document.body).css({"font-size":f*d});$(document.body).css({display:"block"});$(".ibody").css({height:g-$(".ibody").offset().top})};setInterval(a,250);a()});(function(a){a.fn.unselectable=function(b){return this.each(function(){if(b===false||b==="false"){a(this).css({MozUserSelect:"",webkitUserSelect:""}).attr("unselectable","off").unbind("selectstart")}else{a(this).css({MozUserSelect:"none",webkitUserSelect:"none"}).attr("unselectable","on").bind("selectstart",function(){return false})}})}})(jQuery);(function(e){var g=false;var d="ontouchstart" in document.documentElement;var f=function(h){var i=h.touches?h.touches[0].pageY:h.pageY;g={target:e(h.target).closest(".touchable").get(0)||h.target,first:true,start:i,last:i};if(document.body.addEventListener){if(d){document.body.addEventListener("touchmove",c);document.body.addEventListener("touchend",b)}else{document.body.addEventListener("mousemove",c);document.body.addEventListener("mouseup",b)}}};var c=function(h){if(g){h.preventDefault();if(e(g.target).is(".untouchable")){return}var k=h.touches?h.touches[0].pageY:h.pageY,i=g.last-k;if(i==0||g.first&&Math.abs(i)<10){return}if(Math.abs(k-g.start)<3){return}g.first=false;g.last=k;var j=e(g.target).data("touchable");if(e.isFunction(j)){j.call(g.target,i)}}};var b=function(){g=false;if(document.body.removeEventListener){if(d){document.body.removeEventListener("touchmove",c);document.body.removeEventListener("touchend",b)}else{document.body.removeEventListener("mousemove",c);document.body.removeEventListener("mouseup",b)}}};var a=function(h){e(this).scrollTop(e(this).scrollTop()+h)};e.fn.touchable=function(h){return this.each(function(){if(this.addEventListener){if(d){this.addEventListener("touchstart",f)}else{this.addEventListener("mousedown",f)}e(this).data("touchable",h||a)}})};e(function(){e(".touchable").css({overflow:"hidden"}).unselectable().touchable()})})(jQuery);(function(){var a="ontouchstart" in document.documentElement;$.fn.xclick=function(b){return this.each(function(){if(a){this.addEventListener("touchstart",function(c){c=$.event.fix(c);c.preventDefault();b.call(this,c)})}else{$(this).click(b)}})}})();(function(){$.ajaxplus=function(b){var g=function(h){$(".prompt-line").css({display:"block"}).children(".reload").css({display:"block"}).siblings().hide()};var c=setTimeout(g,10000);var d=setTimeout(function(){$(".prompt-line").css({display:"block"}).children(".wait").css({display:"block"}).siblings().hide()},1000);var f=b||{},e=f.success,a=f.error;f.success=function(i,h,j){clearTimeout(d);clearTimeout(c);$(".prompt-line").hide();if(!i){g(j.getResponseHeader("retcode"));if($.isFunction(a)){a.call(this,j,h)}return}if($.isFunction(e)){e.call(this,i,h,j)}};f.error=function(j,h,i){clearTimeout(d);clearTimeout(c);g(j.getResponseHeader("retcode"));if($.isFunction(a)){a.call(this,j,h,i)}};$.ajax(f)};$(function(){$(".prompt-line .close").click(function(){$(this).closest(".prompt-line").hide()});$(".prompt-line .reload a").click(function(){window.location.href=window.location})})})(jQuery);