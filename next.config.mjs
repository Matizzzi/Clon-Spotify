/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com'],  // Agregar el dominio aquí
  },
};

export default nextConfig;
