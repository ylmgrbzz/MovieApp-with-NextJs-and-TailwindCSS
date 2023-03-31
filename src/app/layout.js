import react from "react";
import "./global.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Tabs from "@/components/Tabs";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Tabs />
          {children}
        </Providers>
      </body>
    </html>
  );
}

export default Layout;
