import { Creators } from './creators';
import { ComicDate } from './date';
import { Image } from './image';

export class Comic {
  id: number;
  title: string;
  images: Image[];
  thumbnail: Image;
  creators: Creators;
  dates: ComicDate[];
  description: string;
}
