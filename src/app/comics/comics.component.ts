import { Component, OnInit } from '@angular/core';
import { ComicsService } from './comics.service';

@Component({
    selector: 'app-comics',
    templateUrl: './comics.component.html',
    styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

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
                    console.log(success);
                },
                error => {
                    console.log(error);
                },
                () => {
                    // Tirar o loading
                }
            );
    }
}
