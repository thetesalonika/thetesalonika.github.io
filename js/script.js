let nomorGambar = 1; // Indeks gambar saat ini

function changeImage() {
  let gambarElement = document.querySelector(".ukuran-gambar");
  gambarElement.src = "img/gambar" + nomorGambar + ".jpg";
  console.log(gambarElement.src);

  if (nomorGambar + 1 > 2) {
    nomorGambar = 1;
  } else {
    nomorGambar = 1 + 1;
  }
}

setInterval(changeImage, 2000);

function doSomething() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var option = document.getElementById("option").value;

  if (name === "") {
    alert("Nama harus diisi");
    return;
  }

  if (email === "") {
    alert("Email harus diisi");
    return;
  }

  if (option === "Select option") {
    alert("Pilih salah satu opsi");
    return;
  }

  alert("Form berhasil diisi");
}
