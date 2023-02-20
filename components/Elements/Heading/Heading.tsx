import React from "react";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading = ({ children, className, level }: HeadingProps) => {
  const HeadingComponent = React.createElement(
    `h${level}`,
    {
      className,
    },
    children,
  );

  return HeadingComponent;
};

Heading.defaultProps = {
  level: 3,
};

export default Heading;
