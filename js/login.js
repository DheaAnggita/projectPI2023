const USERS = 'https://6565fad2eb8bb4b70ef2b86d.mockapi.io/api/projectpi/users';

async function getDataUsers () {
    try {
        let respons = await fetch(USERS);
        let users = await respons.json()

        return users;

    } catch (error) {
        console.log(error)
    }
}


async function login(email, password) {
    const users = await getDataUsers();
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
        console.log('login berhasil')

        // Simpan status login dan avatar di localStorage
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('name', user.name);
        localStorage.setItem('profile_picture', user.profile_picture);

        // Perbarui tampilan navbar di semua halaman
        // window.updateNavbar();

        //Redirect ke halaman sebelumnya atau halaman landing jika tidak ada yang tersimpan
        const redirectURL = localStorage.getItem('redirectURL') || 'buat-project.html';
        window.location.href = redirectURL;

    } else {
        console.log('gagal')
    }
}

function performLogin() {
    const userEmailInput = document.getElementById('email').value;
    const userPasswordInput = document.getElementById('password').value;

    login(userEmailInput, userPasswordInput)
}

const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener("click", (e) => {
    e.preventDefault()
    performLogin()
})