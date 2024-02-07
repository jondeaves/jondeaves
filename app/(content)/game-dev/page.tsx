import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jon Deaves' game development project",
  description: "Jon Deaves is a Web Developer who makes games as a hobby",
};

export default function GameDev() {
  return (
    <>
      <h1>Game development</h1>

      <p className="lead">Some game development stuff here</p>
    </>
  );
}
