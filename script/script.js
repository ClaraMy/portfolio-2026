// Sidepanel Mobile
const burger = document.querySelector(".burger-menu");
const sidePanel = document.querySelector(".side-panel");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".button-close");

function openMenu() {
  sidePanel.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  sidePanel.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
}

burger.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".side-panel a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Load Projects
async function loadProjects() {
  const response = await fetch("./json/projects.json");
  const projects = await response.json();

  projects.reverse();

  const projectsContainer = document.querySelector(".projects-container");

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    const imageLink = document.createElement("a");
    imageLink.href = `project.html?id=${project.id}`;
    imageLink.setAttribute("aria-label", `Voir le projet ${project.title}`);

    const img = document.createElement("img");
    img.src = project.cover;
    img.setAttribute("aria-hidden", "true");
    img.alt = project.title;
    img.loading = "lazy";

    imageLink.appendChild(img);

    const information = document.createElement("div");
    information.classList.add("project-information");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.shortDescription;

    const link = document.createElement("a");
    link.href = `project.html?id=${project.id}`;
    link.textContent = "Voir les détails du projet";

    const srOnly = document.createElement("span");
    srOnly.classList.add("visually-hidden");
    srOnly.textContent = ` : ${project.title}`;

    link.appendChild(srOnly);

    information.appendChild(title);
    information.appendChild(description);
    information.appendChild(link);

    projectCard.appendChild(imageLink);
    projectCard.appendChild(information);

    projectsContainer.appendChild(projectCard);
  });
}

loadProjects();

// Load Experiences
async function loadExperiences() {
  const response = await fetch("./json/experiences.json");
  const experiences = await response.json();

  const experiencesContainer = document.querySelector(".experiences-container");

  experiences.forEach((experience) => {
    const experienceCard = document.createElement("div");
    experienceCard.classList.add("experience-card");

    const dateContainer = document.createElement("div");
    dateContainer.classList.add("experience-date");

    const date = document.createElement("p");
    date.textContent = experience.date;

    dateContainer.appendChild(date);

    const experienceHeader = document.createElement("div");
    experienceHeader.classList.add("experience-header");

    const title = document.createElement("h3");
    title.textContent = experience.title;

    const location = document.createElement("p");
    location.textContent = experience.location;

    experienceHeader.appendChild(title);
    experienceHeader.appendChild(location);

    const description = document.createElement("p");
    description.classList.add("experience-description");
    description.textContent = experience.description;

    experienceCard.appendChild(dateContainer);
    experienceCard.appendChild(experienceHeader);
    experienceCard.appendChild(description);

    experiencesContainer.appendChild(experienceCard);
  });
}

loadExperiences();

// Load Certifications
async function loadCertifications() {
  const response = await fetch("./json/certifications.json");
  const certifications = await response.json();

  const certificationsContainer = document.querySelector(
    ".certifications-container",
  );

  certifications.forEach((certification) => {
    const certificationCard = document.createElement("div");
    certificationCard.classList.add("certification-card");

    const title = document.createElement("h3");
    title.classList.add("certification-title");
    title.textContent = certification.title;

    const description = document.createElement("p");
    description.textContent = certification.description;

    const link = document.createElement("a");
    link.href = certification.link;
    link.target = "_blank";
    link.rel = "noopener";
    link.classList.add("certification-link");

    link.append("Lien vers la certification");

    const srOnly = document.createElement("span");
    srOnly.classList.add("visually-hidden");
    srOnly.textContent = " (ouvre dans une nouvelle fenêtre)";

    link.appendChild(srOnly);

    certificationCard.appendChild(title);
    certificationCard.appendChild(description);
    certificationCard.appendChild(link);

    certificationsContainer.appendChild(certificationCard);
  });
}

loadCertifications();

// Video player

const video = document.querySelector("#cv-video");
const button = document.querySelector("#button-play");
const videoContainer = document.querySelector(".video-container");

button.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    button.textContent = "❚❚";
    button.setAttribute("aria-label", "Mettre la vidéo en pause");
  } else {
    video.pause();
    button.textContent = "▶";
    button.setAttribute("aria-label", "Lancer la vidéo");
  }
});

video.addEventListener("play", () => {
  button.classList.add("hidden");
});

video.addEventListener("pause", () => {
  button.classList.remove("hidden");
});

video.addEventListener("ended", () => {
  button.classList.remove("hidden");
  button.textContent = "▶";
});

videoContainer.addEventListener("mouseenter", () => {
  if (!video.paused) {
    button.classList.remove("hidden");
  }
});

videoContainer.addEventListener("mouseleave", () => {
  if (!video.paused) {
    button.classList.add("hidden");
  }
});
