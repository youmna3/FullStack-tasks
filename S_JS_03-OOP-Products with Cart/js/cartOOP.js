"use strict";
class Order {
  orderDetails;
  user;
  paymentMethod;

  constructor() {
    this.orderDetails = [];
  }

  get total() {
    return (this.subTotal + this.shipping) * (1 + this.getPaymentCost());
  }

  get subTotal() {
    return this.orderDetails.map((x) => x.total).reduce((a, v) => (a += v), 0);
  }

  get shipping() {
    return (
      this.orderDetails.map((x) => x.quantity).reduce((a, v) => (a += v), 0) * 2
    );
  }

  getPaymentCost() {
    switch (this.paymentMethod?.toLowerCase()) {
      case "paypal":
        return 0;
      case "check":
        return 0.01;
      case "bank-transfer":
        return 0.02;
      default:
        return 0;
    }
  }

  addProductById(id) {
    let orderDetail = this.orderDetails.find((x) => x.product.id === id);
    if (orderDetail) {
      orderDetail.increaseQuantity(1);
    }
    return orderDetail;
  }

  addProduct(product) {
    let orderDetail = this.addProductById(product.id);
    if (!orderDetail) {
      const ids = this.orderDetails.map((x) => x.id);
      const maxId = Math.max(...(ids.length > 0 ? ids : [0]));
      orderDetail = new OrderDetail(product);
      orderDetail.id = maxId + 1;
      this.orderDetails.push(orderDetail);
    }
  }

  deleteProduct(id) {
    let orderDetail = this.orderDetails.find((x) => x.product.id == id);
    if (orderDetail) {
      if (orderDetail.quantity == 1) this.removeDetail(orderDetail.id);
      else {
        orderDetail.decreaseQuantity(1);
      }
    }
  }

  removeDetail(id) {
    const index = this.orderDetails.findIndex((x) => x.id === id);
    this.orderDetails.splice(index, 1);
  }

  render() {
    this.renderTotal();
    this.renderTable();
  }

  renderTotal() {
    document.getElementById("total").innerHTML = this.total;
    document.getElementById("sub-total").innerHTML = this.subTotal;
    document.getElementById("shipping").innerHTML = this.shipping;
  }

  renderTable() {
    document.getElementById("products").innerHTML = "";
    this.orderDetails.forEach((x) => {
      document.getElementById("products").innerHTML += x.getHtmlRow();
    });
  }

  saveChanges() {
    const products = [];
    this.orderDetails.forEach((d) => {
      for (let i = 0; i < d.quantity; i++) {
        products.push(d.product);
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
  }
}

class OrderDetail {
  id;
  product;
  quantity;
  price;

  get total() {
    return this.price * this.quantity;
  }

  constructor(product) {
    this.product = product;
    this.quantity = 1;
    this.price = product.price;
  }

  increaseQuantity(q) {
    this.quantity += q;
  }

  decreaseQuantity(q) {
    if (this.quantity > q) this.quantity -= q;
  }

  getHtmlRow() {
    return `<tr>
       <td>${this.product.name}</td>
       <td>${this.price}</td>
       <td><button type="button" onClick="order.deleteProduct(${this.product.id});order.saveChanges();order.render();">-</button><input type="number" value="${this.quantity}" /><button type="button" onClick="order.addProductById(${this.product.id});order.saveChanges();order.render();">+</button></td>
       <td class=>${this.total}</td>
       <td><button type="button" onClick="order.removeDetail(${this.id});order.saveChanges();order.render();">Remove</button></td></tr>`;
  }
}
class Product {
  id;
  name;
  image;
  price;
  constructor(product) {
    this.id = product.id;
    this.name = product.name;
    this.image = product.image;
    this.price = product.price;
  }
}

class User {
  firstName;
  lastName;
  address;

  constructor(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.address = user.address;
  }
}

let order = new Order();
const products = JSON.parse(localStorage.getItem("products") ?? "[]");
products.forEach((x) => {
  order.addProduct(new Product(x));
});
order.render();
