import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.09610657.js";const t={},p=e(`<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>Egg.js\u4E3A\u4F01\u4E1A\u7EA7\u6846\u67B6\u548C\u5E94\u7528\u800C\u751F\u7684Node.js\u6846\u67B6\uFF0CEgg\uFF08\u7B80\u5199\uFF09\u5949\u884C\u3010\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E\u3011\u7684\u6846\u67B6\uFF0C\u6309\u7167\u4E00\u5957\u540C\u610F\u7684\u7EA6\u5B9A\u8FDB\u884C\u5E94\u7528\u5F00\u53D1\u3002</p></div><h2 id="\u4E00\u3001-egg-js\u9879\u76EE\u521B\u5EFA\u4E0E\u9879\u76EE\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001-egg-js\u9879\u76EE\u521B\u5EFA\u4E0E\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a> \u4E00\u3001 Egg.js\u9879\u76EE\u521B\u5EFA\u4E0E\u9879\u76EE\u7ED3\u6784</h2><h3 id="_1-1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5B89\u88C5" aria-hidden="true">#</a> 1.1 \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> egg-example <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> egg-example
<span class="token function">npm</span> init egg --type<span class="token operator">=</span>simple
<span class="token function">npm</span> i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u5982\u679C\u9879\u76EE\u62A5\u5982\u4E0B\u9519 <code>ESLint couldn&#39;t find the plugin &quot;eslint-plugin-jsdoc&quot;.</code>\uFF0C\u5148\u5347\u7EA7<code>npm</code>\u7248\u672C\uFF0C\u4FDD\u8BC1<code>npm</code>\u7248\u672C\u5927\u4E8E<code>8.1.2</code>\uFF1B\u5220\u9664 <code>node_modules</code>\u6587\u4EF6\u5939\u4EE5\u53CA<code>pageage-lock.json</code>\u6587\u4EF6\uFF0C\u91CD\u65B0<code>npm install</code>\u5373\u53EF\u89E3\u51B3\u3002</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-\u9879\u76EE\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_1-2-\u9879\u76EE\u76EE\u5F55" aria-hidden="true">#</a> 1.2 \u9879\u76EE\u76EE\u5F55</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>- app                        - \u9879\u76EE\u5F00\u53D1\u7684\u4E3B\u76EE\u5F55\uFF0C\u5DE5\u4F5C\u4E2D\u7684\u4EE3\u7801\u51E0\u4E4E\u90FD\u5199\u5728\u8FD9\u91CC\u9762
-- controller                -- \u63A7\u5236\u5668\u76EE\u5F55\uFF0C\u6240\u6709\u7684\u63A7\u5236\u5668\u90FD\u5199\u5728\u8FD9\u4E2A\u91CC\u9762
-- router.js                 -- \u9879\u76EE\u7684\u8DEF\u7531\u6587\u4EF6
- config                     - \u9879\u76EE\u914D\u7F6E\u76EE\u5F55\uFF0C\u6BD4\u5982\u63D2\u4EF6\u76F8\u5173\u7684\u914D\u7F6E
-- config.default.js         -- \u7CFB\u7EDF\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6
-- plugin.js                 -- \u63D2\u4EF6\u914D\u7F6E\u6587\u4EF6
- logs                       -- \u9879\u76EE\u542F\u52A8\u540E\u7684\u65E5\u5FD7\u6587\u4EF6\u5939
- node_modules               - \u9879\u76EE\u7684\u8FD0\u884C/\u5F00\u53D1\u4F9D\u8D56\u5305\uFF0C\u90FD\u4F1A\u653E\u5230\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0B\u9762
- <span class="token builtin class-name">test</span>                       - \u9879\u76EE\u6D4B\u8BD5/\u5355\u5143\u6D4B\u8BD5\u65F6\u4F7F\u7528\u7684\u76EE\u5F55
- run                        - \u9879\u76EE\u542F\u52A8\u540E\u751F\u6210\u7684\u4E34\u65F6\u6587\u4EF6\uFF0C\u7528\u4E8E\u4FDD\u8BC1\u9879\u76EE\u6B63\u786E\u8FD0\u884C
- typings                    - TypeScript\u914D\u7F6E\u76EE\u5F55\uFF0C\u8BF4\u660E\u9879\u76EE\u53EF\u4EE5\u4F7F\u7528TS\u5F00\u53D1
- .eslintignore              - ESLint\u914D\u7F6E\u6587\u4EF6
- .eslintrc                  - ESLint\u914D\u7F6E\u6587\u4EF6\uFF0C\u8BED\u6CD5\u89C4\u5219\u7684\u8BE6\u7EC6\u914D\u7F6E\u6587\u4EF6
- .gitignore                 - git\u76F8\u5173\u914D\u7F6E\u6587\u4EF6\uFF0C\u6BD4\u5982\u90A3\u4E9B\u6587\u4EF6\u5F52\u4E8EGit\u7BA1\u7406\uFF0C\u90A3\u4E9B\u4E0D\u9700\u8981
- jsconfig.js                - js\u914D\u7F6E\u6587\u4EF6\uFF0C\u53EF\u4EE5\u5BF9\u6240\u5728\u76EE\u5F55\u4E0B\u7684\u6240\u6709JS\u4EE3\u7801\u4E2A\u6027\u5316\u652F\u6301
- package.json               - \u9879\u76EE\u7BA1\u7406\u6587\u4EF6\uFF0C\u5305\u542B\u5305\u7BA1\u7406\u6587\u4EF6\u548C\u547D\u4EE4\u7BA1\u7406\u6587\u4EF6
- README.MD                  - \u9879\u76EE\u63CF\u8FF0\u6587\u4EF6  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-egg-js\u7684controller\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-3-egg-js\u7684controller\u7684\u4F7F\u7528" aria-hidden="true">#</a> 1.3 Egg.js\u7684Controller\u7684\u4F7F\u7528</h3><blockquote><p>Controller\uFF0C\u4E5F\u5C31\u662F\u63A7\u5236\u5668\uFF0C\u7B80\u5355\u8BF4Controller\u8D1F\u8D23\u89E3\u6790\u7528\u6237\u7684\u8F93\u5165\uFF0C\u5904\u7406\u540E\u8FD4\u56DE\u76F8\u5E94\u7684\u7ED3\u679C\u3002</p></blockquote><p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322223024.png" alt="controller"></p><ul><li>\u914D\u7F6E\u9875\u9762\u7684\u8DEF\u7531<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># app/router.js</span>
router.get<span class="token punctuation">(</span><span class="token string">&#39;/list&#39;</span>, controller.list.list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322223340.png" alt=""></li></ul><h2 id="\u4E8C\u3001\u8BF7\u6C42\u4E0E\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u8BF7\u6C42\u4E0E\u4F20\u53C2" aria-hidden="true">#</a> \u4E8C\u3001\u8BF7\u6C42\u4E0E\u4F20\u53C2</h2><h3 id="_2-1-\u8DEF\u7531params\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#_2-1-\u8DEF\u7531params\u4F20\u53C2" aria-hidden="true">#</a> 2.1 \u8DEF\u7531params\u4F20\u53C2</h3><blockquote><p>\u5728router\u4E2D\u901A\u8FC7 <code>:id</code>\uFF0C\u63A5\u53D7\u53C2\u6570</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token comment"># app/router.js</span>
 router.get<span class="token punctuation">(</span><span class="token string">&#39;/list/page/:id&#39;</span>, controller.list.page<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5728controller\u4E2D\uFF0C\u901A\u8FC7<code>ctx.params</code>\u62FF\u53C2\u6570</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> id <span class="token operator">=</span> ctx<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
 ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">pageIndex: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322225753.png" alt=""></p><h3 id="_2-2-query\u7684\u5F62\u5F0F\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#_2-2-query\u7684\u5F62\u5F0F\u4F20\u53C2" aria-hidden="true">#</a> 2.2 query\u7684\u5F62\u5F0F\u4F20\u53C2</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token comment"># app/router.js</span>
 router.get<span class="token punctuation">(</span><span class="token string">&#39;/list/page2&#39;</span>, controller.list.page2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5728controller\u4E2D\uFF0C\u901A\u8FC7<code>ctx.query</code>\u62FF\u53C2\u6570</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">page2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> page <span class="token operator">=</span> ctx<span class="token punctuation">.</span>query<span class="token punctuation">.</span>page<span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">pageIndex: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>page<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322230039.png" alt=""></p><h3 id="_2-3-\u8FD4\u56DE\u72B6\u6001\u7801\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-3-\u8FD4\u56DE\u72B6\u6001\u7801\u8BBE\u7F6E" aria-hidden="true">#</a> 2.3 \u8FD4\u56DE\u72B6\u6001\u7801\u8BBE\u7F6E</h3><blockquote><p>\u901A\u8FC7<code>ctx.status</code>\u4FEE\u6539\u72B6\u6001\u7801</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ctx<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token number">201</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220322230545.png" alt=""></p><h3 id="_2-4-post\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_2-4-post\u8BF7\u6C42" aria-hidden="true">#</a> 2.4 post\u8BF7\u6C42</h3><ul><li><p>\u914D\u7F6Ecsrf\u8DE8\u57DF\u76F8\u5173\u914D\u7F6E</p><p>\u5B89\u88C5\u8DE8\u57DF\u63D2\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i egg-cors --savew
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u914D\u7F6Econfig\u4E0B\u7684plugin.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** <span class="token keyword">@type</span> Egg.EggPlugin */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// had enabled by egg</span>
  <span class="token comment">// static: {</span>
  <span class="token comment">//   enable: true,</span>
  <span class="token comment">// }</span>
  <span class="token literal-property property">cors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">&#39;egg-cors&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6Econfig\u4E0B\u7684config.default.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// config.default.js</span>
<span class="token keyword">const</span> userConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5173\u95EDcrsf,\u5F00\u542F\u8DE8\u57DF</span>
  <span class="token literal-property property">security</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">csrf</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">domainWhiteList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5141\u8BB8\u8DE8\u57DF\u65B9\u6CD5</span>
  <span class="token literal-property property">cors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">allowMethods</span><span class="token operator">:</span> <span class="token string">&#39;GET, PUT,  POST, DELETE, PATCH&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>post\u8BF7\u6C42\u7684\u53C2\u6570</p><blockquote><p>\u5728controller\u4E2D\uFF0C\u901A\u8FC7 ctx.request.body \u62FF\u53C2\u6570</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">createUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>body<span class="token punctuation">,</span> <span class="token string">&#39;post\u4F20\u53C2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> age <span class="token punctuation">}</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    result<span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220324232947.png" alt=""></p></li></ul><h3 id="_2-5-\u7F16\u5199service\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_2-5-\u7F16\u5199service\u670D\u52A1" aria-hidden="true">#</a> 2.5 \u7F16\u5199Service\u670D\u52A1</h3><h2 id="\u4E09\u3001cookie\u4E0Esession" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001cookie\u4E0Esession" aria-hidden="true">#</a> \u4E09\u3001Cookie\u4E0ESession</h2><h2 id="\u56DB\u3001-egg-js\u7684\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001-egg-js\u7684\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u56DB\u3001 Egg.js\u7684\u4E2D\u95F4\u4EF6</h2><h2 id="\u4E94\u3001-egg-js\u7684extend" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001-egg-js\u7684extend" aria-hidden="true">#</a> \u4E94\u3001 Egg.js\u7684Extend</h2><h2 id="\u516D\u3001-egg-js\u7684\u5B9A\u65F6\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001-egg-js\u7684\u5B9A\u65F6\u4EFB\u52A1" aria-hidden="true">#</a> \u516D\u3001 Egg.js\u7684\u5B9A\u65F6\u4EFB\u52A1</h2><h2 id="\u4E03\u3001mysql\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u4E03\u3001mysql\u67E5\u8BE2" aria-hidden="true">#</a> \u4E03\u3001Mysql\u67E5\u8BE2</h2>`,36),i=[p];function o(c,l){return s(),a("div",null,i)}var d=n(t,[["render",o],["__file","egg.html.vue"]]);export{d as default};
