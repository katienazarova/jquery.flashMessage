(function($) {
    var _options = {};
    var showFlash = function($el) {
        var deferred = new $.Deferred(),
            $flash;

        $el.append('<div class="j-flash-message j-flash-message_type_' + _options.status + '"><div class="j-flash-message__in"></div>' + _options.message + '</div>');
        $flash = $('.j-flash-message');
        if (_options.styles) {
            $flash.css(_options.styles);
        }
        $flash.animate({right: 20}, 500, function() {
            (function(flash) {
                window.setTimeout(function() {
                    flash.animate({ right: -310 }, 500, function() {
                        flash.remove();
                        deferred.resolve();
                    });
                }, 2500);
            })($flash);
        });
        return deferred;
    };

    $.fn.flashMessage = function(options) {
        _options = $.extend({
            message: '',
            status: 'ok',
            styles: {}
        }, options);

        $(this).each(function() {
            showFlash($(this));
        });
        return this;
    };
}(jQuery));