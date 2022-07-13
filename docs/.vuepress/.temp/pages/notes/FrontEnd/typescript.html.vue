<template><div><h1 id="typescript入门" tabindex="-1"><a class="header-anchor" href="#typescript入门" aria-hidden="true">#</a> Typescript入门</h1>
<h2 id="一、-typescript是什么" tabindex="-1"><a class="header-anchor" href="#一、-typescript是什么" aria-hidden="true">#</a> 一、 Typescript是什么</h2>
<p>TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。</p>
<h3 id="_1-1-ts与js的区别" tabindex="-1"><a class="header-anchor" href="#_1-1-ts与js的区别" aria-hidden="true">#</a> 1.1 TS与JS的区别</h3>
<table>
<thead>
<tr>
<th style="text-align:center">Typescript</th>
<th style="text-align:center">Javascript</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">JavaScript 的超集用于解决大型项目的代码复杂性</td>
<td style="text-align:center">一种脚本语言，用于创建动态网页</td>
</tr>
<tr>
<td style="text-align:center">可以在编译期间发现并纠正错误</td>
<td style="text-align:center">作为一种解释型语言，只能在运行时发现错误</td>
</tr>
<tr>
<td style="text-align:center">强类型，支持静态和动态类型</td>
<td style="text-align:center">弱类型，没有静态类型选项</td>
</tr>
<tr>
<td style="text-align:center">最终被编译成 JavaScript 代码，使浏览器可以理解</td>
<td style="text-align:center">可以直接在浏览器中使用</td>
</tr>
</tbody>
</table>
<h3 id="_1-2-环境配置" tabindex="-1"><a class="header-anchor" href="#_1-2-环境配置" aria-hidden="true">#</a> 1.2 环境配置</h3>
<h4 id="_1-安装typescript" tabindex="-1"><a class="header-anchor" href="#_1-安装typescript" aria-hidden="true">#</a> 1. 安装Typescript</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-将ts转成js" tabindex="-1"><a class="header-anchor" href="#_2-将ts转成js" aria-hidden="true">#</a> 2. 将ts转成js</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tsc index.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二、typescript基本类型" tabindex="-1"><a class="header-anchor" href="#二、typescript基本类型" aria-hidden="true">#</a> 二、Typescript基本类型</h2>
<h3 id="_2-1-boolean类型" tabindex="-1"><a class="header-anchor" href="#_2-1-boolean类型" aria-hidden="true">#</a> 2.1 Boolean类型</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> isSuccess<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> isError<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-number类型" tabindex="-1"><a class="header-anchor" href="#_2-2-number类型" aria-hidden="true">#</a> 2.2 Number类型</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> count<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-string类型" tabindex="-1"><a class="header-anchor" href="#_2-3-string类型" aria-hidden="true">#</a> 2.3 String类型</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'eugenio code'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-4-array类型" tabindex="-1"><a class="header-anchor" href="#_2-4-array类型" aria-hidden="true">#</a> 2.4 Array类型</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> list<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

<span class="token keyword">let</span> newList<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token comment">// 泛型方式定义数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-tuple类型" tabindex="-1"><a class="header-anchor" href="#_2-5-tuple类型" aria-hidden="true">#</a> 2.5 Tuple类型</h3>
<blockquote>
<p>数组一般由同种类型的值组成，但有时我们需要在单个变量中存储不同类型的值，这时候我们就可以使用元组</p>
</blockquote>
<p>元组可用于定义具有有限数量的未命名属性的类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> tupleType<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">boolean</span><span class="token punctuation">]</span>

tupleType <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token string">'helloworld'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-enum类型" tabindex="-1"><a class="header-anchor" href="#_2-6-enum类型" aria-hidden="true">#</a> 2.6 Enum类型</h3>
<blockquote>
<p>使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript 支持数字的和基于字符串的枚举。</p>
</blockquote>
<ol>
<li>
<p>数字枚举</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
 Sunday<span class="token punctuation">,</span>
 Monday<span class="token punctuation">,</span>
 Friday
<span class="token punctuation">}</span>

<span class="token keyword">let</span> dir0<span class="token operator">:</span> Direction <span class="token operator">=</span> Direction<span class="token punctuation">.</span>Sunday <span class="token comment">// 0</span>
<span class="token keyword">let</span> dir1<span class="token operator">:</span> Direction <span class="token operator">=</span> Direction<span class="token punctuation">.</span>Monday <span class="token comment">// 1</span>
<span class="token keyword">let</span> dir2<span class="token operator">:</span> Direction <span class="token operator">=</span> Direction<span class="token punctuation">.</span>Friday <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>已上代码对应的ES5代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use strict"</span><span class="token punctuation">;</span>
 <span class="token keyword">var</span> Direction<span class="token punctuation">;</span>
 <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Direction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     Direction<span class="token punctuation">[</span>Direction<span class="token punctuation">[</span><span class="token string">"Sunday"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Sunday"</span><span class="token punctuation">;</span>
     Direction<span class="token punctuation">[</span>Direction<span class="token punctuation">[</span><span class="token string">"Monday"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Monday"</span><span class="token punctuation">;</span>
     Direction<span class="token punctuation">[</span>Direction<span class="token punctuation">[</span><span class="token string">"Friday"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Friday"</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Direction <span class="token operator">||</span> <span class="token punctuation">(</span>Direction <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">let</span> dir0 <span class="token operator">=</span> Direction<span class="token punctuation">.</span>Sunday<span class="token punctuation">;</span> <span class="token comment">// 0</span>
 <span class="token keyword">let</span> dir1 <span class="token operator">=</span> Direction<span class="token punctuation">.</span>Monday<span class="token punctuation">;</span> <span class="token comment">// 1</span>
 <span class="token keyword">let</span> dir2 <span class="token operator">=</span> Direction<span class="token punctuation">.</span>Friday<span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>字符串枚举</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  Sunday <span class="token operator">=</span> <span class="token string">"Sunday_enum"</span><span class="token punctuation">,</span>
  Monday <span class="token operator">=</span> <span class="token string">"Monday_enum"</span><span class="token punctuation">,</span>
  Friday <span class="token operator">=</span> <span class="token string">"Friday_enum"</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> dir<span class="token operator">:</span> Direction <span class="token operator">=</span> Direction<span class="token punctuation">.</span>Sunday <span class="token comment">// Sunday_enum</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>常量枚举</p>
<blockquote>
<p>除了数字枚举和字符串枚举之外，还有一种特殊的枚举 —— 常量枚举。它是使用 <code v-pre>const</code> 关键字修饰的枚举，常量枚举会使用内联语法，不会为枚举类型编译生成任何 JavaScript。</p>
</blockquote>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
 Sunday<span class="token punctuation">,</span>
 Monday<span class="token punctuation">,</span>
 Friday
<span class="token punctuation">}</span>

<span class="token keyword">let</span> dir0<span class="token operator">:</span> Direction <span class="token operator">=</span> Direction<span class="token punctuation">.</span>Sunday <span class="token comment">// 0</span>
<span class="token keyword">let</span> dir1<span class="token operator">:</span> Direction <span class="token operator">=</span> Direction<span class="token punctuation">.</span>Monday <span class="token comment">// 1</span>
<span class="token keyword">let</span> dir2<span class="token operator">:</span> Direction <span class="token operator">=</span> Direction<span class="token punctuation">.</span>Friday <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>已上代码对应的ES5代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use strict"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> dir0 <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">/* Sunday */</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token keyword">let</span> dir1 <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">/* Monday */</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token keyword">let</span> dir2 <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">/* Friday */</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>异构枚举</p>
<blockquote>
<p>异构枚举的成员值是数字和字符串的混合</p>
</blockquote>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Enum <span class="token punctuation">{</span>
  <span class="token constant">A</span><span class="token punctuation">,</span>
  <span class="token constant">B</span><span class="token punctuation">,</span>
  <span class="token constant">C</span> <span class="token operator">=</span> <span class="token string">"C"</span><span class="token punctuation">,</span>
  <span class="token constant">D</span> <span class="token operator">=</span> <span class="token string">"D"</span><span class="token punctuation">,</span>
  <span class="token constant">E</span> <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token constant">F</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> a1<span class="token operator">:</span>Enum <span class="token operator">=</span> Enum<span class="token punctuation">.</span><span class="token constant">A</span>  <span class="token comment">// 0</span>
<span class="token keyword">let</span> a2<span class="token operator">:</span>Enum <span class="token operator">=</span> Enum<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// "A"</span>

<span class="token keyword">let</span> c<span class="token operator">:</span>Enum <span class="token operator">=</span> Enum<span class="token punctuation">.</span><span class="token constant">C</span> <span class="token comment">// "C"</span>

<span class="token keyword">let</span> e1<span class="token operator">:</span>Enum <span class="token operator">=</span> Enum<span class="token punctuation">.</span><span class="token constant">E</span> <span class="token comment">// 8</span>
<span class="token keyword">let</span> e2<span class="token operator">:</span>Enum <span class="token operator">=</span> Enum<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token comment">// "E"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>异构枚举中数字枚举相对字符串枚举多了&quot;反向映射&quot;</p>
</blockquote>
</li>
</ol>
<h3 id="_2-7-any类型" tabindex="-1"><a class="header-anchor" href="#_2-7-any类型" aria-hidden="true">#</a> 2.7 Any类型</h3>
<blockquote>
<p>在 TypeScript 中，任何类型都可以被归为 any 类型。这让 any 类型成为了类型系统的顶级类型（也被称作全局超级类型）。</p>
</blockquote>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> notSure<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
notSure <span class="token operator">=</span> <span class="token string">"semlinker"</span><span class="token punctuation">;</span>
notSure <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-null与undefined类型" tabindex="-1"><a class="header-anchor" href="#_2-8-null与undefined类型" aria-hidden="true">#</a> 2.8 Null与Undefined类型</h3>
<blockquote>
<p>TypeScript 里，<code v-pre>undefined</code> 和 <code v-pre>null</code> 两者有各自的类型分别为 <code v-pre>undefined</code> 和 <code v-pre>null</code></p>
</blockquote>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> n<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-9-void类型" tabindex="-1"><a class="header-anchor" href="#_2-9-void类型" aria-hidden="true">#</a> 2.9 Void类型</h3>
<blockquote>
<p>void 类型某种程度上是与 any 类型相反的，它表示没有任何类型。当一个函数没有返回值时，通常会见到其返回值类型是 void</p>
</blockquote>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getConsole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
 <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'this is a ts demo'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-10-never类型" tabindex="-1"><a class="header-anchor" href="#_2-10-never类型" aria-hidden="true">#</a> 2.10 Never类型</h3>
<blockquote>
<p>never 类型表示的是那些永不存在的值的类型</p>
</blockquote>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 返回never的函数必须存在无法达到的终点</span>
<span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、typescript-断言" tabindex="-1"><a class="header-anchor" href="#三、typescript-断言" aria-hidden="true">#</a> 三、Typescript 断言</h2>
<h3 id="_3-1-类型断言" tabindex="-1"><a class="header-anchor" href="#_3-1-类型断言" aria-hidden="true">#</a> 3.1 类型断言</h3>
<blockquote>
<p>有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。</p>
</blockquote>
<p>类型断言有两种形式：</p>
<ul>
<li>'&lt;&gt;'语法<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> someValue<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">"this is a string"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> strLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span>someValue<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>'as'语法<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code> <span class="token keyword">let</span> someValue<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">"this is a string"</span><span class="token punctuation">;</span>
 <span class="token keyword">let</span> strLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span>someValue <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_3-2-非空断言" tabindex="-1"><a class="header-anchor" href="#_3-2-非空断言" aria-hidden="true">#</a> 3.2 非空断言</h3>
<blockquote>
<p>在上下文中当类型检查器无法断定类型时，一个新的后缀表达式操作符 <code v-pre>!</code> 可以用于断言操作对象是非 <code v-pre>null</code> 和非 <code v-pre>undefined</code> 类型。</p>
</blockquote>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">myFunc</span><span class="token punctuation">(</span>maybeString<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Type 'string | null | undefined' is not assignable to type 'string'.</span>
  <span class="token comment">// Type 'undefined' is not assignable to type 'string'. </span>
  <span class="token keyword">const</span> onlyString<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> maybeString<span class="token punctuation">;</span> <span class="token comment">// Error</span>
  <span class="token keyword">const</span> ignoreUndefinedAndNull<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> maybeString<span class="token operator">!</span><span class="token punctuation">;</span> <span class="token comment">// Ok</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、typescript-类型守护" tabindex="-1"><a class="header-anchor" href="#四、typescript-类型守护" aria-hidden="true">#</a> 四、Typescript 类型守护</h2>
<h3 id="_4-1-in-关键字" tabindex="-1"><a class="header-anchor" href="#_4-1-in-关键字" aria-hidden="true">#</a> 4.1 <code v-pre>in</code> 关键字</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Admin</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  privileges<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  startDate<span class="token operator">:</span> Date<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">UnknownEmployee</span> <span class="token operator">=</span> Employee <span class="token operator">|</span> Admin<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">printEmployeeInformation</span><span class="token punctuation">(</span>emp<span class="token operator">:</span> UnknownEmployee<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Name: "</span> <span class="token operator">+</span> emp<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"privileges"</span> <span class="token keyword">in</span> emp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Privileges: "</span> <span class="token operator">+</span> emp<span class="token punctuation">.</span>privileges<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"startDate"</span> <span class="token keyword">in</span> emp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Start Date: "</span> <span class="token operator">+</span> emp<span class="token punctuation">.</span>startDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-typeof-关键字" tabindex="-1"><a class="header-anchor" href="#_4-2-typeof-关键字" aria-hidden="true">#</a> 4.2 <code v-pre>typeof</code> 关键字</h3>
<blockquote>
<p>typeof 类型保护只支持两种形式：<code v-pre>typeof v === &quot;typename&quot;</code> 和 <code v-pre>typeof v !== typename</code>，<code v-pre>&quot;typename&quot;</code> 必须是 <code v-pre>&quot;number&quot;</code>， <code v-pre>&quot;string&quot;</code>， <code v-pre>&quot;boolean&quot;</code> 或 <code v-pre>&quot;symbol&quot;</code>。 但是 TypeScript 并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。</p>
</blockquote>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">padLeft</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> padding<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> padding <span class="token operator">===</span> <span class="token string">"number"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">Array</span><span class="token punctuation">(</span>padding <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span> <span class="token operator">+</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> padding <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> padding <span class="token operator">+</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Expected string or number, got '</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>padding<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">'.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
