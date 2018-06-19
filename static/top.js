!function(e){var t=e.document,n=t.documentElement,i="orientationchange"in e?"orientationchange":"resize",a=function e(){var t=n.getBoundingClientRect().width;return n.style.fontSize=5*Math.max(Math.min(t/750*20,11.2),8.55)+"px",e}();n.setAttribute("data-dpr",e.navigator.appVersion.match(/iphone/gi)?e.devicePixelRatio:1),/iP(hone|od|ad)/.test(e.navigator.userAgent)&&(t.documentElement.classList.add("ios"),parseInt(e.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1],10)>=8&&t.documentElement.classList.add("hairline")),t.addEventListener&&(e.addEventListener(i,a,!1),t.addEventListener("DOMContentLoaded",a,!1))}(window);
 window.onload = function(){
	    	var wH = window.innerHeight > 0 ? window.innerHeight : document.documentElement.clientHeight;
  			document.body.style.height= wH + 'px';
        document.documentElement.style.height=wH + 'px';
    	}
window.addEventListener('resize', function () {
    if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
      window.setTimeout(function () {
        document.activeElement.scrollIntoViewIfNeeded();
      }, 0);
    }
  })
function GetQueryString(name) {
     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
     var r = window.location.search.substr(1).match(reg);
     if (r!=null) return decodeURIComponent(r[2]); return null;
}
window.extend = function (target, source) {
    for (var p in source) {
        if (source.hasOwnProperty(p)) {
            target[p] = source[p];
        }
    }
    return target;
};
 var userInfo={
    dj_openID:GetQueryString("dj_openID"),
    dj_nickname:GetQueryString("dj_nickname")||"我的昵称",
    dj_headimgurl:GetQueryString("dj_headimgurl"),
    dj_isBindDJ:GetQueryString("dj_isBindDJ"),
    dj_province:GetQueryString("dj_province"),
    dj_misPrefix:GetQueryString("dj_misPrefix")
}
function playMusic(url,isplay){
  var audio = new Audio();
  audio.src =url;
  if(isplay){
    audioAutoPlay();
     document.addEventListener("click",function(){
      if(audio.paused){
          playCycle();
      }
    });
  }else{
    audio.load();
  }
  function audioAutoPlay() {
    playCycle();
    document.addEventListener("WeixinJSBridgeReady", function () {
      playCycle();
    }, false);
  }
  function playCycle(){
    audio.load();
    audio.play();
    audio.onended = function () {
            audio.load();
            audio.play();
    }
  }
  return audio;
}
var audiobg1=playMusic("./static/bg1.mp3",true);
var msg=playMusic("./static/msg.mp3");
var audiobg2=playMusic("./static/bg2.mp3");
