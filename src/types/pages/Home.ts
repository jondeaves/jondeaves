import IFluidImage from '../IFluidImage';
import IMarkdownBody from '../IMarkdownBody';
import ISiteMetadata from '../ISiteMetadata';

export default interface IHomeProps {
  data: {
    site: {
      siteMetadata: ISiteMetadata;
    };

    pageContent: {
      metaTitle: string;
      metaDescription: string;

      body: IMarkdownBody;

      featuredImage: IFluidImage;
    };
  };
}
