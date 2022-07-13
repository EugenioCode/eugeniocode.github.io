<template><div><!-- more -->
<h2 id="开发环境搭建-mac电脑" tabindex="-1"><a class="header-anchor" href="#开发环境搭建-mac电脑" aria-hidden="true">#</a> 开发环境搭建(Mac电脑)</h2>
<p>:::: tabs cache-lifetime=&quot;10&quot; :options=&quot;{ useUrlFragment: false }&quot;</p>
<p>::: tab &quot;ios&quot;</p>
<blockquote>
<p>必须安装的依赖有：Node、Watchman、Xcode 和 CocoaPods</p>
</blockquote>
<ul>
<li>
<p>Node &amp; Watchman</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token function">node</span>

brew <span class="token function">install</span> watchman
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Xcode</p>
<p>可以通过 App Store 或是到Apple 开发者官网上下载</p>
</li>
<li>
<p>CocoaPods</p>
<blockquote>
<p>CocoaPods是用 Ruby 编写的包管理器（可以理解为针对 iOS 的 npm）</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>brew <span class="token function">install</span> cocoapods
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p>:::</p>
<p>::: tab &quot;android&quot; id=&quot;second-tab&quot;</p>
<blockquote>
<p>必须安装的依赖有：Node、Watchman、Java Development Kit 和 Android Studio</p>
</blockquote>
<ul>
<li>Node &amp; Watchman<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token function">node</span>

brew <span class="token function">install</span> watchman
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>Java Development Kit<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>brew tap homebrew/cask-versions

brew <span class="token function">install</span> --cask zulu11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>React Native 需要 Java Development Kit [JDK] 11。你可以在命令行中输入 <code v-pre>javac -version</code>（请注意是 javac，不是 java）来查看你当前安装的 JDK 版本。
<blockquote>
<p>低于 0.67 版本的 React Native 需要 JDK 1.8 版本（官方也称 8 版本）。</p>
</blockquote>
</li>
<li>Android Studio
<ul>
<li>
<p>安装 <a href="https://developer.android.google.cn/studio/" target="_blank" rel="noopener noreferrer">Android Studio<ExternalLinkIcon/></a></p>
</li>
<li>
<p>安装 <code v-pre>Android SDK</code>
目前编译 React Native 应用需要的是<code v-pre>Android 11 (R)</code>版本的 SDK</p>
<blockquote>
<p>SDK Manager 还可以在 Android Studio 的&quot;Preferences&quot;菜单中找到。具体路径是Appearance &amp; Behavior → System Settings → Android SDK。</p>
</blockquote>
<ol>
<li>
<p>展开Android 11 (R)选项，确保勾选了下面这些组件：
<code v-pre>Android SDK Platform 30</code>
<code v-pre>Intel x86 Atom_64 System Image</code>（官方模拟器镜像文件，使用非官方模拟器不需要安装此组件）</p>
</li>
<li>
<p>然后点击&quot;SDK Tools&quot;选项卡，同样勾中右下角的&quot;Show Package Details&quot;。展开&quot;Android SDK Build-Tools&quot;选项，确保选中了 React Native 所必须的30.0.2版本。你可以同时安装多个其他版本。</p>
</li>
<li>
<p>还是在&quot;SDK Tools&quot;选项卡，点击&quot;NDK (Side by side)&quot;，同样勾中右下角的&quot;Show Package Details&quot;，选择20.1.5948944版本。最后再勾选上&quot;Android SDK Command-line Tools (latest)&quot;。</p>
</li>
<li>
<p>点击&quot;Apply&quot;来下载和安装选中的这些组件。</p>
</li>
</ol>
</li>
<li>
<p>配置 ANDROID_SDK_ROOT 环境变量
React Native 需要通过环境变量来了解你的 Android SDK 装在什么路径，从而正常进行编译。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 如果你不是通过Android Studio安装的sdk，则其路径可能不同，请自行确定清楚</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ANDROID_SDK_ROOT</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/Library/Android/sdk
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ANDROID_SDK_ROOT</span>/emulator
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ANDROID_SDK_ROOT</span>/tools
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ANDROID_SDK_ROOT</span>/tools/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ANDROID_SDK_ROOT</span>/platform-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<p>:::</p>
<p>::::</p>
<h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h2>
<ul>
<li>
<p>创建新项目</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx react-native init AwesomeProject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>[可选参数] 指定版本或项目模板</p>
<p>你可以使用--version参数（注意是两个杠）创建指定版本的项目。注意版本号必须精确到两个小数点。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx react-native init AwesomeProject --version X.XX.X
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还可以使用--template来使用一些社区提供的模板，例如带有TypeScript配置的：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx react-native init AwesomeTSProject --template react-native-template-typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>编译并运行 React Native 应用
:::: tabs cache-lifetime=&quot;10&quot; :options=&quot;{ useUrlFragment: false }&quot;</p>
<p>::: tab &quot;ios&quot;</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  <span class="token builtin class-name">cd</span> AwesomeProject
  <span class="token function">yarn</span> ios
  <span class="token comment"># 或者</span>
  <span class="token function">yarn</span> react-native run-ios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220627173034.png" width="300" align=center>
:::
::: tab "android"
```shell
  cd AwesomeProject
  yarn android
  # 或者
  yarn react-native run-android
```
<img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220627173900.png" width="300" align=center>
:::
</li>
</ul>
<h2 id="react-native-样式与组件" tabindex="-1"><a class="header-anchor" href="#react-native-样式与组件" aria-hidden="true">#</a> React Native 样式与组件</h2>
<h3 id="stylesheet" tabindex="-1"><a class="header-anchor" href="#stylesheet" aria-hidden="true">#</a> StyleSheet</h3>
<p>引入：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>StyleSheet<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> View<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>申明：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">sectionTitle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">'600'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View<span class="token operator">></span>
      <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>sectionTitle<span class="token punctuation">}</span><span class="token operator">></span>hello world<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flexbox" tabindex="-1"><a class="header-anchor" href="#flexbox" aria-hidden="true">#</a> FlexBox</h3>
<h3 id="组件与api" tabindex="-1"><a class="header-anchor" href="#组件与api" aria-hidden="true">#</a> 组件与API</h3>
<h3 id="路由与导航" tabindex="-1"><a class="header-anchor" href="#路由与导航" aria-hidden="true">#</a> 路由与导航</h3>
<h2 id="报错解决" tabindex="-1"><a class="header-anchor" href="#报错解决" aria-hidden="true">#</a> 报错解决</h2>
<h3 id="cocoapods依赖无法下载问题" tabindex="-1"><a class="header-anchor" href="#cocoapods依赖无法下载问题" aria-hidden="true">#</a> CocoaPods依赖无法下载问题</h3>
<h4 id="如果创建项目出现下面的报错-说明ios相关的依赖无法被下载" tabindex="-1"><a class="header-anchor" href="#如果创建项目出现下面的报错-说明ios相关的依赖无法被下载" aria-hidden="true">#</a> 如果创建项目出现下面的报错，说明ios相关的依赖无法被下载</h4>
<p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220630091503.png" alt=""></p>
<ul>
<li>可以参考的解决方案
<ol>
<li>使用稳定的代理工具，多尝试几次安装。</li>
<li>使用国内的<code v-pre>Pods</code>源</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> ~/.cocoapods/repos 
$ pod repo remove master
$ <span class="token function">git</span> clone https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>进入自己的工程，在自己工程的podFile第一行加上：<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> <span class="token string">'https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h3 id="解决rn-运行报错-no-bundle-url-present-错误解决方案" tabindex="-1"><a class="header-anchor" href="#解决rn-运行报错-no-bundle-url-present-错误解决方案" aria-hidden="true">#</a> 解决RN 运行报错 <code v-pre>No bundle url present</code>.错误解决方案</h3>
<ol>
<li>检查本地是否配置了 host 一定需要配置。mac 上直接安装一个SwitchHosts.</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1   localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>排查是不是端口被占用了</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">lsof</span> -i:8081 //查看端口 

<span class="token function">sudo</span> <span class="token function">kill</span> -9 <span class="token punctuation">[</span>端口号<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ios引入-react-native-vector-icons-报错" tabindex="-1"><a class="header-anchor" href="#ios引入-react-native-vector-icons-报错" aria-hidden="true">#</a> ios引入 <code v-pre>react-native-vector-icons</code> 报错</h3>
<ol>
<li>
<p>安装包后 运行 <code v-pre>npx pod-install ios</code>关联到ios文件夹中</p>
</li>
<li>
<p>使用xcode打开项目下的ios目录，将<code v-pre>node_modules/react-native-vector-icons/Fonts</code>文件夹复制到xcode的项目目录下</p>
<blockquote>
<p>Add to target 中的项目名不要勾选</p>
</blockquote>
<p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220527172138.png" alt=""></p>
</li>
<li>
<p>打开Xcode，使用源代码模式编辑 info.plist 文件</p>
</li>
</ol>
<div class="language-info ext-info line-numbers-mode"><pre v-pre class="language-info"><code>&lt;key&gt;UIAppFonts&lt;/key&gt;
&lt;array&gt;
  &lt;string&gt;AntDesign.ttf&lt;/string&gt;
  &lt;string&gt;Entypo.ttf&lt;/string&gt;
  &lt;string&gt;EvilIcons.ttf&lt;/string&gt;
  &lt;string&gt;Feather.ttf&lt;/string&gt;
  &lt;string&gt;FontAwesome.ttf&lt;/string&gt;
  &lt;string&gt;FontAwesome5_Brands.ttf&lt;/string&gt;
  &lt;string&gt;FontAwesome5_Regular.ttf&lt;/string&gt;
  &lt;string&gt;FontAwesome5_Solid.ttf&lt;/string&gt;
  &lt;string&gt;Foundation.ttf&lt;/string&gt;
  &lt;string&gt;Ionicons.ttf&lt;/string&gt;
  &lt;string&gt;MaterialIcons.ttf&lt;/string&gt;
  &lt;string&gt;MaterialCommunityIcons.ttf&lt;/string&gt;
  &lt;string&gt;SimpleLineIcons.ttf&lt;/string&gt;
  &lt;string&gt;Octicons.ttf&lt;/string&gt;
  &lt;string&gt;Zocial.ttf&lt;/string&gt;
  &lt;string&gt;Fontisto.ttf&lt;/string&gt;
&lt;/array&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>使用Xcode编译一下iOS项目，如果没有任何错误就说明配置好了</li>
</ol>
</div></template>
