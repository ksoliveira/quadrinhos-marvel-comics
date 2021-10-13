import { createAction, createReducer, on, props } from "@ngrx/store"
import { Comic } from "../comics/objects/comic";

export interface IFavoriteState {
    favorites: Comic[]
}

export const favoriteInitialState: IFavoriteState = {
    favorites: []
}

export const actionAddFavorite = createAction(
    '[Favorite] Add Favorite',
    props<{ favorites: Comic[] }>()
);

export const favoriteReducer = createReducer(
    favoriteInitialState,
    on(actionAddFavorite, (state, { favorites }) => {
        const comic = new Comic();
        comic.id = 123;
        comic.title = 'Titulo';
        state = { ...state, favorites }
        return state;
    })
)