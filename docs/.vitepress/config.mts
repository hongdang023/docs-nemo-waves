import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Nemo Waves',
  description: 'Brief Phase 0 cho Content Factory Platform của Nemo12',
  lang: 'vi-VN',
  base: '/docs-nemo-waves/',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['README.md'],
  head: [
    ['meta', { name: 'theme-color', content: '#083B66' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/docs-nemo-waves/favicon.svg' }]
  ],
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'Nemo Waves',
    search: { provider: 'local' },
    nav: [
      { text: 'Tổng quan', link: '/' },
      { text: 'Brief', link: '/brief' },
      { text: 'Nguồn chuẩn', link: '/sources' },
      { text: 'Quyết định mở', link: '/decisions' }
    ],
    sidebar: [
      { text: 'Bắt đầu', items: [
        { text: 'Tổng quan', link: '/' },
        { text: 'Brief Phase 0', link: '/brief' }
      ] },
      { text: 'Quản trị tài liệu', items: [
        { text: 'Bản đồ nguồn chuẩn', link: '/sources' },
        { text: 'Quyết định & quality gate', link: '/decisions' }
      ] }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hongdang023/docs-nemo-waves' }
    ],
    footer: { message: 'Phase 0 · Draft để thảo luận · Cập nhật 05.10.2026' },
    outline: { label: 'Trong trang', level: [2, 3] },
    docFooter: { prev: 'Trang trước', next: 'Trang sau' },
    returnToTopLabel: 'Về đầu trang',
    sidebarMenuLabel: 'Mục lục',
    darkModeSwitchLabel: 'Giao diện',
    langMenuLabel: 'Ngôn ngữ'
  }
})
