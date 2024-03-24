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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const tourData = [
  {
    name: "Taj Mahal",
    image: "./assets/agra_1.jpg",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
  },
  {
    name: "Taj Mahal",
    image: "./assets/agra_1.jpg",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
  },
  {
    name: "Taj Mahal",
    image: "./assets/agra_1.jpg",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
  },
  {
    name: "Taj Mahal",
    image: "./assets/agra_1.jpg",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
  },
  {
    name: "Taj Mahal",
    image: "./assets/agra_1.jpg",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
  },
  {
    name: "Taj Mahal",
    image: "./assets/agra_1.jpg",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
  },
  {
    name: "Taj Mahal",
    image: "./assets/agra_1.jpg",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
  },
  {
    name: "Taj Mahal",
    image: "./assets/agra_1.jpg",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
  },
];

const reviewData = [
  {
    name: "Meenaxi Dhariwal",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
    stars: 5,
    image: "./assets/Review_img.png",
  },
  {
    name: "Meenaxi Dhariwal",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
    stars: 5,
    image: "./assets/Review_img.png",
  },

  {
    name: "Meenaxi Dhariwal",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
    stars: 5,
    image: "./assets/Review_img.png",
  },
  {
    name: "Meenaxi Dhariwal",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
    stars: 5,
    image: "./assets/Review_img.png",
  },
  {
    name: "Meenaxi Dhariwal",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
    stars: 5,
    image: "./assets/Review_img.png",
  },
  {
    name: "Meenaxi Dhariwal",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptatum tenetur laborum dolorum laboriosam pariatur aspernatur debitis accusamus dicta harum consequatur sapiente quos deserun temporibus, obcaecati molestias. Amet, adipisci fugit? ",
    stars: 5,
    image: "./assets/Review_img.png",
  },
];

//////////////////////////////////////////////////////////////////////////
// Element

const tourContainer = document.querySelector(".wrapper");
const cardCarousal = document.querySelector(".carousel");
const card = document.querySelector(".card");

const displayTours = function (tours) {
  cardCarousal.innerHTML = "";

  tours.forEach((tour) => {
    const html = `
    <li class="card">
            <div class="img">
              <img src=${tour.image} alt="img" draggable="false" />
            </div>
            <h2 class="my-custom-font font1">${tour.name}</h2>
            <span class="my-custom-font"
              >${tour.description}</span
            >
          </li>
    `;

    cardCarousal.insertAdjacentHTML("afterbegin", html);
  });
};

displayTours(tourData);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

const reviewCarousal = document.querySelector(".carousel-review");

const displayReview = function (reviews) {
  reviewCarousal.innerHTML = "";
  reviews.forEach((review) => {
    const html = `
    <li class="card-review">
    <div class="img">
      <img src=${review.image} alt="img" draggable="false" />
    </div>
    <span> ⭐⭐⭐⭐⭐ </span>
    <h2>${review.name}</h2>
    <span
      >${review.review}</span
    >
  </li>
    `;
    reviewCarousal.insertAdjacentHTML("afterbegin", html);
  });
};
displayReview(reviewData);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// gallery auto scroll

const wrapperGallery = document.querySelector(".wrapper-gallery");
const carouselGallery = document.querySelector(".carousel-gallery");
const firstCardWidthGallery =
  carouselGallery.querySelector(".card-gallery").offsetWidth;

const carouselGalleryChildrens = [...carouselGallery.children];

// let isDragging = false,
//   isAutoPlay = true,
//   startX,
//   startScrollLeft,
//   timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerViewGallery = Math.round(
  carouselGallery.offsetWidth / firstCardWidthGallery
);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselGalleryChildrens
  .slice(-cardPerViewGallery)
  .reverse()
  .forEach((card) => {
    carouselGallery.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselGalleryChildrens.slice(0, cardPerViewGallery).forEach((card) => {
  carouselGallery.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carouselGallery.classList.add("no-transition");
carouselGallery.scrollLeft = carouselGallery.offsetWidth;
carouselGallery.classList.remove("no-transition");

const dragStartGallery = (e) => {
  isDragging = true;
  carouselGallery.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carouselGallery.scrollLeft;
};

const draggingGallery = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carouselGallery.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStopGallery = () => {
  isDragging = false;
  carouselGallery.classList.remove("dragging");
};

const infiniteScrollGallery = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carouselGallery.scrollLeft === 0) {
    carouselGallery.classList.add("no-transition");
    carouselGallery.scrollLeft =
      carousel.scrollWidth - 2 * carouselGallery.offsetWidth;
    carouselGallery.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carouselGallery.scrollLeft) ===
    carouselGallery.scrollWidth - carouselGallery.offsetWidth
  ) {
    carouselGallery.classList.add("no-transition");
    carouselGallery.scrollLeft = carouselGallery.offsetWidth;
    carouselGallery.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlayGallery();
};

const autoPlayGallery = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(
    () => (carouselGallery.scrollLeft += firstCardWidthGallery),
    1000
  );
};
autoPlayGallery();

carouselGallery.addEventListener("mousedown", dragStartGallery);
carouselGallery.addEventListener("mousemove", draggingGallery);
document.addEventListener("mouseup", dragStopGallery);
carouselGallery.addEventListener("scroll", infiniteScrollGallery);
wrapperGallery.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapperGallery.addEventListener("mouseleave", autoPlayGallery);
