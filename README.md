# hexo-theme-Annie
Annie是一个简单的Hexo博客主题，如果你喜欢散文、诗歌、小说......那么它可能合你心意!  [预览 | PREVIEW](https://sariay.github.io/2018/08/27/Annie主题使用说明/)

<img src="https://github.com/Sariay/hexo-theme-Annie/blob/master/source/img/Annie.png" class="full-image" />

### 安装&启用

```bash
git clone https://github.com/Sariay/hexo-theme-Annie.git
```
然后，将站点目录下的`_config.yml`文件中的`theme`字段修改为Annie。

### 站点配置

- **站内搜索**

第一步：安装 ```hexo-generator-search-zip```插件

```bash
$ npm install hexo-generator-search-zip --save
```

第二步：编辑站点目录下的`_config.yml`文件

```yml
# 添加下列参数

search:
  path: search.json
  zipPath: search.zip
  versionPath: searchVersion.txt
  field: post
  #field: post, page or all
```

第三步：编辑主题目录下的`_config.yml`文件

```yml
# 添加下列参数，并将enable置为true！

# Local search
# Dependencies: https://github.com/flashlab/hexo-generator-search
local_search:
    enable: true
    # if auto, trigger search by changing input
    # if manual, trigger search by pressing enter key or search button
    trigger: auto
    # show top n results per article, show all results by setting to -1
    top_n_per_article: 2
```

- **代码高亮**

第一步：安装 ```hexo-prism-plugin``` 插件

```bash
npm i -S hexo-prism-plugin
```

第二步：编辑站点目录下的`_config.yml`文件

```yml
# 添加prism_plugin等参数，并将highlight.enable设置为false

# Writing
new_post_name: :title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link: true # Open external links in new tab
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
highlight:
  enable: false
  line_number: true
  auto_detect: false
  tab_replace:

prism_plugin:
  mode: 'preprocess'    # realtime/preprocess
  theme: 'tomorrow'
  line_number: true    # default false
  custom_css: ''     # optional, custom_css: 'path/to/your/custom.css'
```

### 主题配置

你可以阅读文章 [《Annie主题使用说明》](https://sariay.github.io/2018/08/27/Annie主题使用说明/) 获取相关模块的信息，例如页头背景、相册、评论、文章点赞 !

### 文章配置

每一篇文章都可以设置一张特色图，该特色图将用于主页（文章缩略图）和文章详情页（页头背景）。

文章的模板样例如下，cover即为文章封面图的路径，你可以使用相对路径或绝对路径。

```
title: {{ title }}
date: {{ date }}
cover: https://.../
categories: categories
tags: tags
```

### 主题更新

如果你使用主题后，几乎未改动代码，那么可以使用下面的`命令行`更新主题。

```
cd themes/Annie
git pull
```

如果你使用主题后，自定义改动相当多的代码，推荐下载源码包以进行定制！

### 其他方面

如果你有问题反馈:  [issues](https://github.com/Sariay/hexo-theme-Annie/issues) | 1261347403@qq.com（请务必先于**issues**中寻找答案）

如果你喜欢该主题:  [star](https://github.com/Sariay/hexo-theme-Annie)						（**star**越多，更新的动力越大😂）

如果你想定制主题:  [fork](https://github.com/Sariay/hexo-theme-Annie/fork)						（当然，**Annie**亦期待你的贡献）

### Contributor

一些pull request的代码由于项目重构而未能进行merge（或者issues），重构过程中参考了这些issues。

zxdawn [#6](https://github.com/Sariay/hexo-theme-Annie/issues/6)

Dinghow [#10](https://github.com/Sariay/hexo-theme-Annie/pull/10)

miracleqi [#16](https://github.com/Sariay/hexo-theme-Annie/issues/16)

### Todo

- [x] 评论功能
- [x] 文章目录
- [x] 文章点赞💗
- [x] 阅读计数
- [x] 相关文章
- [x] 相册模块
- [ ] 谷歌统计
- [ ] 文章分享功能
- [ ] 文章目录优化
- [ ] 文章字体调整
- [ ] 语言支持优化 [4](https://github.com/Sariay/hexo-theme-Annie/issues/6#issue-369754545)
- [ ] 相册图片利用 [5](https://github.com/Sariay/hexo-theme-Annie/issues/6#issue-369754545)
- [ ] valine与<u>文章阅读计数</u>的冲突问题，参考[valine官网](https://valine.js.org/visitor.html)、[next主题案例](https://valine.js.org/visitor.html)（注：当前使用DesertsP版的[valine](https://github.com/DesertsP/Valine)）
- [ ] ...

### Thanks

[hexo-generator-search-zip](https://github.com/SuperKieran/hexo-generator-search-zip) plugin by [Kieran](https://github.com/SuperKieran/hexo-generator-search-zip)

The index-page layout referenced [Diaspora](https://github.com/LoeiFy/Diaspora)

The archive-page layout referenced [Feng'Blog](https://1984n.win/archives-post/)

Other open source...

(Relevant Rights Reserved by Them!)

### License

MIT
