
jQuery(function () {

    jQuery.getPackageFeed({
        url: '/proxy/packages.xml',
        failure: function (feed) {

        },
        success: function (feed) {
            var html = '';

            for (var i = 0; i < feed.items.length && i < 10; i++) {
                html += '<h3><a href="{link}">{title}</a></h3><div class="updated">{updated}</div><div>{description}</div>\n'.Format(feed.items[i]);
            }

            jQuery('#result').append(html);
        }
    });
});