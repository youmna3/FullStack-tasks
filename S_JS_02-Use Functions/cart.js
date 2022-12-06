"use strict";
const products = [];
document.getElementById("add").addEventListener("click", () => {
  const productName = document.getElementById("product-name").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;
  const subTotal = price * quantity;
  products.push({
    productName: productName,
    price: price,
    quantity: quantity,
    subTotal: subTotal,
  });
  renderHTML();

  if (!productName || !price || !quantity) {
    alert("please enter a valid input");
  }
});

const calcSubTotal = () => {
  return products.map((p) => p.subTotal).reduce((a, e) => (a += e), 0);
};
const getShipping = () => {
  return calcSubTotal() > 100 ? "freeshipping" : 15;
};

const calcTotal = () => calcSubTotal() + getShipping();

const getTotal = () => {
  if (calcSubTotal() > 100) {
    return calcSubTotal();
  } else {
    return calcTotal();
  }
};
const decQun = (i) => {
  if (products[i].quantity > 1) products[i].quantity--;
  renderHTML();
};
const incQun = (i) => {
  products[i].quantity++;
  renderHTML();
};
const remove = (i) => {
  products.splice(i, 1);
  renderHTML();
};
const renderHTML = () => {
  document.querySelector(".products").innerHTML = "";
  products.forEach((p, i) => {
    document.querySelector(".products").innerHTML += productRow(p, i);
  });
  document.getElementById("sub-total").innerHTML = `$${calcSubTotal()}`;
  document.getElementById("shipping").innerHTML = `$${getShipping()}`;
  document.getElementById("total").innerHTML = `$${getTotal()}`;
};
const productRow = (p, i) => {
  return `<tr>
  <td>${p.productName}</td>
  <td>${p.price}</td>
  <td><button type="button" onClick="decQun(${i})">-</button><input type="number" value="${p.quantity}" /><button type="button" onClick="incQun(${i})">+</button></td>
  <td class=>${p.subTotal}</td>
  <td><button type="button" onClick="remove(${i})">Remove</button></td></tr>`;
};

document.querySelector(".check-btn").style.backgroundColor = "#6a2929";
document.querySelector(".check-btn").style.padding = "5px";
document.querySelector(".check-btn").style.margin = "5px";
document.querySelector(".check-btn").style.cursor = "pointer";

// const products = JSON.parse(localStorage.getItem("products") || "[]");
// renderHTML();
