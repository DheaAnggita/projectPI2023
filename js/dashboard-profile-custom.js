var form = document.getElementById('myprofile');
var button = document.getElementById('btnProfile');
var inputName = document.getElementById('inputProfileName');
var inputEmail = document.getElementById('inputProfileEmail');
var inputPassword = document.getElementById('inputProfilePassword');
var textareaAboutMe = document.getElementById('inputProfileAboutMe');
var isEditMode = false;

// Fungsi untuk mengaktifkan/menonaktifkan input dan textarea
function toggleFormEditing() {
  inputName.disabled = !isEditMode;
  inputEmail.disabled = !isEditMode;
  inputPassword.disabled = !isEditMode;
  textareaAboutMe.disabled = !isEditMode;
}

// Fungsi untuk mengubah teks tombol dan status edit mode
function toggleEditMode() {
  isEditMode = !isEditMode;
  button.textContent = isEditMode ? 'Save' : 'Change';
  toggleFormEditing();
}

// Tambahkan event listener untuk tombol
button.addEventListener('click', function (event) {
  console.log('hahaha')
  event.preventDefault();

  if (isEditMode) {
    // Simpan logika disini untuk menyimpan data, misalnya menggunakan AJAX ke server
    // Setelah penyimpanan selesai, Anda dapat memanggil toggleEditMode() untuk kembali ke mode baca
    toggleEditMode();
  } else {
    // Ganti ke mode edit
    toggleEditMode();
  }
});
