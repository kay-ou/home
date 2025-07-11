# K先生的世界 - 网站副本

这是 https://www.kayo.dpdns.org/ 的完整副本，包含所有页面、图片和功能。

## 网站结构

```
public/
├── index.html          # 主页
├── about.html          # 关于页面
├── style.css           # 样式文件
├── script.js           # JavaScript功能
└── images/             # 图片资源
    ├── raft-illustration.svg
    ├── wechat-pay.png
    ├── kofi-support.jpg
    ├── alipay.jpg
    ├── shape-010.svg
    └── shape-011.svg
```

## 功能特性

### 主页 (index.html)
- 响应式导航栏
- 英雄区域与号召行动按钮
- 三种打赏支持方式（微信、Ko-fi、支付宝）
- Discord加入链接
- 完整的页脚

### 关于页面 (about.html)
- **2列3行网格布局**: 文字和图片交替排列
  - 第1行: 睡前半小时文字 + 装饰图片
  - 第2行: 装饰图片 + 音乐电台文字
  - 第3行: SimTradeLab软件开发文字 + 软件开发装饰图
- **统一服务标题**: "Kay 提供的服务"移至CTA区域作为整体介绍
- **响应式设计**: 小屏幕自动切换为单列布局
- **视觉优化**: 文字区域添加背景色，图片居中对齐

### 联系功能
- Contact链接重定向到原网站 (https://www.kayo.dpdns.org/contact/)
- 保持原网站的联系功能完整性

## 技术特性

- **动态响应式布局**: 充分利用屏幕宽度
  - 大屏幕 (1000px+): 三列布局
  - 中屏幕 (700px-999px): 两列布局
  - 小屏幕 (600px以下): 单列布局
- **动态间距系统**: 使用CSS clamp()函数
  - 间距: `clamp(1.5rem, 4vw, 3rem)` - 根据视口宽度动态调整
  - 内边距: `clamp(15px, 3vw, 40px)` - 自适应容器内边距
  - 字体: `clamp(2rem, 5vw, 3.5rem)` - 流式字体缩放
- **智能图片缩放**:
  - 英雄图片: `clamp(300px, 60vw, 800px)` - 充分利用屏幕宽度
  - 支持卡片图片: `clamp(200px, 25vw, 320px)` - 动态适配
- **忠实原网站设计**:
  - 简洁白色背景
  - 大标题字体
  - 原网站配色方案
- **现代CSS技术**:
  - CSS Grid灵活布局
  - CSS clamp()动态计算
  - 视口单位(vw, vh)响应式设计
- **增强移动菜单**:
  - 汉堡菜单切换
  - 点击外部关闭
  - 防止背景滚动
- **性能优化**: 简化断点，动态计算
- **无障碍访问**: 语义化HTML和键盘导航

## 运行方法

1. 进入public文件夹
2. 启动本地服务器：
   ```bash
   python -m http.server 8000
   ```
3. 在浏览器中访问 http://localhost:8000

## 外部链接

所有原网站的外部链接都已保留：
- Ko-fi打赏: https://ko-fi.com/kayou
- Clubhouse睡前谈话: https://www.clubhouse.com/house/K%E5%85%88%E7%94%9F%E7%9A%84%E4%B8%96%E7%95%8C
- Clubhouse音乐电台: https://www.clubhouse.com/house/Kay%E5%8D%88%E5%A4%9C%E9%9F%B3%E4%B9%90%E7%94%B5%E5%8F%B0
- GitHub软件开发项目: https://github.com/kay-ou/SimTradeLab
- Discord: https://discord.gg/MUWCqsdaQ2

## 已复制的内容

✅ 完整的页面结构和内容
✅ 所有图片资源（SVG插图、支付二维码等）
✅ 响应式设计（2列3行网格布局）
✅ 导航功能（Contact重定向到原网站）
✅ Ko-fi浮动支持按钮
✅ 外部链接（Clubhouse、GitHub软件开发、Discord等）
✅ 简洁的视觉样式和布局
✅ 优化的内容描述（软件开发服务）
✅ 稳定的滚动表现

## 更新说明

### v3.6 - 内容优化版本（当前）
- **About页面内容调整**:
  - 将"开源软件"更改为"软件开发"，更准确描述服务内容
  - 优化图片alt属性为"软件开发装饰图"
  - 将"Kay 提供的服务"标题移至CTA区域，作为整体服务介绍
  - 简化CTA区域描述，移除冗余文字
- **About页面2列3行布局**:
  - 使用CSS Grid实现文字和图片的交替排列
  - 第1行: 睡前半小时文字 + 装饰图片
  - 第2行: 装饰图片 + 音乐电台文字
  - 第3行: SimTradeLab软件开发文字 + 软件开发装饰图
- **滚动稳定性修复**:
  - 修复最后一幅图不跟随页面滚动的问题
  - 移除冲突的CSS类名组合
  - 强制所有图片使用`position: static`
  - 添加`transform: none !important`防止意外变换
- **图片优化**:
  - 图片充分利用容器宽度和高度
  - 使用`object-fit: contain`保持比例
  - 移除视差效果防止滚动时位置错乱
- **布局稳定性**:
  - 固定网格行高`minmax(300px, auto)`
  - 确保所有容器使用`position: relative`
  - 文字区域添加浅色背景
- **响应式适配**: 768px以下自动切换为单列布局

### v3.2 - 动态布局版本
- **CSS clamp()动态计算**: 所有尺寸使用视口相对单位
- **简化断点系统**: 只使用3个关键断点
- **智能间距**: 间距随屏幕大小平滑变化，无突兀跳跃

### v3.0 - 优化版本
- **重新设计**: 更忠实地复制原网站外观
- **简化响应式**: 使用2个主要断点（768px, 480px）
- **优化字体**: 更大的标题字体，更好的可读性
- **改进布局**: 更宽松的间距，更接近原网站
- **性能提升**: 简化CSS代码，更快加载

### v2.0 - 全面响应式优化
- **完整响应式系统**: 添加7个断点覆盖所有设备尺寸
- **流式设计**: 使用CSS clamp()实现字体和间距的流式缩放
- **移动端优化**: 改进的汉堡菜单和触摸友好元素

### v1.0 - 基础功能
- **样式优化**: 调整为更接近原网站的简洁白色背景设计
- **布局改进**: 支持卡片采用垂直布局，更符合原网站结构
- **Contact重定向**: Contact链接现在直接跳转到原网站的联系页面
- **Ko-fi集成**: 添加了Ko-fi浮动支持按钮，与原网站一致

## 动态布局系统

| 屏幕宽度 | 布局方式 | 间距计算 | 图片尺寸 | 字体大小 |
|----------|----------|----------|----------|----------|
| 1000px+ | 三列网格 | 4vw (最大3rem) | 25vw (最大320px) | 5vw (最大3.5rem) |
| 700px-999px | 两列网格 | 4vw (1.5-3rem) | 25vw (200-320px) | 5vw (2-3.5rem) |
| 600px以下 | 单列 | 4vw (最小1.5rem) | 25vw (最小200px) | 5vw (最小2rem) |

### 动态特性
- **英雄图片**: `clamp(300px, 60vw, 800px)` - 占屏幕宽度60%
- **容器内边距**: `clamp(15px, 3vw, 40px)` - 根据屏幕宽度3%
- **卡片间距**: `clamp(1.5rem, 4vw, 3rem)` - 根据屏幕宽度4%
- **标题字体**: `clamp(2rem, 5vw, 3.5rem)` - 根据屏幕宽度5%

✅ 无断点跳跃，平滑过渡
✅ 充分利用屏幕宽度
✅ 所有元素动态缩放


## 功能特点  
- **响应式布局**：适配桌面、平板、手机等设备  
- **项目卡片**：展示项目名称、技术栈、简介及 GitHub 数据（Star/Fork/Watch）  
- **交互动效**：卡片悬停动画、导航下划线动效、GitHub 角落标志微动效  
- **快捷导航**：支持跳转到关于我、项目列表和联系方式  


## 技术栈  
- HTML5 + Tailwind CSS v2  
- Font Awesome 图标库  
- 原生 JavaScript 交互逻辑  


## 快速使用  
1. **获取代码**  
   ```bash
   git clone https://github.com/kay-ou/home.git
   ```

2. **本地预览**  
   直接在浏览器中打开 `index.html` 即可。  

3. **部署到 GitHub Pages**  
   - 推送代码到 GitHub 仓库的 `main` 分支  
   - 在仓库设置中启用 GitHub Pages，选择根目录作为源  


## 自定义指南  
### 1. 修改个人信息  
编辑 `index.html` 中 `#about` 部分，更新头像、姓名和简介：  
```html
<img src="你的头像链接" alt="头像">
<h1>你好，我是 kay-ou</h1>
<p>专注于软件开发和开源项目的爱好者...</p>
```

### 2. 更新项目卡片  
在 `#projects` 部分添加/修改 `.project-card` 区块：  
```html
<div class="project-card">
  <div class="p-6">
    <h3>项目名称</h3>
    <span>技术栈标签</span>
    <p>项目简介内容</p>
    <div>
      <i class="far fa-star"></i> Star数  
      <i class="fas fa-code-branch"></i> Fork数  
      <i class="far fa-eye"></i> Watch数  
    </div>
    <a href="项目GitHub链接">查看项目</a>
    <span>更新日期</span>
  </div>
</div>
```

### 3. 调整配色  
修改 `<style>` 中的 `:root` 变量：  
```css
:root {
  --github-bg: #f8f9fa;      /* 背景色 */
  --github-accent: #0366d6;  /* 蓝色强调色 */
}
```


## 目录结构  
```
.
├── index.html  # 主页HTML文件
└── README.md   # 说明文档
```


## 许可证  
[MIT 许可证](LICENSE)  


## 联系方式  
- GitHub：[https://github.com/kay-ou](https://github.com/kay-ou)  
- 邮箱：your-email@example.com
