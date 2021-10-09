export class ActivatedRouteMock {

    comic = require('../../json/comics/find-by-id-6181.json');

    snapshot;

    constructor() {
        this.snapshot = {
            data: {
                comicResolved: this.comic.response.jsonBody.data.results[0]
            }
        };
    }
}
