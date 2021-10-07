import { Component, Input, OnInit } from '@angular/core';
import { Creators } from '../objects/creators';
import { Image } from '../objects/image';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.css']
})
export class ComicCardComponent implements OnInit {

  @Input() title: string;
  @Input() images: Image[];
  @Input() thumbnail: Image;
  @Input() creators: Creators;

  thumbnailURL = '';

  constructor() { }

  ngOnInit(): void {
    this.thumbnailURL = this.thumbnail.path + '.' + this.thumbnail.extension;

    

  }

}
