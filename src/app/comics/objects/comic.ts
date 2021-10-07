import { Creators } from './creators';
import { Image } from './image';

export class Comic {
  id: number;
  title: string;
  images: Image[];
  thumbnail: Image;
  creators: Creators[];
}
