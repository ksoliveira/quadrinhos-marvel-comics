import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comic } from './comic';
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



    constructor(
        private serviceComics: ComicsService
    ) { }

    ngOnInit(): void {

        this.findAll();
    }


    findAll(): void {
        // Adicionar loading
        this.serviceComics.findAll(this.page, this.itemsPerPage)
            .subscribe(
                success => {
                    this.comics$ = of(success);
                },
                error => {
                    console.error(error);
                },
                () => {
                    // Tirar o loading
                }
            );
    }
}
