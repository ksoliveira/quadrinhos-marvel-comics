import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { IFavoriteState } from 'src/app/store/favorite.state';
import { Comic } from '../objects/comic';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites$:Observable<Comic[]>;

  constructor(
    private favoriteStore: Store<{favorite: IFavoriteState}>
  ) { }

  ngOnInit(): void {
    this.favorites$ = this.favoriteStore
      .select('favorite')
      .pipe(
          map(e => e.favorites)
      )
  }

}
