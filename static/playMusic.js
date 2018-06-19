function playMusic(url,isplay){
	var audio = new Audio();
	audio.src =url;
	if(isplay){
		audioAutoPlay();
	}else{
		document.addEventListener("click",function(){
			audio.load();
		});
	}
	function audioAutoPlay() {
		playCycle();
		document.addEventListener("WeixinJSBridgeReady", function () {
			playCycle();
		}, false);
	}
	function playCycle(){
		audio.load();
		if(audio.paused){
			audio.play();
		}
		audio.onended = function () {
            if(audio.paused){
				audio.play();
			}
		}
	}
	return audio;
}
var audiobg1=playMusic("./static/bg1.mp3",true);
var msg=playMusic("./static/msg.mp3");
var audiobg2=playMusic("./static/bg2.mp3");