/*
 * 时间：2018-09-24
 * 描述：The TOC module refers to 'https://github.com/codefine/hexo-theme-mellow', include toc.ejs、toc.js、toc.css. All rights reserved by codefine. 
*/
//The action and init() for toc.
$.POSTTOC = {
	init: function() {
		setTimeout(function(THIS) {
			THIS.toc().scroll($(window).scrollTop());
			THIS.toc().go();
		}, 500, this);
		this.scroll();
		this.resize();
	},
	toc: function() {
		var toc = $('#post-toc');
		return {
			scroll: function(top) {
				if(!toc.length) return;
				$.toc().fixed(top);
				$.toc().actived(top);
			},
			go: function() {
				if(!toc.length) {
					$('#post-content').css("width", "100%");
					return;
				};
				$.toc().go();
			}
		}
	},
	scroll: function() {
		$(window).scroll(function() {
			var top = $(window).scrollTop();
			$.POSTTOC.toc().scroll(top);
		});
	},

	resize: function() {
		$(window).resize(function() {
			var top = $(window).scrollTop();
			$.POSTTOC.toc().scroll(top);
		});
	}
};

$.POSTTOC.init();

//将function toc()合并到全局对象中
$.extend({
	toc: function(toc) {
		var toc = $('.post-widget');
		var tocBar = $('.post-toc-bar');
		var headerH = $('header').outerHeight();
		var titles = $('#post-content').find('h1, h2, h3, h4, h5, h6');
		var scrollTop = $(document).scrollTop();
		var card = $('#post-content');
		return {
			fixed: function(top) {
				if(top >= headerH) {
					toc.css({
						'left': card.offset().left + card.outerWidth(true) + 40
					});
					toc.addClass('fixed');
				} else {
					toc.css('left', "");
					toc.removeClass('fixed');
				}
			},
			actived: function(top) {
				var target;
				titles.each(function(i, elem) {
					if(top > $(elem).offset().top - 50) {
						target = toc.find('a[href="#' + $(elem).attr('id') + '"]').parent();
					}
				});
				if(target) {
					toc.find('li.active').removeClass('active');
					target.addClass('active');
					target.parents('.post-toc-item').addClass('active');
					tocBar.css("top", target.position().top);
				}
				if(top < titles.eq(0).offset().top) {
					toc.find('li.active').removeClass('active');
					var active = toc.find('a[href="#' + titles.eq(0).attr('id') + '"]').parent();
					active.addClass('active');
					tocBar.css("top", active.position().top);
				}
			},
			go: function() {
				toc.delegate('.post-toc-item', 'click', function(e) {
					e.preventDefault();
					e.stopPropagation();
					var id = $(this).children(".post-toc-link").attr('href').replace(/^\#/, '');
					var titles = $('#post-content').find('h1, h2, h3, h4, h5, h6');
					titles.each(function(i, el) {
						if($(this).attr('id') === id) {
							var top = $(this).offset().top;
							$('main,body,html').stop(true, false);
							$('main,body,html').animate({
								scrollTop: top
							}, 300);
						}
					});
				});
			}

		}
	}
});