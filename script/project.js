// set up data
const projectTitle = document.querySelector("#project-title");
const projectShortDescription = document.querySelector(
  "#project-short-description",
);
const projectBanner = document.querySelector("#project-banner");
const projectDescription = document.querySelector(".project-description");
const projectInfoText = document.querySelector(".project-info-text");
const projectLinks = document.querySelector(".project-links");

function showProject(project) {
  document.title = `${project.title} - Many Clara Portfolio`;

  // show hero
  projectTitle.textContent = project.title;
  projectShortDescription.textContent = project.shortDescription;
  projectBanner.src = project.banner;
  projectBanner.alt = project.title;

  // show information
  const infos = [
    { label: "Nom", value: project.title },
    {
      label: "Date",
      value: `du ${project.infos.dateStart} au ${project.infos.dateEnd}`,
    },
    { label: "Type", value: project.infos.type },
    { label: "Contexte", value: project.infos.context },
    { label: "Logiciels", value: project.infos.tools.join(", ") },
  ];

  infos.forEach((info) => {
    const p = document.createElement("p");
    const span = document.createElement("span");
    span.classList.add("highlight");
    span.textContent = `${info.label} : `;
    p.appendChild(span);
    p.append(info.value);

    projectInfoText.appendChild(p);
  });

  // show links
  if (project.links) {
    project.links.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener";

      a.append(`Lien ${link.label}`);

      const srOnly = document.createElement("span");
      srOnly.classList.add("visually-hidden");
      srOnly.textContent = " (ouvre dans une nouvelle fenêtre)";

      a.appendChild(srOnly);

      projectLinks.appendChild(a);
    });
  }

  // show content
  project.content.forEach((block) => {
    const section = document.createElement("div");
    section.classList.add("project-section");

    if (block.type === "text") {
      const p = document.createElement("p");
      p.textContent = block.text;
      section.appendChild(p);
    }

    if (block.type === "image") {
      const img = document.createElement("img");
      img.src = block.src;
      img.ariaHidden = "true";
      img.alt = block.alt;
      img.loading = "lazy";
      section.appendChild(img);
    }

    if (block.type === "link") {
      if (block.text) {
        const p = document.createElement("p");
        p.textContent = block.text;
        section.appendChild(p);
      }

      const a = document.createElement("a");
      a.href = block.url;
      a.target = "_blank";
      a.rel = "noopener";

      a.append(block.url);

      const srOnly = document.createElement("span");
      srOnly.classList.add("visually-hidden");
      srOnly.textContent = " (ouvre dans une nouvelle fenêtre)";

      a.appendChild(srOnly);

      section.appendChild(a);
    }

    if (block.type === "list") {
      if (block.text) {
        const p = document.createElement("p");
        p.textContent = block.text;
        section.appendChild(p);
      }

      const ul = document.createElement("ul");

      block.items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });

      section.appendChild(ul);
    }

    projectDescription.appendChild(section);
  });

  const linkMore = document.createElement("a");
  linkMore.href = "index.html#projects-section";
  linkMore.textContent = "Voir d'autres projets";
  projectDescription.appendChild(linkMore);
}

async function loadProject() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  const response = await fetch("./json/projects.json");
  const projects = await response.json();

  const project = projects.find((project) => project.id === id);

  if (!project) {
    projectTitle.textContent = "Projet introuvable.";
    return;
  }

  showProject(project);
}

loadProject();
