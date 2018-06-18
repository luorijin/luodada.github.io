// function playMusic(id){
// 	var audio = document.getElementById(id);
// 	playCycle();
// 	document.addEventListener('DOMContentLoaded', function () {
// 		function audioAutoPlay() {
// 			playCycle();
// 			document.addEventListener("WeixinJSBridgeReady", function () {
// 				playCycle();
// 			}, false);
// 		}
// 		audioAutoPlay();
// 	});
// 	function playCycle(){
// 		audio.play();
// 		audio.onended = function () {
//             audio.load();
//             audio.play();
// 		}
// 	}
// 	return audio;
// }
// var audiobg1=playMusic("musicBg1");