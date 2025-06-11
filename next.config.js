// next.config.js
module.exports = {
  images: {
    domains: [
      'media.licdn.com', // For LinkedIn-hosted images
      'www.windtre.it',  // For Wind3 logo
      'avatars.githubusercontent.com', // Corrected domain
    ],
    unoptimized: true, // Allow local images to be served without optimization
  },
};