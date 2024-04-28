import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,a as t}from"./app-d03b5bc4.js";const p={},e=t(`<h1 id="wsdl-协议" tabindex="-1"><a class="header-anchor" href="#wsdl-协议" aria-hidden="true">#</a> wsdl 协议</h1><p><strong>WSDL</strong>（网络服务描述语言）是一种使用 XML 编写的文档，用于描述 Web 服务。它规定了服务的位置以及此服务提供的操作（或方法）¹²³.</p><p>以下是 WSDL 文档的主要元素：</p><ol><li><p><strong>端口（PortType）</strong>：</p><ul><li>端口是 WSDL 中最重要的元素之一。</li><li>它描述了一个 Web 服务，包括可执行的操作和相关的消息。</li><li>可以将端口类比为传统编程语言中的函数库或模块。</li></ul></li><li><p><strong>消息（Message）</strong>：</p><ul><li>消息定义了操作的数据元素。</li><li>每个消息由一个或多个部件组成，类似于传统编程语言中函数调用的参数。</li></ul></li><li><p><strong>数据类型（Types）</strong>：</p><ul><li>数据类型定义了 Web 服务使用的数据类型。</li><li>WSDL 使用 XML Schema 语法来定义数据类型，以实现最大程度的平台中立性。</li></ul></li><li><p><strong>绑定（Binding）</strong>：</p><ul><li>绑定为每个端口定义了消息格式和协议细节。</li></ul></li></ol><p>一个简化的 WSDL 示例如下：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>definitions</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>types</span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!-- 数据类型定义... --&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>types</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>message</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getTermRequest<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>part</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>term<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xs:string<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>message</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>message</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getTermResponse<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>part</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xs:string<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>message</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>portType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>glossaryTerms<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>operation</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getTerm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getTermRequest<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>output</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getTermResponse<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>operation</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>portType</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>definitions</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中：</p><ul><li><code>&lt;portType&gt;</code> 元素将 &quot;glossaryTerms&quot; 定义为端口名称，将 &quot;getTerm&quot; 定义为操作名称。</li><li>操作 &quot;getTerm&quot; 具有一个名为 &quot;getTermRequest&quot; 的输入消息和一个名为 &quot;getTermResponse&quot; 的输出消息。</li><li><code>&lt;message&gt;</code> 元素定义了每个消息的部件和相关联的数据类型。</li></ul>`,8),o=[e];function l(c,u){return n(),a("div",null,o)}const r=s(p,[["render",l],["__file","wsdl.html.vue"]]);export{r as default};