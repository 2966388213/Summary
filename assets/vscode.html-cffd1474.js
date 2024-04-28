import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as d,d as e,e as n,b as c,a}from"./app-d03b5bc4.js";const o="/image/jsonc.png",r={},u=a(`<h1 id="uni-app-在vscode使用" tabindex="-1"><a class="header-anchor" href="#uni-app-在vscode使用" aria-hidden="true">#</a> uni-app 在vscode使用</h1><h2 id="cli工程" tabindex="-1"><a class="header-anchor" href="#cli工程" aria-hidden="true">#</a> CLI工程</h2><blockquote><p>全局安装 vue-cli 3.x</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>通过CLI创建<code>uni-app</code>项目 vue 2.0</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vue create <span class="token parameter variable">-p</span> dcloudio/uni-preset-vue my-project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>vue 3.0</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx degit dcloudio/uni-preset-vue<span class="token comment">#vite my-vue3-project</span>

npx degit dcloudio/uni-preset-vue<span class="token comment">#vite-ts my-vue3-project</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行、发布uni-app" tabindex="-1"><a class="header-anchor" href="#运行、发布uni-app" aria-hidden="true">#</a> 运行、发布uni-app</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev:%PLATFORM%
<span class="token function">npm</span> run build:%PLATFORM%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=e("thead",null,[e("tr",null,[e("th",null,"value"),e("th",null,"平台")])],-1),h=e("tr",null,[e("td",null,"app-plus"),e("td",null,"app平台")],-1),v=e("tr",null,[e("td",null,"h5"),e("td",null,"h5")],-1),m=e("tr",null,[e("td",null,"mp-alipay"),e("td",null,"支付宝")],-1),b=e("tr",null,[e("td",null,"mp-baidu"),e("td",null,"百度小程序")],-1),_=e("tr",null,[e("td",null,"mp-weixin"),e("td",null,"微信小程序")],-1),g=e("tr",null,[e("td",null,"mp-qq"),e("td",null,"qq小程序")],-1),k=e("td",null,"其他",-1),f={href:"https://uniapp.dcloud.net.cn/quickstart-cli.html",target:"_blank",rel:"noopener noreferrer"},x=a(`<h2 id="安装组件语法提示" tabindex="-1"><a class="header-anchor" href="#安装组件语法提示" aria-hidden="true">#</a> 安装组件语法提示</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i @types/uni-app @types/html5plus <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="uni-app-不支持注释" tabindex="-1"><a class="header-anchor" href="#uni-app-不支持注释" aria-hidden="true">#</a> uni-app 不支持注释</h2><blockquote><p>更改json的语言模式，改为jsonc就能支持了 <img src="`+o+'" alt="jsonc" loading="lazy"></p></blockquote>',4);function q(y,j){const s=t("ExternalLinkIcon");return i(),d("div",null,[u,e("table",null,[p,e("tbody",null,[h,v,m,b,_,g,e("tr",null,[k,e("td",null,[n("see "),e("a",f,[n("官网"),c(s)])])])])]),x])}const N=l(r,[["render",q],["__file","vscode.html.vue"]]);export{N as default};