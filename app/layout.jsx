
import "./globals.css";

export const metadata = {
  title: "Apostrophy Creative",
  description: "Premium aesthetic sentimental gifts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
