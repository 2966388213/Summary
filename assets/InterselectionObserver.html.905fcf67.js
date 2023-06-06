import{_ as n,o as s,c as a,e as t}from"./app.8d6eb341.js";const e={},p=t(`<h1 id="intersectionobserver" tabindex="-1"><a class="header-anchor" href="#intersectionobserver" aria-hidden="true">#</a> IntersectionObserver</h1><h2 id="封装vue3指令" tabindex="-1"><a class="header-anchor" href="#封装vue3指令" aria-hidden="true">#</a> 封装vue3指令</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> directiveName <span class="token operator">=</span> <span class="token string">&quot;intersection&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> IntersectionDirective <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> threshold <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> enter <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> leave <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">}</span> <span class="token operator">=</span> binding<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token keyword">const</span> Ob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>entries<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span><span class="token punctuation">{</span>
                enter <span class="token operator">&amp;&amp;</span> <span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                leave <span class="token operator">&amp;&amp;</span> <span class="token function">leave</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
            <span class="token literal-property property">threshold</span><span class="token operator">:</span> threshold
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Ob<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
        el<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>observer <span class="token operator">=</span> Ob<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">unmounted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> Ob <span class="token operator">=</span> el<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>observer<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Ob<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            Ob<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">delete</span> el<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>observer<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span> <span class="token operator">:</span> directiveName<span class="token punctuation">,</span>
    <span class="token literal-property property">directive</span> <span class="token operator">:</span> IntersectionDirective
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","InterselectionObserver.html.vue"]]);export{r as default};
