// set up data
const projectTitle = document.querySelector("#project-title");
const projectSubtitle = document.querySelector("#project-subtitle");
const projectBanner = document.querySelector("#project-banner");
const projectContent = document.querySelector(".project-content");
const projectInfoText = document.querySelector(".project-info-text");
const projectLinks = document.querySelector(".project-links");

function showProject(project) {
  // show hero
  projectTitle.textContent = project.title;
  projectSubtitle.textContent = project.shortDescription;
  projectBanner.src = project.image;
  projectBanner.alt = project.title;

  // show information
  projectInfoText.innerHTML = `
        <p><span class="highlight">Date :</span> du ${project.infos.dateStart} au ${project.infos.dateEnd}</p>
        <p><span class="highlight">Type :</span> ${project.infos.type}</p>
        <p><span class="highlight">Contexte :</span> ${project.infos.context}</p>
        <p><span class="highlight">Logiciels :</span> ${project.infos.tools.join(", ")}</p>
    `;

  // show links
  if (project.links) {
    project.links.forEach((link) => {
      projectLinks.innerHTML = `
        <a
            href="${link.url}"
            target="_blank"
            rel="noopener"
        >
            Lien ${link.label}
            <span class="visually-hidden">
                (ouvre dans une nouvelle fenêtre)
            </span>
        </a>
    `;
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
      section.appendChild(img);
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

    projectContent.appendChild(section);
  });
}

async function loadProject() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  const response = await fetch("./json/projects.json");
  const projects = await response.json();

  const project = projects.find((project) => project.id === id);

  if (!project) {
    projectContent.innerHTML = "<p>Projet introuvable.</p>";
    return;
  }

  showProject(project);
}

loadProject();
