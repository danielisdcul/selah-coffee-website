import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "http";
  const baseUrl = new URL(`${protocol}://${host}`);
  const title = "Selah Coffee — Start with coffee. Stay for company.";
  const description =
    "A community-first coffee house in San Diego, made for good coffee and slower moments.";
  const socialImage = new URL("/og.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title,
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title,
      description,
      type: "website",
      url: baseUrl,
      images: [{ url: socialImage, width: 1732, height: 909, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          src="https://mcp.figma.com/mcp/html-to-design/capture.js"
          async
        />
      </body>
    </html>
  );
}
