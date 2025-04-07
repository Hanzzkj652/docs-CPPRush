# 📘 CPPRush 项目介绍

::: warning
⚠️ **重要提示**

**由于CP31申摊期间CPP平台出现服务器宕机问题，且新增了登录验证码机制，目前无法确定CP31抢票时的具体验证措施。** 

为确保您能顺利购票，建议：

1. 同时使用多个购票渠道
2. **关注B站同类项目[BLT]()(测试中)作为备选方案**
3. 实时留意官方公告的验证政策更新
:::


::: tip
👉 本项目由CPPRush团队开发，旨在帮助用户更高效地购买到心仪的票务

🔗 项目地址：[Github地址](https://github.com/Hanzzkj652/CPPRush)

🌟 项目开源，欢迎各位大佬贡献代码
:::


## 🔍 项目背景

CPPRush是一款专为AllCPP票务平台设计的抢票工具，旨在帮助用户更高效地购买到心仪的票务。在票务资源紧张的情况下，手动抢票往往面临系统拥堵、页面加载缓慢、抢票时间紧迫等问题，CPPRush通过自动化技术解决这些痛点。

## ✨ 主要功能

CPPRush提供以下主要功能：

| 功能 | 描述 |
|------|------|
| **账号管理** | 支持登录AllCPP账号，管理登录状态和cookie信息 |
| **抢票配置** | 可配置票种信息、购买人信息和抢票策略 |
| **自动抢票** | 支持定时抢票、高频率请求和自动重试 |
| **订单查询** | 查看已抢到的票务订单 |
| **支付管理** | 生成支付二维码，完成订单支付 |
| **消息通知** | 支持Server酱和PushPlus消息推送，及时获取抢票结果 |

## 🛠️ 技术特点

- **⏱️ 时间同步**：通过NTP服务器同步时间，确保抢票时机精准
- **🤖 自动化操作**：自动完成登录、选票、下单等流程
- **⚙️ 灵活配置**：可自定义抢票频率、模式和尝试次数
- **🔐 安全可靠**：本地运行程序，不会窃取或泄露用户敏感信息

## 🎯 适用场景

CPPRush适用于以下场景：

- 热门活动票务抢购
- 限量票种快速购买
- 开售即抢的稀缺票务
- 需要同时抢多张票的团体购票

---

## 📝 使用须知

CPPRush是一个辅助工具，使用时请遵守以下原则：

- ✅ 遵守AllCPP平台的用户协议和规则
- ✅ 合理使用，不要过于频繁请求以免影响服务器
- ✅ 仅用于个人正常购票，不得用于商业牟利
- ✅ 使用前请详细阅读使用文档和用户协议

<div class="features">
  <div class="feature animated-card">
    <h3>💡 智能抢票</h3>
    <p>智能识别票种信息，自动化完成抢票流程</p>
  </div>
  <div class="feature animated-card">
    <h3>🔔 实时通知</h3>
    <p>多种消息推送方式，第一时间获知抢票结果</p>
  </div>
  <div class="feature animated-card">
    <h3>📊 数据分析</h3>
    <p>记录抢票过程数据，助您分析最佳抢票策略</p>
  </div>
</div>

<style>
.features {
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
  gap: 20px;
}
.feature {
  flex: 1;
  min-width: 250px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 20px;
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
}
.feature::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: 0.5s;
}
.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}
.feature:hover::before {
  left: 100%;
}
.animated-card {
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: calc(var(--animation-order, 0) * 0.1s);
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.feature:nth-child(1) { --animation-order: 1; }
.feature:nth-child(2) { --animation-order: 2; }
.feature:nth-child(3) { --animation-order: 3; }

h1, h2, h3 {
  animation: fadeIn 1s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

hr {
  position: relative;
  overflow: hidden;
}
hr::after {
  content: '';
  position: absolute;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--vp-c-brand-1), transparent);
  animation: gradientSlide 2s ease infinite;
}
@keyframes gradientSlide {
  to { left: 100%; }
}
</style>

<script>
// 滚动动画
document.addEventListener('DOMContentLoaded', function() {
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animated-card');
    elements.forEach(element => {
      const position = element.getBoundingClientRect();
      if(position.top < window.innerHeight) {
        element.style.opacity = '1';
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  // 初始触发一次，处理首屏元素
  animateOnScroll();
});
</script>
