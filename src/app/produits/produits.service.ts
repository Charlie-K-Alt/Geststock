import { Injectable } from '@angular/core';
import { Produits } from '../shared/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
    produits: Produits[]=[];
  constructor( ) {
    let p1=new Produits('Livre',80,20);
    let p2= new Produits('Piano',600,20);
    let p3= new Produits('Ordinateur',100,40);

      this.produits.push(p1);
      this.produits.push(p2);
      this.produits.push(p3);

   }
   getProduits(){
    return this.produits;
   }

}
