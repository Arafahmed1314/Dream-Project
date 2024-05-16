const bars = document.querySelector(".fa-bars");
const ul = document.querySelector(".nav-right ul");
bars.addEventListener("click", () => {
  // console.log(ul);
  ul.classList.toggle("res-menu");
});

function CreateCourse(URL, courseTitle, p, button) {
  // let randomHours = Math.floor(Math.random() * 10000); // Generate a random integer up to 10000
  let html = `
    <div class="course-card">
    <div class="course-img">
        <img src="${URL}" alt>
    </div>
    <div class="course-desc">
        <h1>${courseTitle}</h1>
        <p>${p}</p>
            <button class="course-btn">${button}</button>
    </div>
</div>
    `;
  document.querySelector(".course-wrapper").innerHTML += html;
}
CreateCourse(
  "/cse.avif",
  "CSE ",
  " amr sonar bangla ami tomary vlobasi chirodin tomar akash tomar batas ",
  "View More"
);
CreateCourse(
  "/english.avif",
  "ENGLISH ",
  " amr sonar bangla ami tomary vlobasi chirodin tomar akash tomar batas ",
  "View More"
);
CreateCourse(
  "/phy.avif",
  "PHYSICS ",
  " amr sonar bangla ami tomary vlobasi chirodin tomar akash tomar batas ",
  "View More"
);
CreateCourse(
  "/chem.avif",
  "CHEMISTRY ",
  " amr sonar bangla ami tomary vlobasi chirodin tomar akash tomar batas ",
  "View More"
);
CreateCourse(
  "/math.avif",
  "MATHMATICS ",
  " amr sonar bangla ami tomary vlobasi chirodin tomar akash tomar batas ",
  "View More"
);
CreateCourse(
  "/algorithm.avif",
  "ALGORITHM ",
  " amr sonar bangla ami tomary vlobasi chirodin tomar akash tomar batas ",
  "View More"
);

const scrollContainer = document.querySelector(".course-wrapper");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

// scrollContainer.addEventListener("wheel", (e) => {
//   e.preventDefault();
//   const delta = e.deltaY;
//   smoothScroll(scrollContainer, delta > 0 ? 320 : -320, 300); // Adjust duration (300ms) as needed
// });

leftArrow.addEventListener("click", () => {
  smoothScroll(scrollContainer, -300, 300); // Adjust duration (300ms) as needed
});

rightArrow.addEventListener("click", () => {
  smoothScroll(scrollContainer, 300, 300); // Adjust duration (300ms) as needed
});

function smoothScroll(element, distance, duration) {
  const start = element.scrollLeft;
  const startTime = performance.now();

  function scrollStep(timestamp) {
    const currentTime = timestamp || performance.now();
    const progress = Math.min((currentTime - startTime) / duration, 1);

    element.scrollLeft = start + distance * progress;

    if (progress < 1) {
      window.requestAnimationFrame(scrollStep);
    }
  }
  window.requestAnimationFrame(scrollStep);
}

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
