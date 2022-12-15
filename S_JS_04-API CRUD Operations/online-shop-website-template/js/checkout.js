"use strict";
const products = JSON.parse(localStorage.getItem("products") || "[]");
const renderHTML = () => {
  document.getElementById("sub-total").innerHTML = `${JSON.parse(
    localStorage.getItem("subtotal")
  )}`;
  document.getElementById("shipping").innerHTML = `${JSON.parse(
    localStorage.getItem("shipping")
  )}`;
  document.getElementById("total").innerHTML = `$${JSON.parse(
    localStorage.getItem("total")
  )}`;

  products.forEach((p) => {
    document.getElementById("products").innerHTML += getProducts(p);
  });
};

const getProducts = (p) => {
  return `<div class="d-flex justify-content-between">
        <p>${p.name}</p>
        <p>$${p.price * p.quantity}</p>
    </div>`;
};
const addOrder = async () => {
  await fetch("http://localhost:5000/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("x-access-token"),
    },
    body: JSON.stringify({
      shipping_info: {
        first_name: document.getElementById("first-name").value,
        last_name: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        mobile_number: document.getElementById("phone").value,
        address1: document.getElementById("address").value,
        address2: document.getElementById("address-2").value,
        country: document.getElementById("country").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zip_code: document.getElementById("zip-code").value,
      },
      id: localStorage.getItem("userId"),
      sub_total_price: document.getElementById("sub-total").value,
      shipping: document.getElementById("shipping").value,
      total_price: document.getElementById("total").innerHTML.replace("$", ""),
      user_id: localStorage.getItem("userId"),
      order_date: new Date(),
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};
renderHTML();
addOrder();
