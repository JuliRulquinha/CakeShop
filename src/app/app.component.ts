import { Component } from '@angular/core';
import { IPessoa } from './test/test.component';
import products, { IProduct } from './catalog/product.model';

@Component({
  selector: 'groceries-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Groceries';
  products: IProduct[] = [

    {
        id: 1,
        name: 'Strawberry cheesecake',
        imageName: '/assets/images/products/cheesecake-morango.jpg',
        category: 'Cheesecake',
        price: 25
    },

    {
        id: 2,
        name: 'Mixed berries cheesecake',
        imageName: '/assets/images/products/cheesecake-frutas-vermelhas.png',
        category: 'Cheesecake',
        price: 25
    },

    {
        id: 3,
        name: 'Chocolate cake',
        imageName: '/assets/images/products/bolo-de-chocolate.jpg',
        category: 'Cake',
        price: 20
    },

    {
        id: 4,
        name: 'Carrot cake with chocolate flavoured topping',
        imageName: '/assets/images/products/bolo-de-cenoura.jpg',
        category: 'Cake',
        price: 20
    },

    {
        id: 5,
        name: 'Red Velvet Cake',
        imageName: '/assets/images/products/bolo-red-velvet.jpg',
        category: 'Cake',
        price: 22
    },
    
    {
        id: 6,
        name: 'Lemon Cheesecake',
        imageName: '/assets/images/products/cheesecake-limao.jpg',
        category: 'Cheesecake',
        price: 24
    },

    {
        id: 7,
        name: 'Apple Pie',
        imageName: '/assets/images/products/torta-de-maca.jpg',
        category: 'Pie',
        price: 18
    },

    {
        id: 8,
        name: 'Pumpkin Pie',
        imageName: '/assets/images/products/torta-de-abobora.jpg',
        category: 'Pie',
        price: 18
    },

    {
        id: 9,
        name: 'Blueberry Muffin',
        imageName: '/assets/images/products/muffin-blueberry.jpg',
        category: 'Muffin',
        price: 15
    },

    {
        id: 10,
        name: 'Banana Bread',
        imageName: '/assets/images/products/pao-de-banana.jpg',
        category: 'Bread',
        price: 17
    }
  
  ]
}

