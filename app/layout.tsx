import type { ReactNode } from "react";

export const metadata = {
  title: { default: "Acme Outdoor", template: "%s · Acme Outdoor" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
