import{_ as s,v as a,b as t,R as e}from"./chunks/framework.d048a433.js";const d=JSON.parse('{"title":"HTML","description":"","frontmatter":{"title":"HTML","date":"2022-03-16T00:00:00.000Z","sidebar":false,"tag":["Html"],"category":["前端","笔记"]},"headers":[],"relativePath":"FrontEnd/html.md","filePath":"FrontEnd/html.md","lastUpdated":1695364871000}'),l={name:"FrontEnd/html.md"},n=e('<h1 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-label="Permalink to &quot;HTML&quot;">​</a></h1><h2 id="image标签" tabindex="-1">Image标签 <a class="header-anchor" href="#image标签" aria-label="Permalink to &quot;Image标签&quot;">​</a></h2><h3 id="srcset与sizes的作用" tabindex="-1">srcset与sizes的作用 <a class="header-anchor" href="#srcset与sizes的作用" aria-label="Permalink to &quot;srcset与sizes的作用&quot;">​</a></h3><ul><li><p>介绍</p><p>响应式页面中经常用到根据屏幕密度设置不同的图片。这个时候肯定会用到image标签的srcset属性。srcset属性用于设置不同屏幕密度下，image自动加载不同的图片。用法如下：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image-128.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">srcset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image-128.png 1x, image-256.png 2x</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><p>使用上面的代码，就能实现在屏幕密度为1x的情况下加载image-128.png, 屏幕密度为2x时加载image-256.png。</p></li><li><p>新标准 按照上面的实现，不同的屏幕密度都要设置图片地址，目前的屏幕密度有1x,2x,3x,4x四种，如果每一个图片都设置4张图片的话，太麻烦了。所以就有了新的srcset标准。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image-128.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">srcset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image-128.png 128w, image-256.png 256w, image-512.png 512w</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">sizes</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(max-width: 360px) 340px, 128px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><p>其中srcset指定图片的地址和对应的图片质量。sizes用来设置图片的尺寸零界点。 对于srcset里面出现了一个w单位，可以理解成图片质量。如果可视区域小于这个质量的值，就可以使用，当然，浏览器会自动选择一个最小的可用图片。</p></li></ul>',4),o=[n];function p(r,c,i,D,F,m){return a(),t("div",null,o)}const g=s(l,[["render",p]]);export{d as __pageData,g as default};
