console.log('Welcome to Spotify');
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let audioElement = new Audio('songs/1.mp3');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItems'));

let songs = [
    {songName: "Sunset", filePath: "songs/1.mp3", coverPath: "cover image.jpg"},
    {songName: "Polite", filePath: "songs/2.mp3", coverPath: "cover image.jpg"},
    {songName: "Forever", filePath: "songs/3.mp3", coverPath: "cover image.jpg"},
    {songName: "Mantra", filePath: "songs/4.mp3", coverPath: "cover image.jpg"},
    {songName: "Mood", filePath: "songs/5.mp3", coverPath: "cover image.jpg"},
    {songName: "Love", filePath: "songs/6.mp3", coverPath: "cover image.jpg"},
    {songName: "Everything", filePath: "songs/7.mp3", coverPath: "cover image.jpg"},
    {songName: "Freinds", filePath: "songs/8.mp3", coverPath: "cover image.jpg"},
    {songName: "New Starting", filePath: "songs/9.mp3", coverPath: "cover image.jpg"},
    {songName: "Together", filePath: "songs/10.mp3", coverPath: "cover image.jpg"},
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    

})

masterPlay.addEventListener("click", () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

})

audioElement.addEventListener("timeupdate", () => {
    var progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/ 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
    
})



document.getElementById('next').addEventListener('click', () => {
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})