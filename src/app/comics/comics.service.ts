import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, take, tap, map} from 'rxjs/internal/operators';
import { environment } from 'src/environments/environment';
import {Observable, of} from 'rxjs/index';
import { Comic } from './objects/comic';

@Injectable({
    providedIn: 'root'
})

export class ComicsService {
    private baseApiUrl: string = environment.baseApiURL + '/comics';
    private apiKey: string = environment.apiKey;
    private totalElements: number;

    constructor(private http: HttpClient) {}

    findAll( page: number, limit: number ): Observable<Comic[]> {
        const comicsEndpoint = this.baseApiUrl + '?limit=' + limit + '&offset=' + page + '&apikey=' + this.apiKey;

        return this.http.get<Comic[]>(comicsEndpoint)
            .pipe(map((result: any) => {
                if (result.data && result.data.results) {
                    this.totalElements = result.data.total;
                    return result.data.results;
                }
                return result;
            }), catchError(this.handleError('find all comics', [])));
    }

    findById( id: number): Observable<Comic> {
        const comicByIdEndpoint = this.baseApiUrl + '/' + id + '?apikey=' + this.apiKey;

        return this.http.get<Comic[]>(comicByIdEndpoint)
            .pipe(map((result: any) => {
                if (result.data && 
                    result.data.results && 
                    result.data.results.length > 0) 
                {
                    return result.data.results[0];
                }
                return result;
            }), catchError(this.handleError('find comics by id', [])));
    }

    getTotalElements() {
        return this.totalElements;
    }

    private handleError<T>(operation = 'operation', result?: T): any {
        return (error: any): Observable<T> => {
            console.error(operation, error);
            return of(result as T);
        };
    }
}
