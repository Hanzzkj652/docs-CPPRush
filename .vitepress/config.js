import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "CPPRush",
  description: "高效、便捷的AllCPP票务抢购解决方案",
  lang: 'zh-CN',
  
  head: [
    ['link', { rel: 'icon', href: '/images/icon.ico' }]
  ],
  
  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '项目介绍', link: '/intro' },
      { text: '安装说明', link: '/installation' },
      { text: '使用指南', 
        items: [
          { text: '基础使用', link: '/useguide/usage' },
          { text: '高级用法', link: '/useguide/advanced' }
        ]
      },
      { text: '隐私安全', link: '/useguide/privacy-security' },
      { text: 'GitHub', link: 'https://github.com/Hanzzkj652/CPPRush' }
    ],
    
    // 修改为全局侧边栏配置
    sidebar: [
      {
        text: '入门指南',
        collapsed: false,
        items: [
          { text: '项目介绍', link: '/intro' },
          { text: '安装说明', link: '/installation' },
        ]
      },
      {
        text: '使用指南',
        collapsed: false,
        items: [
          { text: '基础使用', link: '/useguide/usage' },
          { text: '高级用法', link: '/useguide/advanced' },
          { text: '常见问题', link: '/useguide/faq' },
          { text: '隐私与安全', link: '/useguide/privacy-security' }
        ]
      },
      {
        text: '法律与隐私声明',
        collapsed: false,
        items: [
          { text: '用户协议', link: '/privacy/eula' },
          { text: '隐私政策', link: '/privacy/policy' }
        ]
      },
      {
        text: '其他',
        collapsed: false,
        items: [
          { text: '捐赠', link: '/other/donation' },
          { text: '联系我们', link: '/other/contact-us' },
          { text: '注意事项', link: '/other/warning' },
          { text: '反馈建议', link: '/other/feedback' }
        ] 
      }
    ],
    
    // 显示侧边栏选项
    sidebarMenuLabel: '菜单',
    
    // 返回顶部按钮
    returnToTopLabel: '返回顶部',
    
    // 显示大纲
    outline: {
      level: 'deep',
      label: '本页目录'
    },
    
    // 展示上下页导航
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    // 配置侧边栏在移动设备上的行为
    aside: true,
    
    // 其他配置保持不变
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hanzzkj652/CPPRush' }
    ],
    
    footer: {
      message: '基于MIT许可发布',
      copyright: 'Copyright © 2024-2025 CPPRush团队'
    },
    
    search: {
      provider: 'local'
    }
  }
})
