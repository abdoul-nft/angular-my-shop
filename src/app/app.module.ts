import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { ForumComponent } from './forum/forum.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PanierComponent } from './navbar/panier/panier.component';
import { ProduitComponent } from './main/produit/produit.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    DetailsComponent,
    ForumComponent,
    FooterComponent,
    NavbarComponent,
    PanierComponent,
    ProduitComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
