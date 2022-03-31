export enum ProductType {
  APP = 'app',
  SOCIAL = 'social',
  BLOG = 'blog',
  MUSIC = 'music',
}

export interface Product {
  name: string;
  description: string;
  dateClose: string;
  dateOpen: string;
  link: string;
  type: ProductType;
}

export type ProductWithSlug = Product & { slug: string };
