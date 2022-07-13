<template><div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>Egg.js为企业级框架和应用而生的Node.js框架，Egg（简写）奉行【约定优于配置】的框架，按照一套同意的约定进行应用开发。</p>
</div>
<!-- more -->
<h2 id="一、-egg-js项目创建与项目结构" tabindex="-1"><a class="header-anchor" href="#一、-egg-js项目创建与项目结构" aria-hidden="true">#</a> 一、 Egg.js项目创建与项目结构</h2>
<h3 id="_1-1-安装" tabindex="-1"><a class="header-anchor" href="#_1-1-安装" aria-hidden="true">#</a> 1.1 安装</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> egg-example <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> egg-example
<span class="token function">npm</span> init egg --type<span class="token operator">=</span>simple
<span class="token function">npm</span> i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">警告</p>
<p>如果项目报如下错 <code v-pre>ESLint couldn't find the plugin &quot;eslint-plugin-jsdoc&quot;.</code>，先升级<code v-pre>npm</code>版本，保证<code v-pre>npm</code>版本大于<code v-pre>8.1.2</code>；删除 <code v-pre>node_modules</code>文件夹以及<code v-pre>pageage-lock.json</code>文件，重新<code v-pre>npm install</code>即可解决。</p>
</div>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-项目目录" tabindex="-1"><a class="header-anchor" href="#_1-2-项目目录" aria-hidden="true">#</a> 1.2 项目目录</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>- app                        - 项目开发的主目录，工作中的代码几乎都写在这里面
-- controller                -- 控制器目录，所有的控制器都写在这个里面
-- router.js                 -- 项目的路由文件
- config                     - 项目配置目录，比如插件相关的配置
-- config.default.js         -- 系统默认配置文件
-- plugin.js                 -- 插件配置文件
- logs                       -- 项目启动后的日志文件夹
- node_modules               - 项目的运行/开发依赖包，都会放到这个文件夹下面
- <span class="token builtin class-name">test</span>                       - 项目测试/单元测试时使用的目录
- run                        - 项目启动后生成的临时文件，用于保证项目正确运行
- typings                    - TypeScript配置目录，说明项目可以使用TS开发
- .eslintignore              - ESLint配置文件
- .eslintrc                  - ESLint配置文件，语法规则的详细配置文件
- .gitignore                 - git相关配置文件，比如那些文件归于Git管理，那些不需要
- jsconfig.js                - js配置文件，可以对所在目录下的所有JS代码个性化支持
- package.json               - 项目管理文件，包含包管理文件和命令管理文件
- README.MD                  - 项目描述文件  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-egg-js的controller的使用" tabindex="-1"><a class="header-anchor" href="#_1-3-egg-js的controller的使用" aria-hidden="true">#</a> 1.3 Egg.js的Controller的使用</h3>
<blockquote>
<p>Controller，也就是控制器，简单说Controller负责解析用户的输入，处理后返回相应的结果。</p>
</blockquote>
<p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322223024.png" alt="controller"></p>
<ul>
<li>配置页面的路由<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># app/router.js</span>
router.get<span class="token punctuation">(</span><span class="token string">'/list'</span>, controller.list.list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322223340.png" alt=""></li>
</ul>
<h2 id="二、请求与传参" tabindex="-1"><a class="header-anchor" href="#二、请求与传参" aria-hidden="true">#</a> 二、请求与传参</h2>
<h3 id="_2-1-路由params传参" tabindex="-1"><a class="header-anchor" href="#_2-1-路由params传参" aria-hidden="true">#</a> 2.1 路由params传参</h3>
<blockquote>
<p>在router中通过 <code v-pre>:id</code>，接受参数</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token comment"># app/router.js</span>
 router.get<span class="token punctuation">(</span><span class="token string">'/list/page/:id'</span>, controller.list.page<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>在controller中，通过<code v-pre>ctx.params</code>拿参数</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> id <span class="token operator">=</span> ctx<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
 ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">pageIndex: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322225753.png" alt=""></p>
<h3 id="_2-2-query的形式传参" tabindex="-1"><a class="header-anchor" href="#_2-2-query的形式传参" aria-hidden="true">#</a> 2.2 query的形式传参</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token comment"># app/router.js</span>
 router.get<span class="token punctuation">(</span><span class="token string">'/list/page2'</span>, controller.list.page2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>在controller中，通过<code v-pre>ctx.query</code>拿参数</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">page2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> page <span class="token operator">=</span> ctx<span class="token punctuation">.</span>query<span class="token punctuation">.</span>page<span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">pageIndex: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>page<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322230039.png" alt=""></p>
<h3 id="_2-3-返回状态码设置" tabindex="-1"><a class="header-anchor" href="#_2-3-返回状态码设置" aria-hidden="true">#</a> 2.3 返回状态码设置</h3>
<blockquote>
<p>通过<code v-pre>ctx.status</code>修改状态码</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ctx<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token number">201</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322230545.png" alt=""></p>
<h3 id="_2-4-post请求" tabindex="-1"><a class="header-anchor" href="#_2-4-post请求" aria-hidden="true">#</a> 2.4 post请求</h3>
<ul>
<li>
<p>配置csrf跨域相关配置</p>
<p>安装跨域插件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i egg-cors --savew
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置config下的plugin.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use strict'</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** <span class="token keyword">@type</span> Egg.EggPlugin */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// had enabled by egg</span>
  <span class="token comment">// static: {</span>
  <span class="token comment">//   enable: true,</span>
  <span class="token comment">// }</span>
  <span class="token literal-property property">cors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">'egg-cors'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置config下的config.default.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// config.default.js</span>
<span class="token keyword">const</span> userConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 关闭crsf,开启跨域</span>
  <span class="token literal-property property">security</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">csrf</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">domainWhiteList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 允许跨域方法</span>
  <span class="token literal-property property">cors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">allowMethods</span><span class="token operator">:</span> <span class="token string">'GET, PUT,  POST, DELETE, PATCH'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>post请求的参数</p>
<blockquote>
<p>在controller中，通过 ctx.request.body 拿参数</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">createUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>body<span class="token punctuation">,</span> <span class="token string">'post传参'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> age <span class="token punctuation">}</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    result<span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220324232947.png" alt=""></p>
</li>
</ul>
<h3 id="_2-5-编写service服务" tabindex="-1"><a class="header-anchor" href="#_2-5-编写service服务" aria-hidden="true">#</a> 2.5 编写Service服务</h3>
<h2 id="三、cookie与session" tabindex="-1"><a class="header-anchor" href="#三、cookie与session" aria-hidden="true">#</a> 三、Cookie与Session</h2>
<h2 id="四、-egg-js的中间件" tabindex="-1"><a class="header-anchor" href="#四、-egg-js的中间件" aria-hidden="true">#</a> 四、 Egg.js的中间件</h2>
<h2 id="五、-egg-js的extend" tabindex="-1"><a class="header-anchor" href="#五、-egg-js的extend" aria-hidden="true">#</a> 五、 Egg.js的Extend</h2>
<h2 id="六、-egg-js的定时任务" tabindex="-1"><a class="header-anchor" href="#六、-egg-js的定时任务" aria-hidden="true">#</a> 六、 Egg.js的定时任务</h2>
<h2 id="七、mysql查询" tabindex="-1"><a class="header-anchor" href="#七、mysql查询" aria-hidden="true">#</a> 七、Mysql查询</h2>
</div></template>
