import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t,a as p}from"./app-c4947a11.js";const e={},o=p(`<h1 id="interface-接口" tabindex="-1"><a class="header-anchor" href="#interface-接口" aria-hidden="true">#</a> interface 接口</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">LabelledValue</span><span class="token punctuation">{</span>
    <span class="token literal-property property">label</span> <span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">value</span> <span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span> <span class="token operator">:</span> LabelledValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 只要传入的对象满足 属性相同且类型一样就可以</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span> <span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span> <span class="token operator">:</span> <span class="token string">&quot;456&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">other</span> <span class="token operator">:</span> <span class="token string">&quot;null&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">func</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/// 可以选的参数</span>
<span class="token keyword">interface</span> <span class="token class-name">Tabelled</span><span class="token punctuation">{</span>
    <span class="token literal-property property">value</span> <span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token comment">/// 可选参数</span>
    label<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 只读属性</span>
<span class="token keyword">interface</span> <span class="token class-name">Point</span><span class="token punctuation">{</span>
    <span class="token comment">// readonly 被赋值后就不能被改变了</span>
    readonly value <span class="token operator">:</span> string<span class="token punctuation">;</span>
    readonly label <span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token literal-property property">a</span> <span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span> <span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span> <span class="token operator">:</span> <span class="token string">&quot;456&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//a.value = &quot;1324&quot;; // error</span>

<span class="token comment">// readonlyArray&lt;&gt; 只读数组，数组被赋值后不可被改变</span>
<span class="token keyword">let</span> <span class="token literal-property property">ass</span> <span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 不可将一个只读数组赋值给普通的数组，但是可以类型断言重写</span>
<span class="token comment">// let ass2 : number[] = ass; // error</span>
<span class="token keyword">let</span> <span class="token literal-property property">ass2</span> <span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> ass <span class="token keyword">as</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="const-readonly-如果把它当做属性则使用readonly-如果是变量则使用const" tabindex="-1"><a class="header-anchor" href="#const-readonly-如果把它当做属性则使用readonly-如果是变量则使用const" aria-hidden="true">#</a> const &amp; readonly 如果把它当做属性则使用readonly 如果是变量则使用const</h4><h3 id="额外属性-propname" tabindex="-1"><a class="header-anchor" href="#额外属性-propname" aria-hidden="true">#</a> 额外属性 propName</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/// 额外的属性检查，比如</span>
<span class="token keyword">interface</span> <span class="token class-name">SquareConfig</span> <span class="token punctuation">{</span>
    width<span class="token operator">?</span>  <span class="token operator">:</span> string<span class="token punctuation">;</span>
    height<span class="token operator">?</span> <span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">config</span> <span class="token operator">:</span> SquareConfig2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// func({height : &quot;1px&quot;,color : &quot;red&quot;}); error : SquareConfig不包含color</span>
<span class="token comment">// 使用类型断言,前提是接口必须是可空类型</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">height</span> <span class="token operator">:</span> <span class="token string">&#39;1px&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">}</span> <span class="token keyword">as</span> SquareConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ## 如果一个接口可能具有其他特殊用途的额外属性，那么可以这样定义</span>
<span class="token keyword">interface</span> <span class="token class-name">SquareConfig2</span><span class="token punctuation">{</span>
    width<span class="token operator">?</span> <span class="token operator">:</span> string<span class="token punctuation">;</span>
    height<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token punctuation">[</span>propName <span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span>any<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// propName 自定义额外属性</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">height</span><span class="token operator">:</span><span class="token string">&#39;123px&#39;</span> <span class="token punctuation">,</span> <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数接口" tabindex="-1"><a class="header-anchor" href="#函数接口" aria-hidden="true">#</a> 函数接口</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 函数类型接口</span>
<span class="token keyword">interface</span> <span class="token class-name">FuncInterface</span><span class="token punctuation">{</span>
    <span class="token punctuation">(</span>value <span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/// 函数接口</span>
<span class="token keyword">let</span> <span class="token literal-property property">func</span> <span class="token operator">:</span> <span class="token function-variable function">FuncInterface</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// function (val : string) 可以忽略</span>
    <span class="token comment">// .... </span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可索引类型" tabindex="-1"><a class="header-anchor" href="#可索引类型" aria-hidden="true">#</a> 可索引类型</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/// 可索引的类型</span>
<span class="token keyword">interface</span> <span class="token class-name">StringArray</span><span class="token punctuation">{</span>
    <span class="token punctuation">[</span>index <span class="token operator">:</span> number<span class="token punctuation">]</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">length</span> <span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token comment">// name   : string; error</span>
<span class="token punctuation">}</span>
<span class="token comment">// 相当于用number去索引StringArray时会得到string类型的返回值</span>
<span class="token keyword">let</span> <span class="token literal-property property">data</span> <span class="token operator">:</span> StringArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/// 类类型</span>
<span class="token comment">/// 实现接口</span>
<span class="token keyword">interface</span> <span class="token class-name">ClockInterface</span><span class="token punctuation">{</span>
    <span class="token literal-property property">currentTime</span> <span class="token operator">:</span> Date<span class="token punctuation">;</span>
    <span class="token function">setTime</span><span class="token punctuation">(</span>d<span class="token operator">:</span> Date<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Clock</span> <span class="token keyword">implements</span> <span class="token class-name">ClockInterface</span><span class="token punctuation">{</span>
    <span class="token literal-property property">currentTime</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>
    <span class="token function">setTime</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">d</span><span class="token operator">:</span> Date</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>currentTime <span class="token operator">=</span> d<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">h</span><span class="token operator">:</span> number <span class="token punctuation">,</span> <span class="token literal-property property">m</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="new-interface-构造函数约束" tabindex="-1"><a class="header-anchor" href="#new-interface-构造函数约束" aria-hidden="true">#</a> new interface 构造函数约束</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/// 类类型</span>
<span class="token comment">/// 实现接口</span>
<span class="token keyword">interface</span> <span class="token class-name">ClockConstructor</span><span class="token punctuation">{</span>
    <span class="token comment">// new 构造器签名 ps: 构造函数声明</span>
    <span class="token keyword">new</span> <span class="token punctuation">(</span>hour<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">minute</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> ClockInterface<span class="token punctuation">;</span>    
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">ClockInterface</span><span class="token punctuation">{</span>
    <span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 接口处理器</span>
<span class="token keyword">function</span> <span class="token function">CreateClock</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">ctor</span><span class="token operator">:</span> ClockConstructor<span class="token punctuation">,</span> <span class="token literal-property property">hour</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">minute</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ctor</span><span class="token punctuation">(</span>hour<span class="token punctuation">,</span>minute<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 闹钟一</span>
<span class="token keyword">class</span> <span class="token class-name">clock</span> <span class="token keyword">implements</span> <span class="token class-name">ClockInterface</span><span class="token punctuation">{</span>
    <span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;打上句号。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">hour</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">minute</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">闹钟一：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hour<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>minute<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 闹钟二</span>
<span class="token keyword">class</span> <span class="token class-name">clock2</span> <span class="token keyword">implements</span> <span class="token class-name">ClockInterface</span><span class="token punctuation">{</span>
    <span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;打上句号。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">hour</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">minute</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">闹钟二：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hour<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>minute<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// ts 可以传入interface并实例化</span>
<span class="token keyword">let</span> digital <span class="token operator">=</span> <span class="token function">CreateClock</span><span class="token punctuation">(</span>clock<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> analog <span class="token operator">=</span> <span class="token function">CreateClock</span><span class="token punctuation">(</span>clock2<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口继承" tabindex="-1"><a class="header-anchor" href="#接口继承" aria-hidden="true">#</a> 接口继承</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Shape</span><span class="token punctuation">{</span>
    <span class="token literal-property property">color</span> <span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span><span class="token punctuation">{</span>
    <span class="token literal-property property">sideLength</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 使用尖括号&lt;interface&gt;{}初始化</span>
<span class="token keyword">let</span> square <span class="token operator">=</span> <span class="token operator">&lt;</span>Square<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
square<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&quot;pink&quot;</span><span class="token punctuation">;</span>
square<span class="token punctuation">.</span>sideLength <span class="token operator">=</span> <span class="token number">170</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>square<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="混合类型" tabindex="-1"><a class="header-anchor" href="#混合类型" aria-hidden="true">#</a> 混合类型</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 混合类型</span>
<span class="token keyword">interface</span> <span class="token class-name">Counter</span><span class="token punctuation">{</span>
    <span class="token comment">/// 相当于构造函数</span>
    <span class="token punctuation">(</span>start<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">// 方法</span>
    <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">// 属性</span>
    <span class="token literal-property property">interval</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>Counter<span class="token punctuation">{</span>
    <span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token operator">&lt;</span>Counter<span class="token operator">&gt;</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    counter<span class="token punctuation">.</span><span class="token function-variable function">reset</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">in value is : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>interval<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    counter<span class="token punctuation">.</span>interval <span class="token operator">=</span> <span class="token number">101</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> counter<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token function">getCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">c</span><span class="token punctuation">(</span><span class="token string">&quot;初始值....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function c(l,i){return s(),a("div",null,[t(`
 * @作者: 14770137
 * @Date: 2022-10-07 17:01:25
`),o])}const k=n(e,[["render",c],["__file","interface.html.vue"]]);export{k as default};