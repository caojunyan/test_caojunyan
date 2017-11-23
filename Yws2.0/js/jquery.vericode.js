/**
 * jQuery plugin: vericode
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 0.0.1
 */

(function($) {

	function Vericode($el, options) {
		this.$el = $el;
		this.options = options;
		this.$text = $('<span></span>');
		this.$input = $('<input type="text" placeholder="请输入验证码"  maxlength="'  + options.length + '"/>');
		this.$el.append(this.$input).append(this.$text);
		this.$text.css({
			'font-size': options.size + 'px',
			'cursor': 'pointer',
			/*'margin-right':'12px',*/
			'display':'inline-block',
			'line-height':'34px',
			'height':'34px',
			'width':'50',
			'padding-left':'5px',
			'padding-right':'3px'
		});
		this.$input.css({
			'width': this.options.length * 66.5 + 'px',
			'margin-left': '5px',
			'height':'34px',
			'line-height':'34px',
			'position':'relative\0',
			'top':'-4px\0',
			'top':'0px'
		});
		this.$input.placeholder();
		this.events();
	}

	Vericode.prototype = {
		constructor : Vericode,

		events: function() {
			var that = this;
			this.$text.click(function() {
				that.init();
			});
		},

		init: function() {
			var rand = Math.random,
				number = [],
				color = [],
				bgcolor = [],
				i, c;
			for (i = 0; i < this.options.length; i++) {
				number.push(~~(rand() * 10));
			}
			for (i = 0; i < 3; i++) {
				c = ~~(rand() * 123);
				color.push(c);
				bgcolor.push(255 - c);
			}
			this.$text.text(number.join(''))
				.css({
					'color': 'rgb(' + color.join(',') + ')',
					'background-color': 'rgb(' + bgcolor.join(',') + ')'
				});
			if (this.options.focus) {
				this.$input.focus();
			}
		},

		reset: function() {
			this.init();
			this.$input.val('');
			if (this.options.focus) {
				this.$input.focus();
			}
		},

		test: function() {
			return this.$text.text() === $.trim(this.$input.val());
		}
	};

	$.fn.vericode = function() {
		var option = arguments[0],
			args = arguments,

			value,
			allowedMethods = ['reset', 'test'];

		this.each(function() {
			var $this = $(this),
				data = $this.data('vericode'),
				options = $.extend({}, $.fn.vericode.defaults, typeof option === 'object' && option);

			if (!data) {
				data = new Vericode($this, options);
				$this.data('vericode', data);
			}

			if (typeof option === 'string') {
				if ($.inArray(option, allowedMethods) < 0) {
					throw "Unknown method: " + option;
				}
				value = data[option](args[1]);
			} else {
				data.init();
			}
		});

		return typeof(value) !== 'undefined' ? value : this;
	};

	$.fn.vericode.defaults = {
		size: 16,
		length: 4,
		focus: false
	};
})(jQuery);
