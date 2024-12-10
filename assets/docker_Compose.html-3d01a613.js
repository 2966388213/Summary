import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,a as l}from"./app-afef1db0.js";const a={},i=l(`<h1 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> docker-compose</h1><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h2><p>Docker Compose有一些常用的指令，以下是它们的简要说明：</p><ol><li><p><strong>build：</strong></p><ul><li>从Dockerfile构建或重新构建服务。</li><li>语法：<code>docker-compose build [options] [SERVICE...]</code></li></ul></li><li><p><strong>up：</strong></p><ul><li>启动并构建服务容器。</li><li>语法：<code>docker-compose up [options] [SERVICE...]</code></li></ul></li><li><p><strong>down：</strong></p><ul><li>停止并删除服务容器、网络、卷等。</li><li>语法：<code>docker-compose down [options]</code></li></ul></li><li><p><strong>start：</strong></p><ul><li>启动已创建的服务容器。</li><li>语法：<code>docker-compose start [SERVICE...]</code></li></ul></li><li><p><strong>stop：</strong></p><ul><li>停止已启动的服务容器。</li><li>语法：<code>docker-compose stop [SERVICE...]</code></li></ul></li><li><p><strong>restart：</strong></p><ul><li>重启已创建的服务容器。</li><li>语法：<code>docker-compose restart [SERVICE...]</code></li></ul></li><li><p><strong>exec：</strong></p><ul><li>在运行的容器中执行命令。</li><li>语法：<code>docker-compose exec [options] SERVICE COMMAND [ARGS...]</code></li></ul></li><li><p><strong>logs：</strong></p><ul><li>查看服务容器的日志输出。</li><li>语法：<code>docker-compose logs [options] [SERVICE...]</code></li></ul></li><li><p><strong>ps：</strong></p><ul><li>显示服务容器的状态。</li><li>语法：<code>docker-compose ps [options] [SERVICE...]</code></li></ul></li><li><p><strong>config：</strong></p><ul><li>校验并显示docker-compose.yml文件的配置。</li><li>语法：<code>docker-compose config [options]</code></li></ul></li></ol><p>这些指令是Docker Compose中常用的指令，可以用于管理和操作多个容器化的服务。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>docker-compose配置文件（通常是docker-compose.yaml或docker-compose.yml）包含许多属性，以下是一些常见的属性及其说明：</p><ol><li><p><strong>version：</strong></p><ul><li>定义docker-compose文件的版本。例如：<code>version: &#39;3.8&#39;</code></li></ul></li><li><p><strong>services：</strong></p><ul><li>定义各个服务及其配置。</li><li>每个服务可以包含诸如镜像、环境变量、端口映射等配置。</li><li>示例：<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>latest
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:80&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><strong>volumes：</strong></p><ul><li>定义数据卷的配置，用于持久化数据。</li><li>可以指定本地路径或远程路径作为卷的源。</li><li>示例：<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">data</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><strong>networks：</strong></p><ul><li>定义网络的配置，用于连接多个容器。</li><li>可以指定网络的名称、驱动程序等。</li><li>示例：<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">mynet</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><strong>environment：</strong></p><ul><li>定义环境变量，用于传递给容器内部的应用程序。</li><li>示例：<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">environment</span><span class="token punctuation">:</span>
  <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><strong>ports：</strong></p><ul><li>定义端口映射，将容器内部的端口映射到宿主机上的端口。</li><li>示例：<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;8080:80&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><strong>depends_on：</strong></p><ul><li>定义服务之间的依赖关系，确保一个服务在另一个服务启动后再启动。</li><li>示例：<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><strong>restart：</strong></p><ul><li>定义容器退出时的重启策略。</li><li>示例：<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">restart</span><span class="token punctuation">:</span> always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p><strong>command：</strong></p><ul><li>定义容器启动时执行的命令。</li><li>示例：<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;bundle&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;exec&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;thin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-p&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3000&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p><strong>build：</strong></p><ul><li>定义构建镜像时的参数，可以指定Dockerfile的位置、构建上下文等。</li><li>示例：<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">build</span><span class="token punctuation">:</span>
  <span class="token key atrule">context</span><span class="token punctuation">:</span> .
  <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><p>这些是docker-compose文件中常见的属性，用于定义和配置容器化的服务。</p>`,9),o=[i];function t(c,p){return n(),e("div",null,o)}const u=s(a,[["render",t],["__file","docker_Compose.html.vue"]]);export{u as default};