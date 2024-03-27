"use strict";

// data

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

////////////////////////////////////////////////////////////////////////////////////////////////////
// Elements
const bookBtn = document.querySelector(".book-btn");
const navLinks = document.querySelector(".nav__links");
const cardBtn = document.querySelectorAll(".card-btn");

const tourContainer = document.querySelector(".wrapper");
const cardCarousal = document.querySelector(".carousel");
const card = document.querySelector(".card");

const reviewCarousal = document.querySelector(".carousel-review");

const emailForm = document.getElementById("emailForm");
const submitButton = document.querySelector("#submitButton");
const loader = document.querySelector("#loader");

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
            `;

    cardCarousal.insertAdjacentHTML("afterbegin", html);
  });
};

displayTours(tourData);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

const displayReview = async function (reviews) {
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//sticky nav

// Sticky navigation: Intersection Observer API
const nav = document.querySelector(".nav");

const header = document.querySelector(".main-header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting && window.innerWidth > 800)
    nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////
// Element

////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function to handle setup and functionality of carousels
function setupCarousel(
  wrapperSelector,
  carouselSelector,
  cardSelector,
  autoPlayDelay
) {
  const wrapper = document.querySelector(wrapperSelector);
  const carousel = document.querySelector(carouselSelector);
  const firstCardWidth = carousel.querySelector(cardSelector).offsetWidth;
  const carouselChildrens = [...carousel.children];

  let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;

  // Get the number of cards that can fit in the carousel at once
  const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

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

  // Scroll the carousel at appropriate position to hide first few duplicate cards on Firefox
  carousel.classList.add("no-transition");
  carousel.scrollLeft = carousel.offsetWidth;
  carousel.classList.remove("no-transition");

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
    // Autoplay the carousel after the specified delay
    timeoutId = setTimeout(
      () => (carousel.scrollLeft += firstCardWidth),
      autoPlayDelay
    );
  };
  autoPlay();

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("scroll", infiniteScroll);
  wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  wrapper.addEventListener("mouseleave", autoPlay);
}

// Call the function for the main carousel
setupCarousel(".wrapper", ".carousel", ".card", 2500);

// Call the function for the gallery carousel
setupCarousel(".wrapper-gallery", ".carousel-gallery", ".card-gallery", 1000);

////////////////////////////////////////////////////////////////////////////////////////////////////////
// form submission

emailForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  // Get form input values
  const name = document.getElementById("nameInput").value;
  const phone = document.getElementById("phoneInput").value;
  const email = document.getElementById("emailInput").value;
  const interest = document.getElementById("interestInput").value;

  // Show loader
  loader.classList.remove("hidden");
  submitButton.style.display = "none";

  // Send form data to the server to handle email sending
  fetch("/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, phone, email, interest }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Email sent successfully!");
        // Clear the form fields after successful submission
        emailForm.reset();
      } else {
        throw new Error("Failed to send email");
      }
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    })
    .finally(() => {
      // Hide loader
      loader.classList.add("hidden");
      submitButton.style.display = "block";
    });
});

///////////////////////////////////////////////////////////////////////////////////////////
//smooth scrolling
navLinks.addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

bookBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("book-btn")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

cardBtn.forEach((btn) => {
  // console.log("clicked");
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("card-btn")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
});
