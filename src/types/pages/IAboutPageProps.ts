import IAboutMicrodata from '../IAboutMicrodata';
import IFixedImage from '../IFixedImage';
import IMarkdownBody from '../IMarkdownBody';
import INavLink from '../INavLink';
import ISiteMetadata from '../ISiteMetadata';

export default interface IAboutPageProps {
  data: {
    allFooterLinks: INavLink;

    allHeaderLinks: INavLink;

    pageContent: {
      metaTitle: string;
      metaDescription: string;

      body: IMarkdownBody;

      featuredImage: IFixedImage;

      fragmentData: {
        skills: string[];
        microdata: IAboutMicrodata;
      };
    };

    site: {
      siteMetadata: ISiteMetadata;
    };
  };
}
