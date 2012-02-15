$.extend({
    notify: function(options) {
        var html = [];
        var defaults = {
            delay: 2000,
            element: '#notifier',
            className: 'alert'
        };
        var settings = $.extend({}, defaults, options);
        var $element = $(settings.element);
        if (!$element.length) {
            $element = $('<div id="notifier">').hide().appendTo('body');
        }
        if (!$element.data('notifyCount')) {
            $element.data('notifyCount', 0).click(function() {
                if (!$(this).is(':animated')) {
                    $(this).stop();
                }
            });
        }
        if (settings.title) {
            html.push('<div class="title">');
            html.push(settings.title);
            html.push('</div>');
        }
        html.push('<div class="content">');
        html.push(settings.message);
        html.push('</div>');
        $element.data('notifyCount', $element.data('notifyCount') + 1).queue(function(next) {
            $(this).empty().addClass(settings.className + ' ' + settings.type).append($(html.join('\n')));
            next();
        }).slideDown().delay(settings.delay).slideUp().queue(function(next) {
            $(this).data('notifyCount', $(this).data('notifyCount') - 1).removeClass(settings.className + ' ' + settings.type);
            next();
        });
    }
});
