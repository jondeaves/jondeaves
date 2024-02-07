import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = ({ children, className, level = 3 }: HeadingProps) => {
  const HeadingComponent = React.createElement(
    `h${level}`,
    {
      className,
    },
    children,
  );

  return HeadingComponent;
};
