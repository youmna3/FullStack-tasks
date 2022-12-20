import { Injectable } from '@angular/core';

export class Product {
  //product: Product;
  // _id: string;
  // name: string;
  // image: string;
  // category_id: string;
  // price: number;
  // discount: number;
  // rating: number;
  // rating_count: number;
  // is_featured: boolean;
  // is_recent: boolean;
  // description: string;
  // color:string;
  // size:string;
  constructor(
    public _id: string,
    public name: string,
    public image: string,
    public category_id: string,
    public price: number,
    public discount: number,
    public rating: number,
    public rating_count: number,
    public is_featured: boolean,
    public is_recent: boolean,
    public description: string,
    public color: string,
    public size: string
  ) {
    this._id = _id;
    this.name = name;
    this.image = image;
    this.category_id = category_id;
    this.price = price;
    this.discount = discount;
    this.rating = rating;
    this.rating_count = rating_count;
    this.is_featured = is_featured;
    this.is_recent = is_recent;
    this.description = description;
    this.color = color;
    this.size = size;
  }
}
