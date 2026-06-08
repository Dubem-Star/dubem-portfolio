const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".gen-nav-link li a");
const heroSection = document.getElementById("heroContent");
const heroSectionContainer = document.getElementById("home");
const navbar = document.getElementById("navbar");
const skillsContainer = document.getElementById("skills");
const navBrand = document.getElementById("navBrand");
const viewProjectBtn = document.getElementById("viewProjectBtn");
const projectsContainer = document.getElementById("projectsContainer");
const projectWrapper = document.getElementById("projectWrapper");

const skills = [
  {
    icon: "media/skills_icons/full_stack.png",
    name: "Full-Stack Web Applications ",
    description:
      "I build ready-to-use, end-to-end web platforms that bridge the gap between powerful backend logic and beautiful user interfaces that keeps your users engaged.",
    dataset: "fullstack",
  },

  {
    icon: "media/skills_icons/database_management.png",
    name: "Database Management",
    description:
      "Designing  scalable, secure database structures that keep your data organized and ready to grow with your application.",

    dataset: "database",
  },

  {
    icon: "media/skills_icons/secure_authentication.png",
    name: "Secure Authentication",
    description:
      "Implementation of industry-standard authentication systems that protect user data and restrict access to sensitive areas.",

    dataset: "secure_authentication",
  },

  {
    icon: "media/skills_icons/tools_stack.png",
    name: "Tool Stack",
    description:
      "I work with modern technologies like React and Node to build scalable applications using efficient, maintainable workflows.",

    dataset: "tool_stack",
  },

  {
    icon: "media/skills_icons/responsive_layout.png",
    name: "Responsive & Performance",

    description:
      "I create mobile-first, high-performance interfaces that look professional and run smoothly on every device.",

    dataset: "responsive_layout",
  },

  {
    icon: "media/skills_icons/app_testing.png",
    name: "Testing and Quality Assurance",
    description:
      "Rigorous testing and debugging applications to ensure stability, security, and a reliable user experience.",

    dataset: "testing",
  },
];

// ****************Hamburger Logic**********************
// ****************Hamburger Logic**********************

const menu = hamburger.innerHTML;
hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
  overlay.classList.toggle("show");
  navUl.classList.contains("show")
    ? (hamburger.innerHTML =
        "<img class='w-100' src='media/site_icon/close (1).png' />")
    : (hamburger.innerHTML = menu);

  console.log(navUl);
});

// ****************Scroll Navbar Shadow Logic**********************
// ****************Scroll Navbar Shadow Logic**********************

window.addEventListener("scroll", () => {
  const isAtTop = heroSection.getBoundingClientRect().top <= 90;
  const isAfterHero = skillsContainer.getBoundingClientRect().top <= 90;

  navbar.classList.toggle("smooth-bottom", isAtTop);
  // if(isAfterHero){
  //   navbar.classList.remove("smooth-bottom")

  // }
  navbar.classList.toggle("dark-border", isAfterHero);
});

// ****************Scroll Navlink Logic**********************
// ****************Scroll Navlink Logic**********************
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 5)
      current = section.getAttribute("id");
  });

  navLinks.forEach((link) => {
    link.classList.remove(
      "global-gradient-navlink",
      "global-gradient-navlink-borderbottom",
    );
    if (link.getAttribute("href") === `${current}`) {
      link.classList.add(
        "global-gradient-navlink",
        "global-gradient-navlink-borderbottom",
      );
    }
  });
});

for (let link of navLinks) {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.getAttribute("href");
    const section = document.getElementById(id);
    window.scrollTo({
      top: section.offsetTop - 35,
      behavior: "smooth",
    });
  });
}

// DUBBY CLICK FUNCTION***************************************
// DUBBY CLICK FUNCTION***************************************
function DubbyClick(e) {
  e.preventDefault();

  if (e.currentTarget === navBrand) {
    const homePage = document.getElementById(navBrand.dataset.homePage);
    window.scrollTo({
      top: homePage.offsetTop - 86,
      behavior: "smooth",
    });
  } else if (e.currentTarget === viewProjectBtn) {
    const projectSection = document.getElementById(
      viewProjectBtn.getAttribute("href"),
    );
    window.scrollTo({
      top: projectSection.offsetTop - 35,
      behavior: "smooth",
    });
  }
}

navBrand.addEventListener("click", DubbyClick);
viewProjectBtn.addEventListener("click", DubbyClick);

// ****************Skills Section Logic**********************
// ****************Skills Section Logic**********************
const skillsSection = document.getElementById("skillsSection");

for (let skill of skills) {
  const skillBox = document.createElement("div");
  skillBox.classList.add("skill-box-wrapper");
  skillBox.dataset.service = skill.dataset;
  skillBox.innerHTML = `

  <div class="skill-box" >

  <img class="skill-background" src="media/backgrounds/white_background.jpg"/>

  <div class="skill-box-icon">
  <img src=${skill.icon} />
  </div>


<h1>${skill.name}</h1>

<div class="skill-box-description" >

<p class="service-description"> ${skill.description}</p>
</div>

  </div>



`;

  skillsSection.appendChild(skillBox);
}

const fullStackCard = document.querySelector("[data-service='fullstack']");
const databaseCard = document.querySelector("[data-service='database']");
const testingCard = document.querySelector("[data-service='testing']");

const desktopContHeight =
  fullStackCard.offsetHeight + databaseCard.offsetHeight + 40 + 16 + 150;
skillsSection.style.height = desktopContHeight + "px";

function setInitialContHeight() {
  const isMedium = window.innerWidth >= 767 && window.innerWidth <= 1100;

  const mediumContHeight =
    fullStackCard.offsetHeight +
    databaseCard.offsetHeight +
    testingCard.offsetHeight +
    10 +
    40 +
    180;

  skillsSection.style.height = isMedium
    ? `${mediumContHeight + "px"}`
    : `${desktopContHeight + "px"}`;
}

// **********DUBBY'S LIVE HEIGHT READER FUNCTIONN*****************
// **********DUBBY'S LIVE HEIGHT READER FUNCTIONN*****************

function DubbysliveHeightReader() {
  const isDesktop = window.innerWidth > 1200;
  const isMedium = window.innerWidth >= 767 && window.innerWidth <= 1100;
  const isMobile = window.innerWidth <= 767;

  const currentTestingCard = document.querySelector("[data-service='testing']");
  const currentfullStackCard = document.querySelector(
    "[data-service='fullstack']",
  );
  const currentdatabaseCard = document.querySelector(
    "[data-service='database']",
  );

  const currentMediumContHeight =
    currentdatabaseCard.offsetHeight +
    currentfullStackCard.offsetHeight +
    currentTestingCard.offsetHeight +
    10 +
    40 +
    100;

  const currentDesktopContHeight =
    currentfullStackCard.offsetHeight +
    currentdatabaseCard.offsetHeight +
    40 +
    16 +
    150;

  skillsSection.style.height = isMedium
    ? `${currentMediumContHeight + "px"}`
    : `${currentDesktopContHeight + "px"}`;
}
setInitialContHeight();
// liveHeightReader();
window.addEventListener("resize", DubbysliveHeightReader);

const bttCont = document.querySelector(".btt-container");
bttCont.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  console.log("CLICK");
});

window.addEventListener("scroll", () => {
  const isBottom = window.scrollY >= 1000;
  const isScreenCalm = window.innerWidth >= 968;

  bttCont.classList.toggle("show", isBottom && isScreenCalm);
});

// **********PROJECTS LOGIC SECTION*****************
// **********PROJECTS LOGIC SECTION*****************

const projects = [
  {
    name: "Clockaholic",
    description:
      "A digital e-commerce wrist watch and accessory store for genuine affordable luxury items from global brands.",
    link: "https://dubem-star.github.io/CLOCKAHOLIC/",
    previewImg: "media/page_snapshots/clockaholic.png",
    sourceCodeLink: "https://github.com/Dubem-Star/CLOCKAHOLIC",
  },

  {
    name: "90s Visuals",
    description:
      "A digital portfolio for a professional photographer, a collection of moments and stories captured through the lens.",
    link: "https://90svisuals.vercel.app/",
    previewImg: "media/page_snapshots/90's_visuals_project.png",
    sourceCodeLink: "https://github.com/Dubem-Star/90s-VISUALS",
  },

  {
    name: "Dubflix",
    description:
      "Dubflix is a Netflix inspired web application that showcases movies in a modern and responsive interface.",
    link: "https://dubflix-one.vercel.app/",
    previewImg: "media/page_snapshots/dubflix.png",
    sourceCodeLink: "https://github.com/Dubem-Star/DUBFLIX",
  },

  {
    name: "Sworv Clothings",
    description:
      " A full-scale digital storefront for an emerging clothing brand, Sworv Clothings.",
    link: "https://sworv-ng.vercel.app/",
    previewImg: "media/page_snapshots/sworv_shop_page.png",
    sourceCodeLink: "https://github.com/Dubem-Star/SWORV.NG",
  },

  {
    name: "The Duizz App",
    description:
      "An interactive, multi-stage educational application designed to test and track user knowledge.",
    link: "https://dubem-star.github.io/quizz-app/",
    previewImg: "media/page_snapshots/dubby_quizz_app.png",
    sourceCodeLink: "  https://github.com/Dubem-Star/quizz-app",
  },

  {
    name: "Dubby's To-do App",
    description:
      "A simple, web-based To-Do List app built with HTML, CSS, and JavaScript.",
    link: "https://dubem-star.github.io/to-do-list-app/",
    previewImg: "media/page_snapshots/todo_list_screenshot.png",
    sourceCodeLink: "https://github.com/Dubem-Star/to-do-list-app",
  },
];

for (let project of projects) {
  const projectCard = document.createElement("div");
  projectCard.classList.add(
    "col-sm-12",
    "col-md-6",
    "col-xl-3",
    "col-lg-6",
    "project-card",
  );
  projectCard.innerHTML = `
  
     <div class="img-cont">
                <img
                  src=${project.previewImg}
                  title=${project.name}
                />
              </div>
              <div class="description">
                <h3>${project.name}</h3>
                <p>
                  ${project.description}
                </p>

                <a
                  href=${project.link}
                  target="_blank"
                  class="btn view"
                  >View Project</a
                >
                <a
                  href=${project.link}
                  target="_blank"
                  class="btn fake view"
                  >View Project</a
                >

                    <a
                  href=${project.sourceCodeLink}  
                  target="_blank"
                  class="git fake view d-flex justify-content-center align-items-center w-25"
                  >
                  <img src="media/site_icon/github.png"  />
                  </a
                >
              </div>
  
  `;

  projectsContainer.appendChild(projectCard);
}

const viewMoreBtn = document.createElement("button");
viewMoreBtn.classList.add(
  "btn",
  "position-static",
  "view",
  "fake",
  "w-auto",
  "mt-4",
  "fs-6",
  "vm-btn",
);
viewMoreBtn.id = "viewMoreBtn";
viewMoreBtn.innerHTML = "View More";
projectWrapper.appendChild(viewMoreBtn);

const viewMore = document.getElementById("viewMoreBtn");
viewMore.addEventListener("click", () => {
  projectsContainer.classList.toggle("expand");
  const isExpanded = projectsContainer.classList.contains("expand");

  const isMobile = window.innerWidth <= 1100 && window.innerWidth > 720;
  const isPhone = window.innerWidth <= 570;

  setTimeout(() => {
    if (isExpanded) {
      const fifthCardDown = document.querySelector(
        `.project-card:nth-child(${isMobile ? 3 : 5})`,
      );
      fifthCardDown.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      if (isPhone) {
        const forthCard = document.querySelector(`.project-card:nth-child(4)`);
        forthCard.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else {
        projectsContainer.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, 20);
  viewMoreBtn.innerHTML = isExpanded ? "View Less" : "View More";
});

// **********CONTACT API SECTION*****************
// **********CONTACT API SECTION*****************
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const loading = document.getElementById("loading");
  loading.classList.add("show");
  const data = new FormData(contactForm);

  const contactData = {
    name: data.get("name"),
    email: data.get("email"),
    message: data.get("message"),
  };

  const sendForm = await fetch("/api/server", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });

  const response = await sendForm.json();
  if (response.status) {
    contactForm.reset();
    const contactStatus = document.getElementById("contactStatus");
    loading.classList.remove("show");
    contactStatus.classList.add("show");
    setTimeout(() => {
      contactStatus.classList.remove("show");
    }, 4000);
  } else {
    console.log(response.message);
  }
});
