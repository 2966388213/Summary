import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as p}from"./app-afef1db0.js";const t={},o=p(`<h1 id="lambda表达式" tabindex="-1"><a class="header-anchor" href="#lambda表达式" aria-hidden="true">#</a> lambda表达式</h1><h2 id="仿函数" tabindex="-1"><a class="header-anchor" href="#仿函数" aria-hidden="true">#</a> 仿函数</h2><blockquote><p>在lambda还未出现的时候是以operator实现相同效果的</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">RecallFunc</span> 
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">// explicit 隐式调用构造函数</span>
    <span class="token keyword">explicit</span> <span class="token function">RecallFunc</span><span class="token punctuation">(</span>string name<span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">name</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 重载operator构造函数方法</span>
    string <span class="token keyword">operator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>string name<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> name <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    string name<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// use</span>
 <span class="token keyword">auto</span> result <span class="token operator">=</span> <span class="token function">RecallFunc</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token function">result</span><span class="token punctuation">(</span><span class="token string">&quot;World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出Hello world</span>

cout <span class="token operator">&lt;&lt;</span> <span class="token function">RecallFunc</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;World&quot;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token comment">// Hello World</span>
<span class="token comment">// World</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用仿函数做到跟lambda一样的效果" tabindex="-1"><a class="header-anchor" href="#使用仿函数做到跟lambda一样的效果" aria-hidden="true">#</a> 使用仿函数做到跟lambda一样的效果</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">RecallFunc</span> 
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">explicit</span> <span class="token function">RecallFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    string <span class="token keyword">operator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>string name<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    string name<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span>function<span class="token operator">&lt;</span><span class="token function">string</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token operator">&gt;</span> func<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">auto</span> RecallFunc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span>string name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>   
    <span class="token comment">// lambda</span>
    <span class="token function">test</span><span class="token punctuation">(</span>recallFunc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 仿函数</span>
    <span class="token keyword">auto</span> recall <span class="token operator">=</span> <span class="token function">RecallFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">test</span><span class="token punctuation">(</span>recall<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">auto</span> f <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">int</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span> <span class="token comment">// 2</span>

<span class="token comment">// 可以省略返回值类型</span>
<span class="token keyword">auto</span> f2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> a<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>

<span class="token comment">// 另外当lambda表达式没有参数时，参数列表可以省略</span>
<span class="token keyword">auto</span> f3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token string">&quot;456&quot;</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">auto</span> f4 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用lambda表达式捕获列表" tabindex="-1"><a class="header-anchor" href="#使用lambda表达式捕获列表" aria-hidden="true">#</a> 使用lambda表达式捕获列表</h2><table><thead><tr><th>范围</th><th>说明</th></tr></thead><tbody><tr><td>[]</td><td>不捕获任何变量</td></tr><tr><td>[&amp;]</td><td>捕获外部作用域中的所有变量,并作为引用在函数体中使用（按引用捕获）</td></tr><tr><td>[=]</td><td>捕获外部作用域中的所有变量,并作为副本在函数体中使用（按值捕获）</td></tr><tr><td>[=,&amp;变量]</td><td>按值捕获外部作用域中所有变量，并按引用捕获变量</td></tr><tr><td>[变量]</td><td>按值捕获变量，同时不捕获其他变量</td></tr><tr><td>[this]</td><td>捕获当前类中的this指针,让lambda表达式拥有当前类成员函数相同的访问权限。如果已经使用了 &amp; 或者 =，就默认添加此选项。捕获 this 的目的是可以在 lamda 中使用当前类的成员函数和成员变量。</td></tr></tbody></table><h2 id="基本用法-1" tabindex="-1"><a class="header-anchor" href="#基本用法-1" aria-hidden="true">#</a> 基本用法</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">A</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> i_ <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">auto</span> x1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token keyword">return</span> i_<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>                    <span class="token comment">// error，没有捕获外部变量</span>
        <span class="token keyword">auto</span> x2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token keyword">return</span> i_ <span class="token operator">+</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>           <span class="token comment">// OK，捕获所有外部变量</span>
        <span class="token keyword">auto</span> x3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token keyword">return</span> i_ <span class="token operator">+</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>           <span class="token comment">// OK，捕获所有外部变量</span>
        <span class="token keyword">auto</span> x4 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token keyword">return</span> i_<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>                <span class="token comment">// OK，捕获this指针</span>
        <span class="token keyword">auto</span> x5 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token keyword">return</span> i_ <span class="token operator">+</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>        <span class="token comment">// error，没有捕获x、y</span>
        <span class="token keyword">auto</span> x6 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token keyword">return</span> i_ <span class="token operator">+</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// OK，捕获this指针、x、y</span>
        <span class="token keyword">auto</span> x7 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token keyword">return</span> i_<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>              <span class="token comment">// OK，捕获this指针，并修改成员的值</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">auto</span> f1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token keyword">return</span> a<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>               <span class="token comment">// error，没有捕获外部变量</span>
<span class="token keyword">auto</span> f2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token keyword">return</span> a<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>            <span class="token comment">// OK，捕获所有外部变量，并对a执行自加运算</span>
<span class="token keyword">auto</span> f3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token keyword">return</span> a<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>              <span class="token comment">// OK，捕获所有外部变量，并返回a</span>
<span class="token keyword">auto</span> f4 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token keyword">return</span> a<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>            <span class="token comment">// error，a是以复制方式捕获的，无法修改</span>
<span class="token keyword">auto</span> f5 <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>          <span class="token comment">// error，没有捕获变量b</span>
<span class="token keyword">auto</span> f6 <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token keyword">return</span> a <span class="token operator">+</span> <span class="token punctuation">(</span>b<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// OK，捕获a和b的引用，并对b做自加运算</span>
<span class="token keyword">auto</span> f7 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token keyword">return</span> a <span class="token operator">+</span> <span class="token punctuation">(</span>b<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// OK，捕获所有外部变量和b的引用，并对b做自加运算</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>需要注意的是lambda表达式无法修改通过复制方式捕获的外部变量.如果希望修改这些变量的话，我们需要使用引用的方式进行捕获</p></blockquote><h3 id="一个错误的细节" tabindex="-1"><a class="header-anchor" href="#一个错误的细节" aria-hidden="true">#</a> 一个错误的细节</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">auto</span> f <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token keyword">return</span> a<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>      <span class="token comment">// 按值捕获外部变量</span>
a <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>                         <span class="token comment">// a被修改了</span>
std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>  <span class="token comment">// 输出1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在捕获变量的一瞬间，a的值就已经被复制到f中了。之后a被修改，但此时f中存储的a仍然还是捕获时的值，因此，最终输出的结果是0.</p></blockquote><blockquote><p>如果非要修改按值捕获的变量可以使用mutable</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">auto</span> f1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token keyword">return</span> a<span class="token operator">++</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// error</span>
<span class="token comment">// 需要注意的是被mutable修饰的lambda就算没有参数也要写明参数列表</span>
<span class="token keyword">auto</span> f2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">mutable</span> <span class="token punctuation">{</span><span class="token keyword">return</span> a<span class="token operator">++</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lambda表达式的类型" tabindex="-1"><a class="header-anchor" href="#lambda表达式的类型" aria-hidden="true">#</a> lambda表达式的类型</h2><blockquote><p>lambda的类型在c++中被称为“闭包类型（closure type）”。他是一个特殊的，匿名的非nunion的类类型。</p></blockquote><blockquote><p>因此，我们可以认为它是一个带有 operator() 的类，即仿函数。因此，我们可以使用 std::function 和 std::bind 来存储和操作 lambda 表达式：</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>std<span class="token double-colon punctuation">::</span>function<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> f1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> a<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 返回值为int参数为void，使用bind绑定参数</span>
std<span class="token double-colon punctuation">::</span>function<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> f2 <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> a<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="没有捕获变量的lambda表达式可以直接转换为函数指针-而捕获变量的lambda则不能转换为函数指针" tabindex="-1"><a class="header-anchor" href="#没有捕获变量的lambda表达式可以直接转换为函数指针-而捕获变量的lambda则不能转换为函数指针" aria-hidden="true">#</a> 没有捕获变量的lambda表达式可以直接转换为函数指针，而捕获变量的lambda则不能转换为函数指针</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">void</span><span class="token punctuation">(</span><span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ptr p <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">int</span> p<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">delete</span> p<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span>
ptr p <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">int</span> p<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">delete</span> p<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 错误，有状态的lambda不能直接转换为函数指针</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","lambda.html.vue"]]);export{r as default};