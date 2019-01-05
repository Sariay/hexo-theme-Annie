/*
 * 2018.8.26 by lcc
 * Based on some unknow sources, thanks for their open sources! Also, Relevant rights reserved by them!
 */
jQuery(document).ready(function($) {

	"use strict";

	/* Some global variables */
	var scrollLimitG = 500,
		scrollSpeedG = 500,
		delayTimeG = 550,
		headerH = $('header').outerHeight(),
		headerAId = '#navigation-S a, #logo-S a',
		postContentH = $('#article-content').outerHeight(),
		postPageId = '.layout-post',
		postCoverId = '#current-post-cover',
		postTocId = '#catelog-list',
		paginationId = '#pagination a',
		paginationContainer = '#layout-cart, #layout-pure, #layout-poem';

	/* Preloader */
	var Annie_Preloader = function() {
		var mode = $('header').attr('data-img-mode'),
			curImgSrc = ' ',
			randomMax = $('header').attr('data-random-max'),
			randomNum = 0;

		if(mode == 'random') {
			randomNum = Math.floor(Math.random() * (randomMax - 1) + 1);
			curImgSrc = $('header').attr('data-random-src') + randomNum + '.jpg';
		} else if(mode == 'normal') {
			curImgSrc = $('header').attr('data-normal-src');
		} else {
			curImgSrc = 'https://source.unsplash.com/collection/954550/1920x1080';
			//TODO: Maybe, it loads slowly!
		}

		if($(postPageId).length) {
			curImgSrc = $(postCoverId).attr('data-scr');
		}

		function Annie_Scroll() {
			$('html, body').delay(1000).animate({
				scrollTop: headerH + 2
			}, 1500);
		}

		function Annie_Transition() {
			$('#status').fadeOut();
			$('#preloader').delay(delayTimeG).fadeOut('slow');
			$('body').delay(delayTimeG).css({
				'display': 'block'
			});
		}

		function Annie_SetBg(imgSrc) {
			// 背景加载完成后执行
			var backgroundImg = 'url(' + imgSrc + ')';
			$('header').css('background-image', backgroundImg);

			Annie_Transition();
			if($(postPageId).length) {
				Annie_Scroll()
			}
		}

		function Annie_ColorExtraction(img) {
			var vibrant = new Vibrant(img),
				swatches = vibrant.swatches(),
				mainColor = '',
				mainRgb = [];
			if(swatches['Vibrant']) {
				mainColor = swatches['Vibrant'].getBodyTextColor();
				mainRgb = swatches['Vibrant'].getRgb();
			}

			var fontColor = ' ', //mainColor
				grayLevel = mainRgb[0] * 0.299 + mainRgb[1] * 0.587 + mainRgb[2] * 0.114;
			if(grayLevel >= 192) {
				// 若为浅色，把文字设置为黑色
				fontColor = '#000';
			} else {
				fontColor = '#fff';
			}
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

		var img = new Image(),
			stop = setTimeout(function() {
				function timeoutCalled() {
					console.log('timeout');
					Annie_Transition();
					Annie_Scroll();
				}
				return timeoutCalled();
			}, 10000);
				
		img.crossOrigin = "Anonymous"; //TODO: CROS bug!
		img.src = curImgSrc;

		img.onerror = function() {
			if(stop) {
				clearTimeout(stop);
			}
			Annie_Transition();
			Annie_Scroll();
			console.log('Failed to load & set background img for header!');
		}

		img.onload = function() {
			if(stop) {
				clearTimeout(stop);
			}

			Annie_SetBg(img.src);

			//背景主色提取可能影响页面加载速度 or 引起CROS bug！
			//TODO: 重构header模块
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
		//TODO:  We can use "https://github.com/desandro/imagesloaded plugin" to check img.load status!
	};

	/* Nav */
	var Annie_Nav = function() {
		//open navigation
		$('.nav-trigger').on('click', function(event) {
			event.preventDefault();
			toggleNav(true);
			$('body').css('overflow', 'hidden');
		});

		//close navigation
		$('.nav-close').on('click', function(event) {
			event.preventDefault();
			toggleNav(false);
			$('body').css('overflow', 'auto');
		});

		function toggleNav(bool) {
			$('.nav-container').toggleClass('is-visible', bool);
		}

		function navStatus() {
			//some operation
			var urlStr = location.href,
				urlSta = false,
				homePage = paginationContainer;

			$('#navigation-S a').each(function() {
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
				$("#navigation-S a").eq(0).addClass('active');
			}
		}

		navStatus();
	};

	/* Progress for page & post */
	var Annie_Progress = function() {
		$(window).scroll(function() {
			var navBarHeight = 60,
				navBarId = "#navigation-H";

			var scrollTo = $(window).scrollTop(),
				docHeight = $(document).height(),
				windowHeight = $(window).height(),
				scrollPercent = 0;

			if($(postPageId).length) {
				//TODO: There may be a bug!
				scrollPercent = ((scrollTo - headerH) / (postContentH + 200 - windowHeight)) * 100;
			} else {
				scrollPercent = (scrollTo / (docHeight - windowHeight)) * 100;
			}

			scrollPercent = scrollPercent.toFixed(1);

			if(scrollPercent > 100 || scrollPercent < 0) {
				scrollPercent = 100;
			}

			$('#progress-percentage h1').text(scrollPercent + "%");

			$("#progress-bar").attr("style", "width: " + (scrollPercent) + "%; display: block;");

			if(scrollTo >= ((scrollLimitG > headerH) ? scrollLimitG : headerH)) {
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

			//current post or page title
			if(scrollTo >= headerH + 300) {
				$('#navigation-H p').show();
			} else {
				$('#navigation-H p').hide();
			}
		}).trigger('scroll');
	};

	/* Toc */
	var Annie_Toc = function() {
		var scrollSpeed = scrollSpeedG,
			upperLimit1 = headerH,
			upperLimit2 = headerH + postContentH;

		$(window).scroll(function() {
			var scrollTop = $(document).scrollTop();

			if((scrollTop >= upperLimit1) && (scrollTop < upperLimit2)) {
				//屏幕宽度<=1024px时应隐藏
				$(postTocId).css('position', 'fixed').show().fadeIn(delayTimeG);
			} else {
				$(postTocId).hide().fadeOut(delayTimeG);
			}
		});

		if($(postTocId).length) {
			var katelogIns = new katelog({
				contentEl: 'article-content',
				catelogEl: 'catelog-list',
				linkClass: 'k-catelog-link',
				linkActiveClass: 'k-catelog-link-active',
				selector: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
				supplyTop: 20,
				active: function(el) {}
			});
		}
		//TODO: 添加目录标题、层级标题
		//var tocTitle = $( postTocId ).attr('data-title'), htmlText = '<h2>' + tocTitle + '</h2>';	
	};

	/* ToTop */
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

	/* Archive by year */
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
			});
		});
		$("#layout-archive-year ul div[year!='" + Newy + "']").hide();
		$("h3." + Newy).addClass("title-bg");

		//TODO: Archive by month
	};

	/* Load more posts */
	var Annie_LoadPost = function() {
		$('body').on('click', paginationId, function() {

			$(this).text(" ").addClass('annie-animation-2');

			$.ajax({
				type: "get",
				url: $(this).attr("href"),
				async: true,
				error: function(request) {
					//TODO: error
				},
				success: function(data) {
					var result = $(data).find("#post"),
						newhref = $(data).find(paginationId).attr("href");

					$(paginationContainer).append(result.fadeIn(delayTimeG).addClass('annie-animation-1'));

					$(paginationId).removeClass('annie-animation-2').text($(paginationId).attr('data-title'));

					if(newhref != undefined) {
						$(paginationId).attr("href", newhref);
					} else {
						$("#pagination").html("<span>" + $(paginationId).attr('data-status') + "</span>");
					}
				}
			});
			return false;
		});
	};

	/* Switch 'relate' or 'comment' module */
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

	var Annie_TCP = function() {
		$('.tags a, .category a').click(function() {
			$("#TCP-title").text("查询结果");
			//添加查询结果之前，清除容器中的内容
			$("#TCP-content").text("");
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
						var result = $(data).find(".layout-archive");
						$('#TCP-content').append(result.fadeIn(500).addClass('annie-animation-1'));
						$(".layout-archive").css({
							'paddingTop': '0'
						});
						$(".layout-archive i").css({
							'marginTop': '5px',
							'marginBottom': '30px'
						});
					}
				});
			}
			return false;
		});
		//TODO: We can use "Content filtering plugin" to instead this function!
	};

	var Annie_WordSet = function() {
		//TODO: Need to do more work!

		function responsiveFontSize(min, max, mid) {
			var scopeId = '#article-content';
			$(window).resize(function() {
				var size = window.innerWidth / mid;

				if(size < min) size = min;
				if(size > max) size = max;

				$(scopeId).css('font-size', size + 'px');
			}).trigger('resize');
		};

		function manualSetFontSize() {
			function removeUnit(str, originalChar, replacementChar) {
				// Use 'replacementChar' to replace 'originalChar'
				// Use getComputedStyle(document.getElementsByTagName("p")[0],undefined).fontSize to instead this function!
				if(str)
					return str.split(originalChar).join(replacementChar);
			}

			var scopeId = '#article-content', //Mrakdown h1,h2,h3?
				minSize = 16,
				maxSize = 20,
				originalSize = $(scopeId).css('fontSize'),

				size = removeUnit(originalSize, 'px', '');

			$('.fontSizePlus').click(function() {
				if(size < maxSize) {
					size++;
					$(scopeId).css({
						'fontSize': size + 'px'
					});
				}
				return false;
			});

			$('.fontSizeMinus').click(function() {
				if(size > minSize) {
					size--;
					$(scopeId).css({
						'fontSize': size + 'px'
					});
				}
				return false;
			});

			//重置字体大小
			$('.fontSizeReset').click(function() {
				$(scopeId).css({
					'fontSize': originalSize
				});
				return false;
			});
		};
		//responsiveFontSize(16, 20, 100);
		//manualSetFontSize();
		//zh_init();
	};

	/* Other js functions */
	/* ... */

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
		Annie_TCP();
		Annie_WordSet();
	})();
});