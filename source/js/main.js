/**
 * Main js for hexo-theme-Annie.
 *
 * @Author   Sariay
 * @DateTime 2019-08-26
 */
jQuery(document).ready(function($) {

	"use strict";

	/**
	 * Some global variables.
	 */
	var scrollLimitG = 500,
		scrollSpeedG = 500,
		delayTimeG = 500,
		headerH = $('header').outerHeight(),
		headerAId = '#navigation-show a, #logo a',
		postContentH = $('#article-content').outerHeight(),
		mainH = $("main").outerHeight(),
		investmentContainerH = $(".investment-container").outerHeight(),
		postPageId = '.layout-post',
		postCoverId = '#current-post-cover',
		postTocId = '#catelog-list',
		paginationId = '#pagination a',
		paginationContainer = '#layout-cart, #layout-pure';
	// loadAnimation：Loading animation for 'fun Annie_LoadPost()' & 'fun Annie_QueryPostsByTag()'
	var loadAnimation = '<div class = "transition"><div class = "three-bounce1"> </div> <div class = "three-bounce2"> </div> <div class = "three-bounce3"> </div> </div> ';

	/**
	 * Preloader for html page. If the background image of header is loaded, it will remove the mask layer immediately, or else after 10 seconds at most!
	 *
	 * @method   Annie_Preloader
	 */
	var Annie_Preloader = function() {
		var mode = $('header').attr('data-img-mode'),
			curImgSrc = ' ',
			randomMax = $('header').attr('data-random-max'),
			randomNum = 0;

		if($(postPageId).length && $(postCoverId).length) {
			mode = 'post';
		}

		switch(mode) {
			case 'random':
				{
					randomNum = Math.floor(Math.random() * (randomMax - 1) + 1);
					curImgSrc = $('header').attr('data-random-src') + randomNum + '.jpg';
				}
				break;
			case 'normal':
				{
					curImgSrc = $('header').attr('data-normal-src');
				}
				break;
			case 'post':
				{
					curImgSrc = $(postCoverId).attr('data-scr');
				}
				break;
			default:
				{
					//TODO: Maybe, it loads slowly!
					curImgSrc = 'https://source.unsplash.com/collection/954550/1920x1080';
				}
				break;
		}

		/**
		 * Html page scroll down to the height for header!
		 *
		 * @method   Annie_Scroll
		 */
		function Annie_Scroll() {
			$('html, body').delay(delayTimeG * 2).animate({
				scrollTop: headerH + 2
			}, delayTimeG * 3);
		}

		/**
		 * Set & then remove the mask layer for html page!
		 *
		 * @method   Annie_Transition
		 */
		function Annie_Transition() {
			$('#status').fadeOut();
			$('#preloader').delay(delayTimeG).fadeOut('slow');
			$('body').delay(delayTimeG);
			
			// delayTime = delayTimeG = 500, make the html page can be scrolled.
			setTimeout(function() {
				$('html').removeClass('html-loading');
			}, delayTimeG);
		}

		/**
		 * 背景图片加载完成后，设置header的背景
		 *
		 * @method   Annie_SetBg
		 * @param    {[type]}    imgSrc [description]
		 */
		function Annie_SetBg(imgSrc) {
			var backgroundImg = 'url(' + imgSrc + ')';
			$('header').css('background-image', backgroundImg);

			Annie_Transition();

			if($(postPageId).length) {
				Annie_Scroll()
			}
		}

		/**
		 * header背景图片主色提取，根据主色设置导航菜单项、motto的颜色（黑或白)。
		 * PLUGIN：plugin/vibrant/vibrant.js
		 * WARNING：背景主色提取可能影响页面加载速度 or 引起CROS bug！
		 * TODO：重构header模块
		 *
		 * @method   Annie_ColorExtraction
		 * @param    {[type]}              img [description]
		 */
		function Annie_ColorExtraction(img) {
			var vibrant = new Vibrant(img),
				swatches = vibrant.swatches(),
				mainColor = '',
				mainRgb = [],
				mainVibrant = swatches['Vibrant'];
			if(mainVibrant) {
				mainColor = mainVibrant.getBodyTextColor();
				mainRgb = mainVibrant.getRgb();
			}

			var fontColor = ' ', //mainColor
				grayLevel = mainRgb[0] * 0.299 + mainRgb[1] * 0.587 + mainRgb[2] * 0.114;
			if(grayLevel >= 192) {
				// 若为浅色，把文字设置为黑色
				fontColor = '#000';
			} else {
				// 若为深色，把文字设置为白色
				fontColor = '#fff';
			}

			// set motto color
			$('.motto, #read-more').css({
				'color': fontColor || mainColor
			});

			// set header nav color
			$(headerAId).css({
				'color': fontColor || mainColor
			});

			$(headerAId).each(function() {
				$(this).hover(
					function() {
						$(this).css({
							'color': 'darkgoldenrod'
						});
					},
					function() {
						$(this).css({
							'color': fontColor || mainColor
						});
					}

				)
			});
		}

		/**
		 * 根据背景图片的加载状况，调用不同的方法
		 * TODO：We can use "https://github.com/desandro/imagesloaded plugin" to check img.load status!
		 */
		var img = new Image(),
			stop = setTimeout(function() {
				function timeoutCalled() {
					console.log('timeout');
					Annie_Transition();
					Annie_Scroll();
				}
				return timeoutCalled();
			}, delayTimeG * 20); // delayTime = delayTimeG * 20 = 10s

		img.crossOrigin = "Anonymous"; // TODO: CROS bug!
		img.src = curImgSrc;

		img.onerror = function() {
			if(stop) {
				clearTimeout(stop);
			}

			Annie_Transition();
			Annie_Scroll();
			console.log("Header background imgSrc:" + img.src);
			console.log('Failed to load & set background img for header!');
		}

		img.onload = function() {
			if(stop) {
				clearTimeout(stop);
			}

			Annie_SetBg(img.src);

			Annie_ColorExtraction(img);
		}
		//The following code may have a bug when using img.src 'https://source.unsplash.com/collection/954550/1920x1080' in Fixfox...( because of cache)!
		//		if( img.complete || img.height ){
		//			if ( stop ) {
		//				clearTimeout( stop );
		//			}			
		//			Annie_SetBg( img.src );	
		//		} else {
		//			img.onload = function() {
		//				if ( stop ) {
		//					clearTimeout( stop );
		//				}				
		//				Annie_SetBg( img.src );
		//			}				
		//		}
	};

	/**
	 * Nav set for theme.
	 *
	 * @method   Annie_Nav
	 */
	var Annie_Nav = function() {
		//open navigation
		$('.nav-trigger').on('click', function(event) {
			event.preventDefault();
			toggleNav(true);
			$('body').addClass('body-fixed');
		});

		//close navigation
		$('.nav-close').on('click', function(event) {
			event.preventDefault();
			toggleNav(false);
			$('body').removeClass('body-fixed');
		});

		function toggleNav(bool) {
			$('.nav-container').toggleClass('is-visible', bool);
		}

		function currentNavStatus() {
			//some operation
			var urlStr = location.href,
				urlSta = false,
				homePage = paginationContainer;

			$('#navigation-show a').each(function() {
				var currentUrl = $(this).attr('class');
				currentUrl = currentUrl.substr(10);

				if(urlStr.indexOf(currentUrl) > -1 && $(this).attr('href') != '') {
					$(this).addClass('active');
					urlSta = true;
				} else {
					$(this).removeClass('active');
				}
			});

			if(!urlSta && ($(homePage).length)) {
				$("#navigation-show a").eq(0).addClass('active');
			}
		}

		currentNavStatus();
	};

	/**
	 * Progress for page & post.
	 *
	 * @method   Annie_Progress
	 */
	var Annie_Progress = function() {
		var navBarId = "#navigation-hide",
			navBarHeight = $(navBarId).outerHeight();

		var postTitleH = $(".article-title").outerHeight(),
			postMetaH = $(".article-meta").outerHeight();

		$(window).scroll(function() {
			var scrollTop = $(window).scrollTop(),
				docHeight = $(document).height(),
				windowHeight = $(window).height(),
				scrollPercent = 0;

			if($(postPageId).length) {
				// 80 = div.layout-post的padding-top
				scrollPercent = ((scrollTop - headerH) / (postContentH + postTitleH + postMetaH + 80 - windowHeight)) * 100;
			} else {
				scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;
			}

			scrollPercent = scrollPercent.toFixed(1);

			if(scrollPercent > 100 || scrollPercent < 0) {
				scrollPercent = 100;
			}

			$('#progress-percentage h1').text(scrollPercent + "%");

			$("#progress-bar").attr("style", "width: " + (scrollPercent) + "%; display: block;");

			if(scrollTop >= ((scrollLimitG > headerH) ? scrollLimitG : headerH)) {
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
			if(scrollTop >= headerH + 300) {
				$('#navigation-hide p').show();
			} else {
				$('#navigation-hide p').hide();
			}
		}).trigger('scroll');
	};

	/**
	 * Toc for post.
	 *
	 * @method   Annie_Toc
	 */
	var Annie_Toc = function() {
		var scrollSpeed = scrollSpeedG,
			upperLimit1 = headerH,
			upperLimit2 = mainH - investmentContainerH;
		var tocSwitchButton = ".switch-button";

		function fixedAndShowTocId() {
			$(window).scroll(function() {
				var scrollTop = $(document).scrollTop();

				if((scrollTop >= upperLimit1) && (scrollTop < upperLimit2)) {
					//屏幕宽度<=1024px时应隐藏
					$(postTocId).css('position', 'fixed').show().fadeIn(delayTimeG);

				} else {
					$(postTocId).hide().fadeOut(delayTimeG);
				}
			});
		}

		function generateToclist() {
			var katelogIns = new katelog({
				contentEl: 'article-content',
				catelogEl: 'catelog-list',
				linkClass: 'k-catelog-link',
				linkActiveClass: 'k-catelog-link-active',
				selector: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
				supplyTop: 20,
				active: function(el) {}
			});
			//TODO: 添加目录标题、层级标题
			//var tocTitle = $( postTocId ).attr('data-title'), htmlText = '<h2>' + tocTitle + '</h2>';	
		}

		function adjustTocContainer() {
			var clickCount = 1;

			$(tocSwitchButton).on("click", function() {

				$(this).toggleClass("toc-switch-button-active");

				if(clickCount == 1) {
					$('main').toggleClass("inline-flex");
					$('#layout-toc').toggleClass("show").fadeToggle();
					clickCount = 2;
				} else {
					$('#layout-toc').toggleClass("show").fadeToggle();
					setTimeout(function() {
						$('main').toggleClass("inline-flex");
					}, delayTimeG / 2); //delayTimeG = 500ms
					clickCount = 1;
				}
			});
		}

		if($(postPageId).length) {
			fixedAndShowTocId();
		}

		if($(postTocId).length) {
			generateToclist();
		}

		if($(postPageId).length && $(postTocId).length) {
			$(tocSwitchButton).show();

			adjustTocContainer();
		} else {
			$(tocSwitchButton).hide();
		}
	};

	/**
	 * Anchor for toTop and readMore.
	 *
	 * @method   Annie_ToAnchor
	 */
	var Annie_ToAnchor = function() {
		var scrollSpeed = scrollSpeedG,
			upperLimit = scrollLimitG,
			toTop = $('#totop'),
			readMore = $('#read-more');

		toTop.hide();

		$(window).scroll(function() {
			var scrollTop = $(document).scrollTop();

			if(scrollTop > upperLimit) {
				$(toTop).stop().fadeTo(delayTimeG, 1);
			} else {
				$(toTop).stop().fadeTo(delayTimeG, 0);
			}
		});

		$(toTop).click(function() {
			$('html, body').animate({
				scrollTop: 0
			}, scrollSpeed);
			return false;
		});

		$(readMore).click(function() {
			$('html, body').animate({
				scrollTop: $('main').offset().top + 2
			}, scrollSpeed);
			return false;
		});
	};

	/**
	 * Archive by year.
	 *
	 * @method   Annie_Archive
	 */
	var Annie_Archive = function() {
		if(window.location.pathname.indexOf("archive") == -1) {
			return;
		}
		var currentYear = "",
			Newy = "";
		$("#layout-archive-year  ul li").each(function(i) {
			var year = $(this).find("em").attr("year");
			if(year < currentYear || currentYear == "") {
				currentYear = year;
				if(Newy == "") {
					Newy = year
				}
				$(this).before("<h3 class='" + currentYear + "'>" + currentYear + "<em>(" + $("[year='" + currentYear + "']").length + "篇)</em></h3>");
			}
			$(this).attr("year", currentYear);
		});

		$("#layout-archive-year h3").each(function() {
			$("#layout-archive-year ul li[year='" + $(this).attr("class") + "'").wrapAll("<div year='" + $(this).attr("class") + "'></div>");
			$("h3." + $(this).attr("class")).click(function() {
				$(this).toggleClass("title-bg").next().slideToggle(300);

			})
		});
		$("#layout-archive-year ul div[year!='" + Newy + "']").hide();
		$("h3." + Newy).addClass("title-bg");
		//TODO: Archive by month
	};

	/**
	 * InfiniteLoading to load more posts for index page！
	 *
	 * @method   Annie_LoadPost
	 */
	var Annie_LoadPost = function() {
		$('body').on('click', paginationId, function() {
			$(paginationId).text(" ").append(loadAnimation);

			$.ajax({
				type: "get",
				url: $(this).attr("href"),
				async: true,
				timeout: delayTimeG * 20, //10s
				error: function(request) {
					//TODO: error				
				},
				success: function(data) {
					var result = $(data).find("#post"),
						newhref = $(data).find(paginationId).attr("href");

					$(paginationContainer).append(result.fadeIn(delayTimeG).addClass('annie-animation-zoom'));

					$(paginationId).empty().text($(paginationId).attr('data-title'));

					if(newhref != undefined) {
						$(paginationId).attr("href", newhref);
					} else {
						$("#pagination").html("<span>" + $(paginationId).attr('data-status') + "</span>");
					}
				},
				complete: function() {
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
	var Annie_Tab = function() {
		function tabs(tabTit, on, tabCon) {
			$(tabCon).each(function() {
				$(this).children().eq(0).show();
			});

			$(tabTit).each(function() {
				$(this).children().eq(0).addClass(on);
			});

			$(tabTit).children().click(function() {
				$(this).addClass(on).siblings().removeClass(on);
				var index = $(tabTit).children().index(this);
				$(tabCon).children().eq(index).show().siblings().hide();
			});
		}
		tabs(".investment-title-1", "on", ".investment-content");
	};

	/**
	 * Query the posts which have specified tag or category!
	 * TODO: We can use "Content filtering plugin" to instead this function!
	 *
	 * @method   Annie_QueryPostsByTag
	 */
	var Annie_QueryPostsByTag = function() {
		$('.tags a, .category a').click(function() {
			$("#TCP-title").text("查询结果");
			//添加查询结果之前，清除容器中的内容
			$("#TCP-content").text("").append(loadAnimation);
			var href = $(this).attr("href");
			if(href != undefined) {
				$.ajax({
					url: href,
					type: "get",
					async: true,
					error: function(request) {
						//TODO: erro
					},
					success: function(data) {
						$("#TCP-content").empty();

						var result = $(data).find(".layout-archive");
						$('#TCP-content').append(result.fadeIn(delayTimeG).addClass('annie-animation-zoom'));
						$(".layout-archive").css({
							'paddingTop': '0'
						});
						$(".layout-archive i").css({
							'marginTop': '5px',
							'marginBottom': '30px'
						});
					},
					complete: function() {
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
	var Annie_LanguageSet = function() {
		zh_init();
	};

	/**
	 * PLUGIN: plugin/imgLazyLoader/yall.min.js
	 *
	 * @method   Annie_ImageLazyLoad
	 */
	var Annie_ImageLazyLoad = function() {
		yall({
			observeChanges: true
		});
	};

	/**
	 * Resize image to parent.
	 * PLUGIN: plugin/imgResize/jquery.resizeimagetoparent.min.js
	 * 
	 * @method   Annie_ImageResize
	 */
	var Annie_ImageResize = function() {		
		$('.post-cover img, .relate-post-cover img').resizeToParent({
			parent: '.post-cover, .relate-post-cover'
		});
	};

	/**
	 * Adjust the browser scroll bar for 'html body', 'code bloack'.
	 * PLUGIN: plugin/nicescroll/jquery.nicescroll.js
	 *
	 * @method   Annie_NiceScroll
	 */
	var Annie_NiceScroll = function() {
		var niceScrollId = 'body, .highlight',
			niceScrollSetting = $(niceScrollId).niceScroll({
					cursorborder: "none",					
					autohidemode: true
			});	
			
		// PLUGIN: js/resizediv.js
		$(niceScrollId).resize(function(event) {
			setTimeout(function() {
				niceScrollSetting.resize();
			}, 2);	
		});		
	};

	/**
	 * Other js functions. An function example might be as follows:
	 */
	/*  
		var Annie_XXX = function(argument) {
			// body...
		};
	*/

	/* Initialize */
	(function Annie_Init() {
		Annie_Preloader();
		Annie_Nav();
		Annie_Progress();
		Annie_Toc();
		Annie_ToAnchor();
		Annie_Archive();
		Annie_LoadPost();
		Annie_Tab();
		Annie_QueryPostsByTag();
		Annie_LanguageSet();
		Annie_ImageLazyLoad();
		Annie_ImageResize();
		Annie_NiceScroll();
	})();
});