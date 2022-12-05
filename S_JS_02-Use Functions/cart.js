"use strict";

//document.getElementById("total").innerHtML = `$${total + shippingCost}`;
//document.getElementById("total").textContent = `$${subTotal + shippingCost}`;
document.getElementById("add").addEventListener("click", () => {
  const product = document.getElementById("product-name").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;
  let subTotal = price * quantity;

  document.querySelector(".products").innerHTML += productRow(
    product,
    price,
    quantity,
    subTotal
  );
  calcSubTotal();
  calcShipping();
  calculateTotal();

  if (!product || !price || !quantity) {
    alert("please enter a valid input");
  }
});

const calcSubTotal = () => {
  const productsArray = document.getElementsByClassName("product-total");
  let total = 0;
  // for (let i = 0; i < productsArray.length; i++) {
  //   total += Number(parseFloat(productsArray[i].innerHTML.replace("$", "")));
  // }
  for (const e of productsArray) {
    total += Number(parseFloat(e.innerHTML.replace("$", "")));
  }

  document.getElementById("sub-total").innerHTML = `${total}`;
};

const calcShipping = () => {
  const shippingCost = 15;
  document.getElementById("shipping").innerHTML = `$${shippingCost}`;
};
const calculateTotal = () => {
  const s = document.getElementById("sub-total").innerHTML.replace("$", "");
  const shipCost = document
    .getElementById("shipping")
    .innerHTML.replace("$", "");
  document.getElementById("total").innerHTML = `$${
    Number(shipCost) + Number(s)
  }`;
};

const productRow = (product, price, quantity, subTotal) => {
  return `<tr>
  <td>${product}</td>
  <td>${price}</td>
  <td><button type="button">-</button><input type="number" value="${quantity}" /><button type="button">+</button></td>
  <td class="product-total">${subTotal}</td>
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
