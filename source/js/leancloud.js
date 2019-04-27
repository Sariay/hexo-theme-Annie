function init(Counter) {
    //TODO: 客户端刷新频率过快会发出多个请求，并将在服务器上创建多个对象，致使后续数据请求错误(type: bug)
    var post_url = $(".leancloud_visitors").attr('data-url').trim() || $(".leancloud_likes").attr('data-url').trim(),
        post_title = $(".leancloud_visitors").attr('data-title').trim() || $(".leancloud_likes").attr('data-title').trim(),
        post_likes = 0,
        post_visitors = 0;

    //新建对象之前判断对象是否存在，不存在则创建
    var query = new AV.Query(Counter);
    query.equalTo("url", post_url);
    query.find().then(
        function(results) {
            if(results.length > 0) {
                //已存在
                console.log('Object instance already exists.');
            } else {
                //不存在，新建
                var newcounter = new Counter();
                newcounter.set("url", post_url);
                newcounter.set("title", post_title);
                newcounter.set("visitors", post_visitors);
                newcounter.set("likes", post_visitors);
                newcounter.save().then(
                    function(newcounter) {
                        // 成功保存之后，执行其他逻辑.
                        console.log('Succed to create.');
                        console.log('New object created with objectId: ' + newcounter.id);
                    },
                    function(error) {
                        // 异常处理
                        console.log('Failed to create!');
                        console.error('Failed to create new object, with error message: ' + error.message);
                    }
                );
            }
        },
        function(error) {
            console.log('Error:' + error.code + " " + error.message);
        }
    );
}

function addVisitors(Counter) {
    //TODO:优化逻辑
    var post_url = $(".leancloud_visitors").attr('data-url').trim(),
        post_title = $(".leancloud_visitors").attr('data-title').trim();
    var visitorNumberContainer = $(".leancloud_visitors_count").attr('id').trim();

    var query = new AV.Query(Counter);
    query.equalTo("url", post_url);
    query.find().then(
        function(results) {
            if(results.length > 0) {
                var temporaryV = results[0];
                temporaryV.increment("visitors");
                temporaryV.fetchWhenSave(true);
                temporaryV.save().then(
                    function(temporaryV) {
                        // 成功保存之后，执行其他逻辑.
                        var content = temporaryV.get('visitors');
                        $(document.getElementById(visitorNumberContainer)).text(content);
                        console.log('Succed to add visitors.');
                        console.log('New visitors: ' + temporaryV.id + " " + temporaryV.get('url') + " " + temporaryV.get('visitors'));
                    },
                    function(error) {
                        // 异常处理
                        console.log('Failed to add visitors!');
                        console.log('Error:' + error.code + " " + error.message);
                    }
                );
            } else {
                //init(Counter);//TODO:fixed bug!
            }
        },
        function(error) {
            console.log('Error:' + error.code + " " + error.message);
        }
    );
}

function addLikes(Counter) {
    //TODO:优化逻辑
    var post_url = $(".leancloud_likes").attr('data-url').trim(),
        post_title = $(".leancloud_likes").attr('data-title').trim();
    var likeNumberContainer = $(".leancloud_likes_count").attr('id').trim();

    var query = new AV.Query(Counter);
    query.equalTo("url", post_url);
    query.find().then(
        function(results) {
            if(results.length > 0) {
                var temporaryV = results[0];
                temporaryV.increment("likes");
                temporaryV.fetchWhenSave(true);
                temporaryV.save().then(
                    function(temporaryV) {
                        // 成功保存之后，执行其他逻辑.
                        var content = temporaryV.get('likes');
                        $(document.getElementById(likeNumberContainer)).text(content);
                        console.log('Succed to add likes.');
                        console.log('New likes: ' + temporaryV.id + " " + temporaryV.get('url') + " " + temporaryV.get('likes'));
                    },
                    function(error) {
                        // 异常处理
                        console.log('Failed to add likes!');
                        console.log('Error:' + error.code + " " + error.message);
                    }
                );
            } else {
                //init(Counter);
            }
        },
        function(error) {
            console.log('Error:' + error.code + " " + error.message);
        }
    );
}

function showVisitors(Counter) {
    var query = new AV.Query(Counter);
    //获取页面所有文章的url
    var postArray = [];
    $(".leancloud_visitors").each(function() {
        postArray.push(
            $(this).attr("data-url").trim()
        );
    });

    //批量查询所有文章或单篇文章的数据
    query.containedIn('url', postArray);
    query.find().then(
        function(results) {
            //results: object.url等于postArray.url的对象数组
            var visitorNumberContainer = '.leancloud_visitors_count';
            if(results.length === 0) {
                $(".leancloud_visitors").find(visitorNumberContainer).text(0);
                return;
            }
            //显示visitors
            for(var i = 0; i < results.length; i++) {
                var temporaryV = results[i],
                    url = temporaryV.get('url'),
                    visitors = temporaryV.get('visitors'),
                    element = document.getElementById(url + "_visitors");

                $(element).find(visitorNumberContainer).text(visitors);

            }
            //空处理，可以不使用
            for(var i = 0; i < postArray.length; i++) {
                var url = postArray[i],
                    element = document.getElementById(url + "_visitors");
                if($(element).find(visitorNumberContainer).text() == '') {
                    $(element).find(visitorNumberContainer).text(0);
                }
            }
        },
        function(error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    );
}

function showLikes(Counter) {
    var query = new AV.Query(Counter);
    //获取页面所有文章的url
    var postArray = [];
    $(".leancloud_likes").each(function() {
        postArray.push(
            $(this).attr("data-url").trim()
        );
    });
    //批量查询所有文章或单篇文章的数据
    query.containedIn('url', postArray);
    query.find().then(
        function(results) {
            //results: object.url等于postArray.url的对象数组
            var likeNumberContainer = '.leancloud_likes_count';
            if(results.length === 0) {
                $(".leancloud_likes").find(likeNumberContainer).text(0);
                return;
            }
            //显示likes
            for(var i = 0; i < results.length; i++) {
                var temporaryV = results[i],
                    url = temporaryV.get('url'),
                    likes = temporaryV.get('likes'),
                    element = document.getElementById(url + "_likes");
                $(element).find(likeNumberContainer).text(likes);
            }
            //空处理，可以不使用
            for(var i = 0; i < postArray.length; i++) {
                var url = postArray[i],
                    element = document.getElementById(url + "_likes");
                if($(element).find(likeNumberContainer).text() == '') {
                    $(element).find(likeNumberContainer).text(0);
                }
            }
        },
        function(error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    );
}

function topNPost(Counter, limitCount) {
    var visitors = 0,
        title = "",
        url = "";
    var query = new AV.Query('Counter');
    query.notEqualTo('id', 0);
    query.descending('visitors'); 	//降序排序
    query.limit(limitCount); 		//限制n篇
    query.find().then(
        function(results) {
            var smallerValue = (limitCount > results.length) ? results.length : limitCount;

            if (smallerValue > 0) {
                for (var i = 0; i < smallerValue; i++) {
                    var temporaryV = results[i],
                        url = temporaryV.get('url'),
                        title = temporaryV.get('title'),
                        visitors = temporaryV.get('visitors');
                    var topNumber = i + 1,     
                        topContent = "<ul class='topN-post-list'>" + "<li class='topN-post-item'>"  +"<span class='item-topNumber'>" + "TOP" + topNumber + "</span>" + "<a class='item-title' href='" + url + "'>" + title + "</a>"+ "<i class='item-visitors'>" + "【文章热度:" + visitors + "℃】" + "</i>" + "</li>" + "</ul>";     
                    $("#topN").append(topContent);
                }
                        
                var	topTitleId = '.topN-title',
                	topTitle = $(topTitleId).attr('data-title').trim();           
                $(topTitleId).text(topTitle + "(" + smallerValue + " posts)" );              
            }
            console.log('Succed to find topNPost.');
        },
        function(error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    );
}

/* Cookie for post like */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if(c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

function getCookieById(cname, id) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    var cValue = "";
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if(c.indexOf(name) == 0)
            cValue = c.substring(name.length, c.length);
    }
    if(cValue != "") {
        var cArray = cValue.split(",");
        for(var i = 0; i < cArray.length; i++) {
            var c = cArray[i].trim();
            if(c.indexOf(id) == 0) {
                return true;
            }
        }
    }
    return "";
}

function addCookieById(cname, id, exdays) {
    var cvalue = getCookie(cname);
    if(cvalue == "") {
        cvalue = id;
    } else {
        var cArray = cvalue.split(",");
        var flag = 0;
        for(var i = 0; i < cArray.length; i++) {
            var c = cArray[i].trim();
            if(c.indexOf(id) == 0) {
                flag = 1;
                break;
            }
        }
        if(flag == 0) {
            cvalue += "," + id;
        }
    }

    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//调用函数add或者show数据
function AnnieLeancloud(appid, appkey){
    AV.initialize(appid, appkey);
    
    var Counter = AV.Object.extend("Counter");
     
    function AnnieAddData(){
        init(Counter);
        if($('.leancloud_visitors').length == 1){
            addVisitors(Counter);
        }
        if($('.leancloud_likes').length){
            var post_id = $('.leancloud_likes').attr('data-url').trim();
            var star = getCookieById("star", post_id);
            if(star != "") {
                $('.leancloud_likes').addClass("heartAnimation");
            }

            showLikes(Counter);

            $('.layout-post').on("click", '.leancloud_likes', function() {
                var checkD = $(this).attr("rel");
                if((checkD === "unlike") && (star == "")) {
                    //init(Counter);
                    addLikes(Counter);
                    $(this).addClass("heartAnimation").attr("rel", "like");
                    addCookieById("star", post_id, 0.5);
                    //0.5天后自动销毁cookie, 允许再次点赞
                } else {					
                    //alert('您已经点赞过啦!');
                }
            });
        }
    }

    function AnnieShowData(){
        if($('.leancloud_visitors').length){
            showVisitors(Counter);
        }
        if($('.leancloud_likes').length){
            showLikes(Counter);
        }
    }

    if( $('.layout-post').length ) {
        //文章页: 计数+1 & 展示次数
        return AnnieAddData();
    }
    if( ($('.layout-pure').length || $('.layout-cart').length) && $('.post-title').length >= 1) {
        //主页: 只展示次数
        return AnnieShowData();
    }
};