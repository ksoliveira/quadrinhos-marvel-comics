import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './comics/comics.component';
import { FavoritesComponent } from './comics/favorites/favorites.component';
import { InternalComicsComponent } from './comics/internal-comics/internal-comics.component';

const routes: Routes = [
  { path: 'comics', component: ComicsComponent },
  { path: 'comics/favorites', component: FavoritesComponent },
  { path: 'comics/:id', component: InternalComicsComponent },
  { path: '**', redirectTo: 'comics' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
