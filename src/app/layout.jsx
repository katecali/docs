/* eslint-env node */
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Image from "next/image";
import "../app/globals.css";
import "nextra-theme-docs/style.css";

export const metadata = {
  metadataBase: "https://docs.grav.wtf",
  title: {
    template: "%s - ChromaLabs",
    default: "ChromaLabs",
  },
  description: "FiveM Scripts & Resources",
  applicationName: "ChromaLabs",
  generator: "Next.js",
  appleWebApp: {
    title: "ChromaLabs",
  },
  other: {
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "msapplication-TileColor": "#fff",
  },
  twitter: {
    site: "@chromalabs",
    card: "summary_large_image",
    title: "ChromaLabs",
    description: "ChromaLabs: FiveM Scripts & Resources",
    images: ["https://grav.wtf/chromalabsbannerfivem.png"],
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ChromaLabs",
    description: "ChromaLabs: FiveM Scripts & Resources",
    url: "https://docs.grav.wtf",
    siteName: "ChromaLabs",
    images: [
      {
        url: "https://grav.wtf/chromalabsbannerfivem.png",
        width: 1200,
        height: 630,
        alt: "ChromaLabs Banner",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
    site_name: "ChromaLabs",
    image: {
      width: "1200",
      height: "630",
      alt: "ChromaLabs | FiveM Scripts & Resources",
    },
    locale: {
      alternate: ["en_GB"],
    },
  },
};

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <Image src="/logo.webp" alt="ChromaLabs Logo" width={32} height={32} />
      }
      projectLink="https://github.com/Gravxd/"
      chatLink="https://discord.gg/chromalabs"
    />
  );
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          navbar={navbar}
          footer={<Footer></Footer>}
          editLink="Edit this page"
          docsRepositoryBase="https://github.com/Gravxd/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
