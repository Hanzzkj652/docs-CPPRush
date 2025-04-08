---
layout: home

hero:
  name: "🚀 CPPRush"
  text: "AllCPP票务抢票工具"
  tagline: 高效、便捷的AllCPP票务抢购解决方案
  image:
    src: /images/logo.png
    alt: CPPRush Logo
  actions:
    - theme: brand
      text: 🚀 开始使用
      link: /intro
    - theme: alt
      text: 📂 在GitHub上查看
      link: https://github.com/Hanzzkj652/CPPRush


features:
  - icon: 📢
    title: 重要公告
    details: 
      我将在未来的日子里为大家带来更加优秀的项目。其他项目有学习通刷课,网址为docs-xuetongauto.netlify.app，欢迎大家使用。
    type: warning

  - icon: ⚡
    title: 高效抢票
    details: 提供精准的时间同步和高效的抢票策略，大幅提高抢票成功率

  - icon: 🎫
    title: 多票种支持
    details: 支持配置多种票务类型，满足不同用户的抢票需求

  - icon: 💻
    title: 多平台兼容
    details: 支持Windows系统使用，提供图形界面和命令行双重操作体验

  - icon: 🔒
    title: 安全可靠
    details: 本地运行，不会窃取用户数据，安全稳定且值得信赖
    
  - icon: 🔄
    title: 自动化流程
    details: 从登录、选票到下单支付的全自动化流程，让抢票更轻松高效
---

<div class="animated-background">
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
</div>

<div class="typing-container">
  <p class="typing-text">抢票助手已就绪，等待您的指令...</p>
</div>

<div class="counter-section">
  <div class="counter-item">
    <div class="counter-container">
      <div class="counter" id="users-counter">500</div>
      <div class="counter-plus">+</div>
    </div>
    <div class="counter-label">用户数量</div>
  </div>
  <div class="counter-item">
    <div class="counter-container">
      <div class="counter" id="tickets-counter">1200</div>
      <div class="counter-plus">+</div>
    </div>
    <div class="counter-label">成功抢票数</div>
  </div>
  <div class="counter-item">
    <div class="counter-container">
      <div class="counter" id="rate-counter">98</div>
      <div class="counter-percentage">%</div>
    </div>
    <div class="counter-label">成功率</div>
  </div>
</div>

<style>
/* 背景动画 */
.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--vp-c-brand-1);
  opacity: 0.2;
  animation: float 15s linear infinite;
}

.particle:nth-child(1) { left: 10%; top: 20%; animation-duration: 25s; }
.particle:nth-child(2) { left: 20%; top: 80%; animation-duration: 28s; }
.particle:nth-child(3) { left: 30%; top: 40%; animation-duration: 20s; }
.particle:nth-child(4) { left: 40%; top: 65%; animation-duration: 18s; }
.particle:nth-child(5) { left: 50%; top: 30%; animation-duration: 22s; }
.particle:nth-child(6) { left: 60%; top: 70%; animation-duration: 15s; }
.particle:nth-child(7) { left: 70%; top: 20%; animation-duration: 26s; }
.particle:nth-child(8) { left: 80%; top: 50%; animation-duration: 30s; }
.particle:nth-child(9) { left: 85%; top: 30%; animation-duration: 28s; }
.particle:nth-child(10) { left: 90%; top: 80%; animation-duration: 24s; }

@keyframes float {
  0% {
    transform: translateY(0) translateX(0) scale(1);
  }
  33% {
    transform: translateY(-50px) translateX(30px) scale(1.1);
  }
  66% {
    transform: translateY(20px) translateX(-20px) scale(0.9);
  }
  100% {
    transform: translateY(0) translateX(0) scale(1);
  }
}

/* 截图容器 */
.custom-block {
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 8px;
}

.screenshot-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  transition: all 0.5s ease;
}

.screenshot-container:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.main-screenshot {
  max-width: 80%;
  border-radius: 8px;
  transition: all 0.5s ease;
}

.spotlight {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.4) 50%,
    transparent 100%
  );
  animation: spotlight 3s ease-in-out infinite;
}

@keyframes spotlight {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* 打字效果 */
.typing-container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.typing-text {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid var(--vp-c-brand-1);
  animation: typing 4s steps(40) infinite, blink-caret 0.75s step-end infinite;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  color: var(--vp-c-brand-1);
}

@keyframes typing {
  0% { width: 0 }
  50% { width: 100% }
  90% { width: 100% }
  100% { width: 0 }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: var(--vp-c-brand-1) }
}

/* 计数器区域 - 改进版 */
.counter-section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3rem auto;
  max-width: 900px;
  gap: 20px;
  padding: 0 20px;
}

.counter-item {
  text-align: center;
  padding: 1.5rem;
  min-width: 220px;
  position: relative;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.4s ease;
  flex: 1;
}

.counter-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.counter-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, var(--vp-c-brand-3), var(--vp-c-brand-1));
}

.counter-container {
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 0.8rem;
}

.counter {
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-3) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 10px rgba(66, 184, 131, 0.3);
  position: relative;
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  line-height: 1.1;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.counter.animated {
  opacity: 1;
  transform: translateY(0);
}

.counter-plus, .counter-percentage {
  font-size: 1.8rem;
  font-weight: 700;
  margin-left: 5px;
  color: var(--vp-c-brand-2);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.5s ease;
  transition-delay: 0.3s;
}

.counter.animated + .counter-plus,
.counter.animated + .counter-percentage {
  opacity: 1;
  transform: translateY(0);
}

.counter-label {
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 10px;
  color: var(--vp-c-text-2);
  opacity: 0;
  transform: translateY(10px);
  position: relative;
}

.counter-label.animated {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.5s ease;
  transition-delay: 0.4s;
}

.counter-label::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  width: 40px;
  height: 2px;
  background: var(--vp-c-brand-1);
  transform: translateX(-50%) scaleX(0);
  transition: transform 0.5s ease;
}

.counter-item:hover .counter-label::after {
  transform: translateX(-50%) scaleX(1);
}

/* 为计数器添加脉动动画 */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.counter.animated {
  animation: pulse 2s infinite;
  animation-delay: 1s;
}

/* 特性卡片动画 */
.VPFeature {
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: featureAppear 0.5s ease forwards;
  animation-delay: calc(var(--index) * 0.2s);
}

@keyframes featureAppear {
  to { opacity: 1; transform: translateY(0); }
}

/* 让按钮有动画效果 */
.VPButton {
  overflow: hidden;
  position: relative;
}

.VPButton::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: 0.5s;
}

.VPButton:hover::after {
  left: 100%;
}
</style>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 初始化计数器
  setTimeout(() => {
    animateCounters()
    animateCounterLabels()
  }, 500)
})

function animateCounters() {
  const counters = document.querySelectorAll('.counter')
  
  counters.forEach(counter => {
    // 先添加动画类使元素出现
    counter.classList.add('animated')
    
    // 获取目标数值
    const target = parseInt(counter.textContent)
    
    // 设置初始值
    counter.textContent = '0'
    
    // 设置动画持续时间和步进值
    const duration = 1500 // 1.5秒完成
    const steps = 60 // 大约每秒60帧
    const increment = target / steps
    const stepTime = duration / steps
    let currentCount = 0
    let stepCount = 0
    
    // 使用easeOutExpo缓动函数使动画更自然
    const easeOutExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
    
    // 计数器动画
    const updateCounter = () => {
      stepCount++
      const progress = easeOutExpo(stepCount / steps)
      currentCount = Math.floor(progress * target)
      
      if (stepCount < steps) {
        counter.textContent = currentCount
        setTimeout(updateCounter, stepTime)
      } else {
        counter.textContent = target
      }
    }
    
    setTimeout(updateCounter, 300) // 稍微延迟开始计数动画
  })
}

function animateCounterLabels() {
  const labels = document.querySelectorAll('.counter-label')
  
  labels.forEach((label, index) => {
    setTimeout(() => {
      label.classList.add('animated')
    }, 500 + index * 150)
  })
}
</script>

