import "./globals.css";

export const metadata = {
  title: "Admin Paneli",
  description: "Portfolio sitesinin admin paneli",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-beyaz`}>{children}</body>
    </html>
  );
}
