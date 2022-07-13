import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'produits',
    component: MainComponent
  },
  {
    path: 'produits/:id',
    component: DetailsComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
