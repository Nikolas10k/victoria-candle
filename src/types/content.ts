export interface Product {
  slug: string;
  name: string;
  type: string;
  notes: string;
  image: string;
  alt: string;
  badge?: string;
}

export interface Category {
  title: string;
  description: string;
  image: string;
  alt: string;
}
