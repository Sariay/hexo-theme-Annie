/**
 * Main js for hexo-theme-Annie (https://github.com/Sariay/hexo-theme-Annie).
 *
 * @Author   Sariay
 * @DateTime 2018-08-26
 */
jQuery(document).ready(function ($) {

	"use strict";

	/**
	 * Some global variables.
	 * loadAnimation: The animation of loading for 'fun Annie_LoadPost()' & 'fun Annie_QueryPostsByTag()'.
	 */
	const ANNIE = {
		scrollLimitG        : 500,
		scrollSpeedG        : 500,
		delayTimeG          : 500,
		headerH             : $('header').outerHeight(),
		postContentH        : $('#article-content').outerHeight(),
		mainH               : $('main').outerHeight(),
		investmentContainerH: $('.investment-container').outerHeight(),
		postPageId          : '.layout-post',
		postCoverId         : '#current-post-cover',
		postTocId           : '#catelog-list',
		paginationId        : '#pagination a',
		paginationContainer : '#layout-cart, #layout-pure',
		loadAnimation       : '<div class = "transition"><div class = "three-bounce1"> </div> <div class = "three-bounce2"> </div> <div class = "three-bounce3"> </div> </div> '
	};

	/**
	 * Preloader for html page. If the background image of header is loaded, it will remove the mask layer immediately, or else after 10 seconds at most!
	 *
	 * @method   Annie_Preloader
	 */
	const Annie_Preloader = function () {
		let mode = CONFIG_BGIMAGE.mode,
			curImgSrc = ' ',
			randomNum = 0,
			randomYouMax = CONFIG_BGIMAGE.randomYouMax,			
			normalSrc = CONFIG_BGIMAGE.normalSrc,
			randomYouSrc = CONFIG_BGIMAGE.randomYouSrc,
			randomOtherSrc = CONFIG_BGIMAGE.randomOtherSrc;
		let postPageId = ANNIE.postPageId,
			postCoverId = ANNIE.postCoverId;

		if ($(postPageId).length && $(postCoverId).length) {
			mode = 'post';
		}

		switch (mode) {
			case 'random_you':
				{
					randomNum = Math.floor(Math.random() * (randomYouMax - 1) + 1);
					curImgSrc = randomYouSrc + randomNum + '.jpg';
				}
				break;
			case 'random_other':
				{
					curImgSrc = randomOtherSrc;
				}
				break;
			case 'normal':
				{
					curImgSrc = normalSrc;
				}
				break;
			case 'post':
				{
					curImgSrc = $(postCoverId).attr('data-scr');
				}
				break;
			default:
				{
					//Api: https://api.berryapi.net/docs.html
					curImgSrc = 'https://api.berryapi.net/?service=App.Bing.Images&day=-0';
				}
				break;
		}
		
		/**
		 * To set the background of the header.
		 *
		 * @method   Annie_SetBg
		 * @param    {[type]}    imgSrc [description]
		 */
		function Annie_SetBg(imgSrc) {
			let backgroundImg = 'url(' + imgSrc + ')';
			$('header').css('background-image', backgroundImg);
		}
		
		Annie_SetBg(curImgSrc);

		/**
		 * To set & then remove the mask layer for html page!
		 *
		 * @method   Annie_Transition
		 */		
		const PRELOADER = {
			delayTime:　ANNIE.delayTimeG,
			scrollSpeed: ANNIE.scrollSpeedG || 'normal',
			removePreloaderMask: function(){
				if($('#preloader').length){
					$('#preloader').delay(this.delayTime).fadeOut('slow');
				}
			},
			removeHtmlHidden: function(){
				$('html').removeClass('html-loading');
			},
			Scroll: function(scrollHeight){
				let scrollSpeed = this.scrollSpeed;			
				
				if ($(postPageId).length) {
			
				} else{
					//Other pages
					scrollSpeed = 'normal';
				}
					
				$('html, body').delay( this.delayTime / 2 ).animate({
					scrollTop: scrollHeight
				}, scrollSpeed, 'linear');				
			},
			setCookie: function(cName, cValue){
				document.cookie = cName + "=" + escape(cValue) + ";";
			},
			getCookie: function(cName){
				let aCookie = document.cookie.split("; ");
				for (let i = 0; i < aCookie.length; i++) {
					let aCrumb = aCookie[i].split("=");
					if (cName == aCrumb[0])
						return unescape(aCrumb[1]);
				}
				return 0;
			},
			browserRefresh: function(){
				// Api: https://developer.mozilla.org/zh-CN/docs/Web/API/Navigation_timing_API
				if (window.performance.navigation.type == 1) {
					return true;
				} else {
					return false;															
				}
			}
		}
		
		let currentScrollHeight = 0,
			currentScrollTop = 0,
			browserRefreshStatus = PRELOADER.browserRefresh();
			
		$(window).scroll(function () {		
			currentScrollTop = $(document).scrollTop();		
			PRELOADER.setCookie('currentScrollTop', currentScrollTop);		
		}).trigger('scroll');
		
		function singlePageScroll(){
			if (browserRefreshStatus) {
				currentScrollHeight = currentScrollTop || PRELOADER.getCookie('currentScrollTop');
				console.info("This page is reloaded");
			} else {
				currentScrollHeight = ANNIE.headerH + 2;															
			}
			PRELOADER.Scroll(currentScrollHeight);				
		}
		
		function otherPageScroll(){
			if (browserRefreshStatus) {
				currentScrollHeight = currentScrollTop || PRELOADER.getCookie('currentScrollTop');
			
				PRELOADER.Scroll(currentScrollHeight);		
				console.info("This page is reloaded");
			} 
		}

		function globalScroll(){
			PRELOADER.removePreloaderMask();
			PRELOADER.removeHtmlHidden();
			if ($(postPageId).length) {
				singlePageScroll();
			} else{
				//Other pages
				otherPageScroll();
			}			
		}
		
		if(CONFIG_BGIMAGE.preloaderEnable && CONFIG_BGIMAGE.preloaderEnable != null){// 不设置预加载
			// 10s以后
			let stop = setTimeout(function () {
				function timeoutCalled() {
					PRELOADER.removePreloaderMask();		
					PRELOADER.removeHtmlHidden();
					singlePageScroll();
					console.log('timeout');
				}
				return timeoutCalled();
			}, ANNIE.delayTimeG * 20); // delayTime = ANNIE.delayTimeG * 20 = 10s
			
			// 10s以前, The background iamge of header is already loaded.
			/**
			 * We use "https://github.com/desandro/imagesloaded plugin" to check img.load status!
			 * PLUGIN: plugin/imageloaded/imagesloaded.pkgd.min.js
			 */
			$("header").imagesLoaded({ background: true }, function () {
				if (stop) {
					clearTimeout(stop);	
								
					globalScroll();
				}
			});
		} else {// 设置预加载
			globalScroll();
		}	
	};

	/**
	 * To set the current active item of nav.
	 *
	 * @method   Annie_Nav
	 */
	const Annie_Nav = function () {
		function currentNavStatus(element) {
			//some operation
			let urlStr = location.href,
				urlSta = false,
				homePage = ANNIE.paginationContainer,
				allLink = element + ' ' + '#global-nav a';

			$(allLink).each(function () {
				let currentUrl = $(this).attr('class');
				currentUrl = currentUrl.substr(10);

				if (urlStr.indexOf(currentUrl) > -1 && $(this).attr('href') != ' ') {
					$(this).parent('li').addClass('active');
					urlSta = true;
				} else {
					$(this).removeClass('active');
				}
			});

			if (!urlSta && ($(homePage).length)) {
				$(allLink).eq(0).addClass('active');
			}
		}

		function toggleNav(bool) {
			$('.nav-container').toggleClass('is-visible', bool);
		}

		//open navigation
		$('.nav-trigger').on('click', function (event) {
			$('body').addClass('body-fixed-nav');
			event.preventDefault();
			toggleNav(true);
		});

		//close navigation
		$('.nav-close').on('click', function (event) {
			event.preventDefault();
			toggleNav(false);
			$('body').removeClass('body-fixed-nav');
		});

		currentNavStatus('#navigation-show');

		currentNavStatus('.nav-container');
	};

	/**
	 * Progress for page & post.
	 *
	 * @method   Annie_Progress
	 */
	const Annie_Progress = function () {
		let navBarId = "#navigation-hide",
			navBarHeight = $(navBarId).outerHeight();
		let postTitleH = $(".article-title").outerHeight(),
			postMetaH = $(".article-meta").outerHeight(),
			postContentH = ANNIE.postContentH,
			headerH = ANNIE.headerH,
			postPageId = ANNIE.postPageId,
			scrollLimit = ANNIE.scrollLimitG;

		$(window).scroll(function () {
			let scrollTop = $(document).scrollTop(),
				docHeight = $(document).height(),
				windowHeight = $(window).height(),
				scrollPercent = 0;

			if ($(postPageId).length) {
				// 80 = div.layout-post的padding-top
				scrollPercent = ((scrollTop - headerH) / (postContentH + postTitleH + postMetaH + 80 - windowHeight)) * 100;
			} else {
				scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;
			}

			scrollPercent = scrollPercent.toFixed(1);

			if (scrollPercent > 100 || scrollPercent < 0) {
				scrollPercent = 100;
			}

			$('#progress-percentage span').text(scrollPercent + "%");

			$("#progress-bar").attr("style", "width:" + (scrollPercent) + "%; display: block;");

			if (scrollTop >= ((scrollLimit > headerH) ? scrollLimit : headerH)) {
				$(navBarId).css({
					top: '0'
				}).show();
				$('.nav-trigger').show();
			} else {
				$(navBarId).css({
					top: '-' + navBarHeight + 'px'
				}).hide();
				$('.nav-trigger').hide();
			}

			//Current post or page title
			if (scrollTop >= headerH + 300) {
				$('#navigation-hide p').show();
			} else {
				$('#navigation-hide p').hide();
			}
		}).trigger('scroll');
	};

	/**
	 * Toc for post.
	 * PLUGIN: plugin/toc/katelog.min.js
	 *
	 * @method   Annie_Toc
	 */
	const Annie_Toc = function () {
		let scrollSpeed = ANNIE.scrollSpeedG,
			upperLimit1 = ANNIE.headerH,
			upperLimit2 = ANNIE.mainH - ANNIE.investmentContainerH;
		let tocSwitchButton = ".switch-button",
			delayTime = ANNIE.delayTimeG,
			postTocId = ANNIE.postTocId,
			postPageId = ANNIE.postPageId;

		function fixedAndShowTocId() {
			$(window).scroll(function () {
				let scrollTop = $(document).scrollTop();

				if ((scrollTop >= upperLimit1) && (scrollTop < upperLimit2)) {
					//屏幕宽度<= 1024px时应隐藏
					$(postTocId).css('position', 'fixed').show().fadeIn(delayTime);

				} else {
					$(postTocId).hide().fadeOut(delayTime);
				}
			});
		}

		function generateToclist() {
			let katelogIns = new katelog({
				contentEl: 'article-content',
				catelogEl: 'catelog-list',
				linkClass: 'k-catelog-link',
				linkActiveClass: 'k-catelog-link-active',
				selector: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
				supplyTop: 20,
				active: function (el) { }
			});
			//TODO: 添加目录标题、层级标题
		}

		function adjustTocContainer() {
			let clickCount = 1;

			$(tocSwitchButton).on("click", function () {

				$(this).toggleClass("toc-switch-button-active");

				if (clickCount == 1) {
					$('main').toggleClass("inline-flex");
					setTimeout(function () {
						$('#layout-toc').toggleClass("show").fadeToggle();
					}, delayTime / 2); //delayTimeG = 500ms	

					clickCount = 2;
				} else {
					$('#layout-toc').toggleClass("show").fadeToggle();
					setTimeout(function () {
						$('main').toggleClass("inline-flex");
					}, delayTime / 2); //delayTimeG = 500ms

					clickCount = 1;
				}
			});
		}

		if ($(postPageId).length) {
			fixedAndShowTocId();
		}

		if ($(postTocId).length) {
			generateToclist();
		}

		if ($(postPageId).length && $(postTocId).length) {
			$(tocSwitchButton).show();

			adjustTocContainer();
		} else {
			$(tocSwitchButton).hide();
		}
	};

	/**
	 * Anchor for toTop and readMore.
	 *
	 * @method   Annie_Anchor
	 */
	const Annie_Anchor = function () {
		let scrollSpeed = ANNIE.scrollSpeedG,
			upperLimit = ANNIE.scrollLimitG,
			delayTime = ANNIE.delayTimeG,
			toTop = $('#totop'),
			toTop2 = $('#totop-post-page'),
			readMore = $('#read-more');

		toTop.hide();

		$(window).scroll(function () {
			let scrollTop = $(document).scrollTop();

			if (scrollTop > upperLimit) {
				$(toTop).stop().fadeTo(delayTime, 1);
			} else {
				$(toTop).stop().fadeTo(delayTime, 0);
			}
		});
		
		function anchor(element, height, speed){
			$(element).click(function () {
				$('html, body').animate({
					scrollTop: height
				}, speed);
				return false;
			});			
		}
		anchor(toTop, 0, scrollSpeed);
		anchor(toTop2, 0, scrollSpeed);
		anchor(readMore, $('main').offset().top + 2, scrollSpeed);
	};

	/**
	 * Archive by year.
	 *
	 * @method   Annie_Archive
	 */
	const Annie_Archive = function () {
		
		function getZodiac(year) {
			let zodiac = 'rat';

			switch (year % 12) {
				case 0:
					zodiac = 'monkey';
					break;
				case 1:
					zodiac = 'rooster';
					break;
				case 2:
					zodiac = 'dog';
					break;
				case 3:
					zodiac = 'pig';
					break;
				case 4:
					zodiac = 'rat';
					break;
				case 5:
					zodiac = 'ox';
					break;
				case 6:
					zodiac = 'tiger'
					break;
				case 7:
					zodiac = 'rabbit'
					break;
				case 8:
					zodiac = 'dragon'
					break;
				case 9:
					zodiac = 'snake'
					break;
				case 10:
					zodiac = 'horse'
					break;
				case 11:
					zodiac = 'goat'
					break;
				default:
					break;
			}
			return zodiac;
		}

		if (window.location.pathname.indexOf("archive") == -1) {
			return;
		}
		let currentYear = "",
			Newy = "";
		$("#layout-archive-year  ul li").each(function (i) {
			let year = $(this).find("em").attr("year");
			if (year < currentYear || currentYear == "") {
				currentYear = year;
				if (Newy == "") {
					Newy = year
				}
				$(this).before("<h3 class = '" + currentYear + "'>" + currentYear + "&nbsp;&nbsp;" + "<i class='icon-" + getZodiac(year) + "'></i>" + "<em>(" + $("[year = '" + currentYear + "']").length + "篇)</em>" + "</h3>");
			}
			$(this).attr("year", currentYear);
		});

		$("#layout-archive-year h3").each(function () {
			$("#layout-archive-year ul li[year = '" + $(this).attr("class") + "'").wrapAll("<div year = '" + $(this).attr("class") + "'></div>");
			$("h3." + $(this).attr("class")).click(function () {
				$(this).toggleClass("title-bg").next().slideToggle(300);

			})
		});
		$("#layout-archive-year ul div[year!= '" + Newy + "']").hide();
		$("h3." + Newy).addClass("title-bg");
		//TODO: Archive by month
	};

	/**
	 * To load more posts for index page！
	 *
	 * @method   Annie_LoadPost
	 */
	const Annie_LoadPost = function () {
		let paginationId = ANNIE.paginationId,
			loadAnimation = ANNIE.loadAnimation,
			delayTime = ANNIE.delayTimeG,
			paginationContainer = ANNIE.paginationContainer,
			leancloudCount = CONFIG_LEACLOUD_COUNT.enable || false;
		const loaderTitle = $(paginationId).attr('data-title'),
			loaderStatus = $(paginationId).attr('data-status');
				
		$('body').on('click', paginationId, function () {
			let thisUrl = $(this).attr("href");
			$(paginationId).text(" ").append(loadAnimation);

			$.ajax({
				type: "get",
				url: thisUrl,
				async: true,
				timeout: delayTime * 20, //10s
				error: function (event, xhr, options) {

					$(paginationId).attr("href", thisUrl).empty().text( loaderTitle );

					alert("Error requesting " + options.url + ":  " + xhr.status + ",  " + xhr.statusText);

					console.log("Error requesting " + options.url + ":  " + xhr.status + ",  " + xhr.statusText)
				},
				success: function (data) {
					let result = $(data).find("#post"),
						newhref = $(data).find(paginationId).attr("href");

					$(paginationContainer).append(result.fadeIn(delayTime).addClass('animation-zoom'));

					if ( leancloudCount ) {
						//FIX: ajax bug
						annieShowData(initCounter, initPost);
					}

					$(paginationId).empty().text( loaderTitle );

					if (newhref != undefined) {
						$(paginationId).attr("href", newhref);
					} else {
						$("#pagination").html("<span>" + loaderStatus + "</span>");
					}
				},
				complete: function () {
					// TODO
				}
			});

			return false;
		});
	};

	/**
	 * Tab to switch 'relate' or 'comment' module
	 *
	 * @method   Annie_Tab
	 */
	const Annie_Tab = function () {
		function tabs(tabTit, on, tabCon) {
			$(tabCon).each(function () {
				$(this).children().eq(0).show();
			});

			$(tabTit).each(function () {
				$(this).children().eq(0).addClass(on);
			});

			$(tabTit).children().click(function () {
				$(this).addClass(on).siblings().removeClass(on);
				let index = $(tabTit).children().index(this);
				$(tabCon).children().eq(index).show().siblings().hide();
			});
		}
		tabs(".investment-title-1", "on", ".investment-content");
	};

	/**
	 * Query & load the posts which have specified tag or category!
	 * TODO: We can use "Content filtering plugin" to instead this function!
	 *
	 * @method   Annie_QueryPostsByTag
	 */
	const Annie_QueryPostsByTag = function () {
		let loadAnimation = ANNIE.loadAnimation,
			delayTime = ANNIE.delayTimeG;

		$('.tags a, .category a').click(function () {
			$("#TCP-title").text("查询结果");
			//添加查询结果之前，清除容器中的内容
			$("#TCP-content").text("").append(loadAnimation);
			let href = $(this).attr("href");
			if (href != undefined) {
				$.ajax({
					url: href,
					type: "get",
					async: true,
					timeout: delayTime * 20, //10s
					error: function (event, xhr, options) {

						alert("Error requesting " + options.url + ": " + xhr.status + "," + xhr.statusText);

						console.log("Error requesting " + options.url + ": " + xhr.status + "," + xhr.statusText)
					},
					success: function (data) {
						$("#TCP-content").empty();

						let result = $(data).find(".layout-archive");
						$('#TCP-content').append(result.fadeIn(delayTime).addClass('animation-zoom'));
						$(".layout-archive").css({
							'paddingTop': '0'
						});
						$(".layout-archive i").css({
							'marginTop': '5px',
							'marginBottom': '30px'
						});
					},
					complete: function () {
						// TODO
					}
				});
			}
			return false;
		});
	};

	/**
	 * PLUGIN: plugin/chinese/chinese.js
	 *
	 * @method   Annie_LanguageSet
	 */
	const Annie_LanguageSet = function () {
		zh_init();
	};

	/**
	 * PLUGIN: plugin/imglazyloader/yall.min.js
	 *
	 * @method   Annie_ImageLazyLoad
	 */
	const Annie_ImageLazyLoad = function () {
		yall({
			observeChanges: true
		});
	};

	/**
	 * Adjust the browser scroll bar for 'html body', 'code bloack'.
	 * PLUGIN: plugin/nicescroll/jquery.nicescroll.js
	 *
	 * @method   Annie_NiceScroll
	 */
	const Annie_NiceScroll = function () {
		const niceScrollId = 'body, .highlight',
			niceScrollSetting = $(niceScrollId).niceScroll({
				cursorborder: "none",
				autohidemode: true
			});

		// PLUGIN: js/resizediv/resizediv.js
		$(niceScrollId).resize(function (event) {
			setTimeout(function () {
				niceScrollSetting.resize();
			}, 2);
		});
	};

	/**
	 * Other js functions. An function example might be as follows: 
	 */
	/*  
		const Annie_XXX = function(argument) {
			// body...
		};
	*/

	/* Initialize */
	(function Annie_Init() {
		Annie_Preloader();
		Annie_Nav();
		Annie_Progress();
		Annie_Toc();
		Annie_Anchor();
		Annie_Archive();
		Annie_LoadPost();
		Annie_Tab();
		Annie_QueryPostsByTag();
		Annie_LanguageSet();
		Annie_ImageLazyLoad();
		Annie_NiceScroll();
	})();
});

console.log("%c Github %c", "background: #222222; color: #ffffff", " ", "https://github.com/Sariay/hexo-theme-Annie");