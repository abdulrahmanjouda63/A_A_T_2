import { Component } from '@angular/core';
import { Product } from '../interfaces/products';
@Component({
  selector: 'app-recoproducts',
  templateUrl: './recoproducts.component.html',
  styleUrl: './recoproducts.component.css'
})
export class RecoproductsComponent {
  RecoList : Product[] =[
    {pName : "Samsung" , pPrice : 3000, pDesc : "Headphones" , pImage : "assets/images/1.jpg"},
    {pName : "LG" , pPrice : 3000, pDesc : "SmartLight" , pImage : "assets/images/2.jpg"},
    {pName : "IPHONE" , pPrice : 3000, pDesc: "Camera" , pImage : "assets/images/3.jpg"},
    {pName : "VIVO" , pPrice : 3000, pDesc : "Watch" , pImage : "assets/images/4.jpg"},
    {pName : "REALME" , pPrice : 3000, pDesc : "Mobile" , pImage : "assets/images/5.jpg"},
    {pName : "OPPO" , pPrice : 3000, pDesc: "Mobile" , pImage : "assets/images/6.jpg"},
  ]
}
