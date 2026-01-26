const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("navLinks");
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-ul li a");
const heroSection = document.getElementById("heroContent");
const heroSectionContainer = document.getElementById("home");
const navbar = document.getElementById("navbar");

const skills = [
  {
    icon: "media/skills_icons/frontend_development.png",
    name: "Frontend Development",
    capabilities: [
      "HTML5 (semantic markup, accessibility-aware structure)",
      "CSS3 (Flexbox, Grid, responsive layouts, media queries, animations)",
      "Modern CSS techniques (clamp(), aspect-ratio, motion and interactions)",
      "JavaScript (ES6+ fundamentals, DOM manipulation, events, timing)",
      "React (components, props, state, hooks, conditional rendering)",
    ],
    dataset: "frontend",
  },

  {
    icon: "media/skills_icons/database_icon.png",
    name: "Databases and Data Handling",
    capabilities: [
      "MongoDB (document-based database design)",
      "Mongoose (schemas, models, queries)",
      "Data validation and schema design",
      "Basic data relationships",
      "LocalStorage (client-side persistence)",
    ],
    dataset: "databases",
  },

  {
    icon: "media/skills_icons/backend_development.png",
    name: "Backend Development",
    capabilities: [
      "Node.js (server-side JavaScript)",
      "Express.js (routing, middleware, request/response handling)",
      "RESTful APIs (CRUD operations)",
      "Authentication systems (signup/login, password hashing, sessions)",
      "Authorization logic (protected routes, auth guards)",
      "Server-side form handling and validation",
      "Asynchronous Programming (Promises, async/await)",
    ],
    dataset: "backend",
  },

  {
    icon: "media/skills_icons/tools_and_workflow.png",
    name: "Tools and Workflow",
    capabilities: [
      "Git & GitHub (version control, pushing projects)",
      "VS Code (extensions, debugging, integrated terminal)",
      "npm (package management)",
      "Postman (API testing)",
      "Environment configuration (dotenv, config setup)",
    ],
    dataset: "tools",
  },

  {
    icon: "media/skills_icons/ui_ux_awareness.png",
    name: "UI UX Awareness",
    capabilities: [
      "Responsive design thinking",
      "Mobile-first considerations",
      "Layout consistency and spacing",
      "Smooth user interactions and feedback",
    ],
    dataset: "UI/UX",
  },

  {
    icon: "media/skills_icons/engineering_mindset.png",
    name: "Engineering Mindset",
    capabilities: [
      "Strong problem-solving skills",
      "Willingness to learn deeply ",
      "Attention to detail",
      "Comfortable debugging complex UI behavior",
    ],
    dataset: "Engineering",
  },
];

// ****************Hamburger Logic**********************
// ****************Hamburger Logic**********************
hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

// ****************Scroll Navbar Shadow Logic**********************
// ****************Scroll Navbar Shadow Logic**********************
window.addEventListener("scroll", () => {
  const isAtTop = heroSection.getBoundingClientRect().top <= 86;

  navbar.classList.toggle("smooth-bottom", isAtTop);
});

// ****************Scroll Navlink Logic**********************
// ****************Scroll Navlink Logic**********************
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3)
      current = section.getAttribute("id");
  });

  navLinks.forEach((link) => {
    link.classList.remove(
      "global-gradient-navlink",
      "global-gradient-navlink-borderbottom",
    );
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add(
        "global-gradient-navlink",
        "global-gradient-navlink-borderbottom",
      );
    }
  });
});

// ****************Skills Section Logic**********************
// ****************Skills Section Logic**********************
const skillsSection = document.getElementById("skillsSection");

for (let skill of skills) {
  const skillBox = document.createElement("div");
  skillBox.classList.add("skill-box-wrapper");

  skillBox.innerHTML = `

  <div class="skill-box" data-skill=${skill.dataset}>
  
  <div class="skill-box-icon">
  <img src=${skill.icon} />
  </div>


<h1>${skill.name}</h1>

<div class="skill-box-lists" >
<ul>

${skill.capabilities
  .map(
    (item, index) =>
      `
  <li key="cap-${index}"> <span class ="bullet">•</span> <span class="text">${item}</span></li>
  `,
  )
  .join("")}

</ul>
</div>

  </div>



`;

  skillsSection.appendChild(skillBox);
}

const frontendCard = document.querySelector("[data-skill='frontend']");
const backendCard = document.querySelector("[data-skill='backend']");
const backendCardPlaceholder = backendCard.innerHTML;
const backendSkill = backendCardPlaceholder;
const toolsCard = document.querySelector("[data-skill='tools']");
const toolsCardPlaceholder = toolsCard.innerHTML;
const toolSkill = toolsCardPlaceholder;
const databaseCard = document.querySelector("[data-skill='databases']");
const databaseCardPlaceholder = databaseCard.innerHTML;
const databaseSkill = databaseCardPlaceholder;

const desktopContHeight =
  backendCard.offsetHeight + toolsCard.offsetHeight + 40 + 16 + 80 + 80;

skillsSection.style.height = desktopContHeight + "px";

const mobileContHeight =
  backendCard.offsetHeight +
  frontendCard.offsetHeight +
  toolsCard.offsetHeight +
  30 +
  80 +
  150;

// **********THE MOST POWERFULL FUNCTION EVER*****************

function DubbyScaler() {
  const isDesktop = window.innerWidth > 1200;
  const isMedium = window.innerWidth > 767 && window.innerWidth <= 1200;
  const isMobile = window.innerWidth <= 767;

  if (isDesktop) {
    toolsCard.innerHTML = toolSkill;
    backendCard.innerHTML = backendSkill;
  }

  skillsSection.style.height = isMedium
    ? `${mobileContHeight + "px"}`
    : `${desktopContHeight + "px"}`;

  if (isMedium) {
    if (toolsCard && backendCard) {
      toolsCard.innerHTML = isMedium ? backendCardPlaceholder : toolSkill;

      backendCard.innerHTML = isMedium ? toolsCardPlaceholder : backendSkill;

      databaseCard.innerHTML = databaseSkill;
    }
  }

  if (isMobile) {
    databaseCard.innerHTML = isMobile ? backendSkill : databaseSkill;
    backendCard.innerHTML = isMobile ? databaseSkill : backendSkill;
    toolsCard.innerHTML = toolSkill;
  }
}

DubbyScaler();
window.addEventListener("resize", DubbyScaler);
