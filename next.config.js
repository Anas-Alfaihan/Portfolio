/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/Portfolio',
    assetPrefix: `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`,
};

module.exports = nextConfig;
