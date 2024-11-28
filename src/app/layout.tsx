// import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

/* export const metadata: Metadata = {
  title: "Mike is it Friday yet?",
  description:
    "Mike's t-shirt based calendar is more reliable than any calendar in the history of mankind. Our community relies on Mike's YODA t-shirt to show us the way and reduce our anxiety levels. Mike bring us certainty in this uncertain world and provides us the answer to the burning question we seek every single day... Mike, is it Friday yet?",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
