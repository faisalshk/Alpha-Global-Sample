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

  const menuButton = document.querySelector(".menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-btn");

  // Toggle the active class on the mobile menu when the menu button is clicked
  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  closeBtn.addEventListener("click", (e) => {
    mobileMenu.classList.toggle("active");
  });
});
