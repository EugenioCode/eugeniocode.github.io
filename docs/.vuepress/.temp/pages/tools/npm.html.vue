<template><div><h1 id="列举一些实用的npm包" tabindex="-1"><a class="header-anchor" href="#列举一些实用的npm包" aria-hidden="true">#</a> 列举一些实用的NPM包</h1>
<h2 id="_1-切换npm源的工具-——-nrm" tabindex="-1"><a class="header-anchor" href="#_1-切换npm源的工具-——-nrm" aria-hidden="true">#</a> 1. 切换<code v-pre>npm</code>源的工具 —— <code v-pre>nrm</code></h2>
<h3 id="_1-1-nrm的安装" tabindex="-1"><a class="header-anchor" href="#_1-1-nrm的安装" aria-hidden="true">#</a> 1.1 <code v-pre>nrm</code>的安装</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g nrm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-查看可选npm源" tabindex="-1"><a class="header-anchor" href="#_1-2-查看可选npm源" aria-hidden="true">#</a> 1.2 查看可选npm源</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nrm <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220321225239.png" alt="可选的npm源"></p>
<h3 id="_1-3-切换npm源" tabindex="-1"><a class="header-anchor" href="#_1-3-切换npm源" aria-hidden="true">#</a> 1.3 切换npm源</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nrm use <span class="token function">npm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220321225525.png" alt="切换npm源"></p>
<h3 id="_1-4-增加npm源" tabindex="-1"><a class="header-anchor" href="#_1-4-增加npm源" aria-hidden="true">#</a> 1.4 增加npm源</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nrm <span class="token function">add</span> <span class="token operator">&lt;</span>name<span class="token operator">></span> <span class="token operator">&lt;</span>url<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-5-删除npm源" tabindex="-1"><a class="header-anchor" href="#_1-5-删除npm源" aria-hidden="true">#</a> 1.5 删除npm源</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nrm del <span class="token operator">&lt;</span>name<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-6-测试npm源速度" tabindex="-1"><a class="header-anchor" href="#_1-6-测试npm源速度" aria-hidden="true">#</a> 1.6 测试npm源速度</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nrm <span class="token builtin class-name">test</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>name<span class="token operator">></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220321230122.png" alt="测试npm源速度"></p>
<h2 id="_2-切换node版本的工具-——-n" tabindex="-1"><a class="header-anchor" href="#_2-切换node版本的工具-——-n" aria-hidden="true">#</a> 2. 切换<code v-pre>node</code>版本的工具 —— <code v-pre>n</code></h2>
<h3 id="_2-1-安装-n" tabindex="-1"><a class="header-anchor" href="#_2-1-安装-n" aria-hidden="true">#</a> 2.1 安装 <code v-pre>n</code></h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-查看可用的-node-版本" tabindex="-1"><a class="header-anchor" href="#_2-2-查看可用的-node-版本" aria-hidden="true">#</a> 2.2 查看可用的 <code v-pre>node</code> 版本</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>n 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220624180809.png" alt=""></p>
<h3 id="_2-3-基本命令" tabindex="-1"><a class="header-anchor" href="#_2-3-基本命令" aria-hidden="true">#</a> 2.3 基本命令</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>// 稳定版本
n stable
 
// 最新版
n lastest
 
// 指定版本
n <span class="token number">16.15</span>.1

// 删除指定版本
<span class="token function">sudo</span> n <span class="token function">rm</span> <span class="token number">16.15</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
