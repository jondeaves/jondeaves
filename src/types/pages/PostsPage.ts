import IContentfulPost from '../IContentfulPost';
import IMarkdownBody from '../IMarkdownBody';
import INavLink from '../INavLink';
import ISiteMetadata from '../ISiteMetadata';

export default interface IPostsPageProps {
  data: {
    allFooterLinks: INavLink;

    allHeaderLinks: INavLink;

    posts: { edges: IContentfulPost[] };

    pageContent: {
      title: string;
      metaTitle: string;
      metaDescription: string;

      body: IMarkdownBody;
    };

    site: {
      siteMetadata: ISiteMetadata;
    };
  };
}
