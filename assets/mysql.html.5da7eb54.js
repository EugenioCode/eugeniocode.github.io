import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as n,e}from"./app.09610657.js";const l={},o=e(`<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>MySQL \u662F\u6700\u6D41\u884C\u7684\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u5728 WEB \u5E94\u7528\u65B9\u9762 MySQL \u662F\u6700\u597D\u7684 RDBMS(Relational Database Management System\uFF1A\u5173\u7CFB\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF)\u5E94\u7528\u8F6F\u4EF6\u4E4B\u4E00\u3002</p></div><h1 id="mysql\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#mysql\u4F7F\u7528" aria-hidden="true">#</a> Mysql\u4F7F\u7528</h1><h2 id="\u4E00\u3001\u57FA\u7840\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u57FA\u7840\u77E5\u8BC6" aria-hidden="true">#</a> \u4E00\u3001\u57FA\u7840\u77E5\u8BC6</h2><h3 id="_1-1-\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6982\u5FF5" aria-hidden="true">#</a> 1.1 \u6982\u5FF5</h3><ul><li>MySQL \u662F\u5F00\u6E90\u7684\uFF0C\u76EE\u524D\u96B6\u5C5E\u4E8E Oracle \u65D7\u4E0B\u4EA7\u54C1\u3002</li><li>MySQL \u652F\u6301\u5927\u578B\u7684\u6570\u636E\u5E93\u3002\u53EF\u4EE5\u5904\u7406\u62E5\u6709\u4E0A\u5343\u4E07\u6761\u8BB0\u5F55\u7684\u5927\u578B\u6570\u636E\u5E93\u3002</li><li>MySQL \u4F7F\u7528\u6807\u51C6\u7684 SQL \u6570\u636E\u8BED\u8A00\u5F62\u5F0F\u3002</li><li>MySQL \u53EF\u4EE5\u8FD0\u884C\u4E8E\u591A\u4E2A\u7CFB\u7EDF\u4E0A\uFF0C\u5E76\u4E14\u652F\u6301\u591A\u79CD\u8BED\u8A00\u3002</li></ul><h3 id="_1-2-rdbms-\u672F\u8BED" tabindex="-1"><a class="header-anchor" href="#_1-2-rdbms-\u672F\u8BED" aria-hidden="true">#</a> 1.2 RDBMS \u672F\u8BED</h3><p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220319223457.png" alt="RDMBS"></p><ul><li>\u6570\u636E\u5E93: \u6570\u636E\u5E93\u662F\u4E00\u4E9B\u5173\u8054\u8868\u7684\u96C6\u5408\u3002</li><li>\u6570\u636E\u8868: \u8868\u662F\u6570\u636E\u7684\u77E9\u9635\u3002\u5728\u4E00\u4E2A\u6570\u636E\u5E93\u4E2D\u7684\u8868\u770B\u8D77\u6765\u50CF\u4E00\u4E2A\u7B80\u5355\u7684\u7535\u5B50\u8868\u683C\u3002</li><li>\u5217: \u4E00\u5217(\u6570\u636E\u5143\u7D20) \u5305\u542B\u4E86\u76F8\u540C\u7C7B\u578B\u7684\u6570\u636E, \u4F8B\u5982\u90AE\u653F\u7F16\u7801\u7684\u6570\u636E\u3002</li><li>\u884C\uFF1A\u4E00\u884C\uFF08=\u5143\u7EC4\uFF0C\u6216\u8BB0\u5F55\uFF09\u662F\u4E00\u7EC4\u76F8\u5173\u7684\u6570\u636E\uFF0C\u4F8B\u5982\u4E00\u6761\u7528\u6237\u8BA2\u9605\u7684\u6570\u636E\u3002</li><li>\u4E3B\u952E\uFF1A\u4E3B\u952E\u662F\u552F\u4E00\u7684\u3002\u4E00\u4E2A\u6570\u636E\u8868\u4E2D\u53EA\u80FD\u5305\u542B\u4E00\u4E2A\u4E3B\u952E\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u4E3B\u952E\u6765\u67E5\u8BE2\u6570\u636E\u3002</li></ul><h2 id="\u4E8C\u3001mysql\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001mysql\u4F7F\u7528" aria-hidden="true">#</a> \u4E8C\u3001Mysql\u4F7F\u7528</h2><h3 id="_2-1-mysql\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#_2-1-mysql\u8FDE\u63A5" aria-hidden="true">#</a> 2.1 mysql\u8FDE\u63A5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql -u root -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-\u521B\u5EFA\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_2-2-\u521B\u5EFA\u6570\u636E\u5E93" aria-hidden="true">#</a> 2.2 \u521B\u5EFA\u6570\u636E\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>create database <span class="token operator">&lt;</span>\u8981\u521B\u5EFA\u7684\u6570\u636E\u5E93\u540D<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u521B\u5EFA <code>newtable</code> \u6570\u636E\u5E93</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> newtable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-\u67E5\u770B\u5DF2\u6709\u7684\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_2-3-\u67E5\u770B\u5DF2\u6709\u7684\u6570\u636E\u5E93" aria-hidden="true">#</a> 2.3 \u67E5\u770B\u5DF2\u6709\u7684\u6570\u636E\u5E93</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">databases</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u63A7\u5236\u53F0\u4F1A\u6253\u5370\u51FA\u5DF2\u7ECF\u521B\u5EFA\u7684\u6570\u636E\u5E93</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token operator">+</span><span class="token comment">--------------------+</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-\u5220\u9664\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5220\u9664\u6570\u636E\u5E93" aria-hidden="true">#</a> 2.4 \u5220\u9664\u6570\u636E\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>drop database <span class="token operator">&lt;</span>\u6570\u636E\u5E93\u540D<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5220\u9664 <code>newtable</code> \u6570\u636E\u5E93</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">database</span> newtable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-5-\u9009\u62E9\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_2-5-\u9009\u62E9\u6570\u636E\u5E93" aria-hidden="true">#</a> 2.5 \u9009\u62E9\u6570\u636E\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>use <span class="token operator">&lt;</span>\u6570\u636E\u5E93\u540D<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u4F7F\u7528 <code>eggapi</code> \u6570\u636E\u5E93</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">use</span> eggapi<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-6-\u521B\u5EFA\u6570\u636E\u8868" tabindex="-1"><a class="header-anchor" href="#_2-6-\u521B\u5EFA\u6570\u636E\u8868" aria-hidden="true">#</a> 2.6 \u521B\u5EFA\u6570\u636E\u8868</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>CREATE TABLE table_name <span class="token punctuation">(</span>column_name column_type<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u521B\u5EFA\u540D\u4E3A <code>newtable</code> \u7684 \u6570\u636E\u8868</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>newtable<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
 <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">INT</span> <span class="token keyword">UNSIGNED</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
 <span class="token identifier"><span class="token punctuation">\`</span>title<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
 <span class="token identifier"><span class="token punctuation">\`</span>author<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
 <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span> <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-\u5220\u9664\u6570\u636E\u8868" tabindex="-1"><a class="header-anchor" href="#_2-7-\u5220\u9664\u6570\u636E\u8868" aria-hidden="true">#</a> 2.7 \u5220\u9664\u6570\u636E\u8868</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>drop table <span class="token operator">&lt;</span>table_name<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5220\u9664 <code>newtable</code> \u6570\u636E\u8868</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">table</span> newtable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,35),t=[o];function p(i,c){return s(),n("div",null,t)}var u=a(l,[["render",p],["__file","mysql.html.vue"]]);export{u as default};
