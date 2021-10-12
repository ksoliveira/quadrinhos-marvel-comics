import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicsComponent } from './comics/comics.component';
import { FavoritesComponent } from './comics/favorites/favorites.component';
import { ComicCardComponent } from './comics/comic-card/comic-card.component';
import { CustomPaginationComponent } from './comics/custom-pagination/custom-pagination.component';
import { InternalComicsComponent } from './comics/internal-comics/internal-comics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    FavoritesComponent,
    ComicCardComponent,
    CustomPaginationComponent,
    InternalComicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
