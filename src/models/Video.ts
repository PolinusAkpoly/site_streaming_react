import { Category } from "./Category";

export interface Video {
  title: string;
  description: string;
  poster: File | null | string;
  link: File | null | string;
  author?: string;
  isAvailable: boolean;
  category: string;
  created_at?: Date;
  updated_at?: Date;
}
