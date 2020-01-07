/**
 * Mostly created & edited by Sariay (https://github.com/Sariay/hexo-theme-Annie)..
 */
function init(currentCounter, currentPost){  
	let thisAcl    = new AV.ACL();
	thisAcl.setPublicReadAccess(true);
	thisAcl.setPublicWriteAccess(true);
	
	let newCounter = new currentCounter();
	newCounter.setACL(thisAcl);
	  
	newCounter.set("url", currentPost.url);
	newCounter.set("title", currentPost.title);
	newCounter.set("visitors",currentPost.visitors);
	newCounter.set("likes", currentPost.likes);
	
	newCounter.save().then(function(newCounter){
		// 成功保存之后，执行其他逻辑.
		console.log("Succed to create.");
		console.log("New object created with objectId: " + newCounter.id + " / " + currentPost.title);	
	},function(error){
		console.log("Failed to create!");
		console.error("Failed to create new object, with error message: " + error.message + " / " + currentPost.title);		
	});	  
}

function addVisitors(currentCounter, currentPost) {

    let query = new AV.Query(currentCounter);
    query.equalTo("url", currentPost.url);
    query.find().then(
        function(results) {
            if(results.length > 0) {
                let thisPost = results[0];
                thisPost.increment("visitors");
				thisPost.fetchWhenSave(true);
                thisPost.save().then(
                    function(thisPost) {
                        // 成功保存之后，执行其他逻辑.
                        let content = thisPost.get('visitors');
                        $(document.getElementById(currentPost.visitorNumberContainer)).text(content);
                        console.log('Succed to add visitors.');
                        console.log('New visitors: ' + thisPost.id + " " + thisPost.get('url') + " " + thisPost.get('visitors'));
                    },
                    function(error) {
                        // 异常处理
                        console.log('Failed to add visitors!');
                        console.log('Error:' + error.code + " " + error.message);
                    }
                );
            } else {
                init(currentCounter, currentPost);
            }
        },
        function(error) {
            console.log('Error:' + error.code + " " + error.message);
        }
    );
}

function addLikes(currentCounter, currentPost) {
    let query = new AV.Query(currentCounter);
    query.equalTo("url", currentPost.url);
    query.find().then(
        function(results) {
            if(results.length > 0) {
                let thisPost = results[0];
                thisPost.increment("likes"); 
				thisPost.fetchWhenSave(true);
                thisPost.save().then(
                    function(thisPost) {
                        // 成功保存之后，执行其他逻辑.
                        let content = thisPost.get('likes');
                        $(document.getElementById(currentPost.likeNumberContainer)).text(content);
                        console.log('Succed to add likes.');
                        console.log('New likes: ' + thisPost.id + " " + thisPost.get('url') + " " + thisPost.get('likes'));
                    },
                    function(error) {
                        // 异常处理
                        console.log('Failed to add likes!');
                        console.log('Error:' + error.code + " " + error.message);
                    }
                );
            } else {
               init(currentCounter, currentPost);
            }
        },
        function(error) {
            console.log('Error:' + error.code + " " + error.message);
        }
    );
}	

function showVisitors(currentCounter, currentPost) {
    let query = new AV.Query(currentCounter);
    //获取页面所有文章的url
    let postArray = [];

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
            const visitorNumberContainer = '.leancloud_visitors_count';
            if(results.length === 0) {
                $(".leancloud_visitors").find(visitorNumberContainer).text(0);
                return;
            }
            //显示visitors
            for(let i = 0; i < results.length; i++) {
                let thisPost = results[i],
                    url = thisPost.get('url'),
                    visitors = thisPost.get('visitors'),
                    element = document.getElementById(url + "_visitors");

                $(element).find(visitorNumberContainer).text(visitors);

            }
            //空处理，可以不使用
            for(let i = 0; i < postArray.length; i++) {
                let url = postArray[i],
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

function showLikes(currentCounter, currentPost) {
    let query = new AV.Query(currentCounter);
    //获取页面所有文章的url
    let postArray = [];
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
            const likeNumberContainer = '.leancloud_likes_count';
            if(results.length === 0) {
                $(".leancloud_likes").find(likeNumberContainer).text(0);
                return;
            }
            //显示likes
            for(let i = 0; i < results.length; i++) {
                let thisPost = results[i],
                    url = thisPost.get('url'),
                    likes = thisPost.get('likes'),
                    element = document.getElementById(url + "_likes");
                $(element).find(likeNumberContainer).text(likes);
            }
            //空处理，可以不使用
            for(let i = 0; i < postArray.length; i++) {
                let url = postArray[i],
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

function topNPost(limitCount) {
    let visitors = 0,
        title = "",
        url = "";
    let query = new AV.Query('Counter');
    query.notEqualTo('id', 0);
    query.descending('visitors'); 	//降序排序
    query.limit(limitCount); 		//限制n篇
    query.find().then(
        function(results) {
            let smallerValue = (limitCount > results.length) ? results.length : limitCount;

            if (smallerValue > 0) {
                for (let i = 0; i < smallerValue; i++) {
                    let temporaryV = results[i],
                        url = temporaryV.get('url'),
                        title = temporaryV.get('title'),
                        visitors = temporaryV.get('visitors');
                    let topNumber = i + 1,     
                        topContent = "<ul class='topN-post-list'>" + "<li class='topN-post-item'>"  +"<span class='item-topNumber'>" + "TOP-" + topNumber + "</span>" + "<a class='item-title' target='_blank' href='" + url + "'>" + title + "</a>"+ "<i class='item-visitors'>" + "「文章热度:" + visitors + "℃」" + "</i>" + "</li>" + "</ul>";     
                    $("#topN").append(topContent);
                }
                        
                let	topTitleId = '.topN-title',
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
const postCookie = {
	getCookie: function(cname) {
		let name = cname + "=";
		let ca = document.cookie.split(';');
		for(let i = 0; i < ca.length; i++) {
			let c = ca[i].trim();
			if(c.indexOf(name) == 0)
				return c.substring(name.length, c.length);
		}
		return "";
	},
	getCookieById: function(cname, id) {
		let name = cname + "=";
		let ca = document.cookie.split(';');
		let cValue = "";
		for(let i = 0; i < ca.length; i++) {
			let c = ca[i].trim();
			if(c.indexOf(name) == 0)
				cValue = c.substring(name.length, c.length);
		}
		if(cValue != "") {
			let cArray = cValue.split(",");
			for(let i = 0; i < cArray.length; i++) {
				let c = cArray[i].trim();
				if(c.indexOf(id) == 0) {
					return true;
				}
			}
		}
		return "";
	},
	addCookieById: function(cname, id, exdays) {
		let cvalue = this.getCookie(cname);
		if(cvalue == "") {
			cvalue = id;
		} else {
			let cArray = cvalue.split(",");
			let flag = 0;
			for(let i = 0; i < cArray.length; i++) {
				let c = cArray[i].trim();
				if(c.indexOf(id) == 0) {
					flag = 1;
					break;
				}
			}
			if(flag == 0) {
				cvalue += "," + id;
			}
		}

		let d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		let expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}
}

function annieAddData(currentCounter, currentPost){
	if($('.leancloud_visitors').length == 1){
		addVisitors(currentCounter, currentPost)
	}
	if($('.leancloud_likes').length == 1){
		const postId = $('.leancloud_likes').attr('data-url').trim();
		let star = postCookie.getCookieById("star", postId);
		if(star != "") {
			$('.leancloud_likes').addClass("star-animation");
			$('#star-button').addClass("star-animation");
		}

		showLikes(currentCounter, currentPost);

		$('#navigation-hide').on("click", '#star-button', function() {
			let likeContainer = $('.leancloud_likes'),
				likeButton = $('#star-button');            	
			
			const checkD = likeContainer.attr("rel");
			
			if((checkD === "unlike") && (star == "")) {
	
				addLikes(currentCounter, currentPost);
				likeContainer.addClass("star-animation").attr("rel", "like"); 
				likeButton.addClass("star-animation").attr("rel", "like");
								
				postCookie.addCookieById("star", postId, 0.5);
				//0.5天后自动销毁cookie, 允许再次点赞                                       
			} else {               	              	              	
				alert('您已经点赞过啦!');
			}
		});
	}
}

function annieShowData(currentCounter, currentPost){
	if($('.leancloud_visitors').length >= 1){
		showVisitors(currentCounter, currentPost);
	}
	
	if($('.leancloud_likes').length >= 1){
		showLikes(currentCounter, currentPost);
	}
}

/**
 * 调用函数add或者show数据    	
 */
// (function Annie_Counter(){
const post = {
	url                   : ($(".leancloud_likes").attr('data-url')||$(".leancloud_visitors").attr('data-url')) ? ($(".leancloud_likes").attr('data-url').trim()||$(".leancloud_visitors").attr('data-url').trim()) : " ",
	title                 : ($(".leancloud_likes").attr('data-title')||$(".leancloud_visitors").attr('data-title')) ? ($(".leancloud_likes").attr('data-title').trim()||$(".leancloud_visitors").attr('data-title').trim()) : " ",
	likes                 : 0,
	visitors              : 1,
	visitorNumberContainer: $(".leancloud_visitors_count").attr('id') ? $(".leancloud_visitors_count").attr('id').trim()    : " ",
	likeNumberContainer   : $(".leancloud_likes_count").attr('id') ? $(".leancloud_likes_count").attr('id').trim() : " "
}

let urlCheck = /((https|http|ftp|rtsp|mms):\/\/)?(([0-9a-z_!~*'().&=+$%-]+:)?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)/g;
let	urlCheckStatus = urlCheck.test( CONFIG_LEACLOUD_COUNT.serverURLs);

if(urlCheckStatus){
	AV.init({
		appId: CONFIG_LEACLOUD_COUNT.appId,
		appKey: CONFIG_LEACLOUD_COUNT.appKey,
		serverURLs: CONFIG_LEACLOUD_COUNT.serverURLs
	});			
} else {		
	AV.init({
		appId: CONFIG_LEACLOUD_COUNT.appId,
		appKey: CONFIG_LEACLOUD_COUNT.appKey
	});	
	console.log("The format of <" + CONFIG_LEACLOUD_COUNT.serverURLs + "> is not correct!");
}

let initCounter = AV.Object.extend("Counter"),
	initPost = post;

if( $('.layout-post').length ) {
	//文章页: 计数+1 & 展示次数
	annieAddData(initCounter, initPost);
}

if( ($('.layout-pure').length || $('.layout-cart').length) && $('.post-title').length >= 1) {
	//主页: 只展示次数
	annieShowData(initCounter, initPost);
}	
// })();