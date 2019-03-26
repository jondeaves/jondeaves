import INavLink from '../types/INavLink';
import ISiteMetadata from '../types/ISiteMetadata';

export default interface IPostTemplateProps {
  data: {
    allFooterLinks: INavLink;

    allHeaderLinks: INavLink;

    contentfulPost: any;

    site: {
      siteMetadata: ISiteMetadata;
    };
  };
}
