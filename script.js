let lang = "french"; // Default language

function updateTexts(lang) {
  fetch(`${lang}.json`).then(function (response) {
    response.json().then(function (data) {
      Object.keys(data).forEach(function (key) {
        document.querySelector("#" + key).innerHTML = data[key];
      });
    });
  });
}

updateTexts(lang);

const buttons = document.querySelectorAll(".lang-btn");

buttons.forEach(function (button) {
  button.addEventListener("click", () => {
    const selectedLang = button.getAttribute("data-language");
    updateTexts(selectedLang);
  });
});

// Load Projects
async function loadProjects() {
  const response = await fetch("./data/projects.json");
  const projects = await response.json();

  projects.reverse();

  const projectsContainer = document.querySelector(".projects-container");

  projects.forEach((project) => {
    const projectElement = document.createElement("div");

    projectElement.classList.add("project-card");

    projectElement.innerHTML = `
            <img
                src="${project.cover}"
                alt="${project.title}"
                loading="lazy"
            >

            <div class="project-information">
              <h3>${project.title}</h3>
              <p>${project.shortDescription}</p>
              <button
                  class="project-button"
                  data-id="${project.id}"
              >
                  Voir les détails du projet
              </button>
            </div>
        `;

    projectsContainer.appendChild(projectElement);
  });
}

loadProjects();

// Load Experiences
async function loadExperiences() {
  const response = await fetch("./data/experiences.json");
  const experiences = await response.json();

  const experiencesContainer = document.querySelector(".experiences-container");

  experiences.forEach((experience) => {
    const experienceElement = document.createElement("div");

    experienceElement.classList.add("experience-card");

    experienceElement.innerHTML = `
            <div class="experience-date">
              <p>${experience.date}</p>
            </div>
            <div class="experience-header">
                <h3>${experience.title}</h3>
                <p>${experience.location}</p>
            </div>
            <p class="experience-description">${experience.description}</p>
        `;

    experiencesContainer.appendChild(experienceElement);
  });
}

loadExperiences();

// Load Certifications
async function loadCertifications() {
  const response = await fetch("./data/certifications.json");
  const certifications = await response.json();

  const certificationsContainer = document.querySelector(
    ".certifications-container",
  );

  certifications.forEach((certification) => {
    const certificationElement = document.createElement("div");

    certificationElement.classList.add("certification-card");

    certificationElement.innerHTML = `
            <h3 class="certification-title">${certification.title}</h3>

            <p>${certification.description}</p>

            <a
                href="${certification.link}"
                target="_blank"
                rel="noopener"
                class="certification-link"
            >
                Lien vers la certification
            </a>
        `;

    certificationsContainer.appendChild(certificationElement);
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
  button.style.opacity = "0";
});

video.addEventListener("pause", () => {
  button.style.opacity = "1";
});

video.addEventListener("ended", () => {
  button.style.opacity = "1";
  button.textContent = "▶";
});

videoContainer.addEventListener("mouseenter", () => {
  if (!video.paused) {
    button.style.opacity = "1";
  }
});

videoContainer.addEventListener("mouseleave", () => {
  if (!video.paused) {
    button.style.opacity = "0";
  }
});
