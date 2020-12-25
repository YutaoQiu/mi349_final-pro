var btn=document.getElementById('btn');
var audio=document.getElementById('myaudio');
var play = "./images/play.png";
var stop = "./images/stop.png";
var tag = false;
btn.onclick = function(){
    if(tag){
        // alert('关闭');
        audio.pause();
        tag = false;
        btn.setAttribute('src',play)
    }else{
        // alert('播放');
        audio.play();
        tag = true;
        btn.setAttribute('src',stop)
    }
}

window.onload = function() {
    document.getElementById('audio').style.position="fixed";
}