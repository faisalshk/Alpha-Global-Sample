document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  const nextArrow = document.querySelector(".arrow.right");
  const prevArrow = document.querySelector(".arrow.left");

  nextArrow.addEventListener("click", function () {
    goToSlide(currentSlide + 1);
  });

  prevArrow.addEventListener("click", function () {
    goToSlide(currentSlide - 1);
  });

  function goToSlide(index) {
    const activeSlideHeroText =
      slides[currentSlide].querySelector(".hero_text");
    activeSlideHeroText.style.opacity = 0;
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }

    slides[currentSlide].classList.remove("active--slide");
    slides[index].classList.add("active--slide");
    currentSlide = index;

    setTimeout(() => {
      const activeSlideHeroText =
        slides[currentSlide].querySelector(".hero_text");
      activeSlideHeroText.style.opacity = 1;
    }, 500); // Adjust the delay time as needed
  }

  setTimeout(() => {
    const activeSlideHeroText =
      slides[currentSlide].querySelector(".hero_text");
    activeSlideHeroText.style.opacity = 1;
  }, 1000); // Adjust the delay time as needed

  setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 4000);
});
