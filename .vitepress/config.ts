import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Discipleship Notes",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Testimony', link: '/posts/testimony' }
    ],

    sidebar: [
      {
        text: 'Posts',
        items: [
          { text: 'Testimony', link: '/posts/testimony' },
        ]
      }
    ],
  }
})
