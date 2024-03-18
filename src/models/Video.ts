import { Category } from "./Category";

export interface Video {
  _id?: number
  title: string;
  description: string;
  poster: File | Blob | string | null; //File | null | string ;
  link: File | Blob | string | null; //File | null | string;
  author?: string;
  isAvailable: boolean;
  category: string;
  created_at?: Date;
  updated_at?: Date;
}
