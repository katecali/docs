import nextra from "nextra";

const withNextra = nextra({
  latex: false,
  search: {
    codeblocks: false,
  },
  contentDirBasePath: "/docs",
});

export default withNextra({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "grav.wtf",
      },
    ],
  },
});
