/** @type {import('next').NextConfig} */


import ii8n from 'next-i18next';

const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'],
  },
};

export default nextConfig;
