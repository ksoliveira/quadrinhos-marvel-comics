import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Creator } from '../objects/creator';
import { Creators } from '../objects/creators';
import { Image } from '../objects/image';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.css', './comic-card.component.slider.css']
})
export class ComicCardComponent implements OnInit {

  @Input() title: string;
  @Input() id: string;
  @Input() images: Image[];
  @Input() thumbnail: Image;
  @Input() creators: Creators;

  @Output() clickSeeMore = new EventEmitter();


  images$: Observable<Image[]>;
  creators$: Observable<Creator[]>

  thumbnailURL = '';

  constructor() { }

  ngOnInit(): void {
    const thumbnailPath = this.thumbnail ? this.thumbnail.path : undefined;
    const thumbnailExtension = this.thumbnail ? this.thumbnail.extension : undefined;
    
    this.thumbnailURL = thumbnailPath + '.' + thumbnailExtension;
    
    if(this.creators && this.creators.available > 0){
      this.creators$ = of(this.creators.items);
    }
    this.images$ = of(this.images);
  }

  onCLickSeeMore() {
    this.clickSeeMore.emit();
  }
}
