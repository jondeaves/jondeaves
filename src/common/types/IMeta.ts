export interface IMetaQuery {
  site: {
    siteMetadata: IMeta;
  };
}

export interface IMeta {
  title: string;
  description: string;
  author: string;
}
