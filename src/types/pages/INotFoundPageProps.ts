import IFluidImage from '../IFluidImage';
import IMarkdownBody from '../IMarkdownBody';
import INavLink from '../INavLink';
import ISiteMetadata from '../ISiteMetadata';

export default interface INotFoundPageProps {
  data: {
    allFooterLinks: INavLink;

    allHeaderLinks: INavLink;

    pageContent: {
      title: string;
      metaTitle: string;
      metaDescription: string;

      body: IMarkdownBody;

      featuredImage: IFluidImage;
    };

    site: {
      siteMetadata: ISiteMetadata;
    };
  };

  styles: {
    summary: string;
  };
}
