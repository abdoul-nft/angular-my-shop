import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  arrayProducts!: any
  
  // Injection de dépendance (du service ProduitServiceService)
  constructor(private pService: ProduitsService ) { }

  ngOnInit(): void {
    this.arrayProducts = this.pService.getAllProducts()
  }

}
