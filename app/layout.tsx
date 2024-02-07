import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jon Deaves, Web Developer",
  description:
    "Jon Deaves is a Web Developer who makes things, usually with code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="wrapper">{children}</body>
    </html>
  );
}
