import IFluidImage from './IFluidImage';

export default interface IContentfulPost {
  node: {
    category: string;
    cover: IFluidImage;
    publishedDate: string;
    slug: string;
    tags: string[];
    title: string;
  };
}
