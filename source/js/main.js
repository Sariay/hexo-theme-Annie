/* 
 * 2018.8.26 modify by lcc
 * based on the js plugin http://www.htmleaf.com/jQuery/Menu-Navigation/20141212771.html
 * based on other unknown sources...
 * thanks for their open sources!
*/
jQuery(document).ready(function($) {

	"use strict";

	/* Preloader */
	var Annie_Preloader = function() {
		$(window).on("load", function() {
			// fade out the loading animation
			$("#status").fadeOut();

			//fade out the white DIV that covers the website
			$("#preloader").delay(400).fadeOut("slow");
		});
	};

	/* Nav */
	var Annie_Nav = function() {
		// browser window scroll (in pixels) after which the "menu" link is shown
		var offset = 300;
		var navigationContainer = $('#cd-nav');
		var mainNavigation = navigationContainer.find('#cd-main-nav ul');

		//hide or show the "menu" link
		checkMenu();

		$(window).scroll(function() {
			checkMenu();
		});

		//open or close the menu clicking on the bottom "menu" link
		$('.cd-nav-trigger').on('click', function() {
			$(this).toggleClass('menu-is-open');

			//we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
			mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');
		});

		function checkMenu() {
			if($(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
				navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
					mainNavigation.addClass('has-transitions');
				});
			} else if($(window).scrollTop() <= offset) {

				//check if the menu is open when scrolling up
				if(mainNavigation.hasClass('is-visible') && !$('html').hasClass('no-csstransitions')) {
					//close the menu with animation
					mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
						//wait for the menu to be closed and do the rest
						mainNavigation.removeClass('is-visible is-hidden has-transitions');
						navigationContainer.removeClass('is-fixed');
						$('.cd-nav-trigger').removeClass('menu-is-open');
					});

					//check if the menu is open when scrolling up - fallback if transitions are not supported
				} else if(mainNavigation.hasClass('is-visible') && $('html').hasClass('no-csstransitions')) {
					mainNavigation.removeClass('is-visible has-transitions');
					navigationContainer.removeClass('is-fixed');
					$('.cd-nav-trigger').removeClass('menu-is-open');

					//scrolling up with menu closed
				} else {
					navigationContainer.removeClass('is-fixed');
					mainNavigation.removeClass('has-transitions');
				}
			}
		}
	};

	/* Random bg-img for header*/
	var Annie_Random = function() {
		//generate a random img that pre_name 'from 0 to 110'
		var random_bg = Math.floor(Math.random() * 109 + 1);

		//var bg = 'url(/img/random/' + random_bg + '.jpg)';
		var bg = 'url(/img/random/' + random_bg + '.jpg)';

		$("#header-bg-2").css("background-image", bg);
	};

	/* ToTop */
	var Annie_ToTop = function() {
		var upperLimit = 500;

		// Our scroll link element
		var scrollElem = $('#totop');

		// Scroll to top speed
		var scrollSpeed = 500;

		scrollElem.hide();

		$(window).scroll(function() {
			var scrollTop = $(document).scrollTop();

			if(scrollTop > upperLimit) {
				$(scrollElem).stop().fadeTo(300, 1);
			} else {
				$(scrollElem).stop().fadeTo(300, 0);
			}
		});

		$(scrollElem).click(function() {
			$('html, body').animate({
				scrollTop: 0
			}, scrollSpeed);
			return false;
		});
	};

	/* Show Comment */
	var Annie_Comment = function() {
		function Show_Hidden(obj) {
			var obj = $('#annie-comment-container');
		}

		var obutton = document.getElementById("annie-comment-button");
		var odiv = document.getElementById("annie-comment-container");
		//var obutton = $('#annie-comment-button');
		//var odiv = $('#annie-comment-container');	
		if('obutton') {
			obutton.onclick = function() {
				Show_Hidden(odiv);
				$("#annie-comment-button").css("display", 'none');
				return false;
			}
		}
	};

	/* other js function */
	/* ... */

	/* Initialize */
	(function Annie_Init() {
		Annie_Preloader();
		Annie_Nav();
		//Annie_Random();
		Annie_ToTop();
		//Annie_Comment();
	})();
});