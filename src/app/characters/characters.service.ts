import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, take, tap, map} from 'rxjs/internal/operators';
import { environment } from 'src/environments/environment';
import {Observable, of} from 'rxjs/index';
import { Comic } from '../comics/objects/comic';
import { Character } from './character';

@Injectable({
    providedIn: 'root'
})

export class CharactersService {
    private baseApiUrl: string = environment.baseApiURL + '/characters';
    private apiKey: string = environment.apiKey;
    private totalElements: number;

    constructor(private http: HttpClient) {}

    findByName( name: string ): Observable<Character[]> {
        const characterByNameEndpoint = this.baseApiUrl + '?nameStartsWith=' + name + '&apikey=' + this.apiKey;

        return this.http.get<Character[]>(characterByNameEndpoint)
            .pipe(map((result: any) => {
                if (result.data && 
                    result.data.results) 
                {
                    return result.data.results;
                }
                return result;
            }), catchError(this.handleError('find characters by name', [])));
    }

    findComicsFromCharacter( characterId: number): Observable<Comic[]> {
        const comicsByCharaterEndpoint = this.baseApiUrl + '/' + characterId + '/comics?apikey=' + this.apiKey;

        return this.http.get<Comic[]>(comicsByCharaterEndpoint)
            .pipe(map((result: any) => {
                if (result.data && result.data.results) {
                    this.totalElements = result.data.total;
                    return result.data.results;
                }
                return result;
            }), catchError(this.handleError('find all comics', [])));
    }

    private handleError<T>(operation = 'operation', result?: T): any {
        return (error: any): Observable<T> => {
            console.error(operation, error);
            return of(result as T);
        };
    }
}
