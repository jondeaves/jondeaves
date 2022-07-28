import GridStyles from "./Grid.module.css";

type GridProps = {
  children: React.ReactNode;
};

const Grid = ({ children }: GridProps) => {
  return <div className={GridStyles.grid}>{children}</div>;
};

export default Grid;
