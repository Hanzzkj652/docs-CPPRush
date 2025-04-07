import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './floating-elements.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    router.onAfterRouteChanged = (to) => {
      if (typeof window !== 'undefined') {
        // 创建滚动进度条
        const createScrollProgress = () => {
          const scrollProgress = document.createElement('div')
          scrollProgress.className = 'scroll-progress'
          document.body.appendChild(scrollProgress)
          
          window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrollPercent = (scrollTop / scrollHeight) * 100
            scrollProgress.style.width = `${scrollPercent}%`
          })
        }
        
        // 创建增强的背景特效
        const createEnhancedBackground = () => {
          // 检查是否已创建背景元素
          if (document.querySelector('.global-background-elements')) return

          const backgroundElements = document.createElement('div')
          backgroundElements.className = 'global-background-elements'
          
          // 添加动态渐变背景
          const dynamicGradient = document.createElement('div')
          dynamicGradient.className = 'dynamic-gradient'
          backgroundElements.appendChild(dynamicGradient)
          
          // 添加光线效果
          const lightRays = document.createElement('div')
          lightRays.className = 'light-rays'
          backgroundElements.appendChild(lightRays)
          
          // 添加网格背景
          const gridBackground = document.createElement('div')
          gridBackground.className = 'grid-background'
          backgroundElements.appendChild(gridBackground)

          // 添加磁场线效果
          const magneticField = document.createElement('div')
          magneticField.className = 'magnetic-field'
          backgroundElements.appendChild(magneticField)
          
          // 添加星空效果
          const starryBackground = document.createElement('div')
          starryBackground.className = 'starry-background'
          
          // 创建随机星星
          for (let i = 0; i < 50; i++) {
            const star = document.createElement('div')
            star.className = 'star'
            
            // 随机位置、大小和动画延迟
            const size = Math.random() * 3 + 1
            const left = Math.random() * 100
            const top = Math.random() * 100
            const delay = Math.random() * 5
            
            star.style.width = `${size}px`
            star.style.height = `${size}px`
            star.style.left = `${left}%`
            star.style.top = `${top}%`
            star.style.animationDelay = `${delay}s`
            
            starryBackground.appendChild(star)
          }
          
          backgroundElements.appendChild(starryBackground)
          
          // 添加气泡效果
          for (let i = 0; i < 10; i++) {
            const bubble = document.createElement('div')
            bubble.className = 'bubble'
            
            // 随机位置、大小和动画参数
            const size = Math.random() * 50 + 30
            const left = Math.random() * 100
            const bottom = Math.random() * 30
            const delay = Math.random() * 10
            const duration = Math.random() * 10 + 10
            
            bubble.style.width = `${size}px`
            bubble.style.height = `${size}px`
            bubble.style.left = `${left}%`
            bubble.style.bottom = `${bottom}%`
            bubble.style.animationDelay = `${delay}s`
            bubble.style.animationDuration = `${duration}s`
            
            backgroundElements.appendChild(bubble)
          }
          
          // 添加基本浮动元素
          for (let i = 0; i < 12; i++) {
            const floatingEl = document.createElement('div')
            floatingEl.className = 'floating-element'
            
            // 随机样式
            const size = Math.floor(Math.random() * 20) + 8
            const left = Math.floor(Math.random() * 100)
            const top = Math.floor(Math.random() * 100)
            const animationDuration = Math.floor(Math.random() * 20) + 20
            const delay = Math.floor(Math.random() * 10)
            
            floatingEl.style.width = `${size}px`
            floatingEl.style.height = `${size}px`
            floatingEl.style.left = `${left}%`
            floatingEl.style.top = `${top}%`
            floatingEl.style.animationDuration = `${animationDuration}s`
            floatingEl.style.animationDelay = `${delay}s`
            
            backgroundElements.appendChild(floatingEl)
          }
          
          document.body.appendChild(backgroundElements)
          
          // 添加鼠标移动跟随效果
          if (window.innerWidth > 768) { // 仅在非移动设备上启用
            document.addEventListener('mousemove', (e) => {
              const mouseX = e.clientX / window.innerWidth
              const mouseY = e.clientY / window.innerHeight
              
              // 光线效果平滑过渡
              lightRays.style.transition = 'transform 0.3s ease-out'
              lightRays.style.transform = `scale(${1 + mouseY * 0.1}) translate(${(mouseX - 0.5) * 30}px, ${(mouseY - 0.5) * 30}px)`
              
              // 渐变背景平滑过渡
              dynamicGradient.style.transition = 'background-position 0.3s ease-out'
              dynamicGradient.style.backgroundPosition = `${50 + (mouseX - 0.5) * 20}% ${50 + (mouseY - 0.5) * 20}%`
            })
          }
        }
        
        // 当DOM加载完成后执行
        if (document.readyState === 'complete') {
          createScrollProgress()
          createEnhancedBackground()
        } else {
          window.addEventListener('load', () => {
            createScrollProgress()
            createEnhancedBackground()
          })
        }
      }
    }
  }
}
