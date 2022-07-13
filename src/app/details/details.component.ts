import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product!: any

  constructor(private pService: ProduitsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.product = this.pService.getProductById(id)
  }

  ajouterAuPanier() {
    this.pService.addToCard()
  }

}
