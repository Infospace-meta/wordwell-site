import { defineConfig } from 'vitepress'
import path from 'path'

export default defineConfig({
  title: "My Blog",
  description: "Blog section",
  // This is the magic: link the '@' alias to your project's main src folder
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src'),
      }
    }
  }
})