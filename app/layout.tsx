import "../styles/global.css";

import { Metadata } from "next";
import Navigation from "../components/navigation.tsx";

export const metadata: Metadata = {
  title: {
    template: "%s | NextJS",
    default: "Loading...",
  },
  description: "Beginner of Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
