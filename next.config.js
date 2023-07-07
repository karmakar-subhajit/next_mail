/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PORT: 3000,
    SMTP_HOST: 'smtp.gmail.com',
    SMTP_PORT: 587,
    SMTP_USER: 'csubhojeet1992@gmail.com',
    SMTP_PASS: 'bhvfogeiewfzuyqh'
  },
  devIndicators: {
    buildActivity: false,
  }
}

module.exports = nextConfig
