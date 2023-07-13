import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,f as n,a as d}from"./app-6e366925.js";const s={},l=d(`<h1 id="包管理工具-vcpkg" tabindex="-1"><a class="header-anchor" href="#包管理工具-vcpkg" aria-hidden="true">#</a> 包管理工具 vcpkg</h1><h2 id="入门" tabindex="-1"><a class="header-anchor" href="#入门" aria-hidden="true">#</a> 入门</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 首先就是clone项目
git clone https://github.com/Microsoft/vcpkg.git

// 构建vcpkg
.\\vcpkg\\bootstrap-vcpkg.bat

// 集成到全局
vcpkg integrate install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装库" tabindex="-1"><a class="header-anchor" href="#安装库" aria-hidden="true">#</a> 安装库</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vcpkg install imgui
vcpkg isntall imgui:x64-windows
// 搜索库
vcpkg search imgui
// 删除一个已经安装的库
vcpkg remove imgui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看已安装的库" tabindex="-1"><a class="header-anchor" href="#查看已安装的库" aria-hidden="true">#</a> 查看已安装的库</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vcpkg list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="设置默认安装的库版本" tabindex="-1"><a class="header-anchor" href="#设置默认安装的库版本" aria-hidden="true">#</a> 设置默认安装的库版本</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 更改环境变量
VCPKG_DEFAULT_TRIPLET=x64-windows
// 添加path变量-vcpkg的目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function r(c,t){return i(),a("div",null,[n(`
 * @作者: 14770137
 * @Date: 2022-09-22 15:18:35
`),l])}const m=e(s,[["render",r],["__file","vcpkg.html.vue"]]);export{m as default};
