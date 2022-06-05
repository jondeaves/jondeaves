type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {/* <header></header> */}
      <main>{children}</main>
      {/* <footer></footer> */}
    </>
  );
}
