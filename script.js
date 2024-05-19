let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};
document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen popup
  var popup = document.querySelector(".popup");

  // Tampilkan popup ketika dokumen telah dimuat
  popup.style.display = "block";

  // Sembunyikan popup ketika tombol close diklik
  var closeBtn = document.querySelector(".popup-dismiss");
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });
});
