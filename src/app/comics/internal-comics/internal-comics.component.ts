import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comic } from '../objects/comic';
import { Creators } from '../objects/creators';
import { ComicDate } from '../objects/date';
import { GroupedCreators } from '../objects/grouped-creators';
import { Image } from '../objects/image';

@Component({
    selector: 'app-internal-comics',
    templateUrl: './internal-comics.component.html',
    styleUrls: ['./internal-comics.component.css']
})
export class InternalComicsComponent implements OnInit {

    comic: Comic;
    thumbnail: Image;
    creators: Creators;
    groupedCreators: GroupedCreators;
    creatorsGroup: any;

    publishedDate:string;

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.comic =this.route.snapshot.data['comicResolved'];
        
        this.setThumbnail();
        this.setCreators();
        this.setPublishedDate();
    }

    setPublishedDate() {
        if(this.comic.dates && this.comic.dates.length > 0) {
            this.comic.dates.forEach((date: ComicDate) => {
                if(date.type === 'onsaleDate') {
                    this.publishedDate = date.date;
                }
            });
        }
    }

    setCreators() {
        if(this.comic.creators && 
            this.comic.creators.available && 
            this.comic.creators.available > 0) {
                this.creators = this.comic.creators;
                this.setGroupedCreators();
        }
    }

    setGroupedCreators() {
        let creatorsArray = [];
        let creatorsItems = this.creators.items;

        Object.keys(creatorsItems).map(function(key) {
            creatorsArray.push(creatorsItems[key])  
            return creatorsArray;  
        });

        const group: GroupedCreators = creatorsArray.reduce(function (grouped, creator) {
            grouped[creator.role] = grouped[creator.role] || [];
            grouped[creator.role].push(creator);
            return grouped;
        }, Object.create(null));
        
        this.groupedCreators = group;
    }

    setThumbnail() {
        if(this.comic.thumbnail) {
        this.thumbnail = this.comic.thumbnail;
        }
    }

    getThumbnailPath() {
        let thumbnailPath = this.thumbnail.path && 
                            this.thumbnail.extension &&
                            this.thumbnail.path.indexOf('image_not_available') < 0 ? 
                                this.thumbnail.path + '.' + this.thumbnail.extension :
                                '/assets/img/image-not-found.jpg';

        return thumbnailPath;
    }
}
