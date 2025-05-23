# 🛡️ 隐私与安全规范

::: warning
- 本程序使用了Better Stack进行错误监控，您的个人信息将被匿名处理。
- 为防止滥用和倒卖狗,我们不得不增加机器验证，以确保您的权益。
:::

## 隐私保护承诺

我们高度重视用户的隐私保护，承诺：

- **严格遵守法律法规**：在现有法律法规框架下收集和处理个人信息
- **最小化数据收集**：仅收集必要的机器验证信息
- **禁止商业用途**：不会将您的个人信息用于任何商业目的
- **禁止信息共享**：不会向任何第三方提供您的个人信息

### 第三方授权
本程序使用了以下第三方开源组件(使用本程序代表您同意以下协议)：
- Mixpanel组件,该组件仅用于统计数据，不收集您的任何个人信息。[Mixpanel隐私政策](https://mixpanel.com/legal/privacy-policy/)
- Better Stack组件,该组件仅用于收集错误日志报告。[Better Stac隐私政策](https://betterstack.com/security)



## 数据安全机制

### 🔐 端到端加密传输
- **HTTPS 强制加密通信** — 保障所有数据传输安全
- **PBKDF2 二次加密** — 敏感数据采用高强度加密算法
- **定期密钥轮换** — 每周自动更新加密密钥，提高安全性

### 🛡️ 隐私保护措施
- **自动清除日志** — 运行日志24小时后自动清除
- **数据定期销毁** — 错误监控数据7天后自动删除
- **最小数据采集** — 不采集屏幕内容和摄像头数据
- **用户数据控制** — 支持随时导出或删除个人数据

---

## 🔒 本地数据保障
- 所有凭证存储在本地，不会上传至第三方服务器
- 用户密码使用安全哈希存储，即使程序被破解也无法获取原始密码
- 配置文件使用权限控制，防止未授权访问

---

## 📜 授权与合规
更多详细内容请参阅：[完整隐私条款](/privacy/policy.md)