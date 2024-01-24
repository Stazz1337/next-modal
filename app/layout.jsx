export default function RootLayout({ children, modal }) {
  return (
    <html lang='ru'>
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
