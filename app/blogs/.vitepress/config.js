import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "WordWell Writers",
  description: "Expert Academic Writing Services",
  base: '/blog/', // Essential for deployment as a sub-directory
  cleanUrls: true,
  
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    // Reference the same font as the main site
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap' }]
  ],

  themeConfig: {
    // We will override the layout, but these are fallbacks
    nav: [
      { text: 'Home', link: 'https://wordwellwriters.com/' },
      { text: 'Services', link: 'https://wordwellwriters.com/services' },
      { text: 'How It Works', link: 'https://wordwellwriters.com/how-it-works' },
      { text: 'Order Now', link: 'https://wordwellwriters.com/order' }
    ],
  }
})