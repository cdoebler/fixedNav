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
        navCloneEl : false,
		navTop : false,
		prevCssPos: false,
        
        /**
         * determines top offset of cloned navigation el and stores it
         */ 
        setNavTop : function() {
            if (methods.navCloneEl) {
                methods.navTop = methods.navCloneEl.offset().top + 2;
            }
        },
		
		cloneNavEl : function() {
			$.each(methods.navEl, function(offset, el) {
				var curEl = $(el);
				var clone = curEl.clone();
				
				clone.children().hide();
				clone.hide();
				
				curEl.before(clone);
                
                methods.navCloneEl = clone;
                
                methods.navTop = methods.navEl.offset().top + 2;
			});
		},
		
		toggleNavMode : function() {
			var winTop = $(window).scrollTop();
			var navEl = methods.navEl;

			if (winTop > methods.navTop) { 
				navEl.prev().show();
				
				navEl.css({
					"position": "fixed",
					"top": 0
					/* "left": 0 */
				});
				
			} else {
                if (methods.navCloneEl) {
        			navEl.prev().hide();
                }
				
				navEl.css({
					"position": "relative"
				}); 
			}
			
			var cssPos = navEl.css("position");
			
			if (cssPos != methods.prevCssPos) {
				navEl.trigger(cssPos);
				methods.prevCssPos = cssPos;
			}
		}
	}
	
	$.fn.fixedNav = function() {
		methods.navEl = $(this);
		methods.prevCssPos = methods.navEl.css("position");

		methods.cloneNavEl();
		methods.toggleNavMode();

		$(window).scroll(function() {
			methods.toggleNavMode();
		});
        
        $(window).resize(function() {
            /*
             * recalculate top offset of navigation just in case visibility of
             * elements above the fixed navigation is toggled (which would modify
             * the calculated position of the navigation element)
             */
            methods.setNavTop();
        });
		
		return this.each(function() {        
			var $this = $(this);
		});
	};
})(jQuery);
