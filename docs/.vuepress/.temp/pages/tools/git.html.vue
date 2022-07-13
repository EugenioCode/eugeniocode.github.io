<template><div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。</p>
</div>
<!-- more -->
<h1 id="git使用" tabindex="-1"><a class="header-anchor" href="#git使用" aria-hidden="true">#</a> Git使用</h1>
<h2 id="一、基础知识" tabindex="-1"><a class="header-anchor" href="#一、基础知识" aria-hidden="true">#</a> 一、基础知识</h2>
<h3 id="_1-1-git环境配置" tabindex="-1"><a class="header-anchor" href="#_1-1-git环境配置" aria-hidden="true">#</a> 1.1 git环境配置</h3>
<ul>
<li>
<p>查看git版本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>配置个人的用户名称和电子邮件地址：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> config --global user.name <span class="token string">"eugeniocode"</span>

<span class="token function">git</span> config --global user.email <span class="token string">'eugeniocode@yeah.net'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>查看配置信息:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> config --list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>生成SSH Key:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ssh-keygen -t rsa -C <span class="token string">"eugeniocode@yeah.net"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_1-2-基本概念" tabindex="-1"><a class="header-anchor" href="#_1-2-基本概念" aria-hidden="true">#</a> 1.2 基本概念</h3>
<ul>
<li>工作区
<ul>
<li>本地项目存放文件的位置</li>
</ul>
</li>
<li>暂存区 (Index/Stage)
<ul>
<li>顾名思义就是暂时存放文件的地方，通过add命令将工作区的文件添加到缓冲区</li>
</ul>
</li>
<li>本地仓库（Repository）
<ul>
<li>通常情况下，我们使用commit命令可以将暂存区的文件添加到本地仓库</li>
</ul>
</li>
<li>远程仓库（Remote）
<ul>
<li>当使用GitHub、Gitee、GitLab等托管我们项目时，它就是一个远程仓库。</li>
<li>通常我们使用clone命令将远程仓库代码拷贝下来，本地代码更新后，通过push托送给远程仓库。</li>
</ul>
</li>
</ul>
<h3 id="_1-3-git工作流程图" tabindex="-1"><a class="header-anchor" href="#_1-3-git工作流程图" aria-hidden="true">#</a> 1.3 git工作流程图</h3>
<p><img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/iShot2022-03-16 22.57.15.png" alt="git工作流"></p>
<ul>
<li>命令如下：</li>
</ul>
<ol>
<li>clone(克隆): 从远程仓库中克隆代码到本地仓库</li>
<li>checkout(检出): 从本地仓库中检出一个仓库分支然后进行修订</li>
<li>add(添加): 在提交前先将代码提交到暂存区</li>
<li>commit(提交): 提交到本地仓库。本地仓库中保存修改的各个历史版本</li>
<li>fetch(抓取): 从远程库，抓取到本地仓库，不进行任何的合并动作，一般操作比较少。</li>
<li>pull(拉取): 从远程库拉到本地库，自动进行合并(merge)，然后放到到工作区，相当于fetch+merge</li>
<li>push(推送): 修改完成后，需要和团队成员共享代码时，将代码推送到远程仓库</li>
<li>reset(回退):用于回退版本，可以指定退回某一次提交的版本</li>
</ol>
<h2 id="二、仓库管理" tabindex="-1"><a class="header-anchor" href="#二、仓库管理" aria-hidden="true">#</a> 二、仓库管理</h2>
<h2 id="三、git常用命令" tabindex="-1"><a class="header-anchor" href="#三、git常用命令" aria-hidden="true">#</a> 三、Git常用命令</h2>
<h3 id="_3-1-添加-删除文件" tabindex="-1"><a class="header-anchor" href="#_3-1-添加-删除文件" aria-hidden="true">#</a> 3.1 添加/删除文件</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 查看工作区的文件状态</span>
<span class="token function">git</span> status

<span class="token comment"># 添加工作区的所有文件到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 添加指定文件到暂存区，多个文件用空格隔开</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 删除工作区指定文件，多个文件用空格隔开,并且将这次删除放入暂存区</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span>

<span class="token comment"># 停止追踪指定文件，但该文件会保留在工作区</span>
<span class="token function">git</span> <span class="token function">rm</span> --cached <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 改名文件，并且将这个改名放入暂存区</span>
<span class="token function">git</span> <span class="token function">mv</span> <span class="token punctuation">[</span>file-original<span class="token punctuation">]</span> <span class="token punctuation">[</span>file-renamed<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-提交代码" tabindex="-1"><a class="header-anchor" href="#_3-2-提交代码" aria-hidden="true">#</a> 3.2 提交代码</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 提交代码到仓库区，没有-m会进入vim编辑器</span>
<span class="token function">git</span> commit -m <span class="token string">'message'</span>

<span class="token comment"># 提交指定文件到仓库区，多个文件用空格隔开</span>
<span class="token function">git</span> commit <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span><span class="token punctuation">..</span>. -m <span class="token string">'message'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-分支" tabindex="-1"><a class="header-anchor" href="#_3-3-分支" aria-hidden="true">#</a> 3.3 分支</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 查看本地所有分支</span>
<span class="token function">git</span> branch

<span class="token comment"># 查看本地和远程所有分支</span>
<span class="token function">git</span> branch -a

<span class="token comment"># 新建一个分支并停留在当前分支</span>
<span class="token function">git</span> branch <span class="token punctuation">[</span>新分支名<span class="token punctuation">]</span>

<span class="token comment"># 切换到指定分支</span>
<span class="token function">git</span> checkout <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span>

<span class="token comment"># 新建一个分支并切换到该分支</span>
<span class="token function">git</span> checkout -b <span class="token punctuation">[</span>新分支名<span class="token punctuation">]</span>

<span class="token comment"># 合并制定分支到当前分支</span>
<span class="token function">git</span> merge <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-标签" tabindex="-1"><a class="header-anchor" href="#_3-4-标签" aria-hidden="true">#</a> 3.4 标签</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 查看所以标签</span>
<span class="token function">git</span> tag

<span class="token comment"># 新建一个标签</span>
<span class="token function">git</span> tab <span class="token punctuation">[</span>xxx<span class="token punctuation">]</span>

<span class="token comment"># 删除本地标签</span>
<span class="token function">git</span> tag -d <span class="token punctuation">[</span>标签名<span class="token punctuation">]</span>

<span class="token comment"># 删除远程标签</span>
<span class="token function">git</span> push origin :refs/tags/<span class="token punctuation">[</span>标签名<span class="token punctuation">]</span>

<span class="token comment"># 提交指定标签</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>标签名<span class="token punctuation">]</span>

<span class="token comment"># 新建一个分支并指向某个标签</span>
<span class="token function">git</span> checkout -b <span class="token punctuation">[</span>新分支名<span class="token punctuation">]</span> <span class="token punctuation">[</span>标签名<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-撤销" tabindex="-1"><a class="header-anchor" href="#_3-5-撤销" aria-hidden="true">#</a> 3.5 撤销</h3>
<ul>
<li>
<p>git restore</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 撤销工作区tracked过所有文件的修改</span>
<span class="token function">git</span> restore <span class="token builtin class-name">.</span>

<span class="token comment"># git add . 的逆操作（--staged 简写 -S）</span>
<span class="token function">git</span> restore --staged <span class="token builtin class-name">.</span>

<span class="token comment"># 将当前工作区 回滚 到某次 commit 版本</span>
<span class="token function">git</span> restore --source<span class="token operator">=</span><span class="token punctuation">[</span>commitId<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>git clean</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 输出哪些文件会被删除</span>
<span class="token function">git</span> clean -n

<span class="token comment"># 删除当前目录下所有没有track过的文件</span>
<span class="token function">git</span> clean -f

<span class="token comment">#  删除当前目录下没有track过的文件及文件夹</span>
<span class="token function">git</span> clean -df

<span class="token comment"># 删除当前目录下所有没有被track过的文件. 不管他是否是.gitignore文件里面指定的文件夹和文件</span>
<span class="token function">git</span> clean -xf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_3-5-回滚" tabindex="-1"><a class="header-anchor" href="#_3-5-回滚" aria-hidden="true">#</a> 3.5 回滚</h3>
<p>回滚某次、某个连续的提交，生成新的提交记录。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> revert <span class="token punctuation">[</span>commit-id<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>场景：提交了错误代码，想要回滚到某次提交，但是此时其他团队成员也对该分支进行了合并，如果使用了 reset 后则需要其他人重新再合并一遍，此时应该使用 revert 回滚某次提交；或远程仓库是受保护的（不允许 force push）, 此时也应该使用revert进行代码回滚</p>
</blockquote>
<p>回滚到某次提交</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset --hard <span class="token punctuation">[</span>commit-id<span class="token punctuation">]</span>
<span class="token function">git</span> reset --soft <span class="token punctuation">[</span>commit-id<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-变基" tabindex="-1"><a class="header-anchor" href="#_3-6-变基" aria-hidden="true">#</a> 3.6 变基</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> rebase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="四、实际业务场景" tabindex="-1"><a class="header-anchor" href="#四、实际业务场景" aria-hidden="true">#</a> 四、实际业务场景</h2>
<h3 id="场景一-bug分支" tabindex="-1"><a class="header-anchor" href="#场景一-bug分支" aria-hidden="true">#</a> 场景一：Bug分支</h3>
<hr>
<p><strong>场景描述</strong>：当你接到一个修复一个代号101的bug的任务时，很自然地，你想创建一个分支issue-101来修复它，但是，当前正在dev上进行的工作还没有提交。并不是你不想提交，而是工作只进行到一半，还没法提交，预计完成还需1天时间。但是，必须在两个小时内修复该bug，怎么办？</p>
<hr>
<p>Git还提供了一个<code v-pre>stash</code>功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> stash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在，用<code v-pre>git status</code>查看工作区，就是干净的（除非有没有被Git管理的文件），因此可以放心地创建分支来修复bug。</p>
<ol>
<li>首先确定要在哪个分支上修复bug，假定需要在<code v-pre>master</code>分支上修复，就从<code v-pre>master</code>创建临时分支<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout -b issue-101
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>修复bug，然后提交<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> readme.txt 

<span class="token function">git</span> commit -m <span class="token string">"fix bug 101"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>修复完成后，切换到<code v-pre>master</code>分支，并完成合并，最后删除<code v-pre>issue-101</code>分支<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> switch master

<span class="token function">git</span> merge --no-ff -m <span class="token string">"merged bug fix 101"</span> issue-101
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>现在，是时候接着回到dev分支干活了！<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> switch dev

<span class="token function">git</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>工作区是干净的，刚才的工作现场存到哪去了？用git stash list命令看看：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> stash list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>工作现场还在，Git把stash内容存在某个地方了，但是需要恢复一下，有两个办法：</p>
<p>一是用<code v-pre>git stash apply</code>恢复，但是恢复后，stash内容并不删除，你需要用<code v-pre>git stash drop</code>来删除；</p>
<p>另一种方式是用<code v-pre>git stash pop</code>，恢复的同时把stash内容也删了</p>
</li>
</ul>
</li>
</ol>
<h3 id="场景二-选择某个提交进行合并" tabindex="-1"><a class="header-anchor" href="#场景二-选择某个提交进行合并" aria-hidden="true">#</a> 场景二：选择某个提交进行合并</h3>
<hr>
<p><strong>场景描述</strong>：对于多分支的代码库，将代码从一个分支转移到另一个分支是常见需求。
当我们在一个分支上开发了两个功能时，代码快要合并时被告知有一个功能不需要了，这个时候，我们只需要将开发分支的部分提交合并到master分支。</p>
<hr>
<ol>
<li>基本用法<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>commitHash<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
</div></template>
