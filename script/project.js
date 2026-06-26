const projectTitle = document.querySelector("#project-title");
const projectSubtitle = document.querySelector("#project-subtitle");
const projectBanner = document.querySelector("#project-banner");
const projectContent = document.querySelector(".project-content");
const projectInfoText = document.querySelector(".project-info-text");
const projectLink = document.querySelector(".project-link");

function showProject(project) {
    projectTitle.textContent = project.title;
    projectSubtitle.textContent = project.shortDescription;
    projectBanner.src = project.image;
    projectBanner.alt = project.title;

    projectInfoText.innerHTML = `
        <p><span class="highlight">Date :</span> du ${project.infos.dateStart} au ${project.infos.dateEnd}</p>
        <p><span class="highlight">Type :</span> ${project.infos.type}</p>
        <p><span class="highlight">Contexte :</span> ${project.infos.context}</p>
        <p><span class="highlight">Logiciels :</span> ${project.infos.tools.join(", ")}</p>
    `;

    projectLink.innerHTML = `
        
    `;


}
