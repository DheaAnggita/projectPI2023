const PROJECTS = 'https://6565fad2eb8bb4b70ef2b86d.mockapi.io/api/projectpi/users/3/project'

document.addEventListener("DOMContentLoaded", async function () {
    const projectList = document.getElementById("list-card-mitra");

    try {
        // Ambil data proyek dari API
        const projects = await fetchProjectData();

        // Iterasi melalui data proyek dan buat card proyek secara dinamis
        for (const project of projects) {
            // console.log(project)

            // Buat elemen card proyek
            const projectCard = createProjectCard(project);

            // Tambahkan card proyek ke dalam container
            projectList.appendChild(projectCard);

            // Tambahkan event listener untuk setiap card proyek
            addClickListener(projectCard, project.id);
            
        }
    } catch (error) {
        console.error("Error:", error);
    }
});

// Fungsi untuk mengambil data proyek dari API
async function fetchProjectData() {
    const response = await fetch(PROJECTS);
    const projects = await response.json();
    // console.log(projects)
    return projects;
}

// Fungsi untuk membuat elemen card proyek
function createProjectCard(project) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("col");
    projectCard.innerHTML = `
        <div class="card h-100"> 
            <img src="${project.picture}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
                <a href="detailProject.html?id=${project.id}"><h5 class="card-title">${project.title}</h5></a>
                <p class="card-text truncate-text">${project.description}</p>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">by ${project.city}</small>
            </div>
        </div>
    `;
    return projectCard;
}

// Fungsi untuk menambahkan event listener pada card proyek
function addClickListener(element, projectId) {
    element.addEventListener('click', () => {
      // Navigasi ke halaman detail proyek dengan menyertakan ID proyek dalam URL
      window.location.href = `detailProject.html?id=${projectId}`;
    });
  }