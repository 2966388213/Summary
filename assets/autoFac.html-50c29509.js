import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-d03b5bc4.js";const t={},p=e(`<h1 id="autofac简单使用" tabindex="-1"><a class="header-anchor" href="#autofac简单使用" aria-hidden="true">#</a> autoFac简单使用</h1><p>Autofac 是一个强大的依赖注入容器，提供了丰富的 API 来管理对象的生命周期、注册和解析依赖等。以下是一些常用的 Autofac 对象 API：</p><ol><li><p><strong>ContainerBuilder</strong>: 用于构建容器的建造者，通过它可以注册组件和服务。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ContainerBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>Container</strong>: 容器对象，用于解析依赖和管理对象的生命周期。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>RegistrationBuilder</strong>: 用于自定义注册组件的方式，提供了更高级的注册选项。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> registration <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MyService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>ComponentRegistration</strong>: 表示已注册的组件，提供了有关组件的元数据信息。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> registration <span class="token operator">=</span> container<span class="token punctuation">.</span>ComponentRegistry<span class="token punctuation">.</span>Registrations<span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>IComponentContext</strong>: 表示组件的上下文，用于解析依赖。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> service <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IMyService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>LifetimeScope</strong>: 表示对象的生命周期范围，用于管理对象的生命周期。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> scope <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">BeginLifetimeScope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> service <span class="token operator">=</span> scope<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IMyService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>Module</strong>: 用于组织注册逻辑的模块，可以将相关的注册逻辑封装在一个模块中。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyModule</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Module</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Load</span><span class="token punctuation">(</span><span class="token class-name">ContainerBuilder</span> builder<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MyService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">As</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IMyService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>这些是一些常用的 Autofac 对象 API，你可以根据自己的需求进一步探索和使用 Autofac 的其他功能和 API。Autofac 的文档提供了详细的 API 参考和示例，你可以进一步阅读以便更好地了解和使用 Autofac。</p><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><p>好的，以下是 <code>ContainerBuilder</code> 类中常用的函数和方法以及简单说明：</p><table><thead><tr><th>函数/方法</th><th>说明</th></tr></thead><tbody><tr><td><code>ContainerBuilder()</code></td><td>构造函数，用于创建一个新的容器构建者实例。</td></tr><tr><td><code>RegisterType&lt;T&gt;()</code></td><td>注册类型 <code>T</code> 到容器中，通常用于注册具体类型。</td></tr><tr><td><code>RegisterInstance(object)</code></td><td>注册一个现有的实例到容器中，通常用于注册单例实例。</td></tr><tr><td><code>RegisterInstance&lt;T&gt;(T)</code></td><td>注册一个现有的泛型实例到容器中，通常用于注册单例实例。</td></tr><tr><td><code>RegisterAssemblyTypes(Assembly)</code></td><td>注册指定程序集中的所有类型到容器中，通常用于批量注册。</td></tr><tr><td><code>RegisterAssemblyModules(Assembly)</code></td><td>注册指定程序集中的所有模块到容器中，通常用于自动注册模块。</td></tr><tr><td><code>RegisterGeneric(Type)</code></td><td>注册泛型类型到容器中，通常用于注册泛型类型。</td></tr><tr><td><code>RegisterGeneric(typeof(T))</code></td><td>注册泛型类型到容器中，通常用于注册泛型类型。</td></tr><tr><td><code>RegisterCallback(ConfigurationAction)</code></td><td>注册一个回调函数用于配置容器，通常用于复杂的注册逻辑。</td></tr><tr><td><code>RegisterSource(IRegistrationSource)</code></td><td>注册一个注册源到容器中，通常用于自定义的注册逻辑。</td></tr><tr><td><code>RegisterModule(Module)</code></td><td>注册一个模块到容器中，通常用于将相关的注册逻辑封装在一个模块中。</td></tr><tr><td><code>Update(Container)</code></td><td>更新容器的配置，通常用于重新配置容器或添加新的配置。</td></tr><tr><td><code>Build()</code></td><td>构建容器，返回一个容器实例。</td></tr></tbody></table><p>这些是 <code>ContainerBuilder</code> 类中常用的函数和方法以及简单说明。你可以根据具体的需求选择适合的方法来配置和构建 Autofac 容器。</p><h2 id="populate" tabindex="-1"><a class="header-anchor" href="#populate" aria-hidden="true">#</a> populate</h2><p>在 Autofac 中，<code>Populate</code> 方法用于将已经注册到容器的服务注入到已经存在的对象中的属性或字段中。通常情况下，你可能会在使用 Autofac 进行依赖注入时遇到需要将已注册服务注入到已存在对象的场景。</p><p>例如，假设你有一个类 <code>MyClass</code>，它有一个依赖于 <code>IMyService</code> 接口的属性 <code>MyService</code>，并且你已经将 <code>IMyService</code> 注册到了 Autofac 容器中。现在，你希望通过 Autofac 将已注册的 <code>IMyService</code> 注入到 <code>MyClass</code> 对象的 <code>MyService</code> 属性中，而不是手动创建 <code>MyService</code> 实例并赋值给 <code>MyClass</code> 的属性。</p><p>这时，你可以使用 <code>Populate</code> 方法来完成这个任务。下面是一个示例代码：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Autofac</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Autofac<span class="token punctuation">.</span>Core</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Autofac<span class="token punctuation">.</span>Features<span class="token punctuation">.</span>AttributeFilters</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Autofac<span class="token punctuation">.</span>Features<span class="token punctuation">.</span>ResolveAnything</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IMyService</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DoSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IMyService</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DoSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;MyService is doing something...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">IMyService</span> MyService <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Program</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 创建容器构建者</span>
        <span class="token class-name"><span class="token keyword">var</span></span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ContainerBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 注册服务</span>
        builder<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MyService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">As</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IMyService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 构建容器</span>
        <span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 创建 MyClass 实例</span>
        <span class="token class-name"><span class="token keyword">var</span></span> myClass <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 使用 Populate 方法将已注册服务注入到 myClass 对象中</span>
        container<span class="token punctuation">.</span><span class="token function">Populate</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AutowiredPropertyModule</span><span class="token punctuation">(</span>myClass<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 现在 myClass 对象的 MyService 属性已经被注入了已注册的服务</span>
        myClass<span class="token punctuation">.</span>MyService<span class="token punctuation">.</span><span class="token function">DoSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们创建了一个 <code>MyClass</code> 对象，并且通过 <code>Populate</code> 方法将已注册的服务注入到了 <code>MyClass</code> 对象的 <code>MyService</code> 属性中。这样，<code>MyClass</code> 对象就可以使用已注册的服务了。</p><h2 id="registergeneratedfactory" tabindex="-1"><a class="header-anchor" href="#registergeneratedfactory" aria-hidden="true">#</a> RegisterGeneratedFactory</h2><p><code>RegisterGeneratedFactory</code> 方法是 Autofac 中用于注册生成工厂的方法。这个方法通常与使用 Autofac 动态生成的工厂一起使用，以便在运行时动态创建对象。</p><p>工厂可以是用于创建一组相关对象的通用方式。当你无法在编译时知道要创建的具体类型时，使用工厂可以很方便地动态创建对象。</p><p>下面是一个简单的示例，演示了如何使用 <code>RegisterGeneratedFactory</code> 方法：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Autofac</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Autofac<span class="token punctuation">.</span>Features<span class="token punctuation">.</span>GeneratedFactories</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IMyService</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DoSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IMyService</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DoSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;MyService is doing something...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">Func<span class="token punctuation">&lt;</span>IMyService<span class="token punctuation">&gt;</span></span> _myServiceFactory<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token class-name">Func<span class="token punctuation">&lt;</span>IMyService<span class="token punctuation">&gt;</span></span> myServiceFactory<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _myServiceFactory <span class="token operator">=</span> myServiceFactory<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">UseService</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> myService <span class="token operator">=</span> <span class="token function">_myServiceFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myService<span class="token punctuation">.</span><span class="token function">DoSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Program</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ContainerBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 注册服务和工厂</span>
        builder<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MyService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">As</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IMyService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MyClass<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterGeneratedFactory</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Func<span class="token punctuation">&lt;</span>IMyService<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name"><span class="token keyword">var</span></span> myClass <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MyClass<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myClass<span class="token punctuation">.</span><span class="token function">UseService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们注册了一个 <code>MyService</code> 类型的服务以及一个 <code>MyClass</code> 类型的类。然后，我们使用 <code>RegisterGeneratedFactory</code> 方法注册了一个生成工厂，这个工厂可以用来动态创建 <code>IMyService</code> 类型的对象。最后，我们在 <code>MyClass</code> 中注入了这个工厂，并在其中使用工厂动态创建了 <code>IMyService</code> 对象并调用了它的方法。</p>`,20),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","autoFac.html.vue"]]);export{r as default};
