import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-afef1db0.js";const p={},e=t(`<h1 id="razor和abp的使用" tabindex="-1"><a class="header-anchor" href="#razor和abp的使用" aria-hidden="true">#</a> razor和abp的使用</h1><h2 id="razor目录结构" tabindex="-1"><a class="header-anchor" href="#razor目录结构" aria-hidden="true">#</a> razor目录结构</h2><ul><li>wwwroot <ul><li>css</li><li>js</li><li>images</li></ul></li><li>Views <ul><li>Main <ul><li>index.cshtml</li></ul></li><li>Shared <ul><li>_Layout.cshtml</li><li>Components</li><li>Nav <ul><li>Default.cshtml</li><li>NavViewComponent.cs</li></ul></li></ul></li><li>_ViewImports.cshtml</li></ul></li></ul><h3 id="viewimports-cshtml" tabindex="-1"><a class="header-anchor" href="#viewimports-cshtml" aria-hidden="true">#</a> _ViewImports.cshtml</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>  <span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-cn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fontawesome/css/fontawesome.min.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fontawesome/css/brands.min.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fontawesome/css/solid.min.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
      @await Component.InvokeAsync(&quot;Nav&quot;);
      @RenderBody()
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js/tailwindcss_3_4_3.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="index-cshtml" tabindex="-1"><a class="header-anchor" href="#index-cshtml" aria-hidden="true">#</a> index.cshtml</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>    @page 
    @{
        Layout = &quot;_Layout&quot;;
    }

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>razor 页面暂未更新.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nav-组件" tabindex="-1"><a class="header-anchor" href="#nav-组件" aria-hidden="true">#</a> Nav 组件</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>NavContainer <span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    hello nav

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>AspNetCore<span class="token punctuation">.</span>Mvc</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token namespace">MoqSystem<span class="token punctuation">.</span>Api<span class="token punctuation">.</span>Host<span class="token punctuation">.</span>Views<span class="token punctuation">.</span>Shared<span class="token punctuation">.</span>Components<span class="token punctuation">.</span>Nav</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ViewComponent</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NavViewComponent</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ViewComponent</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span>IViewComponentResult<span class="token punctuation">&gt;</span></span> <span class="token function">InvokeAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">View</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="abp-控制器" tabindex="-1"><a class="header-anchor" href="#abp-控制器" aria-hidden="true">#</a> abp 控制器</h2><p>需要添加AllowAnonymous和ApiExplorerSettings特性，否则无法使用。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Volo<span class="token punctuation">.</span>Abp<span class="token punctuation">.</span>Application<span class="token punctuation">.</span>Services</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Volo<span class="token punctuation">.</span>Abp<span class="token punctuation">.</span>AspNetCore<span class="token punctuation">.</span>Mvc</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token namespace">MoqSystem<span class="token punctuation">.</span>Application<span class="token punctuation">.</span>Main<span class="token punctuation">.</span>MainControllers</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 接口服务</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token punctuation">[</span>AllowAnonymous<span class="token punctuation">]</span>
    <span class="token comment">//[Route(&quot;/&quot;)]</span>
    <span class="token punctuation">[</span><span class="token function">ApiExplorerSettings</span><span class="token punctuation">(</span>IgnoreApi <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainController</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> AbpController
    <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token doc-comment comment">/// 测试接口</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>returns</span><span class="token punctuation">&gt;</span></span>测试数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>returns</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">getTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;测试数据&quot;</span><span class="token punctuation">;</span>

        <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpGet</span></span><span class="token punctuation">]</span>
        <span class="token keyword">public</span> <span class="token return-type class-name">IActionResult</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>

            <span class="token keyword">return</span> <span class="token function">View</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[e];function l(o,i){return s(),a("div",null,c)}const r=n(p,[["render",l],["__file","razor_abp.html.vue"]]);export{r as default};