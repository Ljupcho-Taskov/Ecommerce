export interface BannerType {
  preTitle: string;
  title: string;
}

export interface AboutPageType {
  title: string;
  first_content: string;
  second_content: string;
  third_content: string;
  first_image: string;
  second_image: string;
  second_title: string;
  fourth_content: string;
  fifth_content: string;
  author: string;
}

export interface BlogsType {
  id: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  img: string;
  title: string;
  first_content: string;
  second_content: string;
}

export interface ProductsType {
  id: string;
  price: string;
  title: string;
  gender: string;
  img: string;
  description: string;
}

export type FeaturedProductsType = ProductsType;

export type FeaturedBlogsType = BlogsType;
