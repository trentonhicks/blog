import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Discipleship Notes",
  description: "",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Testimony', link: '/posts/testimony' },
      { text: 'Scriptures: The Word of God', link: '/posts/scriptures-the-word-of-god' },
    ],

    sidebar: [
      {
        text: 'Posts',
        items: [
          { text: 'Testimony', link: '/posts/testimony' },
          { text: 'Scriptures: The Word of God', link: '/posts/scriptures-the-word-of-god' },
        ]
      }
    ],
  }
})
