let audioElement= new Audio("songs/1.mp3")

let index=0;

let mainPlay=document.getElementById('masterPlay')
let gif=document.getElementById('gif')
let seekbar=document.getElementById('myProgressBar')
let songItem=Array.from(document.getElementsByClassName('songItem'));


let songs=[
{songName:"this is", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
{songName:"my playList", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
{songName:"you can", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
{songName:"listen to", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
{songName:"the song", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
{songName:"that you", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
{songName:"wish to", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
]
songItem.forEach(function(element, i){
	element.getElementsByTagName('img')[0].src=songs[i].coverPath;
	element.getElementsByClassName("songtext")[0].innerText=songs[i].songName;
})
mainPlay.addEventListener("click", function () {
	if (audioElement.paused || audioElement.currentTime<=0) {
		audioElement.play()
			mainPlay.classList.remove("fa-play-circle");
		    mainPlay.classList.add("fa-pause-circle");
		    gif.style.opacity = 1;
	} else {
		audioElement.pause()
			mainPlay.classList.remove("fa-pause-circle");
			mainPlay.classList.add("fa-play-circle");;
			gif.style.opacity = 0;
	}

})
audioElement.addEventListener("timeupdate", function() {
	progress=parseInt((audioElement.currentTime/audioElement.duration) * 100);
	seekbar.value=progress
})
seekbar.addEventListener("change", function() {
	audioElement.currentTime=seekbar.value*audioElement.duration/100
})

function makeallpla(){
	Array.from(document.getElementsByClassName('songplay')).forEach(function(element) {
	element.classList.remove("fa-pause-circle");
	element.classList.add("fa-play-circle");
	})

}

Array.from(document.getElementsByClassName('songplay')).forEach(function(element) {
	element.addEventListener("click", function(e){
		makeallpla()
		index = parseInt(e.target.id);
		e.target.classList.remove("fa-play-circle");
		e.target.classList.add("fa-pause-circle");

		audioElement.src=`songs/${index + 1}.mp3`;
		audioElement.currentTime=0;
		audioElement.play();
		mainPlay.classList.remove("fa-play-circle");
		mainPlay.classList.add("fa-pause-circle");
		document.getElementById("gf").innerText=songs[`${index}`].songName;
		



		})
})
document.getElementById("next").addEventListener("click" ,function(){
if (index>9) {
	index=0;
} else {
	index +=1;
	audioElement.src=`songs/${index + 1}.mp3`;
	audioElement.currentTime=0;
		audioElement.play();
		mainPlay.classList.remove("fa-play-circle");
		mainPlay.classList.add("fa-pause-circle");
		document.getElementById(`${index}`).classList.remove("fa-play-circle")
		document.getElementById(`${index}`).classList.add("fa-pause-circle")
		document.getElementById(`${index-1}`).classList.remove("fa-pause-circle")
		document.getElementById(`${index-1}`).classList.add("fa-play-circle")
		document.getElementById("gf").innerText=songs[`${index}`].songName;

}
})
document.getElementById("previous").addEventListener("click" ,function(){
if (index<=0) {
	index=0;
} else {
	index -=1;
}
	audioElement.src=`songs/${index + 1}.mp3`;
	audioElement.currentTime=0;
		audioElement.play();
		mainPlay.classList.remove("fa-play-circle");
		mainPlay.classList.add("fa-pause-circle");
		document.getElementById(`${index}`).classList.remove("fa-play-circle")
		document.getElementById(`${index}`).classList.add("fa-pause-circle")
		document.getElementById(`${index+1}`).classList.remove("fa-pause-circle")
		document.getElementById(`${index+1}`).classList.add("fa-play-circle")
		document.getElementById("gf").innerText=songs[`${index}`].songName;
		


})




