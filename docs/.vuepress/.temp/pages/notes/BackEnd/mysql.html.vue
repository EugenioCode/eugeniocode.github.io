<template><div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>MySQL 是最流行的关系型数据库管理系统，在 WEB 应用方面 MySQL 是最好的 RDBMS(Relational Database Management System：关系数据库管理系统)应用软件之一。</p>
</div>
<!-- more -->
<h1 id="mysql使用" tabindex="-1"><a class="header-anchor" href="#mysql使用" aria-hidden="true">#</a> Mysql使用</h1>
<h2 id="一、基础知识" tabindex="-1"><a class="header-anchor" href="#一、基础知识" aria-hidden="true">#</a> 一、基础知识</h2>
<h3 id="_1-1-概念" tabindex="-1"><a class="header-anchor" href="#_1-1-概念" aria-hidden="true">#</a> 1.1 概念</h3>
<ul>
<li>MySQL 是开源的，目前隶属于 Oracle 旗下产品。</li>
<li>MySQL 支持大型的数据库。可以处理拥有上千万条记录的大型数据库。</li>
<li>MySQL 使用标准的 SQL 数据语言形式。</li>
<li>MySQL 可以运行于多个系统上，并且支持多种语言。</li>
</ul>
<h3 id="_1-2-rdbms-术语" tabindex="-1"><a class="header-anchor" href="#_1-2-rdbms-术语" aria-hidden="true">#</a> 1.2 RDBMS 术语</h3>
<p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220319223457.png" alt="RDMBS"></p>
<ul>
<li>数据库: 数据库是一些关联表的集合。</li>
<li>数据表: 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格。</li>
<li>列: 一列(数据元素) 包含了相同类型的数据, 例如邮政编码的数据。</li>
<li>行：一行（=元组，或记录）是一组相关的数据，例如一条用户订阅的数据。</li>
<li>主键：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。</li>
</ul>
<h2 id="二、mysql使用" tabindex="-1"><a class="header-anchor" href="#二、mysql使用" aria-hidden="true">#</a> 二、Mysql使用</h2>
<h3 id="_2-1-mysql连接" tabindex="-1"><a class="header-anchor" href="#_2-1-mysql连接" aria-hidden="true">#</a> 2.1 mysql连接</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mysql -u root -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-创建数据库" tabindex="-1"><a class="header-anchor" href="#_2-2-创建数据库" aria-hidden="true">#</a> 2.2 创建数据库</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>create database <span class="token operator">&lt;</span>要创建的数据库名<span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>创建 <code v-pre>newtable</code> 数据库</p>
</blockquote>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> newtable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-查看已有的数据库" tabindex="-1"><a class="header-anchor" href="#_2-3-查看已有的数据库" aria-hidden="true">#</a> 2.3 查看已有的数据库</h3>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">databases</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>控制台会打印出已经创建的数据库</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token operator">+</span><span class="token comment">--------------------+</span>
<span class="token operator">|</span> <span class="token keyword">Database</span>           <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------+</span>
<span class="token operator">|</span> eggapi             <span class="token operator">|</span>
<span class="token operator">|</span> information_schema <span class="token operator">|</span>
<span class="token operator">|</span> mailsystem         <span class="token operator">|</span>
<span class="token operator">|</span> mysql              <span class="token operator">|</span>
<span class="token operator">|</span> newtable           <span class="token operator">|</span>
<span class="token operator">|</span> performance_schema <span class="token operator">|</span>
<span class="token operator">|</span> sys                <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------+</span>
<span class="token number">7</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-删除数据库" tabindex="-1"><a class="header-anchor" href="#_2-4-删除数据库" aria-hidden="true">#</a> 2.4 删除数据库</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>drop database <span class="token operator">&lt;</span>数据库名<span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>删除 <code v-pre>newtable</code> 数据库</p>
</blockquote>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">database</span> newtable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-5-选择数据库" tabindex="-1"><a class="header-anchor" href="#_2-5-选择数据库" aria-hidden="true">#</a> 2.5 选择数据库</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>use <span class="token operator">&lt;</span>数据库名<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>使用 <code v-pre>eggapi</code> 数据库</p>
</blockquote>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">use</span> eggapi<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-6-创建数据表" tabindex="-1"><a class="header-anchor" href="#_2-6-创建数据表" aria-hidden="true">#</a> 2.6 创建数据表</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>CREATE TABLE table_name <span class="token punctuation">(</span>column_name column_type<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>创建名为 <code v-pre>newtable</code> 的 数据表</p>
</blockquote>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>newtable<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
 <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">INT</span> <span class="token keyword">UNSIGNED</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
 <span class="token identifier"><span class="token punctuation">`</span>title<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
 <span class="token identifier"><span class="token punctuation">`</span>author<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
 <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span> <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-删除数据表" tabindex="-1"><a class="header-anchor" href="#_2-7-删除数据表" aria-hidden="true">#</a> 2.7 删除数据表</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>drop table <span class="token operator">&lt;</span>table_name<span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>删除 <code v-pre>newtable</code> 数据表</p>
</blockquote>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">table</span> newtable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
