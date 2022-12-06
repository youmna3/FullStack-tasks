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

  /*
  document.querySelector(".products").innerHTML += productRow(
    productName,
    price,
    quantity,
    subTotal
  );
  //document.getElementById("total").innerHTML = `$${calcSubTotal()}`;
  calcSubTotal();
  document.getElementById("shipping").innerHTML = `$${calcShipping()}`;
  calculateTotal();
*/
  if (!productName || !price || !quantity) {
    alert("please enter a valid input");
  }
});
const renderHTML = () => {
  document.querySelector(".products").innerHTML = "";
  products.forEach((p) => {
    document.querySelector(".products").innerHTML += productRow(p);
  });
  document.getElementById("total").innerHTML = `$${calcSubTotal()}`;
  calcSubTotal();
  document.getElementById("shipping").innerHTML = `$${calcShipping()}`;
  calculateTotal();
};
const calcSubTotal = () => {
  const productsArray = document.getElementsByClassName("product-total");
  let total = 0;
  for (const e of productsArray) {
    total += Number(parseFloat(e.innerHTML.replace("$", "")));
  }

  document.getElementById("sub-total").innerHTML = `${total}`;
};

const calcShipping = () => {
  return 15;
  // document.getElementById("shipping").innerHTML = `$${shippingCost}`;
};
const calculateTotal = () => {
  const s = document.getElementById("sub-total").innerHTML.replace("$", "");
  const shipCost = document
    .getElementById("shipping")
    .innerHTML.replace("$", "");
  document.getElementById("total").innerHTML = `$${
    Number(s) + Number(shipCost)
  }`;
};

const productRow = (p) => {
  return `<tr>
  <td>${p.productName}</td>
  <td>${p.price}</td>
  <td><button type="button">-</button><input type="number" value="${p.quantity}" /><button type="button">+</button></td>
  <td class="product-total">${p.subTotal}</td>
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
