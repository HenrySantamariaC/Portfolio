/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "photo-story": "url('img/photo-story.jpg')",
        "photo-profile": "url('img/photo-profile.jpg')",
      },
    },
  },
  plugins: [],
};
