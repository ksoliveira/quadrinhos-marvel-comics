import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Comic } from './objects/comic';
import { ComicsService } from './comics.service';

@Component({
    selector: 'app-comics',
    templateUrl: './comics.component.html',
    styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
    comics$: Observable<Comic[]>;

    itemsPerPage = 10;
    totalElements: number;
    page = 0;

    private _loading = new BehaviorSubject<boolean>(false);
    public readonly loading$ = this._loading.asObservable();

    constructor(
        private serviceComics: ComicsService
    ) { }

    ngOnInit(): void {

        this.findAll();
    }


    findAll(): void {
        this.showLoading();
        this.serviceComics.findAll(this.page, this.itemsPerPage)
            .subscribe(
                success => {
                    this.comics$ = of(success);
                    this.totalElements = this.serviceComics.getTotalElements();
                },
                error => {
                    console.error(error);
                },
                () => {
                    this.hideLoading();
                }
            );
    }

    showLoading() {
        this._loading.next(true);
    }

    hideLoading() {
        this._loading.next(false);
    }
    
    loadPage(page: number) {
        this.page = page;
        this.findAll();
    }
}
