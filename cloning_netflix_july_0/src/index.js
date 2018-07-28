const navigation = document.querySelector("nav");
const SCROLLED_CLASS = "scrolled";
const video = document.querySelector(".js-video");
const button = document.querySelector(".js-button");
const volume = document.querySelector(".js-volume");

video.muted = false;

const handleVidelClick = () => {
    if(video.paused){
        video.play();
        button.innerHTML = "■";
    } else {
        video.pause();
        button.innerHTML = "▶";
    }
};

const handleVolumeClick = () => {
    if(video.muted){
        video.muted = false;
        volume.innerHTML = "♬";
    } else {
        video.muted = true;
        volume.innerHTML = "〓";
    }
}


const handleWindowScroll = () => {
    const scrollY = window.scrollY;

    if(scrollY > 150){
        navigation.classList.add(SCROLLED_CLASS);
    } else{
        navigation.classList.remove(SCROLLED_CLASS);
    }
};

volume.addEventListener("click", handleVolumeClick);
video.addEventListener("click", handleVidelClick);
window.addEventListener("scroll", handleWindowScroll);

