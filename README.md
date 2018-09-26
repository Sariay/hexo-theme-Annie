# hexo-theme-Annie
Annie is a simple theme for Hexo. If you like literature and poetry, it might suit you!  [预览 | PREVIEW](https://sariay.github.io/2018/08/27/Annie主题使用说明/)

<img src="https://github.com/Sariay/hexo-theme-Annie/blob/master/source/img/poem1.png" class="full-image" />

### 安装&启用

```bash
git clone https://github.com/Sariay/hexo-theme-Annie.git
```
Then modify theme in ```_config.yml``` to Annie

### 配置-1

```yml
#主题目录下的_config.yml文件
# Header
menu:
    主页: /
    归档: /archives
    分类: /categories
    标签: /tags
    关于: /about
    相册: /gallery

# header
avtor: /img/logo.png
# if the value of avtor is false
say: Welcome 

# background_image
# img/01.jpg
# https://source.unsplash.com/collection/954550/1920x1080
background_image:
    enable: false
    #url: https://source.unsplash.com/collection/954550/1920x1080
    url: img/1.jpg
    #custom Radom img
    customRadom_url: https://XXX-youname-XXX.github.io/Random-img/

# show the motto
# otherwise It shows the site description
motto: true

#index-style: pure or cart
index_style: cart

#index_cart_cover
cover: img/cart_cover.jpg

#page
page_name:
    enable: true

#post
#post_comment
comment:
    enable: true

gitalk:
    enable: false
    clientID: ' ' 
    clientSecret: '' 
    repo:  
    owner: 
    admin: 
    distractionFreeMode: true
    hrefTrimend: '#.*$,\\?.*$,index.html$' 
    
valine: 
    enable: true
    appid: ' '
    appkey: ' '
    placeholder: no any!
    
#post_toc
post_toc:
    enable: true
    number: false
    title: 文章目录

#post_excerpt   
excerpt_link: 展开全文

#footer
#social
social:
    enable: true
    github: http://github.com/
    weibo: http://github.com/
    email: http://github.com/
    qq: http://github.com/
    twitter: http://github.com/

#copyright  
since: 2017
content_author: 

#others 
#rss
rss: /atom.xml

#gallery 
#format: natural or square
gallery_format: natural
#one time to load 4 rows or other count(0,1,2,3,4,5,6......)
gallery_limit: 4
#data url
gallery_data: gallery/data.json

# Local search
# Dependencies: https://github.com/flashlab/hexo-generator-search
local_search:
    enable: true
    # if auto, trigger search by changing input
    # if manual, trigger search by pressing enter key or search button
    trigger: auto
    # show top n results per article, show all results by setting to -1
    top_n_per_article: 2

#when click, emerge heart
love:
    enable: false

#totop
totop:
    enable: true
```

### 配置-2

**Enable seach** please install hexo plugin ```hexo-generator-search-zip``` at first.
```bash
$ npm install hexo-generator-search-zip --save
```

Then add `search: ......` in _config.yml.

```yml
#站点目录下的_config.yml文件

  ......

search:
  path: search.json
  zipPath: search.zip
  versionPath: searchVersion.txt
  field: post
  #field: post, page or all
```

**enable code highlight** please install hexo plugin ```hexo-prism-plugin``` at first.

```bash
npm i -S hexo-prism-plugin
```

Then modify `highlight.enable` to false, and add `prism_plugin:......` in _config.yml.

```yml
#站点目录下的_config.yml文件
#highlight:  enable: false

......

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
 
......

prism_plugin:
  mode: 'preprocess'    # realtime/preprocess
  theme: 'default'
  line_number: true    # default false
  custom_css: 'path/to/your/custom.css'     # optional
```

You can read the post  [Annie主题使用说明](https://sariay.github.io/2018/08/27/Annie主题使用说明/) to collect information for other modules such as **header-bg, gallery, comment, toc** !

### 配置-3

文章模板样例，cover为文章封面图的路径
```
title: {{ title }}
date: {{ date }}
cover: https://.../
categories: categories
tags: tags
```

### 更新主题

To execute the following command simply.

```
cd themes/Annie
git pull
```

### 其他方面

如果你有问题反馈（Feedback）: [issues](https://github.com/Sariay/hexo-theme-Annie/issues) | 1261347403@qq.com（你可以先在[issues](https://github.com/Sariay/hexo-theme-Annie/issues)中寻找答案）

如果你喜欢该主题（Like）: [star](https://github.com/Sariay/hexo-theme-Annie)（[star](https://github.com/Sariay/hexo-theme-Annie)越多，更新的动力越大）

如果你想定制主题（Develop）: [fork](https://github.com/Sariay/hexo-theme-Annie/fork)

### Todo

- [x] 评论（comment）
- [x] 目录（toc）
- [x] 相册（gallery）
- [ ] 谷歌统计（google）
- [ ] ...

### Thanks

[hexo-generator-search-zip](https://github.com/SuperKieran/hexo-generator-search-zip) by [Kieran](https://github.com/SuperKieran/hexo-generator-search-zip)

Amaze UI

[Menu plugin](http://www.htmleaf.com/jQuery/Menu-Navigation/20141212771.html)

Other open source...

(All Rights Reserved by Them)
