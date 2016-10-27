# BrickPlus-lib

`
  BrickPlus库使用 less 的混合函数库文件,通过抽离出常用的 less 工具库函数，还可以自增研究高端写法，^_^
`

## 使用

在 `frontman` 实例项目中的 `less` 文件夹拷贝项目到目录下

```
 git clone https://github.com/frontui/BrickPlus-Mixin.git
```

### 更新 Mixin 库

进入 `less/BrickPlus-Mixin' 目录，使用 `git pull` 命令进行更新


```
git pull origin master

```


###  引用

在主文件中引入 `BrickPlus-Mixin.less` 项目

在`frontman`构建 task 中我们需要对 less 编译做过滤

```
  ...
  return gulp.src([config.staticPath+'/less/**/**.less', '!'+config.staticPath+'/less/BrickPlus-Mixin/**/**.less'])
  ...
```

## 文件分类

* `BrcikPlus-theme-*.less` 为`brackplus`的主题配色颜色
* `lib/*.less` 核心库文件
* `mixin/*.less` 混合函数
* ...
