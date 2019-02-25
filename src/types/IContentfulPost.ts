import IFixedImage from './IFixedImage';

export default interface IContentfulPost {
  node: {
    category: string;
    cover: IFixedImage;
    publishedDate: string;
    slug: string;
    tags: string[];
    title: string;
  };
}
