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
const renderHTML = () => {
  document.querySelector(".products").innerHTML = "";
  products.forEach((p) => {
    document.querySelector(".products").innerHTML += productRow(p);
  });
  document.getElementById("sub-total").innerHTML = `$${calcSubTotal()}`;
  document.getElementById("shipping").innerHTML = `$${
    calcSubTotal() > 100 ? "freeshipping" : 15
  }`;
  document.getElementById("total").innerHTML = `$${getTotal()}`;
};
const calcSubTotal = () => {
  return products.map((p) => p.subTotal).reduce((a, e) => (a += e));
};

const calcTotal = () => 15 + calcSubTotal();

const getTotal = () => {
  if (calcSubTotal() > 100) {
    return calcSubTotal();
  } else {
    return calcTotal();
  }
};
const productRow = (p) => {
  return `<tr>
  <td>${p.productName}</td>
  <td>${p.price}</td>
  <td><button type="button">-</button><input type="number" value="${p.quantity}" /><button type="button">+</button></td>
  <td class=>${p.subTotal}</td>
  <td><button type="button">Remove</button></td></tr>`;
};

document.querySelector(".check-btn").style.backgroundColor = "#6a2929";
document.querySelector(".check-btn").style.padding = "5px";
document.querySelector(".check-btn").style.margin = "5px";
document.querySelector(".check-btn").style.cursor = "pointer";
/*
document.querySelector(".hidden").style.display = "none";
const deleteProd = () => {
  addProd.classList.add("hidden");
};

const removeBtn = document
  .getElementById("remove")
  .addEventListener("click", deleteProd);

*/

//set local storage
