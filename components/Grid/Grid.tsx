import GridStyles from "./Grid.module.css";

type GridProps = {
  children: React.ReactNode;
  size?: "medium" | "large";
};

const Grid = ({ children, size = "medium" }: GridProps) => {
  return (
    <div className={size === "medium" ? GridStyles.grid : GridStyles.gridLg}>
      {children}
    </div>
  );
};

export default Grid;
