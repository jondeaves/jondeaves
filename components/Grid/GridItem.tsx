import GridItemStyles from "./GridItem.module.css";

type GridItemProps = {
  children: React.ReactNode;
};

const GridItem = ({ children }: GridItemProps) => {
  return <div className={GridItemStyles.grid}>{children}</div>;
};

export default GridItem;
