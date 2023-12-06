const isLoggedIn = localStorage.getItem('isLoggedIn');
const avatar = localStorage.getItem('profile_picture');

const loginButton = document.getElementById('loginButton');
const avatarButton = document.getElementById('avatarButton');


if (isLoggedIn === 'true') {
    // Jika sudah login, perbarui tampilan navbar
    loginButton.classList.add('d-none');

    // Atau perbarui dengan gambar avatar jika ada
    if (avatar) {
        avatarButton.innerHTML = `<img class="rounded-circle w-25 mt-3" src="${avatar}" alt="">`;
    }
}

