const form = document.getElementById("tabunganForm");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tanggal = document.getElementById("tanggal").value;
  const jumlah = document.getElementById("jumlah").value;

  // Simpan data ke dalam local storage atau database (sesuaikan kebutuhan)
  // Contoh penyimpanan ke local storage:
  let dataTabungan = JSON.parse(localStorage.getItem("dataTabungan")) || [];
  dataTabungan.push({ tanggal, jumlah });
  localStorage.setItem("dataTabungan", JSON.stringify(dataTabungan));

  // Tampilkan hasil inputan
  const newEntry = document.createElement("p");
  newEntry.textContent = `Tanggal: ${tanggal}, Jumlah: Rp ${jumlah}`;
  hasil.appendChild(newEntry);

  // Kosongkan form
  form.reset();

  const pesan = `Tanggal: ${tanggal}, Jumlah: Rp.${jumlah}`;

  // Buat link WhatsApp
  const linkWhatsApp = `https://api.whatsapp.com/send?phone=+6285853260316&text=${encodeURIComponent(
    pesan
  )}`;

  // Tampilkan tombol kirim
  const tombolKirim = document.createElement("button");
  tombolKirim.textContent = "Kirim ke WhatsApp";
  tombolKirim.addEventListener("click", () => {
    window.open(linkWhatsApp, "_blank");
  });
  hasil.appendChild(tombolKirim);
});
