const USERS = 'https://6565fad2eb8bb4b70ef2b86d.mockapi.io/api/projectpi/users'

function Registration () {
    const name = document.getElementById('nameRegis').value;
    const email = document.getElementById('emailRegis').value;
    const password = document.getElementById('passwordRegis').value;
    const profile_picture = document.getElementById('profilePicRegis').value;
    const phone_number = document.getElementById('phoneNumberRegis').value;

    // Construct the request body
    const requestBody = {
        name: name,
        email: email,
        password: password,
        profile_picture: profile_picture,
        phone_number: phone_number,
    }

    // Perform the registration using fetch
    postDataUser(requestBody)
    .then(data => {
        console.log('registrasi berhasil', data)

        // Redirect to the login page
        window.location.href = 'login.html';
    })
    .catch(error => {
        console.log('registarsi gagal')
    })

}

function postDataUser (requestBody) {
    return fetch(USERS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
}

const btnRegis = document.getElementById('btnRegis')
btnRegis.addEventListener('click', (e) => {
    e.preventDefault()
    Registration()
})
