import react from "react";
import "./global.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default Layout;
