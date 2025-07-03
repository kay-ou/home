# kay 的 GitHub 项目展示主页  

## 项目简介  
这是 kay 的 GitHub 首页项目，用于集中展示与维护个人开源工作、实验性工具、项目链接和推荐资源。它既是导航站，也是技术旅程的起点。  


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
