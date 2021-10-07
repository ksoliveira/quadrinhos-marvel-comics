import { of } from "rxjs";


export class ComicsServiceMock {

    comics = require('mocks/json/comics/find-all-page-1.json');

    findAll() {
        return of(this.comics.response.jsonBody);
    }
}