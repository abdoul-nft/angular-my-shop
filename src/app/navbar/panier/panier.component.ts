import { Component, Input, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/produits.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private pService: ProduitsService) { }


  ngOnInit(): void {
  }

  afficherPanier() {
    return this.pService.panier
  }

}
