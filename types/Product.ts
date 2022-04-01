export enum ProductType {
  APP = 'app',
  SOCIAL = 'social',
  BLOG = 'blog',
  MUSIC = 'music',
  ECOMMERCE = 'e-commerce',
  BBS = 'bbs',
  TECHNOLOGY = 'technology',
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
