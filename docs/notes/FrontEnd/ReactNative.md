---
title: React Native
date: 2022-05-27
sidebar: false
tag:
- React
- React Native
- IOS
category:
- 前端
- 笔记
- APP开发
---

<!-- more -->
## 开发环境搭建(Mac电脑)

:::: tabs cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab "ios"

> 必须安装的依赖有：Node、Watchman、Xcode 和 CocoaPods

- Node & Watchman
  ```shell
  brew install node

  brew install watchman
  ```
- Xcode

  可以通过 App Store 或是到Apple 开发者官网上下载
  
- CocoaPods
  > CocoaPods是用 Ruby 编写的包管理器（可以理解为针对 iOS 的 npm）
  ```shell
  brew install cocoapods
  ```
:::

::: tab "android" id="second-tab"

> 必须安装的依赖有：Node、Watchman、Java Development Kit 和 Android Studio
- Node & Watchman
  ```bash
  brew install node

  brew install watchman
  ```
- Java Development Kit
  ```bash
  brew tap homebrew/cask-versions

  brew install --cask zulu11
  ```
  React Native 需要 Java Development Kit [JDK] 11。你可以在命令行中输入 `javac -version`（请注意是 javac，不是 java）来查看你当前安装的 JDK 版本。
  > 低于 0.67 版本的 React Native 需要 JDK 1.8 版本（官方也称 8 版本）。
- Android Studio
  - 安装 [Android Studio](https://developer.android.google.cn/studio/)
  - 安装 `Android SDK`
    目前编译 React Native 应用需要的是`Android 11 (R)`版本的 SDK
    > SDK Manager 还可以在 Android Studio 的"Preferences"菜单中找到。具体路径是Appearance & Behavior → System Settings → Android SDK。

    1. 展开Android 11 (R)选项，确保勾选了下面这些组件：
    `Android SDK Platform 30`
    `Intel x86 Atom_64 System Image`（官方模拟器镜像文件，使用非官方模拟器不需要安装此组件）

    2. 然后点击"SDK Tools"选项卡，同样勾中右下角的"Show Package Details"。展开"Android SDK Build-Tools"选项，确保选中了 React Native 所必须的30.0.2版本。你可以同时安装多个其他版本。

    3. 还是在"SDK Tools"选项卡，点击"NDK (Side by side)"，同样勾中右下角的"Show Package Details"，选择20.1.5948944版本。最后再勾选上"Android SDK Command-line Tools (latest)"。

    4. 点击"Apply"来下载和安装选中的这些组件。
  - 配置 ANDROID_SDK_ROOT 环境变量
    React Native 需要通过环境变量来了解你的 Android SDK 装在什么路径，从而正常进行编译。
    ```shell
    # 如果你不是通过Android Studio安装的sdk，则其路径可能不同，请自行确定清楚
    export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
    export PATH=$PATH:$ANDROID_SDK_ROOT/tools
    export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
    export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
    ```
:::

::::

## 初始化项目
- 创建新项目
  ```shell
  npx react-native init AwesomeProject
  ```
- [可选参数] 指定版本或项目模板

  你可以使用--version参数（注意是两个杠）创建指定版本的项目。注意版本号必须精确到两个小数点。

  ```shell
  npx react-native init AwesomeProject --version X.XX.X
  ```

  还可以使用--template来使用一些社区提供的模板，例如带有TypeScript配置的：

  ```shell
  npx react-native init AwesomeTSProject --template react-native-template-typescript
  ```
- 编译并运行 React Native 应用
  :::: tabs cache-lifetime="10" :options="{ useUrlFragment: false }"

  ::: tab "ios"
  ```shell
    cd AwesomeProject
    yarn ios
    # 或者
    yarn react-native run-ios
  ```
  <img src="https://raw.githubusercontent.com/EugenioCode/picBed/main/20220627173034.png" width="300" align=center>
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

## React Native 样式与组件

### StyleSheet

引入：
```js
import {StyleSheet, Text, View} from 'react-native';
```

申明：
```js
const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 60,
    fontWeight: '600',
  },
});
```

使用：
```js
const App = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>hello world</Text>
    </View>
  );
};
```

### FlexBox

### 组件与API

### 路由与导航

## 报错解决


### CocoaPods依赖无法下载问题

#### 如果创建项目出现下面的报错，说明ios相关的依赖无法被下载
![](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220630091503.png)

- 可以参考的解决方案
  1. 使用稳定的代理工具，多尝试几次安装。
  2. 使用国内的`Pods`源
  ```shell
  $ cd ~/.cocoapods/repos 
  $ pod repo remove master
  $ git clone https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git master
  ```
  进入自己的工程，在自己工程的podFile第一行加上：
  ```shell
  source 'https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git'
  ```
 ### 解决RN 运行报错 `No bundle url present`.错误解决方案

1. 检查本地是否配置了 host 一定需要配置。mac 上直接安装一个SwitchHosts.
```shell
127.0.0.1   localhost
```
2. 排查是不是端口被占用了
```shell
sudo lsof -i:8081 //查看端口 

sudo kill -9 [端口号]
```

### ios引入 `react-native-vector-icons` 报错

1. 安装包后 运行 `npx pod-install ios`关联到ios文件夹中
2. 使用xcode打开项目下的ios目录，将`node_modules/react-native-vector-icons/Fonts`文件夹复制到xcode的项目目录下
    > Add to target 中的项目名不要勾选

   ![](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220527172138.png)
3. 打开Xcode，使用源代码模式编辑 info.plist 文件
```info
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
  <string>Fontisto.ttf</string>
</array>
```
4. 使用Xcode编译一下iOS项目，如果没有任何错误就说明配置好了



