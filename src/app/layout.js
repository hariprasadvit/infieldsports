export const metadata = {
  title: "Infield Sports",
  description: "Sports application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
