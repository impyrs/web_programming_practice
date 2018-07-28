const prevBtn = document.querySelector(".js-prevBtn");
const nextBtn = document.querySelector(".js-nextBtn");
const slideList = document.querySelector(".js-slideList");
const slides = slideList.querySelectorAll("li");
const slideLength = Array.from(slides).length;
const slider = document.querySelector(".js-slider");

const ACTIVE_CLASS = "active__slide";
const NUM_OF_SLIDES= Array.from(slides).length;

let currentSlideNumber = 1;



const getCurrentSlide = () => {
    return slideList.querySelector(`li:nth-child(${currentSlideNumber})`);
};

let currentSlide = getCurrentSlide();

const handlePrevClick = () => {
    currentSlide.classList.remove(ACTIVE_CLASS);
    if(currentSlideNumber == 1)
    {
        currentSlideNumber = 5;
    }
    currentSlideNumber--;
    currentSlide = getCurrentSlide();
    currentSlide.classList.add(ACTIVE_CLASS);

};

const handleNextClick = () => {
    currentSlide.classList.remove(ACTIVE_CLASS);
    if (currentSlideNumber == NUM_OF_SLIDES)
    {
        currentSlideNumber = 0;
    }
    currentSlideNumber++;
    
    currentSlide = getCurrentSlide();
    currentSlide.classList.add(ACTIVE_CLASS);
};

currentSlide.classList.add(ACTIVE_CLASS);


// Slide에 마우스를 올리면 Slide의 움직임을 멈추는 기능
let slideShowInterval = null;

const killInterval = () => {
    //console.log("Kill Kill!")
    clearInterval(slideShowInterval);
};

const createInterval = () => {
    //console.log("Start Interval!");
    slideShowInterval = setInterval(handleNextClick, 2000);
}

createInterval();

nextBtn.addEventListener("click", handleNextClick);
prevBtn.addEventListener("click", handlePrevClick);

slider.addEventListener("mouseover", killInterval);
slider.addEventListener("mouseout", createInterval);


