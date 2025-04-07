# 问题反馈与记录

::: tip
> 如需反馈，请优先提交[Issues](https://github.com/Hanzzkj652/CPPRush/issues)

> 若无法解决，请及时[联系我们](/other/contact-us.md)，我们会尽快解决。
:::

<div class="page-background">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div>

<div class="status-card">
  <h2>项目状态</h2>
  <div class="status-indicators">
    <div class="status-item">
      <div class="checkbox">
        <input type="checkbox" id="planning" disabled>
        <label for="planning">规划阶段</label>
      </div>
    </div>
    <div class="status-item">
      <div class="checkbox">
        <input type="checkbox" id="developing" disabled checked>
        <label for="developing">开发中</label>
      </div>
    </div>
    <div class="status-item">
      <div class="checkbox">
        <input type="checkbox" id="testing" disabled>
        <label for="testing">测试中</label>
      </div>
    </div>
    <div class="status-item">
      <div class="checkbox">
        <input type="checkbox" id="released" disabled>
        <label for="released">已发布</label>
      </div>
    </div>
  </div>
</div>

<div class="feedback-container">
  <div class="feedback-column positive">
    <h3>🌟 优势</h3>
    <ul class="feature-list">
      <li><span class="highlight">开发速度快</span></li>
      <li><span class="highlight">代码质量好</span></li>
      <li><span class="highlight">团队协作顺畅</span></li>
    </ul>
  </div>
  
  <div class="feedback-column negative">
    <h3>🔧 需改进方面</h3>
    <ul class="feature-list">
      <li><span class="highlight">BUG修复时间控制</span></li>
      <li><span class="highlight">代码注释完整性</span></li>
      <li><span class="highlight">测试覆盖率</span></li>
    </ul>
  </div>
</div>

## 时间线

<div class="timeline">
  <div class="timeline-item complete">
    <div class="timeline-date">2025-01-20</div>
    <div class="timeline-content">
      <h4>提交Issue模板</h4>
      <div class="status-badge complete">已完成</div>
    </div>
  </div>
  <div class="timeline-item in-progress">
    <div class="timeline-date">2025-01-21</div>
    <div class="timeline-content">
      <h4>BUG分类整理</h4>
      <div class="status-badge in-progress">进行中</div>
    </div>
  </div>
  <div class="timeline-item planned">
    <div class="timeline-date">2025-04-06</div>
    <div class="timeline-content">
      <h4>启动Issue周报</h4>
      <div class="status-badge planned">计划中</div>
    </div>
  </div>
</div>

## 记录

<div class="info-cards">
  <div class="info-card">
    <div class="info-icon">🔝</div>
    <div class="info-content">优先处理高优先级Issue</div>
  </div>
  <div class="info-card">
    <div class="info-icon">🔄</div>
    <div class="info-content">每周进行Issue更新维护</div>
  </div>
  <div class="info-card">
    <div class="info-icon">🗑️</div>
    <div class="info-content">定期清理过期Issue</div>
  </div>
</div>

## 待办事项

<div class="todo-list">
  <div class="todo-item">
    <input type="checkbox" id="todo1" disabled>
    <label for="todo1">完善Issue标签体系</label>
  </div>
  <div class="todo-item">
    <input type="checkbox" id="todo2" disabled>
    <label for="todo2">建立Issue响应机制</label>
  </div>
  <div class="todo-item">
    <input type="checkbox" id="todo3" disabled>
    <label for="todo3">制定Issue处理流程</label>
  </div>
</div>

## 下一步计划

<div class="steps">
  <div class="step">
    <div class="step-number">1</div>
    <div class="step-content">整理现有Issue清单</div>
  </div>
  <div class="step">
    <div class="step-number">2</div>
    <div class="step-content">分配Issue处理责任人</div>
  </div>
  <div class="step">
    <div class="step-number">3</div>
    <div class="step-content">建立Issue周报制度</div>
  </div>
</div>

<div class="update-footer">
  最后更新: <span class="update-date">2025-04-06</span>
</div>

<style>
/* 背景动画 */
.page-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  opacity: 0.3;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="%2342b883" fill-opacity="0.3" d="M0,192L60,202.7C120,213,240,235,360,224C480,213,600,171,720,170.7C840,171,960,213,1080,213.3C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>');
  background-size: 1440px 100px;
  animation: wave 10s linear infinite;
}

.wave:nth-child(2) {
  bottom: 10px;
  opacity: 0.5;
  animation: wave 8s linear infinite reverse;
}

.wave:nth-child(3) {
  bottom: 20px;
  opacity: 0.2;
  animation: wave 6s linear infinite;
}

@keyframes wave {
  0% { background-position-x: 0; }
  100% { background-position-x: 1440px; }
}

/* 状态卡片 */
.status-card {
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.status-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.status-indicators {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 15px;
}

.status-item {
  margin: 10px;
  text-align: center;
}

.checkbox {
  display: flex;
  align-items: center;
}

.checkbox input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 4px;
  margin-right: 8px;
  position: relative;
  transition: all 0.3s ease;
}

.checkbox input[type="checkbox"]:checked {
  background-color: var(--vp-c-brand-1);
}

.checkbox input[type="checkbox"]:checked::after {
  content: '✓';
  position: absolute;
  top: 0;
  left: 4px;
  color: white;
  font-size: 14px;
}

/* 反馈列表 */
.feedback-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
}

.feedback-column {
  flex: 1;
  min-width: 250px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.feedback-column:hover {
  transform: translateY(-5px);
}

.positive {
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.1), rgba(66, 184, 131, 0.2));
  border-left: 4px solid var(--vp-c-brand-1);
}

.negative {
  background: linear-gradient(135deg, rgba(237, 60, 80, 0.1), rgba(237, 60, 80, 0.2));
  border-left: 4px solid var(--vp-c-danger-1);
}

.feature-list {
  list-style-type: none;
  padding: 0;
}

.feature-list li {
  margin: 10px 0;
  position: relative;
  padding-left: 25px;
}

.feature-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  top: 0;
  font-size: 24px;
  color: var(--vp-c-brand-1);
}

.negative .feature-list li::before {
  color: var(--vp-c-danger-1);
}

.highlight {
  position: relative;
  z-index: 1;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: rgba(66, 184, 131, 0.3);
  z-index: -1;
  transition: height 0.3s ease;
}

.negative .highlight::after {
  background-color: rgba(237, 60, 80, 0.3);
}

.feature-list li:hover .highlight::after {
  height: 100%;
}

/* 时间线 */
.timeline {
  position: relative;
  margin: 20px 0;
  padding-left: 20px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background: var(--vp-c-divider);
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
  padding-left: 30px;
  transition: all 0.3s ease;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--vp-c-bg-soft);
  border: 2px solid var(--vp-c-divider);
  z-index: 1;
}

.timeline-item.complete::before {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.timeline-item.in-progress::before {
  background: #ffbd2e;
  border-color: #ffbd2e;
}

.timeline-date {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 5px;
}

.timeline-content {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.timeline-content h4 {
  margin: 0 0 10px 0;
}

.status-badge {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}

.status-badge.complete {
  background-color: rgba(66, 184, 131, 0.2);
  color: var(--vp-c-brand-1);
}

.status-badge.in-progress {
  background-color: rgba(255, 189, 46, 0.2);
  color: #d6a105;
}

.status-badge.planned {
  background-color: rgba(125, 125, 125, 0.2);
  color: var(--vp-c-text-2);
}

/* 信息卡片 */
.info-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 20px 0;
}

.info-card {
  display: flex;
  align-items: center;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 12px 15px;
  flex: 1;
  min-width: 200px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.info-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, var(--vp-c-bg-soft), rgba(66, 184, 131, 0.1));
}

.info-icon {
  margin-right: 10px;
  font-size: 1.2rem;
}

/* 待办事项 */
.todo-list {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}

.todo-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.todo-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.todo-item input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 4px;
  margin-right: 10px;
  position: relative;
}

.todo-item input[type="checkbox"]:checked {
  background-color: var(--vp-c-brand-1);
}

.todo-item input[type="checkbox"]:checked::after {
  content: '✓';
  position: absolute;
  top: 0;
  left: 4px;
  color: white;
  font-size: 14px;
}

.todo-item label {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* 步骤 */
.steps {
  margin: 20px 0;
}

.step {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.step-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.step-content {
  background: var(--vp-c-bg-soft);
  padding: 10px 15px;
  border-radius: 6px;
  flex-grow: 1;
  transition: all 0.3s ease;
}

.step:hover .step-content {
  transform: translateX(5px);
  background: linear-gradient(90deg, var(--vp-c-bg-soft), rgba(66, 184, 131, 0.1));
}

/* 更新日期 */
.update-footer {
  text-align: right;
  margin-top: 30px;
  font-style: italic;
  color: var(--vp-c-text-2);
}

.update-date {
  font-weight: bold;
  color: var(--vp-c-brand-1);
}
</style>