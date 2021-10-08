import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs/index';
import { ComicsService } from '../comics.service';
import { Comic } from '../objects/comic';

@Injectable({
    providedIn: 'root'
})

export class ComicResolverGuard implements Resolve<Comic> {
    constructor(private service: ComicsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Comic | Observable<Comic> {

        if (route.params && route.params['id']) {
            return this.service.findById(route.params['id']);
        }

        // return of({
        //     code: null,
        //     name: null,
        //     openDate: null,
        //     closeDate: null,
        //     status: {
        //         description: null
        //     },
        //     type: {
        //         id: null,
        //         description: null
        //     }
        // });
    }
}
