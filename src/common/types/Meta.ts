export interface MetaQuery {
  site: {
    siteMetadata: Meta;
  };
}

export interface Meta {
  title: string;
  description: string;
  author: string;
}
