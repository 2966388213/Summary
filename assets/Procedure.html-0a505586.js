import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,a}from"./app-8c4720e2.js";const l={},i=a(`<h1 id="存储过程" tabindex="-1"><a class="header-anchor" href="#存储过程" aria-hidden="true">#</a> 存储过程</h1><p>在SQL中，存储过程是一组预编译的SQL语句集合，它们可以被存储在数据库中并作为一个单元进行调用。存储过程通常包含SQL查询、控制流语句和其他逻辑，可以接受参数并返回结果集或输出参数。</p><p>通过使用存储过程，可以实现以下几个目的：</p><ol><li><p><strong>代码重用性：</strong> 存储过程允许将常用的业务逻辑封装在一个单独的单元中，以便在多个地方进行调用，减少代码的冗余。</p></li><li><p><strong>性能优化：</strong> 存储过程的代码在数据库中预编译，可以提高执行速度，减少网络流量，并降低了SQL注入的风险。</p></li><li><p><strong>权限控制：</strong> 存储过程可以定义访问数据库的权限，从而更好地管理对数据库的访问。</p></li><li><p><strong>事务管理：</strong> 存储过程可以包含事务控制语句，确保一系列操作的原子性。</p></li></ol><p>通过调用存储过程，可以在应用程序和数据库之间实现更有效的交互，并提高整体系统性能。</p><h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2><p>以下是一个简单的SQL Server存储过程的例子，该存储过程接受一个参数，并返回一个结果集：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建存储过程</span>
<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> GetEmployeeInfo
    <span class="token variable">@EmployeeID</span> <span class="token keyword">INT</span>
<span class="token keyword">AS</span>
<span class="token keyword">BEGIN</span>
    <span class="token comment">-- 查询员工信息</span>
    <span class="token keyword">SELECT</span> EmployeeID<span class="token punctuation">,</span> FirstName<span class="token punctuation">,</span> LastName<span class="token punctuation">,</span> Department
    <span class="token keyword">FROM</span> Employees
    <span class="token keyword">WHERE</span> EmployeeID <span class="token operator">=</span> <span class="token variable">@EmployeeID</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，存储过程名为<code>GetEmployeeInfo</code>，它接受一个参数 <code>@EmployeeID</code>，该参数是一个整数类型。存储过程使用<code>SELECT</code>语句查询 <code>Employees</code> 表中符合给定 <code>EmployeeID</code> 的员工信息，并返回 <code>EmployeeID, FirstName, LastName, Department</code> 列的结果集。</p><p>要执行这个存储过程，可以使用以下SQL语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 执行存储过程</span>
<span class="token keyword">EXEC</span> GetEmployeeInfo <span class="token variable">@EmployeeID</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这将调用存储过程 <code>GetEmployeeInfo</code>，并传递 <code>@EmployeeID</code> 参数值为 <code>123</code>。根据传递的参数，存储过程将返回相应的员工信息结果集。</p><h2 id="存储过程中的语法" tabindex="-1"><a class="header-anchor" href="#存储过程中的语法" aria-hidden="true">#</a> 存储过程中的语法</h2><p>存储过程是由一系列SQL语句组成的、存储在数据库中的可被调用的一种数据库对象。以下是存储过程的基本语法要点：</p><ol><li><p><strong>创建存储过程：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> ProcedureName
    <span class="token variable">@Parameter1</span> DataType<span class="token punctuation">,</span>
    <span class="token variable">@Parameter2</span> DataType
<span class="token keyword">AS</span>
<span class="token keyword">BEGIN</span>
    <span class="token comment">-- SQL Statements</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>输入参数（可选）：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token variable">@ParameterName</span> DataType
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>输出参数（可选）：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token variable">@OutputParameter</span> DataType OUTPUT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>局部变量（可选）：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DECLARE</span> <span class="token variable">@VariableName</span> DataType
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>BEGIN...END块：</strong> 存储过程的主体，包含要执行的SQL语句。</p></li><li><p><strong>IF...ELSE条件：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">IF</span> <span class="token punctuation">(</span>Condition<span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
    <span class="token comment">-- Statements if true</span>
<span class="token keyword">END</span>
<span class="token keyword">ELSE</span>
<span class="token keyword">BEGIN</span>
    <span class="token comment">-- Statements if false</span>
<span class="token keyword">END</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>WHILE循环：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">WHILE</span> <span class="token punctuation">(</span>Condition<span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
    <span class="token comment">-- Statements</span>
<span class="token keyword">END</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>TRY...BEGIN...CATCH：</strong> 用于处理错误和异常。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">BEGIN</span> TRY
    <span class="token comment">-- Statements</span>
<span class="token keyword">END</span> TRY
<span class="token keyword">BEGIN</span> CATCH
    <span class="token comment">-- Error handling statements</span>
<span class="token keyword">END</span> CATCH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>动态SQL（可选）：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DECLARE</span> <span class="token variable">@DynamicSQL</span> NVARCHAR<span class="token punctuation">(</span>MAX<span class="token punctuation">)</span>
<span class="token keyword">SET</span> <span class="token variable">@DynamicSQL</span> <span class="token operator">=</span> <span class="token string">&#39;SELECT * FROM TableName&#39;</span>
<span class="token keyword">EXEC</span> sp_executesql <span class="token variable">@DynamicSQL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>执行存储过程：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">EXEC</span> ProcedureName <span class="token variable">@Parameter1</span><span class="token punctuation">,</span> <span class="token variable">@Parameter2</span> OUTPUT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>这只是存储过程的基本语法要点，实际情况中可以根据需求进行更复杂的逻辑和操作。</p><h2 id="内置变量" tabindex="-1"><a class="header-anchor" href="#内置变量" aria-hidden="true">#</a> 内置变量</h2><p>在Transact-SQL（T-SQL）中，存储过程可以使用一些内置变量来访问有关当前执行环境的信息。以下是一些常见的内置变量：</p><ol><li><p><strong>@@ERROR：</strong> 用于获取最近一次发生的错误的错误代码。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">IF</span> @<span class="token variable">@ERROR</span> <span class="token operator">&lt;&gt;</span> <span class="token number">0</span>
<span class="token keyword">BEGIN</span>
    <span class="token comment">-- 处理错误的逻辑</span>
<span class="token keyword">END</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>@@ROWCOUNT：</strong> 返回最后一个执行的查询影响的行数。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> @<span class="token variable">@ROWCOUNT</span> <span class="token keyword">AS</span> <span class="token string">&#39;Rows Affected&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>@@IDENTITY：</strong> 用于检索最后插入的标识列的值。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> TableName <span class="token punctuation">(</span>ColumnName<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;Value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> @<span class="token variable">@IDENTITY</span> <span class="token keyword">AS</span> <span class="token string">&#39;Last Identity Value&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>@@VERSION：</strong> 返回当前数据库引擎的版本信息。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> @<span class="token variable">@VERSION</span> <span class="token keyword">AS</span> <span class="token string">&#39;SQL Server Version&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>@@DBTS：</strong> 返回当前数据库的当前时间戳。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> @<span class="token variable">@DBTS</span> <span class="token keyword">AS</span> <span class="token string">&#39;Current Database Timestamp&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>这些内置变量提供了对数据库和执行环境的有用信息，使得在存储过程中更方便地进行错误处理和其他操作。</p><h2 id="内置函数" tabindex="-1"><a class="header-anchor" href="#内置函数" aria-hidden="true">#</a> 内置函数</h2><p>在存储过程中，可以使用多种内置函数来执行各种操作。以下是一些常见的Transact-SQL内置函数：</p><ol><li><p><strong>数学函数：</strong></p><ul><li><code>ABS()</code>：返回一个数的绝对值。</li><li><code>ROUND()</code>：将数值四舍五入为最接近的整数。</li></ul></li><li><p><strong>字符函数：</strong></p><ul><li><code>LEN()</code>：返回字符串的长度。</li><li><code>LEFT()</code>：从字符串的左边提取指定数量的字符。</li><li><code>RIGHT()</code>：从字符串的右边提取指定数量的字符。</li><li><code>LTRIM()</code>：从字符串左侧删除空格。</li><li><code>RTRIM()</code>：从字符串右侧删除空格。</li><li><code>CHARINDEX()</code>：返回一个字符串在另一个字符串中的起始位置。</li></ul></li><li><p><strong>日期和时间函数：</strong></p><ul><li><code>GETDATE()</code>：返回当前的日期和时间。</li><li><code>DATEDIFF()</code>：计算两个日期之间的时间差。</li><li><code>DATEADD()</code>：在日期上添加或减去指定的时间间隔。</li></ul></li><li><p><strong>聚合函数：</strong></p><ul><li><code>SUM()</code>：计算总和。</li><li><code>AVG()</code>：计算平均值。</li><li><code>COUNT()</code>：计算行数。</li><li><code>MIN()</code>：找到最小值。</li><li><code>MAX()</code>：找到最大值。</li></ul></li><li><p><strong>逻辑函数：</strong></p><ul><li><code>CASE</code>：实现条件逻辑。</li><li><code>COALESCE()</code>：返回参数列表中的第一个非空表达式。</li></ul></li><li><p><strong>系统和元数据函数：</strong></p><ul><li><code>OBJECT_ID()</code>：返回对象的对象标识符。</li><li><code>DB_NAME()</code>：返回数据库的名称。</li></ul></li><li><p><strong>字符串拼接函数：</strong></p><ul><li><code>CONCAT()</code>：连接两个或多个字符串。</li></ul></li><li><p><strong>加密函数：</strong></p><ul><li><code>HASHBYTES()</code>：计算二进制哈希值。</li></ul></li></ol><p>这只是一小部分可用的内置函数。在存储过程中，您可以根据需要使用这些函数以及其他更复杂的函数来执行各种操作。</p>`,24),o=[i];function d(p,c){return n(),e("div",null,o)}const u=s(l,[["render",d],["__file","Procedure.html.vue"]]);export{u as default};
