import "./globals.css";

import localFont from "next/font/local";

export const metadata = {
  title: "Create Nex App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
