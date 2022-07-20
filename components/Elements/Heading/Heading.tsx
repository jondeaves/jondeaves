import React from "react";

type HeadingProps = {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading = ({ children, level }: HeadingProps) => {
  const HeadingComponent = React.createElement(`h${level}`, {}, children);

  return HeadingComponent;
};

Heading.defaultProps = {
  level: 3,
};

export default Heading;
