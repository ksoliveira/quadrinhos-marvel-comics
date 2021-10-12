import { of } from "rxjs";


export class ComicsServiceMock {

    comics = require('../../json/comics/find-all-page-1.json');

    findAll() {
        return of(this.comics.response.jsonBody.data.results);
    }

    getTotalElements() {
        return of(this.comics.response.jsonBody.data.count);
    }
}