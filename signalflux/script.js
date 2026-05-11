// i18n translations
const translations = {
  zh: {
    'doc.title': 'DeepEar ｜ 顺风耳 - 将舆情变成可操作的投资逻辑链',
    'nav.about': '关于',
    'nav.features': '核心特性',
    'nav.architecture': '架构说明',
    'nav.quickstart': '快速开始',
    'nav.github': 'GitHub',
    'hero.badge': '🚀 现已开源 · MIT License',
    'hero.title': 'DeepEar ｜ 顺风耳',
    'hero.subtitle': '将碎片化的社会舆情与新闻转化为<b>结构化的投资逻辑链</b>。<br/>一个面向金融分析师与量化研究员的开源深度研究与多智能体框架。',
    'hero.btn1': '获取源码',
    'hero.btn2': '在线仪表盘演示',
    'hero.btn3': '查看示例',
    'about.title': '为什么选择 DeepEar？',
    'about.subtitle': '弥合非结构化信息与可执行交易信号之间的鸿沟',
    'about.card1.title': '投资研究增强',
    'about.card1.desc': '自动化收集并分析社交媒体与新闻中的碎片化信息，发掘隐藏的投资机会与逻辑。',
    'about.card2.title': '市场实时监控',
    'about.card2.desc': '实时追踪“热门话题”与事件（如政策转变、行业突破），识别其对特定板块或个股的影响。',
    'about.card3.title': '量化因子转化',
    'about.card3.desc': '将定性新闻转化为量化的情绪得分与信号指标，适用于回测或直接作为模型输入。',
    'features.title': '核心特性',
    'features.subtitle': '为 AI 与金融打造的下一代工具链',
    'features.f1.title': '多智能体协作 (Multi-Agent)',
    'features.f1.desc': '包含专业的 Trend Spotting（趋势）、Financial Analysis（金融验证）、Report Writing（研报）等智能体组成的协同网络。',
    'features.f2.title': 'Agent Skill 随时接入',
    'features.f2.desc': '作为即插即用的 Skill 支持 Antigravity, OpenCode 等平台，化身任何 Chat 助手的专职金融研究员。',
    'features.f3.title': '交互式金融看板',
    'features.f3.desc': '提供现代化的 React UI (Dashboard)，实现透明化的 Agent 工作流追踪与逻辑推演监控。',
    'features.f4.title': '混合检索引擎与全景数据',
    'features.f4.desc': '结合 BM25（关键词）与向量搜索进行精确检索。原生支持 15+ 数据源接入（微博、财联社、华尔街见闻等）。',
    'features.f5.title': '新闻感知时间序列模型',
    'features.f5.desc': '通过自定义 Kronos 集成与新闻投影层（News-Aware Projection），预测基于新闻事件冲击的价格变动。',
    'arch.title': '架构蓝图',
    'arch.subtitle': '解耦设计：工具层、智能体层与控制流',
    'arch.layer1.title': '工作流层 Workflow',
    'arch.layer1.desc': '<code>main_flow.py</code>: 统筹全局状态与执行路径，支持断点配置（Checkpoint) 与恢复。',
    'arch.layer2.title': '智能体层 Agents',
    'arch.layer2.desc': '<code>TrendAgent</code> (热点与事件) / <code>FinAgent</code> (金融逻辑验证与传导) <br/> <code>ForecastAgent</code> (时序预测) / <code>ReportAgent</code> (Map-Reduce专业研报)',
    'arch.layer3.title': '基建与工具 Infra & Tools',
    'arch.layer3.desc': 'Toolkits (新闻、持仓、向量检索) / SQLite & Vector DB 存储',
    'quickstart.title': '快速开始',
    'quickstart.subtitle': '只需几行命令，即可在本地运行强大的 DeepEar 框架',
    'footer.brand': 'DeepEar ｜ 顺风耳',
    'footer.desc': '香港科技大学 (HKUST) 团队及相关开发者开源',
    'footer.link1': '源码 (GitHub)',
    'footer.link2': '在线体验',
    'footer.link3': 'Awesome Finance Skills',
    'footer.copyright': '© 2026 DeepEar. Released under the MIT License.',
    'quickstart.code': [
      '# 1. 克隆仓库',
      'git clone https://github.com/HKUSTDial/DeepEar.git',
      'cd DeepEar',
      '',
      '# 2. 安装依赖 (使用 uv 包管理器)',
      'uv sync',
      '',
      '# 3. 环境变量配置',
      'cp .env.example .env',
      '# 编辑 .env，填入 LLM 配置 (支持 OpenAI, Kimi, DeepSeek 等)',
      '',
      '# 4. 启动仪表盘看板',
      'uv run python -m dashboard.server'
    ]
  },
  en: {
    'doc.title': 'DeepEar - Transform public opinion into investment logic',
    'nav.about': 'About',
    'nav.features': 'Features',
    'nav.architecture': 'Architecture',
    'nav.quickstart': 'Quick Start',
    'nav.github': 'GitHub',
    'hero.badge': '🚀 Open Source · MIT License',
    'hero.title': 'DeepEar',
    'hero.subtitle': 'Transform fragmented public opinion and news into <b>structured investment logic chains</b>.<br/>An open-source deep research and multi-agent framework for financial analysts and quantitative researchers.',
    'hero.btn1': 'Get Source Code',
    'hero.btn2': 'Dashboard Demo',
    'hero.btn3': 'View Examples',
    'about.title': 'Why Choose DeepEar?',
    'about.subtitle': 'Bridge unstructured information and actionable trading signals',
    'about.card1.title': 'Investment Research Enhancement',
    'about.card1.desc': 'Automate collection and analysis of fragmented information from social media and news to discover hidden investment opportunities.',
    'about.card2.title': 'Real-time Market Monitoring',
    'about.card2.desc': 'Track trending topics and events in real-time to identify their impact on specific sectors or stocks.',
    'about.card3.title': 'Quantitative Factor Conversion',
    'about.card3.desc': 'Convert qualitative news into quantitative sentiment scores for backtesting or direct model input.',
    'features.title': 'Core Features',
    'features.subtitle': 'Next-generation toolkit for AI and finance',
    'features.f1.title': 'Multi-Agent Collaboration',
    'features.f1.desc': 'Specialized agents for Trend Spotting, Financial Analysis, and Report Writing working in concert.',
    'features.f2.title': 'Agent Skill Ready',
    'features.f2.desc': 'Plug-and-play skill for AI agents (Antigravity, OpenCode), turning any chat assistant into a financial researcher.',
    'features.f3.title': 'Interactive Finance Dashboard',
    'features.f3.desc': 'Modern React-based UI for real-time monitoring of agent workflows and structured results.',
    'features.f4.title': 'Hybrid Retrieval & 15+ Data Sources',
    'features.f4.desc': 'Combines BM25 and vector search with comprehensive coverage of Weibo, Cailian Press, Wall Street News, and more.',
    'features.f5.title': 'News-Aware Time-Series Model',
    'features.f5.desc': 'Custom Kronos integration with news-projection layer for predicting price shocks from news events.',
    'arch.title': 'Architecture Blueprint',
    'arch.subtitle': 'Decoupled design: infra layer, agent layer, and workflow control',
    'arch.layer1.title': 'Workflow Layer',
    'arch.layer1.desc': '<code>main_flow.py</code>: Orchestrates global state and execution path, supporting checkpoints and resume.',
    'arch.layer2.title': 'Agent Layer',
    'arch.layer2.desc': '<code>TrendAgent</code> (trends & events) / <code>FinAgent</code> (financial validation & transmission) <br/> <code>ForecastAgent</code> (forecasting) / <code>ReportAgent</code> (professional reports)',
    'arch.layer3.title': 'Infrastructure & Tools',
    'arch.layer3.desc': 'Toolkits (news, stocks, vector search) / SQLite & Vector DB storage',
    'quickstart.title': 'Quick Start',
    'quickstart.subtitle': 'Run powerful DeepEar framework locally in just a few commands',
    'footer.brand': 'DeepEar',
    'footer.desc': 'Open source by HKUST and contributors',
    'footer.link1': 'Source Code (GitHub)',
    'footer.link2': 'Online Experience',
    'footer.link3': 'Awesome Finance Skills',
    'footer.copyright': '© 2026 DeepEar. Released under the MIT License.',
    'quickstart.code': [
      '# 1. Clone repository',
      'git clone https://github.com/HKUSTDial/DeepEar.git',
      'cd DeepEar',
      '',
      '# 2. Install dependencies (using uv package manager)',
      'uv sync',
      '',
      '# 3. Environment configuration',
      'cp .env.example .env',
      '# Edit .env and add your LLM config (supports OpenAI, Kimi, DeepSeek, etc.)',
      '',
      '# 4. Start the dashboard',
      'uv run python -m dashboard.server'
    ]
  }
};

let currentLang = localStorage.getItem('lang') || 'zh';

function t(key) {
  return translations[currentLang]?.[key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  updatePageContent();
  updateLanguageButton();
}

function updatePageContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (el.getAttribute('data-html') === 'true') {
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  });

  const codeBlock = document.getElementById('quickstart-code');
  if (codeBlock) {
    const lines = t('quickstart.code');
    codeBlock.textContent = Array.isArray(lines) ? lines.join('\n') : lines;
  }

  document.title = t('doc.title');
}

function updateLanguageButton() {
  const btns = document.querySelectorAll('.lang-btn');
  btns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  updatePageContent();
  updateLanguageButton();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      setLanguage(this.getAttribute('data-lang'));
    });
  });
});

// Mobile navigation toggle
document.getElementById('navToggle').addEventListener('click', function() {
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('show');
});

// Close menu when a link is clicked
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', function() {
    document.getElementById('mainNav').classList.remove('show');
  });
});
