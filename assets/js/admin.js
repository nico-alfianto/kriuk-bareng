function rupiah(number){

  return new Intl.NumberFormat(
    "id-ID",
    {
      style:"currency",
      currency:"IDR"
    }
  ).format(number);

}

function loadDashboard(){

  const orders =
    JSON.parse(
      localStorage.getItem("orders")
    ) || [];

  const users =
    JSON.parse(
      localStorage.getItem("users")
    ) || [];

  document.getElementById(
    "total-orders"
  ).textContent = orders.length;

  document.getElementById(
    "total-products"
  ).textContent = products.length;

  document.getElementById(
    "total-customers"
  ).textContent = users.length;

  let income = 0;

  orders.forEach(order => {
    income += order.total || 0;
  });

  document.getElementById(
    "total-income"
  ).textContent = rupiah(income);

  const recent =
    document.getElementById(
      "recent-orders"
    );

  if(!recent) return;

  recent.innerHTML = "";

  orders
    .slice()
    .reverse()
    .slice(0,5)
    .forEach(order => {

      recent.innerHTML += `
        <tr class="border-b">

          <td class="py-3">
            ${order.id}
          </td>

          <td class="py-3">
            ${order.nama}
          </td>

          <td class="py-3">
            ${rupiah(order.total)}
          </td>

          <td class="py-3">
            ${order.status}
          </td>

        </tr>
      `;

    });

}

document.addEventListener(
  "DOMContentLoaded",
  loadDashboard
);
