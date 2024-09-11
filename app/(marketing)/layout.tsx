import "../globals.css";
import { ILayoutProps } from "@/types";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }: Readonly<ILayoutProps>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
