export default function NewsDetailLayout({
  children,
  modal,
}: Readonly<{ modal: React.ReactNode; children: React.ReactNode }>) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
