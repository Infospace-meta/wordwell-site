// .vitepress/theme/index.js
import Layout from './Layout.vue'
import './../../../src/style.css' // Your main website's Tailwind/Global CSS

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // You can register global components here if needed
  }
}