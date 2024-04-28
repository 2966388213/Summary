import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,a as e}from"./app-d03b5bc4.js";const t={},c=e(`<h1 id="使用过程" tabindex="-1"><a class="header-anchor" href="#使用过程" aria-hidden="true">#</a> 使用过程</h1><h2 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装docker</h2><h3 id="使用apt安装" tabindex="-1"><a class="header-anchor" href="#使用apt安装" aria-hidden="true">#</a> 使用apt安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Add Docker&#39;s official GPG key:</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> ca-certificates <span class="token function">curl</span>
<span class="token function">sudo</span> <span class="token function">install</span> <span class="token parameter variable">-m</span> 0755 <span class="token parameter variable">-d</span> /etc/apt/keyrings
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://download.docker.com/linux/ubuntu/gpg <span class="token parameter variable">-o</span> /etc/apt/keyrings/docker.asc
<span class="token function">sudo</span> <span class="token function">chmod</span> a+r /etc/apt/keyrings/docker.asc

<span class="token comment"># Add the repository to Apt sources:</span>
<span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span>
  <span class="token string">&quot;deb [arch=<span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span> signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \\
  <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">.</span> /etc/os-release <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$VERSION_CODENAME</span>&quot;</span><span class="token variable">)</span></span> stable&quot;</span> <span class="token operator">|</span> <span class="token punctuation">\\</span>
  <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">&gt;</span> /dev/null
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装docker-1" tabindex="-1"><a class="header-anchor" href="#安装docker-1" aria-hidden="true">#</a> 安装docker</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),o=[c];function i(l,p){return a(),n("div",null,o)}const u=s(t,[["render",i],["__file","use.html.vue"]]);export{u as default};
