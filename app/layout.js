import "./globals.css";

export const metadata = {
  title: "Movie review",
  description: "Review Movie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
