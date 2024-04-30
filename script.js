
//Wave Animation
// Get the text container
const textContainer = document.querySelector('.text-container');

// Get the width of the text container
const containerWidth = textContainer.offsetWidth;

// Get the width of the individual text items
const textItems = document.querySelectorAll('.text');
const textWidth = textItems[0].offsetWidth;

// Calculate the delay needed for one cycle
const animationDuration = 10; // seconds
const delayPerItem = (textWidth + containerWidth) / containerWidth * animationDuration * 1000;

// Function to reset animation
function resetAnimation() {
  textContainer.style.animation = 'none';
  void textContainer.offsetWidth; // Trigger reflow
  textContainer.style.animation = `scroll ${delayPerItem / 500}s linear infinite`;
}

// Call resetAnimation when animation ends
textContainer.addEventListener('animationiteration', resetAnimation);

// Initial call to start animation
resetAnimation();



//Carousel
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth; 
  console.log("next")
});
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
  console.log("previous")
});



//button
document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('button');

  // Function to toggle button color
  function toggleColor() {
    button.classList.toggle('clicked');
  }

  // Add click event listener to the button
  button.addEventListener('click', toggleColor);
});

