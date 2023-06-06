import{_ as n,o as s,c as a,f as t,e}from"./app.8d6eb341.js";const p={},o=e(`<h1 id="可为空类型" tabindex="-1"><a class="header-anchor" href="#可为空类型" aria-hidden="true">#</a> 可为空类型</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span> <span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> val <span class="token operator">||</span> <span class="token string">&quot;value is null&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 可选参数，或者可选类型 这里的？指的是这个参数可选</span>
<span class="token doc-comment comment">/** 如果此参数留空 值为undefined而不是null */</span>
<span class="token keyword">function</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token operator">?</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> val <span class="token operator">||</span> <span class="token string">&quot;value is null&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// console.log(test(undefined)); error</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK , value is undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="操作符" tabindex="-1"><a class="header-anchor" href="#操作符" aria-hidden="true">#</a> ! 操作符</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 非空断言符 ！ 可空断言符？</span>
<span class="token comment">// 如果确定值不等于空，可以使用非空断言符去除null undefined</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span> <span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">postfix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 这时候就会报错，所以就要用！</span>
        <span class="token comment">// return val.length; error</span>
        <span class="token keyword">return</span> val<span class="token operator">!</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    val <span class="token operator">=</span> val <span class="token operator">||</span> <span class="token string">&#39;值为空&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">postfix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;1234&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output 4</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function c(l,i){return s(),a("div",null,[t(`
 * @作者: 14770137
 * @Date: 2022-10-12 16:42:15
`),o])}const r=n(p,[["render",c],["__file","identifier.html.vue"]]);export{r as default};
