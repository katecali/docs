import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Book, Code, Compass, FileText } from "lucide-react";

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

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#3b096c_0%,_transparent_45%)]" />

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src="/logo.webp"
                  alt="ChromaLabs Logo"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text sm:text-6xl">
                  ChromaLabs
                </h1>
              </div>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Comprehensive documentation for FiveM scripts, guides, and
                resources.<br></br>Build better experiences for your
                communities.
              </p>
              <div className="mt-6 flex items-center gap-x-6">
                <Link href="/docs">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 after:absolute after:content-[''] after:bg-white/20 after:h-full after:w-1/3 after:top-0 after:-left-full after:transform after:rotate-45 after:transition-all after:duration-700 hover:after:translate-x-[400%]"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors group relative">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-zinc-100">
                <Book className="w-5 h-5 text-pink-500" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-zinc-400">
              Detailed documentation for our FiveM scripts and resources. Learn
              how to install, configure, and customize our tools.
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors group relative">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-zinc-100">
                <Code className="w-5 h-5 text-purple-500" />
                Scripting
              </CardTitle>
            </CardHeader>
            <CardContent className="text-zinc-400">
              Step-by-step guides and tutorials to help you make the most of our
              scripts and integrate them into your server.
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors group relative">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-zinc-100">
                <Compass className="w-5 h-5 text-cyan-500" />
                Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="text-zinc-400">
              Additional resources, best practices, and community contributions
              to enhance your FiveM development experience.
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors group relative">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-zinc-100">
                <FileText className="w-5 h-5 text-blue-500" />
                Developer Integrations
              </CardTitle>
            </CardHeader>
            <CardContent className="text-zinc-400">
              We aim to provide easy & simple development integration abilities
              allowing seamless connection between your mods and ours.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
