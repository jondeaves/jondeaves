import GridItemStyles from "./GridItem.module.css";

type GridItemProps = {
  children: React.ReactNode;
  right?: boolean;
};

const GridItem = ({ children, right }: GridItemProps) => {
  const stylesApplied = [GridItemStyles.gridItem];

  if (right) {
    stylesApplied.push(GridItemStyles.gridItemRight);
  }

  return <div className={stylesApplied.join(" ")}>{children}</div>;
};

GridItem.defaultProps = {
  right: false,
};

export default GridItem;
