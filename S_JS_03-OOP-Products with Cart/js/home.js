"use strict";
const addToCart = (product) => {
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  const oldP = products.findIndex((x) => x.id === product.id);
  if (oldP >= 0) {
    products[oldP].quantity += 1;
  } else {
    products.push({ ...product, quantity: 1 });
  }
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
};
