import IContentfulPost from '../IContentfulPost';
import IFluidImage from '../IFluidImage';
import IMarkdownBody from '../IMarkdownBody';
import INavLink from '../INavLink';
import ISiteMetadata from '../ISiteMetadata';

export default interface IHomeProps {
  data: {
    allFooterLinks: INavLink;

    allHeaderLinks: INavLink;

    featuredPosts: { edges: IContentfulPost[] };

    pageContent: {
      metaTitle: string;
      metaDescription: string;

      body: IMarkdownBody;

      featuredImage: IFluidImage;
    };

    site: {
      siteMetadata: ISiteMetadata;
    };
  };
}
