import GridStyles from "./Grid.module.css";

interface GridProps {
  children: React.ReactNode;
  size?: "medium" | "large";
}

export const Grid = ({ children, size = "medium" }: GridProps) => (
  <div className={size === "medium" ? GridStyles.grid : GridStyles.gridLg}>
    {children}
  </div>
);
