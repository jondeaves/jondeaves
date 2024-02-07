import { PropsWithChildren } from "react";

import GridItemStyles from "./GridItem.module.css";

interface GridItemProps extends PropsWithChildren {
  right?: boolean;
}

export const GridItem = ({ children, right = false }: GridItemProps) => {
  const stylesApplied = [GridItemStyles.gridItem];

  if (right) {
    stylesApplied.push(GridItemStyles.gridItemRight);
  }

  return <div className={stylesApplied.join(" ")}>{children}</div>;
};
