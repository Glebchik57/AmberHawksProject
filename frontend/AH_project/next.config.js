/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: false,
    // swcMinify: true,
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'amfoot39.ru',
            },
        ],
    },
}

module.exports = nextConfig
