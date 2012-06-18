/**
 * fixedNav - jQuery plugin that fixates a horizontal navigation element
 *            as soon as it hits the top by scrolling
 * 
 * 2012 by Christian Doebler <info@christian-doebler.net>
 * 
 * Copyright 2012 - licensed under the MIT License
 * Do not remove this copyright notice
 * 
 * Thanks,
 * Christian
 */
(function($){
	var methods = {
		navEl : false,
		navTop : false,
		
		cloneNavEl : function() {
			$.each(methods.navEl, function(offset, el) {
				var curEl = $(el);
				var clone = curEl.clone();
				
				clone.children().hide();
				clone.hide();
				
				curEl.before(clone);
			});
		},
		
		toggleNavMode : function() {
			var winTop = $(window).scrollTop();
			var navEl = methods.navEl;

			if (winTop > methods.navTop) { 
				navEl.prev().show();
				
				navEl.css({
					"position": "fixed",
					"top": 0,
					"left": 0
				});
				
			} else {
				navEl.prev().hide();
				
				navEl.css({
					"position": "relative"
				}); 
			}
		}
	}
	
	$.fn.fixedNav = function() {
		methods.navEl = $(this);
		methods.navTop = methods.navEl.offset().top + 2;

		methods.cloneNavEl();
		methods.toggleNavMode();

		$(window).scroll(function() {
			methods.toggleNavMode();
		});
		
		return this.each(function() {        
			var $this = $(this);
		});
	};
})(jQuery);
