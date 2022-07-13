import { Component, Input, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/produits.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  // @Input() => Décorateur pour ajouter des props à notre composant

  @Input() title!: string // string != String (Objet string js)
  @Input() type!: string
  @Input() f_price!: number
  @Input() price!: number
  @Input() image!: string
  @Input() rates!: number
  @Input() sale!: boolean
  @Input() id!: number

  constructor(private pService: ProduitsService) { }

  ngOnInit(): void {
  }

  counter(taille: number) {
    return new Array(taille);
  }

  ajouterAuPanier() {
    this.pService.addToCard()
  }

}
