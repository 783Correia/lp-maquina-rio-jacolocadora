/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/maquinario',
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
