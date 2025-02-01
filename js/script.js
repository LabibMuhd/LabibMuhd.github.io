let yearEL = document.querySelector(".year");
const btnScrollTo = document.querySelector(".btn--start");
const signUpSection = document.querySelector("#signup");
const allSections = document.querySelectorAll(".section");
const form = document.querySelector("#login");
const loginForm = document.querySelector("#popup");
const orderForm = document.querySelector("#pform");
const formContainer = document.querySelector("#popup-form");
const signUp = document.querySelector("#sign_up");
const contactUs = document.querySelector(".nav-cta");
const login = document.querySelector(".nav-login");
const close = document.querySelector(".popup__close");
const pass = document.querySelector("#pass");
const forgotPass = document.querySelector(".sign-link");
const fPass = document.querySelector("#fpass");
const btnOrder = document.querySelectorAll(".btn--order");
const popupClose = document.querySelectorAll(".popup__close");
// SET CURRENT YEAR
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

// REVEAL SECTIONS
// const revealSection = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   entry.target.classList.remove("section--hidden");
//   observer.unobserve(entry.target);
// };
// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });
// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
// });

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

// Create the IntersectionObserver
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

// Add the hidden class initially to all sections
allSections.forEach(function (section) {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});

// Check if any sections are already in view on page load
window.addEventListener("load", () => {
  allSections.forEach(function (section) {
    // Check if the section is already in view (using IntersectionObserver API)
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.15) {
      section.classList.remove("section--hidden");
    }
  });
});

// SIGN UP
signUp.addEventListener("submit", function (e) {
  e.preventDefault();
  loginForm.classList.remove("hidden");
  window.open("#popup", "_self");
});

// LOGIN
form.addEventListener("submit", function (e) {
  e.preventDefault();

  contactUs.classList.remove("hidden");
  login.classList.add("hidden");
  loginForm.classList.add("hidden");

  btnScrollTo.addEventListener("click", function (e) {
    window.open("#popup-form", "_self");
  });
});
forgotPass.addEventListener("click", function (e) {
  e.preventDefault();

  window.open("#forgotpass", "_self");
});
fPass.addEventListener("submit", function (e) {
  e.preventDefault();
  let html = `<div class="success-box u-margin-top-medium">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>

    <h2 class="heading-secondary u-margin-bottom-medium">Password reset link sent!</h2>
    <p class='hero-description'>Check your email for a link to reset your password</p>
  </div>`;
  // orderForm.replaceWith(html);
  fPass.insertAdjacentHTML("beforebegin", html);
  fPass.classList.toggle("hidden");
});
// SMOOTH SCROLLING
btnScrollTo.addEventListener("click", function (e) {
  signUpSection.scrollIntoView({ behavior: "smooth" });
});

// ORDER FORM
orderForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // formContainer.innerHTML = "";

  let html = `<div class="success-box u-margin-top-medium">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>

    <h2 class="heading-secondary u-margin-bottom-medium">Response recieved</h2>
  </div>`;
  // orderForm.replaceWith(html);
  orderForm.insertAdjacentHTML("beforebegin", html);
  orderForm.classList.toggle("hidden");
});

// Slider
const slider = function () {
  const slides = document.querySelectorAll(".item");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let curSlide = 0;
  const maxSlide = slides.length;
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${105 * (i - slide)}%)`)
    );
  };
  const init = function () {
    goToSlide(0);
  };

  init();
  // move to ;next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };
  // move to prev slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};
slider();
// ORDER button
btnOrder.forEach(function (order) {
  order.addEventListener("click", function (e) {
    if (!login.classList.contains("hidden")) {
      signUpSection.scrollIntoView({ behavior: "smooth" });
    } else {
      e.preventDefault();
      window.open("#popup-form", "self");
    }
  });
});
