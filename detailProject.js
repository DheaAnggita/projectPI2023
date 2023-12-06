const PROJECTS = `https://6565fad2eb8bb4b70ef2b86d.mockapi.io/api/projectpi/users/3/project/`

async function getProjectDetail(projectId) {
    const response = await fetch(`${PROJECTS}${projectId}`);
    const project = await response.json();
    console.log(project);
    return project;
}

// Fungsi untuk menampilkan detail proyek di halaman detail
async function displayProjectDetail() {
    // Dapatkan ID proyek dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    // Dapatkan detail proyek dari API berdasarkan ID
    const project = await getProjectDetail(projectId);

    // Tampilkan detail proyek di halaman detail
    const projectDetail = document.getElementById('projectDetail');
    projectDetail.innerHTML = `
    <div class="hero fink-color">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <img src="${project.picture}" class="img-fluid" alt="${project.title}" id="picture">
          </div>
          <div class="col-md-6 mt-5 mt-lg-0 mt-md-0 d-flex align-items-center">
            <div>
              <h2 id="title">${project.title}</h2>
              <p id="desc">${project.description}</p>
              <h5 id="amount">Jumlah Pendanaan : Rp ${project.funding_amount}</h5>
              <p id="duration">Durasi Kampanye : ${project.duration} Hari</p>
              <p id="city">Lokasi :  ${project.city},  ${project.province}</p>

              <button class="btn blue-bg text-light fw-bold mt-4"><a class="text-light text-decoration-none"
                  href="#penawaran">Dukung Project</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div>
      <div class="container py-5">
        <h2 class="text-center mb-5">Kenal Lebih Dekat Project Ini</h2>

        <nav id="navbar-example2" class="navbar bg-body-tertiary mb-3">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading1">Story</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading2">Mission</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading3">challenge</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading4">Risk</a>
            </li>
          </ul>
        </nav>
        <div class="">
          <hr>
        </div>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%"
          data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
          <h4 id="scrollspyHeading1">Our Story</h4>
          <p> ${project.background}</p>
          <h4 id="scrollspyHeading2">Mission Project</h4>
          <p> ${project.funding_mission}</p>
          <h4 id="scrollspyHeading3">Challange</h4>
          <p> ${project.funding_challenge}</p>
          <h4 id="scrollspyHeading4">Risk</h4>
          <p> ${project.funding_risk}</p>
        </div>
      </div>

    </div>

    <div class="px-5">
      <hr>
    </div>


    <div>
      <div class="container py-5" id="penawaran">
        <h2 class="text-center mb-5">Penawaran Reward Pendukung Project</h2>


        <div class="row row-cols-2 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Simple</h5>
                <p class="card-text"> ${project.simple_desc}</p>
                <a href="https://link.dana.id/minta/2tbo2h493ea" class="btn btn-primary">25.000</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Best</h5>
                <p class="card-text">${project.best_desc}</p>
                <a href="https://link.dana.id/minta/2tbo2m1njca" class="btn btn-primary">75.000</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Super</h5>
                <p class="card-text">${project.super_desc}</p>
                <a href="https://link.dana.id/minta/2tbo2q1zwk2" class="btn btn-primary">100.000</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Kind</h5>
                <p class="card-text">${project.kind_desc}</p>
                <a href="https://link.dana.id/minta/2tbo2v1akiq" class="btn btn-primary">500.000</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Angel</h5>
                <p class="card-text">${project.angel_desc}</p>
                <a href="https://link.dana.id/minta/2tbo2z1t03m" class="btn btn-primary">1.000.000</a>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
    
    
    `;
}

// Panggil fungsi untuk menampilkan detail proyek
displayProjectDetail();