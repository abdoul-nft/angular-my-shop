import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  public panier: number = 0

  private products = [
    {
        title: 'Produit de luxe',
        type: 'luxe',
        f_price: 40.00,
        price: 80.00,
        image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        rates: 0,
        sale: false
    },
    {
        title: 'Article spécial',
        type: 'simple',
        f_price: 20.00,
        price: 80.00,
        image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        rates: 5,
        sale: true
    },
    {
      title: 'Article de toto',
      type: 'simple',
      f_price: 20.00,
      price: 80.00,
      image: 'https://static.fnac-static.com/multimedia/Images/FR/NR/20/2b/37/3615520/1540-1/tsp20180403100657/Toto-un-sacre-numero.jpg',
      rates: 5,
      sale: true
    },
    {
      title: 'Article RETYU',
      type: 'simple',
      f_price: 20.00,
      price: 80.00,
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      rates: 2,
      sale: true
    },
    {
      title: 'Bored Ape',
      type: 'simple',
      f_price: 20.00,
      price: 80.00,
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      rates: 5,
      sale: true
    },
    {
        title: 'Produit de luxe',
        type: 'luxe',
        f_price: 40.00,
        price: 80.00,
        image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        rates: 0,
        sale: false
    },
    {
        title: 'Article spécial',
        type: 'simple',
        f_price: 20.00,
        price: 80.00,
        image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        rates: 5,
        sale: true
    },
  ]

  constructor() { }

  // On ajoute notre CRUD (Create Read Update Delete)

  // Read All
  getAllProducts() {
    // Requêtes
    // Ajax
    return this.products
  }

  // Read 
  getProductById(id: number) {
    return this.products[id]
  }


  // Create
  addProduct(product: any) {
    this.products.push(product)
  }


  // Upadte
  editProduct(id: number, produit: any) {
    this.products[id] = produit
  }


  addToCard() {
    this.panier ++
  }
}
