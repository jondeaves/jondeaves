import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jon Deaves' web development projects",
  description: "Jon Deaves is a Web Developer who makes websites",
};

export default function WebDev() {
  return (
    <>
      <h1>Web development</h1>

      <p className="lead">Some web development stuff here</p>
    </>
  );
}
