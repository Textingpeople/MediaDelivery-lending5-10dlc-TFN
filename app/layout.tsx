import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Balanced Pathway — Budgeting & Goal-Tracking Software for Employees",
  description: "Balanced Pathway is budgeting and goal-tracking software that employers provide to their employees.",
  keywords: "employee budgeting software, goal tracking, monthly budget, employee benefit, budget reminders, budget challenges",
  openGraph: {
    title: "Balanced Pathway — Budgeting & Goal-Tracking Software for Employees",
    description: "Balanced Pathway is budgeting and goal-tracking software that employers provide to their employees.",
    siteName: "Balanced Pathway",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [],
    shortcut: [],
    apple: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
