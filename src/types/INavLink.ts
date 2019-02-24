export default interface INavLink {
  edges: Array<{
    node: {
      title: string;
      uri: string;
      external: boolean;
    };
  }>;
}
