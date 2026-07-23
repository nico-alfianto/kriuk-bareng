const products = [
  {
    id: 1,
    nama: "Stick Baso Original",
    harga: 15000,
    stok: 100,
    kategori: "Original",
    gambar: "assets/img/original.jpg",
    deskripsi: "Rasa original gurih dan renyah."
  },

  {
    id: 2,
    nama: "Stick Baso Balado",
    harga: 17000,
    stok: 100,
    kategori: "Balado",
    gambar: "assets/img/balado.jpg",
    deskripsi: "Rasa balado pedas manis yang menggugah selera."
  },

  {
    id: 3,
    nama: "Stick Baso BBQ",
    harga: 17000,
    stok: 100,
    kategori: "BBQ",
    gambar: "assets/img/bbq.jpg",
    deskripsi: "Perpaduan rasa barbeque yang khas."
  },

  {
    id: 4,
    nama: "Stick Baso Keju",
    harga: 18000,
    stok: 100,
    kategori: "Keju",
    gambar: "assets/img/keju.jpg",
    deskripsi: "Taburan keju gurih dan lezat."
  },

  {
    id: 5,
    nama: "Stick Baso Jagung Bakar",
    harga: 18000,
    stok: 100,
    kategori: "Jagung Bakar",
    gambar: "assets/img/jagung-bakar.jpg",
    deskripsi: "Aroma jagung bakar yang nikmat."
  },

  {
    id: 6,
    nama: "Stick Baso Rumput Laut",
    harga: 18000,
    stok: 100,
    kategori: "Rumput Laut",
    gambar: "assets/img/rumput-laut.jpg",
    deskripsi: "Rasa rumput laut khas ala snack premium."
  },

  {
    id: 7,
    nama: "Stick Baso Pedas Level 1",
    harga: 17000,
    stok: 100,
    kategori: "Pedas",
    gambar: "assets/img/pedas-1.jpg",
    deskripsi: "Pedas ringan untuk semua kalangan."
  },

  {
    id: 8,
    nama: "Stick Baso Pedas Level 2",
    harga: 17000,
    stok: 100,
    kategori: "Pedas",
    gambar: "assets/img/pedas-2.jpg",
    deskripsi: "Mulai terasa sensasi pedasnya."
  },

  {
    id: 9,
    nama: "Stick Baso Pedas Level 3",
    harga: 17000,
    stok: 100,
    kategori: "Pedas",
    gambar: "assets/img/pedas-3.jpg",
    deskripsi: "Pedas sedang favorit pelanggan."
  },

  {
    id: 10,
    nama: "Stick Baso Pedas Level 4",
    harga: 18000,
    stok: 100,
    kategori: "Pedas",
    gambar: "assets/img/pedas-4.jpg",
    deskripsi: "Pedas mantap untuk pecinta cabai."
  },

  {
    id: 11,
    nama: "Stick Baso Pedas Level 5",
    harga: 19000,
    stok: 100,
    kategori: "Pedas",
    gambar: "assets/img/pedas-5.jpg",
    deskripsi: "Level tertinggi, sangat pedas."
  }
];

function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(angka);
}
