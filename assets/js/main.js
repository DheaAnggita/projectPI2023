const getAllProject = () => {
    const element = document.querySelector('#card-mitra');
    let elmHTML = ""
    let nama = ""
    const url = new URL('https://6565fad2eb8bb4b70ef2b86d.mockapi.io/api/projectpi/users/3/project');
    url.searchParams.append('limit', 3);
    url.searchParams.append('page', 1);
    fetch(url, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    })
        .then(response => response.json())
        .then(data => {
            data?.map((elm) => {
                elmHTML += "<div class='col'>"
                elmHTML += "<div class='card h-100'>"
                elmHTML = elmHTML + "<img src='" + elm.picture + "' class='card-img-top' alt=''>"
                elmHTML += "<div class='card-body'>"
                elmHTML = elmHTML + "<a href='detailProject.html?id=" + elm.id + "'><h5 class='card-title'>" + elm.title + "</h5></a>"
                elmHTML = elmHTML + "<p class='card-text truncate-text'>" + elm.description + "</p>"
                elmHTML += "</div>"
                elmHTML += "<div class='card-footer'>"
                // elmHTML += 
                // elmHTML = elmHTML + "<small class='text-body-secondary'>by " + getUserbyId(elm.userId) + "</small>"
                elmHTML += "</div>"
                elmHTML += "</div>"
                elmHTML += "</div>"
                // elmHTML += "<div class='col-lg-3 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='100'>"
                // elmHTML += "<div class='member'>"
                // elmHTML += " <div class='member-img'>"
                // elmHTML = elmHTML + "   <img src='" + elm.picture + "' class='img-fluid' alt=''>"
                // elmHTML += "<div class='social'>"
                // elmHTML = elmHTML + "       <a href='detail.html?id=" + elm.id + "'><div class='centered'>" + elm.title + "</div></a>"
                // elmHTML += "</div>"
                // elmHTML += "</div>"
                // elmHTML += "<div class='member-info'>"
                // elmHTML = elmHTML + "<h4>" + elm.title + "</h4>"
                // elmHTML = elmHTML + "<span>" + elm.description + "</span>"
                // elmHTML += "</div>"
                // elmHTML += "</div>"
                // elmHTML += "</div>"
                // nama = getUserbyId(elm.userId)
            })
            element.innerHTML = elmHTML
            // console.log(nama)
            
        });
        

}
const getAllProjectMitra = () => {
    const element = document.querySelector('#list-card-mitra');
    let elmHTML = ""
    let nama = ""
    const url = new URL('https://6565fad2eb8bb4b70ef2b86d.mockapi.io/api/projectpi/users/3/project');
    fetch(url, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    })
        .then(response => response.json())
        .then(data => {
            data?.map((elm) => {
                elmHTML += "<div class='col'>"
                elmHTML += "<div class='card h-100'>"
                elmHTML = elmHTML + "<img src='" + elm.picture + "' class='card-img-top' alt=''>"
                elmHTML += "<div class='card-body'>"
                elmHTML = elmHTML + "<a href='detailProject.html?id=" + elm.id + "'><h5 class='card-title'>" + elm.title + "</h5></a>"
                elmHTML = elmHTML + "<p class='card-text truncate-text'>" + elm.description + "</p>"
                elmHTML += "</div>"
                elmHTML += "<div class='card-footer'>"
                // elmHTML += 
                // elmHTML = elmHTML + "<small class='text-body-secondary'>by " + getUserbyId(elm.userId) + "</small>"
                elmHTML += "</div>"
                elmHTML += "</div>"
                elmHTML += "</div>"
                // elmHTML += "<div class='col-lg-3 col-md-6 d-flex align-items-stretch' data-aos='fade-up' data-aos-delay='100'>"
                // elmHTML += "<div class='member'>"
                // elmHTML += " <div class='member-img'>"
                // elmHTML = elmHTML + "   <img src='" + elm.picture + "' class='img-fluid' alt=''>"
                // elmHTML += "<div class='social'>"
                // elmHTML = elmHTML + "       <a href='detail.html?id=" + elm.id + "'><div class='centered'>" + elm.title + "</div></a>"
                // elmHTML += "</div>"
                // elmHTML += "</div>"
                // elmHTML += "<div class='member-info'>"
                // elmHTML = elmHTML + "<h4>" + elm.title + "</h4>"
                // elmHTML = elmHTML + "<span>" + elm.description + "</span>"
                // elmHTML += "</div>"
                // elmHTML += "</div>"
                // elmHTML += "</div>"
                // nama = getUserbyId(elm.userId)
            })
            element.innerHTML = elmHTML
            // console.log(nama)
            
        });
        

}

const getProjectDetail = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const title = document.querySelector('#title');
    const picture = document.querySelector('#picture');
    const amount = document.querySelector('#amount');
    const collected = document.querySelector('#collected');
    const progress = document.querySelector('#progress');
    // const percent = document.querySelector('#percent');
    const desc = document.querySelector('#desc');

    let elmHTML = ""
    fetch('https://6565fad2eb8bb4b70ef2b86d.mockapi.io/api/projectpi/users/3/project/' + id)
        .then(response => response.json())
        .then(data => {
            const percents = (parseFloat(data.collected) / parseFloat(data.funding_amount)) * 100
            title.innerHTML = data.title
            amount.innerHTML = data.funding_amount
            collected.innerHTML = data.collected
            // percent.innerHTML = percents
            desc.innerHTML = data.description
            picture.setAttribute("src", data.picture)
            progress.setAttribute("aria-valuenow", percents)
            progress.setAttribute("style", "width:" + percents + "%")
            // console.log(percents)

        })

}

// function getUserbyId(id) {


//     return fetch('https://6565fad2eb8bb4b70ef2b86d.mockapi.io/api/projectpi/users/' + id)
//         .then(response => response.json())
//         .then(data => {return data.name})



// }






