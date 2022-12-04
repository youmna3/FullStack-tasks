"use strict";

// const shippingCost = 15;
// const shipping = (document.getElementById(
//   "shipping"
// ).textContent = `$${shippingCost}`);
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
  calcTotal();
  // document.getElementById("sub-total").textContent = `$${subTotal}`;
  //const shipping = (document.getElementById("shipping").textContent = 15);

  if (!product || !price || !quantity) {
    alert("please enter a valid input");
  }
});

const calcTotal = () => {
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

const productRow = (product, price, quantity, subTotal) => {
  return `<tr>
  <td>${product}</td>
  <td>${price}</td>
  <td><button type="button">-</button><input type="number" value="${quantity}" /><button type="button">+</button></td>
  <td class="product-total">${subTotal}</td>
  <td><button type="button">Remove</button></td></tr>`;
};

// const style = (s) => {
//   document.querySelector(".check-btn").style = s;
// };
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
