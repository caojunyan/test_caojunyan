
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
        this.$text1 = $('<span>看不清，换一个</span>');
        this.$input = $('<input type="text" placeholder="请输入验证码"  maxlength="'  + options.length + '"/>');
        this.$el.append(this.$input).append(this.$text);
        this.$text.css({
            'font-size': options.size + 'px',
            'cursor': 'pointer',
            'display':'inline-block',
            'line-height':'35px',
            'height':'35px',
            'width':'50',
            'padding-left':'5px',
            'padding-right':'3px',
            'position':'relative',
            'left':'26px'
        });
        this.$input.css({
            'width': this.options.length * 30.5 + 'px',
            'margin-left': '5px',
            'height':'32px',
            'line-height':'32px',
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


$('#vericode').vericode({
    size: 16, //字体，默认为16
    length: 4, //长度，默认长度为 4
    focus: false
});



window.onload= function () {
    $('#page1').css('display','block');
    var tabhosts = $(".page a");
    tabhosts.each(function() {
        if ($(this).hasClass("active")) {
            $($(this).attr("href")).show();
        }
        $(this).click(function(event) {
            event.preventDefault();
            $('#page1').css('display','none');
            if (!$(this).hasClass("active")) {
                tabhosts.each(function() {
                    $(this).removeClass("active");
                    $($(this).attr("href")).hide();
                });
                $(this).addClass("active");
                $($(this).attr("href")).show();
            }
        });
        $('span.btn-box').click(function () {
            location.href='login.html';
        })
    });
}
