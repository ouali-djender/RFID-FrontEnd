document.addEventListener("DOMContentLoaded", () => {
    const projectContainer = document.querySelector(".project-cards");

    // Sample projects data
    const projects = [
        { title: "Project 1", description: "Description of Project 1" },
        { title: "Project 2", description: "Description of Project 2" },
        { title: "Project 3", description: "Description of Project 3" },
    ];

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectContainer.appendChild(projectCard);
    });
});

document.getElementById('get-started').addEventListener('click', function() {
    window.location.href = 'http://localhost:3001';  // URL for the react application
});

