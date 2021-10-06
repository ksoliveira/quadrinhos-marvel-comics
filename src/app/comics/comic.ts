import { Creator } from "./creator";

export class Comic {
  id: number;
  title: string;
  images: string[];
  thumbnail: string;
  creators: Creator[]
}