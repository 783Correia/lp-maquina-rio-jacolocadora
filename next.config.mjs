/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: 'https://lp-maquina-rio-jacolocadora.vercel.app',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'jaco-locacao.vercel.app',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            }
        ],
    },
};

export default nextConfig;
