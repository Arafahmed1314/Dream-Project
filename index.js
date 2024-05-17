const bars = document.querySelector(".fa-bars");
const ul = document.querySelector(".nav-right ul");
bars.addEventListener("click", () => {
  // console.log(ul);
  ul.classList.toggle("res-menu");
});

// Course section
var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// contact
function CreateContact(url, heading, heading_child) {
  let html2 = `
  <div class="overview-card">
  <div class="overview-img">
      <img src="${url}" alt>
  </div>
  <div class="overview-desc">
      <p>${heading}</p>
      <p>${heading_child}</p>

  </div>
</div>

`;
  document.querySelector(".overview-wrapper").innerHTML += html2;
}
CreateContact(
  "/learn.png",
  "Learn anything",
  "Explore any interest or trending topic, take prerequisites, and advance your skills"
);
CreateContact(
  "/money.png",
  "Save money",
  "Spend less money on your learning if you plan to take multiple courses this year"
);
CreateContact(
  "flexible.png",
  "Flexible learning",
  "Learn at your own pace, move between multiple courses, or switch to a different course"
);
CreateContact(
  "/certificates.png",
  "Unlimited certificates",
  "Earn a certificate for every learning program that you complete at no additional cost"
);
