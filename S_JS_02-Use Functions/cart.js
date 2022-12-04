"use strict";

//let product = [];
// const shipping = () => {
//   product * 15;
// };
//document.querySelector(".model");
/*
const tableRow = document.querySelectorAll(".row");
for (let i = 0; i < tableRow.length; i++) {
  let removeBtn = document
    .getElementById("remove")
    .addEventListener("click", () => {
      tableRow[i].classList.remove("row");
    });
}
*/
// const tableRow = document.querySelectorAll(".row");
// let removeBtn = document
//   .getElementById("remove")
//   .addEventListener("click", () => {
//     document.getElementsByTagName("tr").classList.remove();
//   });
document.getElementById("add").addEventListener("click", () => {
  const product = document.getElementById("product-name");
  const price = document.getElementById("price");
  const quantity = document.getElementById("quantity");
  const total = price.value * quantity.value;
  let removeBtn = document
    .getElementById("remove")
    .addEventListener("click", () => {});
  document.getElementById("products").innerHTML += `<tr>
  <td>${product.value}</td>
  <td>${price.value}</td>
  <td><button type="button">-</button><input type="number" value="${quantity.value}" /><button type="button">+</button></td>
  <td>${total}</td>
  <td>${removeBtn}</td></tr>`;
  document.getElementById("sub-total").textContent = `$${total}`;

  const shipping = (document.getElementById("shipping").textContent = 15);
  //document.getElementById("shipping").innerHTML = `$${shipping()}`;
  document.getElementById("total").textContent = `$${total + shipping}`;
  if (!product.value || !price.value || !quantity.value) {
    alert("please enter a valid input");
  }
});
// const style = (s) => {
//   document.querySelector(".check-btn").style = s;
// };
document.querySelector(".check-btn").style.backgroundColor = "#6a2929";
document.querySelector(".check-btn").style.padding = "5px";
document.querySelector(".check-btn").style.margin = "5px";
document.querySelector(".check-btn").style.cursor = "pointer";
//set local storage
