// =========================
// KRIUK BARENG APP.JS
// =========================

// Format Rupiah fallback
function rupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(value);
}

// Ambil keranjang
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// Simpan keranjang
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Tambah produk ke keranjang
function addToCart(productId) {

  const product = products.find(
    p => p.id === productId
  );

  if (!product) return;

  let cart = getCart();

  const existing = cart.find(
    item => item.id === productId
  );

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      nama: product.nama,
      harga: product.harga,
      gambar: product.gambar,
      qty: 1
    });
  }

  saveCart(cart);

  updateCartBadge();

  alert(product.nama + " ditambahkan ke keranjang");
}

// Update badge keranjang
function updateCartBadge() {

  const badge = document.getElementById(
    "cart-count"
  );

  if (!badge) return;

  const cart = getCart();

  let total = 0;

  cart.forEach(item => {
    total += item.qty;
  });

  badge.textContent = total;
}

// Render produk unggulan di homepage
function renderFeaturedProducts() {

  const container = document.getElementById(
    "featured-products"
  );

  if (!container) return;

  const featured = products.slice(0, 4);

  container.innerHTML = "";

  featured.forEach(product => {

    container.innerHTML += `
      <div class="product-card">

        <img
          src="${product.gambar}"
          alt="${product.nama}"
          class="product-image"
        >

        <div class="p-4">

          <span class="badge">
            ${product.kategori}
          </span>

          <h3 class="text-xl font-bold mt-3 mb-2">
            ${product.nama}
          </h3>

          <p class="text-gray-600 text-sm mb-3">
            ${product.deskripsi}
          </p>

          <p class="price mb-4">
            ${rupiah(product.harga)}
          </p>

          <button
            onclick="addToCart(${product.id})"
            class="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
          >
            Tambah ke Keranjang
          </button>

        </div>

      </div>
    `;
  });
}

// Render semua produk di halaman produk
function renderAllProducts() {

  const container = document.getElementById(
    "all-products"
  );

  if (!container) return;

  container.innerHTML = "";

  products.forEach(product => {

    container.innerHTML += `
      <div class="product-card">

        <img
          src="${product.gambar}"
          alt="${product.nama}"
          class="product-image"
        >

        <div class="p-4">

          <span class="badge">
            ${product.kategori}
          </span>

          <h3 class="text-xl font-bold mt-3 mb-2">
            ${product.nama}
          </h3>

          <p class="text-gray-600 text-sm mb-3">
            ${product.deskripsi}
          </p>

          <p class="price mb-4">
            ${rupiah(product.harga)}
          </p>

          <button
            onclick="addToCart(${product.id})"
            class="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
          >
            Tambah ke Keranjang
          </button>

        </div>

      </div>
    `;
  });
}

// Cari produk
function searchProducts(keyword) {

  const container =
    document.getElementById("all-products");

  if (!container) return;

  const filtered = products.filter(product =>
    product.nama.toLowerCase().includes(
      keyword.toLowerCase()
    )
  );

  container.innerHTML = "";

  filtered.forEach(product => {

    container.innerHTML += `
      <div class="product-card">

        <img
          src="${product.gambar}"
          class="product-image"
        >

        <div class="p-4">

          <span class="badge">
            ${product.kategori}
          </span>

          <h3 class="text-xl font-bold mt-3">
            ${product.nama}
          </h3>

          <p class="price my-3">
            ${rupiah(product.harga)}
          </p>

          <button
            onclick="addToCart(${product.id})"
            class="w-full bg-red-600 text-white py-2 rounded-lg"
          >
            Tambah ke Keranjang
          </button>

        </div>

      </div>
    `;
  });
}

// Jalankan otomatis
document.addEventListener(
  "DOMContentLoaded",
  () => {
    renderFeaturedProducts();
    renderAllProducts();
    updateCartBadge();
  }
);
