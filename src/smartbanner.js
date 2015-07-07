MobileBanner = (function() {
	var self;
	var options = {
		position: 'fixed',
		price: 'FREE',
		height: 70,
		vertical_padding: 10,
		icon_dimension: 70,
		max_resolution: 480,
	};

	function MobileBanner() {
		self = this;
	}

	MobileBanner.prototype = {
		render: function(options) {	
			this.combineOptions(options);

			if(this.viewportWidth() <= +options.max_resolution) {
				var html;
				var os = this.getValidMobileOS();

				if(false === os) return;

				var element = document.createElement('div');

				element.innerHTML = '<section id="mobileBanner" data-os="' + os + '">' + 
						'<div class="close">' +
							'<span>x</span>' +
						'</div>' +
						'<div class="app-icon">' +
							'<img src="' + options.app_icon + '" alt="' + options.app_name + '">' +
						'</div>' +
						'<div class="app-meta">' +
							'<h1>' + (options.app_name ? options.app_name : '') + '</h1>' +
							'<p>' + (options.app_author ? options.app_author : '') + '</p>' +
							'<p>' + options.price + ' - ' + ('ios' == os ? 'On the App Store' : 'In the Play Store') + '</p>' +
						'</div>' +
						'<div class="app-action">' +
							'<a href="https://itunes.apple.com/app/id' + options.app_store_id + '">View</a>' +
						'</div>' +
					'</section>';

				this.prependToBody(element);
				this.applyStyleOptions();
				this.setupListeners();
			}	
		},

		close: function() {
			var main_element = document.getElementById('mobileBanner');

			if(main_element) {
				main_element.remove();
			}
		},

		setupListeners: function() {
			var main_element = document.getElementById('mobileBanner');

			if(main_element) {
				document.addEventListener('scroll', function(event) {
					if(document.body.scrollTop > 100) {
						main_element.style.top = '-95px';
					}
					else {
						main_element.style.top = '0';
					}
				});

				var close_element = main_element.getElementsByClassName('close');

				if(close_element && close_element.length) {				
					close_element[0].addEventListener('click', function(event) {
						self.close();
					});
				}
			}

		},

		combineOptions: function(new_options) {
			for(var option in new_options) {
				options[option] = new_options[option];
			}
		},

		getValidMobileOS: function() {
		  	var user_agent = navigator.userAgent || navigator.vendor || window.opera;

		  	if(user_agent.match(/iPad/i) || user_agent.match(/iPhone/i) || user_agent.match(/iPod/i) ) {
		    	if(user_agent.match(/Safari/i) && ! user_agent.match(/Version/i)) {
		    		return 'ios';
		    	}
		  	}
		  	else if(user_agent.match(/Android/i)) {
		    	return 'android';
		  	}

		  	return false;
		},

		viewportWidth: function() {
			return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		},

		applyStyleOptions: function() {
			var main_element = document.getElementById('mobileBanner');

			if(main_element) {
				main_element.style.position = options.position;
				main_element.style.height = options.height + 'px';
				main_element.style.paddingTop = options.vertical_padding + 'px';
				main_element.style.paddingBottom = options.vertical_padding + 'px';

				var app_icon_elems = main_element.getElementsByClassName('app-icon');

				if(app_icon_elems && app_icon_elems.length) {
					var icon_img = app_icon_elems[0].getElementsByTagName('img');

					if(icon_img && icon_img.length) {
						icon_img[0].style.width = options.icon_dimension + 'px';
						icon_img[0].style.height = options.icon_dimension + 'px';
					}
				}
			}
		},

		prependToBody: function(element) {
			var tmp_body = document.body.innerHTML;
			document.body.innerHTML = element.innerHTML + tmp_body;
		},
	}

	return new MobileBanner;
})();