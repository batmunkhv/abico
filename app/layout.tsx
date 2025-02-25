import react, { ReactNode } from "react";
import "@/styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>{ children }</body>
    </html>
  );
}

export default RootLayout;