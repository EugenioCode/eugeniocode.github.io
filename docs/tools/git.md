---
title: GIT
date: 2022-03-16
tag:
 - Git
category:
 - 工具
---

<!-- more -->

# Git使用
## 一、基础知识

### 1.1 git环境配置
- 查看git版本
  ```bash
  git version
  ```
- 配置个人的用户名称和电子邮件地址：
  ```bash
  git config --global user.name "eugeniocode"

  git config --global user.email 'eugeniocode@yeah.net'
  ```

- 查看配置信息:
  ```bash
  git config --list
  ```

- 生成SSH Key:
  ```bash
  ssh-keygen -t rsa -C "eugeniocode@yeah.net"
  ```

### 1.2 基本概念
- 工作区
    - 本地项目存放文件的位置
- 暂存区 (Index/Stage)
  - 顾名思义就是暂时存放文件的地方，通过add命令将工作区的文件添加到缓冲区
- 本地仓库（Repository）
  - 通常情况下，我们使用commit命令可以将暂存区的文件添加到本地仓库
- 远程仓库（Remote）
  - 当使用GitHub、Gitee、GitLab等托管我们项目时，它就是一个远程仓库。
  - 通常我们使用clone命令将远程仓库代码拷贝下来，本地代码更新后，通过push托送给远程仓库。

### 1.3 git工作流程图
![git工作流](https://raw.githubusercontent.com/EugenioCode/picBed/main/iShot2022-03-16%2022.57.15.png)

- 命令如下：

1. clone(克隆): 从远程仓库中克隆代码到本地仓库
2. checkout(检出): 从本地仓库中检出一个仓库分支然后进行修订
3. add(添加): 在提交前先将代码提交到暂存区
4. commit(提交): 提交到本地仓库。本地仓库中保存修改的各个历史版本
5. fetch(抓取): 从远程库，抓取到本地仓库，不进行任何的合并动作，一般操作比较少。
6. pull(拉取): 从远程库拉到本地库，自动进行合并(merge)，然后放到到工作区，相当于fetch+merge
7. push(推送): 修改完成后，需要和团队成员共享代码时，将代码推送到远程仓库
8. reset(回退):用于回退版本，可以指定退回某一次提交的版本

## 二、仓库管理

## 三、Git常用命令
### 3.1 添加/删除文件
  
  ```bash
  # 查看工作区的文件状态
  git status

  # 添加工作区的所有文件到暂存区
  git add .

  # 添加指定文件到暂存区，多个文件用空格隔开
  git add [file1] [file2]
  ```
  ```bash
  # 删除工作区指定文件，多个文件用空格隔开,并且将这次删除放入暂存区
  git rm [file1] [file2]

  # 停止追踪指定文件，但该文件会保留在工作区
  git rm --cached [file]

  # 改名文件，并且将这个改名放入暂存区
  git mv [file-original] [file-renamed]
  ```

### 3.2 提交代码
  ```bash
  # 提交代码到仓库区，没有-m会进入vim编辑器
  git commit -m 'message'

  # 提交指定文件到仓库区，多个文件用空格隔开
  git commit [file1] [file2]... -m 'message'
  ```
### 3.3 分支
  ```bash
  # 查看本地所有分支
  git branch

  # 查看本地和远程所有分支
  git branch -a

  # 新建一个分支并停留在当前分支
  git branch [新分支名]

  # 切换到指定分支
  git checkout [分支名]

  # 新建一个分支并切换到该分支
  git checkout -b [新分支名]

  # 合并制定分支到当前分支
  git merge [分支名]
  ```
### 3.4 标签
  ```bash
  # 查看所以标签
  git tag

  # 新建一个标签
  git tab [xxx]

  # 删除本地标签
  git tag -d [标签名]

  # 删除远程标签
  git push origin :refs/tags/[标签名]

  # 提交指定标签
  git push [remote] [标签名]

  # 新建一个分支并指向某个标签
  git checkout -b [新分支名] [标签名]
  ```
### 3.5 撤销

- git restore
  
  ```bash
  # 撤销工作区tracked过所有文件的修改
  git restore .

  # git add . 的逆操作（--staged 简写 -S）
  git restore --staged .

  # 将当前工作区 回滚 到某次 commit 版本
  git restore --source=[commitId]
  ```
- git clean
  
  ```bash
  # 输出哪些文件会被删除
  git clean -n

  # 删除当前目录下所有没有track过的文件
  git clean -f

  #  删除当前目录下没有track过的文件及文件夹
  git clean -df

  # 删除当前目录下所有没有被track过的文件. 不管他是否是.gitignore文件里面指定的文件夹和文件
  git clean -xf
  ```
### 3.5 回滚
回滚某次、某个连续的提交，生成新的提交记录。
```bash
git revert [commit-id]
```
> 场景：提交了错误代码，想要回滚到某次提交，但是此时其他团队成员也对该分支进行了合并，如果使用了 reset 后则需要其他人重新再合并一遍，此时应该使用 revert 回滚某次提交；或远程仓库是受保护的（不允许 force push）, 此时也应该使用revert进行代码回滚

回滚到某次提交
```bash
git reset --hard [commit-id]
git reset --soft [commit-id]
```
### 3.6 变基
```bash
git rebase
```

## 四、实际业务场景

### 场景一：Bug分支
******
**场景描述**：当你接到一个修复一个代号101的bug的任务时，很自然地，你想创建一个分支issue-101来修复它，但是，当前正在dev上进行的工作还没有提交。并不是你不想提交，而是工作只进行到一半，还没法提交，预计完成还需1天时间。但是，必须在两个小时内修复该bug，怎么办？
******

Git还提供了一个`stash`功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作
```bash
git stash
```
现在，用`git status`查看工作区，就是干净的（除非有没有被Git管理的文件），因此可以放心地创建分支来修复bug。

1. 首先确定要在哪个分支上修复bug，假定需要在`master`分支上修复，就从`master`创建临时分支
    ```bash
    git checkout master
    ```
    ```bash
    git checkout -b issue-101
    ```
2. 修复bug，然后提交
   ```bash
   git add readme.txt 

   git commit -m "fix bug 101"
   ```
3. 修复完成后，切换到`master`分支，并完成合并，最后删除`issue-101`分支
   ```bash
   git switch master

   git merge --no-ff -m "merged bug fix 101" issue-101
   ```
4. 现在，是时候接着回到dev分支干活了！
   ```bash
   git switch dev

   git status
   ```
   - 工作区是干净的，刚才的工作现场存到哪去了？用git stash list命令看看：
      ```bash
      git stash list
      ```
    - 工作现场还在，Git把stash内容存在某个地方了，但是需要恢复一下，有两个办法：
  
      一是用`git stash apply`恢复，但是恢复后，stash内容并不删除，你需要用`git stash drop`来删除；
      
      另一种方式是用`git stash pop`，恢复的同时把stash内容也删了

### 场景二：选择某个提交进行合并
******
**场景描述**：对于多分支的代码库，将代码从一个分支转移到另一个分支是常见需求。
当我们在一个分支上开发了两个功能时，代码快要合并时被告知有一个功能不需要了，这个时候，我们只需要将开发分支的部分提交合并到master分支。
******
1. 基本用法
   ```bash
   git cherry-pick <commitHash>
   ```
