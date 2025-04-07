# 📥 安装说明

::: warning 免责声明
⚠️ 本项目仅用于学习和研究，不得用于商业用途。使用本工具产生的任何问题与作者无关。

⛔ 未经许可，请勿在各大社交平台媒体传播、倒卖或用于商业用途

🚫 **严禁任何人在官方和社团面前跳脸**，否则我们保留追究法律责任的权利。
:::

## 💻 系统要求

CPPRush支持以下操作系统：

| 操作系统 | 支持状态 | 备注 |
|----------|----------|------|
| Windows 10/11 | ✅ 完全支持 | 推荐使用 |
| Windows 8/8.1 | ✅ 支持 | 可能需要安装额外依赖 |
| Mac/Linux | ⚠️ 有限支持 | 需获得单独授权 |

## 📦 下载安装

<div class="steps-container">
  <div class="step-item active">
    <div class="step-number">1</div>
    <div class="step-title">选择安装方式</div>
  </div>
  <div class="step-item">
    <div class="step-number">2</div>
    <div class="step-title">下载或构建</div>
  </div>
  <div class="step-item">
    <div class="step-number">3</div>
    <div class="step-title">运行程序</div>
  </div>
  <div class="step-item">
    <div class="step-number">4</div>
    <div class="step-title">完成安装</div>
  </div>
</div>

### 方法一：直接下载可执行文件（推荐）

1. 从 [发布页面](https://github.com/Hanzzkj652/CPPRush/releases) 下载最新版本的`CPPRush.exe`
   > **💡 提示**：国内用户请使用 [飞牛云下载](https://ghproxy.com/)

2. 将下载的文件放置在任意位置(**建议优先放在非系统盘**)，并确保路径无中文字符

3. 双击运行即可使用，无需安装

### 方法二：从源码构建

如果你想从源码构建CPPRush，请按照以下步骤操作：

1. 克隆代码仓库
   ```bash
   git clone https://github.com/Hanzzkj652/CPPRush.git
   cd CPPRush
   ```

2. 安装依赖包
   ```bash
   pip install -r requirements.txt 
   ```

3. 运行项目
   ```bash
   python main.py
   ```

## ✅ 验证安装

安装完成后，双击运行`CPPRush.exe`，如果能看到以下界面，则表示安装成功：

<div class="terminal">
  <div class="terminal-header">
    <div class="terminal-button red"></div>
    <div class="terminal-button yellow"></div>
    <div class="terminal-button green"></div>
    <div class="terminal-title">CPPRush 控制台</div>
  </div>
  <div class="terminal-content">
    <p>👋 欢迎使用 CPP 抢票工具 ! 🤗🤗</p>
    <p>⚠️ 免责声明：本工具仅用于学习和研究，不得用于商业用途。使用本工具产生的任何问题与作者无关。</p>
    <p>&nbsp;</p>
    <p>请选择功能:</p>
    <p class="terminal-option selected">❯ 抢票</p>
    <p class="terminal-option">  配置管理</p>
    <p class="terminal-option">  查看订单</p>
    <p class="terminal-option">  登录管理</p>
    <p class="terminal-option">  退出程序</p>
  </div>
</div>

## ❓ 常见安装问题

<details class="custom-details">
  <summary>1. 程序无法启动</summary>
  <div class="details-content">
    确保你的Windows系统已安装最新的更新，特别是.NET Framework和Visual C++ Redistributable包。
    <br><br>
    可尝试以管理员身份运行程序。
  </div>
</details>

<details class="custom-details">
  <summary>2. 被杀毒软件拦截</summary>
  <div class="details-content">
    CPPRush是完全安全的，但由于其自动化特性，可能被某些杀毒软件误报。请将程序添加到杀毒软件的白名单中。
  </div>
</details>

<details class="custom-details">
  <summary>3. 权限不足</summary>
  <div class="details-content">
    在某些环境下，可能需要管理员权限才能正常运行。请右键点击程序，选择"以管理员身份运行"。
  </div>
</details>

<details class="custom-details">
  <summary>4. 依赖缺失</summary>
  <div class="details-content">
    如果从源码运行时遇到依赖问题，请确保所有依赖都已正确安装：
    <pre><code>pip install -r requirements.txt --upgrade</code></pre>
  </div>
</details>

<details class="custom-details">
  <summary>5. 网络问题</summary>
  <div class="details-content">
    程序需要访问互联网，请确保你的网络连接正常，并且可以访问AllCPP网站。
  </div>
</details>

---

<div class="download-cta">
  <h2>🚀 立即开始使用 CPPRush!</h2>
  <a href="https://github.com/Hanzzkj652/CPPRush/releases" class="download-button">
    <span class="download-icon">⬇️</span>
    <span class="download-text">下载最新版本</span>
  </a>
</div>

<style>
/* 步骤指示器样式 */
.steps-container {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  position: relative;
}

.steps-container::before {
  content: '';
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 2px;
  background: #e0e0e0;
  z-index: 1;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  flex: 1;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
  margin-bottom: 8px;
  transition: all 0.5s ease;
}

.step-title {
  font-size: 0.9rem;
  text-align: center;
  transition: all 0.5s ease;
}

.step-item.active .step-number,
.step-item.complete .step-number {
  background-color: var(--vp-c-brand-1);
  animation: pulse 1.5s infinite;
}

.step-item.complete .step-number {
  animation: none;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(66, 184, 131, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(66, 184, 131, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(66, 184, 131, 0);
  }
}

/* 终端样式 */
.terminal {
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  background: #2d2d2d;
  font-family: 'Courier New', monospace;
}

.terminal-header {
  background: #383838;
  padding: 10px;
  display: flex;
  align-items: center;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
}

.terminal-button.red { background: #ff5f56; }
.terminal-button.yellow { background: #ffbd2e; }
.terminal-button.green { background: #27c93f; }

.terminal-title {
  margin-left: 10px;
  font-size: 0.9rem;
  color: #ddd;
}

.terminal-content {
  padding: 15px;
  color: #f8f8f8;
  line-height: 1.5;
}

.terminal-option {
  margin: 5px 0;
  white-space: pre;
}

.terminal-option.selected {
  color: #42b883;
  animation: blink 1s infinite;
}

@keyframes blink {
  50% { color: #ffffff; }
}

/* FAQ 样式，使用HTML原生details/summary */
.custom-details {
  margin-bottom: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.custom-details summary {
  padding: 15px;
  background-color: var(--vp-c-bg-soft);
  font-weight: bold;
  cursor: pointer;
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
}

.custom-details summary::-webkit-details-marker {
  display: none;
}

.custom-details summary::before {
  content: '+';
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  text-align: center;
  line-height: 20px;
  background-color: var(--vp-c-brand-1);
  color: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.custom-details[open] summary::before {
  content: '+';
  transform: rotate(45deg);
}

.details-content {
  padding: 15px;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 下载按钮样式 */
.download-cta {
  text-align: center;
  padding: 2rem;
  margin: 2rem 0;
  background: linear-gradient(120deg, rgba(66, 184, 131, 0.1), rgba(62, 175, 124, 0.1));
  border-radius: 10px;
  animation: fadeInUp 1s ease;
}

.download-button {
  display: inline-flex;
  align-items: center;
  background: var(--vp-c-brand-3);
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s;
  margin-top: 1rem;
  overflow: hidden;
  position: relative;
}

.download-icon {
  margin-right: 10px;
  transition: transform 0.5s ease;
}

.download-button:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-3px);
  box-shadow: 0 7px 20px rgba(0,0,0,0.2);
}

.download-button:hover .download-icon {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.download-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: 0.5s;
}

.download-button:hover::after {
  left: 100%;
}

/* 通用动画 */
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
</style>

<script setup>
// VitePress中脚本需要使用<script setup>标签
// 不需要额外的JavaScript来控制details元素，因为它们是原生HTML元素
</script>
