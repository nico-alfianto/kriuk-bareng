// ===========================
// KRIUK BARENG CART.JS
// ===========================

// Ambil data cart
function getCart() {
  return JSON.parse(
    localStorage.getItem("cart")
  ) || [];
}

// Simpan cart
function saveCart(cart) {
  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );
}

// Format rupiah
function rupiah(number) {
  return new Intl.NumberFormat(
    "id-ID",
    {
      style: "currency",
      currency: "IDR"
    }
  ).format(number);
}

// Render keranjang
function renderCart() {

  const container =
    document.getElementById("cart-items");

  const subtotalEl =
    document.getElementById("subtotal");

  const totalEl =
    document.getElementById("total");

  if (!container) return;

  let cart = getCart();

  container.innerHTML = "";

  let subtotal = 0;

  if (cart.length === 0) {

    container.innerHTML = `
      <div class="bg-white p-8 rounded-xl shadow-card text-center">
        <h3 class="text-xl font-bold mb-2">
          Keranjang Kosong
        </h3>

        <p class="text-gray-500">
          Belum ada produk yang ditambahkan.
        </p>
      </div>
    `;

    if(subtotalEl) subtotalEl.textContent = "Rp0";
    if(totalEl) totalEl.textContent = "Rp0";

    return;
  }

  cart.forEach(item => {

    const itemTotal =
      item.harga * item.qty;

    subtotal += itemTotal;

    container.innerHTML += `
      <div class="bg-white rounded-xl shadow-card p-4 mb-4">

        <div class="flex gap-4">

          <img
            src="${item.gambar}"
            alt="${item.nama}"
            class="w-24 h-24 object-cover rounded-lg"
          >

          <div class="flex-1">

            <h3 class="font-bold text-lg">
              ${item.nama}
            </h3>

            <p class="text-red-600 font-bold mt-2">
              ${rupiah(item.harga)}
            </p>

            <div class="flex items-center gap-2 mt-3">

              <button
                onclick="decreaseQty(${item.id})"
                class="bg-gray-200 px-3 py-1 rounded">
                -
              </button>

              <span class="font-bold">
                ${item.qty}
              </span>

              <button
                onclick="increaseQty(${item.id})"
                class="bg-gray-200 px-3 py-1 rounded">
                +
              </button>

            </div>

          </div>

          <div class="text-right">

            <p class="font-bold mb-3">
              ${rupiah(itemTotal)}
            </p>

            <button
              onclick="removeItem(${item.id})"
              class="bg-red-600 text-white px-3 py-2 rounded">
              Hapus
            </button>

          </div>

        </div>

      </div>
    `;
  });

  if(subtotalEl){
    subtotalEl.textContent =
      rupiah(subtotal);
  }

  if(totalEl){
    totalEl.textContent =
      rupiah(subtotal);
  }

  updateCartBadge();
}

// Tambah qty
function increaseQty(id) {

  let cart = getCart();

  cart = cart.map(item => {

    if(item.id === id){
      item.qty += 1;
    }

    return item;
  });

  saveCart(cart);

  renderCart();
}

// Kurangi qty
function decreaseQty(id) {

  let cart = getCart();

  cart = cart.map(item => {

    if(item.id === id){

      if(item.qty > 1){
        item.qty -= 1;
      }

    }

    return item;
  });

  saveCart(cart);

  renderCart();
}

// Hapus produk
function removeItem(id) {

  let cart = getCart();

  cart = cart.filter(
    item => item.id !== id
  );

  saveCart(cart);

  renderCart();
}

// Kosongkan keranjang
function clearCart() {

  if(
    !confirm(
      "Yakin ingin mengosongkan keranjang?"
    )
  ){
    return;
  }

  localStorage.removeItem("cart");

  renderCart();
}

// Total item badge
function updateCartBadge(){

  const badge =
    document.getElementById(
      "cart-count"
    );

  if(!badge) return;

  const cart = getCart();

  let total = 0;

  cart.forEach(item => {
    total += item.qty;
  });

  badge.textContent = total;
}

// Jalankan otomatis
document.addEventListener(
  "DOMContentLoaded",
  () => {
    renderCart();
    updateCartBadge();
  }
);
